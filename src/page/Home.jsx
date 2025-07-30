import React, { useState } from 'react'

import EventForm    from './components/EventForm'
import RangeFilter  from './components/RangeFilter'
import CancelByName from './components/CancelByName'
import EventList    from './components/EventList'
import Footer       from './components/Footer'
import { useEventHandlers } from '../Hooks/useEventHandlers'


export default function Home () {
  const h = useEventHandlers()


  return (
    <div className="p-6 space-y-8">
      <h1 className="text-3xl font-bold">Administrador de Eventos</h1>

      <EventForm registerEvent={h.register} />
      <h1 className='text-2xl font-bold'> Consultar Eventos existentes</h1>
      <RangeFilter
       range={h.range}
       setRange={h.setRange}
       query={h.query}
       events={h.events}       
       setResults={h.setResults}
      />

      <CancelByName
        cancel={h.cancel}
      />
      <h1 className='text-2xl font-bold'>
        Lista de eventos
      </h1>

      
      <button
        onClick={h.showAll}                 
        className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
       >
    Ver todos
  </button>


      <EventList
        events={h.filtered}
        cancel={h.cancel}
      />

      <Footer />
    </div>
  )
}
