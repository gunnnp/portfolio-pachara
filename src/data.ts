// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// ────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Pachara Torchot',
  role: 'Frontend Developer',
  tagline: 'I build fast, accessible, and beautiful web experiences.',
  location: 'Bangkok, Thailand',
  email: 'pacharatorchot@gmail.com',
  socials: {
    github: 'https://github.com/gunnnp',
    linkedin: 'https://www.linkedin.com/in/pachara-torchot-b91879423/',
  },
  about: [
    "I'm a frontend developer passionate about crafting delightful user interfaces and turning complex problems into simple, intuitive experiences.",
    "I care deeply about performance, accessibility, and design details. When I'm not coding, I explore new tools and contribute to open-source projects.",
  ],
  highlights: [
    { label: 'Years coding', value: '2+' },
    { label: 'Projects built', value: '10+' },
    { label: 'Coffee cups', value: '∞' },
  ],
}

export type Education = {
  school: string
  degree: string
  period: string
  detail?: string
}

export const education: Education[] = [
  {
    school: 'Your University',
    degree: 'B.Sc. in Computer Science (or your field)',
    period: '2022 – Present',
    detail: 'Relevant coursework: Web Development, Data Structures, UI/UX Design.',
  },
]

export type Skill = {
  name: string
  level: number // 0 – 100
  category: 'Language' | 'Framework' | 'Styling' | 'Tooling'
}

export const skills: Skill[] = [
  { name: 'HTML5', level: 95, category: 'Language' },
  { name: 'CSS3', level: 90, category: 'Language' },
  { name: 'JavaScript (ES6+)', level: 90, category: 'Language' },
  { name: 'TypeScript', level: 85, category: 'Language' },
  { name: 'React', level: 90, category: 'Framework' },
  { name: 'Next.js', level: 80, category: 'Framework' },
  { name: 'Vue', level: 60, category: 'Framework' },
  { name: 'Tailwind CSS', level: 90, category: 'Styling' },
  { name: 'Sass / SCSS', level: 75, category: 'Styling' },
  { name: 'Figma', level: 80, category: 'Tooling' },
  { name: 'Git / GitHub', level: 85, category: 'Tooling' },
  { name: 'Vite', level: 80, category: 'Tooling' },
]

export type Project = {
  title: string
  description: string
  tags: string[]
  contribution?: string // ส่วนที่นักศึกษาดำเนินงาน
  image?: string
  liveUrl?: string
  repoUrl?: string
  figmaUrl?: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    title: 'Project One',
    description:
      'A responsive landing page featuring smooth scroll animations, dark mode, and a fully custom design system.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    contribution: 'Designed the UI in Figma, implemented all components, and handled deployment.',
    liveUrl: '#',
    repoUrl: '#',
    featured: true,
  },
  {
    title: 'Project Two',
    description:
      'A dashboard for tracking productivity metrics with charts, dark mode, and keyboard shortcuts.',
    tags: ['Next.js', 'TypeScript', 'Recharts'],
    contribution: 'Built the data visualization layer and dashboard layout.',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Three',
    description:
      'An e-commerce prototype with cart, checkout flow, and animated transitions between routes.',
    tags: ['React', 'Framer Motion', 'Zustand'],
    contribution: 'Implemented the cart state management and page transitions.',
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Project Four',
    description:
      'A weather app that fetches live data with graceful loading states and offline support.',
    tags: ['React', 'Vite', 'PWA'],
    contribution: 'Handled API integration, loading states, and PWA setup.',
    liveUrl: '#',
    repoUrl: '#',
  },
]

export type Experience = {
  company: string
  role: string
  period: string
  location?: string
  bullets: string[]
}

export const experience: Experience[] = [
  {
    company: 'Company / Organization Name',
    role: 'Frontend Developer Intern',
    period: 'Jun 2025 – Aug 2025',
    location: 'Bangkok, Thailand',
    bullets: [
      'Built and shipped 3+ features on the customer-facing web app using React and TypeScript.',
      'Collaborated with designers to improve UI consistency across pages.',
      'Improved page performance by reducing bundle size and lazy-loading routes.',
    ],
  },
]

export type Certification = {
  name: string
  issuer: string
  date: string
  credentialUrl?: string
}

export const certifications: Certification[] = [
  {
    name: 'Responsive Web Design',
    issuer: 'freeCodeCamp',
    date: '2024',
    credentialUrl: '#',
  },
  {
    name: 'JavaScript Algorithms and Data Structures',
    issuer: 'freeCodeCamp',
    date: '2024',
    credentialUrl: '#',
  },
]

export type Activity = {
  title: string
  category: 'Competition' | 'Club' | 'Seminar' | 'Volunteer'
  date: string
  role?: string
  description: string
  image?: string
}

export const activities: Activity[] = [
  {
    title: 'Hackathon Name',
    category: 'Competition',
    date: '2025',
    role: 'Frontend Developer',
    description:
      'Built the frontend of a web app under 24 hours as part of a 4-person team. Finalist / participant.',
  },
  {
    title: 'Programming Club',
    category: 'Club',
    date: '2023 – Present',
    role: 'Member',
    description:
      'Joined weekly workshops on modern web development, contributed to peer code reviews and study group sessions.',
  },
  {
    title: 'Tech Seminar Name',
    category: 'Seminar',
    date: '2024',
    description:
      'Attended a seminar on modern frontend architecture and web performance best practices.',
  },
]
