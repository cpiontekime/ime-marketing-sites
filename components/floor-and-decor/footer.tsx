import Link from "next/link"

const footerLinks = {
  "OUR COMPANY": [
    { label: "Join Our Network", href: "#" },
  ],
  "HOW IT WORKS": [
    { label: "Easy as 1-2-3", href: "#" },
    { label: "Why We're Different", href: "#" },
    { label: "Authorized Contractors", href: "#" },
    { label: "Customer Pledge", href: "#" },
    { label: "Preparing for Your Project", href: "#" },
  ],
  "PRODUCTS": [
    { label: "Bath Remodel", href: "/floor-and-decor/products/bath-remodel" },
    { label: "Bathroom Vanities", href: "/floor-and-decor/products/bathroom-vanities" },
    { label: "Countertops", href: "/floor-and-decor/products/countertops" },
    { label: "Decks & Pavers", href: "#" },
    { label: "Faucets/Shower Heads", href: "#" },
    { label: "Flooring", href: "#" },
    { label: "Shop Floor & Decor", href: "#" },
    { label: "Shower Doors", href: "#" },
    { label: "Sinks", href: "#" },
    { label: "XL Slabs", href: "#" },
  ],
  "HELPFUL LINKS": [
    { label: "Accessibility Statement", href: "#" },
    { label: "Terms and Conditions", href: "#" },
  ],
}

export function FloorDecorFooter() {
  return (
    <footer className="bg-[#f5f5f5] border-t border-gray-200">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-gray-600 hover:text-[#0066cc] transition-colors flex items-center"
                    >
                      <span className="text-gray-400 mr-1">&gt;</span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-300 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <p className="text-sm font-semibold text-gray-900">
              Call Us <span className="text-[#0066cc]">877-477-1017</span>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-gray-500">
            <div className="flex flex-wrap items-center gap-1">
              <span>&copy; 2014-2026 Powered by</span>
              <Link href="#" className="text-[#0066cc] hover:underline">
                Installation Made Easy, Inc.
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#0066cc] transition-colors">
                Privacy Policy & Licensing
              </Link>
              <span>|</span>
              <Link href="#" className="hover:text-[#0066cc] transition-colors">
                Your California Privacy Choices
              </Link>
              <span>|</span>
              <span>2.94.0.0202</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
