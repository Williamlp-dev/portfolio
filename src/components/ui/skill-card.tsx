"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import type React from "react"
import { useState } from "react"

export type Skill = {
  category: string
  icon: LucideIcon
  items: string[]
  color: string
  colorHex: string
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
}

export default function SkillCard({ skill }: { skill: Skill }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePosition({ x: e.clientX - rect.left, y: e.clientY - rect.top })
  }

  return (
    <motion.div className="group flex" variants={itemVariants}>
      <div
        className="relative w-full overflow-hidden rounded-lg border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-card/70"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <div
          className="-inset-px pointer-events-none absolute rounded-lg transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(300px at ${mousePosition.x}px ${mousePosition.y}px, ${skill.colorHex}30, transparent 80%)`,
          }}
        />

        <div className="relative z-10">
          <div className="mb-4 flex items-center gap-3">
            <div className={`rounded-lg bg-background/50 p-2 ${skill.color}`}>
              <skill.icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold text-xl">{skill.category}</h3>
          </div>

          <div className="space-y-2">
            {skill.items.map((item, itemIndex) => (
              <motion.div
                className="flex items-center gap-2"
                initial={{ x: -10, opacity: 0 }}
                key={item}
                transition={{
                  delay: 0.1 * itemIndex,
                  duration: 0.5,
                }}
                viewport={{ once: true }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                <span className="text-muted-foreground text-sm transition-colors duration-300 group-hover:text-foreground">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-primary/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>
    </motion.div>
  )
}
