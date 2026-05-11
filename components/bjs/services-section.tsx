import Image from "next/image"

const services = [
  { name: "Flooring", image: "/images/flooring.jpg" },
  { name: "Generators", image: "/images/generators.jpg" },
  { name: "Sheds", image: "/images/sheds.jpg" },
]

export function BJsServicesSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-[#c41230] uppercase tracking-wide mb-2">
          What We Do
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">
          Our Services
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
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
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
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
