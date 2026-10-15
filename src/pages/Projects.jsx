import PageShell from '../components/PageShell'
import ProjectsSection from '../components/Projects'

export default function Projects() {
  return (
    <PageShell path="/projects" step={4}>
      <ProjectsSection />
    </PageShell>
  )
}
