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
  category: 'Language' | 'Frontend' | 'Mobile' | 'Database' | 'Tooling'
}

export const skills: Skill[] = [
  // Languages
  { name: 'TypeScript', level: 85, category: 'Language' },
  { name: 'JavaScript (ES6+)', level: 90, category: 'Language' },
  { name: 'Python', level: 75, category: 'Language' },
  { name: 'Java', level: 70, category: 'Language' },
  { name: 'C#', level: 70, category: 'Language' },

  // Frontend (web)
  { name: 'React', level: 90, category: 'Frontend' },
  { name: 'HTML5', level: 95, category: 'Frontend' },
  { name: 'CSS3', level: 90, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, category: 'Frontend' },

  // Mobile development
  { name: 'React Native', level: 75, category: 'Mobile' },
  { name: 'Expo', level: 75, category: 'Mobile' },
  { name: '.NET MAUI', level: 65, category: 'Mobile' },

  // Database
  { name: 'SQLite', level: 75, category: 'Database' },
  { name: 'PostgreSQL', level: 70, category: 'Database' },

  // Tooling
  { name: 'Git / GitHub', level: 85, category: 'Tooling' },
  { name: 'Vite', level: 80, category: 'Tooling' },
  { name: 'Figma', level: 80, category: 'Tooling' },
]

// รายละเอียดที่แสดงเมื่อกดเข้าไปดูโปรเจกต์ — ทุก field เป็น optional
// section ไหนไม่มีข้อมูล จะไม่ถูก render
export type ProjectDetail = {
  year?: string
  context?: string // เช่น "Senior project · Bangkok University"
  team?: string // ขนาดทีม
  problem?: string // ทำไมโปรเจกต์นี้ถึงมีอยู่
  stats?: { label: string; value: string }[] // ตัวเลขเด่นๆ
  howItWorks?: { step: string; detail: string }[] // ลำดับการทำงานของระบบ
  features?: string[]
  stack?: { group: string; items: string[] }[]
  notes?: string[] // ขอบเขต / ข้อจำกัดที่ควรพูดตามตรง
}

export type Project = {
  title: string
  description: string
  tags: string[]
  contribution?: string // ส่วนที่นักศึกษาดำเนินงาน
  images?: string[] // รูปแรกคือรูปหลักที่โชว์บนการ์ด ที่เหลือเป็น thumbnail กดสลับได้
  portrait?: boolean // true = รูปแนวตั้ง (สกรีนช็อตมือถือ) แสดงเต็มใบไม่โดนครอป
  liveUrl?: string
  repoUrl?: string
  figmaUrl?: string
  featured?: boolean
  detail?: ProjectDetail
}

