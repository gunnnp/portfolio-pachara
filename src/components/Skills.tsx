import { motion } from 'framer-motion'
import { skills, type Skill } from '../data'
import { useT } from '../store'

const categoryKeys: Skill['category'][] = [
  'Language',
  'Frontend',
  'Mobile',
  'Database',
  'Tooling',
]

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
        >
          <p className="eyebrow">02 / {t.sections.skills}</p>
          <h2 className="h-section mt-4">{t.skills.title}</h2>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categoryKeys.map((key, idx) => {
            const items = skills.filter((s) => s.category === key)
            if (items.length === 0) return null
            return (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="card p-6"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-ink-400">
                    {t.skills.categories[key]}
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
