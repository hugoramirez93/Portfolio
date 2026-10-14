import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animates a number from 0 (or `start`) to `target` once its container
 * scrolls into view. Returns a ref to attach to the container and the
 * current animated value.
 */
export function useCountUp(target, { duration = 1500, start = 0 } = {}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(start)

  useEffect(() => {
    if (!inView) return undefined

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReduced) {
      setValue(target)
      return undefined
    }

    let raf
    const t0 = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - t0) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(start + (target - start) * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }

    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, target, duration, start])

  return { ref, value }
}
