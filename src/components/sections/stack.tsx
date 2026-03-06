import type { JSX } from "react"
import { FadeIn } from "@/components/ui/fade-in"
import { getTechIcon, TechIcon } from "@/components/ui/tech-icon"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { type StackItem, stackData } from "@/lib/data"

type TechEntryProps = {
  tech: string
}

function TechEntry({ tech }: TechEntryProps): JSX.Element {
  const hasIcon = getTechIcon(tech) !== null

  if (hasIcon) {
    return (
      <TooltipProvider delay={0}>
        <Tooltip>
          <TooltipTrigger>
            <TechIcon size={20} tech={tech} />
          </TooltipTrigger>
          <TooltipContent sideOffset={4}>{tech}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    )
  }

  return (
    <span className="font-mono text-foreground-subtle text-xs leading-none tracking-wide">
      {tech}
    </span>
  )
}

type StackCategoryProps = {
  item: StackItem
}

function StackCategory({ item }: StackCategoryProps): JSX.Element {
  return (
    <div className="grid grid-cols-[100px_1fr] items-center gap-4 py-3 sm:grid-cols-[120px_1fr]">
      <span className="chip shrink-0">{item.label}</span>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2.5">
        {item.techs.map((tech) => (
          <TechEntry key={tech} tech={tech} />
        ))}
      </div>
    </div>
  )
}

export function StackSection(): JSX.Element {
  return (
    <FadeIn delay={0.05} direction="up">
      <h2 className="label-section mb-8" id="stack-heading">
        Stack
      </h2>
      <div className="flex flex-col divide-y divide-border-subtle">
        {stackData.map((item) => (
          <StackCategory item={item} key={item.label} />
        ))}
      </div>
    </FadeIn>
  )
}
