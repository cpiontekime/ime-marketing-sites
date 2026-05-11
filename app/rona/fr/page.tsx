import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { RonaHeader } from "@/components/rona/header"
import { RonaHeroSection } from "@/components/rona/hero-section"
import { RonaServicesSection } from "@/components/rona/services-section"
import { RonaHowItWorksSection } from "@/components/rona/how-it-works-section"
import { RonaTestimonialsSection } from "@/components/rona/testimonials-section"
import { RonaFooter } from "@/components/rona/footer"

export default function RonaFrenchPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <RonaHeader lang="fr" />
      <main className="flex-1">
        <ScrollAnimate>
          <RonaHeroSection lang="fr" />
        </ScrollAnimate>
        <ScrollAnimate>
          <RonaServicesSection lang="fr" />
        </ScrollAnimate>
        <ScrollAnimate>
          <RonaHowItWorksSection lang="fr" />
        </ScrollAnimate>
        <ScrollAnimate>
          <RonaTestimonialsSection lang="fr" />
        </ScrollAnimate>
      </main>
      <RonaFooter lang="fr" />
    </div>
  )
}
