import { personalInfo } from '../data/portfolio'
import SectionWrapper from './SectionWrapper'
import { motion } from 'framer-motion'

export default function About() {
  return (
    <SectionWrapper id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[var(--text-primary)]"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-5 gap-8 items-center">
          <div className="md:col-span-3 space-y-4">
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {personalInfo.bio}
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {personalInfo.languages.map((lang) => (
                <span
                  key={lang}
                  className="px-3 py-1 text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded-full"
                >
                  {lang}
                </span>
              ))}
              <span className="px-3 py-1 text-xs font-medium bg-green-500/10 text-green-600 dark:text-green-400 rounded-full">
                Remote Work Experience
              </span>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-6 space-y-4">
              {[
                { label: 'Location', value: personalInfo.location },
                { label: 'Email', value: personalInfo.email },
                { label: 'Focus', value: 'Frontend Development' },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-[var(--text-primary)] mt-0.5">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
