import { useState, useEffect } from 'react'
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { personalInfo } from '../data/portfolio'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Case Studies', href: '#cases' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const sectionIds = ['home', ...navLinks.map((l) => l.href.slice(1))]

function scrollToHash(hash) {
  const el = document.getElementById(hash.slice(1))
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [menuOpen, setMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: [0, 0.25, 0.5, 1] },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  const handleClick = (event, href) => {
    event.preventDefault()
    setMenuOpen(false)
    scrollToHash(href)
  }

  return (
    <>
      <a
        href="#about"
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
            <a
              href="#home"
              onClick={(e) => handleClick(e, '#home')}
              className="group flex items-center gap-2.5"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-sm font-bold tracking-tight">
                <span className="gradient-text">{personalInfo.initials}</span>
              </span>
              <span className="hidden text-sm font-semibold text-[var(--text-primary)] sm:block">
                {personalInfo.name}
                <span className="block text-[11px] font-medium uppercase tracking-[0.14em] text-[var(--text-muted)]">
                  {personalInfo.roleLevel} Support · SaaS
                </span>
              </span>
            </a>

            <div className="hidden items-center gap-0.5 lg:flex">
              {navLinks.map(({ label, href }) => {
                const id = href.slice(1)
                const isActive = active === id
                return (
                  <a
                    key={href}
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    className={`relative rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[var(--accent)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 rounded-lg bg-[var(--chip-bg)]"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    )}
                    <span className="relative z-10">{label}</span>
                  </a>
                )
              })}
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
                {navLinks.map(({ label, href }, i) => (
                  <motion.a
                    key={href}
                    href={href}
                    onClick={(e) => handleClick(e, href)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    className={`block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      active === href.slice(1)
                        ? 'bg-[var(--chip-bg)] text-[var(--accent)]'
                        : 'text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
