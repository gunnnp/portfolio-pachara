import { motion } from 'framer-motion'
import { activities } from '../data'

export default function Activities() {
  if (activities.length === 0) return null

  return (
    <section id="activities" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">05 / Activities</p>
          <h2 className="h-section mt-4">Beyond the code.</h2>
        </motion.div>

        <ol className="relative mt-12 space-y-4 border-l border-ink-800 pl-6">
          {activities.map((a, idx) => (
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
                <p className="mt-2 text-sm leading-relaxed text-ink-400">
                  {a.description}
                </p>
                {a.image && (
                  <div className="mt-4 overflow-hidden rounded-md border border-ink-800">
                    <img src={a.image} alt={a.title} className="h-auto w-full object-cover" />
                  </div>
                )}
              </article>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
