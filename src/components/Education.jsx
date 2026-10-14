import { GraduationCap, Award, Clock, BookOpen } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const typeIcon = {
  Degree: GraduationCap,
  Diploma: BookOpen,
  Bootcamp: BookOpen,
  Certification: Award,
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
          description="A formal foundation in systems engineering, reinforced with focused, hands-on development programs."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {education.map((item, index) => {
            const Icon = typeIcon[item.type] || GraduationCap
            const inProgress = item.status === 'in-progress'

            return (
              <Reveal key={item.degree} delay={index * 0.05}>
                <article className="panel panel-hover flex h-full gap-3 p-4 sm:gap-4 sm:p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--chip-bg)] text-[var(--accent)] sm:h-11 sm:w-11">
                    <Icon className="h-5 w-5" />
                  </span>

                  <div className="min-w-0 flex-1">
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
                    </div>

                    <h3 className="mt-2 text-sm font-semibold leading-snug text-[var(--text-primary)]">
                      {item.degree}
                    </h3>
                    <p className="mt-0.5 text-sm text-[var(--text-secondary)]">{item.institution}</p>

                    {item.year && (
                      <p className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--text-muted)]">
                        <Clock className="h-3 w-3" />
                        {item.year}
                      </p>
                    )}
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
