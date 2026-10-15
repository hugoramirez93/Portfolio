import StepLink from './StepLink'
import { journey } from '../data/journey'

/**
 * Slim, always-visible progress bar shown at the top of every guided page.
 * It tells the visitor where they are (step + progress) and offers the very
 * same previous / next pills used by the closing strip at the bottom.
 */
export default function JourneyBar({ step }) {
  const progress = ((step + 1) / journey.length) * 100

  return (
    <div className="border-b border-[var(--border)] bg-tint-surface">
      <div className="shell flex flex-wrap items-center gap-x-3 gap-y-2 py-3">
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

        <nav
          aria-label="Guided tour navigation"
          className="ml-auto flex shrink-0 flex-wrap items-center justify-end gap-2"
        >
          <StepLink step={step - 1} dir="prev" />
          <StepLink step={step + 1} dir="next" />
        </nav>
      </div>
    </div>
  )
}
