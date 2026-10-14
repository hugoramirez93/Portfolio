import { GraduationCap, Award, Clock, BookOpen, BadgeCheck, ExternalLink } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const typeIcon = {
  Degree: GraduationCap,
  Diploma: BookOpen,
  Bootcamp: BookOpen,
  Certification: Award,
  'Professional Certificate': Award,
  Education: GraduationCap,
}

export default function Education() {
  return (
    <section
      id="education"
      className="relative scroll-mt-24 border-y border-[var(--border)] bg-tint-surface py-20 sm:py-28"
    >
      <div className="shell">
        <SectionHeading
          eyebrow="Education & certifications"
          title="Always"
          highlight="levelling up"
          description="A formal foundation in systems engineering, reinforced with focused, hands-on development programs and verified credentials."
        />

        <div className="relative mx-auto mt-12 max-w-3xl">
          {/* Timeline rail */}
          <span
            aria-hidden="true"
            className="absolute bottom-5 left-[19px] top-5 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border-strong)] to-transparent"
          />

          <ol className="space-y-3.5">
            {education.map((item, index) => {
              const Icon = typeIcon[item.type] || GraduationCap
              const inProgress = item.status === 'in-progress'

              return (
                <li key={`${item.degree}-${index}`} className="relative pl-14 sm:pl-16">
                  <span className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] text-[var(--accent)] shadow-[0_10px_26px_-16px_var(--glow)]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>

                  <Reveal delay={index * 0.04}>
                    <article className="panel panel-hover p-4 sm:p-5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span
                          className={`rounded-full px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wider ${
                            inProgress
                              ? 'bg-tint-warning text-[var(--warning)]'
                              : 'bg-tint-success text-[var(--success)]'
                          }`}
                        >
                          {inProgress ? 'In progress' : 'Completed'}
                        </span>
                        <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                          {item.type}
                        </span>
                        <span className="ml-auto inline-flex items-center gap-1.5 font-mono text-[11px] text-[var(--text-muted)]">
                          <Clock className="h-3 w-3" aria-hidden="true" />
                          {item.year}
                        </span>
                      </div>

                      <h3 className="mt-2 text-sm font-semibold leading-snug text-[var(--text-primary)]">
                        {item.degree}
                      </h3>
                      <p className="mt-0.5 text-sm text-[var(--text-secondary)]">{item.institution}</p>

                      {item.verify && (
                        <a
                          href={item.verify}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-1 inline-flex items-center gap-1.5 py-1 text-xs font-semibold text-[var(--accent)] transition-opacity hover:opacity-80"
                        >
                          <BadgeCheck className="h-3.5 w-3.5" aria-hidden="true" />
                          Verify credential
                          <ExternalLink className="h-3 w-3" aria-hidden="true" />
                        </a>
                      )}
                    </article>
                  </Reveal>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
