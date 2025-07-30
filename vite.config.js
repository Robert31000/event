import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(),
    tailwindcss()
  ],
   test: {
    environment: 'jsdom',
    globals: true,
   include: [
  'tests/**/*.spec.{js,jsx,ts,tsx}',
  'tests/**/*.spec.{js,jsx,ts,tsx}'   
]}
})
