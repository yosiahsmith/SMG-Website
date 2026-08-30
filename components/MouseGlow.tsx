'use client';

import { useRef } from 'react';

export default function MouseGlow({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className={`mouse-glow ${className}`}
      onMouseMove={(e) => {
        const el = ref.current;
        if (!el) return;
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
        el.style.setProperty('--glow-opacity', '1');
      }}
      onMouseEnter={() => ref.current?.style.setProperty('--glow-opacity', '1')}
      onMouseLeave={() => ref.current?.style.setProperty('--glow-opacity', '0')}
    >
      <span className="mouse-glow-light" aria-hidden="true" />
      {children}
    </div>
  );
}
