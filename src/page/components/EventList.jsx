import { AnimatePresence, motion } from 'framer-motion'
import EventItem from './EventItem'

export default function EventList({ events = [], cancel }) {
  return (
    <motion.ul
      layout          
      className="border p-4 rounded space-y-2"
    >
      <AnimatePresence initial={false}>
        {events.length === 0 ? (
          <motion.li
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-gray-500"
          >
            No hay eventos.
          </motion.li>
        ) : (
          events.map(ev => (
            <EventItem key={ev.name} ev={ev} cancel={cancel} />
          ))
        )}
      </AnimatePresence>
    </motion.ul>
  )
}
