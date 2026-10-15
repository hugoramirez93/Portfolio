import PageShell from '../components/PageShell'
import EducationSection from '../components/Education'

export default function Education() {
  return (
    <PageShell path="/education" step={5}>
      <EducationSection />
    </PageShell>
  )
}
