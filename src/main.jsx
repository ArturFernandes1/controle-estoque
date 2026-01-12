import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import "bootstrap/dist/css/bootstrap.min.css"; // importando o CSS do Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // importando o JS do Bootstrap (menu, dropdown, etc)


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
