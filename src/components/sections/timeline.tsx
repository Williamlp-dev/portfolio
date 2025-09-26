"use client"

import { motion } from "framer-motion"
import { Briefcase, Code, GraduationCap, type LucideIcon } from "lucide-react"
import { TimelineItem } from "@/components/ui/timeline-item"

export type TimelineEvent = {
  type: "education" | "work"
  icon: LucideIcon
  title: string
  company: string
  location: string
  period: string
  description: string
  achievements: string[]
  tech: string[]
}

const timelineData: TimelineEvent[] = [
  {
    type: "education",
    icon: GraduationCap,
    title: "Início da Graduação em ADS",
    company: "Uninassau",
    location: "Paulista - PE",
    period: "Fev 2022",
    description:
      "Bases sólidas em lógica de programação, algoritmos e orientação a objetos com C++. Comecei a estudar desenvolvimento web de forma autônoma.",
    achievements: [
      "Fundamentos de programação estruturada e orientada a objetos.",
      "Primeiros projetos com HTML, CSS e JavaScript.",
    ],
    tech: ["C++", "Lógica de Programação", "POO", "HTML", "CSS", "JavaScript"],
  },
  {
    type: "education",
    icon: Code,
    title: "Desenvolvedor Backend - Projeto de Adoção",
    company: "Uninassau (Projeto Acadêmico)",
    location: "Paulista - PE",
    period: "2023",
    description:
      "Desenvolvimento de sistema web para adoção de cães usando Python e Django.",
    achievements: [
      "Implementação do padrão MVT com Django.",
      "Controle de versão com Git e colaboração via GitHub.",
    ],
    tech: ["Python", "Django", "HTML", "CSS", "Github"],
  },
  {
    type: "education",
    icon: Code,
    title: "Desenvolvedor Mobile Líder - Projeto EcoBank",
    company: "Uninassau (Projeto Acadêmico)",
    location: "Paulista - PE",
    period: "2024",
    description:
      "App de gamificação de reciclagem, desenvolvido como único dev em uma equipe de 12 pessoas e apresentado a empresários.",
    achievements: [
      "Desenvolvimento completo do aplicativo mobile.",
      "Apresentação do projeto para empresários locais.",
    ],
    tech: ["React Native", "Expo", "SQL", "Tailwind CSS"],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Projeto Final - CogniTec (Web)",
    company: "Uninassau",
    location: "Paulista - PE",
    period: "Jun 2025",
    description:
      "Site completo com CRUD de usuários para aprofundar conhecimentos no ecossistema full-stack moderno.",
    achievements: [
      "Desenvolvimento full stack com Next.js e TypeScript.",
      "Implementação de CRUD completo de usuários.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Desenvolvedor Full Stack Freelancer",
    company: "Projetos Autônomos",
    location: "Remoto",
    period: "Dez 2024 - Jun 2025",
    description:
      "Desenvolvimento de sistemas de cardápio digital para hamburguerias, com foco em alta performance e experiência do usuário.",
    achievements: [
      "N1 Burger: Principal responsável pelo front-end com UI/UX fluida.",
      "Kebrada Burguer: Desenvolvimento completo independente (front e back-end).",
      "Painéis administrativos com gerenciamento avançado de produtos e promoções.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "React", "Tailwind CSS"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

export default function TimelineSection() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20"
      id="timeline"
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
                Minha Jornada
              </motion.h2>
              <motion.p
                className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl"
                initial={{ y: 10, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                Uma linha do tempo da minha evolução profissional e acadêmica
              </motion.p>
            </motion.div>

            <motion.div
              className="relative mx-auto max-w-4xl"
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true }}
              whileInView="visible"
            >
              <div className="md:-translate-x-1/2 absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:left-1/2 md:transform" />

              {timelineData.map((item, index) => (
                <TimelineItem index={index} item={item} key={item.title} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
