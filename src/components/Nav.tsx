import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data'

const links = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#certifications', label: 'Certs' },
  { href: '#activities', label: 'Activities' },
  { href: '#contact', label: 'Contact' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = links
      .map((l) => document.querySelector(l.href))
      .filter(Boolean) as HTMLElement[]
    if (sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive('#' + entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'border-b border-ink-800/60 bg-ink-950/70 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-x flex h-14 items-center justify-between">
        <a href="#top" className="group flex items-center gap-2 text-sm">
          <span className="grid h-7 w-7 place-items-center rounded-md border border-ink-700 bg-ink-900 font-mono text-xs text-ink-100 transition-colors group-hover:border-ink-500">
            {profile.name.charAt(0)}
          </span>
          <span className="text-ink-100 group-hover:text-ink-50">{profile.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`relative rounded-md px-3 py-1.5 text-sm transition-colors ${
                  active === l.href ? 'text-ink-50' : 'text-ink-400 hover:text-ink-100'
                }`}
              >
                {active === l.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-0 rounded-md bg-ink-800/70"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a href="#contact" className="hidden text-xs text-ink-300 hover:text-ink-100 sm:inline-flex sm:items-center sm:gap-2">
            <span className="status-dot" aria-hidden />
            <span>Available</span>
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-8 w-8 place-items-center rounded-md border border-ink-800 text-ink-300 hover:border-ink-600 hover:text-ink-100 md:hidden"
          >
            <MenuIcon open={open} className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-800/60 bg-ink-950/95 backdrop-blur-md md:hidden">
          <ul className="container-x flex flex-col py-2">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-ink-300 hover:text-ink-100"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  )
}

function MenuIcon({ open, ...rest }: React.SVGProps<SVGSVGElement> & { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...rest}>
      {open ? (
        <>
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
        </>
      ) : (
        <>
          <line x1="4" y1="8" x2="20" y2="8" />
          <line x1="4" y1="16" x2="20" y2="16" />
        </>
      )}
    </svg>
  )
}
