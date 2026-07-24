import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Project } from '../data'

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null
  onClose: () => void
}) {
  // Esc to close, and lock the page behind the overlay so it doesn't scroll under us
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [project, onClose])

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-start justify-center overflow-y-auto bg-ink-950/80 p-4 backdrop-blur-sm sm:p-8"
        >
          <motion.div
            key="panel"
            role="dialog"
            aria-modal="true"
            aria-label={project.title}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative my-auto w-full max-w-3xl rounded-2xl border border-ink-800 bg-ink-950 shadow-2xl"
          >
            <Header project={project} onClose={onClose} />

            <div className="space-y-10 px-6 pb-10 pt-2 sm:px-8">
              {project.images && project.images.length > 0 && (
                <Gallery images={project.images} title={project.title} />
              )}

              <p className="text-[15px] leading-relaxed text-ink-300">{project.description}</p>

              <Detail project={project} />

              <Links project={project} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

function Header({ project, onClose }: { project: Project; onClose: () => void }) {
  const d = project.detail
  const meta = [d?.year, d?.context, d?.team].filter(Boolean)

  return (
    <div className="sticky top-0 z-10 rounded-t-2xl border-b border-ink-800 bg-ink-950/95 px-6 py-5 backdrop-blur sm:px-8">
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <h2 className="text-2xl font-medium tracking-tight text-ink-50">{project.title}</h2>
          {meta.length > 0 && (
            <p className="mt-1.5 font-mono text-xs text-ink-500">{meta.join('  ·  ')}</p>
          )}
        </div>
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="shrink-0 rounded-md border border-ink-800 p-2 text-ink-400 transition-colors hover:border-ink-600 hover:text-ink-100"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="6" y1="6" x2="18" y2="18" />
            <line x1="18" y1="6" x2="6" y2="18" />
          </svg>
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tags.map((t) => (
          <span key={t} className="tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  )
}

function Gallery({ images, title }: { images: string[]; title: string }) {
  const [active, setActive] = useState(0)
  const src = images[active]

  return (
    <div className="mt-6">
      {/* Contain, never crop — these are screenshots and mockups where the edges carry meaning */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-ink-800 bg-ink-900">
        <img
          src={src}
          alt=""
          aria-hidden
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl saturate-150"
        />
        <img
          src={src}
          alt={`${title} — screenshot ${active + 1}`}
          className="relative h-full w-full object-contain"
        />
      </div>

      {images.length > 1 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {images.map((im, i) => (
            <button
              key={im}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${title} — screenshot ${i + 1}`}
              aria-current={i === active}
              className={`h-16 w-12 shrink-0 overflow-hidden rounded border transition ${
                i === active
                  ? 'border-ink-300 opacity-100'
                  : 'border-ink-800 opacity-45 hover:opacity-90'
              }`}
            >
              <img src={im} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

function Detail({ project }: { project: Project }) {
  const d = project.detail
  if (!d) return null

  return (
    <>
      {d.problem && (
        <Section title="The problem">
          <p className="text-[15px] leading-relaxed text-ink-300">{d.problem}</p>
        </Section>
      )}

      {d.stats && d.stats.length > 0 && (
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-ink-800 bg-ink-800 sm:grid-cols-4">
          {d.stats.map((s) => (
            <div key={s.label} className="bg-ink-950 p-4">
              <div className="font-mono text-lg text-ink-50">{s.value}</div>
              <div className="mt-1 text-xs leading-snug text-ink-500">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {d.howItWorks && d.howItWorks.length > 0 && (
        <Section title="How it works">
          <ol className="space-y-5">
            {d.howItWorks.map((s, i) => (
              <li key={s.step} className="flex gap-4">
                <span className="mt-0.5 shrink-0 font-mono text-xs text-ink-600">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h4 className="text-sm font-medium text-ink-100">{s.step}</h4>
                  <p className="mt-1 text-sm leading-relaxed text-ink-400">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </Section>
      )}

      {d.features && d.features.length > 0 && (
        <Section title="What it does">
          <ul className="space-y-2.5">
            {d.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed text-ink-300">
                <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-ink-700" />
                {f}
              </li>
            ))}
          </ul>
        </Section>
      )}

      {d.stack && d.stack.length > 0 && (
        <Section title="Built with">
          <dl className="space-y-3">
            {d.stack.map((g) => (
              <div key={g.group} className="flex flex-col gap-1.5 sm:flex-row sm:gap-4">
                <dt className="w-40 shrink-0 font-mono text-xs uppercase tracking-wider text-ink-500">
                  {g.group}
                </dt>
                <dd className="flex flex-wrap gap-1.5">
                  {g.items.map((it) => (
                    <span key={it} className="tag">
                      {it}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </Section>
      )}

      {d.notes && d.notes.length > 0 && (
        <Section title="Scope & limitations">
          <ul className="space-y-2">
            {d.notes.map((n) => (
              <li key={n} className="text-sm leading-relaxed text-ink-500">
                {n}
              </li>
            ))}
          </ul>
        </Section>
      )}
    </>
  )
}

function Links({ project }: { project: Project }) {
  const links = [
    { label: 'View source', url: project.repoUrl },
    { label: 'Live demo', url: project.liveUrl },
    { label: 'Figma', url: project.figmaUrl },
  ].filter((l): l is { label: string; url: string } => Boolean(l.url) && l.url !== '#')

  if (links.length === 0) return null

  return (
    <div className="flex flex-wrap gap-3 border-t border-ink-800 pt-6">
      {links.map((l, i) => (
        <a
          key={l.label}
          href={l.url}
          target="_blank"
          rel="noreferrer"
          className={i === 0 ? 'btn-primary' : 'btn'}
        >
          {l.label}
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      ))}
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-ink-500">{title}</h3>
      {children}
    </section>
  )
}