export const projects: Project[] = [
  {
    title: 'The End of Mine',
    description:
      'A text-based post-apocalyptic survival game for mobile, built with .NET 9 MAUI. Players create a survivor, pick a difficulty (Easy respawn → Hard permadeath), and stay alive through a four-chapter story while managing HP, hunger, thirst, and fatigue. Layered systems — noise that attracts danger, infection risk from injuries, item durability, and a 4×4 inventory grid — make every action a trade-off. An LLM integration generates unique events, items, and chapter text on each playthrough, so no two runs are the same. SQLite handles local saves and checkpoints.',
    tags: ['.NET MAUI', 'C#', 'SQLite', 'LLM API', 'Android / iOS'],
    contribution:
      'Academic project for CS356 Mobile Application Development I, Bangkok University. Built the survival status loop, the random-event and LLM content-generation layer, and the SQLite save/load system.',
    images: [
      '/projects/the-end-of-mind/01-title.png',
      '/projects/the-end-of-mind/02-character-creation.png',
      '/projects/the-end-of-mind/03-chapter-1.png',
      '/projects/the-end-of-mind/04-ending.png',
    ],
    portrait: true,
    repoUrl: 'https://github.com/pls2s/TheEndOfMine',
    featured: true,
    detail: {
      year: '2025',
      context: 'CS356 Mobile Application Development I · Bangkok University',
      problem:
        'Most mobile survival games lean on graphics. I wanted to see how much tension you could build from text alone — where the interesting part is the arithmetic of staying alive, not the art.',
      stats: [
        { label: 'Story chapters', value: '4' },
        { label: 'Difficulty modes', value: '3' },
        { label: 'Inventory grid', value: '4×4' },
        { label: 'Platforms', value: 'Android · iOS · macOS' },
      ],
      features: [
        'Character creation — pick gender and name your survivor',
        'Three difficulty modes: Easy respawns on death, Normal is standard, Hard is permadeath',
        'Four interlocking status meters — HP, hunger, thirst, and fatigue — that drain in real time',
        'Noise mechanic: loud actions attract danger, so speed and safety pull against each other',
        'Infection risk from untreated injuries and environmental hazards',
        'Item durability — tools degrade with use and eventually have to be replaced',
        '4×4 inventory grid that forces real decisions about what to carry',
        'LLM-generated events, items, and chapter text, so no two playthroughs match',
        'Save/load checkpoints backed by SQLite',
      ],
      stack: [
        { group: 'App', items: ['.NET 9 MAUI', 'C#'] },
        { group: 'Data', items: ['SQLite'] },
        { group: 'Content generation', items: ['Typhoon / OpenAI LLM', 'Gemini API (images)'] },
        { group: 'Targets', items: ['Android', 'iOS', 'macOS (Catalyst)'] },
      ],
      notes: [
        'Coursework prototype — built to the scope of a single semester, not a shipped title.',
        'LLM generation needs an API key at runtime; without one the game falls back to authored content.',
      ],
    },
  },
  {
    title: 'Middle',
    description:
      'A fall-detection system for elderly care that needs no camera and no wearable. Two ESP32 boards read WiFi Channel State Information at 100 packets/sec — a body falling disturbs the radio signal in a way a model can learn — and a classifier turns each window of signal into a fall / no-fall call. When a fall fires, caregivers get a push notification and a 60-second window to acknowledge it; if nobody responds, the system escalates on its own to an SMS and an automated phone call. The whole point is that the elderly person wears nothing and no camera watches them.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Python', 'FastAPI', 'Supabase', 'ESP32'],
    contribution:
      'Built the Expo Router mobile app — device pairing, house/member management, and the alert acknowledge flow — against an Express + FastAPI backend.',
    images: ['/projects/middle/01-alert-flow.png'],
    repoUrl: 'https://github.com/monsasaur/TDG',
    detail: {
      year: '2025',
      context: 'Senior project · Computer Science, Bangkok University',
      team: 'Team of 5',
      problem:
        'Thailand crossed into a fully aged society in 2024 — over 14 million people are 60 or older, more than a fifth of the population. Roughly one in three of them falls each year, and the WHO ranks falls as the second leading cause of death from unintentional injury. The existing answers both have holes: cameras invade the privacy of someone\'s own home and struggle with angles and lighting, while wearables only work if the person remembers to put them on. A fall that nobody witnesses is the dangerous case, and that is the case this system is built for.',
      stats: [
        { label: 'CSI sample rate', value: '100 pkt/s' },
        { label: 'Features per window', value: '416' },
        { label: 'Acknowledge window', value: '60 s' },
        { label: 'Repeat-alert cooldown', value: '5 min' },
      ],
      howItWorks: [
        {
          step: 'Sense',
          detail:
            'Two ESP32 boards form a dedicated 2.4 GHz link — one sends packets, the other measures how the channel distorts. Movement in the room changes that distortion.',
        },
        {
          step: 'Extract',
          detail:
            'Each window of CSI becomes a 416-value feature vector: 52 subcarriers × 8 statistics (mean, std, variance, min, max, skewness, kurtosis, RMS), then standard-scaled.',
        },
        {
          step: 'Classify',
          detail:
            'A FastAPI service runs the model and returns prediction, confidence, and is_fall. Anything at or above a 0.55 probability threshold counts as a fall.',
        },
        {
          step: 'Decide',
          detail:
            'The Express API checks a per-device cooldown so one incident cannot spam the household, writes the event to Supabase, and starts the acknowledge timer.',
        },
        {
          step: 'Alert',
          detail:
            'Expo Push notifies every registered caregiver device. Acknowledging cancels the timer and stamps who confirmed it.',
        },
        {
          step: 'Escalate',
          detail:
            'If 60 seconds pass with no response, Twilio places an automated voice call and sends an SMS to the emergency contacts, and the event is marked escalated.',
        },
      ],
      features: [
        'Passive detection — the elderly person wears nothing and is never filmed',
        'Binary alert plus human acknowledgement instead of severity tiers, which keeps false positives from becoming noise',
        'Automatic escalation to phone and SMS when no caregiver responds in time',
        'Per-device 5-minute cooldown to suppress duplicate alerts from one incident',
        'Caregiver app: manage multiple houses, pair devices, invite family by QR or code, and keep emergency contacts',
        'Full alert audit trail — who acknowledged, when, whether it escalated, whether the SMS and call went out',
      ],
      stack: [
        { group: 'Hardware', items: ['ESP32 × 2', 'ESP-IDF', 'WiFi CSI'] },
        { group: 'Machine learning', items: ['Python', 'FastAPI', 'scikit-learn', 'Random Forest'] },
        { group: 'Backend', items: ['Node.js', 'Express', 'REST API + API key auth'] },
        { group: 'Data', items: ['Supabase', 'PostgreSQL'] },
        { group: 'Mobile', items: ['React Native', 'Expo', 'Expo Router', 'TypeScript'] },
        { group: 'Alerting', items: ['Expo Push Notifications', 'Twilio Voice + SMS'] },
        { group: 'Deploy', items: ['Render'] },
      ],
      notes: [
        'This is not a medical device and does not replace a caregiver or clinical monitoring.',
        'Prototype scope: CSI is collected over USB serial in a controlled indoor test area rather than streamed from every room of a real home.',
        'Tested end to end — CSI capture, API, inference, event logging, push, acknowledge, and escalation — but not yet deployed across varied real households.',
      ],
    },
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

export type Certification = {
  name: string
  issuer: string
  date: string
  image?: string
  credentialUrl?: string
}

// TIP: แก้ `name`, `issuer`, `date` ให้ตรงกับใบจริง
// ไฟล์ PDF อยู่ใน public/ — ผู้เข้าชมกดดูได้จาก credentialUrl
// TIP: แก้ `issuer` และ `date` ให้ตรงกับใบจริง
export const certifications: Certification[] = [
  {
    name: 'AWS Certified AI Practitioner',
    issuer: 'Amazon Web Services',
    date: '2025',
    image: '/certs/aws-ai-practitioner.png',
  },
  {
    name: 'AWS Academy Graduate — Machine Learning Foundations',
    issuer: 'Amazon Web Services',
    date: '2026',
    image: '/certs/aws-ml-foundations.png',
    credentialUrl: 'https://www.credly.com/go/jOQWnN37',
  },
  {
    name: 'Oracle Certified Foundations Associate',
    issuer: 'Oracle',
    date: '2025',
    image: '/certs/oracle-foundations.png',
  },
  {
    name: 'AI Governance & Ethics',
    issuer: 'Issuer name',
    date: '2025',
    image: '/certs/ai-governance-ethics.png',
  },
  {
    name: 'Cybersecurity Foundation Course',
    issuer: 'Issuer name',
    date: '2025',
    image: '/certs/cybersecurity-foundation.png',
  },
  {
    name: 'Basic to Intermediate AI',
    issuer: 'Issuer name',
    date: '2025',
    image: '/certs/basic-intermediate-ai.png',
  },
  {
    name: 'Fundamental Principles of Artificial Intelligence',
    issuer: 'AI Course Series',
    date: '2025',
    image: '/certs/course-01-ai-fundamentals.png',
  },
  {
    name: 'AI for Lifelong Learning and Self Development',
    issuer: 'AI Course Series',
    date: '2025',
    image: '/certs/course-02-ai-lifelong.png',
  },
  {
    name: 'Data and Database Fundamentals for AI Systems',
    issuer: 'AI Course Series',
    date: '2025',
    image: '/certs/course-03-ai-data.png',
  },
  {
    name: 'AI-Driven Workflow and Process Optimization',
    issuer: 'AI Course Series',
    date: '2025',
    image: '/certs/course-04-ai-workflow.png',
  },
  {
    name: 'Ethics, Security, and the Future of AI',
    issuer: 'AI Course Series',
    date: '2025',
    image: '/certs/course-05-ai-ethics.png',
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
