// Analytics with Meta-compliant tracking

declare global {
  interface Window {
    dataLayer: any[]
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}

export const CONDITION_TO_PATTERN: Record<string, string> = {
  FTD: 'P1', NPS: 'P2', CSD: 'P3', AGN: 'P4', TNF: 'P5', BSP: 'P6',
  OLY: 'P7', PRN: 'P8', ITN: 'P9', RDL: 'P10', PRF: 'P11', YSN: 'P12', GNS: 'P13',
  // Lowercase versions
  ftd: 'P1', nps: 'P2', csd: 'P3', agn: 'P4', tnf: 'P5', bsp: 'P6',
  oly: 'P7', prn: 'P8', itn: 'P9', rdl: 'P10', prf: 'P11', ysn: 'P12', gns: 'P13',
}

export const URGENCY_TO_ENGAGEMENT: Record<string, string> = {
  H: 'ENG_H', MH: 'ENG_MH', M: 'ENG_M', L: 'ENG_L',
}

export function initGA4(measurementId?: string) {
  if (typeof window === 'undefined' || !measurementId) return
  window.dataLayer = window.dataLayer || []
  function gtag(...args: any[]) { window.dataLayer.push(args) }
  window.gtag = gtag
  gtag('js', new Date())
  gtag('config', measurementId)
}

export function initMetaPixel(pixelId?: string) {
  if (typeof window === 'undefined' || !pixelId) return
  const fbq: any = function(...args: any[]) {
    fbq.callMethod ? fbq.callMethod.apply(fbq, args) : fbq.queue.push(args)
  }
  fbq.push = fbq
  fbq.loaded = true
  fbq.version = '2.0'
  fbq.queue = []
  window.fbq = fbq
  fbq('init', pixelId)
}

export function trackQuizStarted() {
  if (typeof window === 'undefined') return
  window.dataLayer?.push({ event: 'quiz_started' })
  window.fbq?.('trackCustom', 'QuizStarted')
}

export function trackQuizProgress(questionNumber: number, totalQuestions: number) {
  if (typeof window === 'undefined') return
  const progress = Math.round((questionNumber / totalQuestions) * 100)
  window.dataLayer?.push({
    event: 'quiz_progress',
    question_number: questionNumber,
    progress_percent: progress,
  })
}

export function trackQuizCompleted(data: {
  conditionCode: string
  urgencyBand?: string
  urgencyScore?: number
}) {
  if (typeof window === 'undefined') return

  // Meta-compliant external payload
  const patternCode = CONDITION_TO_PATTERN[data.conditionCode] || 'P0'
  const engagementLevel = data.urgencyBand ? (URGENCY_TO_ENGAGEMENT[data.urgencyBand] || 'ENG_M') : 'ENG_M'
  const quizScore = data.urgencyScore ? Math.round(((data.urgencyScore - 45) / 55) * 10) : 5

  window.dataLayer?.push({
    event: 'quiz_completed',
    pattern_code: patternCode,
    engagement_level: engagementLevel,
    quiz_score: quizScore,
  })

  window.fbq?.('track', 'Lead', {
    content_name: patternCode,
    value: quizScore,
    currency: 'USD',
  })
}

export function trackPageView() {
  if (typeof window === 'undefined') return
  window.dataLayer?.push({ event: 'page_view', page_path: window.location.pathname })
  window.fbq?.('track', 'PageView')
}

export function trackResultsViewed(patternCode: string) {
  if (typeof window === 'undefined') return

  window.dataLayer?.push({
    event: 'results_viewed',
    pattern_code: patternCode,
  })

  window.fbq?.('track', 'ViewContent', {
    content_category: 'results',
    content_name: patternCode,
  })
}

export function trackBuyBoxViewed(patternCode: string) {
  if (typeof window === 'undefined') return

  window.dataLayer?.push({
    event: 'buybox_viewed',
    pattern_code: patternCode,
  })
}

export function trackAddToCart(patternCode: string, productId: string, price: number) {
  if (typeof window === 'undefined') return

  window.dataLayer?.push({
    event: 'add_to_cart',
    pattern_code: patternCode,
    product_id: productId,
    value: price,
    currency: 'USD',
  })

  window.fbq?.('track', 'AddToCart', {
    content_ids: [productId],
    content_type: 'product',
    value: price,
    currency: 'USD',
  })
}

export function trackCheckoutInitiated(patternCode: string, productId: string, price: number) {
  if (typeof window === 'undefined') return

  window.dataLayer?.push({
    event: 'checkout_initiated',
    pattern_code: patternCode,
    product_id: productId,
    value: price,
    currency: 'USD',
  })

  window.fbq?.('track', 'InitiateCheckout', {
    content_ids: [productId],
    content_type: 'product',
    value: price,
    currency: 'USD',
  })
}

export function getPatternCode(conditionSlug: string): string {
  return CONDITION_TO_PATTERN[conditionSlug] || CONDITION_TO_PATTERN[conditionSlug.toUpperCase()] || 'P1'
}
