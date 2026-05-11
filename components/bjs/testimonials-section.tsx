"use client"

import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const galleryImages = [
  "/images/bjs-interior.jpg",
  "/images/bjs-bathroom.jpg",
  "/images/bjs-exterior.jpg",
]

export function BJsTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-6 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Gallery with Testimonial Overlay */}
        <div className="relative">
          {/* Image Gallery */}
          <div className="relative aspect-[2/1] overflow-hidden rounded-lg">
            <div className="absolute inset-0 flex">
              {galleryImages.map((img, idx) => (
                <div key={idx} className="relative flex-1">
                  <Image
                    src={img}
                    alt={`Project gallery ${idx + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            
            {/* Navigation Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-gray-800" />
            </button>
          </div>

          {/* Testimonial Card Overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
            <h3 className="text-[#c41230] font-bold text-lg mb-2">Happy Customers</h3>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              &ldquo;I am happy with my new bathroom and the work done to complete it. The company tried to respond to all of my questions and concerns in a timely fashion.&rdquo;
            </p>
            <p className="text-gray-600 text-sm italic">- Tiffany H.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
