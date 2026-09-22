import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Cloud, Code2, Palette, Terminal, Database, Boxes } from 'lucide-react'
import Button from '../common/Button'
import Container from '../common/Container'

const orbitIcons = [
  { icon: Cloud, label: 'Salesforce', style: 'top-2 left-1/2 -translate-x-1/2' },
  { icon: Code2, label: 'React', style: 'top-1/4 right-0' },
  { icon: Database, label: 'MongoDB', style: 'bottom-1/4 right-2' },
  { icon: Boxes, label: 'Node.js', style: 'bottom-2 left-1/2 -translate-x-1/2' },
  { icon: Terminal, label: 'Python', style: 'bottom-1/4 left-2' },
  { icon: Palette, label: 'Figma', style: 'top-1/4 left-0' },
]

export default function Hero() {
  const { t } = useTranslation()

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(99,102,241,0.18),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,black,transparent)]" />

      <Container className="relative grid gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:py-32">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 py-1.5 text-xs font-medium text-cyan-600 dark:text-cyan-300">
            Salesforce · MERN Stack · UI/UX · Python
          </span>
          <h1 className="font-heading text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            {t('hero.title')}
          </h1>
          <p className="mt-6 max-w-xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">{t('hero.subtitle')}</p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/courses">{t('hero.ctaPrimary')}</Button>
            <Button to="/contact" variant="secondary">
              {t('hero.ctaSecondary')}
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[t('hero.point1'), t('hero.point2'), t('hero.point3'), t('hero.point4')].map((point) => (
              <div key={point} className="rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] px-3 py-2.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                {point}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative mx-auto aspect-square w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute inset-8 rounded-full border border-slate-200 dark:border-white/10" />
          <div className="absolute inset-16 rounded-full border border-slate-200 dark:border-white/10" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-indigo-500 to-cyan-400 shadow-2xl shadow-indigo-500/40 sm:h-28 sm:w-28">
              <Cloud size={40} className="text-slate-900 dark:text-white" />
            </div>
          </div>
          {orbitIcons.map(({ icon: Icon, label, style }, i) => (
            <motion.div
              key={label}
              className={`absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/80 shadow-lg backdrop-blur ${style}`}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3 + i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
            >
              <Icon size={22} className="text-cyan-600 dark:text-cyan-300" />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
