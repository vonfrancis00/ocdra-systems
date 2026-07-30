import { useEffect, useState } from 'react'

const Brand = () => (
  <a className="brand" href="#" aria-label="CHED Systems home">
    <img className="brand-seal" src="/ched.png" alt="Commission on Higher Education" />
    <span>OCDRA <span className="brand-muted"> OFFICE SYSTEMS</span></span>
  </a>
)

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`navbar${scrolled ? ' is-scrolled' : ''}`}>
      <div className="nav-inner">
        <Brand />
        <button className="menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="main-navigation" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen((open) => !open)}>
          <span /><span />
        </button>
        <nav id="main-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Main navigation">
          <a href="#systems" onClick={() => setMenuOpen(false)}>Systems</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Why this portal</a>
          <a href="#support" onClick={() => setMenuOpen(false)}>Support</a>
        </nav>
        <span className="nav-cta nav-cta-spacer" aria-hidden="true">
          Open a system <span aria-hidden="true">↗</span>
        </span>
      </div>
    </header>
  )
}

export default Navbar
