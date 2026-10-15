import PageShell from '../components/PageShell'
import SkillsSection from '../components/Skills'
import ToolMarquee from '../components/ToolMarquee'
import AiStack from '../components/AiStack'

export default function Skills() {
  return (
    <PageShell path="/skills" step={1}>
      <SkillsSection />
      <ToolMarquee />
      <AiStack />
    </PageShell>
  )
}
