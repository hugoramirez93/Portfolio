import { stats } from '../data/portfolio'
import { useCountUp } from '../hooks/useCountUp'
import Reveal from './Reveal'

function StatCard({ stat, index }) {
  const { ref, value } = useCountUp(stat.value, { duration: 1300 + index * 130 })

  return (
    <div ref={ref} className="panel panel-hover min-w-0 p-4 sm:p-5">
      <p className="flex items-baseline gap-0.5 font-mono text-2xl font-bold text-[var(--text-primary)] sm:text-3xl lg:text-4xl">
        {stat.prefix && <span className="text-[var(--accent)]">{stat.prefix}</span>}
        <span>{value}</span>
        <span className="text-[var(--accent)]">{stat.suffix}</span>
      </p>
      <p className="mt-2 text-sm font-semibold leading-snug text-[var(--text-primary)]">{stat.label}</p>
      <p className="mt-0.5 text-xs text-[var(--text-muted)]">{stat.sub}</p>
    </div>
  )
}

export default function Metrics() {
  return (
    <section aria-label="Impact metrics" className="shell py-16 sm:py-20">
      <Reveal className="mx-auto mb-9 max-w-2xl text-center">
        <p className="eyebrow justify-center">
          <span className="h-px w-6 bg-[var(--accent)]" aria-hidden="true" />
          Impact by the numbers
        </p>
      </Reveal>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.06}>
            <StatCard stat={stat} index={i} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
