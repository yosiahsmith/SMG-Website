import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const metadata = { title: 'Lead Acquisition', description: 'SMG Lead Acquisition connects Meta Ads, qualification, and job booking into one performance-oriented system.' };

const pieces = [
  ['01', 'Acquire', 'Put the right offer in front of the right market through Meta Ads and a campaign built around the economics of the business.'],
  ['02', 'Capture', 'Give interested prospects a clear path to respond so demand is captured instead of lost.'],
  ['03', 'Qualify', 'Separate real opportunities from noise so the business can spend time on prospects that actually fit.'],
  ['04', 'Book', 'Move qualified demand toward a call, appointment, or booked job with the next action connected to the system.'],
];

export default function LeadAcquisition() {
  return (
    <main className="page service-detail-page">
      <div className="shell">
        <span className="eyebrow">SMG / LEAD ACQUISITION</span>
        <h1>More than leads.<br /><em>A path to booked business.</em></h1>
        <p className="lead">Lead Acquisition is SMG's end-to-end paid acquisition offer: campaigns, qualification, and job booking designed as one system.</p>

        <section className="detail-hero-panel">
          <div><span>THE OFFER</span><strong>AD → QUALIFIED LEAD → BOOKED OPPORTUNITY</strong></div>
          <p>We do not treat lead generation as the finish line. The value is in what happens after someone raises their hand.</p>
        </section>

        <section className="detail-process">
          <div className="section-head compact-head"><div><span className="eyebrow">END TO END</span><h2>Every stage has<br />a job to do.</h2></div><p>Acquisition, qualification, and conversion are connected so performance can be judged by business outcomes.</p></div>
          <div className="process-list">{pieces.map(([n,t,d]) => <div className="process-row" key={n}><span className="process-no">{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div>
        </section>

        <section className="economics-panel"><span className="eyebrow">WHAT WE BUILD AROUND</span><div className="economics-grid"><div><strong>Your offer</strong><span>What makes the right customer say yes?</span></div><div><strong>Your market</strong><span>Who is worth acquiring?</span></div><div><strong>Your economics</strong><span>What does a new customer actually mean?</span></div><div><strong>Your sales capacity</strong><span>What can your team realistically handle?</span></div></div></section>

        <div className="actions page-actions"><Link className="btn" href="/get-started">Talk about Lead Acquisition <ArrowUpRight size={16} /></Link><Link className="textlink" href="/services">Back to services <ArrowRight size={15} /></Link></div>
      </div>
    </main>
  );
}
