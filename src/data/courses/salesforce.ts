import type { Course } from '../../types/course'

export const salesforce: Course = {
  id: 'salesforce',
  slug: 'salesforce',
  title: 'Salesforce',
  shortTitle: 'Salesforce',
  category: 'CRM & Cloud Development',
  flagship: true,
  description:
    'Learn Salesforce Administration, Development, Lightning Web Components, Apex, automation, security and professional development practices through hands-on projects.',
  heroDescription:
    'Learn Salesforce Administration, Development, Lightning Web Components, Apex, automation, security and professional development practices through hands-on projects.',
  technologies: ['Admin', 'LWC', 'Apex', 'SOQL', 'Flow', 'Security', 'Git', 'Testing'],
  audience: ['College Student', 'Graduate', 'Working Professional', 'Career Switcher'],
  prerequisites: ['No prior Salesforce experience required', 'Basic computer literacy'],
  heroGradient: 'from-blue-600 via-indigo-600 to-cyan-500',
  accentIcon: 'cloud',
  modules: [
    {
      title: 'Salesforce Ecosystem',
      topics: [
        'What is Salesforce?',
        'CRM fundamentals',
        'Salesforce architecture',
        'Salesforce clouds overview',
        'Salesforce terminology',
        'Trailhead',
        'Developer org',
        'Setup & App Launcher',
      ],
    },
    {
      title: 'Salesforce Administration',
      topics: [
        'Users, Roles & Profiles',
        'Permission Sets & Permission Set Groups',
        'Licenses & login access',
        'Sharing model & Organization-Wide Defaults',
        'Role hierarchy & sharing rules',
        'Manual sharing',
        'Field-Level Security',
      ],
    },
    {
      title: 'Data Modelling',
      topics: [
        'Standard & custom objects',
        'Standard & custom fields',
        'Formula fields',
        'Lookup & master-detail relationships',
        'Junction objects',
        'Schema Builder',
        'Record types & page layouts',
      ],
    },
    {
      title: 'Salesforce Data Management',
      topics: [
        'Import Wizard & Data Loader',
        'Import/export',
        'Duplicate management',
        'Validation rules',
        'Data quality & data security',
      ],
    },
    {
      title: 'Reports & Dashboards',
      topics: [
        'Tabular, summary, matrix & joined reports',
        'Filters & formulas',
        'Dashboards & dynamic dashboards',
      ],
    },
    {
      title: 'Salesforce Automation',
      topics: [
        'Flow fundamentals',
        'Record-triggered & screen flows',
        'Scheduled flows & subflows',
        'Decisions, loops & assignments',
        'Error handling & flow debugging',
        'Automation best practices',
      ],
    },
    {
      title: 'Development Fundamentals',
      topics: [
        'HTML, CSS & JavaScript (ES6+)',
        'Variables, functions, arrays & objects',
        'Async programming & Promises',
        'Modules & DOM basics',
      ],
    },
    {
      title: 'Lightning Web Components',
      topics: [
        'LWC architecture & component structure',
        'Reactive properties, getters & conditional rendering',
        'Parent/child communication & custom events',
        'Lightning Data Service & @wire',
        'Calling Apex (wire & imperative)',
        'NavigationMixin & SLDS',
        'Toasts, spinners, modals & datatables',
        'LMS, reusable components & performance',
      ],
    },
    {
      title: 'Apex Development',
      topics: [
        'Apex syntax, collections & classes',
        'OOP concepts, interfaces & inheritance',
        'Exception handling',
        'Triggers: context, bulkification & handlers',
        'Avoiding SOQL/DML inside loops & governor limits',
        'Asynchronous Apex: future, queueable, batch & scheduled',
      ],
    },
    {
      title: 'SOQL & SOSL',
      topics: [
        'SELECT, WHERE, ORDER BY & LIMIT',
        'Parent-to-child & child-to-parent relationships',
        'Aggregate queries',
        'Dynamic SOQL & SOSL',
        'Query optimisation',
      ],
    },
    {
      title: 'Security for Developers',
      topics: [
        'Sharing, CRUD & FLS',
        'with sharing / without sharing / inherited sharing',
        'Secure Apex & secure SOQL',
        'Lightning security concepts',
      ],
    },
    {
      title: 'Testing & Code Quality',
      topics: [
        'Apex test classes & test data setup',
        'Positive, negative, bulk & security test scenarios',
        'Mocking integrations & assertions',
        'LWC Jest testing',
        'Naming conventions & architecture patterns',
        'Salesforce Code Analyzer (PMD, ESLint)',
      ],
    },
    {
      title: 'Development Workflow & Integration',
      topics: [
        'VS Code & Salesforce CLI',
        'Git, GitHub, branching & pull requests',
        'Scratch/developer environments & deployments',
        'REST API callouts & Named Credentials',
        'CI/CD introduction',
      ],
    },
  ],
  projects: [
    {
      title: 'Customer Service Management System',
      description:
        'A capstone business application built with custom objects, security, automation, Apex, LWC, reports and tests.',
      skills: ['Data Modelling', 'Flow', 'Apex', 'LWC', 'Testing'],
    },
  ],
  roadmap: [
    { label: 'Salesforce Basics' },
    { label: 'Admin' },
    { label: 'Data Model' },
    { label: 'Security' },
    { label: 'Automation' },
    { label: 'JavaScript' },
    { label: 'Apex' },
    { label: 'SOQL' },
    { label: 'LWC' },
    { label: 'Testing' },
    { label: 'Git' },
    { label: 'Real Project' },
    { label: 'Interview Prep' },
    { label: 'Career Ready' },
  ],
  faq: [
    {
      question: 'Will Salesforce training include both Admin and Development?',
      answer:
        'Yes. The program covers Administration end to end and then progresses into development with Apex and Lightning Web Components.',
    },
    {
      question: 'Does the course include Lightning Web Components (LWC)?',
      answer:
        'Yes, LWC is a major part of the curriculum, including component architecture, data binding, Apex integration and testing with Jest.',
    },
    {
      question: 'Will you teach Apex?',
      answer:
        'Yes — Apex classes, triggers, asynchronous Apex, and secure, bulkified, professional coding patterns are all covered.',
    },
    {
      question: 'Do you teach code quality and testing?',
      answer:
        'Yes. You will learn Apex testing (unit tests, bulk/security scenarios), LWC Jest testing, and static analysis with Salesforce Code Analyzer.',
    },
  ],
}
