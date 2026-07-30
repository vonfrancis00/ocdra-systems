import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import SystemCard from './components/SystemCard'
import Features from './components/Features'
import Footer from './components/Footer'

const systems = [
  {
    number: '01',
    eyebrow: 'Communication monitoring & tracking',
    title: 'CommTrack',
    description:
      'A centralized and secure workspace for monitoring official communications, responses, and pending actions.',
    color: 'blue',
    icon: 'communication',
    href: 'https://ocdra-commtracksys.vercel.app',
    capabilities: ['Live tracking', 'Action monitoring', 'Secure records'],
  },
  {
    number: '02',
    eyebrow: 'Integrated correspondence system',
    title: 'CorresFlow',
    description:
      'Create, organize, track, and deliver official correspondence through one streamlined records platform.',
    color: 'amber',
    icon: 'correspondence',
    href: 'https://drm-system.vercel.app',
    capabilities: ['Document creation', 'Records workflow', 'Release tracking'],
  },
]

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <Hero />
        <section className="systems section-wrap" id="systems" aria-labelledby="systems-title">
          <div className="section-heading">
            <p className="eyebrow">Digital services</p>
            <h2 id="systems-title">Choose your workspace</h2>
            <p>Access CHED’s official communication and correspondence platforms in one secure place.</p>
          </div>
          <div className="system-grid">
            {systems.map((system) => <SystemCard key={system.number} {...system} />)}
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  )
}

export default App
