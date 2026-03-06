"use client"

import { XIcon } from "lucide-react"
import { AnimatePresence, motion, type Transition } from "motion/react"
import Image from "next/image"
import { type JSX, useEffect, useId, useState } from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export type ImagePreviewProps = {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  imageClassName?: string
}

export function ImagePreview({
  src,
  alt,
  width,
  height,
  className,
  imageClassName,
}: ImagePreviewProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const id = useId()

  const handleOpen = () => setIsOpen(true)
  const handleClose = () => setIsOpen(false)

  useEffect(() => {
    if (!isOpen) {
      return
    }
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  const transitionConfig: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
    mass: 1,
  }

  const backdropTransitionConfig: Transition = {
    duration: 0.3,
    ease: [0.32, 0.72, 0, 1] as const,
  }

  const backdropExitTransition: Transition = {
    duration: 0.15,
    ease: "easeIn",
  }

  return (
    <>
      <button
        aria-label={`Abrir preview de ${alt}`}
        className={cn(
          "group relative h-full w-full cursor-zoom-in outline-none",
          className
        )}
        onClick={handleOpen}
        type="button"
      >
        <motion.div
          className="relative h-full w-full overflow-hidden will-change-transform"
          layoutId={`image-${id}`}
          transition={transitionConfig}
        >
          <Image
            alt={alt}
            className={cn(
              "relative z-0 h-full w-full object-cover",
              imageClassName
            )}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            src={src}
          />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <div
            aria-modal="true"
            className="fixed inset-0 z-50 flex flex-col p-3 sm:p-6"
            role="dialog"
          >
            <motion.div
              animate={{ opacity: 1, transition: backdropTransitionConfig }}
              className="absolute inset-0 cursor-zoom-out bg-black/95"
              exit={{ opacity: 0, transition: backdropExitTransition }}
              initial={{ opacity: 0 }}
              onClick={handleClose}
            />

            <div className="relative z-60 flex shrink-0 justify-end sm:absolute sm:top-6 sm:right-6">
              <Button
                aria-label="Fechar preview"
                className="btn-press rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                onClick={handleClose}
                render={
                  <motion.button
                    animate={{
                      opacity: 1,
                      scale: 1,
                      transition: {
                        delay: 0.1,
                        duration: 0.2,
                        ease: "easeOut",
                      },
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.8,
                      transition: { duration: 0.1, ease: "easeIn" },
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                  />
                }
                size="icon"
                variant="ghost"
              >
                <XIcon />
              </Button>
            </div>

            <button
              aria-label="Minimizar imagem"
              className="relative z-50 flex min-h-0 w-full flex-1 cursor-zoom-out items-center justify-center pt-4 outline-none sm:pt-0"
              onClick={handleClose}
              type="button"
            >
              <motion.div
                className="relative flex max-h-full min-h-0 min-w-0 max-w-full items-center justify-center will-change-transform"
                layoutId={`image-${id}`}
                transition={transitionConfig}
              >
                <Image
                  alt={alt}
                  className={cn(
                    "h-auto max-h-[calc(100dvh-6rem)] w-auto max-w-[calc(100vw-1.5rem)] rounded-md object-contain ring-1 ring-white/10 sm:max-h-[calc(100dvh-8rem)] sm:max-w-[calc(100vw-4rem)] sm:rounded-lg",
                    imageClassName
                  )}
                  height={height}
                  priority
                  quality={100}
                  sizes="100vw"
                  src={src}
                  width={width}
                />
              </motion.div>
            </button>
          </div>
        )}
      </AnimatePresence>
    </>
  )
}
