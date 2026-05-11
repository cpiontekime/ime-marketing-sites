"use client"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface RonaTestimonialsSectionProps {
  lang?: "en" | "fr"
}

const translations = {
  en: {
    label: "Testimonials",
    title: "Happy Customers",
    subtitle: "Real reviews from real homeowners who trusted Ace Hardware with their installation projects.",
    testimonials: [
      {
        quote:
          "What a pleasant experience. From purchasing my materials to the installation. Everyone was a true professional. I plan to be a return customer within the coming year.",
        name: "M. Johnson",
        location: "Fort Worth, TX",
        initial: "M",
      },
      {
        quote:
          "Everyone was a pleasure to work with and the project was completed in a timely and professional manner.",
        name: "D. Payne",
        location: "Green Valley, IL",
        initial: "D",
      },
    ],
  },
  fr: {
    label: "Témoignages",
    title: "Clients satisfaits",
    subtitle: "De vrais avis de vrais propriétaires qui ont fait confiance à Ace Hardware pour leurs projets d'installation.",
    testimonials: [
      {
        quote:
          "Quelle expérience agréable. De l'achat de mon matériel à l'installation. Tout le monde était un vrai professionnel. Je prévois d'être un client fidèle au cours de l'année à venir.",
        name: "M. Johnson",
        location: "Fort Worth, Texas",
        initial: "M",
      },
      {
        quote:
          "C'était un plaisir de travailler avec tout le monde et le projet a été réalisé dans les délais et de manière professionnelle.",
        name: "D. Payne",
        location: "Green Valley, Illinois",
        initial: "D",
      },
    ],
  },
}

export function RonaTestimonialsSection({ lang = "en" }: RonaTestimonialsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const t = translations[lang]

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? t.testimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === t.testimonials.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-[#1a2744] uppercase tracking-widest mb-2">
          {t.label}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {t.title}
        </h2>
        <p className="text-muted-foreground mb-8">
          {t.subtitle}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {t.testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 border border-border"
            >
              <p className="text-foreground mb-6 leading-relaxed">
                &ldquo;{testimonial.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1a2744] flex items-center justify-center text-white font-semibold">
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
            aria-label={lang === "fr" ? "Témoignage précédent" : "Previous testimonial"}
          >
            <ChevronLeft className="w-5 h-5 text-muted-foreground" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full border border-border bg-white flex items-center justify-center hover:bg-gray-50 transition-colors"
            aria-label={lang === "fr" ? "Témoignage suivant" : "Next testimonial"}
          >
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </button>
        </div>
      </div>
    </section>
  )
}
