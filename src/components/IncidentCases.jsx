import { ShieldOff, Link2, KeyRound, AlertTriangle, Wrench, CheckCircle2, Search } from 'lucide-react'
import { incidentCases } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const iconMap = { ShieldOff, Link2, KeyRound }

const severityStyles = {
  Critical: 'bg-tint-danger text-[var(--danger)] bd-danger',
  High: 'bg-tint-warning text-[var(--warning)] bd-warning',
}

function CaseBlock({ icon: Icon, label, text, accent }) {
  return (
    <div className="flex gap-3">
      <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${accent ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'}`} />
      <div>
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">{label}</p>
        <p className={`mt-0.5 text-sm leading-relaxed ${accent ? 'font-medium text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'}`}>
          {text}
        </p>
      </div>
    </div>
  )
}

export default function IncidentCases() {
  return (
    <section
      id="cases"
      className="relative scroll-mt-24 overflow-hidden border-y border-[var(--border)] bg-tint-surface py-20 sm:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Selected incident cases"
          title="Real incidents,"
          highlight="root cause to resolution"
          description="Three investigations that show how I work an unfamiliar production issue: isolate, reproduce, fix, then prevent it from coming back."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {incidentCases.map((incident, index) => {
            const Icon = iconMap[incident.icon] || AlertTriangle
            return (
              <Reveal key={incident.id} delay={index * 0.09}>
                <article className="panel panel-hover flex h-full flex-col p-5 sm:p-6">
                  <div className="mb-4 flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2 font-mono text-xs text-[var(--text-muted)]">
                      <Icon className="h-4 w-4 text-[var(--accent)]" />
                      {incident.code}
                    </span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${
                        severityStyles[incident.severity] || severityStyles.High
                      }`}
                    >
                      {incident.severity}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-[var(--text-primary)]">
                    {incident.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-[var(--accent)]">{incident.subtitle}</p>
                  <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    {incident.category}
                  </p>

                  <div className="mt-5 space-y-4 border-t border-[var(--border-card)] pt-5">
                    <CaseBlock icon={Search} label="Problem" text={incident.problem} />
                    <CaseBlock icon={Wrench} label="Action" text={incident.action} />
                    <CaseBlock icon={CheckCircle2} label="Result" text={incident.result} accent />
                    <CaseBlock icon={ShieldOff} label="Prevention" text={incident.impact} />
                  </div>

                  <div className="mt-auto flex flex-wrap gap-1.5 pt-5">
                    {incident.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-[var(--chip-bg)] px-2 py-0.5 text-[11px] font-medium text-[var(--accent)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
