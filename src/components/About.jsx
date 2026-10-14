import { MapPin, Clock, Globe, Download, CheckCircle2, Zap } from 'lucide-react'
import { personalInfo } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const brings = [
  'Deep-dive troubleshooting beyond the first scripted response',
  'Root-cause thinking that removes repeat escalations',
  'Clear written incident reports and knowledge-base articles',
  'Comfortable bridging customers, Product and Engineering',
]

const facts = [
  { icon: MapPin, label: 'Location', value: personalInfo.location },
  { icon: Clock, label: 'Timezone', value: personalInfo.timezone },
  { icon: Globe, label: 'Work mode', value: personalInfo.workMode },
  { icon: Zap, label: 'Availability', value: personalInfo.availability },
]

export default function About() {
  return (
    <section id="about" className="shell scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="About"
        align="left"
        title="Support engineering,"
        highlight="not just ticket closing"
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <div className="space-y-6 lg:col-span-3">
          <Reveal>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] text-pretty sm:text-[1.05rem]">
              {personalInfo.summary}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="text-base leading-relaxed text-[var(--text-secondary)] text-pretty sm:text-[1.05rem]">
              {personalInfo.summaryTail}
            </p>
          </Reveal>

          <Reveal delay={0.12}>
            <ul className="mt-2 grid gap-3 sm:grid-cols-2">
              {brings.map((point) => (
                <li key={point} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" />
                  <span className="text-sm leading-relaxed text-[var(--text-secondary)]">{point}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {personalInfo.languages.map((lang) => (
                <div key={lang.name} className="panel p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[var(--text-primary)]">{lang.name}</span>
                    <span className="font-mono text-xs text-[var(--accent)]">{lang.level}</span>
                  </div>
                  <div className="mt-2.5 h-1.5 overflow-hidden rounded-full bg-[var(--bg-secondary)]">
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"
                      style={{ width: `${lang.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="panel overflow-hidden">
            <div
              className="relative flex items-center gap-4 border-b border-[var(--border-card)] p-5"
              style={{ background: 'linear-gradient(135deg, var(--chip-bg), transparent)' }}
            >
              <div
                className="h-24 w-24 shrink-0 rounded-2xl p-[2.5px] sm:h-28 sm:w-28"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
              >
                <img
                  src="/photo-hugo.jpg"
                  alt={personalInfo.name}
                  className="h-full w-full rounded-[14px] object-cover object-top"
                />
              </div>
              <div className="min-w-0">
                <p className="truncate text-base font-bold text-[var(--text-primary)]">
                  {personalInfo.name}
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  {personalInfo.role} ({personalInfo.roleLevel})
                </p>
                <p className="mt-0.5 text-xs text-[var(--text-muted)]">{personalInfo.roleFocus}</p>
              </div>
            </div>

            <ul className="divide-y divide-[var(--border-card)]">
              {facts.map(({ icon: Icon, label, value }) => (
                <li key={label} className="flex items-start gap-3 px-5 py-3.5">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      {label}
                    </p>
                    <p className="text-sm text-[var(--text-primary)]">{value}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="p-5 pt-1">
              <a href={personalInfo.resumeUrl} download className="btn btn-primary w-full">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
