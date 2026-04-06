import React, { useState, useEffect, useCallback } from 'react'
import { fetchTours } from './services/toursApi'
import Header from './components/Header'
import Hero from './components/Hero'
import ToursGrid from './components/ToursGrid'
import CreateTourModal from './components/CreateTourModal'
import ServiceStatus from './components/ServiceStatus'

export default function App() {
  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [serviceStatus, setServiceStatus] = useState('loading')
  const [modalOpen, setModalOpen] = useState(false)

  const loadTours = useCallback(async () => {
    setLoading(true)
    setError(null)
    setServiceStatus('loading')
    try {
      const data = await fetchTours()
      setTours(data)
      setServiceStatus('connected')
    } catch (err) {
      setError(err.message)
      setServiceStatus('error')
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    loadTours()
  }, [loadTours])

  function handleTourCreated(newTour) {
    setTours(prev => [newTour, ...prev])
    setServiceStatus('connected')
  }

  return (
    <div className="min-h-screen">
      <Header onOpenCreate={() => setModalOpen(true)} />

      <main>
        <Hero
          tourCount={tours.length}
          onOpenCreate={() => setModalOpen(true)}
        />

        {/* Status bar */}
        <div className="max-w-6xl mx-auto px-6 mb-8">
          <ServiceStatus status={serviceStatus} />
        </div>

        <ToursGrid
          tours={tours}
          loading={loading}
          error={error}
          onOpenCreate={() => setModalOpen(true)}
          onRetry={loadTours}
        />
      </main>

      {/* Footer */}
      <footer className="border-t border-ocean-800/40 py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row
                        items-center justify-between gap-4 text-ocean-600 text-sm">
          <div className="flex items-center gap-2">
            <span>⚓</span>
            <span className="font-display font-semibold text-ocean-500">Marina</span>
            <span>— community boat tours marketplace</span>
          </div>
          <div className="font-mono text-xs flex gap-4">
            <span>tours-service :8081</span>
            <span className="text-ocean-700">|</span>
            <span>frontend :5173</span>
          </div>
        </div>
      </footer>

      {/* Modal */}
      {modalOpen && (
        <CreateTourModal
          onClose={() => setModalOpen(false)}
          onCreated={handleTourCreated}
        />
      )}
    </div>
  )
}
