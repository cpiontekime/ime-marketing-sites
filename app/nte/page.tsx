import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { NTEHeader } from "@/components/nte/header"
import { NTEHeroSection } from "@/components/nte/hero-section"
import { NTEServicesSection } from "@/components/nte/services-section"
import { NTEHowItWorksSection } from "@/components/nte/how-it-works-section"
import { NTELearnMoreSection } from "@/components/nte/learn-more-section"
import { NTETestimonialsSection } from "@/components/nte/testimonials-section"
import { NTEFooter } from "@/components/nte/footer"

export default function NTEPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <NTEHeader />
      <main className="flex-1">
        <ScrollAnimate>
          <NTEHeroSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <NTEServicesSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <NTEHowItWorksSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <NTELearnMoreSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <NTETestimonialsSection />
        </ScrollAnimate>
      </main>
      <NTEFooter />
    </div>
  )
}
