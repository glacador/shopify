"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Placeholder Shopify IDs - Replace with actual IDs when available
const PLACEHOLDER_VARIANT_IDS = {
  COMPLETE_ONE: "PLACEHOLDER_VARIANT_ID_COMPLETE_1",
  COMPLETE_TWO: "PLACEHOLDER_VARIANT_ID_COMPLETE_2",
  SINGLE_ONE: "PLACEHOLDER_VARIANT_ID_SINGLE_1",
  SINGLE_TWO: "PLACEHOLDER_VARIANT_ID_SINGLE_2",
};

const PLACEHOLDER_SELLING_PLANS = {
  COMPLETE_ONE: "PLACEHOLDER_SELLING_PLAN_COMPLETE_1",
  COMPLETE_TWO: "PLACEHOLDER_SELLING_PLAN_COMPLETE_2",
  SINGLE_ONE: "PLACEHOLDER_SELLING_PLAN_SINGLE_1",
  SINGLE_TWO: "PLACEHOLDER_SELLING_PLAN_SINGLE_2",
};

const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || "shop.nailscope.org";

interface Offer {
  id: string;
  name: string;
  description: string;
  originalPrice: number;
  salePrice: number;
  savings: string;
  features: string[];
  bestValue?: boolean;
  plans: {
    one: {
      variantId: string;
      sellingPlanId: string;
      label: string;
      price: number;
    };
    two: {
      variantId: string;
      sellingPlanId: string;
      label: string;
      price: number;
    };
  };
}

const OFFERS: Record<string, Offer> = {
  complete: {
    id: "complete",
    name: "emuaidMAX Rescue Kit",
    description: "Complete 3-Step System for Maximum Results",
    originalPrice: 189.99,
    salePrice: 89.99,
    savings: "52%",
    bestValue: true,
    features: [
      "emuaidMAX First Aid Ointment (2oz)",
      "Therapeutic Foot Soak",
      "Penetrating Nail Oil",
      "Free Priority Shipping",
      "90-Day Money Back Guarantee",
    ],
    plans: {
      one: {
        variantId: PLACEHOLDER_VARIANT_IDS.COMPLETE_ONE,
        sellingPlanId: PLACEHOLDER_SELLING_PLANS.COMPLETE_ONE,
        label: "One-Time Purchase",
        price: 89.99,
      },
      two: {
        variantId: PLACEHOLDER_VARIANT_IDS.COMPLETE_TWO,
        sellingPlanId: PLACEHOLDER_SELLING_PLANS.COMPLETE_TWO,
        label: "Subscribe & Save 15%",
        price: 76.49,
      },
    },
  },
  single: {
    id: "single",
    name: "emuaidMAX First Aid",
    description: "Powerful Single Solution",
    originalPrice: 69.99,
    salePrice: 49.99,
    savings: "29%",
    features: [
      "emuaidMAX First Aid Ointment (2oz)",
      "Free Standard Shipping",
      "30-Day Money Back Guarantee",
    ],
    plans: {
      one: {
        variantId: PLACEHOLDER_VARIANT_IDS.SINGLE_ONE,
        sellingPlanId: PLACEHOLDER_SELLING_PLANS.SINGLE_ONE,
        label: "One-Time Purchase",
        price: 49.99,
      },
      two: {
        variantId: PLACEHOLDER_VARIANT_IDS.SINGLE_TWO,
        sellingPlanId: PLACEHOLDER_SELLING_PLANS.SINGLE_TWO,
        label: "Subscribe & Save 15%",
        price: 42.49,
      },
    },
  },
};

interface EmuaidBuyBoxProps {
  conditionCode?: string;
  patternCode?: string;
  primaryColor?: string;
}

