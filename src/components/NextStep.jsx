import { Link } from 'react-router-dom'
import { ArrowUp, Home } from 'lucide-react'
import StepLink from './StepLink'
import { journey } from '../data/journey'

/**
 * Compact "continue" row that closes every guided page.
 *
 * It is deliberately *not* a section of its own: it renders as a slim strip
 * (hairline + a single row) that reads as the natural end of the page content
 * rather than a separate promo block. The previous / next pills are the same
 * component used by the top progress bar.
 */
export default function NextStep({ step }) {
  const next = journey[step + 1]
  if (!next) return null

  return (
    <div className="shell">
      <nav
        aria-label="Continue the tour"
        className="flex flex-col gap-4 border-t border-[var(--border)] pb-12 pt-5 sm:flex-row sm:items-center sm:justify-between sm:pb-16"
      >
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2.5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--text-muted)]">
            Next step · {step + 2}/{journey.length}
          </span>

          <StepLink step={step - 1} dir="prev" size="md" />
          <StepLink step={step + 1} dir="next" size="md" />
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs">
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
