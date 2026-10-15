import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import App from './App.jsx'
import { ThemeProvider } from './hooks/useTheme'
import './index.css'

/**
 * Vercel Web Analytics with SPA route support.
 *
 * Passing `route`/`path` makes the component disable the script's automatic
 * pushState tracking and emit one `pageview` per navigation instead, so every
 * client-side route change in this React Router app is counted exactly once.
 */
function RoutedAnalytics() {
  const { pathname } = useLocation()
  return <Analytics route={pathname} path={pathname} />
}

createRoot(document.getElementById('app')).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
        <RoutedAnalytics />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
)
