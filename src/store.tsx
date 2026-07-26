import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { content, ui, type Content, type Lang, type Theme, type UI } from './content'

type AppState = {
  theme: Theme
  lang: Lang
  toggleTheme: () => void
  setTheme: (t: Theme) => void
  setLang: (l: Lang) => void
}

const AppContext = createContext<AppState | null>(null)

function readTheme(): Theme {
  const saved = localStorage.getItem('theme')
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

function readLang(): Lang {
  const saved = localStorage.getItem('lang')
  if (saved === 'en' || saved === 'th') return saved
  return navigator.language.toLowerCase().startsWith('th') ? 'th' : 'en'
}

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(readTheme)
  const [lang, setLangState] = useState<Lang>(readLang)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    localStorage.setItem('lang', lang)
  }, [lang])

  const value = useMemo<AppState>(
    () => ({
      theme,
      lang,
      toggleTheme: () => setTheme((t) => (t === 'dark' ? 'light' : 'dark')),
      setTheme: (t) => setTheme(t),
      setLang: (l) => setLangState(l),
    }),
    [theme, lang],
  )

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp(): AppState {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

export function useContent(): Content {
  return content[useApp().lang]
}

export function useT(): UI {
  return ui[useApp().lang]
}
