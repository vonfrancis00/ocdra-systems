const Brand = () => (
  <a className="brand" href="#" aria-label="CHED Systems home">
    <img className="brand-seal" src="/ched.png" alt="Commission on Higher Education" />
    <span>OCDRA <span className="brand-muted">SYSTEMS</span></span>
  </a>
)

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Brand />
        <nav aria-label="Main navigation">
          <a href="#systems">Systems</a>
          <a href="#features">Why this portal</a>
          <a href="#support">Support</a>
        </nav>
        <a className="nav-cta" href="#systems">
          Open a system <span aria-hidden="true">↗</span>
        </a>
      </div>
    </header>
  )
}

export default Navbar
