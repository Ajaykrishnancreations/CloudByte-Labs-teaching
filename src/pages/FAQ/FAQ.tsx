import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Search } from 'lucide-react'
import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import { faqs } from '../../data/faqs'

export default function FAQ() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('All')

  const categories = useMemo(() => ['All', ...Array.from(new Set(faqs.map((f) => f.category)))], [])

  const filtered = faqs.filter((f) => {
    const matchesCategory = category === 'All' || f.category === category
    const matchesQuery =
      !query ||
      f.question.toLowerCase().includes(query.toLowerCase()) ||
      f.answer.toLowerCase().includes(query.toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <>
      <Seo
        title="Frequently Asked Questions"
        description="Answers to common questions about CloudByteLabs courses, eligibility, class timings, projects, trainers and career support."
        path="/faq"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Support" title="Frequently Asked Questions" />

          <div className="mx-auto mb-8 max-w-2xl">
            <div className="relative">
              <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search FAQs..."
                className="w-full rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 py-3 pl-11 pr-4 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none"
              />
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${
                    category === c ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 text-slate-900 dark:text-white' : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto flex max-w-3xl flex-col gap-3">
            {filtered.length === 0 && (
              <p className="text-center text-sm text-slate-500">No FAQs match your search yet — try another term.</p>
            )}
            {filtered.map((f, i) => (
              <motion.div
                key={f.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.3, delay: (i % 8) * 0.04 }}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-5"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">{f.category}</p>
                <p className="mt-1.5 font-heading text-sm font-semibold text-slate-900 dark:text-white sm:text-base">{f.question}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{f.answer}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
