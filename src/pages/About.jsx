import PageShell from '../components/PageShell'
import AboutSection from '../components/About'

export default function About() {
  return (
    <PageShell path="/about" step={0}>
      <AboutSection />
    </PageShell>
  )
}
