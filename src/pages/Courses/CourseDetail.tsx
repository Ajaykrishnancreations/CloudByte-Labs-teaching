import { useParams, Navigate, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import Button from '../../components/common/Button'
import CurriculumAccordion from '../../components/courses/CurriculumAccordion'
import SalesforceDashboardMock from '../../components/courses/SalesforceDashboardMock'
import Roadmap from '../../components/roadmap/Roadmap'
import { getCourseBySlug } from '../../data/courses'
import { whatsappUrl } from '../../config/site'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = slug ? getCourseBySlug(slug) : undefined

  if (!course) return <Navigate to="/courses" replace />

  return (
    <>
      <Seo
        title={`${course.title} Training — ${course.category}`}
        description={course.heroDescription}
        path={`/courses/${course.slug}`}
      />

      {/* Hero */}
      <section className="relative overflow-hidden py-16 sm:py-20">
        <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${course.heroGradient} opacity-[0.08]`} />
        <Container className={`relative ${course.flagship ? 'grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center' : ''}`}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {course.flagship && (
              <span className="mb-4 inline-flex items-center rounded-full border border-cyan-500/40 dark:border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-semibold text-cyan-600 dark:text-cyan-300">
                Flagship Program
              </span>
            )}
            <h1 className="max-w-3xl font-heading text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-4xl md:text-5xl">
              Become a Job-Ready {course.title} Professional
            </h1>
            <p className="mt-5 max-w-2xl text-base text-slate-600 dark:text-slate-400 sm:text-lg">{course.heroDescription}</p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="#curriculum">
                View Curriculum <ArrowRight size={16} />
              </Button>
              <Button href={whatsappUrl(`Hi, I'd like to talk to a mentor about the ${course.title} program.`)} external variant="secondary">
                Talk to a Mentor
              </Button>
              <Button to="/contact" variant="secondary">
                Join Next Batch
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap gap-2">
              {course.technologies.map((tech) => (
                <span key={tech} className="rounded-full bg-slate-100 dark:bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-700 dark:text-slate-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {course.flagship && <SalesforceDashboardMock />}
        </Container>
      </section>

      {/* Audience & prerequisites */}
      <section className="py-10">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">Who Is This For</p>
              <ul className="flex flex-col gap-2">
                {course.audience.map((a) => (
                  <li key={a} className="text-sm text-slate-700 dark:text-slate-300">
                    {a}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">Prerequisites</p>
              <ul className="flex flex-col gap-2">
                {course.prerequisites.map((p) => (
                  <li key={p} className="text-sm text-slate-700 dark:text-slate-300">
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* Curriculum */}
      <section id="curriculum" className="scroll-mt-24 py-10">
        <Container>
          <SectionHeading eyebrow="Curriculum" title="What You'll Learn" center={false} />
          <CurriculumAccordion modules={course.modules} />
        </Container>
      </section>

      {/* Capstone project */}
      <section className="py-10">
        <Container>
          <SectionHeading eyebrow="Capstone" title="Learn By Building" center={false} />
          <div className="grid gap-5 sm:grid-cols-2">
            {course.projects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6">
                <h3 className="font-heading text-lg font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.skills.map((s) => (
                    <span key={s} className="rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Roadmap */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Your Journey" title={`${course.shortTitle} Roadmap`} />
          <Roadmap items={course.roadmap} />
        </Container>
      </section>

      {/* FAQ */}
      {course.faq.length > 0 && (
        <section className="py-10 pb-20">
          <Container>
            <SectionHeading eyebrow="Questions" title="Frequently Asked" center={false} />
            <div className="grid gap-4 sm:grid-cols-2">
              {course.faq.map((f) => (
                <div key={f.question} className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-5">
                  <p className="font-heading text-sm font-semibold text-slate-900 dark:text-white">{f.question}</p>
                  <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{f.answer}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link to="/faq" className="text-sm font-semibold text-cyan-600 dark:text-cyan-300 hover:underline">
                See all FAQs →
              </Link>
            </div>
          </Container>
        </section>
      )}
    </>
  )
}
