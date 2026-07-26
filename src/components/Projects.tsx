import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { type Project } from '../data'
import { useContent, useT } from '../store'
import ProjectModal from './ProjectModal'

export default function Projects() {
  const { projects } = useContent()
  const ui = useT()
  const [open, setOpen] = useState<Project | null>(null)

  // Let other sections (e.g. the Activities award card) open a project's detail
  useEffect(() => {
    const onOpen = (e: Event) => {
      const title = (e as CustomEvent<string>).detail
      const match = projects.find((p) => p.title === title)
      if (match) setOpen(match)
    }
    window.addEventListener('open-project', onOpen)
    return () => window.removeEventListener('open-project', onOpen)
  }, [projects])

  return (
    <section id="projects" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="eyebrow">03 / {ui.sections.projects}</p>
            <h2 className="h-section mt-4">{ui.projects.title}</h2>
          </div>
          <p className="max-w-sm text-sm text-ink-500">{ui.projects.subtitle}</p>
        </motion.div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} idx={i} onOpen={() => setOpen(p)} />
          ))}
        </div>
      </div>

      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </section>
  )
}

function ProjectCard({
  project,
  idx,
  onOpen,
}: {
  project: Project
  idx: number
  onOpen: () => void
}) {
  const ui = useT()
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: (idx % 2) * 0.08 }}
      className="card group flex flex-col"
    >
      <ProjectMedia project={project} idx={idx} onOpen={onOpen} />

      <div className="flex flex-1 flex-col p-5">
        <h3>
          <button
            type="button"
            onClick={onOpen}
            className="text-left text-base font-medium text-ink-50 transition-colors hover:text-white"
          >
            {project.title}
          </button>
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span key={t} className="tag">
              {t}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-4 border-t border-ink-800 pt-4 text-sm">
          <button
            type="button"
            onClick={onOpen}
            className="group/more inline-flex items-center gap-1 text-ink-100 hover:text-white"
          >
            {ui.projects.readMore}{' '}
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/more:translate-x-0.5" />
          </button>
          {project.liveUrl && project.liveUrl !== '#' && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="arrow-hover inline-flex items-center gap-1 text-ink-200 hover:text-ink-50"
            >
              {ui.projectModal.liveDemo} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noreferrer"
              className="arrow-hover inline-flex items-center gap-1 text-ink-400 hover:text-ink-100"
            >
              {ui.projects.source} <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

function ProjectMedia({
  project,
  idx,
  onOpen,
}: {
  project: Project
  idx: number
  onOpen: () => void
}) {
  const ui = useT()
  const images = project.images ?? []
  const [active, setActive] = useState(0)
  const src = images[active]

  return (
    <>
      <div className="card-image">
        {project.video ? (
          <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
        ) : src ? (
          project.portrait ? (
            // Phone screenshots: show the whole frame over a blurred fill of itself
            <>
              <img
                src={src}
                alt=""
                aria-hidden
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-xl saturate-150"
              />
              <img
                src={src}
                alt={`${project.title} — screenshot ${active + 1}`}
                className="relative h-full w-full object-contain"
              />
            </>
          ) : (
            <img
              src={src}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          )
        ) : (
          <div className="relative grid h-full w-full place-items-center">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
                maskImage: 'radial-gradient(circle at center, black, transparent 70%)',
              }}
            />
            <span className="font-mono text-6xl font-medium text-ink-700">
              {String(idx + 1).padStart(2, '0')}
            </span>
          </div>
        )}
        {/* Click target over the whole image — the thumbnail strip sits outside it */}
        <button
          type="button"
          onClick={onOpen}
          aria-label={`${ui.projects.viewDetails} — ${project.title}`}
          className="absolute inset-0 flex items-end justify-center pb-4 opacity-0 transition-opacity duration-300 focus-visible:opacity-100 group-hover:opacity-100"
        >
          <span className="rounded-full border border-ink-600 bg-ink-950/80 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-100 backdrop-blur">
            {ui.projects.viewDetails}
          </span>
        </button>
      </div>

      {images.length > 1 && (
        <div className="flex gap-2 border-b border-ink-800 bg-ink-950/40 px-5 py-3">
          {images.map((im, i) => (
            <button
              key={im}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`${project.title} — screenshot ${i + 1}`}
              aria-current={i === active}
              className={`h-14 w-10 shrink-0 overflow-hidden rounded border transition ${
                i === active
                  ? 'border-ink-400 opacity-100'
                  : 'border-ink-800 opacity-50 hover:opacity-90'
              }`}
            >
              <img src={im} alt="" className="h-full w-full object-cover" />
            </button>
          ))}
        </div>
      )}
    </>
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

function ArrowUpRight(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="7" y1="17" x2="17" y2="7" />
      <polyline points="7 7 17 7 17 17" />
    </svg>
  )
}
