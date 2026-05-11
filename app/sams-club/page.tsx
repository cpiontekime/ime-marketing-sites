import { SamsClubHeader } from "@/components/sams-club/header"
import { SamsClubHeroSection } from "@/components/sams-club/hero-section"
import { SamsClubServicesSection } from "@/components/sams-club/services-section"
import { SamsClubHowItWorksSection } from "@/components/sams-club/how-it-works-section"
import { SamsClubLearnMoreSection } from "@/components/sams-club/learn-more-section"
import { SamsClubTestimonialsSection } from "@/components/sams-club/testimonials-section"
import { SamsClubFooter } from "@/components/sams-club/footer"

export default function SamsClubPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <SamsClubHeader />
      <main className="flex-1">
        <SamsClubHeroSection />
        <SamsClubServicesSection />
        <SamsClubHowItWorksSection />
        <SamsClubLearnMoreSection />
        <SamsClubTestimonialsSection />
      </main>
      <SamsClubFooter />
    </div>
  )
}
