export function getOccupancyReport(events) {
  const toMin = h => {
    const [hh, mm] = h.split(':').map(Number)
    return hh * 60 + mm
  }
  const map = new Map()
  events.forEach(ev => {
    const dur = toMin(ev.end) - toMin(ev.start)
    map.set(ev.room, (map.get(ev.room) || 0) + dur)
  })
  return Array.from(map.entries())
    .sort(([r1],[r2]) => r1.localeCompare(r2))
    .map(([room, minutes]) => ({ room, minutes, hours:(minutes/60).toFixed(2) }))
}
