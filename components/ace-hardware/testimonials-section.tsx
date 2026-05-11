"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    quote:
      "Everyone was a pleasure to work with and the project was completed in a timely and professional manner.",
    name: "D. Payne",
    location: "Green Valley, IL",
    initial: "D",
    color: "bg-[#d40029]",
  },
  {
    quote:
      "Everyone was a pleasure to work with and the project was completed in a timely and professional manner.",
    name: "D. Payne",
    location: "Green Valley, IL",
    initial: "M",
    color: "bg-[#7c3aed]",
  },
]

export function AceTestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-[#d40029] uppercase tracking-wide mb-2">
          Testimonials
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Happy Customers
        </h2>
        <p className="text-muted-foreground mb-8">
          Real reviews from real homeowners who trusted Ace Hardware with their installation projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-border"
            >
              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center text-white font-semibold`}
                >
                  {testimonial.initial}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-2">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}
