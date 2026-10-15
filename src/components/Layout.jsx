import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Background from './Background'
import Navbar from './Navbar'
import Footer from './Footer'
import ScrollToTop from './ScrollToTop'

/**
 * On every route change: jump to the top, or smooth-scroll to the in-page
 * anchor when the link carries a hash (e.g. "/#contact").
 *
 * The offset is computed manually: the global `scroll-padding-top` plus any
 * `scroll-margin-top` on the target would otherwise stack up and overshoot.
 */
const HEADER_OFFSET = 84

function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        const align = () => {
          const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
          window.scrollTo({ top, behavior: 'smooth' })
        }
        align()
        // Re-align once fonts settle, in case the layout shifted mid-scroll.
        const timer = setTimeout(align, 450)
        return () => clearTimeout(timer)
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}

export default function Layout() {
  return (
    <div className="relative min-h-screen">
      <Background />
      <Navbar />
      <ScrollManager />

      <main id="main-content" className="relative z-10">
        <Outlet />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
