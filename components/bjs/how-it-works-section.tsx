import { CalendarCheck, DollarSign, Truck } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: CalendarCheck,
    title: "Schedule your Free Estimate",
    description:
      "Book a convenient time for our experts to visit your property. We'll assess your needs and provide a detailed, no-obligation quote.",
  },
  {
    number: "02",
    icon: DollarSign,
    title: "Purchase your Materials & Accessories",
    description:
      "Book a convenient time for our experts to visit your property. We'll assess your needs and provide a detailed, no-obligation quote.",
  },
  {
    number: "03",
    icon: Truck,
    title: "Sit Back, Relax & Leave it to the Pros",
    description:
      "Book a convenient time for our experts to visit your property. We'll assess your needs and provide a detailed, no-obligation quote.",
  },
]

export function BJsHowItWorksSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold text-[#c41230] uppercase tracking-wide mb-2">
          How It Works
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
          Updating your home is as easy as 1 - 2 - 3
        </h2>
        <p className="text-muted-foreground mb-8">
          A simple, streamlined process designed to make home improvement hassle free.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.number}
              className="relative bg-white rounded-lg border border-border p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-lg bg-[#fce4e8] flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-[#c41230]" />
                </div>
                <span className="text-4xl font-bold text-gray-200">
                  {step.number}
                </span>
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
