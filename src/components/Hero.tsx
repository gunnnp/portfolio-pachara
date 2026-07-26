import { motion } from 'framer-motion'
import { useContent, useT } from '../store'

export default function Hero() {
  const { profile } = useContent()
  const t = useT()
  return (
    <section id="top" className="section relative overflow-hidden pt-36 md:pt-44">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
            maskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent 80%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 50% at 50% 30%, black, transparent 80%)',
          }}
        />
      </div>

      <div className="container-x grid items-center gap-10 md:grid-cols-[1.15fr_0.85fr] md:gap-14">
        <div>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 rounded-full border border-ink-800 bg-ink-900/60 px-3 py-1 text-xs text-ink-300 backdrop-blur"
        >
          <span className="status-dot" aria-hidden />
          <span>{t.hero.badge}</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-6 text-4xl font-medium tracking-tight text-ink-50 md:text-6xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-3 text-lg text-ink-400 md:text-xl"
        >
          {t.hero.roleLine}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.22 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-ink-400"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a href="#projects" className="btn-primary arrow-hover">
            <span>{t.hero.viewWork}</span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
          <a href="#contact" className="btn">
            {t.hero.getInTouch}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-ink-800/70 pt-6 font-mono text-xs text-ink-500"
        >
          <span className="inline-flex items-center gap-2">
            <LocationIcon className="h-3.5 w-3.5" />
            {profile.location}
          </span>
          <a href={`mailto:${profile.email}`} className="link-quiet">
            {profile.email}
          </a>
          {profile.socials.github && (
            <a href={profile.socials.github} target="_blank" rel="noreferrer" className="link-quiet">
              GitHub ↗
            </a>
          )}
          {profile.socials.linkedin && (
            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer" className="link-quiet">
              LinkedIn ↗
            </a>
          )}
        </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[15rem] md:order-last md:max-w-none"
        >
          {/* colour glow behind the frame */}
          <div
            aria-hidden
            className="absolute -inset-6 -z-20 rounded-[2.5rem] opacity-80 blur-3xl"
            style={{
              background:
                'radial-gradient(58% 58% at 30% 22%, rgb(99 102 241 / 0.35), transparent 70%), radial-gradient(50% 50% at 85% 90%, rgb(56 189 248 / 0.28), transparent 70%)',
            }}
          />

          {/* offset outline frame for depth */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 translate-x-3.5 translate-y-3.5 rounded-2xl border border-ink-700/60"
          />

          {/* dotted texture peeking from behind, top-left */}
          <div
            aria-hidden
            className="absolute -left-5 -top-5 -z-10 h-20 w-20 rounded-lg opacity-60"
            style={{
              backgroundImage: 'radial-gradient(rgb(var(--ink-500) / 0.6) 1px, transparent 1px)',
              backgroundSize: '9px 9px',
              maskImage: 'linear-gradient(135deg, black, transparent 65%)',
              WebkitMaskImage: 'linear-gradient(135deg, black, transparent 65%)',
            }}
          />

          <div className="group relative aspect-square overflow-hidden rounded-2xl border border-ink-800 bg-ink-900 shadow-2xl">
            <img
              src="/pachara.jpg"
              alt={profile.name}
              className="absolute inset-0 h-full w-full object-cover object-[center_12%] transition-transform duration-700 group-hover:scale-[1.04]"
            />
            {/* gentle vignette + top sheen */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/25 via-transparent to-white/5" />
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10" />
          </div>

          {/* viewfinder corner brackets */}
          <span
            aria-hidden
            className="pointer-events-none absolute -left-1.5 -top-1.5 h-6 w-6 rounded-tl-lg border-l-2 border-t-2 border-ink-500"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-1.5 -right-1.5 h-6 w-6 rounded-br-lg border-b-2 border-r-2 border-ink-500"
          />
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

function LocationIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  )
}
