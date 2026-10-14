import Background from './components/Background'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ToolMarquee from './components/ToolMarquee'
import Metrics from './components/Metrics'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import IncidentCases from './components/IncidentCases'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Background />

      <Navbar />

      <main className="relative z-10">
        <Hero />
        <ToolMarquee />
        <Metrics />
        <About />
        <Skills />
        <Experience />
        <IncidentCases />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  )
}
