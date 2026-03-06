import Image from "next/image"
import type { JSX } from "react"
import { cn } from "@/lib/utils"

type IconSource = string | { light: string; dark: string }

const TECH_ICON_MAP: Record<string, IconSource> = {
  TypeScript: "/icons/typescript.svg",
  "Next.js": "/icons/nextjs_icon_dark.svg",
  React: "/icons/react.svg",
  "Tailwind CSS": "/icons/tailwind.svg",
  Flutter: "/icons/flutter.svg",
  Python: "/icons/python.svg",
  Dart: "/icons/dart.svg",
  "Nest.js": "/icons/nestjs.svg",
  "Node.js": "/icons/nodejs.svg",
  Fastify: {
    light: "/icons/fastify.svg",
    dark: "/icons/Fastify_dark.svg",
  },
  PostgreSQL: "/icons/postgresql.svg",
  MongoDB: "/icons/postgresql.svg",
  "Prisma ORM": {
    light: "/icons/prisma.svg",
    dark: "/icons/Prisma_dark.svg",
  },
  "Drizzle ORM": {
    light: "/icons/drizzle-orm_light.svg",
    dark: "/icons/Drizzle ORM_dark.svg",
  },
  Docker: "/icons/docker.svg",
  "Cloudflare R2": "/icons/cloudflare.svg",
  "GitHub Actions": {
    light: "/icons/github_light.svg",
    dark: "/icons/github_dark.svg",
  },
  Vercel: {
    light: "/icons/vercel.svg",
    dark: "/icons/vercel_dark.svg",
  },
  Jest: "/icons/jest.svg",
  Vitest: "/icons/vitest.svg",
  "React Query": "/icons/reactquery.svg",
  "React Router": "/icons/reactrouter.svg",
  Claude: "/icons/claude-ai-icon.svg",
}

type TechIconProps = {
  tech: string
  size?: number
  className?: string
}

export function getTechIcon(tech: string): IconSource | null {
  return TECH_ICON_MAP[tech] ?? null
}

export function TechIcon({
  tech,
  size = 16,
  className,
}: TechIconProps): JSX.Element | null {
  const src = getTechIcon(tech)
  if (!src) {
    return null
  }

  if (typeof src === "string") {
    return (
      <Image
        alt={tech}
        className={cn("shrink-0 transition-opacity duration-200", className)}
        height={size}
        src={src}
        width={size}
      />
    )
  }

  return (
    <>
      <Image
        alt={tech}
        className={cn(
          "in-[.dark]:hidden shrink-0 transition-opacity duration-200",
          className
        )}
        height={size}
        src={src.light}
        width={size}
      />
      <Image
        alt={tech}
        className={cn(
          "in-[.dark]:block hidden shrink-0 transition-opacity duration-200",
          className
        )}
        height={size}
        src={src.dark}
        width={size}
      />
    </>
  )
}
