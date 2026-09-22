import { motion } from 'framer-motion'
import { BookOpen, Eye, Hammer, MessageSquareText, TrendingUp, Rocket } from 'lucide-react'
import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'

const loop = [
  { icon: BookOpen, title: 'Understand', text: 'Trainer explains the concept.' },
  { icon: Eye, title: 'Watch', text: 'Trainer demonstrates real implementation.' },
  { icon: Hammer, title: 'Build', text: 'Student implements the feature.' },
  { icon: MessageSquareText, title: 'Review', text: 'Trainer reviews the work.' },
  { icon: TrendingUp, title: 'Improve', text: 'Student applies feedback.' },
  { icon: Rocket, title: 'Project', text: 'Concept becomes part of a real-world project.' },
]

export default function HowWeTeach() {
  return (
    <>
      <Seo
        title="How We Teach"
        description="A six-step teaching loop — understand, watch, build, review, improve, project — that mirrors how professional developers actually work."
        path="/how-we-teach"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">How We Teach</p>
            <h1 className="font-heading text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Learn the Way Developers Actually Work
            </h1>
          </div>

          <div className="relative mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {loop.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-slate-900 dark:text-white">
                  <Icon size={20} />
                </span>
                <p className="mt-3 text-xs font-semibold text-slate-500">Step {i + 1}</p>
                <h3 className="mt-1 font-heading text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-20">
            <SectionHeading eyebrow="Flexible Learning" title="Learning That Fits Around Your Life" />
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[
              { title: 'Morning Sessions', text: 'Suitable for students, job seekers and flexible schedules.' },
              { title: 'Evening Sessions', text: 'Suitable for working professionals and college students.' },
              { title: 'Weekend / Flexible', text: 'Subject to trainer and course availability.' },
            ].map((s) => (
              <div key={s.title} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6">
                <h3 className="font-heading text-base font-semibold text-slate-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{s.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-400">
            Tell us your availability and we'll help you identify a suitable learning schedule.
          </p>
        </Container>
      </section>
    </>
  )
}
