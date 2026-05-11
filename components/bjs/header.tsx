import Link from "next/link"
import { User } from "lucide-react"

export function BJsHeader() {
  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Top Bar - Red */}
      <div className="bg-[#c41230]">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4">
          {/* Logo */}
          <Link href="/bjs" className="flex items-center gap-3">
            <div className="flex items-center">
              <div className="bg-white rounded px-2 py-1">
                <span className="text-[#c41230] font-black text-xl">BJ&apos;s</span>
              </div>
              <div className="ml-3">
                <div className="text-white font-bold text-lg leading-tight">HOME</div>
                <div className="text-white font-bold text-lg leading-tight">IMPROVEMENT<sup className="text-xs">®</sup></div>
                <div className="text-[#ffd700] text-xs">by Installation Made Easy®</div>
              </div>
            </div>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-6">
            <div className="hidden sm:block text-white text-sm">
              Call Us <span className="font-bold">877-BJS-4747</span>
            </div>
            <button className="flex items-center gap-2 bg-white text-gray-800 px-4 py-2 rounded text-sm font-medium hover:bg-gray-100 transition-colors">
              <User className="h-4 w-4" />
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Bar - White */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-center gap-8 py-3">
            <a href="#" className="text-sm text-gray-800 hover:text-[#c41230] transition-colors">
              Interiors
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-[#c41230] transition-colors">
              Exteriors
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-[#c41230] transition-colors">
              Energy Savers
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-[#c41230] transition-colors">
              How It Works
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-[#c41230] transition-colors">
              Free Estimate
            </a>
            <a href="#" className="text-sm text-gray-800 hover:text-[#c41230] transition-colors">
              Back to BJs.com
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
