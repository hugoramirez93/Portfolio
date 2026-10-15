import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { journey } from '../data/journey'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

/**
 * Home-page hub: the whole site as an ordered, clearly numbered path.
 * Every card leads into the next part of the story.
 */
export default function GuidedPath() {
  return (
    <section id="tour" className="shell scroll-mt-24 py-16 sm:py-20">
      <SectionHeading
        eyebrow="Your guided tour"
        title="Follow my story,"
        highlight="step by step"
        description="New here? Walk through it in order — or jump straight to what matters most to you. Every page ends with a clear next step."
      />

      <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {journey.map((item, i) => {
          const Icon = item.icon
          const isLast = i === journey.length - 1

          return (
            <Reveal key={item.id} as="li" delay={i * 0.05} className="h-full">
              <Link to={item.path} className="panel panel-hover group flex h-full flex-col p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--chip-bg)] font-mono text-sm font-bold text-[var(--accent)]">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Icon className="h-5 w-5 shrink-0 text-[var(--accent)]" aria-hidden="true" />
                  <span className="ml-auto text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    {item.label}
                  </span>
                </div>

                <h3 className="mt-4 text-base font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
                  {item.blurb}
                </p>

                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--accent)]">
                  {isLast ? 'Get in touch' : 'Open'}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          )
        })}
      </ol>
    </section>
  )
}
