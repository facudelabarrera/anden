'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { EASE, DURATION, VIEWPORT } from '@/lib/motion'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Additional delay in seconds before animation starts */
  delay?: number
  duration?: number
  /** Y-axis translate distance (px) */
  y?: number
}

/**
 * Scroll-triggered fade-up reveal. Renders a motion.div wrapper.
 * Respects prefers-reduced-motion via MotionConfig in Providers.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  duration = DURATION.md,
  y = 24,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  )
}
