// src/components/timeline/index.tsx

"use client"

import { motion } from "framer-motion"
import { Briefcase, Code, GraduationCap, type LucideIcon } from "lucide-react"
import { TimelineItem } from "@/components/ui/timeline-item"

// 1. Definir e exportar o tipo para ser usado pelo componente filho
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

// 2. Manter os dados aqui
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
    title: "Desenvolvedor Mobile Líder - Projeto EcoPoints",
    company: "Uninassau (Projeto Acadêmico)",
    location: "Paulista - PE",
    period: "2024",
    description:
      "Liderança no desenvolvimento de app mobile com React Native e Expo para projeto da ODS (Vida na Água).",
    achievements: [
      "Desenvolvimento completo do aplicativo mobile.",
      "Coordenação técnica em equipe multidisciplinar.",
    ],
    tech: ["React Native", "Expo", "Tailwind CSS", "PostgreSQL", "Github"],
  },
  {
    type: "education",
    icon: GraduationCap,
    title: "Conclusão da Graduação em ADS",
    company: "Uninassau",
    location: "Paulista - PE",
    period: "Jun 2025",
    description:
      "Projeto final com site completo e CRUD de usuários, utilizando tecnologias modernas de mercado.",
    achievements: [
      "Desenvolvimento full stack com Next.js e TypeScript.",
      "Entrega de projeto funcional e escalável.",
    ],
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Github"],
  },
  {
    type: "work",
    icon: Briefcase,
    title: "Desenvolvedor Full Stack Freelancer",
    company: "Projetos Autônomos",
    location: "Remoto",
    period: "2025 - Presente",
    description:
      "Criação e manutenção de sistemas web focados em cardápios digitais, transformando projetos em soluções SaaS escaláveis.",
    achievements: [
      "Desenvolvimento de dois sistemas de cardápio digital (N1 Burger e Kebrada Burguer).",
      "Painéis administrativos para gestão completa de produtos e promoções.",
      "Atuação full stack, do front ao back-end.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "React",
      "Docker",
      "Tailwind CSS",
      "Github",
    ],
  },
]

// Animação para o container
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
            {/* Cabeçalho da seção */}
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

            {/* Corpo da Timeline */}
            <motion.div
              className="relative mx-auto max-w-4xl"
              initial="hidden"
              variants={containerVariants}
              viewport={{ once: true }}
              whileInView="visible"
            >
              {/* Linha vertical da timeline */}
              <div className="md:-translate-x-1/2 absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-primary/20 via-primary/50 to-primary/20 md:left-1/2 md:transform" />

              {/* 3. Mapeamento para o novo componente */}
              {timelineData.map((item, index) => (
                <TimelineItem index={index} item={item} key={index} />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
