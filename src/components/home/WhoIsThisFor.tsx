import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { GraduationCap, Briefcase, Rocket } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'

const tabs = [
  {
    key: 'student',
    label: 'College Student',
    icon: GraduationCap,
    points: ['Start from fundamentals', 'Build projects while studying', 'Develop a GitHub portfolio', 'Prepare for interviews'],
    cta: 'Build My Career',
  },
  {
    key: 'graduate',
    label: 'Graduate',
    icon: Rocket,
    points: ['Structured training', 'Practical projects', 'Resume support', 'Interview preparation & career guidance'],
    cta: 'Become Job Ready',
  },
  {
    key: 'professional',
    label: 'Working Professional',
    icon: Briefcase,
    points: ['Flexible batches', 'Upskilling', 'Career transition support', 'Real-world development practices'],
    cta: 'Upgrade My Skills',
  },
]

export default function WhoIsThisFor() {
  const [active, setActive] = useState(tabs[0].key)
  const current = tabs.find((t) => t.key === active)!

  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading title="Who Is This For?" />

        <div className="mx-auto flex max-w-lg flex-wrap justify-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-1.5">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActive(tab.key)}
              className={`flex flex-1 items-center justify-center gap-1.5 rounded-full px-3 py-2.5 text-xs font-semibold transition sm:text-sm ${
                active === tab.key ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <tab.icon size={14} /> {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="mx-auto mt-8 max-w-xl rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-8 text-center"
          >
            <ul className="mx-auto grid max-w-sm gap-3 text-left">
              {current.points.map((point) => (
                <li key={point} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-300">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400" />
                  {point}
                </li>
              ))}
            </ul>
            <Button to="/contact" className="mt-7">
              {current.cta}
            </Button>
          </motion.div>
        </AnimatePresence>
      </Container>
    </section>
  )
}
