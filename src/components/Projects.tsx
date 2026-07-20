import { motion } from 'framer-motion'
import { projects } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex flex-wrap items-end justify-between gap-4"
        >
          <div>
            <p className="section-eyebrow">04. Projects</p>
            <h2 className="section-title">
              Selected work <span className="text-accent">.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm text-ink-600 dark:text-ink-400">
            A few things I've built recently. More on my GitHub.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card group relative flex flex-col overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-accent/10 via-transparent to-accent-soft/20">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={p.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="grid h-full w-full place-items-center">
                    <div className="font-mono text-4xl font-bold text-accent/40">
                      {String(idx + 1).padStart(2, '0')}
                    </div>
                  </div>
                )}
                {p.featured && (
                  <span className="absolute left-4 top-4 chip !border-accent/50 !bg-accent/10 !text-accent">
                    Featured
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-ink-600 dark:text-ink-400 flex-1">
                  {p.description}
                </p>

                {p.contribution && (
                  <p className="mt-3 text-xs text-ink-500 dark:text-ink-400">
                    <span className="font-mono uppercase tracking-wider text-accent">
                      My role:{' '}
                    </span>
                    {p.contribution}
                  </p>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 text-sm">
                  {p.liveUrl && (
                    <a
                      href={p.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-accent hover:underline"
                    >
                      Live demo <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                  {p.repoUrl && (
                    <a
                      href={p.repoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-ink-600 dark:text-ink-300 hover:text-accent"
                    >
                      Source <GithubIcon className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExternalLink(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2.1 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 .1-.8.4-1.4.8-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.4-.5-1.6.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.3 4.6 18.3 5 18.3 5c.6 1.6.2 2.8.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.7-2.8 5.7-5.5 6 .4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
    </svg>
  )
}
