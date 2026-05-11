import Image from "next/image"
import Link from "next/link"

const products = [
  { name: "Bath Remodel", image: "/images/fd-bath-remodel.jpg" },
  { name: "Bathroom Vanities", image: "/images/fd-vanities.jpg" },
  { name: "Countertops", image: "/images/fd-countertops.jpg" },
  { name: "Deck & Pavers", image: "/images/fd-deck-pavers.jpg" },
  { name: "Faucets/Shower Heads", image: "/images/fd-faucets.jpg" },
  { name: "Flooring", image: "/images/fd-flooring.jpg" },
  { name: "Shower Doors", image: "/images/fd-shower-doors.jpg" },
  { name: "Sinks", image: "/images/fd-sinks.jpg" },
  { name: "XL Slabs", image: "/images/fd-xl-slabs.jpg" },
]

export function FloorDecorServicesSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Separator */}
        <div className="w-full h-px bg-gray-300 mb-8" />
        
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-2">
          Installed Products
        </h2>
        <p className="text-center text-gray-600 mb-10">
          Select a product below to learn more or schedule a FREE estimate.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <Link
              key={product.name}
              href="#"
              className="group flex flex-col items-center text-center"
            >
              <div className="relative w-full aspect-[4/3] mb-3 overflow-hidden rounded-sm">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span className="text-[#0066cc] font-medium text-sm md:text-base underline group-hover:text-[#004499] transition-colors">
                {product.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
