'use client';

import Link from 'next/link';
import { useRef } from 'react';
import styles from './CareerCard.module.css';

type Props = { role?: { id: string; title: string; description: string; department: string; type: string; location: string } };

export default function CareerCard({ role }: Props) {
  const ref = useRef<HTMLElement>(null);
  const move = (e: React.MouseEvent<HTMLElement>) => { const r = e.currentTarget.getBoundingClientRect(); e.currentTarget.style.setProperty('--mx', `${e.clientX-r.left}px`); e.currentTarget.style.setProperty('--my', `${e.clientY-r.top}px`); e.currentTarget.style.setProperty('--glow-opacity','1'); };
  const leave = (e: React.MouseEvent<HTMLElement>) => e.currentTarget.style.setProperty('--glow-opacity','0');
  if (!role) return <div className={styles.general}><span className={styles.tag}>GENERAL APPLICATION</span><div><h3>Don't see your role?</h3><p>If none of our current openings fit, we'd still like to hear from exceptional people.</p></div><Link href="/careers/apply" className={styles.generalLink}>General Application <span>→</span></Link></div>;
  return <article ref={ref} className={styles.card} onMouseMove={move} onMouseLeave={leave}>
    <span className={styles.glow} aria-hidden="true" />
    <div className={styles.top}><span className={styles.tag}>{role.department}</span><span>↗</span></div>
    <div><h3>{role.title}</h3><p>{role.description}</p></div>
    <div className={styles.meta}><span>{role.type}</span><span>{role.location}</span></div>
    <Link href={`/careers/apply?position=${encodeURIComponent(role.title)}`} className={styles.apply}>Apply for this role <span>→</span></Link>
  </article>;
}
