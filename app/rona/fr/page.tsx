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
        <RonaHeroSection lang="fr" />
        <RonaServicesSection lang="fr" />
        <RonaHowItWorksSection lang="fr" />
        <RonaTestimonialsSection lang="fr" />
      </main>
      <RonaFooter lang="fr" />
    </div>
  )
}
