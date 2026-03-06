"use client"

import { X } from "lucide-react"
import Image from "next/image"
import {
  type CSSProperties,
  type JSX,
  type KeyboardEvent,
  type RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react"

import { cn } from "@/lib/utils"
import { Button } from "./button"

export type ImagePreviewProps = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
}

export type Rect = {
  top: number
  left: number
  width: number
  height: number
}

export type ExpandedDimensions = {
  translateX: number
  translateY: number
  scale: number
}

export function computeScale(
  originWidth: number,
  originHeight: number,
  windowWidth: number,
  windowHeight: number
): number {
  const padding = windowWidth < 640 ? 16 : 48
  const scaleX = (windowWidth - padding * 2) / originWidth
  const scaleY = (windowHeight - padding * 2) / originHeight
  return Math.min(scaleX, scaleY)
}

export function computeExpandedDimensions(
  origin: Rect,
  windowWidth: number,
  windowHeight: number
): ExpandedDimensions {
  const scale = computeScale(
    origin.width,
    origin.height,
    windowWidth,
    windowHeight
  )
  const expandedW = origin.width * scale
  const expandedH = origin.height * scale
  const translateX = (windowWidth - expandedW) / 2 - origin.left
  const translateY = (windowHeight - expandedH) / 2 - origin.top

  return { translateX, translateY, scale }
}

export function buildCloneStyles(
  originRect: Rect | null,
  isVisible: boolean,
  windowWidth: number,
  windowHeight: number
): CSSProperties {
  if (!originRect) {
    return {}
  }

  const baseStyles: CSSProperties = {
    position: "fixed",
    top: originRect.top,
    left: originRect.left,
    width: originRect.width,
    height: originRect.height,
    transformOrigin: "top left",
    zIndex: 10,
  }

  if (isVisible) {
    const { translateX, translateY, scale } = computeExpandedDimensions(
      originRect,
      windowWidth,
      windowHeight
    )

    return {
      ...baseStyles,
      transform: `translate(${translateX}px, ${translateY}px) scale(${scale})`,
    }
  }

  return {
    ...baseStyles,
    transform: "translate(0,0) scale(1)",
  }
}

export type UseImagePreviewReturn = {
  isOpen: boolean
  isVisible: boolean
  isClosing: boolean
  originRect: Rect | null
  imgRef: RefObject<HTMLImageElement | null>
  cloneRef: RefObject<HTMLImageElement | null>
  handleOpen: () => void
  handleClose: () => void
  getCloneStyles: () => CSSProperties
}

export function useImagePreview(): UseImagePreviewReturn {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isClosing, setIsClosing] = useState(false)
  const [originRect, setOriginRect] = useState<Rect | null>(null)

  const imgRef = useRef<HTMLImageElement>(null)
  const cloneRef = useRef<HTMLImageElement>(null)

  const handleCloseRef = useRef<() => void>(() => {
    // placeholder until handleClose is assigned via useEffect
  })

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleCloseRef.current()
      }
    }
    const onResize = () => handleCloseRef.current()

    window.addEventListener("keydown", onKeyDown as unknown as EventListener, {
      passive: true,
    })
    window.addEventListener("resize", onResize, { passive: true })

    return () => {
      window.removeEventListener(
        "keydown",
        onKeyDown as unknown as EventListener
      )
      window.removeEventListener("resize", onResize)
    }
  }, [isOpen])

  const handleOpen = useCallback(() => {
    if (!imgRef.current) {
      return
    }

    const rect = imgRef.current.getBoundingClientRect()
    setOriginRect({
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height,
    })

    document.body.style.overflow = "hidden"

    setIsOpen(true)

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setIsVisible(true)
      })
    })
  }, [])

  const handleClose = useCallback(() => {
    setIsClosing((prev) => {
      if (prev) {
        return prev
      }

      setIsVisible(false)

      const cleanup = () => {
        document.body.style.overflow = ""
        setIsOpen(false)
        setOriginRect(null)
        setIsClosing(false)
      }

      const onEnd = (e: TransitionEvent) => {
        if (e.propertyName !== "transform") {
          return
        }
        cloneRef.current?.removeEventListener("transitionend", onEnd)
        cleanup()
      }

      cloneRef.current?.addEventListener("transitionend", onEnd)
      setTimeout(cleanup, 420)

      return true
    })
  }, [])

  useEffect(() => {
    handleCloseRef.current = handleClose
  }, [handleClose])

  const getCloneStyles = useCallback((): CSSProperties => {
    return buildCloneStyles(
      originRect,
      isVisible,
      window.innerWidth,
      window.innerHeight
    )
  }, [originRect, isVisible])

  return {
    isOpen,
    isVisible,
    isClosing,
    originRect,
    imgRef,
    cloneRef,
    handleOpen,
    handleClose,
    getCloneStyles,
  }
}

export function ImagePreview({
  src,
  alt,
  className,
  imageClassName,
}: ImagePreviewProps): JSX.Element {
  const {
    isOpen,
    isVisible,
    isClosing,
    originRect,
    imgRef,
    cloneRef,
    handleOpen,
    handleClose,
    getCloneStyles,
  } = useImagePreview()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        handleClose()
      }
    },
    [handleClose]
  )

  const handleOpenKeyDown = useCallback(
    (e: KeyboardEvent<HTMLElement>) => {
      if (e.key === "Enter" || e.key === " ") {
        handleOpen()
      }
    },
    [handleOpen]
  )

  return (
    <>
      <button
        aria-label={`Abrir preview de ${alt}`}
        className={cn("relative h-full w-full cursor-zoom-in", className)}
        onClick={handleOpen}
        onKeyDown={handleOpenKeyDown}
        type="button"
      >
        <Image
          alt={alt}
          className={cn(
            "relative z-0 h-full w-full object-cover",
            isOpen || isClosing ? "opacity-0" : "",
            imageClassName
          )}
          fill
          ref={imgRef}
          sizes="(max-width: 768px) 100vw, 50vw"
          src={src}
        />
      </button>

      {isOpen && originRect ? (
        <div className="fixed inset-0 z-50">
          <button
            aria-label="Fechar preview"
            className={cn(
              "absolute inset-0 -z-10 cursor-zoom-out bg-black/80 backdrop-blur-md transition-opacity duration-300 ease-[cubic-bezier(0.32,0.72,0,1)]",
              isVisible ? "opacity-100" : "opacity-0"
            )}
            onClick={handleClose}
            onKeyDown={handleKeyDown}
            type="button"
          />

          <Button
            className={cn(
              "btn-press absolute top-4 right-4 z-20 rounded-full border-white/10 bg-black/40 text-white backdrop-blur-xl transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-black/60 sm:top-6 sm:right-6",
              isVisible ? "scale-100 opacity-100" : "scale-75 opacity-0"
            )}
            onClick={handleClose}
            size="icon"
            type="button"
            variant="outline"
          >
            <X className="scale-125" />
            <span className="sr-only">Fechar preview</span>
          </Button>

          <button
            className="cursor-zoom-out"
            onClick={handleClose}
            onKeyDown={handleKeyDown}
            style={getCloneStyles()}
            type="button"
          >
            <Image
              alt={alt}
              className={cn(
                "object-cover transition-[transform] duration-350 ease-[cubic-bezier(0.32,0.72,0,1)] will-change-transform",
                imageClassName
              )}
              fill
              ref={cloneRef}
              sizes="(max-width: 768px) 100vw, 90vw"
              src={src}
            />
          </button>
        </div>
      ) : null}
    </>
  )
}
