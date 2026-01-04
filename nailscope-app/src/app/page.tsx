import { NailScopeQuiz } from '@/components/quiz/NailScopeQuiz'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold" style={{ color: 'var(--cta-dark)' }}>NailScope</span>
            <span className="ml-1">🔬</span>
            <span className="text-xl font-bold" style={{ color: 'var(--cta-dark)' }}>™</span>
          </div>
          <div className="text-sm text-gray-500">Powered by Speer Laboratories</div>
        </div>
      </header>

      <section className="py-12 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
            Discover Your Nail Pattern in <span style={{ color: 'var(--primary)' }}>45 Seconds</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Join 412,847 people who stopped guessing and found answers.
          </p>
        </div>
      </section>

      <section className="py-8">
        <div className="max-w-xl mx-auto px-4">
          <NailScopeQuiz />
        </div>
      </section>

      <footer className="bg-gray-900 text-gray-400 py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm">
          <p className="mb-4"><strong>Advertisement</strong> — This assessment may recommend products from EMUAID®.</p>
          <p>© {new Date().getFullYear()} Speer Laboratories. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
