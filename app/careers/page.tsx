import Link from 'next/link';
import careers from '../../data/careers.json';

export const metadata = { title: 'Careers', description: 'Explore open positions and opportunities to join Solomon Media Group.' };

export default function Careers(){
  const openRoles = careers.roles.filter(role => role.active);
  return <main className="page careers-page"><div className="shell">
    <span className="eyebrow">CAREERS</span>
    <h1>Build what comes next.</h1>
    <p className="lead">We're building a company around measurable growth, practical AI, and systems that make businesses better. Find your place on the team.</p>

    <section className="careers-section">
      <div className="section-head"><div><span className="tag">OPEN POSITIONS</span><h2>Find your role.</h2></div><p>{openRoles.length} {openRoles.length === 1 ? 'position' : 'positions'} currently open.</p></div>
      <div className="careers-grid">
        {openRoles.map(role => <article className="career-card" key={role.id}>
          <div className="career-top"><span className="tag">{role.department}</span><span className="career-arrow">↗</span></div>
          <div><h3>{role.title}</h3><p>{role.description}</p></div>
          <div className="career-meta"><span>{role.type}</span><span>{role.location}</span></div>
          <Link className="career-apply" href={`/careers/apply?position=${encodeURIComponent(role.title)}`}>Apply for this role <span>→</span></Link>
        </article>)}
        <article className="career-card general-card">
          <div className="career-top"><span className="tag">GENERAL APPLICATION</span><span className="career-arrow">↗</span></div>
          <div><h3>Don't see your role?</h3><p>If none of our current openings fit, or every position is already filled, we'd still like to hear from exceptional people.</p></div>
          <div className="career-meta"><span>Future opportunities</span><span>Open application</span></div>
          <Link className="career-apply" href="/careers/apply">Send a general application <span>→</span></Link>
        </article>
      </div>
    </section>

    <section className="careers-note"><div className="career-note-grid"><div><span className="tag">HOW WE HIRE</span><h2>Small team.<br/>High ownership.</h2></div><p>We care more about what you can build than whether you fit a rigid job description. We look for people who move quickly, think commercially, communicate clearly, and take responsibility for outcomes.</p></div></section>
  </div></main>
}