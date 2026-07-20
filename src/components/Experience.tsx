import { motion } from 'framer-motion'
import { experience } from '../data'

export default function Experience() {
  if (experience.length === 0) return null

  return (
    <section id="experience" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-eyebrow">03. Experience</p>
          <h2 className="section-title">
            Where I've worked <span className="text-accent">.</span>
          </h2>
          <p className="mt-3 max-w-xl text-ink-600 dark:text-ink-400">
            Roles I've held and what I contributed.
          </p>
        </motion.div>

        <ol className="relative space-y-6 border-l border-ink-200 pl-6 dark:border-ink-800">
          {experience.map((job, idx) => (
            <motion.li
              key={job.company + job.role}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="relative"
            >
              <span className="absolute -left-[31px] top-2 grid h-4 w-4 place-items-center rounded-full border-2 border-accent bg-white dark:bg-ink-950">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              <div className="card p-6">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-lg font-semibold">
                    {job.role}{' '}
                    <span className="text-accent">· {job.company}</span>
                  </h3>
                  <span className="font-mono text-xs text-ink-500 dark:text-ink-400">
                    {job.period}
                  </span>
                </div>
                {job.location && (
                  <p className="mt-1 text-xs text-ink-500 dark:text-ink-400">
                    {job.location}
                  </p>
                )}
                <ul className="mt-4 space-y-2 text-sm text-ink-600 dark:text-ink-300">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
