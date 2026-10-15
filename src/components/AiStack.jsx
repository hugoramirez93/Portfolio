import { Sparkles, CheckCircle2, LifeBuoy, Code2, ShieldCheck } from 'lucide-react'
import { aiStack } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

function UseList({ icon: Icon, title, items }) {
  return (
    <div className="panel h-full p-5 sm:p-6">
      <div className="mb-4 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--chip-bg)] text-[var(--accent)]">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </span>
        <h3 className="text-base font-semibold text-[var(--text-primary)]">{title}</h3>
      </div>

      <ul className="space-y-2.5">
        {items.map((use) => (
          <li key={use} className="flex gap-2.5">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
            <span className="text-sm leading-relaxed text-[var(--text-secondary)]">{use}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function AiStack() {
  return (
    <section
      aria-label="AI-assisted workflows"
      className="relative border-t border-[var(--border)] py-20 sm:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="AI-assisted workflows"
          title="AI as a force multiplier,"
          highlight="not a shortcut"
          description={aiStack.intro}
        />

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          <Reveal className="h-full">
            <UseList icon={LifeBuoy} title="In technical support" items={aiStack.supportUses} />
          </Reveal>
          <Reveal delay={0.08} className="h-full">
            <UseList icon={Code2} title="In software development" items={aiStack.devUses} />
          </Reveal>
        </div>

        <Reveal delay={0.12} className="mt-4">
          <div className="panel p-5 sm:p-6">
            <div className="mb-4 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-[var(--accent)]" aria-hidden="true" />
              <h3 className="text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                My daily AI stack
              </h3>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {aiStack.tools.map((tool) => (
                <div
                  key={tool.name}
                  className="flex items-start gap-3 rounded-xl border border-[var(--border-card)] bg-[var(--bg-card)] p-3.5 transition-colors hover:border-[var(--border-strong)]"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--chip-bg)] font-mono text-xs font-bold text-[var(--accent)]">
                    {tool.badge}
                  </span>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--text-primary)]">{tool.name}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-[var(--text-muted)]">{tool.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-5 flex gap-2 border-t border-[var(--border-card)] pt-4 text-xs leading-relaxed text-[var(--text-muted)]">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[var(--success)]" aria-hidden="true" />
              {aiStack.note}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
