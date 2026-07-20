import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Hero() {
  return (
    <section id="top" className="section relative pt-32 md:pt-40">
      <div className="container-x">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-eyebrow"
        >
          Hello there — I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.05]"
        >
          {profile.name}.
          <br />
          <span className="bg-gradient-to-r from-accent to-accent-soft bg-clip-text text-transparent">
            {profile.role}.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-6 max-w-2xl text-lg text-ink-600 dark:text-ink-300"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="btn-primary">
            View my work
            <ArrowRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn-ghost">
            Get in touch
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid max-w-2xl grid-cols-3 gap-4"
        >
          {profile.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-xl border border-ink-200/70 bg-white/40 p-4 backdrop-blur dark:border-ink-800 dark:bg-ink-900/40"
            >
              <div className="text-2xl font-bold text-accent">{h.value}</div>
              <div className="mt-1 text-xs text-ink-500 dark:text-ink-400">
                {h.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  )
}
