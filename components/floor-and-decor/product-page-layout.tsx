"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ProductInfo {
  title: string
  heroImage: string
  heroText: string
  heroTextBold: string
  heroPosition: "left" | "right"
  description: string
  benefits: string[]
  tabs?: string[]
  relatedProducts: {
    name: string
    image: string
    href: string
  }[]
}

export function ProductPageLayout({ product }: { product: ProductInfo }) {
  const [activeTab, setActiveTab] = useState(0)
  
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative w-full h-[280px] md:h-[320px]">
        <Image
          src={product.heroImage}
          alt={product.title}
          fill
          className="object-cover"
          priority
        />
        <div className={`absolute inset-0 flex items-center ${product.heroPosition === 'right' ? 'justify-end' : 'justify-start'}`}>
          <div className={`bg-[#1a5f7a]/90 text-white p-6 md:p-8 max-w-sm ${product.heroPosition === 'right' ? 'mr-8 md:mr-16' : 'ml-8 md:ml-16'}`}>
            <p className="text-lg md:text-xl leading-relaxed">
              {product.heroText} <strong>{product.heroTextBold}</strong>
            </p>
            <Link
              href="#"
              className="inline-flex items-center gap-2 mt-4 bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-semibold px-6 py-2.5 transition-colors"
            >
              GET STARTED
              <span>&gt;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Tabs Section */}
      <section className="w-full bg-[#1a5f7a]">
        <div className="max-w-5xl mx-auto">
          <div className="flex">
            {(product.tabs || ["OVERVIEW"]).map((tab, index) => (
              <button
                key={tab}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-3 text-sm font-medium transition-colors ${
                  activeTab === index
                    ? "bg-[#f5f5f5] text-gray-900"
                    : "text-white hover:bg-[#164d63]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="w-full py-8 md:py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-3xl font-bold text-[#1a5f7a] mb-4">
            {product.title}:
          </h1>
          <p className="text-lg font-semibold text-gray-900 mb-6">
            {product.description}
          </p>
          <ul className="space-y-2 mb-8">
            {product.benefits.map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-700">
                <span className="text-gray-500">•</span>
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Related Products Carousel */}
      <section className="w-full py-8 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="flex items-center">
              <button className="absolute left-0 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md -translate-x-1/2">
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              
              <div className="flex gap-4 overflow-hidden mx-8">
                {product.relatedProducts.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex-shrink-0 w-48 group"
                  >
                    <div className="relative aspect-[4/3] mb-2 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-[#1a5f7a]/90 py-2 px-3">
                        <span className="text-white text-xs font-medium uppercase">
                          {item.name}
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              
              <button className="absolute right-0 z-10 p-2 bg-white/80 hover:bg-white rounded-full shadow-md translate-x-1/2">
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
