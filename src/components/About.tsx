import { motion } from 'framer-motion'
import { useContent, useT } from '../store'

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  const { profile, education } = useContent()
  const t = useT()

  return (
    <section id="about" className="section">
      <div className="container-x">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">01 / {t.sections.about}</p>
          <h2 className="h-section mt-4">{t.about.title}</h2>
        </motion.div>

        {/* Intro — full-width lead */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 max-w-2xl space-y-5 text-lg leading-relaxed text-ink-300"
        >
          {profile.about.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </motion.div>

        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Facts */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
          >
            <p className="eyebrow">{t.about.details}</p>
            <dl className="mt-6 divide-y divide-ink-800 overflow-hidden rounded-xl border border-ink-800">
              <Fact label={t.about.location} value={profile.location} />
              <Fact
                label={t.about.email}
                value={
                  <a href={`mailto:${profile.email}`} className="link-quiet break-all">
                    {profile.email}
                  </a>
                }
              />
              <Fact label={t.about.role} value={profile.role} />
            </dl>
          </motion.div>

          {/* Education timeline */}
          {education.length > 0 && (
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              <p className="eyebrow">{t.about.education}</p>
              <ol className="relative mt-6 space-y-9 border-l border-ink-800 pl-8">
                {education.map((e, i) => (
                  <motion.li
                    key={e.school}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="relative"
                  >
                    <span
                      aria-hidden
                      className={`absolute -left-[calc(2rem+5px)] top-1 h-2.5 w-2.5 rounded-full ${
                        e.current
                          ? 'bg-amber-400 ring-4 ring-amber-400/15'
                          : 'bg-ink-950 ring-1 ring-ink-600'
                      }`}
                    />
                    <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">
                      {e.stage}
                    </p>
                    <h3 className="mt-1.5 text-lg font-medium text-ink-50">{e.school}</h3>
                    <p className="mt-1 text-sm">
                      <span className="font-medium text-ink-300">{e.degree}</span>
                      {e.detail && <span className="text-ink-500"> · {e.detail}</span>}
                    </p>
                  </motion.li>
                ))}
              </ol>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

function Fact({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 px-4 py-3.5">
      <dt className="w-24 shrink-0 font-mono text-xs uppercase tracking-wider text-ink-500">
        {label}
      </dt>
      <dd className="text-sm text-ink-200">{value}</dd>
    </div>
  )
}
