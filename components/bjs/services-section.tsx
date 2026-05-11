import Image from "next/image"
import { Check } from "lucide-react"

const projects = [
  {
    title: "Interior Projects",
    image: "/images/bjs-interior.jpg",
    items: ["BATH", "COUNTERTOPS", "CABINET REFACING", "FLOORING", "AND MORE"],
    gradient: "from-[#4a4a4a]/90 to-[#4a4a4a]/70",
  },
  {
    title: "Exterior Projects",
    image: "/images/bjs-exterior.jpg",
    items: ["WINDOWS", "SHEDS", "ROOFING", "SIDING", "AND MORE"],
    gradient: "from-[#4a4a4a]/90 to-[#4a4a4a]/70",
  },
  {
    title: "Energy Savers",
    image: "/images/bjs-energy.jpg",
    items: ["GENERATORS", "HVAC", "INSULATION", "SOLAR", "AND MORE"],
    gradient: "from-[#2d4a3e]/90 to-[#2d4a3e]/70",
  },
]

export function BJsServicesSection() {
  return (
    <section className="w-full py-6 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${project.gradient}`} />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-5 flex flex-col">
                  {/* Title with underline */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {project.title}
                    </h3>
                    <div className="w-full h-0.5 bg-[#c41230]" />
                  </div>
                  
                  {/* Checklist */}
                  <ul className="space-y-1 flex-1">
                    {project.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-white text-sm">
                        <Check className="w-4 h-4 text-white flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Button */}
                  <button className="mt-4 bg-[#c41230] hover:bg-[#a30f28] text-white px-4 py-2 rounded text-sm font-medium transition-colors w-fit">
                    LEARN MORE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
