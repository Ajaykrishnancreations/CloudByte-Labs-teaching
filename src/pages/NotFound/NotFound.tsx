import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import Button from '../../components/common/Button'

export default function NotFound() {
  return (
    <>
      <Seo title="Page Not Found" description="The page you're looking for doesn't exist." path="/404" />
      <section className="flex min-h-[60vh] items-center py-20">
        <Container className="text-center">
          <p className="font-heading text-7xl font-bold text-slate-900/10 dark:text-white/10 sm:text-9xl">404</p>
          <h1 className="mt-4 font-heading text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">Page Not Found</h1>
          <p className="mt-3 text-slate-600 dark:text-slate-400">The page you're looking for doesn't exist or has moved.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/">Back to Home</Button>
            <Button to="/courses" variant="secondary">
              Explore Courses
            </Button>
          </div>
        </Container>
      </section>
    </>
  )
}
