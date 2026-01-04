'use client'

import { useState, useEffect, useMemo } from 'react'
import { useRouter } from 'next/navigation'

// Condition mapping
const CONDITION_MAP: Record<string, string> = {
  A: 'ftd', // Fungal thick
  B: 'ftd', // Fungal multiple
  C: 'nps', // Nail psoriasis (pitted)
  D: 'bsp', // Brittle splitting peeling
  E: 'prn', // Paronychia
  F: 'oly', // Onycholysis
  G: 'ftd', // Default fallback
}

// Question definitions with images
interface QuestionOption {
  label: string
  sublabel?: string
  value: string
  imageUrl?: string
}

interface Question {
  id: string
  title: string
  subtitle?: string
  options: QuestionOption[]
}

const QUESTIONS: Question[] = [
  {
    id: '1',
    title: 'Which image looks closest to your nails?',
    subtitle: 'This helps us understand the primary pattern affecting your nails.',
    options: [
      {
        label: 'Yellow/brown, thick toenail',
        sublabel: '(Single nail affected)',
        value: 'A',
        imageUrl: '/images/quiz/nail-fungal-single.svg',
      },
      {
        label: 'Multiple thick, discolored nails',
        sublabel: '(Several nails affected)',
        value: 'B',
        imageUrl: '/images/quiz/nail-fungal-multiple.svg',
      },
      {
        label: 'Pitted surface with small dots',
        sublabel: '(Ice-pick pitting pattern)',
        value: 'C',
        imageUrl: '/images/quiz/nail-pitted.svg',
      },
      {
        label: 'Thin, brittle, peeling nails',
        sublabel: '(Weak nail structure)',
        value: 'D',
        imageUrl: '/images/quiz/nail-brittle.svg',
      },
      {
        label: 'Red/swollen skin around nail',
        sublabel: '(Nail fold inflammation)',
        value: 'E',
        imageUrl: '/images/quiz/nail-paronychia.svg',
      },
      {
        label: 'Nail lifting or separating',
        sublabel: '(Gap under nail plate)',
        value: 'F',
        imageUrl: '/images/quiz/nail-lifting.svg',
      },
      {
        label: 'None of these match well',
        sublabel: "(We'll narrow it down)",
        value: 'G',
      },
    ],
  },
  {
    id: '2',
    title: 'Do you have psoriasis, eczema, or a family history of either?',
    subtitle: 'Autoimmune conditions often affect nails—this helps us identify the right pattern.',
    options: [
      { label: 'Yes, I have psoriasis', sublabel: '(Diagnosed by a doctor)', value: 'A' },
      { label: 'Yes, I have eczema', sublabel: '(Atopic dermatitis)', value: 'B' },
      { label: 'No, but family members do', sublabel: '(Genetic risk factor)', value: 'C' },
      { label: 'No history of either', value: 'D' },
      { label: 'Not sure', value: 'E' },
    ],
  },
  {
    id: '3',
    title: 'What do your nails look like today?',
    subtitle: "This tells us if we're dealing with surface changes or deeper structural issues.",
    options: [
      { label: 'Slightly dull or uneven', sublabel: '(Minor surface changes)', value: 'A' },
      { label: 'Noticeable color change', sublabel: '(Yellow, brown, or white)', value: 'B' },
      { label: 'Thick or rough texture', sublabel: '(Hard to trim)', value: 'C' },
      { label: 'Cracked or splitting edges', sublabel: '(Breaks easily)', value: 'D' },
      { label: 'They look fine, but brittle', sublabel: '(Weak despite appearance)', value: 'E' },
    ],
  },
  {
    id: '4',
    title: 'How long have you felt concerned about this?',
    subtitle: 'Duration helps us understand if this is acute or chronic—which changes the approach.',
    options: [
      { label: 'Less than a month', sublabel: '(Recent onset)', value: 'A' },
      { label: '1–3 months', sublabel: '(Subacute)', value: 'B' },
      { label: '3–6 months', sublabel: '(Persistent)', value: 'C' },
      { label: 'Over 6 months', sublabel: '(Chronic)', value: 'D' },
      { label: 'It comes and goes', sublabel: '(Cyclical pattern)', value: 'E' },
    ],
  },
  {
    id: '5',
    title: "What's your age range?",
    subtitle: 'Nail conditions vary significantly by age—this helps us match you to the right pattern.',
    options: [
      { label: 'Under 30', value: 'A' },
      { label: '30–49', value: 'B' },
      { label: '50–64', value: 'C' },
      { label: '65 or older', value: 'D' },
    ],
  },
  {
    id: '6',
    title: 'Does it ever cause you discomfort?',
    subtitle: 'Pain and discomfort help us distinguish between cosmetic and medical concerns.',
    options: [
      { label: 'Yes, it bothers me often', sublabel: '(Regular pain or irritation)', value: 'A' },
      { label: 'Sometimes, when bumped', sublabel: '(Occasional discomfort)', value: 'B' },
      { label: 'Rarely, mostly cosmetic', sublabel: '(Looks worse than feels)', value: 'C' },
      { label: 'No discomfort, just appearance', sublabel: '(Purely visual concern)', value: 'D' },
      { label: 'Not sure', value: 'E' },
    ],
  },
  {
    id: '7',
    title: 'Have you noticed any changes in smell or buildup?',
    subtitle: 'Odor and debris are strong indicators of fungal colonization.',
    options: [
      { label: 'Strong odor or heavy buildup', sublabel: '(Very noticeable)', value: 'A' },
      { label: 'Some odor or minor debris', sublabel: '(Somewhat noticeable)', value: 'B' },
      { label: 'A little buildup under nails', sublabel: '(Mild)', value: 'C' },
      { label: 'Clean but still looks off', sublabel: '(No debris, just appearance)', value: 'D' },
      { label: 'No odor or buildup', sublabel: '(Clean)', value: 'E' },
    ],
  },
  {
    id: '8',
    title: 'How much is this affecting your lifestyle?',
    subtitle: "This helps us understand urgency and recommend the right level of intervention.",
    options: [
      { label: 'I hide my feet in public', sublabel: '(Major avoidance)', value: 'A' },
      { label: 'I avoid showing my hands/feet', sublabel: '(Significant impact)', value: 'B' },
      { label: 'It bothers me, but I deal with it', sublabel: '(Moderate impact)', value: 'C' },
      { label: "I'm worried it's spreading further", sublabel: '(Concern about progression)', value: 'D' },
      { label: 'No real impact', sublabel: '(Minimal concern)', value: 'E' },
    ],
  },
  {
    id: '9',
    title: 'Have you noticed signs of spreading to other nails or surrounding skin?',
    subtitle: 'Spreading is a key indicator that often requires more aggressive treatment.',
    options: [
      { label: 'Yes', sublabel: '(Affecting more nails)', value: 'A' },
      { label: 'No', sublabel: '(Stable/contained)', value: 'B' },
      { label: 'Unsure', value: 'C' },
    ],
  },
  {
    id: '10',
    title: 'Do you have diabetes or pre-diabetes?',
    subtitle: 'Diabetes increases nail infection risk 4.7x—this affects our recommendations.',
    options: [
      { label: 'Yes, Type 1 or Type 2 diabetes', sublabel: '(Diagnosed)', value: 'A' },
      { label: 'Yes, pre-diabetes', sublabel: '(Borderline blood sugar)', value: 'B' },
      { label: 'No', value: 'C' },
      { label: 'Not sure', value: 'D' },
    ],
  },
  {
    id: '11',
    title: 'How quickly do you want to start seeing a change?',
    subtitle: 'This helps us recommend the right intensity of treatment.',
    options: [
      { label: "Right away — I'm tired of waiting", sublabel: '(High urgency)', value: 'A' },
      { label: 'Within the next week', sublabel: '(Soon)', value: 'B' },
      { label: 'Within the next month', sublabel: '(Moderate timeline)', value: 'C' },
      { label: "I don't mind as long as it works", sublabel: '(Patient approach)', value: 'D' },
      { label: 'Just curious / exploring', sublabel: '(Information gathering)', value: 'E' },
    ],
  },
]

