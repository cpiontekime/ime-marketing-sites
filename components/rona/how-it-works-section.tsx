interface RonaHowItWorksSectionProps {
  lang?: "en" | "fr"
}

const translations = {
  en: {
    label: "How It Works",
    title: "Updating your home is as easy as 1 - 2 - 3",
    subtitle: "A simple, streamlined process designed to make home improvement hasslefree.",
    steps: [
      {
        number: "01",
        title: "Schedule your Free Estimate",
        description:
          "Book a convenient time for our experts to visit your property. We'll assess your needs and provide a detailed, no-obligation quote.",
      },
      {
        number: "02",
        title: "Purchase your Materials & Accessories",
        description:
          "Book a convenient time for our experts to visit your property. We'll assess your needs and provide a detailed, no-obligation quote.",
      },
      {
        number: "03",
        title: "Sit Back, Relax & Leave it to the Pros",
        description:
          "Our skilled professionals handle everything from start to finish. You can trust us to deliver exceptional results while you focus on what matters.",
      },
    ],
  },
  fr: {
    label: "Comment Ça Marche",
    title: "Mettre à jour votre maison est aussi simple que 1 – 2 – 3",
    subtitle: "Un processus simple et rationalisé conçu pour faciliter l'amélioration de l'habitat.",
    steps: [
      {
        number: "01",
        title: "Planifiez votre estimation gratuite",
        description:
          "Réservez un moment opportun pour que nos experts visitent votre propriété. Nous évaluerons vos besoins et vous fournirons un devis détaillé et sans engagement.",
      },
      {
        number: "02",
        title: "Achetez vos matériaux et accessoires",
        description:
          "Réservez un moment opportun pour que nos experts visitent votre propriété. Nous évaluerons vos besoins et vous fournirons un devis détaillé et sans engagement.",
      },
      {
        number: "03",
        title: "Asseyez-vous, détendez-vous et laissez le soin aux pros",
        description:
          "Nos professionnels qualifiés s'occupent de tout du début à la fin. Vous pouvez nous faire confiance pour obtenir des résultats exceptionnels tout en vous concentrant sur ce qui compte.",
      },
    ],
  },
}

export function RonaHowItWorksSection({ lang = "en" }: RonaHowItWorksSectionProps) {
  const t = translations[lang]

  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-[#1a2744] uppercase tracking-widest mb-2">
          {t.label}
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          {t.title}
        </h2>
        <p className="text-muted-foreground mb-10">
          {t.subtitle}
        </p>

        {/* Staggered steps layout */}
        <div className="space-y-8">
          {t.steps.map((step, index) => (
            <div
              key={step.number}
              className="flex items-start gap-4"
              style={{ marginLeft: `${index * 60}px` }}
            >
              {/* Number with yellow left border */}
              <div className="flex items-start gap-3">
                <div className="border-l-4 border-[#c9a227] pl-3">
                  <span className="text-4xl md:text-5xl font-light text-gray-300">
                    {step.number}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="pt-2 max-w-lg">
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
