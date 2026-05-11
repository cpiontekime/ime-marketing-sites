"use client"

import Link from "next/link"
import { ChevronDown, User, Phone } from "lucide-react"

export function FloorDecorHeader() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm">
      {/* Top bar */}
      <div className="max-w-7xl mx-auto flex h-14 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo - Installation Made Easy */}
        <Link href="/floor-and-decor" className="flex-shrink-0">
          <div className="flex items-center">
            <svg viewBox="0 0 40 40" className="h-10 w-10 mr-2">
              <rect x="2" y="2" width="36" height="36" rx="4" fill="#1a5f7a" />
              <path d="M8 12 L20 8 L32 12 L32 28 L20 32 L8 28 Z" fill="#4fb5c7" stroke="#1a5f7a" strokeWidth="1" />
              <rect x="14" y="16" width="12" height="10" fill="#1a5f7a" />
              <rect x="18" y="20" width="4" height="6" fill="#4fb5c7" />
            </svg>
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">
                <span className="text-[#4fb5c7]">Installation</span>
              </span>
              <span className="text-sm font-semibold text-[#1a5f7a] leading-tight">Made Easy<sup className="text-[8px]">®</sup></span>
            </div>
          </div>
        </Link>

        {/* Right side - Phone and Sign In */}
        <div className="flex items-center gap-4">
          <a href="tel:8774771017" className="hidden sm:flex items-center gap-1 text-sm text-[#0066cc] hover:underline">
            <span className="text-gray-600">Call Us</span>
            <span className="font-semibold">(877) 477-1017</span>
          </a>
          <button className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            <User className="h-4 w-4" />
            <span>Sign In</span>
          </button>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="border-t border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ul className="flex items-center justify-end gap-1 py-2">
            <li>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0066cc] transition-colors">
                HOW IT WORKS
                <ChevronDown className="w-4 h-4" />
              </button>
            </li>
            <li>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0066cc] transition-colors">
                PRODUCTS
                <ChevronDown className="w-4 h-4" />
              </button>
            </li>
            <li>
              <Link href="#" className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#0066cc] transition-colors">
                MEASURE & ESTIMATE
                <span className="text-[#0066cc]">&gt;</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
