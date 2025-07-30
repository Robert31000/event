import { motion } from 'framer-motion'

export default function EventItem({ ev, cancel }) {
  return (
    <motion.li
      layout
      initial={{ opacity:0, y:10 }}
      animate={{ opacity:1, y:0 }}
      exit={{ opacity:0, y:-10 }}
      className="flex justify-between bg-gray-50 p-2 rounded"
    >
      
      <span>{ev.name} — {ev.room} ({ev.start}–{ev.end})</span>
    </motion.li>
  )
}
