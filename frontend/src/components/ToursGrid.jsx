import React from 'react'
import TourCard from './TourCard'

function SkeletonCard() {
  return (
    <div className="card">
      <div className="h-2 shimmer-bg" />
      <div className="p-6 space-y-4">
        <div className="flex justify-between">
          <div className="w-10 h-10 rounded-xl shimmer-bg" />
          <div className="w-28 h-6 rounded-full shimmer-bg" />
        </div>
        <div className="w-3/4 h-6 rounded-lg shimmer-bg" />
        <div className="w-1/2 h-4 rounded-lg shimmer-bg" />
        <div className="border-t border-ocean-700/50 pt-4 flex justify-between items-center">
          <div className="w-20 h-8 rounded-lg shimmer-bg" />
          <div className="w-24 h-9 rounded-xl shimmer-bg" />
        </div>
      </div>
    </div>
  )
}

function EmptyState({ onOpenCreate }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center
                    py-24 text-center">
      <div className="text-6xl mb-6 animate-bob">⛵</div>
      <h3 className="font-display text-2xl font-semibold text-white mb-3">
        No tours yet
      </h3>
      <p className="text-ocean-400 max-w-sm mb-8">
        Be the first local guide to list a tour. Share your favourite route with the community.
      </p>
      <button onClick={onOpenCreate} className="btn-primary">
        + List the first tour
      </button>
    </div>
  )
}

function ErrorState({ message, onRetry }) {
  return (
    <div className="col-span-full flex flex-col items-center justify-center
                    py-24 text-center">
      <div className="text-5xl mb-6">🔌</div>
      <h3 className="font-display text-xl font-semibold text-white mb-2">
        Cannot reach Tours Service
      </h3>
      <p className="text-ocean-400 max-w-md mb-2 text-sm">
        Make sure the Tours Service is running on{' '}
        <code className="font-mono text-sand-400 bg-ocean-800/50 px-1.5 py-0.5 rounded">
          http://localhost:8081
        </code>
      </p>
      <p className="text-ocean-600 text-xs mb-8 font-mono">
        cd tours-service && ./gradlew run
      </p>
      <button onClick={onRetry} className="btn-ghost">
        Retry connection
      </button>
    </div>
  )
}

export default function ToursGrid({ tours, loading, error, onOpenCreate, onRetry }) {
  return (
    <section id="tours" className="max-w-6xl mx-auto px-6 pb-24">
      {/* Section header */}
      <div className="flex items-end justify-between mb-8">
        <div>
          <h2 className="font-display text-3xl font-bold text-white">
            Available Tours
          </h2>
          {!loading && !error && (
            <p className="text-ocean-400 text-sm mt-1">
              {tours.length === 0
                ? 'No tours listed yet'
                : `${tours.length} tour${tours.length !== 1 ? 's' : ''} from local guides`}
            </p>
          )}
        </div>

        {!loading && !error && tours.length > 0 && (
          <button
            onClick={onOpenCreate}
            className="btn-ghost text-sm py-2 hidden sm:flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Add yours
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {loading && Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} />
        ))}

        {!loading && error && (
          <ErrorState message={error} onRetry={onRetry} />
        )}

        {!loading && !error && tours.length === 0 && (
          <EmptyState onOpenCreate={onOpenCreate} />
        )}

        {!loading && !error && tours.map((tour, idx) => (
          <TourCard
            key={tour.id}
            tour={tour}
            style={{ animationDelay: `${idx * 80}ms`, opacity: 0, animation: `fadeUp 0.5s ease-out ${idx * 80}ms forwards` }}
          />
        ))}
      </div>
    </section>
  )
}
