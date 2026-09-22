export interface CourseModule {
  title: string
  topics: string[]
}

export interface CourseProject {
  title: string
  description: string
  skills: string[]
}

export interface RoadmapItem {
  label: string
}

export interface CourseFAQ {
  question: string
  answer: string
}

export interface Course {
  id: string
  slug: string
  title: string
  shortTitle: string
  category: string
  flagship?: boolean
  description: string
  heroDescription: string
  technologies: string[]
  audience: string[]
  prerequisites: string[]
  modules: CourseModule[]
  projects: CourseProject[]
  roadmap: RoadmapItem[]
  faq: CourseFAQ[]
  heroGradient: string
  accentIcon: string
}

export interface Trainer {
  id: string
  name: string
  role: string
  experience: string
  technologies: string[]
  bio: string
  linkedin?: string
  photo: string
}

export interface FeaturedProject {
  id: string
  title: string
  category: string
  problem: string
  technologies: string[]
  skills: string[]
  image: string
}

export interface Testimonial {
  id: string
  name: string
  course: string
  outcome: string
  quote: string
  photo: string
}

export interface FAQItem {
  category: string
  question: string
  answer: string
}
