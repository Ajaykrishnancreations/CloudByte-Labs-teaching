import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { ChevronDown, Menu, Globe, Cloud } from 'lucide-react'
import { courses } from '../../data/courses'
import { supportedLanguages } from '../../i18n'
import Button from '../common/Button'
import Container from '../common/Container'
import ThemeToggle from '../common/ThemeToggle'
import MobileNav from './MobileNav'

const navLinks = [
  { to: '/', key: 'home' },
  { to: '/how-we-teach', key: 'howWeTeach' },
  { to: '/projects', key: 'projects' },
  { to: '/career-support', key: 'careerSupport' },
  { to: '/about', key: 'about' },
  { to: '/contact', key: 'contact' },
]

export default function Header() {
  const { t, i18n } = useTranslation()
  const [scrolled, setScrolled] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl' : 'bg-transparent'
      }`}
    >
      <Container>
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold text-slate-900 dark:text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400">
              <Cloud size={18} className="text-slate-900 dark:text-white" />
            </span>
            CloudByteLabs
          </Link>

          <nav className="hidden items-center gap-0.5 whitespace-nowrap lg:flex xl:gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                }`
              }
            >
              {t('nav.home')}
            </NavLink>

            <div
              className="relative"
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 transition hover:text-slate-900 dark:hover:text-white">
                {t('nav.courses')}
                <ChevronDown size={14} className={`transition ${coursesOpen ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {coursesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute left-1/2 top-full grid w-[560px] -translate-x-1/2 grid-cols-2 gap-2 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 p-4 shadow-2xl backdrop-blur-xl"
                  >
                    {courses.map((c) => (
                      <Link
                        key={c.slug}
                        to={`/courses/${c.slug}`}
                        className="rounded-xl p-3 transition hover:bg-slate-100 dark:hover:bg-white/5"
                      >
                        <p className="font-heading text-sm font-semibold text-slate-900 dark:text-white">{c.title}</p>
                        <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{c.technologies.slice(0, 4).join(' + ')}</p>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {navLinks.slice(1).map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `rounded-full px-3 py-2 text-sm font-medium transition ${
                    isActive ? 'text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
                  }`
                }
              >
                {t(`nav.${link.key}`)}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <div className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 dark:border-white/10 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-slate-400 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white"
              >
                <Globe size={14} />
                {supportedLanguages.find((l) => l.code === i18n.language)?.label ?? 'English'}
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full mt-2 w-40 rounded-xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-slate-950/95 p-1.5 shadow-2xl backdrop-blur-xl"
                  >
                    {supportedLanguages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          i18n.changeLanguage(lang.code)
                          setLangOpen(false)
                        }}
                        className={`block w-full rounded-lg px-3 py-2 text-left text-sm ${
                          i18n.language === lang.code
                            ? 'bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white'
                            : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white'
                        }`}
                      >
                        {lang.label}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <ThemeToggle />
            <Button to="/contact" variant="secondary" className="px-4 py-2 text-xs">
              {t('nav.talkToUs')}
            </Button>
            <Button to="/courses" className="px-4 py-2 text-xs">
              {t('nav.exploreCourses')}
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 dark:text-white"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </Container>
    </header>
    <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  )
}
