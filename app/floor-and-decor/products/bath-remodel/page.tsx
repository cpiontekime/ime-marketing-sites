import { FloorDecorHeader } from "@/components/floor-and-decor/header"
import { FloorDecorFooter } from "@/components/floor-and-decor/footer"
import { ProductPageLayout } from "@/components/floor-and-decor/product-page-layout"

const bathRemodelProduct = {
  title: "Bath",
  heroImage: "/images/fd-bath-remodel.jpg",
  heroText: "Updating your",
  heroTextBold: "bath has never been easier!",
  heroPosition: "left" as const,
  description: "Transform your bathroom into your personal oasis.",
  benefits: [
    "Designed to fit your lifestyle and budget",
    "Professional installation by licensed and insured providers",
    "Backed by a manufacturer warranty",
  ],
  tabs: ["OVERVIEW"],
  relatedProducts: [
    { name: "Bath Remodel", image: "/images/fd-bath-remodel.jpg", href: "/floor-and-decor/products/bath-remodel" },
    { name: "Bathroom Vanities", image: "/images/fd-vanities.jpg", href: "/floor-and-decor/products/bathroom-vanities" },
    { name: "Countertops", image: "/images/fd-countertops.jpg", href: "/floor-and-decor/products/countertops" },
    { name: "Faucets/Shower Heads", image: "/images/fd-faucets.jpg", href: "#" },
  ],
}

export default function BathRemodelPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <FloorDecorHeader />
      <main className="flex-1">
        <ProductPageLayout product={bathRemodelProduct} />
      </main>
      <FloorDecorFooter />
    </div>
  )
}
