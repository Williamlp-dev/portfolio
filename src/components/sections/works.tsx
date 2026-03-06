import type { JSX } from "react"
import { ProjectCard } from "@/components/project-card"
import { FadeIn } from "@/components/ui/fade-in"
import { projects } from "@/lib/data"

export function WorksSection(): JSX.Element {
  return (
    <div className="flex flex-col gap-10">
      <FadeIn delay={0.05} direction="up">
        <h2 className="label-section mb-8" id="trabalhos-heading">
          Trabalhos Selecionados
        </h2>
      </FadeIn>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
        {projects.map((project, i) => (
          <FadeIn delay={0.1 + i * 0.08} direction="up" key={project.id}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </div>
  )
}
