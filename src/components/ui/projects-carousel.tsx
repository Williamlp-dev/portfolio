import Autoplay from "embla-carousel-autoplay"
import useEmblaCarousel from "embla-carousel-react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useCallback, useEffect, useState } from "react"
import type { Project } from "@/components/sections/project"
import { Button } from "@/components/ui/button"
import { ProjectCard } from "./project-card"

type ProjectsCarouselProps = {
  projects: Project[]
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start", skipSnaps: false, dragFree: true },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  )

  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
      setPrevBtnEnabled(emblaApi.canScrollPrev())
      setNextBtnEnabled(emblaApi.canScrollNext())
    }
    onSelect()
    emblaApi.on("select", onSelect).on("reInit", onSelect)
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect)
    }
  }, [emblaApi])

  return (
    <motion.div
      className="relative"
      initial={{ y: 20, opacity: 0 }}
      transition={{ delay: 0.6, duration: 0.8 }}
      viewport={{ once: true }}
      whileInView={{ y: 0, opacity: 1 }}
    >
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {projects.map((project, index) => (
            <ProjectCard index={index} key={project.id} project={project} />
          ))}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4">
        <Button
          className="rounded-full"
          disabled={!prevBtnEnabled}
          onClick={scrollPrev}
          size="icon"
          variant="outline"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              className={`h-2 w-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "scale-125 bg-primary"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              key={index}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        <Button
          className="rounded-full"
          disabled={!nextBtnEnabled}
          onClick={scrollNext}
          size="icon"
          variant="outline"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </motion.div>
  )
}
