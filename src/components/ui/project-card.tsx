"use client";

import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";
import { TechIcon } from "./tech-icon";

function ProjectImage({
  src,
  alt,
  priority = false,
}: {
  src: string;
  alt: string;
  priority?: boolean;
}) {
  const [error, setError] = useState(false);
  if (!src || error) {
    return (
      <div className="w-full h-44 bg-muted flex items-center justify-center">
        <span className="text-muted-foreground text-xs">Sem imagem</span>
      </div>
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={400}
      height={176}
      unoptimized
      priority={priority}
      className={cn(
        "w-full h-44",
        src.includes("/logo/") ? "object-contain p-6" : "object-cover",
      )}
      onError={() => setError(true)}
    />
  );
}

interface ProjectLink {
  icon: React.ReactNode;
  type: string;
  href: string;
  private?: boolean;
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  image?: string;
  video?: string;
  links?: readonly ProjectLink[];
  className?: string;
  imageBg?: string;
  priority?: boolean;
}

export function ProjectCard({
  title,
  href: _href,
  description,
  dates,
  tags,
  image,
  video,
  links,
  className,
  imageBg,
  priority = false,
}: Props) {
  const webLink = links?.find((l) => l.type === "Website");
  const githubLink = links?.find((l) => l.type === "GitHub");

  return (
    <Card
      className={cn(
        "h-full overflow-hidden transition-colors duration-200",
        className,
      )}
    >
      {/* ── Thumbnail ── */}
      <div
        className="relative overflow-hidden shrink-0 bg-muted"
        style={imageBg ? { backgroundColor: imageBg } : undefined}
      >
        <div className="block">
          {video ? (
            <video
              src={video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-44 object-cover transition-transform duration-500 hover:scale-105"
            />
          ) : image ? (
            <ProjectImage src={image} alt={title} priority={priority} />
          ) : (
            <div className="w-full h-44 bg-muted" />
          )}
        </div>
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col gap-2.5 p-5 flex-1">
        {/* header row */}
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5 min-w-0">
            <h3 className="font-semibold text-sm leading-snug text-foreground truncate">
              {title}
            </h3>
            <time className="text-[11px] text-muted-foreground tabular-nums">
              {dates}
            </time>
          </div>
        </div>

        {/* description */}
        <div className="text-xs flex-1 prose max-w-full text-pretty font-sans leading-relaxed text-muted-foreground dark:prose-invert line-clamp-3">
          <Markdown>{description}</Markdown>
        </div>

        {/* tags */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-1 pt-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                className="text-[10px] font-medium h-5 px-1.5 rounded-sm flex items-center gap-1"
                variant="outline"
              >
                <TechIcon tech={tag} size={10} />
                {tag}
              </Badge>
            ))}
          </div>
        )}

        {/* ── Action buttons ── */}
        {(webLink || githubLink) && (
          <div className="flex gap-2 pt-2 mt-auto">
            {/* Web button */}
            {webLink && (
              <Link
                href={webLink.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(
                  "flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg text-xs font-medium",
                  "border border-border bg-background text-foreground",
                  "hover:bg-muted hover:border-foreground/20 transition-all duration-200",
                )}
              >
                <Globe className="size-3 shrink-0" />
                Website
              </Link>
            )}

            {/* GitHub button */}
            {githubLink &&
              (githubLink.private ? (
                <div
                  className={cn(
                    "flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg text-xs font-medium",
                    "border border-dashed border-border/60 bg-muted/30 text-muted-foreground",
                    "cursor-not-allowed select-none",
                  )}
                  title="Repositório privado"
                >
                  <Icons.github className="size-3 shrink-0" />
                  Privado
                </div>
              ) : (
                <Link
                  href={githubLink.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex-1 flex items-center justify-center gap-1.5 h-8 rounded-lg text-xs font-medium",
                    "border border-border bg-background text-foreground",
                    "hover:bg-muted hover:border-foreground/20 transition-all duration-200",
                  )}
                >
                  <Icons.github className="size-3 shrink-0" />
                  GitHub
                </Link>
              ))}
          </div>
        )}
      </div>
    </Card>
  );
}
