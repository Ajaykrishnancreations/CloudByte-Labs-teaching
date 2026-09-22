import type { FeaturedProject } from '../types/course'

// Placeholder project showcase — replace images/details with real student/capstone projects.
export const featuredProjects: FeaturedProject[] = [
  {
    id: 'proj-salesforce',
    title: 'Customer Service Management System',
    category: 'Salesforce',
    problem: 'Support teams needed a structured way to track cases, automate escalations and report on SLAs.',
    technologies: ['Apex', 'LWC', 'Flow', 'Reports'],
    skills: ['Data modelling', 'Automation', 'Apex triggers', 'Testing'],
    image: 'https://picsum.photos/seed/cloudbyte-sf/640/480',
  },
  {
    id: 'proj-mern',
    title: 'Full Stack E-Commerce Platform',
    category: 'MERN Stack',
    problem: 'A growing retailer needed a full storefront with cart, checkout and an admin dashboard.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    skills: ['REST APIs', 'Authentication', 'State management', 'Deployment'],
    image: 'https://picsum.photos/seed/cloudbyte-mern/640/480',
  },
  {
    id: 'proj-python',
    title: 'API & Automation Platform',
    category: 'Python',
    problem: 'A team was manually repeating data-entry tasks that could be automated through an internal API.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL'],
    skills: ['API design', 'Automation scripting', 'Testing'],
    image: 'https://picsum.photos/seed/cloudbyte-py/640/480',
  },
  {
    id: 'proj-uiux',
    title: 'End-to-End SaaS Product Design',
    category: 'UI/UX',
    problem: 'An early-stage SaaS startup needed a research-backed design for their core product experience.',
    technologies: ['Figma', 'Design Systems'],
    skills: ['User research', 'Wireframing', 'Prototyping', 'Usability testing'],
    image: 'https://picsum.photos/seed/cloudbyte-ux/640/480',
  },
]
