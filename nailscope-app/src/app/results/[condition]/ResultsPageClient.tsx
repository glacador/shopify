"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Condition } from "@/lib/conditions";
import { getPatternCode, trackResultsViewed } from "@/lib/analytics";
import EmuaidBuyBox from "@/components/buybox/EmuaidBuyBox";
import NailScopeSectionsPart2 from "@/components/sections/NailScopeSectionsPart2";

const PRIMARY_COLOR = "#2D5A7B";

interface ResultsPageClientProps {
  condition: Condition;
}

export default function ResultsPageClient({ condition }: ResultsPageClientProps) {
  const patternCode = getPatternCode(condition.slug);

  useEffect(() => {
    trackResultsViewed(patternCode);
  }, [patternCode]);

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: PRIMARY_COLOR }}
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <span className="text-xl font-bold text-gray-900">NailScope</span>
          </Link>
          <Link
            href="/#quiz"
            className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
          >
            Retake Quiz
          </Link>
        </div>
      </header>

      {/* Results Hero */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
              style={{
                backgroundColor: `${PRIMARY_COLOR}15`,
                color: PRIMARY_COLOR,
              }}
            >
              Your Quiz Results
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {condition.headline}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              {condition.intro}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Condition Details */}
      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Symptoms */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  style={{ color: PRIMARY_COLOR }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
                Common Symptoms
              </h3>
              <ul className="space-y-3">
                {condition.symptoms.map((symptom, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5"
                      style={{ color: PRIMARY_COLOR }}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Causes */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-xl p-6"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <svg
                  className="w-6 h-6"
                  style={{ color: PRIMARY_COLOR }}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Possible Causes
              </h3>
              <ul className="space-y-3">
                {condition.causes.map((cause, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-5 h-5 flex-shrink-0 mt-0.5 text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Understanding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 bg-white border border-gray-200 rounded-xl p-6 md:p-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Understanding Your Condition
            </h3>
            <p className="text-gray-600 leading-relaxed">{condition.body}</p>
          </motion.div>

          {/* Recommendations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <svg
                className="w-6 h-6"
                style={{ color: PRIMARY_COLOR }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
              </svg>
              Recommendations
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {condition.recommendations.map((rec, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-gray-50 rounded-lg p-4"
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold text-white flex-shrink-0"
                    style={{ backgroundColor: PRIMARY_COLOR }}
                  >
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{rec}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Buy Box Section */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-center mb-8"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {condition.ctaLabel}
            </h2>
            <p className="text-gray-600">{condition.ctaSubtext}</p>
          </motion.div>
          <EmuaidBuyBox
            conditionCode={condition.code}
            patternCode={patternCode}
            primaryColor={PRIMARY_COLOR}
          />
        </div>
      </section>

      {/* Additional Sections */}
      <NailScopeSectionsPart2 primaryColor={PRIMARY_COLOR} />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: PRIMARY_COLOR }}
                >
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <span className="text-xl font-bold">NailScope</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Science-based nail health assessment and personalized care
                recommendations. Helping you achieve healthier nails, one step
                at a time.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="/#quiz"
                    className="hover:text-white transition-colors"
                  >
                    Take the Quiz
                  </Link>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Disclaimer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>
              © {new Date().getFullYear()} NailScope. All rights reserved.
            </p>
            <p className="mt-2">
              Disclaimer: This quiz is for informational purposes only and does
              not constitute medical advice. Consult a healthcare professional
              for diagnosis and treatment.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
