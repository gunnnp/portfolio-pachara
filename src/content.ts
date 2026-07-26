// ────────────────────────────────────────────────────────────────
// Bilingual content (English / Thai).
// Non-translatable fields (images, tags, tech names, URLs) are inherited
// from the English source so the two languages never drift apart.
// ────────────────────────────────────────────────────────────────
import {
  profile as profileEN,
  projects as projectsEN,
  certifications,
  activities as activitiesEN,
  education as educationEN,
  type Project,
  type Activity,
  type ProjectDetail,
  type Education,
} from './data'

export type Lang = 'en' | 'th'
export type Theme = 'dark' | 'light'

export type Content = {
  profile: typeof profileEN
  projects: Project[]
  certifications: typeof certifications
  activities: Activity[]
  education: Education[]
}

// ── Thai overrides for projects ─────────────────────────────────
type ProjectTH = {
  description: string
  contribution?: string
  detail?: Partial<ProjectDetail>
}

const PROJECT_TH: Record<string, ProjectTH> = {
  'The End of Mine': {
    description:
      'เกมเอาชีวิตรอดแนวข้อความในโลกหลังหายนะบนมือถือ สร้างด้วย .NET 9 MAUI ผู้เล่นสร้างตัวละคร เลือกระดับความยาก (Easy เกิดใหม่ได้ → Hard ตายถาวร) และเอาชีวิตรอดผ่านเนื้อเรื่อง 4 บท พร้อมบริหารค่าพลังชีวิต ความหิว ความกระหาย และความล้า ระบบที่ซ้อนกัน — เสียงที่ดึงดูดอันตราย ความเสี่ยงติดเชื้อจากบาดแผล ความทนทานของไอเทม และช่องเก็บของ 4×4 — ทำให้ทุกการกระทำเป็นการแลกเปลี่ยน มีการต่อ LLM สร้างเหตุการณ์ ไอเทม และเนื้อเรื่องใหม่ทุกรอบ ไม่มีการเล่นซ้ำที่เหมือนกัน และใช้ SQLite เซฟเกมในเครื่อง',
    contribution:
      'โปรเจกต์รายวิชา CS356 การพัฒนาแอปพลิเคชันมือถือ 1 มหาวิทยาลัยกรุงเทพ พัฒนาลูปสถานะการเอาชีวิตรอด เลเยอร์สร้างเหตุการณ์สุ่มและเนื้อหาด้วย LLM และระบบเซฟ/โหลดด้วย SQLite',
    detail: {
      context: 'CS356 การพัฒนาแอปพลิเคชันมือถือ 1 · มหาวิทยาลัยกรุงเทพ',
      problem:
        'เกมเอาชีวิตรอดบนมือถือส่วนใหญ่พึ่งกราฟิก ผมอยากลองว่าจะสร้างความตึงเครียดจากข้อความล้วนได้แค่ไหน — โดยให้ส่วนที่น่าสนใจคือการคำนวณเพื่อเอาชีวิตรอด ไม่ใช่ภาพ',
      stats: [
        { label: 'บทเนื้อเรื่อง', value: '4' },
        { label: 'ระดับความยาก', value: '3' },
        { label: 'ช่องเก็บของ', value: '4×4' },
        { label: 'แพลตฟอร์ม', value: 'Android · iOS · macOS' },
      ],
      features: [
        'สร้างตัวละคร — เลือกเพศและตั้งชื่อผู้รอดชีวิต',
        'ความยาก 3 ระดับ: Easy เกิดใหม่เมื่อตาย, Normal มาตรฐาน, Hard ตายถาวร',
        'ค่าสถานะ 4 อย่างที่เชื่อมโยงกัน — พลังชีวิต ความหิว ความกระหาย ความล้า — ที่ลดลงตามเวลาจริง',
        'กลไกเสียง: การกระทำที่เสียงดังดึงดูดอันตราย ความเร็วกับความปลอดภัยจึงขัดกัน',
        'ความเสี่ยงติดเชื้อจากบาดแผลที่ไม่รักษาและอันตรายจากสภาพแวดล้อม',
        'ความทนทานของไอเทม — เครื่องมือเสื่อมเมื่อใช้และต้องเปลี่ยนในที่สุด',
        'ช่องเก็บของ 4×4 ที่บังคับให้ตัดสินใจจริงว่าจะพกอะไร',
        'LLM สร้างเหตุการณ์ ไอเทม และเนื้อเรื่องใหม่ ทำให้ไม่มีรอบไหนเหมือนกัน',
        'เซฟ/โหลดแบบ checkpoint ด้วย SQLite',
      ],
      stack: [
        { group: 'แอป', items: ['.NET 9 MAUI', 'C#'] },
        { group: 'ข้อมูล', items: ['SQLite'] },
        { group: 'สร้างเนื้อหา', items: ['Typhoon / OpenAI LLM', 'Gemini API (รูปภาพ)'] },
        { group: 'รองรับ', items: ['Android', 'iOS', 'macOS (Catalyst)'] },
      ],
      notes: [
        'เป็นต้นแบบในรายวิชา — ทำตามขอบเขตของหนึ่งภาคเรียน ไม่ใช่เกมที่วางจำหน่ายจริง',
        'การสร้างเนื้อหาด้วย LLM ต้องใช้ API key ตอนรัน ถ้าไม่มีเกมจะใช้เนื้อหาที่เขียนไว้แทน',
      ],
    },
  },
  Middle: {
    description:
      'ระบบตรวจจับการล้มสำหรับผู้สูงอายุที่ไม่ต้องใช้กล้องและไม่ต้องสวมอุปกรณ์ ใช้บอร์ด ESP32 สองตัวอ่านข้อมูล WiFi Channel State Information ที่ 100 แพ็กเก็ต/วินาที — การล้มของร่างกายรบกวนสัญญาณวิทยุในแบบที่โมเดลเรียนรู้ได้ — แล้วจำแนกแต่ละช่วงสัญญาณเป็นล้ม/ไม่ล้ม เมื่อตรวจพบการล้ม ผู้ดูแลจะได้รับการแจ้งเตือนและมีเวลา 60 วินาทีเพื่อกดรับทราบ ถ้าไม่มีใครตอบสนอง ระบบจะยกระดับเองเป็น SMS และโทรศัพท์อัตโนมัติ หัวใจสำคัญคือผู้สูงอายุไม่ต้องสวมอะไรและไม่มีกล้องจับภาพ',
    contribution:
      'พัฒนาแอปมือถือด้วย Expo Router — การจับคู่อุปกรณ์ จัดการบ้าน/สมาชิก และ flow การกดรับทราบการแจ้งเตือน ต่อกับ backend ที่เป็น Express + FastAPI',
    detail: {
      context: 'โปรเจกต์จบ · วิทยาการคอมพิวเตอร์ มหาวิทยาลัยกรุงเทพ',
      team: 'ทีม 5 คน',
      problem:
        'ประเทศไทยเข้าสู่สังคมสูงวัยอย่างสมบูรณ์ในปี 2567 — มีผู้สูงอายุ 60 ปีขึ้นไปกว่า 14 ล้านคน มากกว่าหนึ่งในห้าของประชากร ในจำนวนนี้ราวหนึ่งในสามล้มทุกปี และ WHO จัดว่าการล้มเป็นสาเหตุการเสียชีวิตจากอุบัติเหตุอันดับสอง ทางออกที่มีอยู่ต่างมีช่องโหว่: กล้องละเมิดความเป็นส่วนตัวในบ้านและมีปัญหาเรื่องมุมและแสง ส่วนอุปกรณ์สวมใส่ก็ใช้ได้ต่อเมื่อผู้สูงอายุจำได้ว่าต้องใส่ การล้มที่ไม่มีใครเห็นคือกรณีอันตราย และระบบนี้สร้างมาเพื่อกรณีนั้น',
      stats: [
        { label: 'อัตราสุ่ม CSI', value: '100 แพ็กเก็ต/วิ' },
        { label: 'ฟีเจอร์ต่อหน้าต่าง', value: '416' },
        { label: 'เวลากดรับทราบ', value: '60 วิ' },
        { label: 'คูลดาวน์แจ้งซ้ำ', value: '5 นาที' },
      ],
      howItWorks: [
        {
          step: 'รับสัญญาณ',
          detail:
            'ESP32 สองตัวสร้างลิงก์ 2.4 GHz เฉพาะ — ตัวหนึ่งส่งแพ็กเก็ต อีกตัววัดว่าช่องสัญญาณบิดเบือนอย่างไร การเคลื่อนไหวในห้องเปลี่ยนการบิดเบือนนั้น',
        },
        {
          step: 'สกัดฟีเจอร์',
          detail:
            'แต่ละช่วง CSI กลายเป็นเวกเตอร์ฟีเจอร์ 416 ค่า: 52 subcarrier × 8 ค่าสถิติ (mean, std, variance, min, max, skewness, kurtosis, RMS) แล้วปรับสเกลมาตรฐาน',
        },
        {
          step: 'จำแนก',
          detail:
            'บริการ FastAPI รันโมเดลและคืนค่า prediction, confidence และ is_fall ค่าความน่าจะเป็นตั้งแต่ 0.55 ขึ้นไปนับเป็นการล้ม',
        },
        {
          step: 'ตัดสินใจ',
          detail:
            'Express API ตรวจคูลดาวน์รายอุปกรณ์เพื่อไม่ให้เหตุการณ์เดียวสแปมทั้งบ้าน บันทึกเหตุการณ์ลง Supabase และเริ่มจับเวลารับทราบ',
        },
        {
          step: 'แจ้งเตือน',
          detail:
            'Expo Push แจ้งเตือนอุปกรณ์ผู้ดูแลทุกเครื่อง การกดรับทราบจะยกเลิกตัวจับเวลาและบันทึกว่าใครยืนยัน',
        },
        {
          step: 'ยกระดับ',
          detail:
            'ถ้าผ่านไป 60 วินาทีโดยไม่มีการตอบสนอง Twilio จะโทรอัตโนมัติและส่ง SMS ไปยังผู้ติดต่อฉุกเฉิน แล้วบันทึกสถานะว่ายกระดับแล้ว',
        },
      ],
      features: [
        'ตรวจจับแบบพาสซีฟ — ผู้สูงอายุไม่ต้องสวมอะไรและไม่ถูกถ่ายภาพ',
        'แจ้งเตือนแบบไบนารีบวกการรับทราบจากคน แทนการแบ่งระดับ ช่วยไม่ให้ false positive กลายเป็นเสียงรบกวน',
        'ยกระดับเป็นโทรศัพท์และ SMS อัตโนมัติเมื่อไม่มีผู้ดูแลตอบในเวลา',
        'คูลดาวน์รายอุปกรณ์ 5 นาที กันการแจ้งเตือนซ้ำจากเหตุการณ์เดียว',
        'แอปผู้ดูแล: จัดการหลายบ้าน จับคู่อุปกรณ์ เชิญครอบครัวด้วย QR หรือรหัส และเก็บผู้ติดต่อฉุกเฉิน',
        'ประวัติการแจ้งเตือนครบถ้วน — ใครรับทราบ เมื่อไหร่ ยกระดับหรือไม่ ส่ง SMS และโทรออกหรือยัง',
      ],
      stack: [
        { group: 'ฮาร์ดแวร์', items: ['ESP32 × 2', 'ESP-IDF', 'WiFi CSI'] },
        { group: 'แมชชีนเลิร์นนิง', items: ['Python', 'FastAPI', 'scikit-learn', 'Random Forest'] },
        { group: 'แบ็กเอนด์', items: ['Node.js', 'Express', 'REST API + API key'] },
        { group: 'ข้อมูล', items: ['Supabase', 'PostgreSQL'] },
        { group: 'มือถือ', items: ['React Native', 'Expo', 'Expo Router', 'TypeScript'] },
        { group: 'แจ้งเตือน', items: ['Expo Push Notifications', 'Twilio Voice + SMS'] },
        { group: 'ดีพลอย', items: ['Render'] },
      ],
      notes: [
        'ไม่ใช่อุปกรณ์การแพทย์ และไม่ทดแทนผู้ดูแลหรือการเฝ้าระวังทางคลินิก',
        'ขอบเขตต้นแบบ: เก็บ CSI ผ่าน USB serial ในพื้นที่ทดสอบในอาคาร ยังไม่ได้สตรีมจากทุกห้องของบ้านจริง',
        'ทดสอบครบวงจรแล้ว — เก็บ CSI, API, การอนุมาน, บันทึกเหตุการณ์, push, รับทราบ และยกระดับ — แต่ยังไม่ได้ใช้งานจริงในบ้านหลากหลาย',
      ],
    },
  },
}

