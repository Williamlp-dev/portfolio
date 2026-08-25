"use client";

import { FileDown } from "lucide-react";
import { motion } from "motion/react";
import { Dock, DockIcon } from "@/components/dock";
import { ModeToggle } from "@/components/mode-toggle";
import { Separator } from "@/components/ui/separator";
import { useThemeToggle } from "@/components/ui/theme-transition";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";

const CV_URL = "/Currículo - William Lopes Da Silva.pdf";

const DOCK_ICON_CLASS =
  "rounded-full bg-background flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted backdrop-blur-3xl border border-border transition-colors";

export default function Navbar() {
  const { toggleTheme } = useThemeToggle({
    variant: "circle",
    start: "bottom-center",
  });

  return (
    <motion.div
      className="pointer-events-none fixed inset-x-0 bottom-4 z-30"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
    >
      <Dock className="z-50 pointer-events-auto relative h-14 p-2 w-fit mx-auto flex gap-2 border bg-card/90 backdrop-blur-3xl shadow-[0_0_10px_3px] shadow-primary/5">
        {/* Home / Nav links */}
        {DATA.navbar.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <Tooltip key={item.href}>
              <DockIcon className={DOCK_ICON_CLASS}>
                <TooltipTrigger
                  render={
                    // biome-ignore lint/a11y/useAnchorContent: Base UI merges children into this anchor element
                    <a
                      href={item.href}
                      aria-label={item.label}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="size-full flex items-center justify-center"
                    />
                  }
                >
                  <item.icon className="size-5 shrink-0" />
                  <span className="sr-only">{item.label}</span>
                </TooltipTrigger>
              </DockIcon>
              <TooltipContent
                side="top"
                sideOffset={8}
                className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
              >
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          );
        })}

        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />

        {/* Social links (GitHub, LinkedIn) */}
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => {
            const isExternal = social.url.startsWith("http");
            const IconComponent = social.icon;
            return (
              <Tooltip key={`social-${name}`}>
                <DockIcon className={DOCK_ICON_CLASS}>
                  <TooltipTrigger
                    render={
                      // biome-ignore lint/a11y/useAnchorContent: Base UI merges children into this anchor element
                      <a
                        href={social.url}
                        aria-label={name}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="size-full flex items-center justify-center"
                      />
                    }
                  >
                    <IconComponent className="size-5 shrink-0" />
                    <span className="sr-only">{name}</span>
                  </TooltipTrigger>
                </DockIcon>
                <TooltipContent
                  side="top"
                  sideOffset={8}
                  className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
                >
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            );
          })}

        {/* CV download */}
        <Tooltip>
          <DockIcon className={DOCK_ICON_CLASS}>
            <TooltipTrigger
              render={
                // biome-ignore lint/a11y/useAnchorContent: Base UI merges children into this anchor element
                <a
                  href={CV_URL}
                  aria-label="Download Currículo"
                  target="_blank"
                  rel="noopener noreferrer"
                  download
                  className="size-full flex items-center justify-center"
                />
              }
            >
              <FileDown className="size-5 shrink-0" />
              <span className="sr-only">Download Currículo</span>
            </TooltipTrigger>
          </DockIcon>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Currículo</p>
          </TooltipContent>
        </Tooltip>

        <Separator
          orientation="vertical"
          className="h-2/3 m-auto w-px bg-border"
        />

        {/* Theme toggle */}
        <Tooltip>
          <DockIcon className={DOCK_ICON_CLASS} onClick={toggleTheme}>
            <TooltipTrigger
              render={
                <button
                  type="button"
                  aria-label="Alternar tema"
                  className="size-full flex items-center justify-center cursor-pointer"
                />
              }
            >
              <ModeToggle className="size-5 shrink-0" />
              <span className="sr-only">Alternar tema</span>
            </TooltipTrigger>
          </DockIcon>
          <TooltipContent
            side="top"
            sideOffset={8}
            className="rounded-xl bg-primary text-primary-foreground px-4 py-2 text-sm shadow-[0_10px_40px_-10px_rgba(0,0,0,0.3)] dark:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]"
          >
            <p>Tema</p>
          </TooltipContent>
        </Tooltip>
      </Dock>
    </motion.div>
  );
}