export default function EmuaidBuyBox({
  conditionCode = "FTD",
  patternCode = "P1",
  primaryColor = "#2D5A7B",
}: EmuaidBuyBoxProps) {
  const [selectedOffer, setSelectedOffer] = useState<string>("complete");
  const [selectedPlan, setSelectedPlan] = useState<"one" | "two">("two");
  const [isLoading, setIsLoading] = useState(false);

  const offer = OFFERS[selectedOffer];
  const plan = offer.plans[selectedPlan];

  const handleCheckout = () => {
    setIsLoading(true);

    // Build checkout URL with UTM parameters
    const checkoutUrl = new URL(`https://${SHOPIFY_DOMAIN}/cart/add`);
    checkoutUrl.searchParams.set("id", plan.variantId);
    checkoutUrl.searchParams.set("quantity", "1");

    if (selectedPlan === "two") {
      checkoutUrl.searchParams.set("selling_plan", plan.sellingPlanId);
    }

    checkoutUrl.searchParams.set("return_to", "/checkout");
    checkoutUrl.searchParams.set("utm_source", "nailscope");
    checkoutUrl.searchParams.set("utm_medium", "quiz");
    checkoutUrl.searchParams.set("utm_campaign", patternCode);
    checkoutUrl.searchParams.set("utm_content", conditionCode);

    // In production, redirect to checkout
    // window.location.href = checkoutUrl.toString();

    // For now, log the URL and show alert
    console.log("Checkout URL:", checkoutUrl.toString());
    alert(`Checkout URL: ${checkoutUrl.toString()}\n\nNote: Replace placeholder IDs with actual Shopify variant and selling plan IDs.`);
    setIsLoading(false);
  };

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        {/* Header */}
        <div
          className="px-6 py-4 text-center text-white"
          style={{ backgroundColor: primaryColor }}
        >
          <p className="text-sm font-medium opacity-90">Based on your quiz results</p>
          <h2 className="text-xl md:text-2xl font-bold mt-1">
            Your Recommended Solution
          </h2>
        </div>

        <div className="p-6 md:p-8">
          {/* Offer Selection Tabs */}
          <div className="flex gap-4 mb-8">
            {Object.values(OFFERS).map((o) => (
              <button
                key={o.id}
                onClick={() => setSelectedOffer(o.id)}
                className={`flex-1 p-4 rounded-xl border-2 transition-all relative ${
                  selectedOffer === o.id
                    ? "border-current shadow-md"
                    : "border-gray-200 hover:border-gray-300"
                }`}
                style={{
                  borderColor: selectedOffer === o.id ? primaryColor : undefined,
                }}
              >
                {o.bestValue && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold text-white rounded-full"
                    style={{ backgroundColor: primaryColor }}
                  >
                    BEST VALUE
                  </span>
                )}
                <p className="font-semibold text-gray-900">{o.name}</p>
                <p className="text-sm text-gray-600 mt-1">{o.description}</p>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Product Image */}
            <div className="relative">
              <div className="aspect-square bg-gray-100 rounded-xl overflow-hidden flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg
                    className="w-24 h-24 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <p className="text-sm">Product Image</p>
                  <p className="text-xs mt-1">{offer.name}</p>
                </div>
              </div>

              {/* Savings Badge */}
              <div
                className="absolute top-4 right-4 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                style={{ backgroundColor: "#e53e3e" }}
              >
                <div className="text-center">
                  <p className="text-xs">SAVE</p>
                  <p className="text-lg">{offer.savings}</p>
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {offer.name}
              </h3>
              <p className="text-gray-600 mb-4">{offer.description}</p>

              {/* Pricing */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold" style={{ color: primaryColor }}>
                  ${plan.price.toFixed(2)}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ${offer.originalPrice.toFixed(2)}
                </span>
              </div>

              {/* Plan Selection */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => setSelectedPlan("two")}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    selectedPlan === "two"
                      ? "border-current bg-opacity-5"
                      : "border-gray-200"
                  }`}
                  style={{
                    borderColor: selectedPlan === "two" ? primaryColor : undefined,
                    backgroundColor: selectedPlan === "two" ? `${primaryColor}10` : undefined,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPlan === "two" ? "border-current" : "border-gray-300"
                        }`}
                        style={{
                          borderColor: selectedPlan === "two" ? primaryColor : undefined,
                        }}
                      >
                        {selectedPlan === "two" && (
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: primaryColor }}
                          />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">
                          {offer.plans.two.label}
                        </p>
                        <p className="text-sm text-gray-500">Cancel anytime</p>
                      </div>
                    </div>
                    <p className="font-bold" style={{ color: primaryColor }}>
                      ${offer.plans.two.price.toFixed(2)}
                    </p>
                  </div>
                </button>

                <button
                  onClick={() => setSelectedPlan("one")}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-all ${
                    selectedPlan === "one"
                      ? "border-current"
                      : "border-gray-200"
                  }`}
                  style={{
                    borderColor: selectedPlan === "one" ? primaryColor : undefined,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                          selectedPlan === "one" ? "border-current" : "border-gray-300"
                        }`}
                        style={{
                          borderColor: selectedPlan === "one" ? primaryColor : undefined,
                        }}
                      >
                        {selectedPlan === "one" && (
                          <div
                            className="w-3 h-3 rounded-full"
                            style={{ backgroundColor: primaryColor }}
                          />
                        )}
                      </div>
                      <p className="font-semibold text-gray-900">
                        {offer.plans.one.label}
                      </p>
                    </div>
                    <p className="font-bold text-gray-700">
                      ${offer.plans.one.price.toFixed(2)}
                    </p>
                  </div>
                </button>
              </div>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {offer.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 text-gray-700">
                    <svg
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: primaryColor }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button
                onClick={handleCheckout}
                disabled={isLoading}
                className="w-full py-4 px-8 rounded-xl text-white font-bold text-lg transition-all hover:shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ backgroundColor: primaryColor }}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Get Your Kit Now"
                )}
              </button>

              {/* Trust Badges */}
              <div className="flex items-center justify-center gap-6 mt-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Secure Checkout
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-5h2.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                  </svg>
                  Free Shipping
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
