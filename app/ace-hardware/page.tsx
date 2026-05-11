import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { AceHeader } from "@/components/ace-hardware/header"
import { AceHeroSection } from "@/components/ace-hardware/hero-section"
import { AceServicesSection } from "@/components/ace-hardware/services-section"
import { AceHowItWorksSection } from "@/components/ace-hardware/how-it-works-section"
import { AceLearnMoreSection } from "@/components/ace-hardware/learn-more-section"
import { AceTestimonialsSection } from "@/components/ace-hardware/testimonials-section"
import { AceFooter } from "@/components/ace-hardware/footer"

export default function AceHardwarePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <AceHeader />
      <main className="flex-1">
        <ScrollAnimate>
          <AceHeroSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <AceServicesSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <AceHowItWorksSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <AceLearnMoreSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <AceTestimonialsSection />
        </ScrollAnimate>
      </main>
      <AceFooter />
    </div>
  )
}
