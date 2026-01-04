import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { CONDITIONS, getAllConditionSlugs, getConditionBySlug } from '@/lib/conditions'
import { EmuaidBuyBox } from '@/components/buybox/EmuaidBuyBox'

interface PageProps {
  params: Promise<{ condition: string }>
}

export function generateStaticParams() {
  return getAllConditionSlugs().map((condition) => ({ condition }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { condition: conditionSlug } = await params
  const condition = getConditionBySlug(conditionSlug)

  if (!condition) {
    return {
      title: 'Results Not Found | NailScope',
    }
  }

  return {
    title: `${condition.name} | NailScope Results`,
    description: condition.intro,
    openGraph: {
      title: `${condition.name} | NailScope Results`,
      description: condition.intro,
      url: `https://nailscope.org/results/${conditionSlug}`,
      siteName: 'NailScope',
      type: 'website',
    },
  }
}

export default async function ResultsPage({ params }: PageProps) {
  const { condition: conditionSlug } = await params
  const condition = getConditionBySlug(conditionSlug)

  if (!condition) notFound()

  // Parse the body text into sections
  const bodyParagraphs = condition.body.split('\n\n')

  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold" style={{ color: 'var(--cta-dark)' }}>NailScope</span>
            <span className="ml-1">🔬</span>
            <span className="text-xl font-bold" style={{ color: 'var(--cta-dark)' }}>™</span>
          </a>
          <div className="text-sm text-gray-500">Assessment Complete</div>
        </div>
      </header>

      <section className="bg-white py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-sm font-bold uppercase tracking-wider mb-4" style={{ color: 'var(--cta)' }}>
            {condition.label}
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {condition.headline}
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed mb-8">
            {condition.intro}
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-xl mx-auto px-4">
          <EmuaidBuyBox conditionCode={condition.code} patternCode={condition.patternCode} />
        </div>
      </section>

      <section className="bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 prose prose-gray">
          {bodyParagraphs.map((para, i) => {
            // Handle headers (text wrapped in **)
            if (para.startsWith('**') && para.endsWith('**')) {
              return (
                <h3 key={i} className="text-xl font-bold text-gray-900 mt-8 mb-4">
                  {para.slice(2, -2)}
                </h3>
              )
            }
            // Handle numbered items
            if (para.match(/^\d+\./)) {
              return (
                <p key={i} className="text-gray-700 mb-2">
                  {para}
                </p>
              )
            }
            // Regular paragraphs
            return (
              <p key={i} className="text-gray-700 mb-4">
                {para}
              </p>
            )
          })}
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm">
          <p className="mb-4"><strong>Advertisement</strong> — This assessment recommends products from EMUAID®.</p>
          <p>© {new Date().getFullYear()} Speer Laboratories. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
