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
        <AceHeroSection />
        <AceServicesSection />
        <AceHowItWorksSection />
        <AceLearnMoreSection />
        <AceTestimonialsSection />
      </main>
      <AceFooter />
    </div>
  )
}
