import { motion } from 'framer-motion'
import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import { featuredProjects } from '../../data/projects'

export default function Projects() {
  return (
    <>
      <Seo
        title="Featured Projects"
        description="Real-world capstone projects built by CloudByteLabs learners across Salesforce, MERN Stack, UI/UX and Python."
        path="/projects"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Portfolio" title="Learn By Building" />
          <div className="grid gap-8 sm:grid-cols-2">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                id={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="scroll-mt-24 overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03]"
              >
                <div className="aspect-video overflow-hidden">
                  <img src={project.image} alt={project.title} loading="lazy" className="h-full w-full object-cover" />
                </div>
                <div className="p-6">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">{project.category}</p>
                  <h3 className="mt-1.5 font-heading text-xl font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">
                    <span className="font-semibold text-slate-700 dark:text-slate-300">Problem: </span>
                    {project.problem}
                  </p>
                  <div className="mt-4">
                    <p className="mb-1.5 text-xs font-semibold text-slate-500">Technologies</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((t) => (
                        <span key={t} className="rounded-full bg-slate-100 dark:bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:text-slate-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4">
                    <p className="mb-1.5 text-xs font-semibold text-slate-500">Skills Learned</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.skills.map((s) => (
                        <span key={s} className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-[11px] font-medium text-cyan-600 dark:text-cyan-300">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
