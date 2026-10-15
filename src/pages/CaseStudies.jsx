import PageShell from '../components/PageShell'
import IncidentCases from '../components/IncidentCases'

export default function CaseStudies() {
  return (
    <PageShell path="/case-studies" step={3}>
      <IncidentCases />
    </PageShell>
  )
}
