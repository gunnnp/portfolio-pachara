// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO
// ────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Pachara Torchot',
  role: 'Full Stack Developer',
  tagline: 'I build reliable web and mobile products, from interface to backend.',
  location: 'Phra Nakhon Si Ayutthaya, Thailand',
  email: 'pacharatorchot@gmail.com',
  phone: '0985324192',
  socials: {
    github: 'https://github.com/gunnnp',
    linkedin: 'https://www.linkedin.com/in/pachara-torchot-b91879423/',
  },
  about: [
    "I'm a fourth-year Computer Science student at Bangkok University, in the Faculty of Information Technology and Innovation. I work as a full-stack developer with a focus on the frontend, and I enjoy turning ideas into websites and apps that are clean, easy to use, and reliable.",
    "On the frontend I work mainly with React, React Native, Tailwind, and Vite. On the backend I'm comfortable with Node.js, FastAPI, REST APIs, and databases such as PostgreSQL and SQLite — enough to build a feature from start to finish. I also use AI as a daily tool to work faster and keep learning.",
    'I like to begin with a real problem and build toward something people can genuinely use, with care for the small details that make a product feel well made. I enjoy working on a team, sharing ideas, and keeping a positive attitude while we get things done together.',
  ],
  highlights: [
    { label: 'Years coding', value: '2+' },
    { label: 'Projects built', value: '10+' },
    { label: 'Coffee cups', value: '∞' },
  ],
}

export type Education = {
  stage: string // ป้ายกำกับระดับ เช่น "Secondary education", "Current · Year 4"
  school: string
  degree: string
  detail?: string
  gpa?: string // เกรดเฉลี่ย เช่น "3.81"
  current?: boolean // true = จุดไทม์ไลน์เป็นสีเด่น (ระดับปัจจุบัน)
}

export const education: Education[] = [
  {
    stage: 'Secondary education',
    school: 'Winit Suksa School (under Royal Patronage)',
    degree: 'Textbook Program',
    gpa: '3.81',
  },
  {
    stage: 'Current · Year 4',
    school: 'Bangkok University',
    degree: 'Computer Science',
    detail: 'School of Information Technology and Innovation',
    gpa: '3.22',
    current: true,
  },
]

// icon = ชื่อไฟล์ใน /skills-icons/{icon}.svg  หรือ glyph inline: 'wifi' | 'chip' | 'api'
// ไม่มี icon = แสดงเป็นตัวอักษรย่อ (monogram)
export type SkillItem = { name: string; icon?: string }
export type SkillGroup = { key: string; items: SkillItem[] }

export const skillGroups: SkillGroup[] = [
  {
    key: 'languages',
    items: [
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'Python', icon: 'python' },
      { name: 'Java', icon: 'java' },
      { name: 'C#', icon: 'csharp' },
      { name: 'C++', icon: 'cplusplus' },
    ],
  },
  {
    key: 'webMobile',
    items: [
      { name: 'React', icon: 'react' },
      { name: 'HTML5', icon: 'html5' },
      { name: 'CSS3', icon: 'css3' },
      { name: 'Tailwind', icon: 'tailwindcss' },
      { name: 'React Native', icon: 'react' },
      { name: 'Expo', icon: 'expo' },
      { name: '.NET MAUI', icon: 'dotnet' },
    ],
  },
  {
    key: 'backendData',
    items: [
      { name: 'Node.js', icon: 'nodejs' },
      { name: 'SQLite', icon: 'sqlite' },
      { name: 'PostgreSQL', icon: 'postgresql' },
    ],
  },
  {
    key: 'aiMl',
    items: [{ name: 'NumPy', icon: 'numpy' }],
  },
  {
    key: 'devTools',
    items: [
      { name: 'GitHub', icon: 'github' },
      { name: 'Git', icon: 'git' },
      { name: 'VS Code', icon: 'vscode' },
      { name: 'Visual Studio', icon: 'visualstudio' },
      { name: 'Jira', icon: 'jira' },
      { name: 'Xcode', icon: 'xcode' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Vite', icon: 'vite' },
    ],
  },
  {
    key: 'desktopData',
    items: [
      { name: 'Tkinter', icon: 'python' },
      { name: 'pandas', icon: 'pandas' },
    ],
  },
  {
    key: 'iot',
    items: [
      { name: 'C/C++', icon: 'cplusplus' },
      { name: 'Python', icon: 'python' },
      { name: 'MQTT', icon: 'api' },
      { name: 'ESP32', icon: 'chip' },
      { name: 'PlatformIO' },
      { name: 'Arduino', icon: 'arduino' },
      { name: 'Node-RED', icon: 'nodered' },
    ],
  },
]

