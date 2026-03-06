import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { AboutSection } from "@/components/sections/about"
import { ExperienceSection } from "@/components/sections/experience"
import { HeroSection } from "@/components/sections/hero"
import { StackSection } from "@/components/sections/stack"
import { WorksSection } from "@/components/sections/works"
import { Section } from "@/components/ui/section"

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex min-h-screen flex-col">
        <Section aria-labelledby="hero-heading">
          <HeroSection />
        </Section>
        <Section
          aria-labelledby="sobre-heading"
          id="sobre"
          sectionClassName="scroll-mt-28"
        >
          <AboutSection />
        </Section>
        <Section aria-labelledby="stack-heading">
          <StackSection />
        </Section>
        <Section
          aria-labelledby="trabalhos-heading"
          id="trabalhos"
          sectionClassName="scroll-mt-28"
        >
          <WorksSection />
        </Section>
        <Section
          aria-labelledby="experiencia-heading"
          id="experiencia"
          sectionClassName="scroll-mt-28"
        >
          <ExperienceSection />
        </Section>
        <Section as="div">
          <Footer />
        </Section>
      </main>
    </>
  )
}
