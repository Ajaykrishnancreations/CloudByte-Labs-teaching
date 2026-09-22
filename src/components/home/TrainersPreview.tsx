import { motion } from 'framer-motion'
import Container from '../common/Container'
import SectionHeading from '../common/SectionHeading'
import Button from '../common/Button'
import { LinkedinBadge } from '../common/SocialIcons'
import { trainers } from '../../data/trainers'

export default function TrainersPreview() {
  return (
    <section className="py-16 sm:py-20">
      <Container>
        <SectionHeading
          eyebrow="Meet the Team"
          title="Learn From Industry Professionals"
          description="Our trainers bring real development experience into every session — so students learn not only how technology works, but how it is actually used in professional projects."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {trainers.map((trainer, i) => (
            <motion.div
              key={trainer.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-5 text-center"
            >
              <img
                src={trainer.photo}
                alt={trainer.name}
                loading="lazy"
                className="mx-auto h-20 w-20 rounded-full border border-slate-200 dark:border-white/10 object-cover"
              />
              <h3 className="mt-4 font-heading text-sm font-semibold text-slate-900 dark:text-white">{trainer.name}</h3>
              <p className="text-xs text-cyan-600 dark:text-cyan-300">{trainer.role}</p>
              <p className="mt-2 text-xs text-slate-500">{trainer.experience}</p>
              {trainer.linkedin && (
                <a
                  href={trainer.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${trainer.name} on LinkedIn`}
                  className="mt-3 inline-flex text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-300"
                >
                  <LinkedinBadge size={16} />
                </a>
              )}
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button to="/trainers" variant="secondary">
            Meet All Trainers
          </Button>
        </div>
      </Container>
    </section>
  )
}
