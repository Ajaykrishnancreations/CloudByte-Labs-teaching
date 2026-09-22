import { motion } from 'framer-motion'
import { ArrowRight, Cloud, Code2, Palette, Terminal } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Course } from '../../types/course'

const icons: Record<string, typeof Cloud> = {
  cloud: Cloud,
  'code-2': Code2,
  palette: Palette,
  terminal: Terminal,
}

export default function CourseCard({ course, index = 0 }: { course: Course; index?: number }) {
  const Icon = icons[course.accentIcon] ?? Cloud

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-7"
    >
      {course.flagship && (
        <span className="absolute right-5 top-5 rounded-full border border-cyan-500/40 dark:border-cyan-400/30 bg-cyan-400/10 px-2.5 py-0.5 text-[10px] font-semibold text-cyan-600 dark:text-cyan-300">
          Flagship
        </span>
      )}
      <span className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${course.heroGradient} text-slate-900 dark:text-white`}>
        <Icon size={22} />
      </span>
      <h3 className="mt-5 font-heading text-xl font-bold text-slate-900 dark:text-white">{course.title}</h3>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{course.description}</p>
      <div className="mt-4 flex flex-wrap gap-1.5">
        {course.technologies.slice(0, 5).map((tech) => (
          <span key={tech} className="rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300">
            {tech}
          </span>
        ))}
      </div>
      <Link
        to={`/courses/${course.slug}`}
        className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 dark:text-cyan-300 group-hover:gap-2.5"
      >
        Explore {course.shortTitle} <ArrowRight size={14} />
      </Link>
    </motion.div>
  )
}
