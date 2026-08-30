'use client';

import { useEffect, useState } from 'react';

export type TeamMember = { name: string; email: string; title: string; pfp: string; overview: string; bio: string };

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  const [selected, setSelected] = useState<TeamMember | null>(null);

  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setSelected(null);
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [selected]);

  return <>
    <div className="team-grid" aria-label="Solomon Media Group team">
      {members.map((member) => <button key={member.email} type="button" className="team-member mouse-glow" onClick={() => setSelected(member)}>
        <span className="mouse-glow-light" aria-hidden="true" />
        <span className="team-pfp">{member.pfp ? <img src={member.pfp} alt="" /> : <span>{member.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>}</span>
        <span className="team-member-info"><strong>{member.name}</strong><span>{member.email}</span></span>
      </button>)}
    </div>

    {selected && <div className="team-modal-backdrop" role="presentation" onMouseDown={(e) => e.target === e.currentTarget && setSelected(null)}>
      <div className="team-modal" role="dialog" aria-modal="true" aria-label={`${selected.name} profile`}>
        <button className="team-modal-close" type="button" aria-label="Close profile" onClick={() => setSelected(null)}>×</button>
        <div className="team-modal-head">
          <span className="team-modal-pfp">{selected.pfp ? <img src={selected.pfp} alt="" /> : <span>{selected.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>}</span>
          <div><span className="eyebrow">{selected.title}</span><h2>{selected.name}</h2><a href={`mailto:${selected.email}`}>{selected.email}</a></div>
        </div>
        <div className="team-modal-body"><p className="team-modal-overview">{selected.overview}</p><p>{selected.bio}</p></div>
      </div>
    </div>}
  </>;
}
