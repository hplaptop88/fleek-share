"use client";

import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 transition-all duration-300">
      <div className="container-base flex h-16 md:h-20 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center">
            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 2a1 1 0 011-1h12a1 1 0 011 1v2h2a1 1 0 011 1v12a1 1 0 01-1 1H2a1 1 0 01-1-1V5a1 1 0 011-1h2V2zm10 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <span className="hidden sm:inline text-xl font-bold text-gray-900">FleekShare</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors">
            How It Works
          </a>
          <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors">
            Help
          </a>
        </nav>

        {/* CTA Button */}
        <button className="hidden md:inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-2 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-95">
          Upload Now
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
        >
          {mobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white animate-slide-down">
          <nav className="flex flex-col gap-3 p-4">
            <a href="#features" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">
              How It Works
            </a>
            <a href="#" className="text-gray-700 hover:text-emerald-600 transition-colors py-2">
              Help
            </a>
            <button className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 hover:shadow-lg active:scale-95 mt-2">
              Upload Now
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
