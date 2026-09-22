import { lazy, Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from '../components/layout/Layout'

const Home = lazy(() => import('../pages/Home/Home'))
const CoursesIndex = lazy(() => import('../pages/Courses/CoursesIndex'))
const CourseDetail = lazy(() => import('../pages/Courses/CourseDetail'))
const About = lazy(() => import('../pages/About/About'))
const HowWeTeach = lazy(() => import('../pages/HowWeTeach/HowWeTeach'))
const Trainers = lazy(() => import('../pages/Trainers/Trainers'))
const Projects = lazy(() => import('../pages/Projects/Projects'))
const CareerSupport = lazy(() => import('../pages/CareerSupport/CareerSupport'))
const Testimonials = lazy(() => import('../pages/Testimonials/Testimonials'))
const Contact = lazy(() => import('../pages/Contact/Contact'))
const FAQ = lazy(() => import('../pages/FAQ/FAQ'))
const Privacy = lazy(() => import('../pages/Privacy/Privacy'))
const StudentLogin = lazy(() => import('../pages/StudentLogin/StudentLogin'))
const NotFound = lazy(() => import('../pages/NotFound/NotFound'))

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-8 w-8 animate-spin rounded-full border-2 border-slate-300 dark:border-white/20 border-t-cyan-400" />
    </div>
  )
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageFallback />}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/courses" element={<CoursesIndex />} />
          <Route path="/courses/:slug" element={<CourseDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/how-we-teach" element={<HowWeTeach />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/career-support" element={<CareerSupport />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/student-login" element={<StudentLogin />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
