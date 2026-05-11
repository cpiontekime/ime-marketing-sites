"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function FloorDecorHeroSection() {
  return (
    <section className="w-full">
      {/* Hero Banner */}
      <div className="relative bg-[#1a5f7a] overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center">
            {/* Left - Image */}
            <div className="w-full md:w-1/2 relative">
              <div className="relative aspect-[4/3] md:aspect-[16/10]">
                <Image
                  src="/images/fd-hero-promo.jpg"
                  alt="Beautiful bathroom with modern fixtures"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            {/* Right - Content */}
            <div className="w-full md:w-1/2 p-8 md:p-12 text-white">
              <p className="text-lg md:text-xl leading-relaxed mb-6">
                From <strong>faucets</strong> and <strong>sinks</strong> to<br />
                <strong>flooring</strong> and<br />
                <strong>countertops</strong>, we&apos;ve got<br />
                you covered.
              </p>
              <button className="bg-[#00875a] hover:bg-[#006644] text-white font-semibold px-6 py-3 rounded transition-colors">
                GET STARTED &gt;
              </button>
            </div>
            
            {/* Navigation arrows */}
            <button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Category Tabs */}
      <div className="bg-[#1a3a4a] text-white">
        <div className="max-w-7xl mx-auto px-4 relative">
          <div className="flex items-center">
            <button className="p-3 hover:bg-white/10 transition-colors">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex">
                {[
                  "BATH REMODEL",
                  "BATHROOM VANITIES", 
                  "COUNTERTOPS",
                  "DECK & PAVERS",
                  "FAUCETS/ SHOWER HEADS",
                  "FLOORING",
                  "SHOWER DOORS",
                  "SINKS",
                  "XL SLABS"
                ].map((tab, index) => (
                  <button
                    key={tab}
                    className={`px-4 py-3 text-xs font-medium whitespace-nowrap hover:bg-white/10 transition-colors ${
                      index === 0 ? "bg-white/10" : ""
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            <button className="p-3 hover:bg-white/10 transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
