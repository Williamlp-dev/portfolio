"use client"

import { motion } from "framer-motion"
import {
  BookOpen,
  Code2,
  Heart,
  Palette,
  Rocket,
  Target,
  Users,
  Zap,
} from "lucide-react"

export default function AboutSection() {
  const skills = [
    {
      id: "dev",
      icon: Code2,
      title: "Desenvolvimento",
      description:
        "Full Stack com foco em aplicações rápidas, seguras e fáceis de manter",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      id: "ui-ux",
      icon: Palette,
      title: "UI/UX Design",
      description: "Interfaces simples, diretas e pensadas para o usuário real",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      id: "performance",
      icon: Rocket,
      title: "Performance",
      description: "Código enxuto, carregamento rápido e bom uso de recursos",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10",
    },
    {
      id: "collaboration",
      icon: Users,
      title: "Colaboração",
      description:
        "Comunicação clara, feedback constante e foco no objetivo do time",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
    },
  ]

  const stats = [
    {
      id: "experience",
      number: "2.5+",
      label: "Anos de Experiência",
      icon: Target,
    },
    {
      id: "projects",
      number: "3+",
      label: "Projetos Concluídos",
      icon: Rocket,
    },
    { id: "techs", number: "15+", label: "Tecnologias", icon: Code2 },
    {
      id: "learning",
      number: "∞",
      label: "Aprendizado constante",
      icon: BookOpen,
    },
  ]

  const passions = [
    {
      id: "refactor",
      icon: Heart,
      text: "Refatorar até que o código faça sentido",
    },
    {
      id: "micro-improvements",
      icon: Zap,
      text: "Micro melhorias que somam em velocidade",
    },
    {
      id: "communication",
      icon: Users,
      text: "Boas conversas constroem bons sistemas",
    },
  ]

  return (
    <section className="relative overflow-hidden py-20" id="about">
      <div className="container relative z-10 mx-auto px-4">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            className="mb-20 text-center"
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="mb-6 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text font-bold text-3xl text-transparent md:text-4xl lg:text-5xl">
              Desenvolvedor & Criador
            </h2>

            <p className="mx-auto mb-8 max-w-3xl text-lg text-muted-foreground leading-relaxed md:text-xl">
              Desenvolvedor Full-Stack com 2.5 anos de experiência em projetos
              freelancer. Especializado em TypeScript, Next.js e React, sou
              proativo e focado em entregar soluções de alta performance. Busco
              colaborar em equipe e desenvolver produtos inovadores.
            </p>

            <motion.div
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              {passions.map((passion, index) => (
                <motion.div
                  className="flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-3 py-2 transition-all duration-300 hover:border-primary/30"
                  initial={{ opacity: 0, scale: 0.8 }}
                  key={passion.id}
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <passion.icon className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground text-sm">
                    {passion.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="mb-20 grid grid-cols-2 gap-6 md:grid-cols-4"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                className="group relative rounded-2xl border border-border/50 bg-card/50 p-6 text-center transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                key={stat.id}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative z-10">
                  <motion.div
                    className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 transition-colors duration-300 group-hover:bg-primary/20"
                    initial={{ scale: 0 }}
                    transition={{
                      delay: 0.3 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                    whileInView={{ scale: 1 }}
                  >
                    <stat.icon className="h-6 w-6 text-primary" />
                  </motion.div>
                  <motion.div
                    className="mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text font-bold text-3xl text-transparent md:text-4xl"
                    initial={{ opacity: 0, y: 20 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileInView={{ opacity: 1, y: 0 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-muted-foreground text-sm transition-colors duration-300 group-hover:text-foreground/80 md:text-base">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
            initial={{ opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1 }}
          >
            {skills.map((skill, index) => (
              <motion.div
                className="group relative overflow-hidden rounded-2xl border bg-card/50 p-6 transition-all duration-300 hover:shadow-xl"
                initial={{ opacity: 0, y: 30 }}
                key={skill.id}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div
                  className={`absolute inset-0 ${skill.bgColor} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />
                <div className="relative z-10">
                  <motion.div
                    className="mb-4"
                    initial={{ scale: 0, rotate: -180 }}
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.6,
                      type: "spring",
                    }}
                    viewport={{ once: true }}
                    whileInView={{ scale: 1, rotate: 0 }}
                  >
                    <div
                      className={`h-12 w-12 rounded-xl ${skill.bgColor} flex items-center justify-center transition-transform duration-300 group-hover:scale-110`}
                    >
                      <skill.icon
                        className={`h-6 w-6 ${skill.color} transition-transform duration-300 group-hover:rotate-12`}
                      />
                    </div>
                  </motion.div>
                  <h3 className="mb-3 font-semibold text-lg transition-colors duration-300 group-hover:text-primary">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed transition-colors duration-300 group-hover:text-foreground/80">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-20 text-center"
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="relative mx-auto max-w-4xl">
              <motion.div
                className="-top-4 -left-4 absolute h-8 w-8 text-primary/30"
                initial={{ scale: 0 }}
                transition={{ delay: 0.8, duration: 0.6, type: "spring" }}
                viewport={{ once: true }}
                whileInView={{ scale: 1 }}
              >
                <svg
                  aria-hidden="true"
                  className="h-full w-full"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <title>Quote Icon</title>
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </motion.div>

              <motion.div
                className="relative rounded-2xl border border-border/50 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 p-8"
                initial={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, scale: 1 }}
              >
                <blockquote className="bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text font-medium text-transparent text-xl italic leading-relaxed md:text-2xl">
                  "Antes de escrever código, eu escuto. Soluções de verdade
                  nascem do problema certo."
                </blockquote>

                <motion.div
                  className="mt-6 flex items-center justify-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  transition={{ delay: 1.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, x: 0 }}
                >
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-primary/50" />
                  <span className="font-medium text-muted-foreground">
                    William Lopes da Silva
                  </span>
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-primary/50" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
