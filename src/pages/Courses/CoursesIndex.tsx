import Seo from '../../utils/Seo'
import Container from '../../components/common/Container'
import SectionHeading from '../../components/common/SectionHeading'
import CourseCard from '../../components/courses/CourseCard'
import { courses } from '../../data/courses'

export default function CoursesIndex() {
  return (
    <>
      <Seo
        title="Courses — Salesforce, MERN Stack, UI/UX, Python"
        description="Explore CloudByteLabs training programs: Salesforce, MERN Stack, UI/UX Design and Python — practical, project-based and industry-focused."
        path="/courses"
      />
      <section className="py-16 sm:py-20">
        <Container>
          <SectionHeading
            eyebrow="Programs"
            title="Choose Your Path"
            description="Four practical, project-based programs designed around how technology is actually used in the industry."
          />
          <div className="grid gap-6 sm:grid-cols-2">
            {courses.map((course, i) => (
              <CourseCard key={course.slug} course={course} index={i} />
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
