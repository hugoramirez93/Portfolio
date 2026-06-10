import { motion } from 'framer-motion'
import { FolderOpen, ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import { projects } from '../data/portfolio'
import SectionWrapper from './SectionWrapper'

export default function Projects() {
  const hasProjects = projects.length > 0

  return (
    <SectionWrapper id="projects" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-12 text-[var(--text-primary)]"
        >
          Projects
        </motion.h2>

        {hasProjects ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="group bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl overflow-hidden hover:shadow-lg hover:border-[var(--accent)]/30 transition-all"
              >
                <div className="h-44 bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent)]/5 flex items-center justify-center overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FolderOpen className="w-12 h-12 text-[var(--accent)]/40" />
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1.5">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)] mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags?.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-xs font-medium bg-[var(--accent)]/10 text-[var(--accent)] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                        Code
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-xs font-medium text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center py-16"
          >
            <FolderOpen className="w-16 h-16 text-[var(--text-secondary)]/30 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-[var(--text-primary)] mb-2">
              Projects Coming Soon
            </h3>
            <p className="text-sm text-[var(--text-secondary)] max-w-md mx-auto">
              I'm currently building my portfolio projects. Check back soon to see what I've been working on!
            </p>
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  )
}
