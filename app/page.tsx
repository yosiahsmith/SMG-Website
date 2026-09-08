import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Phone } from 'lucide-react';

export const metadata = {
  title: 'AI Receptionists for Businesses | Solomon Media Group',
  description: 'Solomon Media Group builds AI Receptionists for businesses that cannot afford to miss a call.',
};

export default function Home() {
  return (
    <main>
      <section className="hero hero-home">
        <div className="shell hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">SOLOMON MEDIA GROUP / AI RECEPTIONISTS</span>
            <h1>AI Receptionists for businesses that <em>can't afford to miss a call.</em></h1>
            <p className="hero-lead">Sarah answers calls, handles routine questions, books appointments, and routes urgent conversations—so your business can stay responsive without adding another full-time employee.</p>
            <div className="actions">
              <a className="btn" href="tel:+13166695210"><Phone size={16} /> Call the AI Receptionist <ArrowUpRight size={16} /></a>
              <Link className="btn secondary" href="/services/sarah">Meet Sarah <ArrowRight size={16} /></Link>
            </div>
            <p className="hero-note">Call <a href="tel:+13166695210">(316) 669-5210</a> to hear the demo.</p>
          </div>
          <div className="hero-system" aria-label="Sarah AI Receptionist workflow">
            <div className="system-label">SARAH / AI RECEPTIONIST</div>
            <div className="system-node system-primary">ANSWER</div>
            <div className="system-line" />
            <div className="system-row">
              <div className="system-node">QUALIFY</div>
              <div className="system-node">BOOK</div>
            </div>
            <div className="system-line short" />
            <div className="system-node system-result">CONNECT</div>
            <p>From the first ring to the next customer conversation.</p>
          </div>
        </div>
      </section>

      <section className="intro-section">
        <div className="shell split-intro">
          <div>
            <span className="eyebrow">THE PRIMARY OFFER</span>
            <h2>Never let a good call<br />go unanswered.</h2>
          </div>
          <p>Sarah is SMG's flagship service: an AI Receptionist built to answer inbound calls, handle common questions, qualify callers, schedule appointments, and transfer urgent conversations when they matter.</p>
        </div>
      </section>

      <section className="offer-section">
        <div className="shell offer-grid">
          <Link className="offer-card offer-featured" href="/services/sarah">
            <div className="offer-number">01</div>
            <div>
              <span className="offer-kicker">SARAH / AI RECEPTIONIST</span>
              <h3>Your front desk, without another full-time employee.</h3>
              <p>Inbound calls, scheduling, confirmations, routine conversations, and intelligent routing handled around the clock.</p>
            </div>
            <span className="offer-link">Meet Sarah <ArrowUpRight size={17} /></span>
          </Link>
          <Link className="offer-card" href="/services/lead-generation">
            <div className="offer-number">02</div>
            <div>
              <span className="offer-kicker">LEAD ACQUISITION</span>
              <h3>Qualified demand, from ad to booked job.</h3>
              <p>Lead acquisition and qualification systems designed to create better opportunities—not just more traffic.</p>
            </div>
            <span className="offer-link">Explore Lead Acquisition <ArrowUpRight size={17} /></span>
          </Link>
        </div>
      </section>

      <section className="principles-section">
        <div className="shell">
          <div className="section-head compact-head">
            <div><span className="eyebrow">WHY SARAH</span><h2>Built around the<br />calls that matter.</h2></div>
            <p>The point is simple: give every caller a useful response, every qualified opportunity a next step, and your team more time to focus on the work that actually needs a human.</p>
          </div>
          <div className="principle-grid">
            <div className="principle"><span>01</span><h3>24/7 coverage</h3><p>Give your business a consistent first response when your team is busy or unavailable.</p></div>
            <div className="principle"><span>02</span><h3>Qualification</h3><p>Collect the information your team needs before a conversation becomes an opportunity.</p></div>
            <div className="principle"><span>03</span><h3>Booking</h3><p>Move qualified callers toward appointments instead of leaving the next step to chance.</p></div>
            <div className="principle"><span>04</span><h3>Human when needed</h3><p>Route urgent or important conversations to the right person instead of trapping callers in automation.</p></div>
          </div>
        </div>
      </section>

      <section className="band band-home">
        <div className="shell band-grid">
          <div><span className="eyebrow light-eyebrow">HEAR SARAH FOR YOURSELF</span><h2>Don't take our word for it. Call the demo.</h2></div>
          <div><p>Call the demo line and experience the AI Receptionist firsthand. Then, when you're ready, we can build one around your business.</p><a className="btn darkbtn" href="tel:+13166695210"><Phone size={16} /> Call (316) 669-5210 <ArrowUpRight size={16} /></a></div>
        </div>
      </section>
    </main>
  );
}
