import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import { siteConfig } from '../../config/site'

const sections = [
  {
    title: 'Information We Collect',
    text: 'When you use our contact form, chatbot, or request a callback, we collect the information you provide — such as your name, email, phone number and course interest.',
  },
  {
    title: 'How We Use Analytics',
    text: 'We use website analytics to understand how visitors use the site, such as which pages and courses are viewed most, so we can improve the experience.',
  },
  {
    title: 'Chat Messages',
    text: 'Conversations with our learning assistant are used to respond to your questions during your session. Chat history is not used for advertising.',
  },
  {
    title: 'Cookies',
    text: 'We use essential cookies for site functionality and, where enabled, analytics cookies to understand site usage. You can control cookies through your browser settings.',
  },
  {
    title: 'Third-Party Services',
    text: 'We may use third-party services such as WhatsApp for messaging and analytics providers. These services have their own privacy policies.',
  },
  {
    title: 'WhatsApp Redirection',
    text: 'Clicking a WhatsApp button on this site opens a chat with our team via WhatsApp. Any messages you send there are subject to WhatsApp\'s own privacy practices.',
  },
  {
    title: 'Contact Us',
    text: `If you have questions about this privacy policy, contact us at ${siteConfig.email}.`,
  },
]

export default function Privacy() {
  return (
    <>
      <Seo
        title="Privacy Policy"
        description="How CloudByteLabs collects, uses and protects information submitted through forms, chat and analytics."
        path="/privacy"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Legal</p>
            <h1 className="font-heading text-4xl font-bold text-slate-900 dark:text-white">Privacy Policy</h1>
            <p className="mt-4 text-sm text-slate-500">Last updated: {new Date().toLocaleDateString('en-IN', { year: 'numeric', month: 'long', day: 'numeric' })}</p>

            <div className="mt-10 flex flex-col gap-8">
              {sections.map((s) => (
                <div key={s.title}>
                  <h2 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{s.text}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
