import React from 'react'

export default function Hero({ tourCount, onOpenCreate }) {
  return (
    <section className="relative pt-20 pb-16 px-6 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full
                        bg-ocean-500/10 blur-3xl" />
        <div className="absolute top-10 -left-20 w-72 h-72 rounded-full
                        bg-sand-400/5 blur-3xl" />
        {/* Animated wave lines */}
        <svg
          className="absolute bottom-0 left-0 w-full opacity-10"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="rgba(14,127,173,0.8)"
            strokeWidth="1.5"
            d="M0,40 C240,10 480,70 720,40 C960,10 1200,70 1440,40"
          />
          <path
            fill="none"
            stroke="rgba(248,193,42,0.5)"
            strokeWidth="1"
            d="M0,55 C180,25 360,75 720,50 C1080,25 1260,70 1440,55"
          />
        </svg>
      </div>

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                        bg-ocean-800/50 border border-ocean-600/40
                        text-ocean-300 text-sm font-medium mb-8">
          <span className="w-2 h-2 rounded-full bg-sand-400 animate-pulse" />
          Community-powered tours
        </div>

        {/* Headline */}
        <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold
                       text-white leading-tight mb-6">
          Discover the sea{' '}
          <br className="hidden sm:block" />
          <span className="text-gradient italic">with local guides</span>
        </h1>

        {/* Sub */}
        <p className="text-ocean-300 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Browse authentic boat tours crafted by people who know these waters.
          No agencies, no markup — just real guides sharing their coast.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#tours" className="btn-primary text-base px-8 py-3.5 w-full sm:w-auto">
            Explore {tourCount > 0 ? `${tourCount} Tour${tourCount !== 1 ? 's' : ''}` : 'Tours'} →
          </a>
          <button
            onClick={onOpenCreate}
            className="btn-ghost text-base px-8 py-3.5 w-full sm:w-auto"
          >
            I'm a guide — list mine
          </button>
        </div>

        {/* Stats row */}
        {tourCount > 0 && (
          <div className="mt-16 grid grid-cols-3 gap-6 max-w-sm mx-auto">
            {[
              { value: tourCount, label: 'Tours listed' },
              { value: '0%', label: 'Commission' },
              { value: '∞', label: 'Adventures' },
            ].map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-2xl font-bold text-sand-300">{value}</p>
                <p className="text-ocean-400 text-xs mt-1">{label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
