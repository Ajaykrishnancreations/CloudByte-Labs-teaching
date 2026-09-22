import { GraduationCap } from 'lucide-react'
import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import Button from '../../components/common/Button'

// Student learning dashboard/login is future scope (see PRD §84) — this page
// gives existing learners a clear, honest placeholder rather than a dead link.
export default function StudentLogin() {
  return (
    <>
      <Seo title="Student Login" description="CloudByteLabs student login." path="/student-login" />
      <section className="flex min-h-[60vh] items-center py-20">
        <Container className="text-center">
          <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-cyan-500 text-slate-900 dark:text-white">
            <GraduationCap size={28} />
          </span>
          <h1 className="mt-6 font-heading text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Student Login</h1>
          <p className="mx-auto mt-3 max-w-md text-slate-600 dark:text-slate-400">
            The learner dashboard is coming soon. Existing students, please contact your mentor for class access.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/contact">Contact Us</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
