import PageShell from '../components/PageShell'
import SkillsSection from '../components/Skills'
import ToolMarquee from '../components/ToolMarquee'

export default function Skills() {
  return (
    <PageShell path="/skills" step={1}>
      <SkillsSection />
      <ToolMarquee />
    </PageShell>
  )
}
