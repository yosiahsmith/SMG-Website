import Link from 'next/link';

export default function ClientLoginPage(){
  return <main className="page notfound"><div className="shell" style={{textAlign:'center'}}>
    <span className="eyebrow">CLIENT PORTAL</span>
    <h1>Coming soon.</h1>
    <p className="lead" style={{marginLeft:'auto',marginRight:'auto'}}>The SMG client portal is being built separately. Existing clients will be able to access their workspace here when it launches.</p>
    <div className="actions" style={{justifyContent:'center'}}>
      <a className="btn" href="https://client.solomedia.group">Visit Client Portal</a>
      <Link className="btn secondary" href="/">Back Home</Link>
    </div>
  </div></main>
}
