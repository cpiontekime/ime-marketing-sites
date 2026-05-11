import { ScrollAnimate } from "@/components/ui/scroll-animate"
import { BJsHeader } from "@/components/bjs/header"
import { BJsHeroSection } from "@/components/bjs/hero-section"
import { BJsServicesSection } from "@/components/bjs/services-section"
import { BJsPromoBannerSection } from "@/components/bjs/promo-banner-section"
import { BJsMemberDealsSection } from "@/components/bjs/member-deals-section"
import { BJsTestimonialsSection } from "@/components/bjs/testimonials-section"
import { BJsFooter } from "@/components/bjs/footer"

export default function BJsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <BJsHeader />
      <main className="flex-1">
        <ScrollAnimate>
          <BJsHeroSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <BJsServicesSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <BJsPromoBannerSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <BJsMemberDealsSection />
        </ScrollAnimate>
        <ScrollAnimate>
          <BJsTestimonialsSection />
        </ScrollAnimate>
      </main>
      <BJsFooter />
    </div>
  )
}
