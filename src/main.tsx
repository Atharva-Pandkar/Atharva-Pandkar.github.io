import React from 'react'
import ReactDOM from 'react-dom/client'
import posthog from 'posthog-js'
import App from './App.tsx'
import './index.css'

posthog.init(import.meta.env.VITE_PUBLIC_POSTHOG_KEY, {
  api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
  defaults: '2026-01-30',
  capture_exceptions: true,
  debug: import.meta.env.DEV,
})

// Add ScrollReveal to the window object for global access
declare global {
  interface Window {
    ScrollReveal: any;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

