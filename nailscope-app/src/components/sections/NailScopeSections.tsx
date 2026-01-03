"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface NailScopeSectionsProps {
  primaryColor?: string;
}

export default function NailScopeSections({
  primaryColor = "#2D5A7B",
}: NailScopeSectionsProps) {
  return (
    <div className="w-full">
      {/* Why It Works Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Over-the-Counter Solutions Fail
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Most nail treatments only address surface symptoms. Real nail health
              requires a multi-layer approach.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                ),
                title: "Penetration Problem",
                description:
                  "The nail plate is made of hardened keratin that blocks most topical treatments from reaching the source of the problem beneath.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                ),
                title: "Inconsistent Use",
                description:
                  "Nail cells take 3-6 months to fully replace. One-step solutions require perfect daily compliance that most people can't maintain.",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                ),
                title: "Wrong Formula",
                description:
                  "Generic treatments don't account for the specific pattern of nail damage. Each condition requires targeted active ingredients.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${primaryColor}15`, color: primaryColor }}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The 3-Step System Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The 3-Step Nail Rescue System
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A complete protocol designed to work with your nail's natural growth cycle.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Soften & Prepare",
                subtitle: "Therapeutic Foot Soak",
                description:
                  "Mineral-rich soak softens the nail plate, opens micro-channels, and prepares the nail bed for optimal absorption of active ingredients.",
                time: "10-15 min soak",
              },
              {
                step: "02",
                title: "Penetrate & Treat",
                subtitle: "Penetrating Nail Oil",
                description:
                  "Fast-absorbing oil formula delivers antifungal and nourishing compounds deep into the nail matrix where problems originate.",
                time: "Apply after soak",
              },
              {
                step: "03",
                title: "Protect & Heal",
                subtitle: "emuaidMAX Ointment",
                description:
                  "Powerful first aid ointment creates a protective barrier while medical-grade ingredients continue working around the clock.",
                time: "Apply before bed",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="bg-gray-50 rounded-xl p-6 h-full">
                  <div
                    className="text-5xl font-bold mb-4"
                    style={{ color: `${primaryColor}30` }}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {item.title}
                  </h3>
                  <p
                    className="text-sm font-medium mb-3"
                    style={{ color: primaryColor }}
                  >
                    {item.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {item.time}
                  </div>
                </div>
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg
                      className="w-8 h-8 text-gray-300"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real Results from Real People
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands who have transformed their nail health with our system.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah M.",
                location: "Austin, TX",
                rating: 5,
                text: "After years of hiding my feet, I finally have nails I'm not embarrassed about. The 3-step system was easy to follow and I saw improvement within the first month.",
                condition: "Fungal Nail",
              },
              {
                name: "Robert K.",
                location: "Denver, CO",
                rating: 5,
                text: "I tried everything before finding NailScope. The quiz identified exactly what I was dealing with and the kit addressed all my symptoms. Highly recommend!",
                condition: "Thick Toenails",
              },
              {
                name: "Linda W.",
                location: "Phoenix, AZ",
                rating: 5,
                text: "My nail psoriasis was affecting my confidence. This system helped me manage it better than anything my dermatologist prescribed. The results speak for themselves.",
                condition: "Nail Psoriasis",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">
                    {testimonial.location} • {testimonial.condition}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
