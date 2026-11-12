import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './components/App.jsx'
import Start from './components/Start.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Start />
  </StrictMode>,
)
