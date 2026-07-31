import { scrollToSection } from '../utils/scrollToSection'

function Hero() {
  return (
    <section className="hero-section" id="top">
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />
      <div className="hero-content section-wrap">
        <div className="hero-copy">
          <p className="hero-label"><span /> Office of Commissioner Desiderio R. Apag III</p>
          <h1>Official records.<br /><em>Clearly connected.</em></h1>
          <p className="hero-lead">
            Access CommTrack and CorresFlow—the Commission’s platforms for monitoring communications and managing correspondence.
          </p>
          <div className="hero-actions">
            <a href="#systems" className="button button-primary" onClick={(event) => scrollToSection(event, 'systems')}>Explore systems <span>↓</span></a>
            <a href="#features" className="text-link" onClick={(event) => scrollToSection(event, 'features')}>Learn more <span>↗</span></a>
          </div>
          <div className="trust-row">
            <div><strong>24/7</strong><span>Secure access</span></div>
            <div><strong>2</strong><span>Official systems</span></div>
            <div><strong>1</strong><span>Access point</span></div>
          </div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-outer" aria-hidden="true" />
          <div className="orbit orbit-inner" aria-hidden="true" />
          <a
            className="art-card art-card-one"
            href="https://ocdra-commtracksys.vercel.app"
            aria-label="Open CommTrack"
          >
            <span className="mini-icon" aria-hidden="true">↗</span>
            <div><b>Communication transmitted</b><small>Tracked in CommTrack</small></div>
          </a>
          <a
            className="art-card art-card-two"
            href="https://drm-system.vercel.app"
            aria-label="Open CorresFlow"
          >
            <span className="avatar" aria-hidden="true">✓</span>
            <div><b>Correspondence released</b><small>Updated in CorresFlow</small></div>
          </a>
          <div className="center-orb" aria-hidden="true"><img src="/ched.png" alt="" /></div>
          <span className="spark spark-one" aria-hidden="true">✦</span>
          <span className="spark spark-two" aria-hidden="true">✦</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
