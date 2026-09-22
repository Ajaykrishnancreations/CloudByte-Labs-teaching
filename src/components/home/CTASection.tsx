import { motion } from 'framer-motion'
import Container from '../common/Container'
import Button from '../common/Button'
import { whatsappUrl } from '../../config/site'

export default function CTASection() {
  return (
    <section className="py-16 sm:py-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600 via-indigo-700 to-cyan-600 px-6 py-14 text-center sm:px-12"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),transparent_60%)]" />
          <h2 className="font-heading text-3xl font-bold text-white sm:text-4xl">
            Learn. Build. Become Industry Ready.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Flexible learning for students, graduates and working professionals — with mentorship every step of the
            way.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/courses" variant="secondary" className="bg-white text-indigo-700 hover:bg-white/90">
              Explore Courses
            </Button>
            <Button href={whatsappUrl()} external variant="secondary" className="border-white/40 text-white">
              Talk to a Mentor
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
