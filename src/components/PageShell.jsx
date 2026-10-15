import { motion } from 'framer-motion'
import JourneyBar from './JourneyBar'
import NextStep from './NextStep'
import usePageMeta from '../hooks/usePageMeta'
import { SEO } from '../data/seo'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Shared wrapper for every guided page: sets page metadata, renders the
 * progress bar on top and the "next step" panel at the bottom.
 *
 * @param step 0-based index into `journey`
 * @param path route path used to look up SEO metadata in `src/data/seo.js`
 */
export default function PageShell({ step, path, title, description, children }) {
  const meta = SEO[path] || {}
  usePageMeta({ ...meta, path, title: title ?? meta.title, description: description ?? meta.description })

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className="pt-16"
    >
      <JourneyBar step={step} />
      {children}
      <NextStep step={step} />
    </motion.div>
  )
}
