import { FloorDecorHeader } from "@/components/floor-and-decor/header"
import { FloorDecorFooter } from "@/components/floor-and-decor/footer"
import { ProductPageLayout } from "@/components/floor-and-decor/product-page-layout"

const bathroomVanitiesProduct = {
  title: "Bathroom Vanities",
  heroImage: "/images/fd-vanities.jpg",
  heroText: "Get your new",
  heroTextBold: "bathroom vanity installed by a pro!",
  heroPosition: "left" as const,
  description: "Bathroom vanities offer you the functional storage space you need to make morning routine a breeze.",
  benefits: [
    "Choose from a variety of styles, colors and accessories",
    "Professional installation by licensed and insured providers",
    "Backed by a manufacturer warranty",
  ],
  tabs: ["OVERVIEW"],
  relatedProducts: [
    { name: "Deck & Pavers", image: "/images/fd-deck-pavers.jpg", href: "#" },
    { name: "Flooring", image: "/images/fd-flooring.jpg", href: "#" },
    { name: "Shower Doors", image: "/images/fd-shower-doors.jpg", href: "#" },
    { name: "Sinks", image: "/images/fd-sinks.jpg", href: "#" },
  ],
}

export default function BathroomVanitiesPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <FloorDecorHeader />
      <main className="flex-1">
        <ProductPageLayout product={bathroomVanitiesProduct} />
      </main>
      <FloorDecorFooter />
    </div>
  )
}
