import React, { useState } from 'react'
import { toast } from 'react-toastify'


export default function CancelByName({ cancel, afterCancel }) {
  const [name, setName] = useState('')

  const handle = () => {
    const trimmed = name.trim()
    if (!trimmed) return

    const removed = cancel(trimmed)     
    if (removed === false) {
      toast.warn(`No existe el evento «${trimmed}»`)
    } else {
      toast.success(`Evento «${trimmed}» cancelado`)
      afterCancel?.(trimmed)              
    }
    setName('')                           
  }

  const handleEnter = e => {
    if (e.key === 'Enter') handle()
  }

  return (
    <div className="flex items-center gap-2">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        onKeyDown={handleEnter}
        placeholder="Nombre a cancelar"
        className="border p-1 rounded flex-1"
      />
      <button
        onClick={handle}
        className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
      >
        Cancelar evento
      </button>
    </div>
  )
}
