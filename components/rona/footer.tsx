import { Link2, Phone } from "lucide-react"

interface RonaFooterProps {
  lang?: "en" | "fr"
}

const translations = {
  en: {
    helpfulLinks: "Helpful Links",
    siteMap: "Site Map",
    adobeReader: "Adobe Reader",
    accessibility: "Accessibility Statement",
    callUs: "Call Us",
    privacyPolicy: "Privacy Policy & Licensing",
    californiaPrivacy: "California Privacy Policy",
    poweredBy: "Powered by",
    companyName: "Installation Made Easy, Inc.",
  },
  fr: {
    helpfulLinks: "Liens Utiles",
    siteMap: "Plan du site",
    adobeReader: "Adobe Lecteur",
    accessibility: "Déclaration d'accessibilité",
    callUs: "Appelez-nous",
    privacyPolicy: "Politique de confidentialité et licences",
    californiaPrivacy: "Politique de confidentialité de la Californie",
    poweredBy: "Propulsé par",
    companyName: "Installation simplifiée, Inc.",
  },
}

export function RonaFooter({ lang = "en" }: RonaFooterProps) {
  const t = translations[lang]

  return (
    <footer className="bg-[#1a2744] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Helpful Links */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Link2 className="w-4 h-4" />
              <span className="text-xs font-semibold uppercase tracking-wider">
                {t.helpfulLinks}
              </span>
            </div>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {t.siteMap}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {t.adobeReader}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-white/80 hover:text-white transition-colors"
                >
                  {t.accessibility}
                </a>
              </li>
            </ul>
          </div>

          {/* Call Us */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-[#c9a227] flex items-center justify-center">
              <Phone className="w-5 h-5 text-[#1a2744]" />
            </div>
            <div>
              <p className="text-xs text-[#c9a227]">{t.callUs}</p>
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
                {t.privacyPolicy}
              </a>
              <span className="hidden md:inline">|</span>
              <a href="#" className="hover:text-white transition-colors">
                {t.californiaPrivacy}
              </a>
              <span className="hidden md:inline">|</span>
              <span>CMS_01 2.83.20003</span>
            </div>
            <div className="flex items-center gap-1">
              <span>&copy; 2014-2025 {t.poweredBy}</span>
              <a
                href="#"
                className="text-[#c9a227] hover:text-[#dbb833] transition-colors"
              >
                {t.companyName}
              </a>
            </div>
            <span>UAT_02 2.79.0159</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
