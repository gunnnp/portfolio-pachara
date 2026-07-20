import { motion } from 'framer-motion'
import { skills, type Skill } from '../data'

const categories: Skill['category'][] = ['Language', 'Framework', 'Styling', 'Tooling']

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-eyebrow">02. Skills</p>
          <h2 className="section-title">
            The tools I work with <span className="text-accent">.</span>
          </h2>
          <p className="mt-3 max-w-xl text-ink-600 dark:text-ink-400">
            A snapshot of the tech I use day-to-day to ship polished frontends.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card p-6"
            >
              <h3 className="mb-5 flex items-center gap-2 font-mono text-sm uppercase tracking-widest text-accent">
                <span className="h-px w-6 bg-accent" />
                {cat}
              </h3>
              <ul className="space-y-4">
                {skills.filter((s) => s.category === cat).map((s) => (
                  <li key={s.name}>
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{s.name}</span>
                      <span className="text-ink-500 dark:text-ink-400 tabular-nums">
                        {s.level}%
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-100 dark:bg-ink-800">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeOut' }}
                        className="h-full rounded-full bg-gradient-to-r from-accent to-accent-soft"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
