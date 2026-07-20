import { motion } from 'framer-motion'
import { profile } from '../data'

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/40 p-10 md:p-14"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'radial-gradient(ellipse 50% 60% at 100% 0%, black, transparent 70%)',
              WebkitMaskImage: 'radial-gradient(ellipse 50% 60% at 100% 0%, black, transparent 70%)',
            }}
          />

          <div className="relative">
            <p className="eyebrow">06 / Contact</p>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink-50 md:text-5xl">
              Let's build something.
            </h2>
            <p className="mt-4 max-w-lg text-base leading-relaxed text-ink-400">
              Currently open to frontend developer roles. I usually reply within a day.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn-primary arrow-hover">
                <span>{profile.email}</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              {profile.socials.github && (
                <a
                  href={profile.socials.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  GitHub
                </a>
              )}
              {profile.socials.linkedin && (
                <a
                  href={profile.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="btn"
                >
                  LinkedIn
                </a>
              )}
            </div>

            <div className="mt-8 inline-flex items-center gap-2 text-xs text-ink-500">
              <span className="status-dot" aria-hidden />
              <span>Available now</span>
            </div>
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
