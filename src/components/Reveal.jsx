import { motion } from 'framer-motion'

const EASE = [0.22, 1, 0.36, 1]

/**
 * Reveals children with a subtle fade + rise when they enter the viewport.
 * Pass `delay` for staggering and `as` to change the rendered element.
 */
export default function Reveal({ children, delay = 0, className = '', as = 'div', y = 26 }) {
  const Component = motion[as] || motion.div

  return (
    <Component
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-70px' }}
      transition={{ duration: 0.55, delay, ease: EASE }}
      className={className}
    >
      {children}
    </Component>
  )
}
