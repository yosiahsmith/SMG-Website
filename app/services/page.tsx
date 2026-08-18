import Link from 'next/link';

const services = [
  {n:'01', title:'Lead Generation', text:'A performance-driven acquisition system built to generate qualified opportunities for businesses that want predictable demand.', href:'/services/lead-generation', label:'Explore lead generation'},
  {n:'02', title:'Sarah AI Receptionist', text:'Our AI receptionist product answers calls, handles common questions, qualifies callers, and helps businesses turn inbound calls into booked opportunities.', href:'/services/sarah', label:'Explore Sarah'},
  {n:'03', title:'Paid Acquisition', text:'Campaigns built around the economics of your offer, audience, market, and sales process—not vanity metrics.', href:'/services/lead-generation', label:'View acquisition'},
  {n:'04', title:'Lead Qualification', text:'Qualification systems that help your team spend more time with prospects who actually fit the business.', href:'/services/lead-generation', label:'Learn more'},
  {n:'05', title:'Booking & Automation', text:'Calls, calendars, forms, follow-up, and automation connected so opportunities do not sit untouched.', href:'/services/sarah', label:'See automation'},
  {n:'06', title:'Growth Systems', text:'An operating layer connecting acquisition, conversion, and customer experience around measurable business outcomes.', href:'/get-started', label:'Talk to SMG'}
];

export default function Services(){return <main className="page"><div className="shell"><span className="eyebrow">SERVICES & PRODUCTS</span><h1>Growth infrastructure for modern businesses.</h1><p className="lead">SMG is no longer just a lead generation company. We build acquisition, AI, automation, and conversion systems that help businesses create and capture more demand.</p><section className="steps">{services.map(s=><div className="step" key={s.n}><div className="stepno">{s.n}</div><div><h3>{s.title}</h3><p>{s.text}</p><Link className="textlink" href={s.href}>{s.label} →</Link></div></div>)}</section><div className="actions"><Link className="btn" href="/get-started">Get started</Link></div></div></main>}
