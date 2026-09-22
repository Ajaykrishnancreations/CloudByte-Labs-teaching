import type { Course } from '../../types/course'

export const python: Course = {
  id: 'python',
  slug: 'python',
  title: 'Python Development',
  shortTitle: 'Python',
  category: 'Programming & Automation',
  description:
    'Learn Python programming, data structures, OOP, file handling, databases, APIs, automation and testing through practical projects.',
  heroDescription: 'Learn Python Through Practical Programming.',
  technologies: ['Python', 'APIs', 'Automation', 'FastAPI/Flask'],
  audience: ['College Student', 'Graduate', 'Working Professional', 'Career Switcher'],
  prerequisites: ['No prior programming experience required', 'Basic computer literacy'],
  heroGradient: 'from-amber-500 via-orange-500 to-rose-500',
  accentIcon: 'terminal',
  modules: [
    {
      title: 'Fundamentals',
      topics: ['Setup & syntax', 'Variables & data types', 'Operators', 'Conditions & loops'],
    },
    {
      title: 'Data Structures',
      topics: ['Lists', 'Tuples', 'Sets', 'Dictionaries'],
    },
    {
      title: 'Functions',
      topics: ['Parameters & return values', 'Scope', 'Lambda functions'],
    },
    {
      title: 'Object-Oriented Programming',
      topics: ['Classes & objects', 'Constructors', 'Encapsulation', 'Inheritance & polymorphism'],
    },
    {
      title: 'Advanced Python',
      topics: ['Comprehensions', 'Iterators & generators', 'Decorators', 'Context managers'],
    },
    {
      title: 'Error Handling & Files',
      topics: ['Exceptions & custom exceptions', 'Debugging', 'Text, JSON & CSV files'],
    },
    {
      title: 'Modules, Database & APIs',
      topics: [
        'Modules, packages, pip & virtual environments',
        'SQL basics & database connections',
        'HTTP, JSON & REST APIs',
      ],
    },
    {
      title: 'Backend Introduction & Automation',
      topics: ['FastAPI or Flask fundamentals', 'Practical automation scripts', 'Unit testing & code organisation'],
    },
  ],
  projects: [
    {
      title: 'API & Automation Platform',
      description:
        'Build a practical Python API and automation platform that connects to a database and external services.',
      skills: ['Python', 'APIs', 'Automation', 'Testing'],
    },
  ],
  roadmap: [
    { label: 'Syntax' },
    { label: 'Logic' },
    { label: 'Data Structures' },
    { label: 'Functions' },
    { label: 'OOP' },
    { label: 'Files' },
    { label: 'Packages' },
    { label: 'Database' },
    { label: 'APIs' },
    { label: 'Automation' },
    { label: 'Project' },
  ],
  faq: [
    {
      question: 'Does Python require previous coding experience?',
      answer:
        'No. The course starts from fundamentals — syntax, data types and logic — before progressing to OOP, APIs and automation.',
    },
    {
      question: 'Will I build a real project?',
      answer:
        'Yes — the capstone project has you build an API, automation platform or practical Python application from scratch.',
    },
  ],
}
