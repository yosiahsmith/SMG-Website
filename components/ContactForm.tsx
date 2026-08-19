'use client';

import { FormEvent, useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="contact-success">
        <span className="eyebrow">MESSAGE RECEIVED</span>
        <h2>Thanks for reaching out.</h2>
        <p>Your message has been submitted. We'll get back to you as soon as we can.</p>
        <a href="mailto:info@solomedia.group">info@solomedia.group</a>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form-grid">
        <label className="contact-field">
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label className="contact-field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
        </label>
      </div>

      <label className="contact-field">
        <span>Comment</span>
        <textarea name="comment" placeholder="How can we help?" rows={8} required />
      </label>

      <div className="contact-form-footer">
        <p>Prefer email? <a href="mailto:info@solomedia.group">info@solomedia.group</a></p>
        <button type="submit" className="btn">Send Message <span>→</span></button>
      </div>
    </form>
  );
}
