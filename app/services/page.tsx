import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata = { title: 'Services', description: 'Explore Solomon Media Group Lead Acquisition and Sarah AI Receptionist.' };

export default function Services() {
  return (
    <main className="page services-page">
      <div className="shell">
        <span className="eyebrow">SERVICES & PRODUCTS</span>
        <h1>Two ways to build a stronger front end for growth.</h1>
        <p className="lead">SMG is a performance-oriented growth agency focused on the systems that create and capture demand. Right now, that means two offerings.</p>

        <section className="service-showcase">
          <Link className="service-large-card" href="/services/lead-generation">
            <div className="service-card-top"><span>01 / LEAD ACQUISITION</span><ArrowUpRight size={21} /></div>
            <div className="service-card-body"><h2>Qualified demand.<br /><em>Built around your business.</em></h2><p>Meta Ads, lead qualification, and job booking as one connected acquisition offer. We build around your market, offer economics, and sales process—not a generic campaign template.</p></div>
            <div className="service-card-bottom"><span>Paid acquisition</span><span>Qualification</span><span>Booking</span><span>Optimization</span></div>
          </Link>

          <Link className="service-large-card sarah-card" href="/services/sarah">
            <div className="service-card-top"><span>02 / SARAH AI RECEPTIONIST</span><ArrowUpRight size={21} /></div>
            <div className="service-card-body"><h2>Your always-on<br /><em>front desk.</em></h2><p>Sarah answers inbound calls, handles routine questions, schedules appointments, sends confirmations, transfers calls, and helps businesses capture opportunities that would otherwise be missed.</p></div>
            <div className="service-card-bottom"><span>Calls</span><span>Scheduling</span><span>Confirmations</span><span>Transfers</span></div>
          </Link>
        </section>

        <section className="service-note">
          <div><span className="eyebrow">WHY ONLY TWO?</span><h2>Because the pieces work better together than they sound on a menu.</h2></div>
          <p>Paid acquisition, qualification, booking, and automation are capabilities inside the systems we build—not six separate services we are trying to sell you.</p>
        </section>

        <div className="actions page-actions"><Link className="btn" href="/get-started">Talk to SMG <ArrowUpRight size={16} /></Link></div>
      </div>
    </main>
  );
}
