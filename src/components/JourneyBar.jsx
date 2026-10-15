import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { journey } from '../data/journey'

/**
 * Slim, always-visible progress bar shown at the top of every guided page.
 * It tells the visitor where they are and offers the next step inline.
 */
export default function JourneyBar({ step }) {
  const current = journey[step]
  const next = journey[step + 1]
  const progress = ((step + 1) / journey.length) * 100

  return (
    <div className="border-b border-[var(--border)] bg-tint-surface">
      <div className="shell flex items-center gap-3 py-3">
        <span className="shrink-0 rounded-full bg-[var(--chip-bg)] px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-[0.12em] text-[var(--accent)]">
          Step {step + 1}/{journey.length}
        </span>

        <span
          className="relative hidden h-1.5 min-w-0 flex-1 overflow-hidden rounded-full bg-[var(--bg-secondary)] sm:block"
          role="presentation"
        >
          <span
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] transition-[width] duration-500"
            style={{ width: `${progress}%` }}
          />
        </span>

        <span className="ml-auto flex shrink-0 items-center gap-1.5 text-xs sm:ml-0">
          <span className="hidden text-[var(--text-muted)] sm:inline">Now:</span>
          <span className="font-semibold text-[var(--text-primary)]">{current.label}</span>
        </span>

        {next && (
          <Link
            to={next.path}
            className="hidden shrink-0 items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold text-[var(--accent)] transition-colors hover:bg-[var(--chip-bg)] md:inline-flex"
          >
            Next: {next.label}
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        )}
      </div>
    </div>
  )
}
