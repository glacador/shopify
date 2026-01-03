"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

interface Question {
  id: number;
  question: string;
  options: {
    text: string;
    scores: Record<string, number>;
  }[];
}

const QUESTIONS: Question[] = [
  {
    id: 1,
    question: "What is the primary concern with your nails?",
    options: [
      { text: "Thickening or discoloration", scores: { ftd: 3, tnf: 2, agn: 1 } },
      { text: "Brittleness, peeling, or splitting", scores: { bsp: 3, csd: 2, agn: 1 } },
      { text: "Separation from nail bed", scores: { oly: 3, ftd: 1, gns: 1 } },
      { text: "Pain, redness, or swelling around the nail", scores: { prn: 3, itn: 2 } },
      { text: "Pitting, ridges, or rough surface", scores: { prf: 3, nps: 2, rdl: 2 } },
      { text: "Unusual color (yellow, green, or stained)", scores: { ysn: 3, gns: 2, ftd: 1 } },
    ],
  },
  {
    id: 2,
    question: "How long have you noticed these nail changes?",
    options: [
      { text: "Less than 2 weeks", scores: { prn: 2, gns: 2, itn: 1 } },
      { text: "2-4 weeks", scores: { gns: 1, csd: 1, prn: 1 } },
      { text: "1-3 months", scores: { ftd: 1, nps: 1, oly: 1 } },
      { text: "3-6 months", scores: { ftd: 2, nps: 2, csd: 2 } },
      { text: "More than 6 months", scores: { ftd: 3, agn: 2, tnf: 2, nps: 2 } },
    ],
  },
  {
    id: 3,
    question: "Which best describes the color of your affected nails?",
    options: [
      { text: "Yellow or brownish", scores: { ftd: 3, ysn: 3, nps: 1 } },
      { text: "White or pale", scores: { oly: 2, csd: 1, bsp: 1 } },
      { text: "Green or greenish-black", scores: { gns: 5, ftd: 1 } },
      { text: "Normal color but dull", scores: { bsp: 2, rdl: 2, agn: 1 } },
      { text: "Reddish or inflamed around edges", scores: { prn: 3, itn: 2 } },
      { text: "Mixed or patchy discoloration", scores: { nps: 2, prf: 2, ftd: 1 } },
    ],
  },
  {
    id: 4,
    question: "Do you notice any texture changes on your nail surface?",
    options: [
      { text: "Small pits or dents", scores: { nps: 4, prf: 3 } },
      { text: "Vertical ridges (running from base to tip)", scores: { rdl: 3, agn: 2 } },
      { text: "Horizontal lines or grooves", scores: { rdl: 2, bsp: 1 } },
      { text: "Rough or crumbly surface", scores: { ftd: 3, prf: 2, nps: 1 } },
      { text: "Peeling layers", scores: { bsp: 3, csd: 2 } },
      { text: "Smooth but thickened", scores: { tnf: 3, agn: 1 } },
    ],
  },
  {
    id: 5,
    question: "Is there any pain or discomfort associated with your nail issue?",
    options: [
      { text: "Yes, significant pain when touched or pressed", scores: { itn: 4, prn: 3 } },
      { text: "Yes, mild tenderness", scores: { prn: 2, itn: 2, oly: 1 } },
      { text: "No pain, but sensitivity", scores: { tnf: 1, ftd: 1, nps: 1 } },
      { text: "No pain or discomfort at all", scores: { ftd: 1, agn: 1, ysn: 1, rdl: 1 } },
    ],
  },
  {
    id: 6,
    question: "Have you had recent salon treatments (acrylics, gels, polish)?",
    options: [
      { text: "Yes, within the last month", scores: { csd: 4, gns: 2, oly: 1 } },
      { text: "Yes, 1-3 months ago", scores: { csd: 3, bsp: 1 } },
      { text: "Yes, but more than 3 months ago", scores: { csd: 1 } },
      { text: "No, I rarely or never get salon treatments", scores: { ftd: 1, agn: 1, nps: 1 } },
    ],
  },
  {
    id: 7,
    question: "Do you have any of these health conditions?",
    options: [
      { text: "Psoriasis or eczema", scores: { nps: 5, prf: 3 } },
      { text: "Diabetes", scores: { ftd: 2, itn: 1 } },
      { text: "Thyroid issues", scores: { bsp: 2, oly: 1 } },
      { text: "Circulation problems", scores: { agn: 2, ftd: 1 } },
      { text: "None of the above", scores: {} },
      { text: "Prefer not to say", scores: {} },
    ],
  },
  {
    id: 8,
    question: "What type of footwear do you typically wear?",
    options: [
      { text: "Tight or narrow shoes", scores: { itn: 3, tnf: 2, ftd: 1 } },
      { text: "Athletic/sports shoes frequently", scores: { ftd: 2, tnf: 2, gns: 1 } },
      { text: "Open-toed or breathable footwear", scores: {} },
      { text: "Work boots or protective footwear", scores: { tnf: 2, ftd: 1 } },
      { text: "This is a fingernail concern", scores: { csd: 1, prn: 1, bsp: 1 } },
    ],
  },
  {
    id: 9,
    question: "Are your hands or feet frequently exposed to water or moisture?",
    options: [
      { text: "Yes, for work (cleaning, healthcare, food service)", scores: { gns: 3, prn: 2, oly: 1 } },
      { text: "Yes, from frequent handwashing", scores: { prn: 2, bsp: 1 } },
      { text: "Yes, from swimming or water sports", scores: { gns: 2, ftd: 1 } },
      { text: "Occasionally", scores: { bsp: 1 } },
      { text: "Rarely", scores: {} },
    ],
  },
  {
    id: 10,
    question: "How would you describe the thickness of your affected nails?",
    options: [
      { text: "Significantly thicker than normal", scores: { ftd: 3, tnf: 3, nps: 1 } },
      { text: "Slightly thicker", scores: { ftd: 2, tnf: 2, agn: 1 } },
      { text: "Normal thickness", scores: { bsp: 1, rdl: 1, ysn: 1 } },
      { text: "Thinner than normal", scores: { bsp: 3, csd: 2 } },
    ],
  },
];

