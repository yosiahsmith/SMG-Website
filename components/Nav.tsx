'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import styles from './Nav.module.css';

const ABOUT_LINKS = [
  { label: 'About SMG', href: '/about' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setAboutOpen(false);
    };
    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('click', onClickOutside);
      document.removeEventListener('keydown', onKey);
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const openAbout = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setAboutOpen(true);
  };
  const closeAboutDelayed = () => {
    closeTimer.current = setTimeout(() => setAboutOpen(false), 120);
  };
  const closeMobile = () => setMobileOpen(false);

  return (
    <header className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand} onClick={closeMobile}>SMG<span className={styles.brandMark}>®</span></Link>
        <div className={styles.group}>
          <nav className={styles.links} aria-label="Primary">
            <div className={styles.item} ref={aboutRef} onMouseEnter={openAbout} onMouseLeave={closeAboutDelayed}>
              <button className={styles.link} type="button" aria-haspopup="true" aria-expanded={aboutOpen} onClick={() => setAboutOpen(v => !v)}>
                About <ChevronDown size={14} className={`${styles.chevron} ${aboutOpen ? styles.chevronOpen : ''}`} />
              </button>
              <div className={`${styles.dropdown} ${aboutOpen ? styles.dropdownOpen : ''}`} role="menu" aria-label="About">
                {ABOUT_LINKS.map(link => <Link key={link.href} href={link.href} role="menuitem" className={styles.dropdownLink} onClick={() => setAboutOpen(false)}>{link.label}</Link>)}
              </div>
            </div>
            <Link href="/services" className={styles.link}>Services</Link>
            <Link href="/how-it-works" className={styles.link}>How It Works</Link>
            <Link href="/client-login" className={styles.link}>Client Login</Link>
          </nav>
          <div className={styles.right}>
            <Link href="/get-started" className={styles.cta}>Get Started</Link>
            <button type="button" className={styles.menuBtn} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(v => !v)}>
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>
      <div className={`${styles.sheet} ${mobileOpen ? styles.sheetOpen : ''}`} aria-hidden={!mobileOpen}>
        <Link href="/about" onClick={closeMobile}>About</Link>
        <div className={styles.sheetSub}>{ABOUT_LINKS.slice(1).map(link => <Link key={link.href} href={link.href} onClick={closeMobile}>{link.label}</Link>)}</div>
        <Link href="/services" onClick={closeMobile}>Services</Link>
        <Link href="/how-it-works" onClick={closeMobile}>How It Works</Link>
        <Link href="/client-login" onClick={closeMobile}>Client Login</Link>
        <Link href="/get-started" className={styles.cta} onClick={closeMobile}>Get Started</Link>
      </div>
    </header>
  );
}
