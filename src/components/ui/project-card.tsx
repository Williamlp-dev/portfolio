import { motion } from "framer-motion"
import { Calendar, ExternalLink, Github } from "lucide-react"
import type { Project } from "@/components/sections/project"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

type ProjectCardProps = {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const { icon: Icon } = project

  return (
    <div className="embla__slide w-full flex-none px-4 md:w-1/2 lg:w-1/3">
      <motion.div
        className="group relative h-full overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-300 hover:shadow-md"
        initial={{ scale: 0.9, opacity: 0 }}
        transition={{ delay: 0.1 * index, duration: 0.6 }}
        viewport={{ once: true }}
        whileInView={{ scale: 1, opacity: 1 }}
      >
        {/* Status Badge */}
        <Badge
          className="absolute top-3 right-3 z-20"
          variant={project.status === "Concluído" ? "default" : "secondary"}
        >
          {project.status}
        </Badge>

        {/* Image Section */}
        <div className="relative h-64 w-full overflow-hidden">
          <img
            alt={project.title}
            className="h-full w-full object-cover"
            height={256}
            src={project.image}
            width={400}
          />
        </div>

        {/* Content Section */}
        <div className="space-y-4 p-6">
          {/* Header */}
          <div className="flex items-center gap-3">
            <div className={`rounded-lg p-2 ${project.color}`}>
              <Icon className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-lg leading-tight">
                {project.title}
              </h3>
              <div className="mt-1 flex items-center gap-1 text-muted-foreground text-sm">
                <Calendar className="h-3 w-3" />
                {project.year}
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="line-clamp-3 text-muted-foreground text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge
                className="px-2 py-1 text-xs"
                key={tag}
                variant="secondary"
              >
                {tag}
              </Badge>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2 pt-2">
            <Button asChild className="flex-1" size="sm">
              <a href={project.demo} rel="noopener noreferrer" target="_blank">
                <ExternalLink className="mr-2 h-4 w-4" />
                Demo
              </a>
            </Button>
            <Button
              asChild={!project.isPrivate}
              disabled={project.isPrivate}
              size="sm"
              variant="outline"
            >
              {project.isPrivate ? (
                <Github className="h-4 w-4" />
              ) : (
                <a
                  href={project.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Github className="h-4 w-4" />
                </a>
              )}
            </Button>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
