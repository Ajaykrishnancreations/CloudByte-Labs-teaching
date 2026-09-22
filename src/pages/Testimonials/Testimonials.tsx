import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import { testimonials } from '../../data/testimonials'

export default function Testimonials() {
  return (
    <>
      <Seo
        title="Testimonials"
        description="Hear from CloudByteLabs learners about their experience across Salesforce, MERN Stack, UI/UX and Python training."
        path="/testimonials"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading eyebrow="Learner Voices" title="What Learners Say" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.03] p-7"
              >
                <Quote size={22} className="text-cyan-500/70 dark:text-cyan-400/60" />
                <p className="mt-4 text-sm text-slate-700 dark:text-slate-300">{testimonial.quote}</p>
                <div className="mt-6 flex items-center gap-3">
                  <img src={testimonial.photo} alt={testimonial.name} className="h-11 w-11 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-xs text-slate-500">{testimonial.course}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-10 text-center text-xs text-slate-400 dark:text-slate-600">
            Sample testimonials shown for layout purposes — replace with real, approved learner quotes before
            launch.
          </p>
        </Container>
      </section>
    </>
  )
}
