'use client'

import { useEffect, useRef } from 'react'
import { useInView, animate } from 'framer-motion'
import { EASE } from '@/lib/motion'

interface AnimatedCounterProps {
  /** Final numeric value */
  to: number
  /** Text before the number (e.g. '~', '+', 'USD ') */
  prefix?: string
  /** Text after the number (e.g. '+', '%', 'K', 'B') */
  suffix?: string
  /** Decimal places */
  decimals?: number
  /** Use dot as thousands separator (e.g. 7.000) */
  thousandsSep?: boolean
  /** Animation duration in seconds */
  duration?: number
  className?: string
}

function formatValue(value: number, decimals: number, thousandsSep: boolean): string {
  if (decimals > 0) {
    return value.toFixed(decimals)
  }
  const rounded = Math.round(value).toString()
  if (thousandsSep) {
    return rounded.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
  }
  return rounded
}

export function AnimatedCounter({
  to,
  prefix = '',
  suffix = '',
  decimals = 0,
  thousandsSep = false,
  duration = 1.6,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: false, amount: 0.5 })

  useEffect(() => {
    if (!isInView) return
    const el = ref.current
    if (!el) return

    const controls = animate(0, to, {
      duration,
      ease: EASE,
      onUpdate(value) {
        el.textContent = prefix + formatValue(value, decimals, thousandsSep) + suffix
      },
    })

    return () => controls.stop()
  }, [isInView, to, prefix, suffix, decimals, thousandsSep, duration])

  // Initial render — show 0 so there's no layout shift
  const initial = prefix + formatValue(0, decimals, thousandsSep) + suffix

  return (
    <span ref={ref} className={className}>
      {initial}
    </span>
  )
}
