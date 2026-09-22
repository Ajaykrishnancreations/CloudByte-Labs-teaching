import { motion } from 'framer-motion'
import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import { LinkedinBadge } from '../../components/common/SocialIcons'
import { trainers } from '../../data/trainers'

export default function Trainers() {
  return (
    <>
      <Seo
        title="Our Trainers"
        description="Meet the CloudByteLabs trainers — industry professionals teaching Salesforce, MERN Stack, UI/UX and Python."
        path="/trainers"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Meet the Team"
            title="Learn From Industry Professionals"
            description="Our trainers bring real development experience into every session — so students learn not only how technology works, but how it is actually used in professional projects."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {trainers.map((trainer, i) => (
              <motion.div
                key={trainer.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-6 text-center"
              >
                <img
                  src={trainer.photo}
                  alt={trainer.name}
                  loading="lazy"
                  className="mx-auto h-24 w-24 rounded-full border border-slate-200 dark:border-white/10 object-cover"
                />
                <h3 className="mt-4 font-heading text-base font-semibold text-slate-900 dark:text-white">{trainer.name}</h3>
                <p className="text-sm text-cyan-600 dark:text-cyan-300">{trainer.role}</p>
                <p className="mt-2 text-xs text-slate-500">{trainer.experience}</p>
                <div className="mt-3 flex flex-wrap justify-center gap-1.5">
                  {trainer.technologies.map((t) => (
                    <span key={t} className="rounded-full bg-slate-100 dark:bg-white/5 px-2 py-0.5 text-[10px] font-medium text-slate-700 dark:text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-xs text-slate-600 dark:text-slate-400">{trainer.bio}</p>
                {trainer.linkedin && (
                  <a
                    href={trainer.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${trainer.name} on LinkedIn`}
                    className="mt-4 inline-flex text-slate-500 hover:text-cyan-600 dark:hover:text-cyan-300"
                  >
                    <LinkedinBadge size={18} />
                  </a>
                )}
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-slate-400 dark:text-slate-600">
            Trainer profiles shown are illustrative placeholders pending final, approved trainer bios.
          </p>
        </Container>
      </section>
    </>
  )
}
