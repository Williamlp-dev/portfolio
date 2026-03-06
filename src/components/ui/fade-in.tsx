"use client"

import { motion, useReducedMotion } from "motion/react"
import type { JSX, ReactNode } from "react"
import { cn } from "@/lib/utils"

const EASE_OUT = [0.21, 0.47, 0.32, 0.98] as const

type FadeInProps = {
  children: ReactNode
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  fullWidth?: boolean
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  direction = "up",
  fullWidth = false,
  className,
}: FadeInProps): JSX.Element {
  const shouldReduceMotion = useReducedMotion()

  const directionOffset = shouldReduceMotion
    ? {}
    : {
        up: { y: 16 },
        down: { y: -16 },
        left: { x: 16 },
        right: { x: -16 },
        none: {},
      }[direction]

  return (
    <motion.div
      className={cn(fullWidth && "w-full", className)}
      initial={{ opacity: 0, ...directionOffset }}
      transition={{
        duration: shouldReduceMotion ? 0.01 : 0.5,
        delay: shouldReduceMotion ? 0 : delay,
        ease: EASE_OUT,
      }}
      viewport={{ once: true, margin: "-60px" }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
    >
      {children}
    </motion.div>
  )
}
