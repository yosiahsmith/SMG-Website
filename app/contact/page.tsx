'use client';

import { FormEvent, useState } from 'react';

export const metadata = { title: 'Contact | Solomon Media Group', description: 'Contact Solomon Media Group.' };

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="page contact-page">
      <div className="shell">
        <span className="eyebrow">CONTACT SMG</span>
        <h1>Have a question?<br /><em>Let's talk.</em></h1>
        <p className="lead">Send us a message and the team at Solomon Media Group will get back to you.</p>

        <section className="contact-layout">
          <div className="contact-copy">
            <span className="eyebrow">GET IN TOUCH</span>
            <h2>Keep it simple.</h2>
            <p>Whether you have a question about SMG, our services, or something else entirely, send us a message below.</p>
            <a href="mailto:info@solomedia.group" className="contact-email">info@solomedia.group</a>
          </div>

          <div className="card contact-form-card">
            {submitted ? (
              <div className="contact-success">
                <span className="eyebrow">MESSAGE RECEIVED</span>
                <h2>Thanks for reaching out.</h2>
                <p>Your message has been submitted. We'll get back to you as soon as we can.</p>
                <a href="mailto:info@solomedia.group">info@solomedia.group</a>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <label>
                  <span>Name</span>
                  <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
                </label>
                <label>
                  <span>Email</span>
                  <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                </label>
                <label>
                  <span>Comment</span>
                  <textarea name="comment" placeholder="How can we help?" rows={7} required />
                </label>
                <button type="submit" className="btn">Send Message <span>→</span></button>
              </form>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
