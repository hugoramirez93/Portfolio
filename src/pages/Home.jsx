import Hero from '../components/Hero'
import Metrics from '../components/Metrics'
import GuidedPath from '../components/GuidedPath'
import Contact from '../components/Contact'
import usePageMeta from '../hooks/usePageMeta'
import { SEO } from '../data/seo'

export default function Home() {
  usePageMeta({ ...SEO['/'], path: '/' })

  return (
    <>
      <Hero />
      <Metrics />
      <GuidedPath />
      <Contact />
    </>
  )
}
