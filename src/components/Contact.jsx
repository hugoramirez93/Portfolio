import { motion } from 'framer-motion'
import { Mail, Send } from 'lucide-react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'
import SectionWrapper from './SectionWrapper'

export default function Contact() {
  const contactItems = [
    {
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
      icon: Mail,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/hugo-ramirez-246bab251',
      href: personalInfo.social.linkedin,
      icon: FiLinkedin,
    },
    {
      label: 'GitHub',
      value: 'github.com/hugo-ramirez',
      href: personalInfo.social.github,
      icon: FiGithub,
    },
  ]

  return (
    <SectionWrapper id="contact" className="py-20 px-4 bg-[var(--bg-secondary)]">
      <div className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-center mb-4 text-[var(--text-primary)]"
        >
          Get In Touch
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-[var(--text-secondary)] mb-10 max-w-lg mx-auto"
        >
          I'm always open to new opportunities, collaborations, or just a friendly chat.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-4 mb-10">
          {contactItems.map(({ label, value, href, icon: Icon }, index) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ y: -3 }}
              className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-xl p-5 text-center hover:border-[var(--accent)]/30 hover:shadow-md transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center mx-auto mb-3 group-hover:bg-[var(--accent)] group-hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-[var(--text-primary)]">{label}</p>
              <p className="text-xs text-[var(--text-secondary)] mt-0.5 truncate">{value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[var(--bg-card)] border border-[var(--border-card)] rounded-2xl p-6 sm:p-8"
        >
          <form
            action={`mailto:${personalInfo.email}`}
            method="GET"
            encType="text/plain"
            className="space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
              />
              <input
                type="text"
                name="body"
                placeholder="Your message"
                required
                className="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border)] text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent)] transition-colors text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-[var(--accent)] text-white rounded-xl font-medium hover:bg-[var(--accent-hover)] transition-colors shadow-lg shadow-[var(--accent)]/25 flex items-center justify-center gap-2 text-sm"
            >
              <Send className="w-4 h-4" />
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
