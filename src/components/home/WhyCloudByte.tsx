import { motion } from 'framer-motion'
import { Users, Hammer, Code, GitPullRequest, Clock, Compass } from 'lucide-react'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'

const items = [
  { icon: Users, title: 'Industry Professionals', text: 'Learn from people with professional project experience.' },
  { icon: Hammer, title: 'Real Projects', text: 'Understand how requirements become production applications.' },
  { icon: Code, title: 'Practical Coding', text: 'Spend more time building and less time memorising theory.' },
  { icon: GitPullRequest, title: 'Code Reviews', text: 'Understand how professional developers structure and review code.' },
  { icon: Clock, title: 'Flexible Learning', text: 'Morning, evening and flexible sessions for students and professionals.' },
  { icon: Compass, title: 'Mentor Support', text: 'Get guidance while practising, completing assignments and preparing for interviews.' },
]

export default function WhyCloudByte() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Why CloudByteLabs" title="Training Built Around Real Industry Work" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-cyan-600 dark:text-cyan-300">
                <Icon size={18} />
              </span>
              <h3 className="mt-4 font-heading text-base font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{text}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
