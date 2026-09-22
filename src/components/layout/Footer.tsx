import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Cloud, Phone, Mail, MessageCircle } from 'lucide-react'
import Container from '../common/Container'
import { LinkedinBadge, InstagramBadge, YoutubeBadge } from '../common/SocialIcons'
import { siteConfig, whatsappUrl, telUrl } from '../../config/site'
import { supportedLanguages } from '../../i18n'

export default function Footer() {
  const { t, i18n } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="col-span-2">
            <Link to="/" className="flex items-center gap-2 font-heading text-lg font-bold text-slate-900 dark:text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400">
                <Cloud size={18} className="text-slate-900 dark:text-white" />
              </span>
              CloudByteLabs
            </Link>
            <p className="mt-4 max-w-xs text-sm text-slate-600 dark:text-slate-400">{t('footer.description')}</p>
            <div className="mt-5 flex gap-3">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
              >
                <LinkedinBadge size={16} />
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
              >
                <InstagramBadge size={16} />
              </a>
              <a
                href={siteConfig.social.youtube}
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10 hover:text-slate-900 dark:hover:text-white"
              >
                <YoutubeBadge size={16} />
              </a>
            </div>
          </div>

          <FooterColumn title={t('footer.courses')}>
            <FooterLink to="/courses/salesforce">Salesforce</FooterLink>
            <FooterLink to="/courses/mern-stack">MERN Stack</FooterLink>
            <FooterLink to="/courses/ui-ux">UI/UX</FooterLink>
            <FooterLink to="/courses/python">Python</FooterLink>
          </FooterColumn>

          <FooterColumn title={t('footer.company')}>
            <FooterLink to="/about">{t('nav.about')}</FooterLink>
            <FooterLink to="/trainers">{t('nav.trainers')}</FooterLink>
            <FooterLink to="/projects">{t('nav.projects')}</FooterLink>
            <FooterLink to="/career-support">{t('nav.careerSupport')}</FooterLink>
            <FooterLink to="/contact">{t('nav.contact')}</FooterLink>
          </FooterColumn>

          <FooterColumn title={t('footer.support')}>
            <FooterLink to="/faq">{t('nav.faq')}</FooterLink>
            <FooterLink to="/privacy">Privacy</FooterLink>
          </FooterColumn>
        </div>

        <div className="mt-12 grid gap-6 border-t border-slate-200 dark:border-white/10 pt-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t('footer.contact')}
            </p>
            <a href={telUrl()} className="flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
              <Phone size={14} /> {siteConfig.phoneDisplay}
            </a>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="mt-1.5 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              <MessageCircle size={14} /> {t('common.whatsapp')}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-1.5 flex items-center gap-2 text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
            >
              <Mail size={14} /> {siteConfig.email}
            </a>
          </div>

          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {t('footer.language')}
            </p>
            <div className="flex flex-wrap gap-2">
              {supportedLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => i18n.changeLanguage(lang.code)}
                  className={`rounded-full px-3 py-1 text-xs ${
                    i18n.language === lang.code
                      ? 'bg-slate-200 dark:bg-white/10 text-slate-900 dark:text-white'
                      : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-xs text-slate-400 dark:text-slate-600">
          © {year} {siteConfig.name}. {t('footer.rights')}
        </p>
      </Container>
    </footer>
  )
}

function FooterColumn({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{title}</p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  )
}

function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link to={to} className="text-sm text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white">
      {children}
    </Link>
  )
}
