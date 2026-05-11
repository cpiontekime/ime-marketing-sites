"use client"

import { ChevronRight, Pause } from "lucide-react"
import { useState } from "react"

const links = [
  "WHY WE'RE DIFFERENT",
  "AUTHORIZED CONTRACTORS",
  "CUSTOMER PLEDGE",
  "SCHEDULE MEASURE & ESTIMATE",
]

const testimonials = [
  {
    quote: "What a pleasant experience. From purchasing my materials to the installation. Everyone was a true professional. I plan to be a return customer within the coming year.",
    name: "M. Johnson",
    location: "Fort Worth TX",
  },
  {
    quote: "The whole process was seamless from start to finish. I highly recommend their services to anyone looking for quality installation work.",
    name: "S. Williams",
    location: "Dallas TX",
  },
]

export function FloorDecorLearnMoreSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Learn More - Green sidebar */}
          <div className="w-full md:w-72 bg-[#00875a] rounded-lg p-6 flex-shrink-0">
            <h3 className="text-xl font-bold text-white mb-6">Learn More</h3>
            <div className="space-y-3">
              {links.map((link, index) => (
                <button
                  key={index}
                  className="w-full flex items-center justify-between px-4 py-3 bg-white rounded text-sm font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
                >
                  {link}
                  <ChevronRight className="w-4 h-4 text-gray-500" />
                </button>
              ))}
            </div>
          </div>

          {/* Happy Customers - Testimonials */}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-[#00875a] mb-4">Happy Customers</h3>
            <div className="bg-white">
              <p className="text-gray-700 mb-4 leading-relaxed">
                &ldquo;{testimonials[currentTestimonial].quote}&rdquo;
              </p>
              <p className="text-sm text-gray-600 text-right">
                - {testimonials[currentTestimonial].name}, {testimonials[currentTestimonial].location}
              </p>
            </div>
            
            {/* Pagination dots */}
            <div className="flex items-center justify-end gap-3 mt-6">
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-colors ${
                      index === currentTestimonial ? "bg-[#1a5f7a]" : "bg-gray-300"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              <button className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                <Pause className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
