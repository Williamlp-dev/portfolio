"use client"

import { Download, FileText } from "lucide-react"
import type React from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

type ResumeDialogProps = {
  children: React.ReactNode
}

const ResumeDialog: React.FC<ResumeDialogProps> = ({ children }) => {
  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/WIlliam Lopes.pdf"
    link.download = "William_Lopes_Da_Silva_Curriculo.pdf"
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePrint = () => {
    window.open("/WIlliam Lopes.pdf", "_blank")
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="resume-scrollbar max-h-[95vh] max-w-6xl overflow-y-auto p-0">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="flex items-center gap-2 font-bold text-xl">
            <FileText className="h-5 w-5" />
            Currículo - William Lopes da Silva
          </DialogTitle>
        </DialogHeader>

        <div className="px-2 pb-4">
          <div className="bg-background font-sans text-foreground">
            <div className="mb-8 p-2">
              <div className="text-left">
                <h1 className="mb-2 font-bold text-2xl uppercase tracking-wide md:text-2xl lg:text-4xl">
                  WILLIAM LOPES DA SILVA
                </h1>
                <p className="mb-4 font-medium text-base text-muted-foreground md:text-lg">
                  Tecnologia da Informação
                </p>
                <div className="space-y-1 text-sm md:text-base">
                  <p className="font-medium">(81) 98504-4180</p>
                  <p className="font-medium">williamlp.dev@gmail.com</p>
                  <p className="font-medium">Paulista - PE</p>
                  <p className="font-medium">
                    <a
                      className="text-blue-600 transition-colors hover:text-blue-800 hover:underline"
                      href="https://github.com/Williamlp-dev"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      github.com/Williamlp-dev
                    </a>
                  </p>
                  <p className="font-medium">
                    <a
                      className="text-blue-600 transition-colors hover:text-blue-800 hover:underline"
                      href="https://linkedin.com/in/william-lopes-5537792a1"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      linkedin.com/in/william-lopes-5537792a1
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <section className="mb-8 p-2">
              <div className="mb-4 border-foreground border-b-2">
                <h2 className="font-bold text-lg uppercase tracking-wide">
                  RESUMO PROFISSIONAL
                </h2>
              </div>
              <div>
                <p className="text-foreground text-sm leading-relaxed md:text-base">
                  Desenvolvedor Full-Stack recém-formado em Análise e
                  Desenvolvimento de Sistemas, com 2.5 anos de experiência em
                  projetos freelancer. Especializado em{" "}
                  <span className="font-semibold">
                    TypeScript, Next.js e React
                  </span>
                  , sou proativo e focado em entregar soluções de alta
                  performance. Busco minha primeira oportunidade para colaborar
                  em equipe e desenvolver produtos inovadores.
                </p>
              </div>
            </section>

            <section className="mb-8 p-2">
              <div className="mb-4 border-foreground border-b-2">
                <h2 className="font-bold text-lg uppercase tracking-wide md:text-xl">
                  FORMAÇÃO ACADÊMICA
                </h2>
              </div>
              <div className="text-sm md:text-base">
                <p className="font-medium">
                  Tecnólogo em Análise e Desenvolvimento de Sistemas | Uninassau
                </p>
                <p className="mt-1 text-muted-foreground">
                  (Fev/2022 - Jun/2025)
                </p>
              </div>
            </section>

            <section className="mb-8 p-2">
              <div className="mb-4 border-foreground border-b-2">
                <h2 className="font-bold text-lg uppercase tracking-wide">
                  EXPERIÊNCIA (FREELANCE)
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <div className="mb-2 flex flex-col md:flex-row md:items-start md:justify-between">
                    <h3 className="font-semibold text-sm md:text-base">
                      Desenvolvedor Full-Stack | Cardápio Digital Kebrada
                      Burguer
                    </h3>
                    <span className="font-medium text-muted-foreground text-xs md:text-sm">
                      Mar/2025 - Jun/2025
                    </span>
                  </div>
                  <p className="mb-3 text-foreground text-xs leading-relaxed md:text-sm">
                    Desenvolvi de forma independente um sistema de cardápio
                    digital completo (front e back-end) em 3 meses, incluindo um
                    painel administrativo com gerenciamento avançado de
                    produtos, promoções, entregas e estoque, com foco em alta
                    performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Next.js
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      TypeScript
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      PostgreSQL
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Tailwind CSS
                    </span>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex flex-col md:flex-row md:items-start md:justify-between">
                    <h3 className="font-semibold text-sm md:text-base">
                      Desenvolvedor Front-End | Cardápio Digital N1 Burger
                    </h3>
                    <span className="font-medium text-muted-foreground text-xs md:text-sm">
                      Dez/2024 - Mar/2025
                    </span>
                  </div>
                  <p className="mb-3 text-foreground text-xs leading-relaxed md:text-sm">
                    Principal responsável pelo front-end na entrega de um
                    cardápio digital em 3 meses, garantindo uma UI/UX fluida e
                    perfeitamente integrada ao back-end.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Next.js
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      TypeScript
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      React
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-8 p-2">
              <div className="mb-4 border-foreground border-b-2">
                <h2 className="font-bold text-lg uppercase tracking-wide">
                  PROJETOS ACADÊMICOS
                </h2>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="mb-1 font-semibold text-sm md:text-base">
                    CogniTec (Web)
                  </h3>
                  <p className="mb-2 text-foreground text-xs leading-relaxed md:text-sm">
                    Site completo com CRUD de usuários para aprofundar
                    conhecimentos no ecossistema full-stack moderno.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Next.js
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      TypeScript
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      PostgreSQL
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Docker
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="mb-1 font-semibold text-sm md:text-base">
                    EcoBank (Mobile)
                  </h3>
                  <p className="mb-2 text-foreground text-xs leading-relaxed md:text-sm">
                    App de gamificação de reciclagem, desenvolvido como único
                    dev em uma equipe de 12 pessoas e apresentado a empresários.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      React Native
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Expo
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      SQL
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Tailwind CSS
                    </span>
                  </div>
                </div>
              </div>
            </section>

            <section className="mb-1 p-2">
              <div className="mb-4 border-foreground border-b-2">
                <h2 className="font-bold text-lg uppercase tracking-wide">
                  HABILIDADES TÉCNICAS
                </h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="mb-3 font-semibold text-sm md:text-base">
                    Linguagens de programação
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      TypeScript
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      JavaScript
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Python
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-sm md:text-base">
                    Desenvolvimento Web e Mobile
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      React
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Next.js
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      React Native
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Node.js
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Tailwind CSS
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="mb-3 font-semibold text-sm md:text-base">
                    Banco de Dados
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      PostgreSQL
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      SQL
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Drizzle
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Prisma
                    </span>
                  </div>
                </div>

                <div className="mb-3">
                  <h3 className="mb-3 font-semibold text-sm md:text-base">
                    Ferramentas de Desenvolvimento
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Docker
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Git
                    </span>
                    <span className="rounded bg-muted px-3 py-1 font-medium text-xs">
                      Vercel
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <div className="flex gap-3 border-t pt-6">
            <Button
              className="flex flex-1 items-center justify-center gap-2 bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
              onClick={handleDownload}
            >
              <Download className="h-4 w-4" />
              Baixar Currículo
            </Button>
            <Button
              className="flex flex-1 items-center justify-center gap-2 px-4 py-2"
              onClick={handlePrint}
              variant="outline"
            >
              <FileText className="h-4 w-4" />
              Imprimir
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default ResumeDialog
