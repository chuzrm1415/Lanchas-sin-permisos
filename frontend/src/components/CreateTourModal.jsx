import React, { useState, useEffect, useRef } from 'react'
import { createTour } from '../services/toursApi'

const INITIAL_FORM = { name: '', location: '', price: '' }

export default function CreateTourModal({ onClose, onCreated }) {
  const [form, setForm] = useState(INITIAL_FORM)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const modalRef = useRef(null)
  const firstInputRef = useRef(null)

  // Focus first input on open
  useEffect(() => {
    firstInputRef.current?.focus()
  }, [])

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    setError(null)
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.location.trim() || !form.price) {
      setError('All fields are required.')
      return
    }
    if (isNaN(parseFloat(form.price)) || parseFloat(form.price) < 0) {
      setError('Price must be a valid non-negative number.')
      return
    }

    setLoading(true)
    setError(null)
    try {
      const created = await createTour(form)
      onCreated(created)
      onClose()
    } catch (err) {
      setError(err.message || 'Failed to create tour. Is the Tours Service running on port 8081?')
    } finally {
      setLoading(false)
    }
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) onClose()
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4
                 bg-ocean-950/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className="w-full max-w-md glass-panel p-8 shadow-2xl shadow-ocean-950/80
                   animate-fade-up"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2
              id="modal-title"
              className="font-display text-2xl font-bold text-white"
            >
              List a New Tour
            </h2>
            <p className="text-ocean-400 text-sm mt-1">
              Share your route with the community
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-ocean-400 hover:text-white
                       hover:bg-ocean-700/60 transition-all duration-200"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 px-4 py-3 rounded-xl bg-coral-600/20 border border-coral-600/40 text-coral-400 text-sm">
            ⚠️ {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} noValidate>
          <div className="space-y-5">
            {/* Tour Name */}
            <div>
              <label htmlFor="name" className="label">
                Tour Name
              </label>
              <input
                ref={firstInputRef}
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="e.g. Sunset Boat Tour"
                className="input-field"
                disabled={loading}
                autoComplete="off"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="label">
                Location
              </label>
              <input
                id="location"
                name="location"
                type="text"
                value={form.location}
                onChange={handleChange}
                placeholder="e.g. Gulf Bay, Caribbean Coast"
                className="input-field"
                disabled={loading}
                autoComplete="off"
              />
            </div>

            {/* Price */}
            <div>
              <label htmlFor="price" className="label">
                Price per Person (USD)
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ocean-400 font-mono text-sm">
                  $
                </span>
                <input
                  id="price"
                  name="price"
                  type="number"
                  step="0.01"
                  min="0"
                  value={form.price}
                  onChange={handleChange}
                  placeholder="50.00"
                  className="input-field pl-8"
                  disabled={loading}
                />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-3 mt-8">
            <button
              type="button"
              onClick={onClose}
              className="btn-ghost flex-1"
              disabled={loading}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary flex-1 flex items-center justify-center gap-2"
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Publishing…
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Publish Tour
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
