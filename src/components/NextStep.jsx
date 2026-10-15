import { Link } from 'react-router-dom'
import { ArrowRight, ArrowLeft, ArrowUp, Home } from 'lucide-react'
import { journey } from '../data/journey'
import Reveal from './Reveal'

/**
 * The guided "next step" panel that closes every page, so the visitor always
 * knows where to go next (and can step back or return home).
 */
export default function NextStep({ step }) {
  const next = journey[step + 1]
  const prev = journey[step - 1]
  if (!next) return null

  const Icon = next.icon

  return (
    <section aria-label="Next step" className="shell pb-20 pt-2 sm:pb-28">
      <Reveal>
        <div className="panel relative overflow-hidden p-6 sm:p-8">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 h-48 w-48 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, var(--glow), transparent 70%)' }}
          />

          <div className="relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <p className="eyebrow">
                <span className="h-px w-6 bg-[var(--accent)]" aria-hidden="true" />
                Next step · {step + 2} of {journey.length}
              </p>

              <h2 className="mt-3 flex items-center gap-2.5 text-2xl font-bold text-[var(--text-primary)] sm:text-3xl">
                <Icon className="h-6 w-6 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                {next.title}
              </h2>

              <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">
                {next.blurb}
              </p>
            </div>

            <Link to={next.path} className="btn btn-primary shrink-0 self-start md:self-auto">
              {next.label}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="relative mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[var(--border-card)] pt-5 text-sm">
            {prev ? (
              <Link
                to={prev.path}
                className="inline-flex items-center gap-1.5 font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to {prev.label}
              </Link>
            ) : null}

            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              <Home className="h-4 w-4" />
              Back to start
            </Link>

            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="ml-auto inline-flex items-center gap-1.5 font-medium text-[var(--text-muted)] transition-colors hover:text-[var(--accent)]"
            >
              <ArrowUp className="h-4 w-4" />
              Top of page
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
