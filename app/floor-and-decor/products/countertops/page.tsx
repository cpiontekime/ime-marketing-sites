import { FloorDecorHeader } from "@/components/floor-and-decor/header"
import { FloorDecorFooter } from "@/components/floor-and-decor/footer"
import { ProductPageLayout } from "@/components/floor-and-decor/product-page-layout"

const countertopsProduct = {
  title: "Countertops",
  heroImage: "/images/fd-countertops.jpg",
  heroText: "Let us help you with your new",
  heroTextBold: "countertops!",
  heroPosition: "right" as const,
  description: "Revitalize your kitchen with the help of our countertop experts.",
  benefits: [
    "Available in a variety of colors and styles to match any design",
    "Durable and easy to maintain",
    "Professional installation by licensed and insured providers",
    "Backed by a manufacturer warranty",
  ],
  tabs: ["OVERVIEW", "FAQS", "FREE ESTIMATE"],
  relatedProducts: [
    { name: "Bath Remodel", image: "/images/fd-bath-remodel.jpg", href: "/floor-and-decor/products/bath-remodel" },
    { name: "Bathroom Vanities", image: "/images/fd-vanities.jpg", href: "/floor-and-decor/products/bathroom-vanities" },
    { name: "Countertops", image: "/images/fd-countertops.jpg", href: "/floor-and-decor/products/countertops" },
    { name: "Faucets/Shower Heads", image: "/images/fd-faucets.jpg", href: "#" },
  ],
}

export default function CountertopsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <FloorDecorHeader />
      <main className="flex-1">
        <ProductPageLayout product={countertopsProduct} />
      </main>
      <FloorDecorFooter />
    </div>
  )
}
