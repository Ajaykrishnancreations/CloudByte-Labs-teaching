import type { Course } from '../../types/course'

export const uiux: Course = {
  id: 'ui-ux',
  slug: 'ui-ux',
  title: 'UI/UX Design',
  shortTitle: 'UI/UX',
  category: 'Product Design',
  description:
    'Learn user research, information architecture, wireframing, visual design, Figma, design systems and developer handoff through an end-to-end product design workflow.',
  heroDescription: 'Design Digital Products People Love to Use.',
  technologies: ['Research', 'Figma', 'Prototyping', 'Design Systems'],
  audience: ['College Student', 'Graduate', 'Working Professional', 'Career Switcher'],
  prerequisites: ['No design experience required', 'An eye for detail helps'],
  heroGradient: 'from-fuchsia-500 via-purple-500 to-indigo-500',
  accentIcon: 'palette',
  modules: [
    {
      title: 'UX Foundations',
      topics: ['UX principles', 'Design thinking', 'Product thinking', 'User-centred design'],
    },
    {
      title: 'Research',
      topics: ['User interviews', 'Surveys', 'Competitor analysis', 'Personas & problem statements'],
    },
    {
      title: 'Information Architecture',
      topics: ['User flows', 'Site maps', 'Navigation', 'Content hierarchy'],
    },
    {
      title: 'Wireframes',
      topics: ['Low fidelity', 'Mid fidelity', 'User flows'],
    },
    {
      title: 'UI Design',
      topics: ['Typography', 'Colour', 'Layout & spacing', 'Hierarchy', 'Grid systems', 'Icons'],
    },
    {
      title: 'Figma',
      topics: ['Frames & components', 'Auto Layout', 'Variants & variables', 'Libraries & prototyping'],
    },
    {
      title: 'Design Systems',
      topics: ['Tokens', 'Components', 'Patterns', 'Documentation'],
    },
    {
      title: 'Responsive Design & Accessibility',
      topics: ['Desktop, tablet & mobile breakpoints', 'Contrast', 'Keyboard usability', 'Accessible forms & components'],
    },
    {
      title: 'Prototype, Testing & Handoff',
      topics: [
        'Interactive prototypes',
        'Usability testing, feedback & iteration',
        'Developer handoff specifications',
        'Design tokens & responsive rules',
      ],
    },
  ],
  projects: [
    {
      title: 'End-to-End SaaS Product Design',
      description:
        'Take a product from research through wireframes, visual design, prototype and usability testing to a polished portfolio case study.',
      skills: ['Research', 'Wireframing', 'Figma', 'Design Systems', 'Prototyping'],
    },
  ],
  roadmap: [
    { label: 'Research' },
    { label: 'Problem' },
    { label: 'Persona' },
    { label: 'User Flow' },
    { label: 'Wireframe' },
    { label: 'Visual Design' },
    { label: 'Prototype' },
    { label: 'Test' },
    { label: 'Design System' },
    { label: 'Portfolio' },
  ],
  faq: [
    {
      question: 'Will UI/UX include Figma?',
      answer:
        'Yes — Figma is used throughout the course, from wireframes and components to prototyping and design systems.',
    },
    {
      question: 'Do I need prior design experience?',
      answer:
        'No. The course starts with UX foundations and research before moving into wireframes, visual design and Figma.',
    },
  ],
}
