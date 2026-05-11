import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { FloorDecorHeader } from "@/components/floor-and-decor/header"
import { FloorDecorHeroSection } from "@/components/floor-and-decor/hero-section"
import { FloorDecorServicesSection } from "@/components/floor-and-decor/services-section"
import { FloorDecorHowItWorksSection } from "@/components/floor-and-decor/how-it-works-section"
import { FloorDecorLearnMoreSection } from "@/components/floor-and-decor/learn-more-section"
import { FloorDecorTestimonialsSection } from "@/components/floor-and-decor/testimonials-section"
import { FloorDecorFooter } from "@/components/floor-and-decor/footer"

export default function FloorAndDecorPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <FloorDecorHeader />
      <main className="flex-1">
        <ScrollAnimate>
          <FloorDecorHeroSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <FloorDecorServicesSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <FloorDecorHowItWorksSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <FloorDecorLearnMoreSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <FloorDecorTestimonialsSection />
        </ScrollAnimate>
      </main>
      <FloorDecorFooter />
    </div>
  )
}
