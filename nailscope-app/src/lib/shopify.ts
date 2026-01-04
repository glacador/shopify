// Shopify configuration with placeholder IDs

export const SHOPIFY_CONFIG = {
  storeDomain: process.env.NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN || 'shop.nailscope.org',
}

export type OfferType = 'complete' | 'single'
export type QuantityType = 'one' | 'two'

export const OFFERS = {
  complete: {
    key: 'complete' as const,
    label: 'Complete System',
    productName: 'emuaidMAX Rescue Kit™',
    color: '#0033A0',
    plans: {
      one: {
        perDay: '$2.63',
        price: '$80.49',
        originalPrice: '$146.34',
        discount: '45%',
        variantId: process.env.NEXT_PUBLIC_COMPLETE_ONE_VARIANT_ID || 'PLACEHOLDER',
        sellingPlanId: process.env.NEXT_PUBLIC_COMPLETE_ONE_SELLING_PLAN || 'PLACEHOLDER',
        quantity: 1,
      },
      two: {
        perDay: '$2.56',
        price: '$153.90',
        originalPrice: '$292.68',
        discount: '47%',
        variantId: process.env.NEXT_PUBLIC_COMPLETE_TWO_VARIANT_ID || 'PLACEHOLDER',
        sellingPlanId: process.env.NEXT_PUBLIC_COMPLETE_TWO_SELLING_PLAN || 'PLACEHOLDER',
        quantity: 2,
      },
    },
    oneTime: {
      perDay: '$2.96',
      price: '$88.90',
      originalPrice: '$146.34',
      variantId: process.env.NEXT_PUBLIC_COMPLETE_ONETIME_VARIANT_ID || 'PLACEHOLDER',
      quantity: 1,
    },
  },
  single: {
    key: 'single' as const,
    label: 'Single Solution',
    productName: 'emuaidMAX™',
    color: '#B80C2A',
    plans: {
      one: {
        perDay: '$1.89',
        price: '$56.70',
        originalPrice: '$80',
        discount: '29%',
        variantId: process.env.NEXT_PUBLIC_SINGLE_ONE_VARIANT_ID || 'PLACEHOLDER',
        sellingPlanId: process.env.NEXT_PUBLIC_SINGLE_ONE_SELLING_PLAN || 'PLACEHOLDER',
        quantity: 1,
      },
      two: {
        perDay: '$1.53',
        price: '$92.10',
        originalPrice: '$160',
        discount: '42%',
        variantId: process.env.NEXT_PUBLIC_SINGLE_TWO_VARIANT_ID || 'PLACEHOLDER',
        sellingPlanId: process.env.NEXT_PUBLIC_SINGLE_TWO_SELLING_PLAN || 'PLACEHOLDER',
        quantity: 2,
      },
    },
    oneTime: {
      perDay: '$2.13',
      price: '$63.90',
      originalPrice: '$80.00',
      variantId: process.env.NEXT_PUBLIC_SINGLE_ONETIME_VARIANT_ID || 'PLACEHOLDER',
      quantity: 1,
    },
  },
}

export const OFFER_IMAGES = {
  complete: 'https://framerusercontent.com/images/anLtSGSsPtGillzxJXWzjpNtLI.png',
  single: 'https://framerusercontent.com/images/si3AMbtsEXEZqc9ZG22CujjJC0.png',
}

export function buildCartUrl(variantId: string, quantity: number, sellingPlanId?: string): string {
  if (variantId === 'PLACEHOLDER' || variantId.startsWith('PLACEHOLDER')) {
    return '#placeholder'
  }
  const domain = SHOPIFY_CONFIG.storeDomain
  let url = `https://${domain}/cart/add?id=${variantId}&quantity=${quantity}`
  if (sellingPlanId && sellingPlanId !== 'PLACEHOLDER') {
    url += `&selling_plan=${sellingPlanId}`
  }
  url += '&return_to=/checkout'
  return url
}

export function getWorkingUTMs(): Record<string, string> {
  if (typeof window === 'undefined') return {}
  const params = new URLSearchParams(window.location.search)
  const utms: Record<string, string> = {}
  ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(key => {
    const val = params.get(key)
    if (val) utms[key] = val
  })
  return utms
}
