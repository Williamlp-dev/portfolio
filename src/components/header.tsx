"use client"

import { AnimatePresence, easeInOut, motion } from "framer-motion"
import { Github, Linkedin, Mail, Menu, X } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import ModeToggle from "@/components/theme/theme-button"

type NavItem = {
  name: string
  href: string
}

const navItems: NavItem[] = [
  { name: "Inicio", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projetos", href: "#projects" },
  { name: "Timeline", href: "#timeline" },
  { name: "Contact", href: "#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      x: 100,
      transition: {
        duration: 0.3,
        ease: easeInOut,
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: easeInOut,
        staggerChildren: 0.1,
      },
    },
  }

  const mobileItemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 },
  }

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "border-border/50 border-b bg-background/80 shadow-sm backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <motion.div
              className="flex items-center space-x-3"
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              <Link className="flex items-center space-x-3" href="/">
                <div className="relative">
                  <span className="font-bold text-foreground text-lg">
                    William.
                  </span>
                </div>
              </Link>
            </motion.div>

            <nav className="hidden items-center space-x-1 lg:flex">
              {navItems.map((item) => (
                <motion.div
                  className="relative"
                  key={item.name}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  variants={itemVariants}
                >
                  <Link
                    className="relative rounded-lg px-4 py-2 font-medium text-foreground/80 text-sm transition-colors duration-200 hover:text-foreground"
                    href={item.href}
                  >
                    {hoveredItem === item.name && (
                      <motion.div
                        animate={{ opacity: 1 }}
                        className="absolute inset-0 rounded-lg bg-muted"
                        exit={{ opacity: 0 }}
                        initial={{ opacity: 0 }}
                        layoutId="navbar-hover"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.name}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="flex items-center space-x-2">
              <motion.div className="" variants={itemVariants}>
                <div className="rounded-lg p-2">
                  <ModeToggle />
                </div>
              </motion.div>

              <motion.button
                className="rounded-lg p-2 text-foreground transition-colors duration-200 hover:bg-muted lg:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              animate={{ opacity: 1 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm lg:hidden"
              exit={{ opacity: 0 }}
              initial={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              animate="open"
              className="fixed top-16 right-4 z-50 w-80 overflow-hidden rounded-2xl border border-border bg-background shadow-2xl lg:hidden"
              exit="closed"
              initial="closed"
              variants={mobileMenuVariants}
            >
              <div className="space-y-6 p-6">
                <div className="space-y-1">
                  {navItems.map((item) => (
                    <motion.div key={item.name} variants={mobileItemVariants}>
                      <Link
                        className="block rounded-lg px-4 py-3 font-medium text-foreground transition-colors duration-200 hover:bg-muted"
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  className="space-y-3 border-border border-t pt-6"
                  variants={mobileItemVariants}
                />
                <motion.div
                  className="mb-4 flex justify-center gap-6 px-6"
                  variants={mobileItemVariants}
                >
                  <Link href="https://github.com/Williamlp-dev" target="_blank">
                    <motion.div
                      className="rounded-lg bg-muted p-2 transition-colors hover:bg-primary/10"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                    </motion.div>
                  </Link>

                  <Link
                    href="https://www.linkedin.com/in/william-lopes-5537792a1/"
                    target="_blank"
                  >
                    <motion.div
                      className="rounded-lg bg-muted p-2 transition-colors hover:bg-primary/10"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Linkedin className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                    </motion.div>
                  </Link>

                  <Link href="mailto:williamlopes.dev@gmail.com">
                    <motion.div
                      className="rounded-lg bg-muted p-2 transition-colors hover:bg-primary/10"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Mail className="h-5 w-5 text-muted-foreground transition-colors hover:text-foreground" />
                    </motion.div>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
