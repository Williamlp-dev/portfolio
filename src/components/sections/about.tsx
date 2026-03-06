import type { JSX } from "react"
import { FadeIn } from "@/components/ui/fade-in"

export function AboutSection(): JSX.Element {
  return (
    <div className="flex flex-col gap-6">
      <FadeIn delay={0} direction="up">
        <h2 className="label-section mb-8" id="sobre-heading">
          Sobre
        </h2>
      </FadeIn>
      <div className="flex max-w-lg flex-col gap-4">
        <FadeIn delay={0.1} direction="up">
          <p className="text-base text-foreground-muted leading-relaxed">
            Sou um Engenheiro de Software Full-Stack focado em{" "}
            <span className="text-foreground">
              produtos digitais de alta performance
            </span>
            . Trabalho de ponta a ponta — da arquitetura de API às interfaces
            que convertem.
          </p>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <p className="text-base text-foreground-muted leading-relaxed">
            Tenho interesse particular na interseção entre engenharia robusta e
            design preciso. Acredito que código bem estruturado e produto bem
            desenhado não são opostos — são a mesma coisa.
          </p>
        </FadeIn>
        <FadeIn delay={0.3} direction="up">
          <p className="text-base text-foreground-muted leading-relaxed">
            Focado em construir com TypeScript, Next.js e infraestrutura em
            nuvem. Aberto a projetos de produto, consultoria técnica e
            colaborações estratégicas.
          </p>
        </FadeIn>
      </div>
    </div>
  )
}
