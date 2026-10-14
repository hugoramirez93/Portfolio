import { Briefcase, MapPin } from 'lucide-react'
import { experience } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function Experience() {
  return (
    <section id="experience" className="shell scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Experience"
        title="Four years of keeping"
        highlight="production running"
        description="From high-volume bilingual support to deep L1/L2 incident work on an enterprise CPQ platform."
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div
          aria-hidden="true"
          className="absolute bottom-2 left-[19px] top-2 w-px bg-gradient-to-b from-[var(--accent)] via-[var(--border-strong)] to-transparent"
        />

        <div className="space-y-8">
          {experience.map((job, index) => (
            <Reveal key={`${job.company}-${job.role}`} delay={index * 0.08} className="relative pl-12">
              <span className="absolute left-[11px] top-6 z-10 flex h-[17px] w-[17px] items-center justify-center rounded-full border-4 border-[var(--bg-primary)] bg-[var(--accent)]">
                {job.current && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--accent)] opacity-60" />
                )}
              </span>

              <article className="panel panel-hover p-5 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-base font-semibold text-[var(--text-primary)] sm:text-lg">
                      {job.role}
                    </h3>
                    <p className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm font-medium text-[var(--accent)]">
                      <Briefcase className="h-3.5 w-3.5" />
                      {job.company}
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-col items-start gap-1.5 sm:items-end">
                    <span className="rounded-full bg-[var(--chip-bg)] px-3 py-1 font-mono text-xs font-medium text-[var(--accent)]">
                      {job.period}
                    </span>
                    {job.current && (
                      <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--success)]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--success)]" />
                        Current
                      </span>
                    )}
                  </div>
                </div>

                <p className="mt-3 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  {job.context}
                </p>

                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((point) => (
                    <li key={point} className="relative pl-4 text-sm leading-relaxed text-[var(--text-secondary)]">
                      <span className="absolute left-0 top-[8px] h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-[var(--border-card)] pt-4">
                  <span className="mr-1 inline-flex items-center gap-1 text-xs text-[var(--text-muted)]">
                    <MapPin className="h-3 w-3" />
                    {job.meta}
                  </span>
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-[var(--bg-secondary)] px-2 py-0.5 text-[11px] font-medium text-[var(--text-secondary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
