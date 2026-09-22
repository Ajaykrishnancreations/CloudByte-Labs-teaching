import { motion } from 'framer-motion'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

const steps = [
  'Choose Your Goal',
  'Get Your Learning Roadmap',
  'Join Live Training',
  'Practice Every Concept',
  'Build Assignments',
  'Develop Real Projects',
  'Receive Code Reviews',
  'Prepare Your Portfolio',
  'Mock Interviews',
  'Career Support',
]

export default function TrainingExperience() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="How It Works" title="More Than Just Online Classes" />

        {/* Desktop horizontal flow */}
        <div className="hidden flex-wrap items-center justify-center gap-x-2 gap-y-4 lg:flex">
          {steps.map((step, i) => (
            <div key={step} className="flex items-center gap-2">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.05 }}
                className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-4 py-3 text-center text-xs font-semibold text-slate-800 dark:text-slate-200"
              >
                {step}
              </motion.div>
              {i < steps.length - 1 && <span className="text-cyan-600 dark:text-cyan-400">→</span>}
            </div>
          ))}
        </div>

        {/* Mobile vertical flow */}
        <div className="flex flex-col gap-3 lg:hidden">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-4 py-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-[11px] font-bold text-slate-900 dark:text-white">
                {i + 1}
              </span>
              <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{step}</span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
