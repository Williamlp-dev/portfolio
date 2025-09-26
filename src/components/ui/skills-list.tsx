"use client"

import { motion } from "framer-motion"
import { Database, GitBranch, Monitor, Server, Smartphone } from "lucide-react"
import SkillCard from "@/components/ui/skill-card"

const skills = [
  {
    category: "Frontend",
    icon: Monitor,
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS"],
    color: "text-blue-500",
    colorHex: "#3b82f6",
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Node.js", "Python"],
    color: "text-green-500",
    colorHex: "#22c55e",
  },
  {
    category: "Database",
    icon: Database,
    items: ["PostgreSQL", "SQL", "Drizzle", "Prisma"],
    color: "text-purple-500",
    colorHex: "#8b5cf6",
  },
  {
    category: "Mobile",
    icon: Smartphone,
    items: ["React Native"],
    color: "text-orange-500",
    colorHex: "#f97316",
  },
  {
    category: "DevOps",
    icon: GitBranch,
    items: ["Git", "Docker", "Vercel"],
    color: "text-cyan-500",
    colorHex: "#06b6d4",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export default function SkillsList() {
  return (
    <motion.div
      className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
      initial="hidden"
      variants={containerVariants}
      viewport={{ once: true }}
      whileInView="visible"
    >
      {skills.map((skill) => (
        <SkillCard key={skill.category} skill={skill} />
      ))}
    </motion.div>
  )
}
