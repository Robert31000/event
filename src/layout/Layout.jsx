import React, { lazy, Suspense, useEffect } from 'react'
import { Outlet } from 'react-router-dom'


export default function Layout() {
  useEffect(() => {
    import('aos').then(({ default: AOS }) => {
      AOS.init({ duration: 600, once: true })
    })
  }, [])

  return (
    <div className="flex flex-col min-h-screen">
      <Suspense fallback={<div className="h-16">Cargando menú…</div>}>
      </Suspense>

      <main className="flex-grow container mx-auto px-4 py-8">
        <Suspense fallback={<div>…Cargando sección…</div>}>
          <Outlet />
        </Suspense>
      </main>

    

      <Suspense fallback={<div className="h-24">Cargando pie…</div>}>
      </Suspense>
    </div>
  )
}
