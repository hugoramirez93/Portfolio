import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, ArrowUp, Home } from 'lucide-react'
import { journey } from '../data/journey'

/**
 * Compact "continue" row that closes every guided page.
 *
 * It is deliberately *not* a section of its own: it renders as a slim strip
 * (hairline + a single row) that reads as the natural end of the page content
 * rather than a separate promo block.
 */
export default function NextStep({ step }) {
  const next = journey[step + 1]
  const prev = journey[step - 1]
  if (!next) return null

  const Icon = next.icon

  return (
    <div className="shell">
      <nav
        aria-label="Continue the tour"
        className="flex flex-col gap-4 border-t border-[var(--border)] pb-12 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pb-16"
      >
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Next step · {step + 2}/{journey.length}
          </span>

          <Link
            to={next.path}
            className="group inline-flex items-center gap-2.5 self-start rounded-full border border-[var(--border-card)] bg-[var(--chip-bg)] py-2 pl-3.5 pr-4 text-sm font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
          >
            <Icon className="h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
            {next.title}
            <ArrowRight
              className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
          {prev ? (
            <Link
              to={prev.path}
              className="inline-flex items-center gap-1.5 font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
              {prev.label}
            </Link>
          ) : null}

          <Link
            to="/"
            className="inline-flex items-center gap-1.5 font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
          >
            <Home className="h-3.5 w-3.5" aria-hidden="true" />
            Back to start
          </Link>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex items-center gap-1.5 font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
          >
            <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
            Top
          </button>
        </div>
      </nav>
    </div>
  )
}
