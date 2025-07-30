import React, { useState } from 'react'
import { toast } from 'react-toastify'

export default function CancelByName({ onCancel }) {
  const [name, setName] = useState('')
  const handle = () => {
    if (!name.trim()) {
      toast.warn('Escribe el nombre del evento a cancelar')
      return
    }
    onCancel(name.trim())
    toast.success(`Evento “${name.trim()}” cancelado`)
    setName('')
  }
  return (
    <div className="flex items-center gap-2">
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="Nombre a cancelar"
        className="border p-1 rounded"
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
