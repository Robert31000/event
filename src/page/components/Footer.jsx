import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 mt-auto">
      <div className="container mx-auto text-center space-y-2">
        <p>© {new Date().getFullYear()} SalaEventos. Todos los derechos reservados.</p>
    
      </div>
    </footer>
  )
}
