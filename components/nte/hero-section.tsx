import Image from "next/image"

export function NTEHeroSection() {
  return (
    <section className="w-full bg-[#EDEDED]">
      <div className="max-w-4xl mx-auto">
        <div className="relative aspect-[16/9] md:aspect-[2.2/1]">
          <Image
            src="/images/hero-house.jpg"
            alt="Beautiful craftsman style home with gray siding and white trim"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  )
}
