import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function RangeFilter({ range, setRange, query, events, setResults }) {
  const [local, setLocal] = useState(range) 

  const handleQuery = () => {
    if (local.end <= local.start) {
      toast.warn('La hora “Hasta” debe ser posterior a “Desde”')
      return
    }
    setRange(local)                           
    const res = query(local.start, local.end)
    setResults(res)
    if (res.length === 0) {
      toast.info('No hay eventos en ese rango')
    }
  }

 
  return (
    <div className="flex flex-wrap items-center gap-2">
      <label className="flex items-center gap-1">
        Desde:
        <input
          type="time"
          value={local.start}
          onChange={e => setLocal(r => ({ ...r, start:e.target.value }))}
          className="border p-1 rounded"
        />
      </label>

      <label className="flex items-center gap-1">
        Hasta:
        <input
          type="time"
          value={local.end}
          onChange={e => setLocal(r => ({ ...r, end:e.target.value }))}
          className="border p-1 rounded"
        />
      </label>

      <button
        onClick={handleQuery}
        className="bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700"
      >
        Consultar
      </button>

   
    </div>
  )
}
