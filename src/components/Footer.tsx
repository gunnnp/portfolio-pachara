import { useContent } from '../store'

export default function Footer() {
  const { profile } = useContent()
  return (
    <footer className="border-t border-ink-800 py-8">
      <div className="container-x flex items-center justify-center gap-2 text-xs text-ink-500">
        <span className="font-mono">
          © {new Date().getFullYear()} · {profile.name}
        </span>
      </div>
    </footer>
  )
}
