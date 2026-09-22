import { motion } from 'framer-motion'
import { FileText, UserCircle, GitBranch, Briefcase, Users, MessagesSquare, Search, Target } from 'lucide-react'
import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import Button from '../../components/common/Button'
import { whatsappUrl } from '../../config/site'

const items = [
  { icon: FileText, title: 'Resume Preparation', text: 'Build a resume that highlights your projects and skills clearly.' },
  { icon: UserCircle, title: 'LinkedIn Profile Guidance', text: 'Present your learning journey professionally online.' },
  { icon: GitBranch, title: 'GitHub Preparation', text: 'Organise your repositories the way employers expect to see them.' },
  { icon: Briefcase, title: 'Portfolio Preparation', text: 'Package your projects into a portfolio that tells a story.' },
  { icon: Target, title: 'Coding Assignments', text: 'Practice assignments that mirror real interview expectations.' },
  { icon: MessagesSquare, title: 'Mock Technical Interviews', text: 'Practice explaining your solutions under real interview conditions.' },
  { icon: Users, title: 'HR Interview Preparation', text: 'Prepare for behavioural and HR rounds with confidence.' },
  { icon: Search, title: 'Job Search Guidance', text: 'Get guidance on where and how to apply effectively.' },
]

export default function CareerSupport() {
  return (
    <>
      <Seo
        title="Career Support"
        description="Resume, portfolio, GitHub, mock interviews and job search guidance to help CloudByteLabs learners become industry ready."
        path="/career-support"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Career Support</p>
            <h1 className="font-heading text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Become industry-ready with practical training, projects, interview preparation and career support.
            </h1>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {items.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: (i % 4) * 0.08 }}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/5 text-cyan-600 dark:text-cyan-300">
                  <Icon size={18} />
                </span>
                <h3 className="mt-4 font-heading text-sm font-semibold text-slate-900 dark:text-white">{title}</h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">{text}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Button href={whatsappUrl('Hi, I would like to talk to a career mentor.')} external>
              Talk to a Career Mentor
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
