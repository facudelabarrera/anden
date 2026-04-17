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
  const borderWidth = 1
  const thumbInset = 2
  const toggleWidth = 112
  const toggleHeight = 34
  // Descontar border (box-sizing: border-box) para que el inset sea uniforme en los 4 lados
  const innerWidth = toggleWidth - borderWidth * 2   // 110
  const innerHeight = toggleHeight - borderWidth * 2  // 32
  const thumbWidth = (innerWidth - thumbInset * 2) / 2 // 53
  const thumbHeight = innerHeight - thumbInset * 2     // 28

  // Light mode colors
  const lightMode = {
    containerBg: '#f5f0e4',
    containerBorder: 'rgba(139,115,85,0.5)',
    containerShadow: 'inset 0 1px 3px rgba(0,0,0,0.07)',
    activeBg: '#e0e738',
    activeShadow: '0 1px_3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
    activeText: '#303994',
    inactiveText: '#7a6250',
  }

  // Dark mode colors (scrolled)
  const darkMode = {
    containerBg: '#251a15',
    containerBorder: 'rgba(92,74,61,0.6)',
    containerShadow: 'inset 0 1px 3px rgba(0,0,0,0.2)',
    activeBg: '#e0e738',
    activeShadow: '0 1px 3px rgba(0,0,0,0.25), 0 1px 2px rgba(0,0,0,0.15)',
    activeText: '#303994',
    inactiveText: '#9c8470',
  }

  const colors = isScrolled ? darkMode : lightMode

  return (
    <div
      className={`relative inline-grid grid-cols-2 items-center rounded-[10px] border select-none ${className || ''}`}
      style={{
        borderColor: colors.containerBorder,
        backgroundColor: colors.containerBg,
        boxShadow: colors.containerShadow,
        height: `${toggleHeight}px`,
        width: `${toggleWidth}px`,
        padding: `${thumbInset}px`,
      }}
      role="group"
      aria-label="Selector de idioma"
    >
      {/* Active pill */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute rounded-[8px]"
        style={{
          backgroundColor: colors.activeBg,
          boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08)',
          width: `${thumbWidth}px`,
          height: `${thumbHeight}px`,
          left: isActiveES ? `${thumbInset}px` : `${thumbInset + thumbWidth}px`,
          top: `${thumbInset}px`,
          transition: 'left 200ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        }}
      />

      {/* ES Button */}
      <button
        onClick={() => setLang('es')}
        className="relative z-10 flex h-full items-center justify-center rounded-[8px] outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-brand/30"
        aria-pressed={isActiveES}
        aria-label="Cambiar a español"
        type="button"
      >
        <span
          className="text-[11px] leading-none tracking-[0.07em] font-alfarn font-bold"
          style={{ color: isActiveES ? colors.activeText : colors.inactiveText }}
        >
          ES
        </span>
      </button>

      {/* EN Button */}
      <button
        onClick={() => setLang('en')}
        className="relative z-10 flex h-full items-center justify-center rounded-[8px] outline-none transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-blue-brand/30"
        aria-pressed={isActiveEN}
        aria-label="Switch to English"
        type="button"
      >
        <span
          className="text-[11px] leading-none tracking-[0.07em] font-alfarn font-bold"
          style={{ color: isActiveEN ? colors.activeText : colors.inactiveText }}
        >
          EN
        </span>
      </button>
    </div>
  )
}
