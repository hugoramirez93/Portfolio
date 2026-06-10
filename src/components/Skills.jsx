import { motion } from 'framer-motion'
import { Code2, BookOpen } from 'lucide-react'
import { skills } from '../data/portfolio'
import SectionWrapper from './SectionWrapper'

const categories = [
  { key: 'Frontend', label: 'Frontend', icon: Code2 },
  { key: 'Learning', label: 'Currently Learning', icon: BookOpen },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export default function Skills() {
  const grouped = categories.map(({ key, label, icon: Icon }) => ({
    key,
    label,
    icon: Icon,
    items: skills.filter((s) => s.category === key),
  }))

  return (
    <SectionWrapper id="skills" className="py-20 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[var(--text-primary)]"
        >
          Skills & Technologies
        </motion.h2>

        <div className="space-y-12">
          {grouped.map(({ key, label, icon: Icon, items }) => (
            <div key={key}>
              <div className="flex items-center gap-2 mb-6">
                <Icon className="w-5 h-5 text-[var(--accent)]" />
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">{label}</h3>
              </div>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3"
              >
                {items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="px-4 py-3 rounded-xl bg-[var(--bg-card)] border border-[var(--border-card)] text-center hover:border-[var(--accent)]/40 hover:shadow-md hover:shadow-[var(--accent)]/5 transition-all cursor-default"
                  >
                    <p className="text-sm font-medium text-[var(--text-primary)]">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
