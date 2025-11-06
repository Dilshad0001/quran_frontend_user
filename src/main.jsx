// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { registerSW } from 'virtual:pwa-register'  // ✅ added

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// ✅ Register PWA
registerSW({
  onNeedRefresh() {
    if (confirm("New version available. Reload?")) {
      window.location.reload()
    }
  },
  onOfflineReady() {
    console.log("✅ Quran Reader ready to work offline!")
  },
})
