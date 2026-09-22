# CloudByteLabs Website

A modern, animated marketing website for CloudByteLabs — an IT training platform focused on Salesforce (flagship), MERN Stack, UI/UX Design and Python.

## Stack

- React 19 + TypeScript + Vite
- Tailwind CSS v4 (via `@tailwindcss/vite`, no separate config file)
- React Router v7 (with route-level code splitting)
- Framer Motion (scroll reveals, animated roadmaps, page transitions)
- react-i18next (English, Tamil, Hindi, Malayalam, Kannada)
- React Hook Form + Zod (contact form validation)
- react-helmet-async (per-page SEO metadata)

## Getting started

```bash
npm install
cp .env.example .env   # already pre-filled with the current contact number
npm run dev
```

Build for production:

```bash
npm run build   # runs tsc -b && vite build, output in dist/
npm run preview # preview the production build locally
```

## Configuration

All contact details (phone, WhatsApp, email) live in **one place**:
[`src/config/site.ts`](src/config/site.ts), sourced from environment variables in `.env`
(see `.env.example`). Nothing is hardcoded into individual components — update `.env` and
every WhatsApp link, call button and footer entry updates automatically.

Current phone / WhatsApp number: **+91 63821 24970**.

## Light / dark theme

The site ships with a light and a dark theme, toggled from the sun/moon button in the
header (desktop) and mobile menu. Implementation:

- [`src/context/ThemeContext.tsx`](src/context/ThemeContext.tsx) — `ThemeProvider`/`useTheme`,
  persists the choice to `localStorage` (`cloudbytelabs-theme`) and falls back to the
  visitor's OS-level `prefers-color-scheme` on first visit.
- Class-based Tailwind dark mode (`@custom-variant dark` in `src/index.css`), toggled via a
  `dark` class on `<html>`. An inline script in `index.html` sets this class before React
  hydrates, to avoid a flash of the wrong theme.
- [`src/components/common/ThemeToggle.tsx`](src/components/common/ThemeToggle.tsx) is the
  toggle button itself.

A couple of intentionally-fixed-color accent panels (the gradient "Flagship Program" /
comparison blocks on the homepage, the CTA band, the chat header bar) keep their own
colors in both themes by design, rather than inverting — everything else (page background,
cards, text, borders, forms, nav, chatbot) adapts.

## Content architecture

Course content (curriculum, roadmap, FAQ) lives as structured data, not JSX, in
[`src/data/courses/`](src/data/courses) — one file per course
(`salesforce.ts`, `mern.ts`, `uiux.ts`, `python.ts`) sharing the `Course` type from
[`src/types/course.ts`](src/types/course.ts). The single `CourseDetail` page
([`src/pages/Courses/CourseDetail.tsx`](src/pages/Courses/CourseDetail.tsx)) renders any
course from this data, so adding a 5th course only means adding a data file + a route.

Trainers, featured projects, testimonials and FAQs follow the same pattern under `src/data/`.

## What's implemented

- All routes from the sitemap: home, courses index + 4 course detail pages, about,
  how-we-teach, trainers, projects, career-support, testimonials, contact, FAQ, privacy,
  student-login placeholder, 404.
- Responsive, mobile-first layout (tested at 375px–1440px+), animated mega-menu on desktop,
  full-screen mobile nav with language switcher and CTAs.
- Animated desktop (horizontal) / mobile (vertical) course roadmaps driven by scroll progress.
- Floating WhatsApp + Call buttons and a floating chat assistant, all reading the phone
  number from `.env` — no dead buttons.
- A rule-based chat assistant (`src/components/chatbot/`) grounded only in the course data
  above. It never invents fees, batch dates, trainer names or guarantees — for anything it
  doesn't know, it offers to connect to a mentor via WhatsApp/phone.
- A working contact form (validated client-side with Zod) that currently **simulates**
  submission (logs the lead to the console and shows a success state) — see "Backend" below.
- i18n scaffold with English fully translated and Tamil/Hindi/Malayalam/Kannada covering all
  navigation, buttons and chatbot UI strings (see `src/i18n/locales/`).
- `robots.txt`, `sitemap.xml`, per-page SEO metadata (title/description/canonical/OG/Twitter).
- `prefers-reduced-motion` support (global CSS in `src/index.css`).

## Known placeholders — replace before a public launch

- **Backend / lead capture**: there is no backend yet. The contact form currently mocks a
  submission client-side (see `src/pages/Contact/Contact.tsx`). Wire it to a real
  `POST /api/leads` endpoint (Node/Express + MongoDB, per the original PRD) to actually
  deliver leads.
- **Chatbot**: the assistant is a safe, rule-based responder with no external AI API — it
  will never fabricate information, but it also won't handle open-ended conversation. To
  upgrade to an LLM-backed assistant, add a backend `POST /api/chat` route that keeps the
  AI provider's API key server-side (never in the frontend) and swap
  `getBotResponse()` in `src/components/chatbot/chatbotKnowledge.ts` for an API call.
- **Trainers & testimonials**: `src/data/trainers.ts` and `src/data/testimonials.ts` contain
  clearly labelled placeholder names/quotes and stock avatar images — replace with real,
  approved profiles and quotes before publishing.
- **Business stats** (students trained, hours, etc.) are intentionally **not** shown as fake
  numbers (see the About page) — add them once the client confirms real figures.
- **Multi-language content**: only UI chrome (nav, buttons, chatbot) is translated into
  Tamil/Hindi/Malayalam/Kannada; long-form course/page copy remains English-only for now.
- **Student login / learner dashboard**: out of scope for this marketing site (see PRD
  future-scope section) — currently a simple "coming soon" placeholder page.

## Deployment

This is a static Vite build — `npm run build` outputs a static `dist/` folder deployable to
any static host (Vercel, Netlify, Cloudflare Pages, S3+CloudFront, etc.). Set the
`VITE_*` environment variables from `.env.example` in your hosting provider before building.
