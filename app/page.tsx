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
              <a className="btn" href="https://calendly.com/solomedia-group/new-meeting" target="_blank" rel="noreferrer"><Phone size={16} /> Schedule a Discovery Call <ArrowUpRight size={16} /></a>
              <Link className="btn secondary" href="/services/sarah">Meet Sarah <ArrowRight size={16} /></Link>
            </div>
            <p className="hero-note">Ready to talk? <a href="https://calendly.com/solomedia-group/new-meeting" target="_blank" rel="noreferrer">Schedule a discovery call.</a></p>
          </div>
          <div className="hero-system" aria-label="Sarah AI Receptionist workflow">
            <div className="system-label">SARAH / AI RECEPTIONIST / INBOUND WORKFLOW</div>
            <div className="flow-step flow-start"><span>01</span><div><strong>INBOUND CALL</strong><small>Customer reaches your business</small></div></div>
            <div className="flow-connector" />
            <div className="flow-step"><span>02</span><div><strong>SARAH ANSWERS</strong><small>Immediate response, no voicemail</small></div></div>
            <div className="flow-connector" />
            <div className="flow-split">
              <div className="flow-branch"><b>ROUTINE</b><span>Questions & requests</span><em>→ Handled by Sarah</em></div>
              <div className="flow-branch"><b>URGENT</b><span>Needs a human</span><em>→ Transferred to your team</em></div>
            </div>
            <div className="flow-connector" />
            <div className="flow-step"><span>03</span><div><strong>QUALIFY + BOOK</strong><small>Collect details and schedule the next step</small></div></div>
            <div className="flow-connector" />
            <div className="flow-step flow-result"><span>04</span><div><strong>APPOINTMENT SET</strong><small>Your team gets a cleaner, qualified conversation</small></div></div>
            <p>Every call moves toward an outcome.</p>
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
          <div><span className="eyebrow light-eyebrow">START A CONVERSATION</span><h2>Let's talk about what your business needs.</h2></div>
          <div><p>Tell us about your business, your current workflow, and where you want your front desk to perform better. We'll use the discovery call to map out the right next step.</p><a className="btn darkbtn" href="https://calendly.com/solomedia-group/new-meeting" target="_blank" rel="noreferrer"><Phone size={16} /> Schedule a Discovery Call <ArrowUpRight size={16} /></a></div>
        </div>
      </section>
    </main>
  );
}
