"use client"
import { motion } from "framer-motion"
import { type LucideIcon, ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ProjectsCarousel } from "@/components/ui/projects-carousel"

export type Project = {
  id: number
  title: string
  description: string
  image: string
  tags: string[]
  category: string
  icon: LucideIcon
  color: string
  year: string
  features: string[]
  github: string
  demo: string
  status: "Concluído" | "Em desenvolvimento"
  isPrivate: boolean
}

const projects: Project[] = [
  {
    id: 1,
    title: "N1 Burguer",
    description:
      "Plataforma completa de delivery para hamburgueria premium,integração com WhatsApp e painel administrativo avançado. Foco em conversão e experiência mobile.",
    image: "/n1burguer.png",
    tags: [
      "Next.js",
      "React 19",
      "Prisma",
      "Zustand",
      "Tailwind CSS",
      "NextAuth.js",
    ],
    category: "Full Stack",
    icon: ShoppingCart,
    color: "text-blue-500",
    year: "2024",
    features: ["WhatsApp API", "Real-time", "Analytics", "Mobile-First"],
    github: "",
    demo: "https://n1burguer.com.br",
    status: "Concluído",
    isPrivate: true,
  },
  {
    id: 2,
    title: "Kebrada Burguer",
    description:
      "Sistema de pedidos online otimizado para hamburguerias, com carrinho inteligente e sistema de cupons. Arquitetura escalável para alto volume de pedidos.",
    image: "/kebradaburguer.png",
    tags: [
      "Next.js",
      "React 19",
      "Prisma",
      "Zustand",
      "Tailwind CSS",
      "NextAuth.js",
    ],
    category: "Full Stack",
    icon: ShoppingCart,
    color: "text-blue-500",
    year: "2024",
    features: [
      "Cupons",
      "Carrinho Inteligente",
      "Escalabilidade",
      "Performance",
    ],
    github: "",
    demo: "https://kebradaburguer.com.br",
    status: "Concluído",
    isPrivate: true,
  },
]

const categories = [
  "Todos",
  "Full Stack",
  "Frontend",
  "Backend",
  "Mobile",
  "UI/UX",
]

export default function ProjectSection() {
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const [filteredProjects, setFilteredProjects] = useState(projects)

  useEffect(() => {
    if (selectedCategory === "Todos") {
      setFilteredProjects(projects)
    } else {
      setFilteredProjects(
        projects.filter((p) => p.category === selectedCategory)
      )
    }
  }, [selectedCategory])

  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-20"
      id="projects"
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
                Projetos
              </motion.h2>
              <motion.p
                className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl"
                initial={{ y: 10, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                whileInView={{ y: 0, opacity: 1 }}
              >
                Uma visão rápida do que tenho construído.
              </motion.p>
            </motion.div>

            <motion.div
              className="mb-12 flex flex-wrap justify-center gap-2"
              initial={{ y: 20, opacity: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              viewport={{ once: true }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              {categories.map((category, index) => (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  key={category}
                  transition={{
                    delay: 0.6 + index * 0.1,
                    duration: 0.5,
                    type: "spring",
                    stiffness: 200,
                  }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    className="transition-all duration-300"
                    onClick={() => setSelectedCategory(category)}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                  >
                    {category}
                  </Button>
                </motion.div>
              ))}
            </motion.div>

            <ProjectsCarousel projects={filteredProjects} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
