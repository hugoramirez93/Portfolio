import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { personalInfo } from '../data/portfolio'

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Skills', to: '/skills' },
  { label: 'Experience', to: '/experience' },
  { label: 'Case Studies', to: '/case-studies' },
  { label: 'Projects', to: '/projects' },
  { label: 'Education', to: '/education' },
  { label: 'Contact', to: '/#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => setMenuOpen(false), [location.pathname, location.hash])

  const isActive = (to) => {
    if (to === '/#contact') return location.pathname === '/' && location.hash === '#contact'
    return location.pathname === to
  }

  const linkClass = (to) => {
    const active = isActive(to)
    return [
      'relative rounded-lg px-3 py-2 text-sm font-medium transition-colors',
      active ? 'text-[var(--accent)]' : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]',
    ].join(' ')
  }

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-[var(--accent)] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[var(--accent-contrast)]"
      >
        Skip to content
      </a>

      <header
        className={`glass fixed inset-x-0 top-0 z-50 transition-shadow duration-300 ${
          scrolled ? 'border-b border-[var(--border)] shadow-[0_10px_40px_-24px_rgba(0,0,0,0.6)]' : ''
        }`}
      >
        <nav className="shell">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="group flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-sm font-bold tracking-tight">
                <span className="gradient-text">{personalInfo.initials}</span>
              </span>
              <span className="hidden text-sm font-semibold text-[var(--text-primary)] sm:block">
                {personalInfo.name}
                <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {personalInfo.roleLevel} Support · SaaS
                </span>
              </span>
            </Link>

            <div className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map(({ label, to }) => (
                <NavLink key={to} to={to} className={linkClass(to)}>
                  {isActive(to) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-lg bg-[var(--chip-bg)]"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                  <span className="relative z-10">{label}</span>
                </NavLink>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                className="icon-btn lg:hidden"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </nav>

        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="h-[2px] origin-left bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
        />

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="overflow-hidden border-t border-[var(--border)] lg:hidden"
            >
              <div className="space-y-1 px-5 py-4 sm:px-8">
                {navLinks.map(({ label, to }, i) => (
                  <motion.div
                    key={to}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={to}
                      className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                        isActive(to)
                          ? 'bg-[var(--chip-bg)] text-[var(--accent)]'
                          : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
