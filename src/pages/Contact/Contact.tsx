import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { CheckCircle2, Mail, MapPin, Phone, MessageCircle, Clock } from 'lucide-react'
import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import { courses } from '../../data/courses'
import { siteConfig, telUrl, whatsappUrl } from '../../config/site'

const profileTypes = ['College Student', 'Graduate', 'Working Professional', 'Career Switcher', 'Other'] as const
const timings = ['Morning', 'Evening', 'Weekend', 'Flexible'] as const

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(8, 'Please enter a valid phone number'),
  course: z.string().min(1, 'Please select a course'),
  profileType: z.enum(profileTypes),
  preferredTime: z.enum(timings),
  message: z.string().optional(),
})

type FormValues = z.infer<typeof schema>

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { profileType: 'College Student', preferredTime: 'Flexible' },
  })

  const onSubmit = async (data: FormValues) => {
    setStatus('submitting')
    try {
      // No backend is wired up yet — this simulates a lead submission.
      // Replace with a real POST /api/leads call once the backend is deployed.
      await new Promise((resolve) => setTimeout(resolve, 700))
      console.info('[CloudByteLabs] Lead captured (dummy submission):', {
        ...data,
        source: 'contact',
        createdAt: new Date().toISOString(),
      })
      setStatus('success')
      reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Get in touch with CloudByteLabs — request a callback, chat on WhatsApp, or call us directly to talk about Salesforce, MERN Stack, UI/UX or Python training."
        path="/contact"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">Contact</p>
              <h1 className="font-heading text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">Let's Talk</h1>
              <p className="mt-5 text-slate-600 dark:text-slate-400">
                Tell us a bit about your goals and preferred timing, and a CloudByteLabs mentor will get back to you.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <a href={telUrl()} className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-4 hover:border-slate-300 dark:hover:border-white/20">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-500/15 text-indigo-600 dark:text-indigo-300">
                    <Phone size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Call Us</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{siteConfig.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-4 hover:border-slate-300 dark:hover:border-white/20"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-600 dark:text-emerald-300">
                    <MessageCircle size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">WhatsApp</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{siteConfig.phoneDisplay}</p>
                  </div>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-4 hover:border-slate-300 dark:hover:border-white/20"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-600 dark:text-cyan-300">
                    <Mail size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Email</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{siteConfig.email}</p>
                  </div>
                </a>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">
                    <Clock size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Business Hours</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{siteConfig.businessHours}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300">
                    <MapPin size={18} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">Location</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{siteConfig.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6 sm:p-8"
            >
              {status === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle2 size={40} className="text-emerald-600 dark:text-emerald-400" />
                  <p className="mt-4 font-heading text-lg font-semibold text-slate-900 dark:text-white">
                    Thanks! We've received your request.
                  </p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Our team will contact you shortly.</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-semibold text-cyan-600 dark:text-cyan-300 hover:underline"
                  >
                    Submit another request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 sm:grid-cols-2">
                  <Field label="Name" error={errors.name?.message}>
                    <input {...register('name')} className={inputClass} placeholder="Your full name" />
                  </Field>
                  <Field label="Email" error={errors.email?.message}>
                    <input {...register('email')} type="email" className={inputClass} placeholder="you@example.com" />
                  </Field>
                  <Field label="Phone" error={errors.phone?.message}>
                    <input {...register('phone')} type="tel" className={inputClass} placeholder="98765 43210" />
                  </Field>
                  <Field label="Course Interested In" error={errors.course?.message}>
                    <select {...register('course')} className={inputClass} defaultValue="">
                      <option value="" disabled>
                        Select a course
                      </option>
                      {courses.map((c) => (
                        <option key={c.slug} value={c.title}>
                          {c.title}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Current Status">
                    <select {...register('profileType')} className={inputClass}>
                      {profileTypes.map((p) => (
                        <option key={p} value={p}>
                          {p}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Preferred Timing">
                    <select {...register('preferredTime')} className={inputClass}>
                      {timings.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <div className="sm:col-span-2">
                    <Field label="Message">
                      <textarea {...register('message')} rows={4} className={inputClass} placeholder="Tell us more about your goals..." />
                    </Field>
                  </div>

                  {status === 'error' && (
                    <p className="sm:col-span-2 text-sm text-rose-600 dark:text-rose-400">
                      Something went wrong. Please try again, or reach us on WhatsApp / phone directly.
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="sm:col-span-2 mt-2 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-cyan-500 px-6 py-3 text-sm font-semibold text-slate-900 dark:text-white shadow-lg shadow-indigo-500/25 transition hover:brightness-110 disabled:opacity-60"
                  >
                    {status === 'submitting' ? 'Submitting...' : 'Request a Callback'}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </Container>
      </section>
    </>
  )
}

const inputClass =
  'w-full rounded-xl border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 px-4 py-2.5 text-sm text-slate-900 dark:text-white placeholder:text-slate-500 focus:border-cyan-400 focus:outline-none'

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-medium text-slate-600 dark:text-slate-400">{label}</span>
      {children}
      {error && <span className="text-xs text-rose-600 dark:text-rose-400">{error}</span>}
    </label>
  )
}