// ── Thai overrides for activities ───────────────────────────────
type ActivityTH = {
  role?: string
  event?: string
  location?: string
  description: string
  hrefLabel?: string
}

const ACTIVITY_TH: Record<string, ActivityTH> = {
  'Best AI Prototype for Real-World Impact': {
    role: 'ทีม 5 คน — จากระบบตรวจจับการล้ม Middle',
    location: 'Diamond Hall มหาวิทยาลัยกรุงเทพ',
    description:
      'ได้รับรางวัล Best AI Prototype for Real-World Impact — ตัดสินจากว่าไอเดียแก้ปัญหาจริงได้ดีแค่ไหน เราส่ง Middle: ระบบตรวจจับการล้มสำหรับผู้สูงอายุที่ไม่ใช้กล้องและไม่ต้องสวมอุปกรณ์ อ่านสัญญาณ WiFi และเรียกความช่วยเหลือเมื่อไม่มีผู้ดูแลตอบสนอง โดดเด่นในกลุ่มโปรเจกต์นวัตกรรมสายอุตสาหกรรมด้วยการผสาน ML pipeline จริงเข้ากับความต้องการทางสังคมที่ชัดเจน',
    hrefLabel: 'ดูโปรเจกต์ Middle',
  },
}

// ── Build Thai datasets from English + overrides ────────────────
const profileTH: typeof profileEN = {
  ...profileEN,
  name: 'พชร ต่อโชติ',
  role: 'Full Stack Developer',
  tagline: 'ผมสร้างผลิตภัณฑ์เว็บและมือถือที่เชื่อถือได้ ตั้งแต่หน้าบ้านจนถึงหลังบ้าน',
  location: 'พระนครศรีอยุธยา ประเทศไทย',
  about: [
    'ผมพัฒนาซอฟต์แวร์แบบครบวงจร — ตั้งแต่ส่วนติดต่อผู้ใช้บนเว็บและมือถือ ไปจนถึง API ฐานข้อมูล และเซอร์วิสเบื้องหลัง ผลงานล่าสุดของผมมีตั้งแต่ระบบตรวจจับการล้มแบบ IoT ที่มี machine-learning pipeline ไปจนถึงเกมเอาชีวิตรอดบนมือถือ ซึ่งฝึกให้ผมทำให้ส่วนต่าง ๆ ของระบบทำงานประสานกันได้อย่างเป็นระเบียบ',
    'ผมให้ความสำคัญกับสถาปัตยกรรมที่ดูแลรักษาง่าย ประสิทธิภาพ และรายละเอียดเล็ก ๆ ที่ทำให้ผลิตภัณฑ์ดูผ่านการคิดมาอย่างดี ผมชอบเริ่มจากปัญหาจริงแล้วค่อย ๆ สร้างไปสู่สิ่งที่ผู้คนใช้งานได้จริง',
  ],
  highlights: [
    { label: 'ปีที่เขียนโค้ด', value: '2+' },
    { label: 'โปรเจกต์ที่ทำ', value: '10+' },
    { label: 'แก้วกาแฟ', value: '∞' },
  ],
}

