'use client';

import { FormEvent, Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import careers from '../../../data/careers.json';

function ApplicationForm() {
  const params = useSearchParams();
  const requested = params.get('position');
  const openRoles = careers.roles.filter((role) => role.active);
  const selectedPosition = requested && openRoles.some((role) => role.title === requested)
    ? requested
    : 'General Application';
  const [submitted, setSubmitted] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <main className="page">
        <div className="shell application-shell">
          <span className="eyebrow">APPLICATION RECEIVED</span>
          <h1>Thanks for reaching out.</h1>
          <p className="lead">
            We&apos;ve received your application. Our team will review your information and reach out if there&apos;s a potential fit.
          </p>
          <Link className="btn" href="/careers">Back to careers</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <div className="shell application-shell">
        <span className="eyebrow">CAREERS</span>
        <h1>{selectedPosition === 'General Application' ? 'Join SMG.' : `Apply for ${selectedPosition}.`}</h1>
        <p className="lead">
          Tell us about yourself. Your application is for <strong>{selectedPosition}</strong>. Resume attachment is optional.
        </p>

        <form className="application-form" onSubmit={submit} encType="multipart/form-data">
          <div className="application-grid">
            <div className="field">
              <label htmlFor="name">Full name *</label>
              <input id="name" name="name" required placeholder="Your name" />
            </div>
            <div className="field">
              <label htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" required placeholder="you@example.com" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone *</label>
              <input id="phone" name="phone" type="tel" required placeholder="(000) 000-0000" />
            </div>
            <div className="field">
              <label htmlFor="location">Location *</label>
              <input id="location" name="location" required placeholder="City, State" />
            </div>
          </div>

          <div className="field">
            <label htmlFor="position">Position *</label>
            <select id="position" name="position" value={selectedPosition} disabled>
              <option>{selectedPosition}</option>
            </select>
            <input type="hidden" name="position" value={selectedPosition} />
          </div>

          <div className="field">
            <label htmlFor="experience">Relevant experience *</label>
            <textarea id="experience" name="experience" required placeholder="Tell us about your background and the work you're best at." />
          </div>

          <div className="field">
            <label htmlFor="why">Why do you want to work with SMG? *</label>
            <textarea id="why" name="why" required placeholder="What makes SMG interesting to you?" />
          </div>

          <div className="application-grid">
            <div className="field">
              <label htmlFor="linkedin">LinkedIn <span>(optional)</span></label>
              <input id="linkedin" name="linkedin" type="url" placeholder="https://linkedin.com/in/..." />
            </div>
            <div className="field">
              <label htmlFor="portfolio">Portfolio / website <span>(optional)</span></label>
              <input id="portfolio" name="portfolio" type="url" placeholder="https://..." />
            </div>
          </div>

          <div className="field">
            <label htmlFor="resume">Resume / CV <span>(optional)</span></label>
            <input id="resume" name="resume" type="file" accept=".pdf,.doc,.docx" />
            <small>PDF, DOC, or DOCX. Optional.</small>
          </div>

          <div className="field">
            <label htmlFor="cover">Cover letter <span>(optional)</span></label>
            <textarea id="cover" name="cover" placeholder="Anything else you'd like us to know?" />
          </div>

          <button className="btn" type="submit">
            Submit application <span>→</span>
          </button>
        </form>
      </div>
    </main>
  );
}

export default function Apply() {
  return (
    <Suspense fallback={<main className="page"><div className="shell application-shell"><span className="eyebrow">CAREERS</span><h1>Loading application.</h1></div></main>}>
      <ApplicationForm />
    </Suspense>
  );
}
