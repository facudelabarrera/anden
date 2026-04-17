'use client'

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react'
import { es } from '@/translations/es'
import { en } from '@/translations/en'

export type Language = 'es' | 'en'
export type Translations = typeof es | typeof en

const TRANSLATIONS = { es, en } satisfies Record<Language, Translations>
const STORAGE_KEY = 'anden-lang'

type LanguageContextValue = {
  lang: Language
  setLang: (l: Language) => void
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'es',
  setLang: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>('es')

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Language | null
      if (stored === 'en') setLangState('en')
    } catch {}
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  function setLang(l: Language) {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {}
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}

export function useTranslation(): Translations {
  const { lang } = useLanguage()
  return TRANSLATIONS[lang]
}