// ป้ายทักษะเชิงความสามารถ — label เป็น key สำหรับแปลใน content.ts
export const hardSkills = [
  'frontendDev',
  'responsiveUi',
  'reactEcosystem',
  'backendBasics',
  'databaseBasics',
  'gitVersion',
]
export const softSkills = [
  'teamwork',
  'ideation',
  'positivity',
  'communication',
  'adaptability',
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
  video?: string // วิดีโอเดโม แสดงบนการ์ด (เล่นเมื่อ hover) และในหน้ารายละเอียด
  portrait?: boolean // true = รูปแนวตั้ง (สกรีนช็อตมือถือ) แสดงเต็มใบไม่โดนครอป
  liveUrl?: string
  repoUrl?: string
  figmaUrl?: string
  featured?: boolean
  detail?: ProjectDetail
}

const projectsRaw: Project[] = [
  {
    title: 'AI Tutor',
    description:
      'A web platform that gives students an on-demand AI tutor which adapts to their level. A student picks a course and asks a question; the tutor runs a short diagnostic quiz, estimates whether they are a beginner, intermediate, or advanced, then delivers explanations and practice problems pitched to that level. It grades the practice with feedback and either advances the student or re-assesses. Built to close three gaps: long waits for professor help, one-size-fits-all online content, and the cost of private tutoring.',
    tags: ['React', 'Vite', 'Tailwind', 'FastAPI', 'LangChain', 'PostgreSQL'],
    contribution:
      'Academic project for CS460 Artificial Intelligence, Bangkok University (team of 4). Worked on the React frontend and the tutoring flow against the FastAPI + LLM backend.',
    liveUrl: 'https://project-h50pr.vercel.app/',
    repoUrl: 'https://github.com/gunnnp/CS460_Project_AI_Tutor',
    video: '/projects/ai-tutor/demo.mp4',
    featured: true,
    detail: {
      year: '2025',
      context: 'CS460 Artificial Intelligence · Bangkok University',
      team: 'Team of 4',
      problem:
        'Getting unstuck as a student is slow and uneven — office hours have queues, online material is rarely pitched at your exact level, and private tutoring is expensive. AI Tutor gives instant help that first works out where you are, then teaches from there.',
      stats: [
        { label: 'Diagnostic questions', value: '2–3' },
        { label: 'Proficiency levels', value: '3' },
        { label: 'LLMs', value: 'Llama · Qwen · DeepSeek' },
        { label: 'Retrieval', value: 'ChromaDB RAG' },
      ],
      howItWorks: [
        { step: 'Ask', detail: 'The student picks a course and asks a question in plain language.' },
        { step: 'Diagnose', detail: 'The tutor asks 2–3 quick quiz questions to probe what the student already knows.' },
        { step: 'Assess', detail: 'From the answers it estimates a level — beginner, intermediate, or advanced.' },
        { step: 'Teach', detail: 'It delivers explanations and practice problems pitched to that level, grounded in course material via RAG.' },
        { step: 'Practice', detail: 'The student works through the generated exercises.' },
        { step: 'Grade', detail: 'The tutor grades the work with feedback, then advances the student or re-runs the assessment.' },
      ],
      features: [
        'Level-adaptive explanations and exercises',
        'Automated diagnostic quiz and grading',
        'Personalized exercise generation per student',
        'Immediate feedback loop that advances or re-assesses',
        'Retrieval-augmented answers grounded in course material (ChromaDB)',
      ],
      stack: [
        { group: 'Frontend', items: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'Axios'] },
        { group: 'Backend', items: ['FastAPI', 'Pydantic', 'SQLAlchemy'] },
        { group: 'AI / LLM', items: ['LangChain', 'OpenRouter', 'Llama 3.3 70B', 'Qwen 2.5 72B', 'DeepSeek R1'] },
        { group: 'Data', items: ['PostgreSQL', 'ChromaDB (RAG)'] },
        { group: 'Deploy', items: ['Vercel'] },
      ],
      notes: [
        'Coursework prototype built by a team of 4.',
        'Uses free-tier LLMs through OpenRouter, so responses depend on model availability and rate limits.',
      ],
    },
  },
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
    title: 'Elderly Falls Monitoring System',
    description:
      'An IoT fall-detection prototype built on an ESP32 and an MPU6050 motion sensor. Rule-based firmware watches total acceleration for a fall signature — a sharp impact spike followed by prolonged stillness — and moves through a state machine (Normal → Impact → Fall suspected → Wait-cancel → Alert). Alerts fire on an OLED, LEDs, and a buzzer, with a physical button to dismiss false alarms inside a 10-second window. A live web dashboard graphs acceleration in real time and lets you retune thresholds, and the whole rig runs in a Wokwi simulator so it can be demoed without any physical hardware.',
    tags: ['ESP32', 'C++', 'Arduino', 'PlatformIO', 'MPU6050', 'JavaScript'],
    contribution:
      'IoT coursework prototype. Built the rule-based detection firmware, the alert state machine, and the live web dashboard.',
    video: '/projects/elderly-falls/demo.mp4',
    repoUrl: 'https://github.com/naphatdev/Elderly-falls-monitoring-system',
    detail: {
      year: '2025',
      context: 'IoT / embedded systems coursework',
      problem:
        'A fall that goes unnoticed is the dangerous case for someone living alone. This prototype explores the simplest reliable signal for it — the raw motion of the body — using a cheap accelerometer instead of a camera or a phone, so detection can live on a tiny always-on device.',
      stats: [
        { label: 'Impact threshold', value: '2.5 g' },
        { label: 'Stillness to confirm', value: '3 s' },
        { label: 'Cancel window', value: '10 s' },
        { label: 'Runs in', value: 'Wokwi sim' },
      ],
      howItWorks: [
        {
          step: 'Sense',
          detail:
            'An MPU6050 streams acceleration and gyroscope data to the ESP32 over I²C at a steady rate.',
        },
        {
          step: 'Detect',
          detail:
            'The firmware computes total acceleration √(ax² + ay² + az²) and compares it against a 2.5 g impact threshold.',
        },
        {
          step: 'Confirm',
          detail:
            'An impact followed by ~3 seconds of stillness (±0.18 g around 1 g) marks a suspected fall, filtering out ordinary movement.',
        },
        {
          step: 'Cancel window',
          detail:
            'The buzzer sounds and the state machine waits 10 seconds — a button press dismisses a false alarm before it escalates.',
        },
        {
          step: 'Alert',
          detail:
            'If no one cancels, the OLED, LEDs, and buzzer signal the fall and the status is exposed over a small web API.',
        },
        {
          step: 'Dashboard',
          detail:
            'A live web UI plots acceleration in real time and lets you retune thresholds and fire demo scenarios (fall, trip, normal, cancel).',
        },
      ],
      features: [
        'Rule-based fall signature — impact spike plus prolonged stillness',
        'Explicit state machine: Normal → Impact → Fall suspected → Wait-cancel → Alert',
        'Multi-channel alerts on an OLED display, green/red LEDs, and a buzzer',
        'False-alarm cancel button within a 10-second window',
        'Live web dashboard with a real-time acceleration graph and adjustable thresholds',
        'REST API for status, configuration, and demo scenarios',
        'Runs fully in the Wokwi simulator — demoable without physical hardware',
      ],
      stack: [
        { group: 'Firmware', items: ['C++', 'Arduino', 'PlatformIO'] },
        { group: 'Hardware', items: ['ESP32', 'MPU6050', 'OLED SSD1306', 'LEDs', 'Buzzer'] },
        { group: 'Dashboard', items: ['HTML5', 'CSS3', 'JavaScript'] },
        { group: 'Simulation', items: ['Wokwi'] },
      ],
      notes: [
        'Prototype — thresholds need recalibration on real hardware, and it is not a medical device.',
        'Detection is rule-based, not machine-learning; planned next steps include activity classification, cloud sync, GPS, and a mobile companion app.',
      ],
    },
  },
]

