import { profile } from '../data'
import { useT } from '../store'

export default function Footer() {
  const t = useT()
  return (
    <footer className="border-t border-ink-800 py-8">
      <div className="container-x flex flex-wrap items-center justify-between gap-2 text-xs text-ink-500">
        <span className="font-mono">
          © {new Date().getFullYear()} · {profile.name}
        </span>
        <span className="font-mono">{t.footer.builtWith}</span>
      </div>
    </footer>
  )
}
