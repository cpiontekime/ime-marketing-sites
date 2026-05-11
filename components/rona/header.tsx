import Link from "next/link"
import { ChevronDown, User } from "lucide-react"

interface RonaHeaderProps {
  lang?: "en" | "fr"
}

const translations = {
  en: {
    getItInstalled: "Get It Installed",
    products: "PRODUCTS",
    howItWorks: "HOW IT WORKS",
    freeEstimate: "FREE ESTIMATE",
    signIn: "SIGN IN",
  },
  fr: {
    getItInstalled: "Faites Installer",
    products: "PRODUITS",
    howItWorks: "COMMENT ÇA MARCHE",
    freeEstimate: "ESTIMATION GRATUITE",
    signIn: "SE CONNECTER",
  },
}

export function RonaHeader({ lang = "en" }: RonaHeaderProps) {
  const t = translations[lang]
  const basePath = lang === "fr" ? "/rona/fr" : "/rona"
  const togglePath = lang === "fr" ? "/rona" : "/rona/fr"
  const toggleLabel = lang === "fr" ? "EN" : "FR"

  return (
    <header className="sticky top-0 z-50 w-full bg-[#1a2744]">
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={basePath} className="flex items-center gap-3">
          <span className="text-xl font-bold text-white tracking-wide">RONA</span>
          <div className="flex items-center gap-1 bg-[#c9a227] px-2 py-1 rounded">
            <svg 
              className="w-4 h-4 text-[#1a2744]" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" 
              />
            </svg>
            <span className="text-[10px] font-bold text-[#1a2744] uppercase tracking-wider">
              {t.getItInstalled}
            </span>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4 md:gap-6">
          <button className="hidden md:flex items-center gap-1 text-sm text-white/90 hover:text-white transition-colors">
            {t.products}
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="hidden md:flex items-center gap-1 text-sm text-white/90 hover:text-white transition-colors">
            {t.howItWorks}
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="hidden sm:block text-sm font-medium text-white/90 hover:text-white transition-colors">
            {t.freeEstimate}
          </button>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded border border-white/30 text-sm text-white hover:bg-white/10 transition-colors">
            <User className="h-4 w-4" />
            <span className="hidden sm:inline">{t.signIn}</span>
          </button>
          
          {/* Language Toggle */}
          <Link 
            href={togglePath}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 text-sm font-semibold text-white hover:bg-white/20 transition-colors"
          >
            {toggleLabel}
          </Link>
        </nav>
      </div>
    </header>
  )
}
