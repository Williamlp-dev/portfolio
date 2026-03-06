"use client"

import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import type { JSX } from "react"
import { Button } from "@/components/ui/button"

const EASE_OUT = [0.21, 0.47, 0.32, 0.98] as const

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: EASE_OUT },
  },
}

export function HeroSection(): JSX.Element {
  return (
    <motion.div
      animate="show"
      className="flex flex-col gap-8"
      initial="hidden"
      variants={container}
    >
      <motion.h1
        className="font-medium text-4xl text-foreground leading-tight tracking-tight md:text-[3.25rem]"
        id="hero-heading"
        variants={item}
      >
        Engenheiro Full-Stack.
        <br />
        <span className="text-foreground-muted">
          Construindo produtos que vão
        </span>
        <br />
        do commit ao faturamento.
      </motion.h1>

      <motion.p
        className="max-w-md text-base text-foreground-muted leading-relaxed"
        variants={item}
      >
        2,5+ anos desenvolvendo aplicações web e mobile de alta performance.
        TypeScript, React, Next.js e sistemas backend escaláveis são minhas
        ferramentas diárias — da arquitetura de APIs à infraestrutura em nuvem.
      </motion.p>

      <motion.div className="flex items-center gap-5 pt-2" variants={item}>
        <Button
          className="btn-press bg-foreground text-background"
          render={
            <a
              aria-label="Ver Currículo de William Lopes"
              href="/Curr%C3%ADculo%20-%20William%20Lopes%20Da%20Silva.pdf"
              rel="noopener noreferrer"
              target="_blank"
            />
          }
          size="lg"
        >
          Ver Currículo <ArrowUpRight className="h-4 w-4" />
        </Button>
        <Button
          className="font-mono"
          render={
            <a
              aria-label="Visitar perfil GitHub de Williamlp-dev"
              href="https://github.com/Williamlp-dev"
              rel="noopener noreferrer"
              target="_blank"
            />
          }
          variant="link"
        >
          github.com/Williamlp-dev
        </Button>
      </motion.div>
    </motion.div>
  )
}
