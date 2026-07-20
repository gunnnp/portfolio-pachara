import { motion } from 'framer-motion'
import { profile, education } from '../data'

const fadeUp = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
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
          <p className="eyebrow">01 / About</p>
          <h2 className="h-section mt-4">A quick intro.</h2>
        </motion.div>

        <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.4fr]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-3 text-sm"
          >
            <InfoRow label="Location" value={profile.location} />
            <InfoRow
              label="Email"
              value={
                <a href={`mailto:${profile.email}`} className="link-quiet">
                  {profile.email}
                </a>
              }
            />
            <InfoRow label="Role" value={profile.role} />
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="space-y-5 text-base leading-relaxed text-ink-300"
          >
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </motion.div>
        </div>

        {education.length > 0 && (
          <div className="mt-20">
            <motion.p
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="eyebrow"
            >
              Education
            </motion.p>
            <ul className="mt-6 divide-y divide-ink-800 border-y border-ink-800">
              {education.map((e, i) => (
                <motion.li
                  key={e.school}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="py-5"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-base text-ink-100">{e.school}</h3>
                    <span className="font-mono text-xs text-ink-500">{e.period}</span>
                  </div>
                  <p className="mt-1 text-sm text-ink-400">{e.degree}</p>
                  {e.detail && <p className="mt-2 text-sm text-ink-500">{e.detail}</p>}
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

function InfoRow({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div className="flex items-baseline gap-4 border-b border-ink-800 pb-2">
      <span className="w-20 shrink-0 font-mono text-xs uppercase tracking-wider text-ink-500">
        {label}
      </span>
      <span className="text-ink-200">{value}</span>
    </div>
  )
}
