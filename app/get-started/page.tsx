export const metadata = { title: 'Get Started', description: 'Start a conversation with Solomon Media Group about Lead Acquisition or Sarah AI Receptionist.' };

export default function GetStarted() {
  return (
    <main className="page get-started-page">
      <div className="shell">
        <span className="eyebrow">GET STARTED</span>
        <h1>Let's figure out where the opportunity is.</h1>
        <p className="lead">Tell us what you sell, who you serve, and what you want more of. The first conversation is about fit—not forcing a package onto your business.</p>

        <section className="start-options">
          <div className="start-option"><span>01</span><h2>Need more qualified demand?</h2><p>Explore Lead Acquisition: paid acquisition, qualification, and job booking built into one connected offer.</p></div>
          <div className="start-option"><span>02</span><h2>Missing calls or booking opportunities?</h2><p>Explore Sarah: an AI receptionist for inbound calls, scheduling, confirmations, and transfers.</p></div>
        </section>

        <section className="cal-section">
          <div className="cal-copy"><span className="tag">BOOK A DISCOVERY CALL</span><h2>Let's talk.</h2><p>Choose a time that works for you. We'll use the call to understand the business, the current bottleneck, and whether SMG can build a better path forward.</p></div>
          <div className="cal-embed" id="my-cal-inline-discovery-call" />
        </section>
      </div>
      <script dangerouslySetInnerHTML={{__html:`(function(C,A,L){let p=function(a,ar){a.q.push(ar);};let d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];d.head.appendChild(d.createElement("script")).src=A;cal.loaded=true;}if(ar[0]===L){const api=function(){p(api,arguments);};const namespace=ar[1];api.q=api.q||[];if(typeof namespace==="string"){cal.ns[namespace]=cal.ns[namespace]||api;p(cal.ns[namespace],ar);p(cal,["initNamespace",namespace]);}else p(cal,ar);return;}p(cal,ar);};C.Cal("init","discovery-call",{origin:"https://app.cal.com"});C.Cal.config=C.Cal.config||{};C.Cal.config.forwardQueryParams=true;C.Cal.ns=C.Cal.ns||{};C.Cal.ns["discovery-call"]("inline",{elementOrSelector:"#my-cal-inline-discovery-call",config:{layout:"month_view",useSlotsViewOnSmallScreen:"true"},calLink:"yosiah-smith/discovery-call"});C.Cal.ns["discovery-call"]("ui",{hideEventTypeDetails:false,layout:"month_view"});})(window,"https://app.cal.com/embed/embed.js","init");`}} />
    </main>
  );
}
