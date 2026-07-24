import { motion } from 'framer-motion'
import { useApp } from '../store'
import type { Lang } from '../content'

export default function Controls({ className = '' }: { className?: string }) {
  const { theme, lang, toggleTheme, setLang } = useApp()
  const langs: Lang[] = ['en', 'th']

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
        onClick={toggleTheme}
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
