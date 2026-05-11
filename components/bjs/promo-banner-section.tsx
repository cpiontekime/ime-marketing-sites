import Image from "next/image"

export function BJsPromoBannerSection() {
  return (
    <section className="w-full py-6 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-lg">
          <div className="flex flex-col md:flex-row">
            {/* Image Side */}
            <div className="relative w-full md:w-1/3 aspect-[4/3] md:aspect-auto">
              <Image
                src="/images/bjs-exterior.jpg"
                alt="Beautiful home exterior"
                fill
                className="object-cover"
              />
            </div>
            {/* Content Side */}
            <div className="flex-1 bg-[#4a4a4a] p-6 md:p-8 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Kick-start Your Exteriors Project<br />
                with Additional Savings.<sup className="text-sm">*</sup>
              </h2>
              <p className="text-white/90 text-sm uppercase tracking-wide mb-4">
                Schedule your free estimate today to get started.
              </p>
              <div className="flex items-center justify-between">
                <button className="bg-[#c41230] hover:bg-[#a30f28] text-white px-6 py-2 rounded text-sm font-medium transition-colors">
                  Get Started
                </button>
                <span className="text-white/60 text-xs">*See terms and conditions page for details.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
