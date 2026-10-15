import { Link } from 'react-router-dom'
import { Home, Compass } from 'lucide-react'
import { journey } from '../data/journey'
import usePageMeta from '../hooks/usePageMeta'

export default function NotFound() {
  usePageMeta({
    title: 'Page not found',
    description: 'That page does not exist. Head back to the home page or start the guided tour.',
    path: '/404',
    noindex: true,
  })

  return (
    <section className="shell flex min-h-[80vh] flex-col items-center justify-center py-24 pt-32 text-center">
      <span className="eyebrow justify-center">Error 404</span>

      <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-5xl md:text-6xl">
        <span className="gradient-text">Lost in production</span>
      </h1>

      <p className="mt-4 max-w-lg text-base leading-relaxed text-[var(--text-secondary)]">
        This page doesn’t exist — or it moved. Either way, it’s an easy fix. Let’s get you back on
        track.
      </p>

      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link to="/" className="btn btn-primary">
          <Home className="h-4 w-4" />
          Back to home
        </Link>
        <Link to={journey[0].path} className="btn btn-ghost">
          <Compass className="h-4 w-4" />
          Start the tour
        </Link>
      </div>
    </section>
  )
}
