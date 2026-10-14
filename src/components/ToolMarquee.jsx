import { toolMarquee } from '../data/portfolio'

export default function ToolMarquee() {
  const items = [...toolMarquee, ...toolMarquee]

  return (
    <div className="relative border-y border-[var(--border)] bg-tint-surface py-6">
      <div className="shell mb-3 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[var(--text-muted)]">
          Platforms &amp; tools I work with daily
        </p>
      </div>

      <div className="mask-fade-x relative flex overflow-hidden">
        <div className="animate-marquee flex shrink-0 items-center gap-3 pr-3">
          {items.map((tool, i) => (
            <span
              key={`${tool}-${i}`}
              className="whitespace-nowrap rounded-full border border-[var(--border-card)] bg-[var(--bg-card)] px-4 py-1.5 text-sm font-medium text-[var(--text-secondary)]"
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
