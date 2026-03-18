// Shared motion system tokens — single source of truth for all animations

/** Custom ease-out curve — smooth deceleration, premium feel */
export const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

/** Duration scale */
export const DURATION = {
  sm: 0.4,
  md: 0.65,
  lg: 0.85,
} as const

/** Delay between staggered children (seconds) */
export const STAGGER = 0.08

/** Scroll viewport threshold — trigger when 10% visible, re-trigger on every entry */
export const VIEWPORT = { once: false, amount: 0.1 } as const

/** Pre-built variant sets */
export const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  staggerParent: {
    hidden: {},
    visible: { transition: { staggerChildren: STAGGER } },
  },
  staggerChild: {
    hidden: { opacity: 0, y: 28, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: DURATION.md, ease: EASE } },
  },
} as const
