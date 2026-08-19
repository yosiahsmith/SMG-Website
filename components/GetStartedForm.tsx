'use client';

import { FormEvent, useState } from 'react';
import styles from './GetStartedForm.module.css';

export default function GetStartedForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className={styles.success}>
        <span className={styles.tag}>THANK YOU</span>
        <h3>We have your information.</h3>
        <p>We'll review what you shared and follow up with the next step.</p>
        <button type="button" className="btn secondary" onClick={() => setSubmitted(false)}>
          Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.heading}>
        <span className={styles.tag}>TELL US ABOUT THE BUSINESS</span>
        <h3>Let's find the bottleneck.</h3>
        <p>Give us enough context to understand what you sell, who you serve, and what you want more of.</p>
      </div>

      <div className={styles.grid}>
        <label className={styles.field}>
          <span>Your name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label className={styles.field}>
          <span>Business name</span>
          <input name="business" type="text" autoComplete="organization" placeholder="Business name" required />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
        </label>
        <label className={styles.field}>
          <span>Phone <small>optional</small></span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="(000) 000-0000" />
        </label>
        <label className={styles.field}>
          <span>Website <small>optional</small></span>
          <input name="website" type="url" autoComplete="url" placeholder="https://yourcompany.com" />
        </label>
        <label className={styles.field}>
          <span>What are you interested in?</span>
          <select name="interest" defaultValue="" required>
            <option value="" disabled>Select one</option>
            <option value="lead-acquisition">Lead Acquisition</option>
            <option value="sarah">Sarah AI Receptionist</option>
            <option value="both">Both</option>
            <option value="not-sure">Not sure yet</option>
          </select>
        </label>
      </div>

      <label className={styles.field}>
        <span>What do you want more of?</span>
        <textarea name="goal" placeholder="Tell us what you're trying to improve, what's currently getting in the way, or what you want the business to do more consistently." required />
      </label>

      <label className={styles.field}>
        <span>Anything else we should know? <small>optional</small></span>
        <textarea name="context" className={styles.short} placeholder="Current setup, sales process, call volume, lead flow, etc." />
      </label>

      <div className={styles.footer}>
        <p>Your information is used to understand the opportunity and determine the right next step.</p>
        <button type="submit" className="btn">Send Inquiry <span>→</span></button>
      </div>
    </form>
  );
}
