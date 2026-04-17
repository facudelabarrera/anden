'use client'

import { useLanguage } from '@/lib/i18n'

interface LanguageToggleProps {
  className?: string
  isScrolled?: boolean
}

/**
 * LanguageToggle - Pill-within-pill style language switcher
 * 
 * Visual design:
 * - Outer container: pill shape with border
 * - Active state: independent inner pill with full rounded corners
 * - No visible divider - active sits as floating pill inside container
 * 
 * States:
 * - ES active: yellow pill on left
 * - EN active: yellow pill on right
 * 
 * Dark mode (scrolled):
 * - Container adapts to dark background
 */
export default function LanguageToggle({ className, isScrolled = false }: LanguageToggleProps) {
  const { lang, setLang } = useLanguage()

  const isActiveES = lang === 'es'
  const isActiveEN = lang === 'en'
  const thumbInset = 2
  const toggleWidth = 112
  const toggleHeight = 34
  const thumbWidth = 53

  // Light mode colors
  const lightMode = {
    containerBg: '#f7f3e7',
    containerBorder: '#8b7355',
    activeBg: '#e0e738',
    activeText: '#303994',
    inactiveText: '#5c4a3d',
  }

  // Dark mode colors (scrolled)
  const darkMode = {
    containerBg: '#2d1f1a',
    containerBorder: '#5c4a3d',
    activeBg: '#e0e738',
    activeText: '#303994',
    inactiveText: '#a8917a',
  }

  const colors = isScrolled ? darkMode : lightMode

  return (
    <div
      className={`relative inline-grid grid-cols-2 items-center rounded-[10px] border select-none ${className || ''}`}
      style={{
        borderColor: colors.containerBorder,
        backgroundColor: colors.containerBg,
        height: `${toggleHeight}px`,
        width: `${toggleWidth}px`,
        padding: `${thumbInset}px`,
      }}
      role="group"
      aria-label="Selector de idioma"
    >
      {/* Active pill - independent rounded element */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-[8px] shadow-[0_1px_2px_rgba(57,4,0,0.08)] transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          backgroundColor: colors.activeBg,
          width: `${thumbWidth}px`,
          height: `${toggleHeight - thumbInset * 2}px`,
          left: isActiveES ? `${thumbInset}px` : `${toggleWidth - thumbInset - thumbWidth}px`,
          top: `${thumbInset}px`,
        }}
      />

      {/* ES Button */}
      <button
        onClick={() => setLang('es')}
        className="relative z-10 flex h-[30px] items-center justify-center rounded-[8px] outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-brand/30"
        aria-pressed={isActiveES}
        aria-label="Cambiar a español"
        type="button"
      >
        <span
          className="block -translate-y-[0.5px] text-[11px] leading-none tracking-[0.06em] font-alfarn font-bold"
          style={{
            color: isActiveES ? colors.activeText : colors.inactiveText,
          }}
        >
          ES
        </span>
      </button>

      {/* EN Button */}
      <button
        onClick={() => setLang('en')}
        className="relative z-10 flex h-[30px] items-center justify-center rounded-[8px] outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-brand/30"
        aria-pressed={isActiveEN}
        aria-label="Switch to English"
        type="button"
      >
        <span
          className="block -translate-y-[0.5px] text-[11px] leading-none tracking-[0.06em] font-alfarn font-bold"
          style={{
            color: isActiveEN ? colors.activeText : colors.inactiveText,
          }}
        >
          EN
        </span>
      </button>
    </div>
  )
}
