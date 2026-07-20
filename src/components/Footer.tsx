import { profile } from '../data'

export default function Footer() {
  return (
    <footer className="border-t border-ink-200/50 dark:border-ink-800/50 py-8 text-center text-xs text-ink-500 dark:text-ink-500">
      <div className="container-x">
        Built with <span className="text-accent">React + Vite + Tailwind</span>{' '}
        · © {new Date().getFullYear()} {profile.name}
      </div>
    </footer>
  )
}
