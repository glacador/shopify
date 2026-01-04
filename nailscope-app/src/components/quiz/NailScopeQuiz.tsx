'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

// Simplified quiz - will be replaced with full NailScopeQuizV2 conversion
const QUESTIONS = [
  {
    id: '1',
    title: 'Which best describes your nails?',
    options: [
      { label: 'Yellow/brown, thick toenail', value: 'A' },
      { label: 'Multiple thick, discolored nails', value: 'B' },
      { label: 'Pitted surface with small dots', value: 'C' },
      { label: 'Thin, brittle, peeling nails', value: 'D' },
      { label: 'Red/swollen skin around nail', value: 'E' },
      { label: 'Nail lifting or separating', value: 'F' },
    ],
  },
  {
    id: '2',
    title: 'How long have you noticed this?',
    options: [
      { label: 'Less than a month', value: 'A' },
      { label: '1-6 months', value: 'B' },
      { label: 'Over 6 months', value: 'C' },
    ],
  },
  {
    id: '3',
    title: 'How quickly do you want results?',
    options: [
      { label: 'Right away', value: 'A' },
      { label: 'Within a month', value: 'B' },
      { label: 'I can be patient', value: 'C' },
    ],
  },
]

function inferCondition(answers: Record<string, string>): string {
  const map: Record<string, string> = { A: 'ftd', B: 'ftd', C: 'nps', D: 'bsp', E: 'prn', F: 'oly' }
  return map[answers['1']] || 'ftd'
}

export function NailScopeQuiz() {
  const router = useRouter()
  const [index, setIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [loading, setLoading] = useState(false)
  const [loadingPct, setLoadingPct] = useState(0)

  const handleAnswer = (qid: string, value: string) => {
    const newAnswers = { ...answers, [qid]: value }
    setAnswers(newAnswers)

    if (index < QUESTIONS.length - 1) {
      setTimeout(() => setIndex(index + 1), 200)
    } else {
      setLoading(true)
      let pct = 0
      const interval = setInterval(() => {
        pct += Math.random() * 15 + 5
        if (pct >= 100) {
          clearInterval(interval)
          router.push(`/results/${inferCondition(newAnswers)}`)
        }
        setLoadingPct(Math.min(100, Math.round(pct)))
      }, 200)
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--primary)' }}>
          <svg className="w-10 h-10 text-white animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold mb-4">Analyzing your nail pattern...</h3>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div className="h-2 rounded-full transition-all progress-bar" style={{ width: `${loadingPct}%` }} />
        </div>
        <p className="text-gray-500">{loadingPct}%</p>
      </div>
    )
  }

  const q = QUESTIONS[index]
  const progress = Math.round((Object.keys(answers).length / QUESTIONS.length) * 100)

  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
      <div className="px-4 py-3 border-b">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold" style={{ color: 'var(--cta-dark)' }}>NailScope 🔬™</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div className="h-1.5 rounded-full transition-all progress-bar" style={{ width: `${Math.max(5, progress)}%` }} />
        </div>
        <p className="text-xs text-gray-500 text-center mt-1">Question {index + 1} of {QUESTIONS.length}</p>
      </div>

      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">{q.title}</h2>
        <div className="space-y-2">
          {q.options.map((opt) => (
            <button
              key={opt.value}
              onClick={() => handleAnswer(q.id, opt.value)}
              className="w-full text-left p-3 rounded-lg border-2 border-gray-200 hover:border-current transition-all"
              style={{ '--tw-border-opacity': 1 } as React.CSSProperties}
              onMouseEnter={(e) => {
                (e.target as HTMLButtonElement).style.borderColor = 'var(--cta)'
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLButtonElement).style.borderColor = '#e5e7eb'
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default NailScopeQuiz
