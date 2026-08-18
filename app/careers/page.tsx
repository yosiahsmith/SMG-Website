import Link from 'next/link';
import careers from '../../data/careers.json';

export default function Careers(){
  const openRoles = careers.roles.filter(role => role.active);
  return <main className="page careers-page"><div className="shell">
    <span className="eyebrow">CAREERS</span>
    <h1>Build what comes next.</h1>
    <p className="lead">We're building a company around measurable growth, practical AI, and systems that make businesses better. Find your place on the team.</p>

    <section className="careers-section">
      <div className="section-head"><div><span className="tag">OPEN POSITIONS</span><h2>Find your role.</h2></div><p>{openRoles.length} {openRoles.length === 1 ? 'position' : 'positions'} currently open.</p></div>
      {openRoles.length ? <div className="careers-grid">{openRoles.map(role => <article className="career-card" key={role.id}>
        <div className="career-top"><span className="tag">{role.department}</span><span className="career-arrow">↗</span></div>
        <div><h3>{role.title}</h3><p>{role.description}</p></div>
        <div className="career-meta"><span>{role.type}</span><span>{role.location}</span></div>
        <a className="career-apply" href={`mailto:${role.applyEmail}?subject=${encodeURIComponent(`Application: ${role.title}`)}`}>Apply for this role <span>→</span></a>
      </article>)}</div> : <div className="card"><h3>No open positions right now.</h3><p>We don't currently have an active opening, but we're always interested in exceptional people.</p><Link className="btn" href="mailto:careers@solomedia.group">Introduce yourself</Link></div>}
    </section>

    <section className="careers-note"><div className="career-note-grid"><div><span className="tag">HOW WE HIRE</span><h2>Small team.<br/>High ownership.</h2></div><p>We care more about what you can build than whether you fit a rigid job description. We look for people who move quickly, think commercially, communicate clearly, and take responsibility for outcomes.</p></div></section>
  </div></main>
}