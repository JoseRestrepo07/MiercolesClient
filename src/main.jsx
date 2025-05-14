import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Rutas } from './components/routes/RutasPublicas/Rutas'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min.js"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Rutas />
    </BrowserRouter>
  </StrictMode>,
)
