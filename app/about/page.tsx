import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata = { title: 'About', description: 'Learn about Solomon Media Group and the growth infrastructure it is building for modern businesses.' };

export default function About() {
  return (
    <main className="page about-page">
      <div className="shell">
        <span className="eyebrow">ABOUT SMG</span>
        <h1>We are building the infrastructure behind growth.</h1>
        <p className="lead">Solomon Media Group is a performance-oriented growth agency focused on helping businesses create predictable demand and capture the opportunities that follow.</p>

        <section className="about-founder">
          <div><span className="eyebrow">THE COMPANY</span><h2>Small by design.<br /><em>Serious about the system.</em></h2></div>
          <div><p>SMG is currently a solo-founder-run company led by Yosiah Smith in Wichita, Kansas. This is the first year the company is pushing toward real revenue, and the focus is on building infrastructure that can grow with it.</p><p>The work is intentionally narrow: Lead Acquisition and Sarah AI Receptionist, supported by the systems, automation, and technology needed to make those offerings useful.</p></div>
        </section>

        <section className="about-principles">
          <div className="section-head compact-head"><div><span className="eyebrow">OUR POINT OF VIEW</span><h2>Don't confuse<br />activity with growth.</h2></div><p>A campaign can be busy and a dashboard can look impressive without producing a meaningful business outcome. We care about the distance between marketing activity and a real opportunity.</p></div>
          <div className="principle-grid">
            <div className="principle"><span>01</span><h3>Commercial</h3><p>The economics of the offer matter. Growth has to make sense for the business behind it.</p></div>
            <div className="principle"><span>02</span><h3>Connected</h3><p>Acquisition, qualification, booking, and customer experience should not live in disconnected boxes.</p></div>
            <div className="principle"><span>03</span><h3>Practical</h3><p>Build what the business can actually operate today, then make it stronger over time.</p></div>
            <div className="principle"><span>04</span><h3>Measurable</h3><p>Focus on qualified opportunities and business outcomes instead of vanity metrics.</p></div>
          </div>
        </section>

        <section className="about-future">
          <div><span className="eyebrow">WHAT WE ARE BUILDING</span><h2>A company where technology makes the front end of a business stronger.</h2></div>
          <p>That means better acquisition, smarter qualification, useful automation, and AI that actually handles work—not technology for its own sake.</p>
        </section>

        <div className="actions page-actions"><Link className="btn" href="/get-started">Talk with SMG <ArrowUpRight size={16} /></Link></div>
      </div>
    </main>
  );
}
