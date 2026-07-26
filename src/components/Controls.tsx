import { motion } from 'framer-motion'
import { useApp } from '../store'
import type { Lang } from '../content'

export default function Controls({ className = '' }: { className?: string }) {
  const { theme, lang, setTheme, setLang } = useApp()
  const langs: Lang[] = ['en', 'th']

  // Circular reveal of the new theme, expanding from the button that was clicked.
  const switchTheme = (e: React.MouseEvent) => {
    const next = theme === 'dark' ? 'light' : 'dark'
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const doc = document as Document & {
      startViewTransition?: (cb: () => void) => { ready: Promise<void> }
    }

    if (reduce || !doc.startViewTransition) {
      setTheme(next)
      return
    }

    const x = e.clientX
    const y = e.clientY
    const endRadius = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y))

    // The callback only flips the theme attribute (cheap) so the snapshot is
    // captured instantly. React state updates outside the transition, keeping
    // the clip-path animation from stuttering on a heavy re-render.
    const transition = doc.startViewTransition(() => {
      document.documentElement.setAttribute('data-theme', next)
    })
    setTheme(next)

    transition.ready.then(() => {
      document.documentElement.animate(
        {
          clipPath: [
            `circle(0px at ${x}px ${y}px)`,
            `circle(${endRadius}px at ${x}px ${y}px)`,
          ],
        },
        {
          duration: 500,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          pseudoElement: '::view-transition-new(root)',
        },
      )
    })
  }

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {/* Language segmented control */}
      <div className="flex items-center rounded-full border border-ink-800 bg-ink-900/50 p-0.5 font-mono text-[11px]">
        {langs.map((l) => {
          const active = lang === l
          return (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={active}
              className={`relative rounded-full px-2.5 py-1 uppercase tracking-wider transition-colors ${
                active ? 'text-ink-50' : 'text-ink-500 hover:text-ink-200'
              }`}
            >
              {active && (
                <motion.span
                  layoutId="lang-active"
                  className="absolute inset-0 rounded-full bg-ink-800"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{l}</span>
            </button>
          )
        })}
      </div>

      {/* Theme toggle */}
      <button
        type="button"
        onClick={switchTheme}
        aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
        className="grid h-8 w-8 place-items-center rounded-full border border-ink-800 bg-ink-900/50 text-ink-300 transition-colors hover:border-ink-600 hover:text-ink-50"
      >
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0, scale: 0.6 }}
          animate={{ rotate: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="grid place-items-center"
        >
          {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
        </motion.span>
      </button>
    </div>
  )
}

function SunIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
    </svg>
  )
}

function MoonIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  )
}
