import { LifeBuoy, SearchCode, Server, Wrench, Code2 } from 'lucide-react'
import { competencies } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const iconMap = { LifeBuoy, SearchCode, Server, Wrench, Code2 }

const spans = ['lg:col-span-2', 'lg:col-span-2', 'lg:col-span-2', 'lg:col-span-3', 'lg:col-span-3']

export default function Skills() {
  return (
    <section id="skills" className="relative scroll-mt-24 border-y border-[var(--border)] bg-tint-surface py-20 sm:py-28">
      <div className="shell">
        <SectionHeading
          eyebrow="Core competencies"
          title="The toolkit behind"
          highlight="every resolution"
          description="Five areas I rely on to take an issue from first report to a documented, permanent fix."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-6">
          {competencies.map((group, i) => {
            const Icon = iconMap[group.icon] || LifeBuoy
            return (
              <Reveal key={group.group} delay={i * 0.07} className={spans[i]}>
                <div className="panel panel-hover h-full p-5">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--chip-bg)] text-[var(--accent)]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">{group.group}</h3>
                  </div>

                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-lg border border-[var(--border-card)] bg-[var(--bg-card)] px-2.5 py-1 text-xs font-medium text-[var(--text-secondary)] transition-colors hover:bd-accent-40 hover:text-[var(--accent)]"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
