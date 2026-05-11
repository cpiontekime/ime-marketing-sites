import Image from "next/image"

interface RonaServicesSectionProps {
  lang?: "en" | "fr"
}

const translations = {
  en: {
    label: "What We Do",
    title: "Our Services",
    services: [
      { name: "Flooring", image: "/images/flooring.jpg" },
      { name: "Generators", image: "/images/generators.jpg" },
      { name: "Sheds", image: "/images/sheds.jpg" },
    ],
  },
  fr: {
    label: "Ce Que Nous Faisons",
    title: "Nos prestations",
    services: [
      { name: "Sol", image: "/images/flooring.jpg" },
      { name: "Générateurs", image: "/images/generators.jpg" },
      { name: "Cabanons", image: "/images/sheds.jpg" },
    ],
  },
}

export function RonaServicesSection({ lang = "en" }: RonaServicesSectionProps) {
  const t = translations[lang]

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-[#1a2744] uppercase tracking-widest mb-2">
          {t.label}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          {t.title}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.services.map((service) => (
            <div
              key={service.name}
              className="group relative overflow-hidden rounded-lg cursor-pointer"
            >
              <div className="aspect-[4/3] relative">
                <Image
                  src={service.image}
                  alt={`${service.name} services`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                {/* Blue gradient overlay matching RONA design */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a2744]/90 via-[#1a2744]/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white">
                    {service.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