function inferCondition(answers: Record<string, string>): string {
  // Primary routing based on Q1 image selection
  const q1 = answers['1']?.toUpperCase() || 'A'

  // Check for psoriasis indicators
  const hasPsoriasisHistory = answers['2'] === 'A' || answers['2'] === 'C'
  if (q1 === 'C' || (hasPsoriasisHistory && q1 !== 'A' && q1 !== 'B')) {
    return 'nps'
  }

  // Check for paronychia
  if (q1 === 'E') {
    return 'prn'
  }

  // Check for onycholysis
  if (q1 === 'F') {
    return 'oly'
  }

  // Check for brittle/splitting
  if (q1 === 'D') {
    return 'bsp'
  }

  // Default to fungal
  return CONDITION_MAP[q1] || 'ftd'
}

export function NailScopeQuizV2() {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [loadingPct, setLoadingPct] = useState(0)

  const totalQuestions = QUESTIONS.length
  const answeredCount = Object.keys(answers).length
  const progressPct = totalQuestions > 0 ? Math.round((answeredCount / totalQuestions) * 100) : 0

  const handleAnswer = (qid: string, value: string) => {
    const newAnswers = { ...answers, [qid]: value }
    setAnswers(newAnswers)

    if (index < QUESTIONS.length - 1) {
      setTimeout(() => setIndex(index + 1), 200)
    } else {
      // Final question answered - start loading
      setLoading(true)
      let pct = 0
      const interval = setInterval(() => {
        pct += Math.random() * 15 + 5
        if (pct >= 100) {
          clearInterval(interval)
          setLoadingPct(100)
          // Small delay before redirect
          setTimeout(() => {
            router.push(`/results/${inferCondition(newAnswers)}`)
          }, 300)
        } else {
          setLoadingPct(Math.round(pct))
        }
      }, 200)
    }
  }

  // Loading state
  if (loading) {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-[440px] mx-auto">
        {/* Header */}
        <div className="px-4 py-3 border-b border-gray-100">
          <div className="flex items-center gap-1 mb-2">
            <span className="text-lg font-bold" style={{ color: 'var(--cta-dark)' }}>NailScope</span>
            <span className="text-lg">🔬</span>
            <span className="text-lg font-bold" style={{ color: 'var(--cta-dark)' }}>™</span>
          </div>
          <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300 progress-bar"
              style={{ width: '100%' }}
            />
          </div>
          <p className="text-xs text-gray-500 text-center mt-1">Assessment Complete</p>
        </div>

        {/* Loading content */}
        <div className="p-8 flex flex-col items-center justify-center min-h-[300px]">
          <div className="w-20 h-20 mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--cta)' }}>
            <svg className="w-10 h-10 text-white animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
            {loadingPct < 100 ? 'Analyzing your nail pattern…' : 'Finalizing your results…'}
          </h3>
          <div className="w-full max-w-[280px] h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
            <div
              className="h-full rounded-full transition-all duration-200 progress-bar"
              style={{ width: `${loadingPct}%` }}
            />
          </div>
          <p className="text-sm text-gray-500">{loadingPct}%</p>
        </div>
      </div>
    )
  }

  const currentQuestion = QUESTIONS[index]
  const isImageQuestion = currentQuestion.id === '1'

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden max-w-[440px] mx-auto">
      {/* Header with progress */}
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center gap-1 mb-2">
          <span className="text-lg font-bold" style={{ color: 'var(--cta-dark)' }}>NailScope</span>
          <span className="text-lg">🔬</span>
          <span className="text-lg font-bold" style={{ color: 'var(--cta-dark)' }}>™</span>
        </div>
        {/* Dotted progress indicator */}
        <div className="flex items-center gap-1 mb-1">
          {QUESTIONS.map((_, i) => (
            <div
              key={i}
              className="h-1.5 flex-1 rounded-full transition-all duration-300"
              style={{
                backgroundColor: i <= index ? 'var(--cta)' : '#e5e7eb',
              }}
            />
          ))}
        </div>
        <p className="text-xs text-gray-500 text-center mt-1">
          Question {index + 1} of {totalQuestions}
        </p>
      </div>

      {/* Question content */}
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-1 leading-tight">
          {currentQuestion.title}
        </h2>
        {currentQuestion.subtitle && (
          <p className="text-sm text-gray-500 mb-4">{currentQuestion.subtitle}</p>
        )}

        {/* Options */}
        <div className={`flex flex-col ${isImageQuestion ? 'gap-2' : 'gap-2'}`}>
          {currentQuestion.options.map((opt) => {
            const isSelected = answers[currentQuestion.id] === opt.value

            return (
              <button
                key={opt.value}
                onClick={() => handleAnswer(currentQuestion.id, opt.value)}
                className={`
                  w-full text-left rounded-lg border-2 transition-all duration-200
                  ${isSelected
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 hover:border-gray-300 bg-white'
                  }
                  ${isImageQuestion && opt.imageUrl ? 'p-1.5' : 'p-3'}
                `}
              >
                <div className={`flex items-center ${isImageQuestion && opt.imageUrl ? 'gap-3' : 'gap-2'}`}>
                  {/* Image thumbnail for Q1 */}
                  {isImageQuestion && opt.imageUrl && (
                    <div className="w-[100px] h-[65px] rounded-md overflow-hidden flex-shrink-0 bg-gray-100 border border-gray-200">
                      <img
                        src={opt.imageUrl}
                        alt={opt.label}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback placeholder if image fails to load
                          (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 65" fill="%23e5e7eb"><rect width="100" height="65"/><text x="50" y="35" text-anchor="middle" fill="%239ca3af" font-size="10">Image</text></svg>'
                        }}
                      />
                    </div>
                  )}

                  {/* Text content */}
                  <div className="flex-1 min-w-0">
                    <div className={`font-medium text-gray-900 ${isImageQuestion ? 'text-sm' : 'text-base'}`}>
                      {opt.label}
                    </div>
                    {opt.sublabel && (
                      <div className={`text-gray-500 ${isImageQuestion ? 'text-xs' : 'text-sm'}`}>
                        {opt.sublabel}
                      </div>
                    )}
                  </div>
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default NailScopeQuizV2
