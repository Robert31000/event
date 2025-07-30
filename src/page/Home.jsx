import React, { useState } from 'react'
import EventForm    from './components/EventForm'
import RangeFilter  from './components/RangeFilter'
import CancelByName from './components/CancelByName'
import EventList    from './components/EventList'
import Footer       from './components/Footer'
import { useEventHandlers } from '../Hooks/useEventHandlers'
import { getOccupancyReport } from '../utils/occupancy'

export default function Home() {
  const h = useEventHandlers()
  const [showReport, setShowReport] = useState(false)
  const report = getOccupancyReport(h.events)

  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Administrador de Eventos</h1>

      <EventForm registerEvent={h.register} />

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setShowReport(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Informe de ocupación
        </button>
      </div>

      <h2 className="text-2xl font-semibold">Consultar eventos</h2>
      <RangeFilter
        range={h.range}
        setRange={h.setRange}
      />

      <CancelByName onCancel={h.cancel} />

      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">Lista de eventos</h2>
        <button
          onClick={h.showAll}
          className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
        >
          Ver todos
        </button>
      </div>
      <EventList events={h.filtered} cancel={h.cancel} />

      <Footer/>

      {showReport && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded p-6 w-80 space-y-4">
            <h3 className="text-xl font-semibold">Ocupación por sala</h3>
            <ul className="space-y-1">
              {report.length === 0 ? (
                <li>No hay eventos.</li>
              ) : (
                report.map(r => (
                  <li key={r.room}>
                    <strong>{r.room}</strong>: {r.minutes} min ({r.hours} h)
                  </li>
                ))
              )}
            </ul>
            <button
              onClick={() => setShowReport(false)}
              className="mt-4 bg-gray-700 text-white px-3 py-1 rounded"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
