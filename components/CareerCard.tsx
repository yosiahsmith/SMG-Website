'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './CareerCard.module.css';

type Props = {
  role?: { id: string; title: string; description: string; department: string; type: string; location: string };
};

export default function CareerCard({ role }: Props) {
  const [transform, setTransform] = useState('perspective(900px) rotateX(0deg) rotateY(0deg)');

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    setTransform(`perspective(900px) rotateX(${y * -2.5}deg) rotateY(${x * 3}deg)`);
  };

  const reset = () => setTransform('perspective(900px) rotateX(0deg) rotateY(0deg)');

  if (!role) {
    return (
      <div className={styles.general}>
        <span className={styles.tag}>GENERAL APPLICATION</span>
        <div>
          <h3>Don't see your role?</h3>
          <p>If none of our current openings fit, we'd still like to hear from exceptional people.</p>
        </div>
        <Link href="/careers/apply" className={styles.generalLink}>General Application <span>→</span></Link>
      </div>
    );
  }

  return (
    <article className={styles.card} onMouseMove={handleMove} onMouseLeave={reset} style={{ transform }}>
      <div className={styles.top}><span className={styles.tag}>{role.department}</span><span>↗</span></div>
      <div><h3>{role.title}</h3><p>{role.description}</p></div>
      <div className={styles.meta}><span>{role.type}</span><span>{role.location}</span></div>
      <Link href={`/careers/apply?position=${encodeURIComponent(role.title)}`} className={styles.apply}>Apply for this role <span>→</span></Link>
    </article>
  );
}
