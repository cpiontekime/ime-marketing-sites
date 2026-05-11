import Link from "next/link"
import { Building2 } from "lucide-react"

const brands = [
  {
    name: "Lowe's",
    slug: "lowes",
    color: "#004990",
    description: "Home improvement warehouse",
  },
  {
    name: "Sam's Club",
    slug: "sams-club",
    color: "#0060a9",
    description: "Members-only warehouse club",
  },
  {
    name: "Ace Hardware",
    slug: "ace-hardware",
    color: "#d40029",
    description: "The helpful place",
  },
  {
    name: "BJ's",
    slug: "bjs",
    color: "#c41230",
    description: "Wholesale club",
  },
  {
    name: "NTE",
    slug: "nte",
    color: "#1e3a5f",
    description: "National Trade Enterprise",
  },
  {
    name: "Floor & Decor",
    slug: "floor-and-decor",
    color: "#f26522",
    description: "Hard surface flooring",
  },
  {
    name: "RONA",
    slug: "rona",
    color: "#0056a6",
    description: "Home & garden stores",
  },
]

export default function BrandSelectionPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="w-full border-b border-border bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <Building2 className="h-8 w-8 text-foreground" />
            <div>
              <h1 className="text-xl font-bold text-foreground">
                Installation Made Easy
              </h1>
              <p className="text-sm text-muted-foreground">
                Multi-Brand Partner Portal
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Select Your Brand
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Choose a retail partner to view their customized home installation
            services marketing page.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {brands.map((brand) => (
            <Link
              key={brand.slug}
              href={`/${brand.slug}`}
              className="group relative bg-white rounded-xl border border-border p-6 hover:shadow-lg transition-all duration-200 hover:border-transparent"
              style={
                {
                  "--brand-color": brand.color,
                } as React.CSSProperties
              }
            >
              <div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                style={{
                  boxShadow: `0 0 0 2px ${brand.color}`,
                }}
              />
              <div
                className="w-14 h-14 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${brand.color}15` }}
              >
                <span
                  className="text-xl font-bold"
                  style={{ color: brand.color }}
                >
                  {brand.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-1">
                {brand.name}
              </h3>
              <p className="text-sm text-muted-foreground">
                {brand.description}
              </p>
              <div
                className="mt-4 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ color: brand.color }}
              >
                View Marketing Page &rarr;
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="border-t border-border bg-white mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-muted-foreground">
            &copy; 2014-2026 Installation Made Easy, Inc. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
