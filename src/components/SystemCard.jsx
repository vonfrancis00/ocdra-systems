function SystemIcon({ type }) {
  if (type === 'communication') {
    return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 15a3 3 0 0 1-3 3H8l-4 3v-14a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v8Z"/><path d="M8 9h8M8 13h5"/></svg>
  }
  return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/><path d="M16 3v4M8 3v4"/></svg>
}

function SystemCard({ number, eyebrow, title, description, color, icon, href, capabilities }) {
  return (
    <article className={`system-card ${color}`}>
      <div className="card-topline"><span>{number}</span><span className="status"><i /> Online</span></div>
      <div className="system-icon"><SystemIcon type={icon} /></div>
      <p className="card-eyebrow">{eyebrow}</p>
      <h3>{title}</h3>
      <p className="card-description">{description}</p>
      <ul className="capability-list" aria-label={`${title} capabilities`}>
        {capabilities.map((capability) => <li key={capability}>{capability}</li>)}
      </ul>
      <a href={href} target="_blank" rel="noreferrer" className="card-link">
        Access system <span aria-hidden="true">→</span>
      </a>
      <div className="card-watermark" aria-hidden="true">{number}</div>
    </article>
  )
}

export default SystemCard
