"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export default function FooterSection() {
  return (
    <footer className="relative border-border border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <motion.div
        className="container relative z-10 mx-auto px-4 py-12"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1 }}
      >
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="flex flex-col items-center justify-between gap-6 md:flex-row"
            initial={{ y: 20, opacity: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
            whileInView={{ y: 0, opacity: 1 }}
          >
            <div className="flex flex-col items-center gap-2 md:items-start">
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} William Lopes. Todos os direitos
                reservados.
              </p>
              <p className="text-muted-foreground text-xs">
                Desenvolvido com Next.js e Tailwind CSS
              </p>
            </div>

            <motion.div
              className="flex items-center gap-4"
              initial={{ scale: 0.8, opacity: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ scale: 1, opacity: 1 }}
            >
              <Link
                href="https://github.com/Williamlp-dev"
                rel="noopener noreferrer"
                target="_blank"
              >
                <motion.div
                  className="rounded-lg bg-muted p-2 transition-colors hover:bg-primary/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                </motion.div>
              </Link>

              <Link
                href="https://www.linkedin.com/in/william-lopes-5537792a1/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <motion.div
                  className="rounded-lg bg-muted p-2 transition-colors hover:bg-primary/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                </motion.div>
              </Link>

              <Link href="mailto:williamlopes.dev@gmail.com">
                <motion.div
                  className="rounded-lg bg-muted p-2 transition-colors hover:bg-primary/10"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
  )
}
