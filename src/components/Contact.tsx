import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <p className="section-eyebrow">07. Contact</p>
          <h2 className="section-title">
            Let's build something together <span className="text-accent">.</span>
          </h2>
          <p className="mt-4 text-ink-600 dark:text-ink-400">
            I'm currently open to <strong className="text-ink-900 dark:text-ink-100">frontend developer</strong> roles.
            Feel free to reach out — I usually reply within a day.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="btn-primary mt-8 !px-6 !py-3 text-base"
          >
            Say hello
            <ArrowUpRight className="h-4 w-4" />
          </a>

          <div className="mt-10 flex items-center justify-center gap-6 text-sm text-ink-500 dark:text-ink-400">
            {profile.socials.github && (
              <a
                href={profile.socials.github}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                GitHub
              </a>
            )}
            {profile.socials.linkedin && (
              <a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}
