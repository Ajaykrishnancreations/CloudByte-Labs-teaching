import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Code2, Palette, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import { courses } from '../../data/courses'

const icons: Record<string, typeof Cloud> = {
  cloud: Cloud,
  'code-2': Code2,
  palette: Palette,
  terminal: Terminal,
}

export default function QuickCourseNav() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading title="What Do You Want to Learn?" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, i) => {
            const Icon = icons[course.accentIcon] ?? Cloud
            return (
              <motion.div
                key={course.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6"
              >
                <div
                  className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${course.heroGradient} opacity-20 blur-2xl transition group-hover:opacity-40`}
                />
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${course.heroGradient} text-slate-900 dark:text-white`}
                >
                  <Icon size={20} />
                </span>
                <h3 className="mt-4 font-heading text-lg font-semibold text-slate-900 dark:text-white">{course.shortTitle}</h3>
                <p className="mt-1.5 text-xs text-slate-600 dark:text-slate-400">{course.technologies.slice(0, 4).join(' → ')}</p>
                <Link
                  to={`/courses/${course.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-300 group-hover:gap-2.5"
                >
                  Explore {course.shortTitle}
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
