import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { LowesHeader } from "@/components/lowes/header"
import { LowesHeroSection } from "@/components/lowes/hero-section"
import { LowesServicesSection } from "@/components/lowes/services-section"
import { LowesHowItWorksSection } from "@/components/lowes/how-it-works-section"
import { LowesLearnMoreSection } from "@/components/lowes/learn-more-section"
import { LowesTestimonialsSection } from "@/components/lowes/testimonials-section"
import { LowesFooter } from "@/components/lowes/footer"

export default function LowesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <LowesHeader />
      <main className="flex-1">
        <ScrollAnimate>
          <LowesHeroSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <LowesServicesSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <LowesHowItWorksSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <LowesLearnMoreSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <LowesTestimonialsSection />
        </ScrollAnimate>
      </main>
      <LowesFooter />
    </div>
  )
}
