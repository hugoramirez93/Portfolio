import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import Projects from './components/Projects'
import Contact from './components/Contact'
import ScrollToTop from './components/ScrollToTop'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-xs text-[var(--text-secondary)] border-t border-[var(--border)]">
        <p>&copy; {new Date().getFullYear()} Hugo Ramirez. Built with React &amp; Tailwind CSS.</p>
      </footer>
      <ScrollToTop />
    </div>
  )
}
