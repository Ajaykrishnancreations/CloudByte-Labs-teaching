import { courses } from '../../data/courses'
import { siteConfig } from '../../config/site'

export interface QuickAction {
  label: string
  key: string
}

export const quickActions: QuickAction[] = [
  { label: 'Salesforce', key: 'salesforce' },
  { label: 'MERN Stack', key: 'mern-stack' },
  { label: 'UI/UX', key: 'ui-ux' },
  { label: 'Python', key: 'python' },
  { label: 'Course Fees', key: 'fees' },
  { label: 'Batch Timings', key: 'timings' },
  { label: 'Talk to Mentor', key: 'mentor' },
]

const NO_INFO_RESPONSE =
  "I don't want to give you incorrect information. Would you like to speak with a CloudByteLabs mentor?"

const courseSummary = (slug: string) => {
  const course = courses.find((c) => c.slug === slug)
  if (!course) return NO_INFO_RESPONSE
  const modules = course.modules
    .slice(0, 5)
    .map((m) => m.title)
    .join(', ')
  return `${course.title}: ${course.description}\n\nMajor topics: ${modules}${
    course.modules.length > 5 ? ', and more' : ''
  }.\n\nWould you like to see the full curriculum or talk to a mentor about this program?`
}

// Simple, rule-based responses grounded only in known site data.
// This intentionally never invents fees, batch dates, trainer names or guarantees.
export function getBotResponse(rawInput: string): string {
  const input = rawInput.toLowerCase().trim()

  if (!input) return "Could you tell me a bit more about what you'd like to learn?"

  for (const course of courses) {
    if (
      input.includes(course.slug.replace('-', ' ')) ||
      input.includes(course.title.toLowerCase()) ||
      input.includes(course.shortTitle.toLowerCase())
    ) {
      return courseSummary(course.slug)
    }
  }

  if (/fee|price|cost|pricing/.test(input)) {
    return `I don't have exact fee details to share here. ${NO_INFO_RESPONSE}`
  }

  if (/batch|schedule|timing|time|when.*(start|class)/.test(input)) {
    return `We offer morning, evening and flexible sessions to fit around study or work. Exact batch dates are confirmed by a mentor — would you like to talk to one on WhatsApp or by phone (${siteConfig.phoneDisplay})?`
  }

  if (/work|job|professional|evening|flexible/.test(input) && /(attend|join|class|learn)/.test(input)) {
    return "Great question! We run morning, evening and flexible sessions specifically so working professionals can attend. Would you like to speak with a mentor about a schedule that fits you?"
  }

  if (/mentor|talk|contact|call|human|agent/.test(input)) {
    return 'Sure — you can reach a CloudByteLabs mentor directly over WhatsApp, phone, or the contact form. Which would you prefer?'
  }

  if (/project/.test(input)) {
    return 'Every course includes hands-on assignments and a capstone project — for example a Salesforce Customer Service Management System, a MERN e-commerce platform, a Python API & automation platform, or an end-to-end SaaS design in UI/UX. Want details on a specific course?'
  }

  if (/beginner|experience|prerequisite/.test(input)) {
    return 'All four programs — Salesforce, MERN Stack, UI/UX and Python — are designed to start from the fundamentals, so no prior experience is required.'
  }

  if (/hi|hello|hey/.test(input)) {
    return "👋 Hi! I'm the CloudByteLabs Learning Assistant. What would you like to learn today — Salesforce, MERN Stack, UI/UX or Python?"
  }

  return NO_INFO_RESPONSE
}
