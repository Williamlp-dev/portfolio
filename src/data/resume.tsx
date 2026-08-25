import { HomeIcon } from "lucide-react";
import { Icons } from "@/components/ui/icons";

export const DATA = {
  name: "William Lopes da Silva",
  initials: "WL",
  url: "https://www.williamlopes.dev.br/",
  location: "Pernambuco, BR",
  locationLink: "https://www.google.com/maps/place/Pernambuco",
  description:
    "Full-Stack por escolha, não por conveniência. Gosto do lado inteiro do problema da arquitetura à interface que o usuário realmente vai usar.",
  summary:
    "Minha jornada na tecnologia é guiada pela vontade de resolver problemas reais por meio de código limpo e arquiteturas eficientes. Especialista no ecossistema TypeScript, tenho profundo interesse na interseção entre uma engenharia robusta (backend escalável com Node.js/Next.js) e um design fluido.\\n\\nPara mim, código bem estruturado e um produto bem desenhado são a mesma coisa. Meu foco não é apenas fazer funcionar, mas criar aplicações que convertem e agregam valor direto ao negócio. Estou sempre aberto a colaborar em projetos desafiadores e oferecer consultoria estratégica.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: "/icons/react.svg" },
    { name: "Next.js", icon: "/icons/nextjs_icon_dark.svg" },
    { name: "Typescript", icon: "/icons/typescript.svg" },
    { name: "Node.js", icon: "/icons/nodejs.svg" },
    { name: "Python", icon: "/icons/python.svg" },
    { name: "Docker", icon: "/icons/docker.svg" },
    { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
    { name: "Drizzle ORM", icon: "/icons/drizzle-orm_light.svg" },
    { name: "Fastify", icon: "/icons/fastify.svg" },
    { name: "Prisma", icon: "/icons/prisma.svg" },
    { name: "Claude AI", icon: "/icons/claude-ai-icon.svg" },
    { name: "Cloudflare", icon: "/icons/cloudflare.svg" },
    { name: "Dart", icon: "/icons/dart.svg" },
    { name: "Flutter", icon: "/icons/flutter.svg" },
    { name: "GitHub", icon: "/icons/github_dark.svg" },
    { name: "Jest", icon: "/icons/jest.svg" },
    { name: "NestJS", icon: "/icons/nestjs.svg" },
    { name: "React Query", icon: "/icons/reactquery.svg" },
    { name: "React Router", icon: "/icons/reactrouter.svg" },
    { name: "Tailwind CSS", icon: "/icons/tailwind.svg" },
    { name: "Vercel", icon: "/icons/vercel_dark.svg" },
    { name: "Vitest", icon: "/icons/vitest.svg" },
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "contato@williamlopes.dev.br",
    tel: "+5581985044180",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Williamlp-dev",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/william-lopes-5537792a1",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "#",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "#",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Enviar E-mail",
        url: "mailto:williamlp.dev@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Kebrada Burguer",
      href: "",
      badges: [],
      location: "Remoto",
      title: "Desenvolvedor Full-Stack",
      logoUrl: "/logo/logo-kebrada.webp",
      logoBg: "#E53935",
      start: "Mar 2025",
      end: "Jun 2025",
      description:
        "Projetei e lancei do zero um SaaS completo de cardápio digital. Arquitetei infraestrutura escalável com Docker e entregue um painel admin completo com gestão de estoque e promoções em tempo real.",
    },
    {
      company: "N1 Burger",
      href: "#",
      badges: [],
      location: "Remoto",
      title: "Desenvolvedor Front-End",
      logoUrl: "/logo/logo-n1.webp",
      logoBg: "#FFAC00",
      start: "Dez 2024",
      end: "Mar 2025",
      description:
        "Liderei a engenharia frontend de uma aplicação de alto tráfego, garantindo estabilidade a 30k+ visitas mensais e implementando melhorias de UX focadas em conversão e retenção.",
    },
  ],
  education: [
    {
      school: "Uninassau",
      href: "#",
      degree: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      description:
        "Envolvimento em diversos projetos acadêmicos de desenvolvimento web utilizando Python e Django, desenvolvimento robótico e lógica de programação avançada. Atuei também na liderança de equipe por mais de 6 meses, focando em estruturação de projetos e condução de apresentações de forma limpa.",
      logoUrl: "/logo/logo-uninassau.webp",
      logoBg: "#FFFFFF",
      start: "2022",
      end: "2025",
    },
  ],
  projects: [
    {
      title: "Cardápio Digital — Kebrada Burguer",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Plataforma SaaS construída com Next.js e PostgreSQL, processando mais de R$ 350 mil em receita nos primeiros 3 meses e suportando 30 mil+ visitantes mensais. Inclui painel admin completo com gestão de estoque e promoções em tempo real. IA Generativa integrada ao ciclo de desenvolvimento, reduzindo entregas complexas de 2 semanas para 1–3 dias (+300% de eficiência).",
      technologies: ["Next.js", "Typescript", "PostgreSQL", "Docker"],
      links: [
        {
          type: "Website",
          href: "https://www.kebradaclub.com.br",
          icon: <Icons.globe className="size-3" />,
          private: false,
        },
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
          private: true,
        },
      ],
      image: "/logo/logo-kebrada.webp",
      imageBg: "#E53935",
      video: "",
    },
    {
      title: "Cardápio Digital — N1 Burger",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Aplicação frontend de alto tráfego suportando 30 mil+ acessos mensais. Liderei toda a engenharia frontend com melhorias de UX focadas em otimização de taxa de conversão e retenção de usuários.",
      technologies: ["Next.js", "React", "TypeScript"],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
          private: false,
        },
        {
          type: "GitHub",
          href: "#",
          icon: <Icons.github className="size-3" />,
          private: true,
        },
      ],
      image: "/logo/logo-n1.webp",
      imageBg: "#FFAC00",
      video: "",
    },
  ],
} as const;
