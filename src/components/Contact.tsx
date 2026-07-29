import { motion } from 'framer-motion'
import { useContent, useT } from '../store'

export default function Contact() {
  const { profile } = useContent()
  const t = useT()

  const phoneDisplay = profile.phone
    ? profile.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')
    : ''
  const phoneHref = profile.phone ? `tel:+66${profile.phone.replace(/^0/, '')}` : ''

  const channels = [
    { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: MailIcon },
    profile.phone && { label: 'Phone', value: phoneDisplay, href: phoneHref, Icon: PhoneIcon },
    profile.socials.github && {
      label: 'GitHub',
      value: '@' + profile.socials.github.replace(/\/+$/, '').split('/').pop(),
      href: profile.socials.github,
      Icon: GitHubIcon,
    },
    profile.socials.linkedin && {
      label: 'LinkedIn',
      value: profile.name,
      href: profile.socials.linkedin,
      Icon: LinkedInIcon,
    },
  ].filter(Boolean) as { label: string; value: string; href: string; Icon: typeof MailIcon }[]

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">06 / {t.sections.contact}</p>
          <h2 className="mt-4 text-3xl font-medium tracking-tight text-ink-50 md:text-4xl">
            {t.contact.title}
          </h2>
        </motion.div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {channels.map((c, i) => {
            const external = c.href.startsWith('http')
            return (
              <motion.a
                key={c.label}
                href={c.href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="card group flex items-center gap-4 p-5"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-ink-800 bg-ink-900 text-ink-300 transition-colors group-hover:border-ink-600 group-hover:text-ink-50">
                  <c.Icon className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block font-mono text-[11px] uppercase tracking-widest text-ink-500">
                    {c.label}
                  </span>
                  <span className="mt-0.5 block truncate text-sm text-ink-100 group-hover:text-ink-50">
                    {c.value}
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-ink-600 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink-300" />
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function PhoneIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  )
}

function GitHubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.1.68-.22.68-.49v-1.7c-2.78.62-3.37-1.22-3.37-1.22-.45-1.18-1.11-1.5-1.11-1.5-.91-.63.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.57 2.36 1.12 2.94.85.09-.66.35-1.12.63-1.38-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.36 9.36 0 0 1 5 0c1.91-1.33 2.75-1.05 2.75-1.05.55 1.4.2 2.44.1 2.7.64.72 1.03 1.63 1.03 2.75 0 3.93-2.35 4.8-4.58 5.05.36.32.68.94.68 1.9v2.82c0 .27.18.6.69.49A10.26 10.26 0 0 0 22 12.25C22 6.58 17.52 2 12 2z" />
    </svg>
  )
}

function LinkedInIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.73V1.73C24 .77 23.21 0 22.23 0z" />
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
