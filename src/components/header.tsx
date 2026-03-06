"use client"

import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import Link from "next/link"
import type { JSX } from "react"
import { useCallback, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon"
import { AnimatedThemeToggle } from "@/components/ui/theme-toggle"
import { cn } from "@/lib/utils"

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#trabalhos", label: "Trabalhos" },
  { href: "#experiencia", label: "Experiência" },
  { href: "#contato", label: "Contato" },
]

const EASE_OUT: [number, number, number, number] = [0.21, 0.47, 0.32, 0.98]

const CrossAnchor = ({ className }: { className?: string }): JSX.Element => (
  <div className={cn("absolute z-60 hidden h-px w-px sm:block", className)}>
    <div className="absolute top-[-5px] left-[-5px] flex h-[11px] w-[11px] items-center justify-center bg-background-header/90 backdrop-blur-md">
      <div className="h-[5px] w-[5px] rotate-45 bg-border-subtle" />
    </div>
  </div>
)

export function Header(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  const closeMenu = useCallback(() => setIsOpen(false), [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    document.body.style.overflow = "hidden"

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeMenu()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [isOpen, closeMenu])

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-border-subtle border-b bg-background-header/90 backdrop-blur-md">
        <div className="relative mx-auto max-w-2xl">
          <CrossAnchor className="-bottom-px left-0" />
          <CrossAnchor className="right-0 -bottom-px" />

          <div className="border-border-subtle px-6 sm:border-x">
            <FadeIn delay={0.05} direction="none">
              <div className="flex items-center justify-between py-4 font-mono text-[11px] uppercase tracking-widest">
                <Link
                  className="font-medium text-foreground-muted transition-colors duration-200 hover:text-foreground"
                  href="/"
                >
                  William Lopes
                </Link>

                <div className="hidden items-center gap-7 text-foreground-subtle md:flex">
                  <nav
                    aria-label="Principal"
                    className="flex items-center gap-7"
                  >
                    {NAV_LINKS.map(({ href, label }) => (
                      <Link
                        className="px-0.5 py-1 transition-colors duration-200 hover:text-foreground"
                        href={href}
                        key={href}
                      >
                        {label}
                      </Link>
                    ))}
                  </nav>
                  <AnimatedThemeToggle />
                </div>

                <div className="flex items-center gap-2 md:hidden">
                  <AnimatedThemeToggle />
                  <Button
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
                    className="text-foreground-subtle hover:bg-transparent hover:text-foreground"
                    onClick={() => setIsOpen((prev) => !prev)}
                    size="icon"
                    variant="ghost"
                  >
                    <MenuToggleIcon
                      className="size-5"
                      duration={shouldReduceMotion ? 0 : 300}
                      open={isOpen}
                    />
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-999 md:hidden"
            exit={{ opacity: 0 }}
            initial={{ opacity: 0 }}
            key="mobile-overlay"
            transition={{
              duration: shouldReduceMotion ? 0 : 0.25,
              ease: EASE_OUT,
            }}
          >
            <motion.div
              className="absolute inset-0 bg-background/95 backdrop-blur-xl"
              onClick={closeMenu}
            />

            <nav
              aria-label="Menu mobile"
              className="relative z-10 flex h-full flex-col items-center justify-center gap-2"
            >
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.div
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  initial={{ opacity: 0, y: 20 }}
                  key={href}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.3,
                    delay: shouldReduceMotion ? 0 : 0.08 + i * 0.06,
                    ease: EASE_OUT,
                  }}
                >
                  <Link
                    className="btn-press block px-6 py-4 font-mono text-2xl text-foreground-muted uppercase tracking-widest transition-colors duration-200 hover:text-foreground"
                    href={href}
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                animate={{ opacity: 1 }}
                className="mt-8"
                initial={{ opacity: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.3,
                  delay: shouldReduceMotion
                    ? 0
                    : 0.08 + NAV_LINKS.length * 0.06,
                  ease: EASE_OUT,
                }}
              >
                <Button
                  aria-label="Fechar menu"
                  className="text-foreground-subtle hover:bg-transparent hover:text-foreground"
                  onClick={closeMenu}
                  size="icon"
                  variant="ghost"
                >
                  <MenuToggleIcon
                    className="size-6"
                    duration={shouldReduceMotion ? 0 : 300}
                    open={isOpen}
                  />
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
