import { motion } from 'framer-motion'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  center = true,
}: {
  eyebrow?: string
  title: string
  description?: string
  center?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`mb-10 max-w-2xl sm:mb-14 ${center ? 'mx-auto text-center' : ''}`}
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">{eyebrow}</p>
      )}
      <h2 className="font-heading text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base text-slate-600 dark:text-slate-400 sm:text-lg">{description}</p>}
    </motion.div>
  )
}
