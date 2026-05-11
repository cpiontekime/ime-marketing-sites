import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { RonaHeader } from "@/components/rona/header"
import { RonaHeroSection } from "@/components/rona/hero-section"
import { RonaServicesSection } from "@/components/rona/services-section"
import { RonaHowItWorksSection } from "@/components/rona/how-it-works-section"
import { RonaTestimonialsSection } from "@/components/rona/testimonials-section"
import { RonaFooter } from "@/components/rona/footer"

export default function RonaPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <RonaHeader lang="en" />
      <main className="flex-1">
        <ScrollAnimate>
          <RonaHeroSection lang="en" />
        </ScrollAnimate>
        <ScrollAnimate>
          <RonaServicesSection lang="en" />
        </ScrollAnimate>
        <ScrollAnimate>
          <RonaHowItWorksSection lang="en" />
        </ScrollAnimate>
        <ScrollAnimate>
          <RonaTestimonialsSection lang="en" />
        </ScrollAnimate>
      </main>
      <RonaFooter lang="en" />
    </div>
  )
}
