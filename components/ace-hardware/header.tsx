import Link from "next/link"
import { ChevronDown, User } from "lucide-react"

export function AceHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border">
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/ace-hardware" className="flex-shrink-0 flex flex-col">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#d40029] rounded flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="text-xl font-bold text-[#d40029]">Ace Hardware</span>
          </div>
          <span className="text-[9px] text-muted-foreground mt-0.5">
            Powered by Installation Made Easy, Inc.
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <button className="hidden md:flex items-center gap-1 text-sm text-foreground hover:text-[#d40029] transition-colors">
            Products
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="hidden md:flex items-center gap-1 text-sm text-foreground hover:text-[#d40029] transition-colors">
            How it Works
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="hidden sm:block text-sm font-medium text-foreground hover:text-[#d40029] transition-colors">
            Free Estimate
          </button>
          <button className="flex items-center gap-2 text-sm text-foreground hover:text-[#d40029] transition-colors">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">Sign In</span>
          </button>
        </nav>
      </div>
    </header>
  )
}
