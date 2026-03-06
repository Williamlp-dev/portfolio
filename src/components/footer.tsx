import { Github, Linkedin, Mail } from "lucide-react"
import type { JSX } from "react"
import { Button } from "@/components/ui/button"
import { FadeIn } from "@/components/ui/fade-in"

type SocialLink = {
  href: string
  label: string
  icon: JSX.Element
}

const SOCIAL_LINKS: SocialLink[] = [
  {
    href: "https://github.com/Williamlp-dev",
    label: "GitHub",
    icon: <Github />,
  },
  {
    href: "https://www.linkedin.com/in/william-lopes-5537792a1",
    label: "LinkedIn",
    icon: <Linkedin />,
  },
  {
    href: "mailto:williamlp.dev@gmail.com",
    label: "E-mail",
    icon: <Mail />,
  },
]

export function Footer(): JSX.Element {
  return (
    <FadeIn delay={0.1} direction="up" fullWidth>
      <footer
        className="relative flex scroll-mt-28 flex-col items-start justify-between gap-6 pt-10 md:flex-row md:items-center"
        id="contato"
      >
        <address className="flex flex-col items-start justify-start gap-1.5 not-italic">
          <span className="font-medium text-foreground-muted text-sm">
            William Lopes da Silva
          </span>
          <Button
            render={
              <a
                aria-label="Ligar para (81) 98504-4180"
                href="tel:+5581985044180"
              />
            }
            variant="link"
          >
            (81) 98504-4180
          </Button>
        </address>
        <nav aria-label="Redes sociais" className="flex gap-6">
          {SOCIAL_LINKS.map(({ href, label, icon }) => (
            <Button
              aria-label={label}
              key={label}
              render={
                <a
                  aria-label={label}
                  href={href}
                  rel="noopener noreferrer"
                  target="_blank"
                />
              }
              size="icon"
              variant="link"
            >
              {icon}
            </Button>
          ))}
        </nav>
      </footer>
    </FadeIn>
  )
}
