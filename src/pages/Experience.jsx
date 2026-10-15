import PageShell from '../components/PageShell'
import ExperienceSection from '../components/Experience'

export default function Experience() {
  return (
    <PageShell path="/experience" step={2}>
      <ExperienceSection />
    </PageShell>
  )
}