const educationTH: Education[] = [
  {
    stage: 'มัธยมศึกษา',
    school: 'โรงเรียนวินิตศึกษา ในพระราชูปถัมภ์ฯ',
    degree: 'โครงการ Textbook',
  },
  {
    stage: 'ปัจจุบัน · ปี 4',
    school: 'มหาวิทยาลัยกรุงเทพ',
    degree: 'วิทยาการคอมพิวเตอร์',
    detail: 'คณะเทคโนโลยีสารสนเทศและนวัตกรรม',
    current: true,
  },
]

const projectsTH: Project[] = projectsEN.map((p) => {
  const t = PROJECT_TH[p.title]
  if (!t) return p
  return {
    ...p,
    description: t.description,
    contribution: t.contribution ?? p.contribution,
    detail: p.detail ? { ...p.detail, ...t.detail } : p.detail,
  }
})

const activitiesTH: Activity[] = activitiesEN.map((a) => {
  const t = ACTIVITY_TH[a.title]
  if (!t) return a
  return { ...a, ...t }
})

export const content: Record<Lang, Content> = {
  en: {
    profile: profileEN,
    projects: projectsEN,
    certifications,
    activities: activitiesEN,
    education: educationEN,
  },
  th: {
    profile: profileTH,
    projects: projectsTH,
    certifications,
    activities: activitiesTH,
    education: educationTH,
  },
}

