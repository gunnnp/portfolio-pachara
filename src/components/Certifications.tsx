import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { type Certification } from '../data'
import { useContent, useT } from '../store'

const PER_PAGE = 6

export default function Certifications() {
  const { certifications } = useContent()
  const t = useT()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  // Paged horizontal carousel — swipe on touch, arrows/dots on desktop
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(certifications.length / PER_PAGE)
  const pages = Array.from({ length: pageCount }, (_, p) =>
    certifications.slice(p * PER_PAGE, p * PER_PAGE + PER_PAGE),
  )

  const goTo = (p: number) => {
    const el = scrollerRef.current
    if (!el) return
    const clamped = Math.max(0, Math.min(pageCount - 1, p))
    el.scrollTo({ left: clamped * el.clientWidth, behavior: 'smooth' })
    setPage(clamped)
  }

  const onScroll = () => {
    const el = scrollerRef.current
    if (!el) return
    setPage(Math.round(el.scrollLeft / el.clientWidth))
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (openIdx === null) return
      if (e.key === 'Escape') setOpenIdx(null)
      if (e.key === 'ArrowRight')
        setOpenIdx((i) => (i === null ? null : (i + 1) % certifications.length))
      if (e.key === 'ArrowLeft')
        setOpenIdx((i) =>
          i === null ? null : (i - 1 + certifications.length) % certifications.length,
        )
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openIdx])

  if (certifications.length === 0) return null

  return (
    <section id="certifications" className="py-16 md:py-20">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="eyebrow">04 / {t.sections.certifications}</p>
            <h2 className="h-section mt-4">{t.certs.title}</h2>
            <p className="mt-3 text-sm text-ink-500">{t.certs.subtitle}</p>
          </div>
        </motion.div>

        {/* py-2 keeps card borders off the clip edge — overflow-x:auto forces
            overflow-y to auto, which otherwise shaves the bottom row's border */}
        <div
          ref={scrollerRef}
          onScroll={onScroll}
          className="no-scrollbar mt-8 flex snap-x snap-mandatory overflow-x-auto scroll-smooth py-2"
        >
          {pages.map((group, p) => (
            <div
              key={p}
              className="grid w-full flex-none snap-start grid-cols-2 gap-5 pr-px sm:grid-cols-3"
            >
              {group.map((c, i) => {
                const globalIdx = p * PER_PAGE + i
                return (
                  <button
                    key={c.name}
                    type="button"
                    onClick={() => setOpenIdx(globalIdx)}
                    className="card group flex h-full flex-col text-left"
                  >
                    {/* 3:2 (not the shared card-image 4:3): shorter cards keep the
                        pager on-screen, and most certificates are ~3:2 so they fill
                        the frame with almost no crop */}
                    <div className="relative aspect-[3/2] shrink-0 overflow-hidden bg-ink-900">
                      {c.image ? (
                        c.contain ? (
                          // Square badge: sits on a blurred fill of itself
                          <>
                            <img
                              src={c.image}
                              alt=""
                              aria-hidden
                              className="absolute inset-0 h-full w-full scale-110 object-cover blur-2xl"
                            />
                            <img
                              src={c.image}
                              alt={c.name}
                              loading="lazy"
                              className="absolute inset-0 h-full w-full object-contain p-4 transition-transform duration-500 group-hover:scale-105"
                            />
                          </>
                        ) : (
                          // Certificates are trimmed to the document edge, so cover
                          // fills the frame edge-to-edge. object-top keeps the header
                          // (logo, title, name) — only signatures at the very bottom
                          // fall outside the crop, and the lightbox shows the full image.
                          <img
                            src={c.image}
                            alt={c.name}
                            loading="lazy"
                            className="absolute inset-0 h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                          />
                        )
                      ) : (
                        <div className="grid h-full w-full place-items-center">
                          <CertIcon className="h-12 w-12 text-ink-700" />
                        </div>
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent opacity-60 transition-opacity group-hover:opacity-90" />
                      <span className="absolute left-3 top-3 rounded-md border border-ink-700 bg-ink-950/70 px-1.5 py-0.5 font-mono text-[10px] text-ink-200 backdrop-blur">
                        {String(globalIdx + 1).padStart(2, '0')}
                      </span>
                      <span className="pointer-events-none absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-md border border-ink-700 bg-ink-950/80 px-2 py-1 font-mono text-[10px] text-ink-200 opacity-0 backdrop-blur transition-opacity group-hover:opacity-100">
                        <ExpandIcon className="h-3 w-3" /> View
                      </span>
                    </div>
                    {/* min-h reserves two lines for every name so all cards are
                        the exact same height regardless of title length */}
                    <div className="p-4">
                      <h3 className="line-clamp-2 min-h-[2.4rem] text-sm font-medium leading-snug text-ink-100 group-hover:text-ink-50">
                        {c.name}
                      </h3>
                      <p className="mt-1.5 text-xs text-ink-500">
                        {c.issuer}
                        <span className="mx-1.5 text-ink-700">·</span>
                        <span className="font-mono">{c.date}</span>
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="mt-6 flex items-center justify-center gap-4 font-mono text-xs text-ink-500">
            <button
              type="button"
              onClick={() => goTo(page - 1)}
              disabled={page === 0}
              aria-label={t.certs.prevPage}
              className="grid h-8 w-8 place-items-center rounded-md border border-ink-700 text-ink-200 transition-colors hover:border-ink-500 hover:text-ink-50 disabled:cursor-not-allowed disabled:opacity-30"
            >
              ←
            </button>

            <div className="flex items-center gap-2">
              {pages.map((_, p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => goTo(p)}
                  aria-label={`Go to page ${p + 1}`}
                  aria-current={p === page}
                  className={`h-1.5 rounded-full transition-all ${
                    p === page ? 'w-6 bg-ink-300' : 'w-1.5 bg-ink-700 hover:bg-ink-600'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => goTo(page + 1)}
              disabled={page === pageCount - 1}
              aria-label={t.certs.nextPage}
              className="grid h-8 w-8 place-items-center rounded-md border border-ink-700 text-ink-200 transition-colors hover:border-ink-500 hover:text-ink-50 disabled:cursor-not-allowed disabled:opacity-30"
            >
              →
            </button>
          </div>
        )}
      </div>

      <AnimatePresence>
        {openIdx !== null && (
          <Lightbox
            cert={certifications[openIdx]}
            idx={openIdx}
            total={certifications.length}
            onClose={() => setOpenIdx(null)}
            onPrev={() =>
              setOpenIdx((i) =>
                i === null ? null : (i - 1 + certifications.length) % certifications.length,
              )
            }
            onNext={() =>
              setOpenIdx((i) => (i === null ? null : (i + 1) % certifications.length))
            }
          />
        )}
      </AnimatePresence>
    </section>
  )
}

function Lightbox({
  cert,
  idx,
  total,
  onClose,
  onPrev,
  onNext,
}: {
  cert: Certification
  idx: number
  total: number
  onClose: () => void
  onPrev: () => void
  onNext: () => void
}) {
  const t = useT()
  // Portal to <body> to escape <main>'s z-10 stacking context (see ProjectModal)
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] grid place-items-center bg-ink-950/85 p-4 backdrop-blur-md"
    >
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        aria-label="Previous"
        className="absolute left-4 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-ink-700 bg-ink-900/80 text-ink-200 backdrop-blur hover:border-ink-500 hover:text-ink-50 md:left-8"
      >
        ←
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        aria-label="Next"
        className="absolute right-4 top-1/2 z-10 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full border border-ink-700 bg-ink-900/80 text-ink-200 backdrop-blur hover:border-ink-500 hover:text-ink-50 md:right-8"
      >
        →
      </button>

      <motion.div
        key={cert.name}
        initial={{ opacity: 0, y: 12, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 12, scale: 0.98 }}
        transition={{ duration: 0.25, ease: 'easeOut' }}
        onClick={(e) => e.stopPropagation()}
        className="flex w-full max-w-5xl flex-col overflow-hidden rounded-xl border border-ink-800 bg-ink-900 shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-ink-800 p-4">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-medium text-ink-50">{cert.name}</h3>
            <p className="mt-0.5 text-xs text-ink-500">
              {cert.issuer} <span className="mx-1 text-ink-700">·</span>
              <span className="font-mono">{cert.date}</span>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-3">
            {cert.credentialUrl && (
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="hidden items-center gap-1.5 rounded-md border border-ink-700 px-2.5 py-1 font-mono text-[11px] text-ink-200 transition-colors hover:border-ink-500 hover:text-ink-50 sm:inline-flex"
              >
                {t.certs.verify} ↗
              </a>
            )}
            <span className="hidden font-mono text-xs text-ink-500 md:inline">
              {String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="grid h-8 w-8 place-items-center rounded-md border border-ink-800 text-ink-300 hover:border-ink-600 hover:text-ink-100"
            >
              ✕
            </button>
          </div>
        </div>

        <div className="flex max-h-[80vh] items-center justify-center overflow-auto bg-ink-950 p-4">
          {cert.image ? (
            <img
              src={cert.image}
              alt={cert.name}
              className="max-h-[75vh] w-auto max-w-full rounded-md"
            />
          ) : (
            <div className="grid h-64 w-full place-items-center text-ink-500">
              {t.certs.noImage}
            </div>
          )}
        </div>
      </motion.div>

      <p className="pointer-events-none absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-ink-500">
        {t.certs.hint}
      </p>
    </motion.div>,
    document.body,
  )
}

function ExpandIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="15 3 21 3 21 9" />
      <polyline points="9 21 3 21 3 15" />
      <line x1="21" y1="3" x2="14" y2="10" />
      <line x1="3" y1="21" x2="10" y2="14" />
    </svg>
  )
}

function CertIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  )
}
