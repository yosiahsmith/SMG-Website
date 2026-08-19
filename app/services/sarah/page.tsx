import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Phone, CalendarDays, MessageSquareText, ArrowLeftRight } from 'lucide-react';

export const metadata = { title: 'Sarah AI Receptionist', description: 'Meet Sarah, Solomon Media Group’s AI receptionist for inbound calls, scheduling, confirmations, and transfers.' };

const capabilities = [
  ['01', 'Answers calls', 'Give callers a professional first response without forcing your team to answer every routine call.'],
  ['02', 'Schedules', 'Connect conversations to appointment booking and make the next step easy for the caller.'],
  ['03', 'Confirms', 'Help reduce missed appointments with confirmation communication after scheduling.'],
  ['04', 'Transfers', 'Route calls and escalate situations when a human needs to step in.'],
];

export default function Sarah() {
  return (
    <main className="page service-detail-page sarah-detail">
      <div className="shell">
        <span className="eyebrow">SMG / SARAH AI RECEPTIONIST</span>
        <h1>Never let a ringing phone<br /><em>become a lost opportunity.</em></h1>
        <p className="lead">Sarah is SMG's AI receptionist—built to handle inbound conversations, scheduling, confirmations, transfers, and the routine work that keeps your team from answering every call.</p>

        <section className="sarah-console">
          <div className="console-head"><span>LIVE RECEPTIONIST</span><i /></div>
          <div className="console-grid">
            <div className="console-call"><Phone size={19} /><span>INBOUND CALL</span><strong>“How can I help you today?”</strong><small>Sarah responds, understands the request, and moves the caller toward the right next step.</small></div>
            <div className="console-actions"><div><CalendarDays /><span>BOOK</span></div><div><MessageSquareText /><span>CONFIRM</span></div><div><ArrowLeftRight /><span>TRANSFER</span></div></div>
          </div>
        </section>

        <section className="detail-process"><div className="section-head compact-head"><div><span className="eyebrow">WHAT SARAH DOES</span><h2>A receptionist<br />built around your business.</h2></div><p>Sarah is tailored around your business information, services, hours, policies, and booking behavior.</p></div><div className="process-list">{capabilities.map(([n,t,d]) => <div className="process-row" key={n}><span className="process-no">{n}</span><h3>{t}</h3><p>{d}</p></div>)}</div></section>

        <section className="pricing-panel"><div><span className="eyebrow">SARAH</span><h2>Starts at<br />$997 / month</h2><p>Plus a one-time $225 setup/service charge. Tiered pricing may be introduced as the product expands.</p></div><div className="pricing-side"><span>BUILT FOR</span><strong>Businesses where a missed call can mean a missed customer.</strong></div></section>

        <div className="actions page-actions"><Link className="btn" href="/get-started">Get Sarah <ArrowUpRight size={16} /></Link><Link className="textlink" href="/services">Back to services <ArrowRight size={15} /></Link></div>
      </div>
    </main>
  );
}
