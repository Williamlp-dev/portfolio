export type Project = {
  id: string
  title: string
  year: string
  description: string
  tags: string[]
  image: string
  siteUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    id: "kebrada",
    title: "Cardápio Digital — Kebrada Burguer",
    year: "2025",
    description:
      "Plataforma SaaS construída com Next.js e PostgreSQL, processando mais de R$ 350 mil em receita nos primeiros 3 meses e suportando 30 mil+ visitantes mensais. Inclui painel admin completo com gestão de estoque e promoções em tempo real. IA Generativa integrada ao ciclo de desenvolvimento, reduzindo entregas complexas de 2 semanas para 1–3 dias (+300% de eficiência).",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker"],
    image: "/kebrada-showcase.png",
    siteUrl: "https://kebradaburguer.com.br",
    githubUrl: "https://github.com/Williamlp-dev",
  },
  {
    id: "n1burger",
    title: "Cardápio Digital — N1 Burger",
    year: "2024",
    description:
      "Aplicação frontend de alto tráfego suportando 30 mil+ acessos mensais. Liderei toda a engenharia frontend com melhorias de UX focadas em otimização de taxa de conversão e retenção de usuários.",
    tags: ["Next.js", "React", "TypeScript"],
    image: "/n1-showcase.png",
    siteUrl: "https://n1burger.com.br",
    githubUrl: "https://github.com/Williamlp-dev",
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  logo: string
  description: string
  type: "work" | "education"
}

export const experiences: Experience[] = [
  {
    role: "Desenvolvedor Full-Stack",
    company: "Kebrada Burguer",
    period: "Mar — Jun 2025",
    logo: "/kebrada-logo.png",
    description:
      "Projetei e lancei do zero um SaaS completo de cardápio digital. Arquitetei infraestrutura escalável com Docker e entregue um painel admin completo com gestão de estoque e promoções em tempo real.",
    type: "work",
  },
  {
    role: "Desenvolvedor Front-End",
    company: "N1 Burger",
    period: "Dez 2024 — Mar 2025",
    logo: "/n1-logo.png",
    description:
      "Liderei a engenharia frontend de uma aplicação de alto tráfego, garantindo estabilidade a 30k+ visitas mensais e implementando melhorias de UX focadas em conversão e retenção.",
    type: "work",
  },
  {
    role: "Análise e Desenvolvimento de Sistemas",
    company: "Uninassau",
    period: "2022 — 2025",
    logo: "/uninassau-logo.png",
    description: "",
    type: "education",
  },
]

export type StackItem = {
  label: string
  techs: string[]
}

export const stackData: StackItem[] = [
  { label: "Linguagens", techs: ["TypeScript", "Python"] },
  { label: "Frontend", techs: ["Next.js", "React", "Flutter"] },
  {
    label: "Backend",
    techs: ["Node.js", "Nest.js", "Fastify"],
  },
  {
    label: "Dados",
    techs: ["PostgreSQL", "Prisma ORM", "Drizzle ORM"],
  },
  {
    label: "Cloud & DevOps",
    techs: ["Cloudflare R2", "Docker", "GitHub Actions", "Vercel"],
  },
  { label: "IA", techs: ["Claude"] },
  { label: "Testes", techs: ["Jest"] },
]