// ลำดับการแสดงผลบนหน้าเว็บ (มีผลทั้งภาษาไทยและอังกฤษ)
const PROJECT_ORDER = [
  'Middle',
  'The End of Mine',
  'Elderly Falls Monitoring System',
  'AI Tutor',
]
export const projects: Project[] = [...projectsRaw].sort(
  (a, b) => PROJECT_ORDER.indexOf(a.title) - PROJECT_ORDER.indexOf(b.title),
)

export type Certification = {
  name: string
  issuer: string
  date: string
  image?: string
  credentialUrl?: string
  contain?: boolean // true = โชว์รูปเต็มไม่ครอป (สำหรับ badge/โลโก้จตุรัส แทนภาพ certificate แนวนอน)
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
    name: 'ML Foundations — Digital Badge',
    issuer: 'AWS Academy',
    date: '2026',
    image: '/certs/aws-academy-graduate-machine-learning-foundations-t.png',
    credentialUrl: 'https://www.credly.com/go/jOQWnN37',
    contain: true,
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
  category: 'Competition' | 'Club' | 'Seminar' | 'Volunteer' | 'Award'
  date: string
  role?: string
  description: string
  image?: string
  images?: string[] // แกลเลอรีรูป (รูปแรกเป็นรูปหลัก) สำหรับการ์ด featured
  event?: string // ชื่องาน/เวที
  location?: string
  prize?: string // เงินรางวัล เช่น "฿2,000"
  project?: string // title ของโปรเจกต์ที่จะเปิดหน้ารายละเอียดเมื่อกดปุ่ม
  hrefLabel?: string
  featured?: boolean
}

