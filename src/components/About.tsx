import { motion } from 'framer-motion'
import { profile, education } from '../data'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container-x grid gap-12 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <p className="section-eyebrow">01. About</p>
          <h2 className="section-title">
            A quick intro <span className="text-accent">.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3 space-y-5 text-lg text-ink-600 dark:text-ink-300 leading-relaxed"
        >
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}

          <div className="flex flex-wrap items-center gap-3 pt-4 text-sm text-ink-500 dark:text-ink-400">
            <span className="chip">📍 {profile.location}</span>
            <a href={`mailto:${profile.email}`} className="chip hover:text-accent">
              ✉ {profile.email}
            </a>
          </div>
        </motion.div>
      </div>

      <div className="container-x mt-20 grid gap-12 md:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2"
        >
          <p className="section-eyebrow">Education</p>
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Where I studied <span className="text-accent">.</span>
          </h3>
        </motion.div>

        <motion.ul
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3 space-y-4"
        >
          {education.map((e) => (
            <li key={e.school} className="card p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h4 className="text-lg font-semibold">{e.school}</h4>
                <span className="font-mono text-xs text-ink-500 dark:text-ink-400">
                  {e.period}
                </span>
              </div>
              <p className="mt-1 text-sm text-accent">{e.degree}</p>
              {e.detail && (
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-400">
                  {e.detail}
                </p>
              )}
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
