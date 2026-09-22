import { motion } from 'framer-motion'
import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import Button from '../../components/common/Button'

export default function About() {
  return (
    <>
      <Seo
        title="About Us"
        description="CloudByteLabs is a technology training platform built around real industry experience — learn Salesforce, MERN Stack, UI/UX and Python from people who build software professionally."
        path="/about"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600 dark:text-cyan-400">About CloudByteLabs</p>
            <h1 className="font-heading text-4xl font-bold text-slate-900 dark:text-white sm:text-5xl">
              Learn from people who build real software.
            </h1>
            <p className="mt-6 text-lg text-slate-600 dark:text-slate-400">
              CloudByteLabs was founded on a simple idea: technology training should be taught by people who
              actually work with the technology — not just people who teach from a slide deck. Every program we run
              is built around practical coding, real projects, code reviews and mentorship, so learners leave with
              skills that map directly to how professional teams work.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {[
              { title: 'Our Mission', text: 'Make industry-grade technology training accessible to students, graduates and working professionals alike.' },
              { title: 'Our Approach', text: 'Understand, build, debug, test, review, improve, deploy — the same loop professional developers use.' },
              { title: 'Our Focus', text: 'Salesforce, MERN Stack, UI/UX and Python — taught by trainers with real project experience.' },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6">
                <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-14">
            <SectionHeading eyebrow="Numbers" title="Built On Real Training Experience" center={false} />
            <div className="rounded-2xl border border-dashed border-slate-300 dark:border-white/15 bg-slate-50 dark:bg-white/[0.02] p-6 text-sm text-slate-600 dark:text-slate-400">
              Statistics such as students trained, live training hours and industry mentors will be shown here once
              confirmed by CloudByteLabs — we don't publish placeholder numbers as if they were real.
            </div>
          </div>

          <div className="mt-14 text-center">
            <Button to="/contact">Talk to Our Team</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