interface NailScopeQuizProps {
  primaryColor?: string;
  onComplete?: (result: string) => void;
}

export default function NailScopeQuiz({
  primaryColor = "#2D5A7B",
  onComplete,
}: NailScopeQuizProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [started, setStarted] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswer = (optionScores: Record<string, number>) => {
    if (isTransitioning) return;

    setIsTransitioning(true);

    // Update scores
    const newScores = { ...scores };
    Object.entries(optionScores).forEach(([condition, score]) => {
      newScores[condition] = (newScores[condition] || 0) + score;
    });
    setScores(newScores);

    // Move to next question or show results
    setTimeout(() => {
      if (currentQuestion < QUESTIONS.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setIsTransitioning(false);
      } else {
        // Calculate result
        const sortedConditions = Object.entries(newScores).sort(
          ([, a], [, b]) => b - a
        );
        const topCondition = sortedConditions[0]?.[0] || "ftd";

        if (onComplete) {
          onComplete(topCondition);
        } else {
          router.push(`/results/${topCondition}`);
        }
      }
    }, 300);
  };

  const progress = started
    ? ((currentQuestion + 1) / QUESTIONS.length) * 100
    : 0;

  if (!started) {
    return (
      <div className="w-full max-w-2xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8 text-center"
        >
          <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: `${primaryColor}15` }}>
            <svg className="w-10 h-10" style={{ color: primaryColor }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Discover Your Nail Pattern
          </h2>
          <p className="text-gray-600 mb-8 text-lg">
            Answer a few quick questions to identify what might be affecting your nails and get personalized recommendations.
          </p>
          <ul className="text-left text-gray-600 mb-8 space-y-3">
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Takes less than 2 minutes
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Based on dermatological patterns
            </li>
            <li className="flex items-center gap-3">
              <svg className="w-5 h-5 flex-shrink-0" style={{ color: primaryColor }} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Get personalized recommendations
            </li>
          </ul>
          <button
            onClick={handleStart}
            className="w-full py-4 px-8 rounded-xl text-white font-semibold text-lg transition-all hover:shadow-lg hover:scale-[1.02]"
            style={{ backgroundColor: primaryColor }}
          >
            Start the Quiz
          </button>
          <p className="text-sm text-gray-500 mt-4">
            100% Free • No email required
          </p>
        </motion.div>
      </div>
    );
  }

  const question = QUESTIONS[currentQuestion];

  return (
    <div className="w-full max-w-2xl mx-auto px-4">
      {/* Progress bar */}
      <div className="mb-6">
        <div className="flex justify-between text-sm text-gray-600 mb-2">
          <span>Question {currentQuestion + 1} of {QUESTIONS.length}</span>
          <span>{Math.round(progress)}% complete</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: primaryColor }}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Question card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-8"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
            {question.question}
          </h3>
          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option.scores)}
                disabled={isTransitioning}
                className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-current transition-all hover:shadow-md disabled:opacity-50"
                style={{
                  "--tw-border-opacity": 1,
                } as React.CSSProperties}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor = primaryColor;
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.borderColor = "#e5e7eb";
                }}
              >
                <span className="text-gray-700 font-medium">{option.text}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Back button */}
      {currentQuestion > 0 && (
        <button
          onClick={() => setCurrentQuestion(currentQuestion - 1)}
          className="mt-4 text-gray-500 hover:text-gray-700 font-medium flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Previous question
        </button>
      )}
    </div>
  );
}
