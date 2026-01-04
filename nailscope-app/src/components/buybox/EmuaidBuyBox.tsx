'use client'

import { useState } from 'react'
import Image from 'next/image'
import { OFFERS, OFFER_IMAGES, buildCartUrl, type OfferType, type QuantityType } from '@/lib/shopify'

interface Props {
  conditionCode: string
  patternCode: string
}

export function EmuaidBuyBox({ conditionCode, patternCode }: Props) {
  const [offerType, setOfferType] = useState<OfferType>('complete')
  const [quantity, setQuantity] = useState<QuantityType>('one')
  const [showOneTime, setShowOneTime] = useState(false)

  const offer = OFFERS[offerType]
  const plan = offer.plans[quantity]

  const handleCheckout = (isSubscription: boolean) => {
    const variantId = isSubscription ? plan.variantId : offer.oneTime.variantId
    const sellingPlanId = isSubscription ? plan.sellingPlanId : undefined
    const qty = isSubscription ? plan.quantity : offer.oneTime.quantity

    const url = buildCartUrl(variantId, qty, sellingPlanId)

    if (url === '#placeholder') {
      alert('Shopify not configured yet. Add variant IDs to .env.local')
      return
    }

    window.location.href = url
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
      <div className="py-4 px-5 text-center text-white font-bold" style={{ background: offer.color }}>
        CHOOSE YOUR PLAN
      </div>

      <div className="p-5">
        {/* Toggle */}
        <div className="flex bg-gray-100 rounded-xl p-1 gap-1 mb-4">
          {(['complete', 'single'] as OfferType[]).map((type) => (
            <button
              key={type}
              onClick={() => setOfferType(type)}
              className={`flex-1 py-3 rounded-lg font-semibold text-sm transition-all ${
                offerType === type ? 'text-white' : 'text-gray-600'
              }`}
              style={{ background: offerType === type ? OFFERS[type].color : 'transparent' }}
            >
              {OFFERS[type].label}
            </button>
          ))}
        </div>

        {/* Product Image */}
        <div className="text-center mb-4">
          <div className="relative w-48 h-28 mx-auto">
            <Image
              src={OFFER_IMAGES[offerType]}
              alt={offer.productName}
              fill
              className="object-contain"
              unoptimized
            />
          </div>
          <div className="font-bold mt-2" style={{ color: offer.color }}>{offer.productName}</div>
        </div>

        {/* Quantity */}
        <div className="flex gap-2 mb-4">
          {(['one', 'two'] as QuantityType[]).map((qty) => (
            <button
              key={qty}
              onClick={() => setQuantity(qty)}
              className={`flex-1 p-3 rounded-xl border-2 text-left ${
                quantity === qty ? 'border-current' : 'border-gray-200'
              }`}
              style={{ borderColor: quantity === qty ? offer.color : undefined }}
            >
              <div className="font-bold text-sm">{qty === 'one' ? 'One Person' : 'Two People'}</div>
              <div className="text-xs text-gray-500">{qty === 'one' ? '90-Day Protocol' : '2+ nails affected'}</div>
            </button>
          ))}
        </div>

        {/* Price */}
        <div className="rounded-2xl p-4 mb-4" style={{ background: `${offer.color}10` }}>
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-extrabold" style={{ color: offer.color }}>{plan.perDay}</span>
            <span className="text-sm text-gray-500">per day</span>
            <span className="ml-auto bg-green-600 text-white text-sm font-bold px-2 py-1 rounded-full">
              {plan.discount} off
            </span>
          </div>
          <div className="text-sm">
            <span className="font-semibold">Billed today: {plan.price}</span>
            <span className="text-red-500 line-through ml-2">{plan.originalPrice}</span>
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={() => handleCheckout(true)}
          className="w-full py-4 rounded-xl text-white font-bold text-lg transition-all hover:opacity-90"
          style={{ background: offer.color }}
        >
          Start My 90-Day Protocol →
        </button>

        {/* One-Time */}
        <div className="text-center mt-4">
          {!showOneTime ? (
            <button onClick={() => setShowOneTime(true)} className="text-sm text-gray-400 underline">
              Just want to try it once?
            </button>
          ) : (
            <div className="bg-gray-50 rounded-xl p-4 border">
              <div className="font-semibold mb-2">One-Time: {offer.oneTime.price}</div>
              <button
                onClick={() => handleCheckout(false)}
                className="w-full py-2 border-2 border-gray-200 rounded-lg font-semibold hover:bg-gray-100 transition-all"
              >
                Try Once
              </button>
            </div>
          )}
        </div>

        {/* Trust */}
        <div className="flex justify-around py-4 border-t mt-4 text-xs text-gray-500">
          <span>✓ 30-Day Guarantee</span>
          <span>✓ Cancel Anytime</span>
          <span>✓ Free Shipping</span>
        </div>
      </div>
    </div>
  )
}

export default EmuaidBuyBox
