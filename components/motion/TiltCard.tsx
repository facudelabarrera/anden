'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  /** Tilt intensity in degrees (default: 8) */
  intensity?: number
}

/**
 * Wraps children in a 3D perspective-tilt card.
 * On hover: tilts toward cursor position + scales up slightly.
 * Springs back smoothly on mouse leave.
 * Safe to use inside StaggerChild (no transform conflict — FM handles both).
 */
export function TiltCard({ children, className, intensity = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  const rawX = useMotionValue(0)
  const rawY = useMotionValue(0)

  const rotateX = useSpring(
    useTransform(rawY, [-0.5, 0.5], [intensity, -intensity]),
    { stiffness: 120, damping: 20, mass: 0.6 },
  )
  const rotateY = useSpring(
    useTransform(rawX, [-0.5, 0.5], [-intensity, intensity]),
    { stiffness: 120, damping: 20, mass: 0.6 },
  )
  const scale = useSpring(1, { stiffness: 180, damping: 22, mass: 0.5 })

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    rawX.set((e.clientX - rect.left) / rect.width - 0.5)
    rawY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function handleMouseEnter() {
    scale.set(1.03)
  }

  function handleMouseLeave() {
    rawX.set(0)
    rawY.set(0)
    scale.set(1)
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ rotateX, rotateY, scale, transformPerspective: 800 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  )
}