// ── UI chrome strings ───────────────────────────────────────────
export type UI = typeof uiEN

const uiEN = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    certs: 'Certs',
    activities: 'Activities',
    contact: 'Contact',
    available: 'Available',
    theme: 'Theme',
    language: 'Language',
  },
  hero: {
    badge: 'Available for full-stack roles',
    roleLine: 'Full Stack Developer — building products end to end.',
    viewWork: 'View work',
    getInTouch: 'Get in touch',
  },
  sections: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    certifications: 'Certifications',
    activities: 'Activities',
    contact: 'Contact',
  },
  about: {
    title: 'About me.',
    details: 'Details',
    location: 'Location',
    email: 'Email',
    role: 'Role',
    education: 'Education',
  },
  skills: {
    title: 'Technical skills',
    subtitle:
      'Tools and technologies used to build products across applications, backend services, data management and connected devices.',
    groups: {
      languages: 'Programming Languages',
      webMobile: 'Web & Mobile',
      backendData: 'Backend & Data',
      aiMl: 'AI & Machine Learning',
      devTools: 'Development Tools',
      desktopData: 'Desktop & Data Science',
      iot: 'IoT & Embedded Systems',
    } as Record<string, string>,
    hard: {
      label: 'Hard skills',
      title: 'Technical capabilities',
      desc: 'Strongest on the frontend — building responsive, accessible interfaces — with working knowledge of the backend, APIs, and databases to ship a feature end to end.',
      items: {
        frontendDev: 'Frontend Development',
        responsiveUi: 'Responsive UI',
        reactEcosystem: 'React & React Native',
        backendBasics: 'Backend & API basics',
        databaseBasics: 'Database basics',
        gitVersion: 'Git Version Control',
      } as Record<string, string>,
    },
    soft: {
      label: 'Soft skills',
      title: 'Working strengths',
      desc: 'A dependable teammate who brings ideas to the table and keeps the energy positive — even when a project gets tricky.',
      items: {
        teamwork: 'Teamwork',
        ideation: 'Creative Thinking',
        positivity: 'Positive Energy',
        communication: 'Communication',
        adaptability: 'Adaptability',
      } as Record<string, string>,
    },
  },
  projects: {
    title: 'Selected work.',
    subtitle: "A few things I've built recently — open one for the full story.",
    readMore: 'Read more',
    source: 'Source',
    viewDetails: 'View details',
    featured: 'Featured',
  },
  projectModal: {
    problem: 'The problem',
    myRole: 'My role',
    howItWorks: 'How it works',
    features: 'What it does',
    stack: 'Built with',
    notes: 'Scope & limitations',
    viewSource: 'View source',
    liveDemo: 'Live demo',
    figma: 'Figma',
    screenshot: 'screenshot',
  },
  certs: {
    title: 'Credentials.',
    subtitle: 'Click any card to view the certificate.',
    verify: 'Verify',
    hint: 'Esc to close · ← → to navigate',
    noImage: 'No image available',
    prevPage: 'Previous page',
    nextPage: 'Next page',
  },
  activities: {
    title: 'Activities & awards.',
    learnMore: 'Learn more',
  },
  contact: {
    title: "Let's build something.",
    subtitle: 'Currently open to full-stack developer roles. I usually reply within a day.',
    availableNow: 'Available now',
  },
  footer: {
    builtWith: 'Built with React · Vite · Tailwind',
  },
}

