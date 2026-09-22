import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import type { CourseModule } from '../../types/course'

export default function CurriculumAccordion({ modules }: { modules: CourseModule[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <div className="flex flex-col gap-3">
      {modules.map((module, i) => {
        const isOpen = openIndex === i
        return (
          <div key={module.title} className="overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03]">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={isOpen}
            >
              <span className="flex items-center gap-3">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-xs font-bold text-slate-900 dark:text-white">
                  {i + 1}
                </span>
                <span className="font-heading text-sm font-semibold text-slate-900 dark:text-white sm:text-base">{module.title}</span>
              </span>
              <ChevronDown size={18} className={`shrink-0 text-slate-600 dark:text-slate-400 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <ul className="grid gap-2 px-5 pb-5 sm:grid-cols-2">
                    {module.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-cyan-400" />
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
