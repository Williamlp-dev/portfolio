import Image from "next/image"
import type { JSX } from "react"
import { FadeIn } from "@/components/ui/fade-in"
import { type Experience, experiences } from "@/lib/data"

type ExperienceItemProps = {
  experience: Experience
}

function ExperienceItem({ experience }: ExperienceItemProps): JSX.Element {
  const { role, company, period, logo, description } = experience

  return (
    <div className="-mx-4 flex flex-col gap-1.5 rounded-lg px-4 py-3 transition-colors duration-(--duration-base) ease-out">
      <div className="grid grid-cols-1 items-baseline gap-1 md:grid-cols-[1fr_auto]">
        <h3 className="font-medium text-base text-foreground">{role}</h3>
        <span className="font-mono text-foreground-subtle text-xs">
          {period}
        </span>
      </div>
      <div className="flex items-center gap-2.5">
        {logo ? (
          <div className="flex h-5 w-5 shrink-0 items-center justify-center overflow-hidden rounded-sm bg-surface-raised">
            <Image
              alt={company}
              className="h-full w-full object-contain"
              height={20}
              src={logo}
              width={20}
            />
          </div>
        ) : null}
        <span className="font-medium text-foreground-muted text-sm">
          {company}
        </span>
      </div>
      {description ? (
        <p className="mt-1.5 max-w-lg text-foreground-muted text-sm leading-relaxed">
          {description}
        </p>
      ) : null}
    </div>
  )
}

export function ExperienceSection(): JSX.Element {
  return (
    <FadeIn delay={0.05} direction="up">
      <h2 className="label-section mb-8" id="experiencia-heading">
        Experiência
      </h2>
      <div className="flex flex-col gap-10">
        {experiences.map((experience) => (
          <ExperienceItem experience={experience} key={experience.role} />
        ))}
      </div>
    </FadeIn>
  )
}
