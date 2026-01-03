// Analytics helpers for GA4 and Meta Pixel
// Uses Meta-compliant pattern codes (P1-P13) instead of condition codes

declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

// GA4 initialization
export function initGA4(measurementId: string) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag("js", new Date());
  gtag("config", measurementId);
}

// Meta Pixel initialization
export function initMetaPixel(pixelId: string) {
  if (typeof window === "undefined") return;

  const fbq: any = function (...args: any[]) {
    fbq.callMethod ? fbq.callMethod.apply(fbq, args) : fbq.queue.push(args);
  };
  fbq.push = fbq;
  fbq.loaded = true;
  fbq.version = "2.0";
  fbq.queue = [];
  window.fbq = fbq;

  fbq("init", pixelId);
  fbq("track", "PageView");
}

// Quiz events - Meta-compliant version
// Uses pattern codes (P1, P2, etc.) instead of condition codes (FTD, NPS, etc.)
export function trackQuizStarted() {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({ event: "quiz_started" });
  window.fbq?.("trackCustom", "QuizStarted");
}

export function trackQuizProgress(questionNumber: number, totalQuestions: number) {
  if (typeof window === "undefined") return;

  const progress = Math.round((questionNumber / totalQuestions) * 100);
  window.dataLayer?.push({
    event: "quiz_progress",
    question_number: questionNumber,
    progress_percent: progress,
  });
}

export interface QuizCompletedPayload {
  pattern_code: string; // P1, P2, etc. - Meta-compliant
  engagement_level: "high" | "medium" | "low";
  quiz_score: number;
}

export function trackQuizCompleted(externalPayload: QuizCompletedPayload) {
  if (typeof window === "undefined") return;

  // DataLayer gets compliant data only
  window.dataLayer?.push({
    event: "quiz_completed",
    ...externalPayload,
  });

  // Meta Lead event with compliant data
  window.fbq?.("track", "Lead", {
    content_category: "quiz",
    content_name: externalPayload.pattern_code, // P1, not FTD
    value: externalPayload.quiz_score,
    currency: "USD",
  });
}

export function trackResultsViewed(patternCode: string) {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({
    event: "results_viewed",
    pattern_code: patternCode,
  });

  window.fbq?.("track", "ViewContent", {
    content_category: "results",
    content_name: patternCode,
  });
}

export function trackBuyBoxViewed(patternCode: string) {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({
    event: "buybox_viewed",
    pattern_code: patternCode,
  });
}

export function trackAddToCart(patternCode: string, productId: string, price: number) {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({
    event: "add_to_cart",
    pattern_code: patternCode,
    product_id: productId,
    value: price,
    currency: "USD",
  });

  window.fbq?.("track", "AddToCart", {
    content_ids: [productId],
    content_type: "product",
    value: price,
    currency: "USD",
  });
}

export function trackCheckoutInitiated(patternCode: string, productId: string, price: number) {
  if (typeof window === "undefined") return;

  window.dataLayer?.push({
    event: "checkout_initiated",
    pattern_code: patternCode,
    product_id: productId,
    value: price,
    currency: "USD",
  });

  window.fbq?.("track", "InitiateCheckout", {
    content_ids: [productId],
    content_type: "product",
    value: price,
    currency: "USD",
  });
}

// Mapping from condition codes to pattern codes (for internal use only)
export const CONDITION_TO_PATTERN: Record<string, string> = {
  ftd: "P1",
  nps: "P2",
  csd: "P3",
  agn: "P4",
  tnf: "P5",
  bsp: "P6",
  oly: "P7",
  prn: "P8",
  itn: "P9",
  ysn: "P10",
  rdl: "P11",
  prf: "P12",
  gns: "P13",
};

export function getPatternCode(conditionSlug: string): string {
  return CONDITION_TO_PATTERN[conditionSlug.toLowerCase()] || "P1";
}
