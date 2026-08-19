import Link from 'next/link';
import { Nav } from './Nav';

export { Nav };

export function Footer(){return <footer className="footer"><div className="shell footgrid">
  <div><Link className="logo" href="/" aria-label="Solomon Media Group home"><img src="/smg-logo.svg" alt="Solomon Media Group" width="120" height="120" /></Link><p>Predictable lead flow for businesses ready to grow.</p></div>
  <div><h4>Company</h4><Link href="/about">About</Link><br/><Link href="/careers">Careers</Link><br/><Link href="/contact">Contact</Link></div>
  <div><h4>Services</h4><Link href="/services">Services</Link><br/><Link href="/services/lead-generation">Lead Generation</Link><br/><Link href="/services/sarah">Sarah AI Receptionist</Link></div>
  <div><h4>Start</h4><Link href="/get-started">Get Started</Link><br/><Link href="/client-login">Client Login</Link></div>
</div><div className="shell copyright"><span>© 2026 Solomon Media Group. All rights reserved.</span><span>Built for businesses that want booked opportunities, not just traffic.</span></div></footer>}

export function Layout({children}:{children:React.ReactNode}){return <><Nav/>{children}<Footer/></>}
