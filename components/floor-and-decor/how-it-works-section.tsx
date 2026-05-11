import { CalendarCheck, ShoppingCart, Armchair } from "lucide-react"

const steps = [
  {
    icon: CalendarCheck,
    title: "Schedule your Measure & Estimate",
    color: "bg-[#1a5f7a]",
  },
  {
    icon: ShoppingCart,
    title: "Purchase your Materials & Accessories",
    color: "bg-[#1a5f7a]",
  },
  {
    icon: Armchair,
    title: "Sit Back, Relax & Leave it to the Pros",
    color: "bg-[#1a5f7a]",
  },
]

export function FloorDecorHowItWorksSection() {
  return (
    <section className="w-full py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Upgrading your home is as easy as 1-2-3.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className={`w-20 h-20 rounded-full ${step.color} flex items-center justify-center mb-4`}>
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-base font-semibold text-gray-900 max-w-[200px]">
                {step.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
