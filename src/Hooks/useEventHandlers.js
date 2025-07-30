import { useState, useCallback, useMemo } from 'react'
import { useEvents } from './useEvents'

export function useEventHandlers() {
  const { events, register, cancel, query } = useEvents()
  const [range, setRange] = useState({ start: '00:00', end: '23:59' })

  const filtered = useMemo(
    () => query(range.start, range.end),
    [events, range, query]
  )

   const showAll = useCallback(() => {
    setRange({ start:'00:00', end:'23:59' })
  }, [])

  
  const smartCancel = useCallback(name => {
    cancel(name)
  }, [cancel])

  return {
    events,
    register,
    cancel: smartCancel,
    range,
    showAll,
    setRange,
    filtered,
  }
}
