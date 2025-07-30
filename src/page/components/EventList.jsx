import { AnimatePresence } from 'framer-motion'
import EventItem from './EventItem'

export default function EventList({ events, cancel }) {
  return (
    <ul className="border p-4 rounded space-y-2">
      <AnimatePresence>
        {events.length === 0
          ? <li key="empty" 
          className="text-gray-500">No hay eventos.</li>
          : events.map(ev => (
              <EventItem key={ev.name} ev={ev} cancel={cancel} />
            ))}
      </AnimatePresence>
    </ul>
  )
}
