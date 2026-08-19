import Link from 'next/link';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export const metadata = {
  title: 'Home',
  description: 'Solomon Media Group builds growth infrastructure through Lead Acquisition and Sarah AI Receptionist.',
};

export default function Home() {
  return (
    <main>
      <section className="hero hero-home">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">SOLOMON MEDIA GROUP / GROWTH INFRASTRUCTURE</span>
            <h1>Turn demand into <em>real opportunities.</em></h1>
            <p className="hero-lead">SMG connects acquisition, qualification, booking, and AI into systems built around the economics of your business—not vanity metrics.</p>
            <div className="actions">
              <Link className="btn" href="/get-started">Get started <ArrowUpRight size={16} /></Link>
              <Link className="btn secondary" href="/how-it-works">See how it works <ArrowRight size={16} /></Link>
            </div>
          </div>
          <div className="hero-system" aria-label="SMG growth infrastructure overview">
            <div className="system-label">THE SYSTEM</div>
            <div className="system-node system-primary">DEMAND</div>
            <div className="system-line" />
            <div className="system-row">
              <div className="system-node">QUALIFY</div>
              <div className="system-node">BOOK</div>
            </div>
            <div className="system-line short" />
            <div className="system-node system-result">OPPORTUNITY</div>
            <p>One connected path from attention to a customer conversation.</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="shell split-intro">
          <div>
            <span className="eyebrow">WHAT SMG ACTUALLY DOES</span>
            <h2>Two products.<br />One philosophy.</h2>
          </div>
          <p>We are not trying to sell you six different agency services. SMG currently focuses on two real offerings: Lead Acquisition and Sarah, our AI Receptionist.</p>
        </div>
      </section>

      <section className="offer-section">
        <div className="shell offer-grid">
          <Link className="offer-card offer-featured" href="/services/lead-generation">
            <div className="offer-number">01</div>
            <div>
              <span className="offer-kicker">LEAD ACQUISITION</span>
              <h3>Qualified demand, from ad to booked job.</h3>
              <p>Meta Ads, lead qualification, and job booking brought together as one end-to-end acquisition system.</p>
            </div>
            <span className="offer-link">Explore Lead Acquisition <ArrowUpRight size={17} /></span>
          </Link>
          <Link className="offer-card" href="/services/sarah">
            <div className="offer-number">02</div>
            <div>
              <span className="offer-kicker">SARAH / AI RECEPTIONIST</span>
              <h3>Your front desk, without another full-time employee.</h3>
              <p>Sarah handles inbound calls, scheduling, confirmations, transfers, and routine conversations around the clock.</p>
            </div>
            <span className="offer-link">Meet Sarah <ArrowUpRight size={17} /></span>
          </Link>
        </div>
      </section>

      <section className="principles-section">
        <div className="shell">
          <div className="section-head compact-head">
            <div><span className="eyebrow">THE SMG APPROACH</span><h2>Built for outcomes,<br />not activity.</h2></div>
            <p>The point of a growth system is not to generate more dashboards. It is to create a more dependable path to the customers your business actually wants.</p>
          </div>
          <div className="principle-grid">
            <div className="principle"><span>01</span><h3>Business-first</h3><p>Offers, markets, economics, and sales capacity come before campaign setup.</p></div>
            <div className="principle"><span>02</span><h3>Connected</h3><p>Acquisition does not stop at a lead. Qualification and the next action matter.</p></div>
            <div className="principle"><span>03</span><h3>Measurable</h3><p>We care about qualified opportunities and booked business, not vanity metrics.</p></div>
            <div className="principle"><span>04</span><h3>Built to improve</h3><p>The system gets better as performance data and customer information accumulate.</p></div>
          </div>
        </div>
      </section>

      <section className="band band-home">
        <div className="shell band-grid">
          <div><span className="eyebrow light-eyebrow">READY WHEN YOU ARE</span><h2>Build a system your business can actually grow on.</h2></div>
          <div><p>Tell us what you sell, who you serve, and where growth is getting stuck. We will figure out whether SMG is the right fit.</p><Link className="btn darkbtn" href="/get-started">Start a conversation <ArrowUpRight size={16} /></Link></div>
        </div>
      </section>
    </main>
  );
}
