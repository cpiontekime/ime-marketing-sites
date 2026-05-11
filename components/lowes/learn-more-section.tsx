import { Wrench, Shield, ListChecks, ArrowRight } from "lucide-react"

const items = [
  {
    icon: Wrench,
    title: "Authorized Providers",
    description: "Vetted, certified professionals",
    color: "bg-[#fef3c7]",
    iconColor: "text-[#d97706]",
  },
  {
    icon: Shield,
    title: "Authorized Providers",
    description: "Vetted, certified professionals",
    color: "bg-[#dbeafe]",
    iconColor: "text-[#2563eb]",
  },
  {
    icon: ListChecks,
    title: "Authorized Providers",
    description: "Vetted, certified professionals",
    color: "bg-[#d1fae5]",
    iconColor: "text-[#059669]",
  },
]

export function LowesLearnMoreSection() {
  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center mb-8">
          <div className="flex-1 h-px bg-border" />
          <span className="px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Learn More
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-5 border border-border flex items-center gap-4 cursor-pointer hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 rounded-full ${item.color} flex items-center justify-center flex-shrink-0`}
              >
                <item.icon className={`w-5 h-5 ${item.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>
              <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
