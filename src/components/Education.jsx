import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data/portfolio'
import SectionWrapper from './SectionWrapper'

export default function Education() {
  return (
    <SectionWrapper id="education" className="py-20 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[var(--text-primary)]"
        >
          Education & Certifications
        </motion.h2>

        <div className="space-y-4">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl p-5 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] shrink-0">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-base font-semibold text-[var(--text-primary)]">
                      {item.degree}
                    </h3>
                    <span className="text-xs font-medium text-[var(--text-secondary)] whitespace-nowrap">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-sm text-[var(--text-secondary)] mt-0.5">
                    {item.institution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
