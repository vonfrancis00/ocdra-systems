const features = [
  ['shield', 'Secure by design', 'Enterprise-grade protection keeps your data private and your account safe.'],
  ['bolt', 'Fast and reliable', 'Purpose-built for speed, so you can get things done without waiting.'],
  ['spark', 'Simple to use', 'A thoughtful, consistent experience across every device and every system.'],
]

const icons = {
  shield: <path d="M12 3 5 6v5c0 4.8 2.8 8.1 7 10 4.2-1.9 7-5.2 7-10V6l-7-3Z M9 12l2 2 4-4" />,
  bolt: <path d="m13 2-8 12h7l-1 8 8-12h-7l1-8Z" />,
  spark: <path d="M12 2c.6 5.7 2.3 7.4 8 8-5.7.6-7.4 2.3-8 8-.6-5.7-2.3-7.4-8-8 5.7-.6 7.4-2.3 8-8Z" />,
}

function Features() {
  return (
    <section className="features" id="features">
      <div className="section-wrap feature-inner">
        <div className="feature-intro">
          <p className="eyebrow">Official digital services</p>
          <h2>One less thing<br />to think about.</h2>
        </div>
        <div className="feature-list">
          {features.map(([icon, title, text], index) => (
            <article className="feature-item" key={title}>
              <span className="feature-number">0{index + 1}</span>
              <div className="feature-icon"><svg viewBox="0 0 24 24">{icons[icon]}</svg></div>
              <div><h3>{title}</h3><p>{text}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
