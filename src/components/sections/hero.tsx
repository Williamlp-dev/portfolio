"use client"

import { motion } from "framer-motion"
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  MoveDown,
  MoveRight,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import ResumeDialog from "@/components/ui/resume-dialog"

export default function HeroSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20"
      id="hero"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            animate={{ opacity: 1 }}
            className="text-center"
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h1
              animate={{ y: 0, opacity: 1, scale: 1 }}
              className="glitch-text mb-4 font-bold text-4xl md:text-6xl lg:text-7xl"
              initial={{ y: 30, opacity: 0, scale: 0.9 }}
              transition={{
                delay: 0.4,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
              }}
            >
              William Lopes da Silva
            </motion.h1>

            <motion.p
              animate={{ y: 0, opacity: 1 }}
              className="mx-auto mb-8 max-w-2xl text-muted-foreground text-xl md:text-2xl"
              initial={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Desenvolvedor Full Stack & Entusiasta de UI/UX
            </motion.p>

            <motion.div
              animate={{ y: 0, opacity: 1 }}
              className="flex flex-wrap justify-center gap-4"
              initial={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.div
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link href="#projects">
                  <Button className="btn-press group px-6 py-6 text-base">
                    Ver Projetos
                    <MoveRight className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
                  </Button>
                </Link>
              </motion.div>

              <motion.div
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ResumeDialog>
                  <Button
                    className="btn-press group px-6 py-6 text-base"
                    variant="outline"
                  >
                    Ver Currículo
                    <MoveDown className="ml-2 h-5 w-5 transition-all duration-300 group-hover:translate-x-1" />
                  </Button>
                </ResumeDialog>
              </motion.div>
            </motion.div>

            <motion.div
              animate={{ opacity: 1 }}
              className="mt-12 flex items-center justify-center space-x-6"
              initial={{ opacity: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <Link href="https://github.com/Williamlp-dev" target="_blank">
                <motion.div
                  className="rounded-lg bg-muted p-2.5 transition-colors hover:bg-primary/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                </motion.div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/william-lopes-5537792a1/"
                target="_blank"
              >
                <motion.div
                  className="rounded-lg bg-muted p-2.5 transition-colors hover:bg-primary/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                </motion.div>
              </Link>

              <Link href="mailto:williamlp.dev@gmail.com">
                <motion.div
                  className="rounded-lg bg-muted p-2.5 transition-colors hover:bg-primary/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ opacity: 1 }}
        className="absolute bottom-8"
        initial={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
        >
          <ChevronDown className="h-8 w-8 text-primary/80" />
        </motion.div>
      </motion.div>
    </section>
  )
}
