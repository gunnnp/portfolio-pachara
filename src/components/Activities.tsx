import { motion } from 'framer-motion'
import { activities } from '../data'

export default function Activities() {
  if (activities.length === 0) return null

  return (
    <section id="activities" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-eyebrow">06. Activities</p>
          <h2 className="section-title">
            Beyond the code <span className="text-accent">.</span>
          </h2>
          <p className="mt-3 max-w-xl text-ink-600 dark:text-ink-400">
            Competitions, clubs, seminars, and other things I've been part of.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {activities.map((a, idx) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card overflow-hidden"
            >
              {a.image && (
                <div className="aspect-[16/9] overflow-hidden bg-ink-100 dark:bg-ink-900">
                  <img
                    src={a.image}
                    alt={a.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="chip !border-accent/50 !bg-accent/10 !text-accent">
                    {a.category}
                  </span>
                  <span className="font-mono text-xs text-ink-500 dark:text-ink-400">
                    {a.date}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold">{a.title}</h3>
                {a.role && (
                  <p className="mt-1 text-sm text-accent">{a.role}</p>
                )}
                <p className="mt-3 text-sm text-ink-600 dark:text-ink-400">
                  {a.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
