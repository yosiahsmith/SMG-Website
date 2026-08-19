import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const metadata = { title: 'How It Works', description: 'See how Solomon Media Group connects acquisition, qualification, booking, and optimization into one growth system.' };

const steps = [
  ['01', 'Understand', 'We start with your business: what you sell, who you want, the economics of the offer, and where demand currently breaks down.'],
  ['02', 'Acquire', 'We put the right offer in front of the right market through a paid acquisition system built around qualified demand.'],
  ['03', 'Qualify', 'Raw inquiries become usable opportunities through qualification, routing, and the information your team actually needs.'],
  ['04', 'Book', 'The next step is made clear—whether that means a call, appointment, or booked job—so opportunities do not sit untouched.'],
  ['05', 'Improve', 'We use performance and customer information to identify bottlenecks and improve the system over time.'],
];

export default function HowItWorks() {
  return (
    <main className="page how-page">
      <div className="shell">
        <span className="eyebrow">HOW IT WORKS</span>
        <h1>From attention to opportunity.</h1>
        <p className="lead">A growth system should have somewhere for demand to go. SMG connects the pieces between acquisition and the actual business outcome.</p>

        <section className="flow-visual" aria-label="SMG growth flow">
          <div><span>01</span><strong>ATTENTION</strong><small>Paid acquisition</small></div>
          <i />
          <div><span>02</span><strong>INTEREST</strong><small>Lead capture</small></div>
          <i />
          <div><span>03</span><strong>QUALIFIED</strong><small>Lead qualification</small></div>
          <i />
          <div><span>04</span><strong>BOOKED</strong><small>Call / appointment</small></div>
        </section>

        <section className="process-section">
          <div className="section-head compact-head"><div><span className="eyebrow">THE PROCESS</span><h2>No black box.<br />Just connected steps.</h2></div><p>Every part exists to move a potential customer closer to a real conversation or transaction.</p></div>
          <div className="process-list">
            {steps.map(([n, title, text]) => <div className="process-row" key={n}><span className="process-no">{n}</span><h3>{title}</h3><p>{text}</p></div>)}
          </div>
        </section>

        <section className="two-track">
          <div><span className="eyebrow">WHERE SARAH FITS</span><h2>Acquisition brings demand in.<br />Sarah helps answer it.</h2><p>Lead Acquisition and Sarah are separate offerings, but they share the same philosophy: create demand, capture it, and make sure a real person or system takes the next step.</p><Link className="textlink" href="/services/sarah">Explore Sarah <ArrowRight size={15} /></Link></div>
          <div className="track-card"><span>THE LOOP</span><strong>Acquire</strong><b>→</b><strong>Qualify</strong><b>→</b><strong>Book</strong><b>→</b><strong>Improve</strong></div>
        </section>

        <div className="actions page-actions"><Link className="btn" href="/get-started">See if we're a fit <ArrowUpRight size={16} /></Link></div>
      </div>
    </main>
  );
}
