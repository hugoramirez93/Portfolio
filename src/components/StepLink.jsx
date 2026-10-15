import { Link } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { journey } from '../data/journey'

/**
 * A single guided-tour navigation pill (previous / next).
 *
 * The exact same pill is used by the top progress bar (`JourneyBar`) and the
 * closing strip (`NextStep`) so the two places read and behave identically.
 *
 * @param step  0-based index of the *target* step in `journey`
 * @param dir   'prev' | 'next'
 * @param size  'sm' (top bar) | 'md' (closing strip)
 */
export default function StepLink({ step, dir, size = 'sm' }) {
  const target = journey[step]
  if (!target) return null

  const isNext = dir === 'next'
  const Icon = isNext ? ArrowRight : ArrowLeft
  const iconClass = size === 'md' ? 'h-4 w-4' : 'h-3.5 w-3.5'
  const sizeClass =
    size === 'md' ? 'gap-2.5 py-2 pl-3.5 pr-4 text-sm' : 'gap-2 py-1.5 pl-2.5 pr-3 text-xs'

  return (
    <Link
      to={target.path}
      className={`group inline-flex shrink-0 items-center rounded-full border border-[var(--border-card)] bg-[var(--chip-bg)] font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)] ${sizeClass}`}
    >
      {!isNext && (
        <Icon
          className={`${iconClass} shrink-0 text-[var(--accent)] transition-transform group-hover:-translate-x-0.5`}
          aria-hidden="true"
        />
      )}
      <span className="sr-only">{isNext ? 'Next: ' : 'Previous: '}</span>
      {target.title}
      {isNext && (
        <Icon
          className={`${iconClass} shrink-0 text-[var(--accent)] transition-transform group-hover:translate-x-0.5`}
          aria-hidden="true"
        />
      )}
    </Link>
  )
}