export const activities: Activity[] = [
  {
    title: 'Best AI Prototype for Real-World Impact',
    category: 'Award',
    date: '2026',
    role: 'Team of 5 — for the Middle fall-detection system',
    event: 'IT Empowering Day 2026 · “In the Era of AI”',
    location: 'Diamond Hall, Bangkok University',
    description:
      'Won Best AI Prototype for Real-World Impact — judged on how well the idea solves an actual problem. We entered Middle: a camera-free, wearable-free fall-detection system for the elderly that reads WiFi signals and calls for help when no caregiver responds. It stood out among the industry-driven innovation projects for pairing a real ML pipeline with a clear social need.',
    images: [
      '/Activity/pachara_it_day3.jpg',
      '/Activity/pachara_it_day.jpg',
      '/Activity/pachara_it_day2.jpg',
    ],
    project: 'Middle',
    hrefLabel: 'See the Middle project',
    featured: true,
  },
  {
    title: 'BU Cyber Fortress Challenge & Career Expo',
    category: 'Seminar',
    date: '2025',
    description:
      "This event widened my view of the cybersecurity field — from the shape of today's cyber threats to how AI is being used to strengthen security, and the skills companies look for in applicants. I spent time at the booths of leading companies asking about roles, internships, and how to prepare for the industry, which gave me a much clearer picture of where I'd like my career to go.",
    images: ['/Activity/cyber-expo-2.jpg', '/Activity/cyber-expo-1.jpg'],
  },
]
