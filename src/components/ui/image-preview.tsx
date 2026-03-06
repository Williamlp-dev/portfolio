"use client"

import Image from "next/image"
import type { JSX } from "react"

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
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
  return (
    <Dialog>
      <DialogTrigger
        className={cn("relative h-full w-full cursor-zoom-in", className)}
        render={<button aria-label={`Abrir preview de ${alt}`} type="button" />}
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
      </DialogTrigger>

      <DialogContent className="w-fit border-none bg-transparent p-0 shadow-none ring-0 sm:max-w-[90vw]">
        <Image
          alt={alt}
          className={cn(
            "max-h-[85dvh] w-auto rounded-lg object-contain",
            imageClassName
          )}
          height={height}
          quality={95}
          sizes="(max-width: 640px) 95vw, 90vw"
          src={src}
          width={width}
        />
      </DialogContent>
    </Dialog>
  )
}
