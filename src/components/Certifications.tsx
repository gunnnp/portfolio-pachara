import { motion } from 'framer-motion'
import { certifications } from '../data'

export default function Certifications() {
  if (certifications.length === 0) return null

  return (
    <section id="certifications" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="section-eyebrow">05. Certifications</p>
          <h2 className="section-title">
            Courses & credentials <span className="text-accent">.</span>
          </h2>
          <p className="mt-3 max-w-xl text-ink-600 dark:text-ink-400">
            Training and certifications I've completed.
          </p>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-2">
          {certifications.map((c, idx) => (
            <motion.article
              key={c.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="card p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold">{c.name}</h3>
                  <p className="mt-1 text-sm text-ink-600 dark:text-ink-400">
                    {c.issuer}
                  </p>
                </div>
                <span className="font-mono text-xs text-ink-500 dark:text-ink-400">
                  {c.date}
                </span>
              </div>
              {c.credentialUrl && c.credentialUrl !== '#' && (
                <a
                  href={c.credentialUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent hover:underline"
                >
                  View credential
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
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
