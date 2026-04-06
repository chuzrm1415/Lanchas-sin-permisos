import React from 'react'

/**
 * Shows connection status to each backend microservice.
 */
export default function ServiceStatus({ status }) {
  const services = [
    {
      name: 'Tours Service',
      port: 8081,
      status: status,
    },
  ]

  const colors = {
    connected: 'bg-emerald-400',
    error: 'bg-coral-400',
    loading: 'bg-sand-400 animate-pulse',
  }

  const labels = {
    connected: 'Connected',
    error: 'Offline',
    loading: 'Connecting…',
  }

  return (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg
                    bg-ocean-800/40 border border-ocean-700/30 w-fit">
      {services.map(svc => (
        <div key={svc.name} className="flex items-center gap-2 text-xs">
          <span className={`w-2 h-2 rounded-full ${colors[svc.status]}`} />
          <span className="text-ocean-400 font-mono">{svc.name}</span>
          <span className="text-ocean-600">:{svc.port}</span>
          <span className={`
            font-medium
            ${svc.status === 'connected' ? 'text-emerald-400' : ''}
            ${svc.status === 'error' ? 'text-coral-400' : ''}
            ${svc.status === 'loading' ? 'text-sand-400' : ''}
          `}>
            {labels[svc.status]}
          </span>
        </div>
      ))}
    </div>
  )
}
