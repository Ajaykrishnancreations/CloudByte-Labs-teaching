import { AnimatePresence, motion } from 'framer-motion'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { X, Globe } from 'lucide-react'
import { supportedLanguages } from '../../i18n'
import { whatsappUrl, telUrl } from '../../config/site'
import Button from '../common/Button'
import ThemeToggle from '../common/ThemeToggle'

const links = [
  { to: '/', key: 'home' },
  { to: '/courses', key: 'courses' },
  { to: '/how-we-teach', key: 'howWeTeach' },
  { to: '/projects', key: 'projects' },
  { to: '/career-support', key: 'careerSupport' },
  { to: '/trainers', key: 'trainers' },
  { to: '/about', key: 'about' },
  { to: '/faq', key: 'faq' },
  { to: '/contact', key: 'contact' },
]

export default function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { t, i18n } = useTranslation()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-white dark:bg-slate-950 lg:hidden"
        >
          <div className="flex items-center justify-between px-4 py-4">
            <span className="font-heading text-lg font-bold text-slate-900 dark:text-white">CloudByteLabs</span>
            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-lg text-slate-900 dark:text-white"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="flex h-[calc(100%-72px)] flex-col overflow-y-auto px-4 pb-8">
            <nav className="flex flex-col gap-1">
              {links.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    `rounded-xl px-4 py-3 text-base font-medium ${
                      isActive ? 'bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white' : 'text-slate-700 dark:text-slate-300'
                    }`
                  }
                >
                  {t(`nav.${link.key}`)}
                </NavLink>
              ))}
            </nav>

            <div className="mt-4 border-t border-slate-200 dark:border-white/10 pt-4">
              <p className="mb-2 flex items-center gap-1.5 px-4 text-xs font-semibold uppercase tracking-wide text-slate-500">
                <Globe size={12} /> {t('footer.language')}
              </p>
              <div className="grid grid-cols-2 gap-2 px-4">
                {supportedLanguages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => i18n.changeLanguage(lang.code)}
                    className={`rounded-lg px-3 py-2 text-sm ${
                      i18n.language === lang.code
                        ? 'bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white'
                        : 'bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300'
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-auto flex flex-col gap-3 pt-6">
              <Button to="/courses" onClick={onClose} className="w-full">
                {t('nav.exploreCourses')}
              </Button>
              <Button href={whatsappUrl()} external variant="secondary" className="w-full">
                {t('common.whatsapp')}
              </Button>
              <Button href={telUrl()} variant="secondary" className="w-full">
                {t('common.call')}
              </Button>
              <Link
                to="/student-login"
                onClick={onClose}
                className="text-center text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
              >
                {t('nav.studentLogin')}
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
