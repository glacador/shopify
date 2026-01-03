"use client";

import { motion } from "framer-motion";

interface NailScopeSectionsPart2Props {
  primaryColor?: string;
}

export default function NailScopeSectionsPart2({
  primaryColor = "#2D5A7B",
}: NailScopeSectionsPart2Props) {
  return (
    <div className="w-full">
      {/* Science Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span
                className="inline-block px-4 py-1 rounded-full text-sm font-medium mb-4"
                style={{
                  backgroundColor: `${primaryColor}15`,
                  color: primaryColor,
                }}
              >
                Clinically Studied Ingredients
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Backed by Science, Proven by Results
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Our formulations contain ingredients that have been studied for
                their effectiveness in supporting nail health and addressing
                common nail concerns.
              </p>
              <ul className="space-y-4">
                {[
                  {
                    title: "Tea Tree Oil",
                    description:
                      "Natural antifungal and antibacterial properties",
                  },
                  {
                    title: "Emu Oil",
                    description:
                      "Deep penetrating carrier with anti-inflammatory benefits",
                  },
                  {
                    title: "Colloidal Silver",
                    description:
                      "Antimicrobial support for stubborn nail conditions",
                  },
                  {
                    title: "Vitamin E",
                    description:
                      "Antioxidant protection and nail strengthening",
                  },
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <svg
                      className="w-6 h-6 flex-shrink-0 mt-0.5"
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
                    <div>
                      <span className="font-semibold text-gray-900">
                        {item.title}
                      </span>
                      <span className="text-gray-600"> - {item.description}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gray-100 rounded-2xl flex items-center justify-center">
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
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                  <p className="text-sm">Science Illustration</p>
                </div>
              </div>
              <div
                className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg"
                style={{ borderLeft: `4px solid ${primaryColor}` }}
              >
                <p className="text-2xl font-bold text-gray-900">98%</p>
                <p className="text-sm text-gray-600">Customer Satisfaction</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Get answers to common questions about our nail care system.
            </p>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                question: "How long until I see results?",
                answer:
                  "Most customers notice improvement within 2-4 weeks of consistent use. However, because nails grow slowly (about 1mm per week for fingernails, slower for toenails), complete restoration can take 3-6 months depending on the severity of your condition.",
              },
              {
                question: "Is this safe to use with my condition?",
                answer:
                  "Our products are formulated with natural ingredients and are generally safe for most people. However, if you have diabetes, circulation problems, or are under treatment for a nail condition, we recommend consulting with your healthcare provider before starting any new nail care regimen.",
              },
              {
                question: "What's included in the Rescue Kit?",
                answer:
                  "The complete Rescue Kit includes: emuaidMAX First Aid Ointment (2oz), Therapeutic Foot Soak, Penetrating Nail Oil, application instructions, and a 90-day supply tracking card. Everything you need for the 3-step system.",
              },
              {
                question: "What if it doesn't work for me?",
                answer:
                  "We offer a 90-day money-back guarantee on the Rescue Kit. If you're not satisfied with your results after following the program, contact our customer service team for a full refund. No questions asked.",
              },
              {
                question: "Can I use this with nail polish?",
                answer:
                  "For best results, we recommend keeping nails polish-free during treatment to allow maximum absorption of the active ingredients. Once your nails have improved, you can resume using polish with periodic treatment breaks.",
              },
              {
                question: "How often should I use the system?",
                answer:
                  "For optimal results, use the foot soak 2-3 times per week, apply the nail oil daily, and use the ointment every night before bed. The included tracking card helps you maintain consistency.",
              },
            ].map((faq, index) => (
              <motion.details
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group bg-white rounded-xl shadow-sm"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                  <span className="font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className="w-5 h-5 text-gray-500 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div
              className="w-24 h-24 mx-auto mb-6 rounded-full flex items-center justify-center"
              style={{ backgroundColor: `${primaryColor}15` }}
            >
              <svg
                className="w-12 h-12"
                style={{ color: primaryColor }}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              90-Day Money-Back Guarantee
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              We're confident our system will help improve your nail health. If
              you're not completely satisfied with your results, return the
              product within 90 days for a full refund—no questions asked.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
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
                <span className="text-gray-700">Risk-Free Trial</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
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
                <span className="text-gray-700">No Questions Asked</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-6 h-6"
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
                <span className="text-gray-700">Full Refund</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer CTA Section */}
      <section
        className="py-16 md:py-24 text-white"
        style={{ backgroundColor: primaryColor }}
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Nails?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Take our quick quiz to discover your nail pattern and get your
              personalized recommendation.
            </p>
            <a
              href="#quiz"
              className="inline-block bg-white px-8 py-4 rounded-xl font-bold text-lg transition-all hover:shadow-lg hover:scale-105"
              style={{ color: primaryColor }}
            >
              Take the Free Quiz
            </a>
            <p className="text-sm opacity-75 mt-4">
              Takes less than 2 minutes • 100% free
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
