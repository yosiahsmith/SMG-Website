import Link from 'next/link';

export const metadata = { title: 'Page Not Found', description: 'The requested Solomon Media Group page could not be found.' };

export default function NotFound(){return <main className="shell notfound"><div><span className="eyebrow">404</span><h1>Page not found.</h1><p className="lead">The page you're looking for doesn't exist or has moved.</p><Link className="btn" href="/">Back home</Link></div></main>}
