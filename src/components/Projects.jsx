import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, FolderOpen, Code, Gamepad2, Cloud, Terminal } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'
import {
  SiReact,
  SiVite,
  SiJavascript,
  SiCss,
  SiHtml5,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiSqlite,
  SiStripe,
  SiNextdotjs,
  SiPrisma,
  SiAngular,
  SiJsonwebtokens,
} from 'react-icons/si'
import { projects } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const tagIcons = {
  React: SiReact,
  Vite: SiVite,
  JavaScript: SiJavascript,
  CSS: SiCss,
  HTML: SiHtml5,
  TypeScript: SiTypescript,
  'Node.js': SiNodedotjs,
  Express: SiExpress,
  SQLite: SiSqlite,
  Stripe: SiStripe,
  'Next.js': SiNextdotjs,
  Prisma: SiPrisma,
  Angular: SiAngular,
  JWT: SiJsonwebtokens,
  'REST API': Cloud,
}

const FRONTEND = ['React', 'Angular', 'HTML', 'CSS']
const BACKEND = ['Node.js', 'Express', 'Prisma', 'Next.js', 'TypeScript', 'SQLite']

function categoriesOf(project) {
  const set = new Set()
  if (project.tags.some((t) => FRONTEND.includes(t))) set.add('Frontend')
  if (project.tags.some((t) => BACKEND.includes(t)) || project.tags.includes('REST API')) set.add('Backend')
  return set
}

const filters = [
  { key: 'all', label: 'All' },
  { key: 'featured', label: 'Featured' },
  { key: 'Frontend', label: 'Frontend' },
  { key: 'Backend', label: 'Backend & APIs' },
]

function TagBadge({ tag }) {
  const Icon = tagIcons[tag]
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-[var(--chip-bg)] px-2 py-0.5 text-[11px] font-medium text-[var(--accent)]">
      {Icon ? <Icon className="h-3 w-3" aria-hidden="true" /> : <Code className="h-3 w-3" aria-hidden="true" />}
      {tag}
    </span>
  )
}

function ProjectCard({ project }) {
  const HeroIcon = tagIcons[project.tags[0]] || FolderOpen

  return (
    <motion.article
      layout
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="panel panel-hover group flex h-full flex-col overflow-hidden"
    >
      <div className="relative flex h-40 items-center justify-center overflow-hidden border-b border-[var(--border-card)] bg-tint-accent-soft">
        <div className="bg-dots absolute inset-0 opacity-70" aria-hidden="true" />
        <HeroIcon className="relative h-14 w-14 text-[var(--accent)] opacity-70 transition-transform duration-500 group-hover:scale-110" aria-hidden="true" />

        {project.featured && (
          <span className="absolute right-3 top-3 rounded-full border border-[var(--border-strong)] bg-[var(--bg-elevated)] px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wider text-[var(--accent)]">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-[var(--text-primary)]">{project.title}</h3>
        <p className="mt-1.5 flex-1 text-sm leading-relaxed text-[var(--text-secondary)]">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <TagBadge key={tag} tag={tag} />
          ))}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[var(--border-card)] pt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="-my-1 inline-flex items-center gap-1.5 py-1 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              <FiGithub className="h-3.5 w-3.5" />
              Source
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="-my-1 inline-flex items-center gap-1.5 py-1 text-xs font-semibold text-[var(--text-secondary)] transition-colors hover:text-[var(--accent)]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default function Projects() {
  const [filter, setFilter] = useState('all')

  const visible = useMemo(() => {
    if (filter === 'all') return projects
    if (filter === 'featured') return projects.filter((p) => p.featured)
    return projects.filter((p) => categoriesOf(p).has(filter))
  }, [filter])

  return (
    <section id="projects" className="shell scroll-mt-24 py-20 sm:py-28">
      <SectionHeading
        eyebrow="Development background"
        title="A developer's eye for"
        highlight="technical support"
        description="Hands-on projects built while studying — the same curiosity I bring to reproducing and debugging production issues."
      />

      <Reveal delay={0.1} className="mt-8 flex flex-wrap justify-center gap-2">
        {filters.map(({ key, label }) => (
          <button
            key={key}
            type="button"
            onClick={() => setFilter(key)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all ${
              filter === key
                ? 'border-[var(--accent)] bg-[var(--chip-bg)] text-[var(--accent)]'
                : 'border-[var(--border-card)] text-[var(--text-secondary)] hover:bd-accent-25 hover:text-[var(--text-primary)]'
            }`}
          >
            {label}
          </button>
        ))}
      </Reveal>

      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal delay={0.1}>
        <div className="panel mt-8 flex flex-col items-center gap-3 p-5 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="flex items-center gap-2 text-sm text-[var(--text-secondary)]">
            <Terminal className="h-4 w-4 text-[var(--accent)]" />
            More repositories and experiments live on GitHub.
          </p>
          <a
            href="https://github.com/hugoramirez93"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-ghost"
          >
            <FiGithub className="h-4 w-4" />
            Browse all repositories
          </a>
        </div>
      </Reveal>
    </section>
  )
}
