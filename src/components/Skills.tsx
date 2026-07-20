import { motion } from 'framer-motion'
import { skills, type Skill } from '../data'

const categories: { key: Skill['category']; label: string }[] = [
  { key: 'Language', label: 'Languages' },
  { key: 'Frontend', label: 'Frontend (web)' },
  { key: 'Mobile', label: 'Mobile development' },
  { key: 'Database', label: 'Database' },
  { key: 'Tooling', label: 'Tooling' },
]

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">02 / Skills</p>
          <h2 className="h-section mt-4">Tools I work with.</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((cat, idx) => {
            const items = skills.filter((s) => s.category === cat.key)
            if (items.length === 0) return null
            return (
              <motion.div
                key={cat.key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-ink-400">
                    {cat.label}
                  </h3>
                  <span className="font-mono text-xs text-ink-600">
                    0{idx + 1}
                  </span>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {items.map((s) => (
                    <li
                      key={s.name}
                      className="rounded-md border border-ink-800 bg-ink-900/50 px-2.5 py-1 text-xs text-ink-200 transition-colors hover:border-ink-600 hover:text-ink-50"
                    >
                      {s.name}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
