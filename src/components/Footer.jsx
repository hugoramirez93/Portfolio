import { Mail, Download, ExternalLink } from 'lucide-react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
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

export default function Footer() {
  const scrollTo = (event, href) => {
    event.preventDefault()
    document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <footer className="relative z-10 border-t border-[var(--border)] bg-tint-surface">
      <div className="shell py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-sm">
            <a href="#home" onClick={(e) => scrollTo(e, '#home')} className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-sm font-bold">
                <span className="gradient-text">{personalInfo.initials}</span>
              </span>
              <span className="text-sm font-semibold text-[var(--text-primary)]">
                {personalInfo.name}
              </span>
            </a>
            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
              {personalInfo.role} ({personalInfo.roleLevel}) · {personalInfo.roleFocus}
            </p>

            <div className="mt-4 flex items-center gap-2">
              <a
                href={personalInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn h-9 w-9"
                aria-label="LinkedIn profile"
              >
                <FiLinkedin className="h-4 w-4" />
              </a>
              <a
                href={personalInfo.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn h-9 w-9"
                aria-label="GitHub profile"
              >
                <FiGithub className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="icon-btn h-9 w-9"
                aria-label="Send an email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Navigate
            </p>
            <ul className="mt-3 grid grid-cols-2 gap-x-8 gap-y-1 sm:grid-cols-3">
              {navLinks.map(({ label, href }) => (
                <li key={href}>
                  <a
                    href={href}
                    onClick={(e) => scrollTo(e, href)}
                    className="inline-block py-1 text-sm text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
              Get my CV
            </p>
            <a href={personalInfo.resumeUrl} download className="btn btn-primary mt-3">
              <Download className="h-4 w-4" />
              Download Resume
            </a>
            <a
              href={personalInfo.cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost mt-2 w-full"
            >
              <ExternalLink className="h-4 w-4" />
              View online CV
            </a>
            <p className="mt-3 text-xs text-[var(--text-muted)]">{personalInfo.timezone}</p>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--text-muted)] sm:flex-row">
          <p>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <p>Built with React, Tailwind CSS &amp; Framer Motion.</p>
        </div>
      </div>
    </footer>
  )
}