const uiTH: UI = {
  nav: {
    about: 'เกี่ยวกับ',
    skills: 'ทักษะ',
    projects: 'ผลงาน',
    certs: 'ใบรับรอง',
    activities: 'กิจกรรม',
    contact: 'ติดต่อ',
    available: 'ว่างงาน',
    theme: 'ธีม',
    language: 'ภาษา',
  },
  hero: {
    badge: 'พร้อมรับงาน full-stack',
    roleLine: 'Full Stack Developer — พัฒนาผลิตภัณฑ์ครบวงจร',
    viewWork: 'ดูผลงาน',
    getInTouch: 'ติดต่อผม',
  },
  sections: {
    about: 'เกี่ยวกับ',
    skills: 'ทักษะ',
    projects: 'ผลงาน',
    certifications: 'ใบรับรอง',
    activities: 'กิจกรรม',
    contact: 'ติดต่อ',
  },
  about: {
    title: 'เกี่ยวกับผม',
    details: 'ข้อมูล',
    location: 'ที่อยู่',
    email: 'อีเมล',
    role: 'ตำแหน่ง',
    education: 'การศึกษา',
  },
  skills: {
    title: 'ทักษะทางเทคนิค',
    subtitle:
      'เครื่องมือและเทคโนโลยีที่ใช้สร้างผลิตภัณฑ์ ครอบคลุมทั้งแอปพลิเคชัน เซอร์วิสเบื้องหลัง การจัดการข้อมูล และอุปกรณ์ที่เชื่อมต่อ',
    groups: {
      languages: 'ภาษาโปรแกรม',
      webMobile: 'เว็บและมือถือ',
      backendData: 'แบ็กเอนด์และข้อมูล',
      aiMl: 'AI และ Machine Learning',
      devTools: 'เครื่องมือพัฒนา',
      desktopData: 'เดสก์ท็อปและวิทยาการข้อมูล',
      iot: 'IoT และระบบฝังตัว',
    },
    hard: {
      label: 'Hard skills',
      title: 'ความสามารถเชิงเทคนิค',
      desc: 'ถนัดด้าน frontend เป็นหลัก — สร้างส่วนติดต่อผู้ใช้ที่ตอบสนองและเข้าถึงง่าย — พร้อมพื้นฐานฝั่ง backend, API และฐานข้อมูลพอที่จะทำฟีเจอร์ได้ครบวงจร',
      items: {
        frontendDev: 'พัฒนา Frontend',
        responsiveUi: 'UI ที่ตอบสนอง',
        reactEcosystem: 'React และ React Native',
        backendBasics: 'พื้นฐาน Backend และ API',
        databaseBasics: 'พื้นฐานฐานข้อมูล',
        gitVersion: 'ควบคุมเวอร์ชันด้วย Git',
      },
    },
    soft: {
      label: 'Soft skills',
      title: 'จุดแข็งในการทำงาน',
      desc: 'เป็นเพื่อนร่วมทีมที่ไว้ใจได้ ช่วยคิดไอเดีย และคอยเติมพลังบวกให้ทีม แม้ในเวลาที่โปรเจกต์ยากขึ้น',
      items: {
        teamwork: 'การทำงานเป็นทีม',
        ideation: 'ความคิดสร้างสรรค์',
        positivity: 'พลังบวก',
        communication: 'การสื่อสาร',
        adaptability: 'การปรับตัว',
      },
    },
  },
  projects: {
    title: 'ผลงานที่คัดมา',
    subtitle: 'บางสิ่งที่ผมทำล่าสุด — กดเข้าไปดูเรื่องราวเต็ม ๆ ได้',
    readMore: 'อ่านเพิ่มเติม',
    source: 'ซอร์สโค้ด',
    viewDetails: 'ดูรายละเอียด',
    featured: 'เด่น',
  },
  projectModal: {
    problem: 'ปัญหา',
    myRole: 'ส่วนที่ผมดำเนินงาน',
    howItWorks: 'วิธีการทำงาน',
    features: 'ทำอะไรได้บ้าง',
    stack: 'สร้างด้วย',
    notes: 'ขอบเขตและข้อจำกัด',
    viewSource: 'ดูซอร์สโค้ด',
    liveDemo: 'เดโมสด',
    figma: 'Figma',
    screenshot: 'ภาพหน้าจอ',
  },
  certs: {
    title: 'ใบรับรอง',
    subtitle: 'กดที่การ์ดใดก็ได้เพื่อดูใบรับรอง',
    verify: 'ตรวจสอบ',
    hint: 'Esc เพื่อปิด · ← → เพื่อเลื่อน',
    noImage: 'ไม่มีรูปภาพ',
    prevPage: 'หน้าก่อนหน้า',
    nextPage: 'หน้าถัดไป',
  },
  activities: {
    title: 'กิจกรรมและรางวัล',
    learnMore: 'ดูเพิ่มเติม',
  },
  contact: {
    title: 'มาสร้างอะไรด้วยกัน',
    subtitle: 'ตอนนี้เปิดรับงาน full-stack developer ปกติผมตอบกลับภายในหนึ่งวัน',
    availableNow: 'พร้อมเริ่มงาน',
  },
  footer: {
    builtWith: 'สร้างด้วย React · Vite · Tailwind',
  },
}

export const ui: Record<Lang, UI> = { en: uiEN, th: uiTH }
