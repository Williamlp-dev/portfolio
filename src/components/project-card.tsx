import { Github, Globe } from "lucide-react"
import type { JSX } from "react"
import { Button } from "@/components/ui/button"
import { ImagePreview } from "@/components/ui/image-preview"
import { getTechIcon, TechIcon } from "@/components/ui/tech-icon"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import type { Project } from "@/lib/data"

type ProjectLinksProps = {
  project: Project
}

function ProjectLinks({ project }: ProjectLinksProps): JSX.Element | null {
  if (!(project.siteUrl || project.githubUrl)) {
    return null
  }

  return (
    <div className="flex shrink-0 items-center gap-2.5 pt-0.5">
      {project.siteUrl && (
        <Button
          aria-label={`Visitar site de ${project.title}`}
          render={
            <a
              aria-label={`Visitar site de ${project.title}`}
              href={project.siteUrl}
              rel="noopener noreferrer"
              target="_blank"
            />
          }
          size="icon"
          variant="link"
        >
          <Globe className="h-[18px] w-[18px]" />
        </Button>
      )}
      {project.githubUrl && (
        <Button
          aria-label={`Ver código de ${project.title} no GitHub`}
          render={
            <a
              aria-label={`Ver código de ${project.title} no GitHub`}
              href={project.githubUrl}
              rel="noopener noreferrer"
              target="_blank"
            />
          }
          size="icon"
          variant="link"
        >
          <Github className="h-[18px] w-[18px]" />
        </Button>
      )}
    </div>
  )
}

type ProjectTagsProps = {
  tags: string[]
}

function ProjectTags({ tags }: ProjectTagsProps): JSX.Element {
  return (
    <div className="flex flex-wrap items-center gap-3 pt-1.5">
      {tags.map((tag) => {
        const hasIcon = getTechIcon(tag) !== null
        if (hasIcon) {
          return (
            <TooltipProvider delay={0} key={tag}>
              <Tooltip>
                <TooltipTrigger>
                  <TechIcon size={18} tech={tag} />
                </TooltipTrigger>
                <TooltipContent sideOffset={4}>{tag}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        }
        return (
          <span
            className="font-mono text-foreground-subtle text-xs tracking-wide"
            key={tag}
          >
            {tag}
          </span>
        )
      })}
    </div>
  )
}

type ProjectCardProps = {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  return (
    <article className="group flex flex-col gap-4">
      <div className="relative aspect-16/10 w-full">
        <ImagePreview
          alt={`Preview do projeto ${project.title}`}
          className="h-full w-full"
          height={project.imageHeight}
          imageClassName="object-top rounded-lg bg-surface-raised"
          src={project.image}
          width={project.imageWidth}
        />
      </div>

      <div className="flex flex-col gap-2 pt-1">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 flex-col gap-0.5">
            <h3 className="truncate font-medium text-base text-foreground leading-snug">
              {project.title}
            </h3>
            <span className="font-mono text-foreground-subtle text-xs uppercase tracking-wide">
              {project.year}
            </span>
          </div>

          <ProjectLinks project={project} />
        </div>

        <p className="line-clamp-3 text-foreground-muted text-sm leading-relaxed">
          {project.description}
        </p>

        <ProjectTags tags={project.tags} />
      </div>
    </article>
  )
}
