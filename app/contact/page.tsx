import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata = { title: 'Contact', description: 'Talk with Solomon Media Group about Lead Acquisition or Sarah AI Receptionist.' };

export default function Contact() {
  return (
    <main className="page contact-page">
      <div className="shell">
        <span className="eyebrow">CONTACT SMG</span>
        <h1>Start with the problem.<br /><em>We'll talk about the system.</em></h1>
        <p className="lead">Whether you need more qualified demand or a better way to handle inbound opportunities, the easiest place to start is a conversation.</p>
        <section>
          <div className="grid">
            <Link className="card" href="/get-started"><span className="num">01</span><h3>Book a discovery call</h3><p>Tell us what you sell, where growth is getting stuck, and what you want more of.</p><strong>Get started <ArrowUpRight size={16} /></strong></Link>
            <div className="card"><span className="num">02</span><h3>Know what you need?</h3><p>Explore the two current SMG offerings before you book: Lead Acquisition and Sarah AI Receptionist.</p><strong><Link href="/services">View services <ArrowUpRight size={16} /></Link></strong></div>
          </div>
        </section>
      </div>
    </main>
  );
}
