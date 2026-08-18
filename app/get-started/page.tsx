export default function GetStarted() {
  return (
    <main className="page">
      <div className="shell">
        <span className="eyebrow">GET STARTED</span>
        <h1>Let&apos;s build your demand engine.</h1>
        <p className="lead">
          The first step is a conversation about your business, your offer, and the opportunities you want more of.
        </p>

        <section>
          <div className="grid">
            <div className="card">
              <span className="num">01</span>
              <h3>Tell us where you are</h3>
              <p>What you sell, who you serve, and how customers currently find you.</p>
            </div>
            <div className="card">
              <span className="num">02</span>
              <h3>Define the target</h3>
              <p>We look at the kind of leads, jobs, and revenue you actually want.</p>
            </div>
            <div className="card">
              <span className="num">03</span>
              <h3>Map the system</h3>
              <p>We&apos;ll determine whether SMG can build a better path from demand to booked opportunity.</p>
            </div>
          </div>

          <div className="cal-section">
            <div className="cal-copy">
              <span className="tag">BOOK A DISCOVERY CALL</span>
              <h2>Let&apos;s talk.</h2>
              <p>
                Choose a time that works for you. We&apos;ll use the call to understand your business and determine where SMG can help.
              </p>
            </div>

            <div className="cal-embed" id="my-cal-inline-discovery-call" />
          </div>
        </section>
      </div>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function (C, A, L) {
              let p = function (a, ar) { a.q.push(ar); };
              let d = C.document;
              C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                  cal.ns = {};
                  cal.q = cal.q || [];
                  d.head.appendChild(d.createElement("script")).src = A;
                  cal.loaded = true;
                }
                if (ar[0] === L) {
                  const api = function () { p(api, arguments); };
                  const namespace = ar[1];
                  api.q = api.q || [];
                  if (typeof namespace === "string") {
                    cal.ns[namespace] = cal.ns[namespace] || api;
                    p(cal.ns[namespace], ar);
                    p(cal, ["initNamespace", namespace]);
                  } else {
                    p(cal, ar);
                  }
                  return;
                }
                p(cal, ar);
              };
              C.Cal("init", "discovery-call", { origin: "https://app.cal.com" });
              C.Cal.config = C.Cal.config || {};
              C.Cal.config.forwardQueryParams = true;
              C.Cal.ns = C.Cal.ns || {};
              C.Cal.ns["discovery-call"]("inline", {
                elementOrSelector: "#my-cal-inline-discovery-call",
                config: {
                  layout: "month_view",
                  useSlotsViewOnSmallScreen: "true"
                },
                calLink: "yosiah-smith/discovery-call"
              });
              C.Cal.ns["discovery-call"]("ui", {
                hideEventTypeDetails: false,
                layout: "month_view"
              });
            })(window, "https://app.cal.com/embed/embed.js", "init");
          `
        }}
      />
    </main>
  );
}
