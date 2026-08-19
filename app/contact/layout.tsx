import type { ReactNode } from 'react';

export const metadata = {
  title: 'Contact | Solomon Media Group',
  description: 'Contact Solomon Media Group.'
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: `
        .contact-page > .shell { width:min(1180px,calc(100% - 40px)); margin:0 auto; }
        .contact-page .contact-layout { margin-top:72px; padding-top:64px; border-top:1px solid rgba(255,255,255,.1); display:grid; grid-template-columns:minmax(260px,.72fr) minmax(0,1.28fr); gap:72px; align-items:start; }
        .contact-page .contact-copy { padding-top:8px; }
        .contact-page .contact-copy h2 { font-family:'Space Grotesk',sans-serif; font-size:clamp(42px,5vw,64px); letter-spacing:-.055em; line-height:.95; margin:20px 0 18px; }
        .contact-page .contact-copy p { color:#a4a4a0; line-height:1.75; max-width:420px; margin:0 0 28px; }
        .contact-page .contact-email { display:inline-block; color:#f5f5f3; border-bottom:1px solid rgba(255,255,255,.25); padding-bottom:5px; }
        .contact-page .contact-form-card { background:linear-gradient(145deg,rgba(255,255,255,.055),rgba(255,255,255,.018)); border:1px solid rgba(255,255,255,.11); border-radius:18px; padding:34px; box-shadow:inset 0 1px 0 rgba(255,255,255,.06),0 25px 70px rgba(0,0,0,.18); }
        .contact-page .contact-form-card form { display:grid; gap:24px; }
        .contact-page .contact-form-card label { display:grid; gap:9px; }
        .contact-page .contact-form-card label > span { font-size:13px; color:#c8c8c4; }
        .contact-page .contact-form-card input,.contact-page .contact-form-card textarea { width:100%; background:rgba(0,0,0,.22); border:1px solid rgba(255,255,255,.12); border-radius:10px; padding:14px 15px; color:#f5f5f3; outline:none; }
        .contact-page .contact-form-card input { height:52px; }
        .contact-page .contact-form-card textarea { min-height:190px; resize:vertical; line-height:1.55; }
        .contact-page .contact-form-card input::placeholder,.contact-page .contact-form-card textarea::placeholder { color:#70706c; }
        .contact-page .contact-form-card input:focus,.contact-page .contact-form-card textarea:focus { border-color:rgba(255,255,255,.34); background:rgba(255,255,255,.025); box-shadow:0 0 0 3px rgba(255,255,255,.035); }
        .contact-page .contact-form-card form > .btn { justify-self:start; margin-top:2px; border:0; cursor:pointer; }
        .contact-page .contact-form-card .contact-success { min-height:340px; display:flex; flex-direction:column; justify-content:center; }
        .contact-page .contact-form-card .contact-success h2 { font-family:'Space Grotesk',sans-serif; font-size:clamp(34px,4vw,52px); letter-spacing:-.05em; margin:18px 0 10px; }
        .contact-page .contact-form-card .contact-success p { color:#a4a4a0; line-height:1.7; max-width:520px; }
        @media(max-width:800px){ .contact-page .contact-layout{grid-template-columns:1fr;gap:36px;margin-top:55px;padding-top:45px}.contact-page .contact-form-card{padding:22px}.contact-page .contact-form-card form{gap:20px}.contact-page .contact-copy h2{font-size:48px} }
      ` }} />
      {children}
    </>
  );
}
