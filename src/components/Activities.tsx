import { useState } from 'react'
import { motion } from 'framer-motion'
import { type Activity } from '../data'
import { useContent, useT } from '../store'

export default function Activities() {
  const { activities } = useContent()
  const t = useT()
  if (activities.length === 0) return null

  const featured = activities.filter((a) => a.featured)
  const rest = activities.filter((a) => !a.featured)

  return (
    <section id="activities" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">05 / {t.sections.activities}</p>
          <h2 className="h-section mt-4">{t.activities.title}</h2>
        </motion.div>

        {featured.map((a, idx) => (
          <AwardCard key={a.title} activity={a} idx={idx} />
        ))}

        {rest.length > 0 && (
          <ol className="relative mt-10 space-y-4 border-l border-ink-800 pl-6">
            {rest.map((a, idx) => (
              <motion.li
                key={a.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="relative"
              >
                <span className="absolute -left-[27px] top-2 grid h-3 w-3 place-items-center rounded-full bg-ink-950 ring-1 ring-ink-700">
                  <span className="h-1 w-1 rounded-full bg-ink-400" />
                </span>

                <article className="card p-5">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-500">
                    <span className="rounded-md border border-ink-800 bg-ink-900 px-2 py-0.5 font-mono uppercase tracking-wider text-ink-300">
                      {a.category}
                    </span>
                    <span className="font-mono">{a.date}</span>
                  </div>
                  <h3 className="mt-3 text-base font-medium text-ink-50">{a.title}</h3>
                  {a.role && <p className="mt-1 text-sm text-ink-400">{a.role}</p>}
                  <p className="mt-2 text-sm leading-relaxed text-ink-400">{a.description}</p>
                </article>
              </motion.li>
            ))}
          </ol>
        )}
      </div>
    </section>
  )
}

function AwardCard({ activity: a, idx }: { activity: Activity; idx: number }) {
  const t = useT()
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay: idx * 0.05 }}
      className="card mt-12 overflow-hidden md:grid md:grid-cols-2"
    >
      {a.images && a.images.length > 0 && (
        <Gallery images={a.images} title={a.title} />
      )}

      <div className="flex flex-col justify-center p-6 md:p-8">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/10 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-amber-300">
            <TrophyIcon className="h-3 w-3" />
            {a.category}
          </span>
          <span className="font-mono text-xs text-ink-500">{a.date}</span>
        </div>

        <h3 className="mt-4 text-xl font-medium tracking-tight text-ink-50 md:text-2xl">
          {a.title}
        </h3>

        {a.event && <p className="mt-2 font-mono text-xs text-ink-400">{a.event}</p>}
        {a.location && <p className="mt-0.5 font-mono text-xs text-ink-600">{a.location}</p>}
        {a.role && <p className="mt-3 text-sm text-ink-400">{a.role}</p>}

        <p className="mt-4 text-sm leading-relaxed text-ink-400">{a.description}</p>

        {(a.prize || a.project) && (
          <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-ink-800 pt-5">
            {a.prize && <span className="font-mono text-lg text-amber-300">{a.prize}</span>}
            {a.project && (
              <button
                type="button"
                onClick={() =>
                  window.dispatchEvent(
                    new CustomEvent('open-project', { detail: a.project }),
                  )
                }
                className="arrow-hover inline-flex items-center gap-1.5 text-sm text-ink-100 hover:text-white"
              >
                {a.hrefLabel ?? t.activities.learnMore}
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        )}
      </div>
    </motion.article>
  )
}

function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0)

  return (
    <div className="flex flex-col gap-3 p-4 md:p-5">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-ink-800 bg-ink-900">
        <img
          src={images[active]}
          alt={`${title} — photo ${active + 1}`}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {images.length > 1 && (
        <div className="grid grid-cols-3 gap-3">
          {images.map((im, i) => (
            <button
              key={im}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${title} — photo ${i + 1}`}
              aria-current={i === active}
              className={`relative aspect-[4/3] overflow-hidden rounded-md border transition ${
                i === active
                  ? 'border-ink-300 opacity-100'
                  : 'border-ink-800 opacity-55 hover:opacity-90'
              }`}
            >
              <img src={im} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function TrophyIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  )
}

function ArrowRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="5" y1="12" x2="18" y2="12" />
      <polyline points="12 6 18 12 12 18" />
    </svg>
  )
}
