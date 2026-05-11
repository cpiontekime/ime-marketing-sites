import { Link2, Phone } from "lucide-react"

export function NTEFooter() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Helpful Links */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link2 className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                Helpful Links
              </span>
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Site Map
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Adobe Reader
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>

          {/* Call Us */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[#2d4a6f] flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs text-white/80">Call Us</p>
              <p className="text-lg font-bold">1-866-910-4833</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/70">
            <div className="flex flex-wrap items-center gap-2">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy & Licensing
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-white transition-colors">
                California Privacy Policy
              </a>
              <span className="hidden md:inline">|</span>
              <span>CMS_01 2.83.000</span>
            </div>
            <div className="flex items-center gap-1">
              <span>&copy; 2014-2025 Powered by</span>
              <a
                href="#"
                className="text-[#8CBE44] hover:text-[#9dcc52] transition-colors"
              >
                Installation Made Easy, Inc.
              </a>
            </div>
            <span>UAT_02 2.79.0038</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
