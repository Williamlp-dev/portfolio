import AboutSection from "@/components/sections/about"
import ContactSection from "@/components/sections/contact"
import FooterSection from "@/components/sections/footer"
import HeroSection from "@/components/sections/hero"
import ProjectSection from "@/components/sections/project"
import SkillSection from "@/components/sections/skills"
import TimelineSection from "@/components/sections/timeline"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <ProjectSection />
      <TimelineSection />
      <ContactSection />
      <FooterSection />
    </main>
  )
}
