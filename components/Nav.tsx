'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import styles from './Nav.module.css';

const ABOUT_LINKS = [
  { label: 'Meet the Team', href: '/team' },
  { label: 'Careers', href: '/careers' },
  { label: 'Contact', href: '/contact' },
];

function LogoMark() { return (<svg className={styles.logoMark} viewBox="0 0 500 500" aria-hidden="true"><circle cx="250" cy="250" r="181" fill="#F2EEE5" stroke="#050505" strokeWidth="8" /><text x="250" y="273" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="61" fontWeight="400" letterSpacing="-3" fill="#050505">Solomon</text><path d="M112 281 H388" fill="none" stroke="#050505" strokeWidth="5" /><text x="250" y="299" textAnchor="middle" fontFamily="Arial, Helvetica, sans-serif" fontSize="12" letterSpacing="7" fill="#050505">MEDIA GROUP</text></svg>); }

export function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [lightBackground, setLightBackground] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const lastContrast = useRef(false);
  const raf = useRef<number | null>(null);

  const detectLightBackground = () => {
    const nav = document.querySelector(`.${styles.nav}`) as HTMLElement | null;
    if (!nav) return lastContrast.current;
    const rect = nav.getBoundingClientRect();
    // Sample many points across the nav, including its upper/lower edges.
    const xs = [0.08, 0.2, 0.35, 0.5, 0.65, 0.8, 0.92];
    const ys = [0.18, 0.5, 0.82];
    let total = 0;
    let light = 0;
    for (const yRatio of ys) for (const xRatio of xs) {
      const x = Math.round(rect.left + rect.width * xRatio);
      const y = Math.round(rect.top + rect.height * yRatio);
      const elements = document.elementsFromPoint(x, y);
      const behind = elements.find(el => el !== nav && !nav.contains(el) && !(el instanceof SVGElement));
      if (!(behind instanceof HTMLElement)) continue;
      const bg = getComputedStyle(behind).backgroundColor;
      const match = bg.match(/rgba?\(([^)]+)\)/);
      if (!match) continue;
      const p = match[1].split(',').map(v => parseFloat(v.trim()));
      const alpha = p[3] ?? 1;
      const r = p[0] ?? 0, g = p[1] ?? 0, b = p[2] ?? 0;
      if (alpha < 0.08) continue;
      const luminance = (r * 299 + g * 587 + b * 114) / 1000;
      total++;
      if (luminance > 125) light++;
    }
    // Switch sooner: only ~30% of sampled visible points need to be light.
    const next = total > 0 ? light / total >= 0.30 : lastContrast.current;
    lastContrast.current = next;
    return next;
  };

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 12);
      setLightBackground(detectLightBackground());
      raf.current = null;
    };
    const onScroll = () => { if (raf.current === null) raf.current = requestAnimationFrame(update); };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => { window.removeEventListener('scroll', onScroll); window.removeEventListener('resize', onScroll); if (raf.current !== null) cancelAnimationFrame(raf.current); };
  }, []);

  useEffect(() => { setAboutOpen(false); setMobileOpen(false); }, [pathname]);
  useEffect(() => { const onClickOutside = (e: MouseEvent) => { if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) setAboutOpen(false); }; const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setAboutOpen(false); setMobileOpen(false); } }; document.addEventListener('click', onClickOutside); document.addEventListener('keydown', onKey); return () => { document.removeEventListener('click', onClickOutside); document.removeEventListener('keydown', onKey); if (closeTimer.current) clearTimeout(closeTimer.current); }; }, []);
  useEffect(() => { document.body.style.overflow = mobileOpen ? 'hidden' : ''; return () => { document.body.style.overflow = ''; }; }, [mobileOpen]);

  const openAbout = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setAboutOpen(true); };
  const closeAboutDelayed = () => { closeTimer.current = setTimeout(() => setAboutOpen(false), 180); };
  const closeMobile = () => setMobileOpen(false);
  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href);
  const aboutActive = pathname.startsWith('/about') || pathname.startsWith('/team') || pathname.startsWith('/careers') || pathname.startsWith('/contact');

  return (<header className={`${styles.nav} ${scrolled ? styles.navScrolled : ''} ${lightBackground ? styles.onLight : styles.onDark}`}><div className={styles.inner}><Link href="/" className={styles.brand} onClick={closeMobile} aria-label="Solomon Media Group home"><LogoMark /></Link><div className={styles.group}><nav className={styles.links} aria-label="Primary"><div className={styles.item} ref={aboutRef} onMouseEnter={openAbout} onMouseLeave={closeAboutDelayed}><Link href="/about" className={`${styles.link} ${aboutActive ? styles.active : ''}`} aria-haspopup="true" aria-expanded={aboutOpen} onClick={() => setAboutOpen(false)}>About <ChevronDown size={14} className={`${styles.chevron} ${aboutOpen ? styles.chevronOpen : ''}`} /></Link><div className={`${styles.dropdown} ${aboutOpen ? styles.dropdownOpen : ''}`} role="menu" aria-label="About">{ABOUT_LINKS.map(link => <Link key={link.href} href={link.href} role="menuitem" className={`${styles.dropdownLink} ${isActive(link.href) ? styles.dropdownActive : ''}`} onClick={() => setAboutOpen(false)}>{link.label}</Link>)}</div></div><Link href="/services" className={`${styles.link} ${isActive('/services') ? styles.active : ''}`}>Services</Link><Link href="/how-it-works" className={`${styles.link} ${isActive('/how-it-works') ? styles.active : ''}`}>How It Works</Link><Link href="/client-login" className={`${styles.link} ${isActive('/client-login') ? styles.active : ''}`}>Client Login</Link></nav><div className={styles.right}><Link href="/get-started" className={styles.cta}>Get Started</Link><button type="button" className={styles.menuBtn} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen} onClick={() => setMobileOpen(v => !v)}>{mobileOpen ? <X size={18} /> : <Menu size={18} />}</button></div></div></div><div className={`${styles.sheet} ${mobileOpen ? styles.sheetOpen : ''}`} aria-hidden={!mobileOpen}><Link href="/about" className={isActive('/about') ? styles.mobileActive : ''} onClick={closeMobile}>About</Link><div className={styles.sheetSub}>{ABOUT_LINKS.map(link => <Link key={link.href} href={link.href} className={isActive(link.href) ? styles.mobileActive : ''} onClick={closeMobile}>{link.label}</Link>)}</div><Link href="/services" className={isActive('/services') ? styles.mobileActive : ''} onClick={closeMobile}>Services</Link><Link href="/how-it-works" className={isActive('/how-it-works') ? styles.mobileActive : ''} onClick={closeMobile}>How It Works</Link><Link href="/client-login" className={isActive('/client-login') ? styles.mobileActive : ''} onClick={closeMobile}>Client Login</Link><Link href="/get-started" className={styles.cta} onClick={closeMobile}>Get Started</Link></div></header>);
}
