import React from 'react'

export default function Header({ onOpenCreate }) {
  return (
    <header className="sticky top-0 z-40 border-b border-ocean-800/60 backdrop-blur-md bg-ocean-950/70">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-sand-400 to-ocean-400
                          flex items-center justify-center shadow-lg shadow-ocean-900/60">
            <span className="text-lg">⚓</span>
          </div>
          <div>
            <span className="font-display text-xl font-bold text-white tracking-tight">
              Marina
            </span>
            <span className="hidden sm:inline text-ocean-500 text-sm ml-2 font-body">
              Local Boat Tours
            </span>
          </div>
        </div>

        {/* Nav */}
        <nav className="flex items-center gap-4">
          <a
            href="#tours"
            className="text-ocean-300 hover:text-white text-sm font-medium
                       transition-colors duration-200 hidden sm:block"
          >
            Browse Tours
          </a>
          <button
            onClick={onOpenCreate}
            className="btn-primary text-sm py-2 px-5 flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
            </svg>
            List a Tour
          </button>
        </nav>
      </div>
    </header>
  )
}
