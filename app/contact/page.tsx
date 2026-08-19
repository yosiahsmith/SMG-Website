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
        <section className="contact-options">
          <Link className="contact-option" href="/get-started"><span>01</span><h2>Book a discovery call</h2><p>Tell us what you sell, where growth is getting stuck, and what you want more of.</p><strong>Get started <ArrowUpRight size={16} /></strong></Link>
          <div className="contact-option"><span>02</span><h2>Know what you need?</h2><p>Explore the two current SMG offerings before you book: Lead Acquisition and Sarah AI Receptionist.</p><strong><Link href="/services">View services <ArrowUpRight size={16} /></Link></strong></div>
        </section>
      </div>
    </main>
  );
}
