import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"
import type { TimelineEvent } from "@/components/sections/timeline"

const getTypeColor = (type: string) => {
  switch (type) {
    case "work":
      return "text-blue-500"
    case "education":
      return "text-green-500"
    default:
      return "text-gray-500"
  }
}

const getTypeBackground = (type: string) => {
  switch (type) {
    case "work":
      return "bg-blue-500/10"
    case "education":
      return "bg-green-500/10"
    default:
      return "bg-gray-500/10"
  }
}

const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.8 },
  },
}

type TimelineItemProps = {
  item: TimelineEvent
  index: number
}

export function TimelineItem({ item, index }: TimelineItemProps) {
  const { icon: Icon } = item

  return (
    <motion.div
      className={`relative mb-12 flex items-center ${
        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
      }`}
      variants={itemVariants}
    >
      <div className="md:-translate-x-1/2 absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background md:left-1/2 md:transform">
        <Icon className={`h-4 w-4 ${getTypeColor(item.type)}`} />
      </div>

      <div
        className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}
      >
        <motion.div
          className="group relative rounded-lg border bg-card/50 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-card/70"
          whileHover={{ scale: 1.02 }}
        >
          <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 transition-opacity group-hover:opacity-100" />

          <div className="relative z-10">
            <div className="mb-4 flex items-start justify-between">
              <div className="flex-1">
                <h3 className="mb-2 font-semibold text-xl transition-colors group-hover:text-primary">
                  {item.title}
                </h3>
                <div className="mb-2 flex items-center gap-2 text-muted-foreground text-sm">
                  <Briefcase className="h-4 w-4" />
                  <span>{item.company}</span>
                </div>
                <div className="flex items-center gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
              <div className={`rounded-lg p-2 ${getTypeBackground(item.type)}`}>
                <Icon className={`h-5 w-5 ${getTypeColor(item.type)}`} />
              </div>
            </div>

            <p className="mb-4 text-muted-foreground leading-relaxed">
              {item.description}
            </p>

            <div className="mb-4">
              <h4 className="mb-2 font-medium text-sm">
                Principais conquistas:
              </h4>
              <ul className="space-y-1">
                {item.achievements.map((achievement, i) => (
                  <li
                    className="flex items-center gap-2 text-muted-foreground text-sm"
                    key={i}
                  >
                    <div className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {item.tech.map((tech, i) => (
                <span
                  className="rounded-md border border-primary/20 bg-primary/10 px-2 py-1 text-primary text-xs"
                  key={i}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
