import { useState, useEffect, useCallback } from 'react'
import { toast } from 'react-toastify'

const STORAGE_KEY = 'salaeventos_events'

export function useEvents() {
  const [events, setEvents] = useState([])

  // Carga inicial desde localStorage
  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    setEvents(raw ? JSON.parse(raw) : [])
  }, [])

  // Persistencia en cada cambio
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(events))
  }, [events])

  
  const register = useCallback(({ name, room, start, end }) => {
    const toMin = hhmm => {
      const [h, m] = hhmm.split(':').map(Number)
      return h * 60 + m
    }

    let ok = true
    let error = ''

    setEvents(prev => {
      const s = toMin(start)
      const e = toMin(end)

      // 1) fin ≤ inicio
      if (e <= s) {
        ok = false
        error = 'Fin ≤ inicio'
        return prev
      }

      // 2) solapamiento en la misma sala

      const overlap = prev.some(ev =>
        ev.room === room &&
        !(toMin(ev.end) <= s || toMin(ev.start) >= e)
      )
      if (overlap) {
        ok = false
        error = toast.error('Hay un evento en ese horario')
        return prev
      }

      // 3) todo ok, añadimos
      return [...prev, { name, room, start, end }]
    })

    return ok ? { ok } : { ok: false,  }
  }, []) 

  const cancel = useCallback(
    name => setEvents(prev => prev.filter(ev => ev.name !== name)),
    []
  )

  const query = useCallback(
    (start, end) => {
      const toMin = hhmm => {
        const [h, m] = hhmm.split(':').map(Number)
        return h * 60 + m
      }
      const s = toMin(start)
      const e = toMin(end)
      return events.filter(ev => !(toMin(ev.end) <= s || toMin(ev.start) >= e))
    },
    [events]
  )

  return { events, register, cancel, query }
}
