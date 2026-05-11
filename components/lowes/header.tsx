import Image from "next/image"
import Link from "next/link"
import { ChevronDown, User } from "lucide-react"

export function LowesHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/lowes" className="flex-shrink-0">
          <Image
            src="/images/lowes-logo.png"
            alt="Lowe's - Powered by Installation Made Easy, Inc."
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <button className="hidden md:flex items-center gap-1 text-sm text-foreground hover:text-[#004990] transition-colors">
            Products
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="hidden md:flex items-center gap-1 text-sm text-foreground hover:text-[#004990] transition-colors">
            How it Works
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="hidden sm:block text-sm font-medium text-foreground hover:text-[#004990] transition-colors">
            Free Estimate
          </button>
          <button className="flex items-center gap-2 text-sm text-foreground hover:text-[#004990] transition-colors">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Sign In</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
