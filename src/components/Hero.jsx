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
            <a href="#systems" className="button button-primary">Explore systems <span>↓</span></a>
            <a href="#features" className="text-link">Learn more <span>↗</span></a>
          </div>
          <div className="trust-row">
            <div><strong>24/7</strong><span>Secure access</span></div>
            <div><strong>2</strong><span>Official systems</span></div>
            <div><strong>1</strong><span>Access point</span></div>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orbit orbit-outer" />
          <div className="orbit orbit-inner" />
          <div className="art-card art-card-one">
            <span className="mini-icon">↗</span>
            <div><b>Communication transmitted</b><small>Tracked in CommTrack</small></div>
          </div>
          <div className="art-card art-card-two">
            <span className="avatar">✓</span>
            <div><b>Correspondence released</b><small>Updated in CorresFlow</small></div>
          </div>
          <div className="center-orb"><img src="/ched.png" alt="" /></div>
          <span className="spark spark-one">✦</span>
          <span className="spark spark-two">✦</span>
        </div>
      </div>
    </section>
  )
}

export default Hero
