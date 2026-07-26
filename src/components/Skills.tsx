import { motion } from 'framer-motion'
import { skillGroups, hardSkills, softSkills, type SkillItem } from '../data'
import { useT } from '../store'

export default function Skills() {
  const t = useT()

  return (
    <section id="skills" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="md:flex md:items-end md:justify-between md:gap-10"
        >
          <div>
            <p className="eyebrow">03 / {t.sections.skills}</p>
            <h2 className="h-section mt-4">{t.skills.title}</h2>
          </div>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-500 md:mt-0">
            {t.skills.subtitle}
          </p>
        </motion.div>

        {/* Category cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, idx) => (
            <motion.div
              key={g.key}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.45, delay: (idx % 3) * 0.06 }}
              className="card p-5"
            >
              <div className="flex items-center gap-2.5">
                <span className="grid h-6 w-6 place-items-center rounded-md border border-ink-800 bg-ink-900 font-mono text-[10px] text-ink-400">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="text-sm font-medium text-ink-100">{t.skills.groups[g.key]}</h3>
              </div>

              <ul className="mt-4 grid grid-cols-4 gap-2">
                {g.items.map((s) => (
                  <li key={s.name}>
                    <SkillTile item={s} />
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Hard / Soft skills */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <SkillPanel
            label={t.skills.hard.label}
            title={t.skills.hard.title}
            desc={t.skills.hard.desc}
            chips={hardSkills.map((k) => t.skills.hard.items[k])}
          />
          <SkillPanel
            label={t.skills.soft.label}
            title={t.skills.soft.title}
            desc={t.skills.soft.desc}
            chips={softSkills.map((k) => t.skills.soft.items[k])}
            accent
          />
        </div>
      </div>
    </section>
  )
}

function SkillTile({ item }: { item: SkillItem }) {
  return (
    <div
      title={item.name}
      className="flex flex-col items-center gap-1.5 rounded-lg border border-ink-800 bg-ink-900/40 p-2 transition-colors hover:border-ink-600"
    >
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-white p-1.5 shadow-sm">
        <SkillIcon item={item} />
      </span>
      <span className="w-full truncate text-center text-[10px] leading-tight text-ink-400">
        {item.name}
      </span>
    </div>
  )
}

function SkillIcon({ item }: { item: SkillItem }) {
  const cls = 'h-full w-full'
  if (item.icon === 'wifi') return <WifiIcon className={cls} />
  if (item.icon === 'chip') return <ChipIcon className={cls} />
  if (item.icon === 'api') return <ApiIcon className={cls} />
  if (item.icon) {
    return (
      <img
        src={`/skills-icons/${item.icon}.svg`}
        alt=""
        className="h-full w-full object-contain"
        loading="lazy"
      />
    )
  }
  // Monogram fallback (e.g. NetBeans, PlatformIO)
  return (
    <span className="text-[10px] font-semibold text-ink-800">
      {item.name.replace(/[^A-Za-z]/g, '').slice(0, 2).toUpperCase()}
    </span>
  )
}

function SkillPanel({
  label,
  title,
  desc,
  chips,
  accent,
}: {
  label: string
  title: string
  desc: string
  chips: string[]
  accent?: boolean
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45 }}
      className="card p-6"
    >
      <p
        className={`font-mono text-[11px] uppercase tracking-widest ${
          accent ? 'text-amber-400/90' : 'text-ink-500'
        }`}
      >
        {label}
      </p>
      <h3 className="mt-2 text-lg font-medium text-ink-50">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-400">{desc}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((c) => (
          <span
            key={c}
            className={`rounded-full border px-3 py-1 text-xs ${
              accent
                ? 'border-amber-500/25 bg-amber-500/10 text-amber-300'
                : 'border-ink-800 bg-ink-900/60 text-ink-200'
            }`}
          >
            {c}
          </span>
        ))}
      </div>
    </motion.div>
  )
}

function WifiIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M5 12.55a11 11 0 0 1 14 0M1.5 8.5a16 16 0 0 1 21 0M8.5 16.4a6 6 0 0 1 7 0" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </svg>
  )
}

function ChipIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#e11d48" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="6" y="6" width="12" height="12" rx="2" />
      <path d="M9 2v2M15 2v2M9 20v2M15 20v2M2 9h2M2 15h2M20 9h2M20 15h2" />
    </svg>
  )
}

function ApiIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="#334155" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v3M12 19v3M2 12h3M19 12h3M4.9 4.9l2.1 2.1M17 17l2.1 2.1M19.1 4.9L17 7M7 17l-2.1 2.1" />
    </svg>
  )
}
