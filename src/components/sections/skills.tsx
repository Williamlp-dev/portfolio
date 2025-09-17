"use client"

import { motion } from "framer-motion"
import SkillsList from "@/components/ui/skills-list"

export default function SkillSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20"
      id="skills"
    >
      <div className="container relative z-10 mx-auto px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            <motion.div
              className="mb-16 text-center"
              initial={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <motion.h2
                className="glitch-text mb-4 font-bold text-3xl md:text-4xl lg:text-5xl"
                initial={{ scale: 0.9, opacity: 0 }}
                transition={{
                  delay: 0.3,
                  duration: 0.6,
                  type: "spring",
                  stiffness: 100,
                }}
                viewport={{ once: true }}
                whileInView={{ scale: 1, opacity: 1 }}
              >
                Skills & Tecnologias
              </motion.h2>
              <motion.p
                className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl"
                initial={{ y: 10, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                Ferramentas e tecnologias que domino para criar experiências
                digitais incríveis
              </motion.p>
            </motion.div>

            <SkillsList />

            <motion.div
              className="mt-16 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ delay: 0.8, duration: 1 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, scale: 1 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
