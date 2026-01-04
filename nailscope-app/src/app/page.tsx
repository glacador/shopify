import { NailScopeQuizV2 } from '@/components/quiz/NailScopeQuizV2'
import Image from 'next/image'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f0f0f0]">
      {/* Hero Section */}
      <section className="bg-[#e8e8e8] py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left Column - Branding & CTA */}
            <div className="flex flex-col justify-center lg:pt-8">
              {/* Logo */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-5xl font-bold" style={{ color: 'var(--cta-dark)' }}>
                  nailscope<span className="inline-block ml-1">🔬</span>
                  <span className="text-lg align-top">™</span>
                </h1>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1">
                  NAIL ASSESSMENT
                </p>
              </div>

              {/* Headlines */}
              <h2 className="text-xl md:text-2xl font-semibold mb-2" style={{ color: 'var(--cta-dark)' }}>
                That Product Might Be Making It Worse.
              </h2>
              <p className="text-lg md:text-xl mb-6" style={{ color: 'var(--cta-dark)' }}>
                Only 27% Are Using the Right Approach for Their Nails.
              </p>

              {/* Description */}
              <p className="text-gray-600 mb-6 max-w-md">
                11 questions. 45 seconds. Your nail pattern identified. Custom recommendations based on your answers.
              </p>

              {/* CTA Button */}
              <Link
                href="#quiz"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90 max-w-fit"
                style={{ backgroundColor: '#333' }}
              >
                4,756 people found clarity today. Click to start →
              </Link>
            </div>

            {/* Right Column - Quiz */}
            <div id="quiz" className="lg:pt-0">
              <NailScopeQuizV2 />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Logos Bar */}
      <section className="bg-[#f0f0f0] py-10 md:py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16 opacity-70">
            {/* Health */}
            <div className="flex items-center">
              <span className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">Health</span>
            </div>

            {/* USA TODAY */}
            <div className="flex items-center">
              <span className="text-xl md:text-2xl font-black text-gray-800 tracking-tight">
                <span className="inline-block w-3 h-3 md:w-4 md:h-4 bg-blue-600 rounded-full mr-1"></span>
                USATODAY
              </span>
            </div>

            {/* Medical News Today */}
            <div className="flex flex-col items-center">
              <div className="flex items-center border border-gray-400 px-2 py-1">
                <span className="text-lg md:text-xl font-bold text-gray-800">M</span>
                <span className="text-lg md:text-xl font-bold text-gray-800 mx-0.5">N</span>
                <span className="text-lg md:text-xl font-bold text-gray-800">T</span>
              </div>
              <span className="text-[8px] md:text-[10px] text-gray-600 uppercase tracking-wider mt-0.5">
                MedicalNewsToday
              </span>
            </div>

            {/* NIH */}
            <div className="flex items-center gap-1">
              <span className="text-xl md:text-2xl font-bold text-gray-800">NIH</span>
              <span className="text-gray-400">)</span>
              <div className="text-[8px] md:text-[10px] text-gray-600 leading-tight">
                <div>National Institutes of Health</div>
                <div className="text-gray-500">Turning Discovery Into Health</div>
              </div>
            </div>

            {/* Harvard Health Publishing */}
            <div className="flex items-center gap-2">
              <div className="text-right">
                <div className="text-lg md:text-xl font-serif text-gray-800">Harvard</div>
                <div className="text-sm md:text-base text-gray-800">Health</div>
                <div className="text-xs text-gray-600">Publishing</div>
              </div>
              <div className="grid grid-cols-3 gap-0.5">
                {[...Array(9)].map((_, i) => (
                  <div key={i} className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-700 rounded-sm"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#2d3b47] py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column - Text & Stats */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-2 leading-tight">
                The nail clarity tool that&apos;s helped{' '}
                <span className="text-[#7eb8b8]">412,847</span> people find answers.
              </h2>
              <p className="text-gray-300 mb-8">
                100% free. 45 seconds. Finally understand what you&apos;re looking at.
              </p>

              {/* Stats Boxes */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-transparent border border-gray-500 rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">412,847</div>
                  <div className="text-xs text-gray-400 leading-tight">
                    People who discovered their nail pattern
                  </div>
                </div>
                <div className="bg-transparent border border-gray-500 rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">10</div>
                  <div className="text-xs text-gray-400 leading-tight">
                    Different patterns that look the same
                  </div>
                </div>
                <div className="bg-transparent border border-gray-500 rounded-lg p-4 text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">41%</div>
                  <div className="text-xs text-gray-400 leading-tight">
                    Were focused on the wrong thing entirely
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Laptop Image */}
            <div className="relative">
              <div className="bg-gray-700 rounded-lg p-4 shadow-2xl">
                {/* Laptop mockup */}
                <div className="bg-white rounded-md overflow-hidden aspect-[16/10] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="inline-block px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                      FUNGAL INFECTION
                    </div>
                    <div className="text-5xl font-bold text-gray-800 mb-2">87.3%</div>
                    <div className="text-sm text-gray-500 uppercase tracking-wider">
                      Accuracy Rating
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative plant element */}
              <div className="absolute -right-4 -bottom-4 w-24 h-32 opacity-20">
                <svg viewBox="0 0 100 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M50 140V60M30 80C30 60 50 60 50 60M70 80C70 60 50 60 50 60M20 50C20 30 50 40 50 40M80 50C80 30 50 40 50 40M35 25C35 10 50 15 50 15M65 25C65 10 50 15 50 15" stroke="#7eb8b8" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* Left Column - Text */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                That product wasn&apos;t made for your situation.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Thick, rough, discolored nails can happen for ten completely different reasons.
                They all look identical on the shelf. But each one calls for a different approach.
                Maybe it started after an injury. Maybe it&apos;s how your nails respond to moisture.
                Maybe it&apos;s just how they&apos;ve always grown. The pharmacy aisle can&apos;t tell the
                difference. These 11 questions can.
              </p>
              <Link
                href="#quiz"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 hover:opacity-90"
                style={{ backgroundColor: 'var(--cta-dark)' }}
              >
                See what&apos;s actually going on
              </Link>
            </div>

            {/* Right Column - Illustration */}
            <div className="flex justify-center">
              <div className="relative">
                {/* Antifungal bottle illustration */}
                <div className="flex flex-col items-center">
                  {/* Main bottle */}
                  <div className="relative mb-8">
                    <div className="w-16 h-24 bg-gradient-to-b from-teal-400 to-teal-500 rounded-lg relative">
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-4 h-8 bg-gray-300 rounded-t-sm"></div>
                      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded px-2 py-1">
                        <span className="text-[8px] text-teal-600 font-bold">ANTIFUNGAL</span>
                      </div>
                    </div>
                    {/* Droplet */}
                    <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
                      <div className="w-4 h-6 bg-teal-400 rounded-full opacity-80"></div>
                    </div>
                  </div>

                  {/* Row of identical bottles */}
                  <div className="flex gap-2 items-end">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className={`flex flex-col items-center ${i === 4 ? 'relative' : ''}`}>
                        <div className={`w-8 h-14 bg-gradient-to-b from-teal-400 to-teal-500 rounded relative ${i === 4 ? 'ring-2 ring-teal-300' : ''}`}>
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-2 h-4 bg-gray-300 rounded-t-sm"></div>
                          {i === 4 && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full flex items-center justify-center">
                              <span className="text-teal-600 text-[8px] font-bold">✓</span>
                            </div>
                          )}
                        </div>
                        {/* Person icon below each bottle */}
                        <div className="mt-2">
                          <svg className={`w-5 h-5 ${i === 4 ? 'text-teal-500' : 'text-gray-400'}`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                          </svg>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Caption */}
                  <p className="text-center text-gray-600 font-medium mt-6 uppercase tracking-wider text-sm">
                    One solution doesn&apos;t fit all
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="max-w-4xl mx-auto px-4 text-center text-sm">
          <p className="mb-4">
            <strong>Advertisement</strong> — This assessment may recommend products from EMUAID®.
          </p>
          <p>© {new Date().getFullYear()} Speer Laboratories. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
