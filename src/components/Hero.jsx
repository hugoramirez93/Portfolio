import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowDown, ArrowRight, Download, MapPin, Clock, Sparkles } from 'lucide-react'
import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { personalInfo } from '../data/portfolio'
import TerminalCard from './TerminalCard'

const EASE = [0.22, 1, 0.36, 1]

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
}

const specialties = ['L1 / L2 Support', 'Incident Management', 'Root-Cause Analysis', 'Log Analysis', 'SQL']

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-[100svh] items-center overflow-hidden pb-16 pt-28 sm:pt-32">
      <div className="shell w-full">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* ---------- Left column ---------- */}
          <motion.div variants={container} initial="hidden" animate="visible" className="lg:col-span-7">
            <motion.div variants={item} className="flex items-center gap-3">
              <div
                className="relative h-20 w-20 shrink-0 rounded-full p-[2.5px] shadow-[0_10px_30px_-12px_var(--glow)] sm:h-24 sm:w-24"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent-2))' }}
              >
                <img
                  src="/photo-hugo.jpg"
                  alt={personalInfo.name}
                  className="h-full w-full rounded-full object-cover object-top"
                />
                <span className="absolute bottom-0 right-0 h-4 w-4 rounded-full border-2 border-[var(--bg-primary)] bg-[var(--success)] sm:h-5 sm:w-5" />
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] bg-[var(--bg-card)] px-3 py-1.5 text-xs font-medium text-[var(--text-secondary)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--success)] opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--success)]" />
                </span>
                {personalInfo.availability}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-6xl"
            >
              {personalInfo.name}
            </motion.h1>

            <motion.p variants={item} className="mt-4 text-lg font-semibold sm:text-xl lg:text-[1.4rem]">
              <span className="gradient-text animate-gradient-x">
                {personalInfo.role} ({personalInfo.roleLevel})
              </span>
              <span className="mt-1 block text-base font-medium text-[var(--text-secondary)] sm:text-lg">
                {personalInfo.roleFocus}
              </span>
            </motion.p>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-[var(--text-secondary)] text-pretty sm:text-[1.05rem]"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-6 flex flex-wrap gap-2">
              {specialties.map((s) => (
                <span key={s} className="chip">
                  <Sparkles className="h-3 w-3" />
                  {s}
                </span>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-3">
              <a href={personalInfo.resumeUrl} download className="btn btn-primary">
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <Link to="/about" className="btn btn-ghost">
                Start the guided tour
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-[var(--text-secondary)]">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[var(--accent)]" />
                {personalInfo.location}
              </span>
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-[var(--accent)]" />
                {personalInfo.workMode}
              </span>

              <span className="flex items-center gap-2">
                <a
                  href={personalInfo.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn h-9 w-9"
                  aria-label="LinkedIn profile"
                >
                  <FiLinkedin className="h-4 w-4" />
                </a>
                <a
                  href={personalInfo.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="icon-btn h-9 w-9"
                  aria-label="GitHub profile"
                >
                  <FiGithub className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="icon-btn h-9 w-9 font-semibold"
                  aria-label="Send an email"
                >
                  @
                </a>
              </span>
            </motion.div>
          </motion.div>

          {/* ---------- Right column ---------- */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: EASE }}
            className="relative lg:col-span-5"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-y-6 -inset-x-2 -z-10 rounded-[2rem] opacity-70 blur-2xl sm:-inset-x-6"
              style={{ background: 'radial-gradient(circle at 60% 40%, var(--glow), transparent 70%)' }}
            />
            <TerminalCard />

            <div className="animate-float absolute -bottom-5 -left-4 hidden rounded-2xl border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-4 py-3 shadow-xl sm:block">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--text-muted)]">
                Repeat escalations
              </p>
              <p className="mt-0.5 text-lg font-bold text-[var(--success)]">↓ reduced</p>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.button
        type="button"
        onClick={() => scrollTo('tour')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] md:block"
        aria-label="See the guided tour"
      >
        <motion.span animate={{ y: [0, 7, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ArrowDown className="h-5 w-5" />
        </motion.span>
      </motion.button>
    </section>
  )
}
