'use client'

import { MotionConfig } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * App-level motion configuration.
 * reducedMotion="user" makes ALL motion components respect
 * the user's prefers-reduced-motion OS setting automatically.
 */
export function Providers({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
