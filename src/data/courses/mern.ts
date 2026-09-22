import type { Course } from '../../types/course'

export const mern: Course = {
  id: 'mern-stack',
  slug: 'mern-stack',
  title: 'MERN Full Stack Development',
  shortTitle: 'MERN Stack',
  category: 'Full Stack Web Development',
  description:
    'Learn frontend, backend, APIs, databases, authentication, deployment and professional development workflows using the MERN stack.',
  heroDescription:
    'Learn frontend, backend, APIs, databases, authentication, deployment and professional development workflows using the MERN stack.',
  technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
  audience: ['College Student', 'Graduate', 'Working Professional', 'Career Switcher'],
  prerequisites: ['No prior programming experience required', 'Basic computer literacy'],
  heroGradient: 'from-emerald-500 via-teal-500 to-cyan-500',
  accentIcon: 'code-2',
  modules: [
    {
      title: 'Web Fundamentals',
      topics: [
        'HTML5 & semantic HTML',
        'Forms',
        'CSS: Flexbox, Grid & responsive design',
        'JavaScript fundamentals & ES6+',
      ],
    },
    {
      title: 'JavaScript',
      topics: [
        'Variables, functions, arrays & objects',
        'Scope & closures',
        'Modules',
        'Promises & async/await',
        'Fetch API & error handling',
      ],
    },
    {
      title: 'React',
      topics: [
        'JSX, components, props & state',
        'Events, conditional rendering & lists',
        'Forms & hooks (useState, useEffect, useRef, useMemo, useCallback)',
        'Custom hooks & Context',
        'Routing & API integration',
        'Authentication & protected routes',
        'Reusable component design & performance optimisation',
        'TypeScript introduction & testing',
      ],
    },
    {
      title: 'Node.js',
      topics: [
        'Node architecture & modules',
        'NPM & environment variables',
        'File system',
        'Async programming & server development',
      ],
    },
    {
      title: 'Express.js',
      topics: [
        'Server setup & routing',
        'Controllers & middleware',
        'REST APIs & validation',
        'Error handling',
        'Authentication, authorization, logging & security',
      ],
    },
    {
      title: 'MongoDB',
      topics: [
        'Databases, collections & documents',
        'CRUD, querying & indexing',
        'Aggregation & data modelling',
        'MongoDB Atlas & Mongoose',
      ],
    },
    {
      title: 'Authentication & APIs',
      topics: [
        'Password hashing & JWT',
        'Cookies, refresh/access tokens & role-based authorization',
        'REST architecture, HTTP status codes',
        'Pagination, filtering, searching & sorting',
        'API validation & Postman',
      ],
    },
    {
      title: 'Professional Development & Deployment',
      topics: [
        'Git, GitHub, branches & pull requests',
        'Code review, ESLint & formatting',
        'Build process & environment management',
        'Frontend & backend deployment',
        'MongoDB Atlas in production & logs',
      ],
    },
  ],
  projects: [
    {
      title: 'Full Stack E-Commerce Platform',
      description:
        'A production-style full-stack application covering auth, catalog, cart, checkout flow and an admin panel.',
      skills: ['React', 'Node', 'Express', 'MongoDB', 'Authentication'],
    },
  ],
  roadmap: [
    { label: 'HTML' },
    { label: 'CSS' },
    { label: 'JavaScript' },
    { label: 'React' },
    { label: 'Node' },
    { label: 'Express' },
    { label: 'MongoDB' },
    { label: 'REST API' },
    { label: 'Authentication' },
    { label: 'Testing' },
    { label: 'Deployment' },
    { label: 'Real Project' },
  ],
  faq: [
    {
      question: 'Will MERN cover complete frontend and backend?',
      answer:
        'Yes — you will build the frontend in React, the backend with Node/Express and persist data in MongoDB, then deploy the full application.',
    },
    {
      question: 'Do I need prior programming experience?',
      answer:
        'No. The course starts from web fundamentals and JavaScript before progressing into React, Node and MongoDB.',
    },
  ],
}
