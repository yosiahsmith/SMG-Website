import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import TeamGrid, { TeamMember } from '@/components/TeamGrid';

export const metadata = { title: 'Meet the Team | Solomon Media Group', description: 'Meet the people building Solomon Media Group.' };

const members: TeamMember[] = [
  { name: 'Yosiah Smith', email: 'ysmith@solomedia.group', title: 'FOUNDER & CEO', pfp: '', overview: 'Building SMG around growth infrastructure, AI reception, acquisition, and the systems that connect them.', bio: 'Focused on building useful technology and scalable systems that turn business growth into something repeatable.' },
];

export default function Team() {
  return <main className="page team-page"><div className="shell">
    <span className="eyebrow">MEET THE TEAM</span>
    <h1>The people behind<br /><em>Solomon Media Group.</em></h1>
    <p className="lead">SMG is intentionally small right now. The team is being built around people who care about useful technology, strong systems, and measurable business outcomes.</p>
    <TeamGrid members={members} />
    <section className="team-join"><div><span className="eyebrow">GROW WITH US</span><h2>We're building the team<br /><em>as we build the company.</em></h2></div><div><p>As SMG grows, this page will grow with it. See current openings or send a general application if you think you can contribute.</p><div className="actions page-actions"><Link className="btn" href="/careers">View Careers <ArrowUpRight size={16} /></Link><Link className="text-link" href="/careers#general-application">General Application →</Link></div></div></section>
  </div></main>;
}
