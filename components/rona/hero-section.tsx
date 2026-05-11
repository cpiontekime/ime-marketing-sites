import Image from "next/image"

interface RonaHeroSectionProps {
  lang?: "en" | "fr"
}

export function RonaHeroSection({ lang = "en" }: RonaHeroSectionProps) {
  const altText = lang === "fr" 
    ? "Belle maison de style artisan avec revêtement gris et garnitures blanches"
    : "Beautiful craftsman style home with gray siding and white trim"

  return (
    <section className="w-full bg-[#EDEDED]">
      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-[16/9] md:aspect-[2.2/1]">
          <Image
            src="/images/hero-house.jpg"
            alt={altText}
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
