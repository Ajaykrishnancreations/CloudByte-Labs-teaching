import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { featuredProjects } from '../../data/projects'

export default function ProjectsPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="Portfolio" title="Learn By Building" />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProjects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group overflow-hidden rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03]"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-[11px] font-semibold uppercase tracking-wide text-cyan-600 dark:text-cyan-300">{project.category}</p>
                <h3 className="mt-1.5 font-heading text-sm font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">{project.problem}</p>
                <Link
                  to={`/projects#${project.id}`}
                  className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-cyan-600 dark:text-cyan-300"
                >
                  View Project <ArrowUpRight size={13} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/projects" variant="secondary">
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  )
}
