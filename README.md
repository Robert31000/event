# React + Vite
# Administrador de Eventos en Tiempo Real

Proyecto de una SPA que permite gestionar eventos en salas, desarrollado con React 19, Vite, TailwindCSS y Framer Motion. La información se almacena en `localStorage`.

## Funcionalidades

- **Registrar eventos** sin solapamientos en la misma sala. 
- **Consultar eventos activos** dentro de un intervalo de tiempo. 
- **Cancelar eventos** por su nombre. 
- **Informe de ocupación**: muestra minutos y horas ocupadas por sala.

## Ejemplo de flujo

1. Registro:
   - Evento A (Sala 1, 09:00–11:00) → aceptado. 
   - Evento B (Sala 1, 10:30–12:00) → rechazado (solapamiento). 
   - Evento C (Sala 2, 10:00–11:30) → aceptado. 
2. Consulta 10:00–10:45 → se listan A y C. 
3. Cancelación de “Evento A” → solo queda C. 
4. Informe `.

## Estructura del proyecto

src/
├─ hooks/
│ ├─ useEvents.js 
│ └─ useEventHandlers.js 
├─ components/ // EventForm, RangeFilter, EventList…
├─ utils/
│ └─ occupancy.js
├─ pages/
│ └─ Home.jsx
└─ tests

bash
Copiar
Editar

## Instalación y ejecución

```bash
git clone https://github.com/usuario/event-manager.git
cd event-manager
npm install
npm run dev    # abre http://localhost:5173
npm test       # corre la suite de Vitest
Decisiones técnicas
React + Hooks: separación clara entre lógica y presentación.

localStorage: persistencia sin servidor, intercambiable por otro adapter.

TailwindCSS: configuración mínima de estilos.

Framer Motion: animaciones de alta/baja de eventos declarativas.

Vitest: tests rápidos para hooks y lógica.

## Patrones y antipatrónes

#** Patrones**  
- **Adapter** para aislar `localStorage` de la lógica de negocio.  
- **SRP (Single Responsibility)**: un hook solo gestiona eventos, otro solo la UI.  
- **Facade (Custom Hook)**: `useEventHandlers` expone una API simple a los componentes.

**Antipatrones evitados**  
- **Nested forms**: ninguna `<form>` dentro de otra.  
- **Lógica en JSX**: las validaciones están en los hooks, no en el render.

Trabajo futuro
Sustituir localStorage por IndexedDB o API REST.

Optimizar consultas con un Interval Tree para grandes volúmenes.

Integrar autenticación y multiusuario.
