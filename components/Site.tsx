import Link from 'next/link';
import { Nav } from './Nav';

export { Nav };

const socials = [
  { name: 'Facebook', href: 'https://www.facebook.com/SolomonMediaGroupLLC', icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3.5l.5-4H13V9c0-.7.3-1 1-1Z"/></svg> },
  { name: 'X', href: 'https://x.com/solomedia_group', icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h4.1l3.2 4.5L16.2 4H19l-5.4 6.1L19.5 20h-4.1l-3.8-5.2L6.9 20H4l5.7-6.5L5 4Zm2.4 1.7 8.8 12.6h1.3L8.7 5.7H7.4Z"/></svg> },
  { name: 'TikTok', href: 'https://www.tiktok.com/@solomedia.group', icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M15 4h3c.3 1.8 1.4 3.1 3 3.7v3.1c-1.2 0-2.3-.4-3.3-1v5.1c0 3.4-2.2 5.4-5.3 5.4-3 0-5.2-1.9-5.2-4.8 0-3.1 2.4-5 5.8-4.7v3c-1.8-.2-2.7.5-2.7 1.7 0 1 .8 1.7 1.9 1.7 1.2 0 1.8-.8 1.8-2.4V4Z"/></svg> },
  { name: 'YouTube', href: 'https://www.youtube.com/@SolomonMediaGroup', icon: <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 7.2c-.2-1.1-1-1.9-2.1-2.1C17.2 4.8 15.5 4.7 12 4.7s-5.2.1-6.9.4C4 5.3 3.2 6.1 3 7.2c-.3 1.5-.4 3.1-.4 4.8s.1 3.3.4 4.8c.2 1.1 1 1.9 2.1 2.1 1.7.3 3.4.4 6.9.4s5.2-.1 6.9-.4c1.1-.2 1.9-1 2.1-2.1.3-1.5.4-3.1.4-4.8s-.1-3.3-.4-4.8ZM10.5 15.5v-7l5.5 3.5-5.5 3.5Z"/></svg> },
  { name: 'Instagram', href: 'https://www.instagram.com/solomon_media_group', icon: <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="4"/><circle cx="12" cy="12" r="3.5"/><circle cx="17.2" cy="6.8" r="1"/></svg> }
];

export function Footer(){return <footer className="footer"><div className="shell footgrid">
  <div><Link className="logo" href="/" aria-label="Solomon Media Group home"><img src="/smg-logo.svg" alt="Solomon Media Group" width="120" height="120" /></Link><p>Predictable lead flow for businesses ready to grow.</p></div>
  <div><h4>Company</h4><Link href="/about">About</Link><br/><Link href="/careers">Careers</Link><br/><Link href="/contact">Contact</Link></div>
  <div><h4>Services</h4><Link href="/services">Services</Link><br/><Link href="/services/lead-generation">Lead Generation</Link><br/><Link href="/services/sarah">Sarah AI Receptionist</Link></div>
  <div><h4>Start</h4><Link href="/get-started">Get Started</Link><br/><Link href="/client-login">Client Login</Link></div>
</div><div className="shell copyright"><span>© 2026 Solomon Media Group. All rights reserved.</span><div className="copyrightRight"><div className="footerSocials" aria-label="Solomon Media Group social media">{socials.map(s=><a key={s.name} href={s.href} target="_blank" rel="noreferrer" aria-label={s.name} title={s.name}>{s.icon}</a>)}</div><span>Built for businesses that want booked opportunities, not just traffic.</span></div></div></footer>}

export function Layout({children}:{children:React.ReactNode}){return <><Nav/>{children}<Footer/></>}
