import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { BJsHeader } from "@/components/bjs/header"
import { BJsHeroSection } from "@/components/bjs/hero-section"
import { BJsServicesSection } from "@/components/bjs/services-section"
import { BJsHowItWorksSection } from "@/components/bjs/how-it-works-section"
import { BJsLearnMoreSection } from "@/components/bjs/learn-more-section"
import { BJsTestimonialsSection } from "@/components/bjs/testimonials-section"
import { BJsFooter } from "@/components/bjs/footer"

export default function BJsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <BJsHeader />
      <main className="flex-1">
        <ScrollAnimate>
          <BJsHeroSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <BJsServicesSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <BJsHowItWorksSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <BJsLearnMoreSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <BJsTestimonialsSection />
        </ScrollAnimate>
      </main>
      <BJsFooter />
    </div>
  )
}
