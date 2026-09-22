import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Container from '../common/Container'
import Button from '../common/Button'

const sequence = ['Admin', 'Security', 'Flow', 'Apex', 'SOQL', 'LWC', 'Testing', 'Code Quality', 'Real Project']

export default function SalesforceFeature() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <div className="grid items-center gap-10 rounded-3xl border border-slate-200 dark:border-white/10 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-indigo-950/60 dark:via-slate-950 dark:to-cyan-950/40 p-8 sm:p-12 lg:grid-cols-2">
          <div>
            <span className="mb-4 inline-flex items-center rounded-full border border-cyan-500/30 dark:border-cyan-400/30 bg-cyan-100 dark:bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300">
              Flagship Program
            </span>
            <h2 className="font-heading text-3xl font-bold text-slate-900 dark:text-white sm:text-4xl">
              Go Beyond Salesforce Basics.
            </h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400">
              Learn how professional Salesforce teams configure, develop, test and deliver applications — not just
              how to pass through tutorials.
            </p>
            <Button to="/courses/salesforce" className="mt-7">
              Explore Salesforce Program <ArrowRight size={16} />
            </Button>
          </div>

          <div className="flex flex-col gap-2">
            {sequence.map((step, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/[0.04] px-4 py-2.5"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-[11px] font-bold text-white">
                  {i + 1}
                </span>
                <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
