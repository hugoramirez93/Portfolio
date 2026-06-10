import { motion } from 'framer-motion'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolio'
import SectionWrapper from './SectionWrapper'

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[var(--text-primary)]"
        >
          Experience
        </motion.h2>

        <div className="relative">
          <div className="absolute left-[19px] top-2 bottom-2 w-0.5 bg-[var(--border)]" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12"
              >
                <div className="absolute left-[11px] top-1.5 w-[17px] h-[17px] rounded-full bg-[var(--accent)] border-4 border-[var(--bg-primary)] shadow-sm z-10" />

                <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl p-5 hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-medium text-[var(--accent)] bg-[var(--accent)]/10 px-2.5 py-0.5 rounded-full shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 mb-3">
                    <Briefcase className="w-3.5 h-3.5 text-[var(--text-secondary)]" />
                    <p className="text-sm font-medium text-[var(--text-secondary)]">
                      {exp.company}
                    </p>
                  </div>
                  <ul className="space-y-1.5">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-sm text-[var(--text-secondary)] leading-relaxed pl-4 relative"
                      >
                        <span className="absolute left-0 top-[7px] w-1.5 h-1.5 rounded-full bg-[var(--text-secondary)]/40" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
