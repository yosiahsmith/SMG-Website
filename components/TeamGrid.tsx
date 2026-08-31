'use client';

import { useEffect, useState } from 'react';
import styles from './TeamGrid.module.css';

export type SocialLink = { platform: string; url: string };
export type TeamMember = { name: string; email: string; title: string; position: string; pfp: string; overview: string; bio: string; socials?: SocialLink[] };
const initials=(name:string)=>name.split(' ').map(n=>n[0]).join('').slice(0,2);

export default function TeamGrid({ members }: { members: TeamMember[] }) {
 const [selected,setSelected]=useState<TeamMember|null>(null);
 useEffect(()=>{if(!selected)return;const key=(e:KeyboardEvent)=>e.key==='Escape'&&setSelected(null);document.addEventListener('keydown',key);document.body.style.overflow='hidden';return()=>{document.removeEventListener('keydown',key);document.body.style.overflow='';};},[selected]);
 const move=(e:React.MouseEvent<HTMLElement>)=>{const r=e.currentTarget.getBoundingClientRect();e.currentTarget.style.setProperty('--mx',`${e.clientX-r.left}px`);e.currentTarget.style.setProperty('--my',`${e.clientY-r.top}px`);e.currentTarget.style.setProperty('--glow-opacity','1');};
 const leave=(e:React.MouseEvent<HTMLElement>)=>e.currentTarget.style.setProperty('--glow-opacity','0');
 return <>
  <div className={styles.grid} aria-label="Solomon Media Group team">{members.map(m=><button key={m.email} type="button" className={styles.card} onMouseMove={move} onMouseLeave={leave} onClick={()=>setSelected(m)}><span className={styles.light} aria-hidden="true"/><span className={styles.pfp}>{m.pfp?<img src={m.pfp} alt=""/>:initials(m.name)}</span><span className={styles.info}><span className={styles.role}>{m.title}</span><span className={styles.position}>{m.position}</span><strong className={styles.name}>{m.name}</strong><span className={styles.email}>{m.email}</span></span></button>)}</div>
  {selected&&<div className={styles.backdrop} onMouseDown={e=>e.target===e.currentTarget&&setSelected(null)}><div className={styles.modal} role="dialog" aria-modal="true" aria-label={`${selected.name} profile`}><button className={styles.close} onClick={()=>setSelected(null)} aria-label="Close profile">×</button><div className={styles.head}><span className={styles.modalPfp}>{selected.pfp?<img src={selected.pfp} alt=""/>:initials(selected.name)}</span><div><span className={styles.tag}>{selected.title}</span><div className={styles.modalPosition}>{selected.position}</div><h2>{selected.name}</h2><a href={`mailto:${selected.email}`}>{selected.email}</a>{selected.socials?.length ? <div className={styles.socials}>{selected.socials.map(s=><a key={s.platform} className={styles.social} href={s.url} target="_blank" rel="noreferrer">{s.platform}</a>)}</div> : null}</div></div><div className={styles.body}><p className={styles.overview}>{selected.overview}</p><p>{selected.bio}</p></div></div></div>}
 </>;
}
