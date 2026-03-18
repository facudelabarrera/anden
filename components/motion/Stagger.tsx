'use client'

import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { variants, VIEWPORT } from '@/lib/motion'

interface Props {
  children: ReactNode
  className?: string
}

/**
 * Stagger container. Wrap a grid or list with this, then wrap each item
 * with StaggerChild. Both components replace their equivalent plain divs
 * so no extra DOM layer is added.
 */
export function StaggerParent({ children, className }: Props) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={VIEWPORT}
      variants={variants.staggerParent}
    >
      {children}
    </motion.div>
  )
}

/** Direct child of StaggerParent. Replaces the card/item outer div. */
export function StaggerChild({ children, className }: Props) {
  return (
    <motion.div className={className} variants={variants.staggerChild}>
      {children}
    </motion.div>
  )
}
