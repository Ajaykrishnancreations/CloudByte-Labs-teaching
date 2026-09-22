import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

const typical = ['Watch', 'Copy', 'Finish']
const cloudbyte = ['Understand', 'Design', 'Build', 'Debug', 'Test', 'Review', 'Improve', 'Deploy']

export default function RealDevelopment() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading title="We Teach More Than Syntax." />
        <div className="grid gap-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] p-7"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-wide text-slate-500">Typical Learning</p>
            <ul className="flex flex-col gap-3">
              {typical.map((s) => (
                <li key={s} className="flex items-center gap-2.5 text-slate-600 dark:text-slate-400">
                  <X size={16} className="text-rose-600 dark:text-rose-400" /> {s}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl border border-cyan-500/30 dark:border-cyan-400/20 bg-gradient-to-br from-indigo-50 to-cyan-50 dark:from-indigo-950/50 dark:to-cyan-950/30 p-7"
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">CloudByteLabs</p>
            <ul className="grid grid-cols-2 gap-3">
              {cloudbyte.map((s) => (
                <li key={s} className="flex items-center gap-2 text-sm font-medium text-slate-800 dark:text-slate-200">
                  <Check size={15} className="text-emerald-600 dark:text-emerald-400" /> {s}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
