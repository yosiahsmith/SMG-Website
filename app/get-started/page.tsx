import GetStartedForm from '@/components/GetStartedForm';

export const metadata = {
  title: 'Get Started | Solomon Media Group',
  description: 'Tell Solomon Media Group about your business, goals, and growth bottlenecks.'
};

export default function GetStarted() {
  return (
    <main className="page get-started-page">
      <div className="shell">
        <span className="eyebrow">GET STARTED</span>
        <h1>Let's figure out where the opportunity is.</h1>
        <p className="lead">Tell us what you sell, who you serve, and what you want more of. The first conversation is about fit—not forcing a package onto your business.</p>

        <section className="start-options">
          <div className="start-option"><span>01</span><h2>Need more qualified demand?</h2><p>Explore Lead Acquisition: paid acquisition, qualification, and job booking built into one connected offer.</p></div>
          <div className="start-option"><span>02</span><h2>Missing calls or booking opportunities?</h2><p>Explore Sarah: an AI receptionist for inbound calls, scheduling, confirmations, and transfers.</p></div>
        </section>

        <section className="start-form-section">
          <GetStartedForm />
        </section>
      </div>
    </main>
  );
}
