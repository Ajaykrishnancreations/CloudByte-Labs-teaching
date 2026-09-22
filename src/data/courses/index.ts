import type { Course } from '../../types/course'
import { salesforce } from './salesforce'
import { mern } from './mern'
import { uiux } from './uiux'
import { python } from './python'

export const courses: Course[] = [salesforce, mern, uiux, python]

export const getCourseBySlug = (slug: string): Course | undefined =>
  courses.find((course) => course.slug === slug)

export { salesforce, mern, uiux, python }
