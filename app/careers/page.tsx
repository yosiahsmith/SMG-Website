import careers from '../../data/careers.json';
import CareerCard from '../../components/CareerCard';

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
        {openRoles.map(role => <CareerCard key={role.id} role={role} />)}
        <CareerCard />
      </div>
    </section>

    <section className="careers-note"><div className="career-note-grid"><div><span className="tag">HOW WE HIRE</span><h2>Small team.<br/>High ownership.</h2></div><p>We care more about what you can build than whether you fit a rigid job description. We look for people who move quickly, think commercially, communicate clearly, and take responsibility for outcomes.</p></div></section>
  </div></main>
}
