import React from 'react'

const LOCATION_EMOJIS = {
  bay: '🌊', gulf: '🌊', ocean: '🌊', sea: '🌊', beach: '🏖️',
  island: '🏝️', reef: '🐠', cave: '🪨', river: '🏞️', lake: '💧',
  sunset: '🌅', night: '🌙', sunrise: '🌄', mangrove: '🌿',
}

function getLocationIcon(location) {
  const lower = location.toLowerCase()
  for (const [key, emoji] of Object.entries(LOCATION_EMOJIS)) {
    if (lower.includes(key)) return emoji
  }
  return '⚓'
}

function formatPrice(price) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(price)
}

export default function TourCard({ tour, style }) {
  return (
    <article
      className="card group cursor-pointer"
      style={style}
    >
      {/* Header band */}
      <div className="h-2 bg-gradient-to-r from-ocean-500 via-sand-400 to-ocean-400 opacity-80" />

      <div className="p-6">
        {/* Icon + Location */}
        <div className="flex items-start justify-between mb-4">
          <span
            className="text-3xl animate-bob"
            role="img"
            aria-label={tour.location}
          >
            {getLocationIcon(tour.location)}
          </span>
          <span className="tag">
            📍 {tour.location}
          </span>
        </div>

        {/* Tour name */}
        <h3 className="font-display text-xl font-semibold text-white mb-1 leading-snug group-hover:text-sand-200 transition-colors duration-200">
          {tour.name}
        </h3>

        {/* Divider */}
        <div className="my-4 border-t border-ocean-700/50" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-ocean-400 text-xs uppercase tracking-widest mb-0.5">Per person</p>
            <p className="font-display text-2xl font-bold text-sand-300">
              {formatPrice(tour.price)}
            </p>
          </div>

          <button
            className="flex items-center gap-2 px-4 py-2 rounded-xl
                       bg-ocean-700/50 hover:bg-ocean-600/60
                       text-ocean-200 hover:text-white text-sm font-medium
                       border border-ocean-600/40 hover:border-ocean-400/60
                       transition-all duration-200 group-hover:bg-sand-400/10
                       group-hover:border-sand-400/30 group-hover:text-sand-200"
          >
            Book now
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ID badge */}
        <p className="mt-3 text-ocean-600 text-xs font-mono">
          tour #{String(tour.id).padStart(4, '0')}
        </p>
      </div>
    </article>
  )
}
