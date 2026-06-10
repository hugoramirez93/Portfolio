import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 pt-16"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-3xl mx-auto text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <div className="relative inline-block">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-[var(--accent)]/30 mx-auto shadow-xl shadow-[var(--accent)]/10">
              <img
                src="/images/photo.jpg"
                alt={personalInfo.name}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="absolute bottom-2 right-2 w-5 h-5 bg-green-500 border-2 border-[var(--bg-primary)] rounded-full" />
          </div>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[var(--text-primary)]"
        >
          {personalInfo.name}
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-[var(--accent)] font-medium mb-3"
        >
          {personalInfo.role}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-4"
        >
          {personalInfo.location} — {personalInfo.languages.join(' · ')}
        </motion.p>

        <motion.p
          variants={itemVariants}
          className="text-sm sm:text-base text-[var(--text-secondary)] max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          {personalInfo.bio}
        </motion.p>

        <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-3 bg-[var(--accent)] text-white rounded-xl font-medium hover:bg-[var(--accent-hover)] transition-colors shadow-lg shadow-[var(--accent)]/25"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-6 py-3 border border-[var(--border)] text-[var(--text-primary)] rounded-xl font-medium hover:bg-[var(--bg-secondary)] transition-colors"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 mt-8">
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-secondary)] transition-colors"
            aria-label="LinkedIn"
          >
            <FiLinkedin className="w-5 h-5" />
          </a>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-secondary)] transition-colors"
            aria-label="GitHub"
          >
            <FiGithub className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            className="p-2.5 rounded-lg text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--bg-secondary)] transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault()
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.a>
    </section>
  )
}
