'use client';

import { useState } from 'react';

export default function Page() {
  const [tab, setTab] = useState<'forex' | 'general'>('forex');

  return (
    <>
      <style>{`
        :root{
          --ink:#10131a; --panel:#171c26; --panel-2:#1d2330; --line:#2b3242;
          --paper:#eeeae1; --paper-dim:#b9b6ad; --amber:#e8a33d; --cyan:#5fd4c4;
        }
        .bk *{box-sizing:border-box;}
        .bk{
          background:var(--ink); color:var(--paper);
          font-family:'Space Grotesk', sans-serif; line-height:1.5;
        }
        .bk .mono{font-family:'IBM Plex Mono', monospace;}
        .bk a{color:inherit; text-decoration:none;}
        .bk :focus-visible{outline:2px solid var(--amber); outline-offset:3px;}
        @media (prefers-reduced-motion: reduce){
          .bk *{animation-duration:0.01ms !important; transition-duration:0.01ms !important;}
        }
        .bk .wrap{max-width:1120px; margin:0 auto; padding:0 24px;}
        .bk header{position:sticky; top:0; z-index:50; background:rgba(16,19,26,0.9); backdrop-filter:blur(8px); border-bottom:1px solid var(--line);}
        .bk .nav{display:flex; align-items:center; justify-content:space-between; padding:16px 24px;}
        .bk .brand{display:flex; align-items:center; gap:10px; font-weight:700; font-size:19px; letter-spacing:-0.01em;}
        .bk .brand .dot{width:9px; height:9px; border-radius:50%; background:var(--cyan); box-shadow:0 0 8px var(--cyan);}
        .bk .navlinks{display:flex; gap:28px; font-size:14.5px; color:var(--paper-dim);}
        .bk .navlinks a:hover{color:var(--paper);}
        .bk .navcta{background:var(--amber); color:#181205; font-weight:600; font-size:14px; padding:9px 16px; border-radius:3px;}
        .bk .navcta:hover{background:#f0b357;}
        @media (max-width:820px){ .bk .navlinks{display:none;} }
        .bk .hero{padding:88px 0 72px; border-bottom:1px solid var(--line);
          background:radial-gradient(1200px 500px at 85% -10%, rgba(95,212,196,0.10), transparent 60%);}
        .bk .hero-grid{display:grid; grid-template-columns:1.1fr 0.9fr; gap:56px; align-items:center;}
        @media (max-width:900px){ .bk .hero-grid{grid-template-columns:1fr;} }
        .bk .hero h1{font-size:46px; line-height:1.1; letter-spacing:-0.015em; margin:0 0 20px; font-weight:700;}
        .bk .hero p.lede{font-size:17px; color:var(--paper-dim); max-width:46ch; margin:0 0 32px;}
        .bk .hero-ctas{display:flex; gap:12px; flex-wrap:wrap;}
        .bk .btn{display:inline-block; padding:13px 22px; border-radius:3px; font-weight:600; font-size:15px; border:1px solid transparent; transition:background .15s ease, border-color .15s ease; cursor:pointer;}
        .bk .btn-primary{background:var(--amber); color:#181205;}
        .bk .btn-primary:hover{background:#f0b357;}
        .bk .btn-ghost{border-color:var(--line); color:var(--paper); background:none; font-family:inherit;}
        .bk .btn-ghost:hover{border-color:var(--paper-dim);}
        .bk .console{background:var(--panel); border:1px solid var(--line); border-radius:4px; overflow:hidden;}
        .bk .console-head{display:flex; align-items:center; justify-content:space-between; padding:11px 16px; border-bottom:1px solid var(--line); font-size:12.5px; color:var(--paper-dim);}
        .bk .live{display:flex; align-items:center; gap:6px; color:var(--cyan);}
        .bk .live .p{width:6px; height:6px; border-radius:50%; background:var(--cyan); animation:bkpulse 1.6s infinite;}
        @keyframes bkpulse{0%,100%{opacity:1;} 50%{opacity:.35;}}
        .bk .console-row{display:flex; align-items:center; justify-content:space-between; padding:12px 16px; font-size:13.5px; border-bottom:1px solid var(--line);}
        .bk .console-row:last-child{border-bottom:none;}
        .bk .console-row .loc{color:var(--paper);}
        .bk .console-row .ms{color:var(--cyan); font-weight:600;}
        .bk section{padding:72px 0;}
        .bk .sec-head{max-width:56ch; margin-bottom:40px;}
        .bk .sec-head h2{font-size:30px; letter-spacing:-0.01em; margin:0 0 10px; font-weight:700;}
        .bk .sec-head p{color:var(--paper-dim); font-size:15.5px; margin:0;}
        .bk .tabs{display:flex; gap:8px; margin-bottom:36px; border-bottom:1px solid var(--line);}
        .bk .tab-btn{background:none; border:none; color:var(--paper-dim); font-family:inherit; font-size:15px; font-weight:600; padding:12px 4px; margin-right:24px; cursor:pointer; border-bottom:2px solid transparent; transition:color .15s ease;}
        .bk .tab-btn.active{color:var(--paper); border-color:var(--amber);}
        .bk .plans{display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--line); border:1px solid var(--line);}
        @media (max-width:820px){ .bk .plans{grid-template-columns:1fr;} }
        .bk .plan{background:var(--panel); padding:28px; display:flex; flex-direction:column;}
        .bk .plan.featured{background:var(--panel-2);}
        .bk .plan-name{font-size:13px; color:var(--amber); margin-bottom:6px; font-weight:600;}
        .bk .plan-price{font-size:32px; font-weight:700; margin:0 0 2px;}
        .bk .plan-price span{font-size:14px; color:var(--paper-dim); font-weight:500;}
        .bk .plan-note{font-size:12.5px; color:var(--paper-dim); margin-bottom:22px;}
        .bk .specs{list-style:none; padding:0; margin:0 0 24px; font-size:13.5px;}
        .bk .specs li{display:flex; justify-content:space-between; padding:9px 0; border-top:1px solid var(--line);}
        .bk .specs li:first-child{border-top:none;}
        .bk .specs .k{color:var(--paper-dim);}
        .bk .specs .v{font-family:'IBM Plex Mono', monospace; font-size:12.5px;}
        .bk .plan .btn{margin-top:auto; text-align:center;}
        .bk .feat-grid{display:grid; grid-template-columns:repeat(3,1fr); gap:1px; background:var(--line); border:1px solid var(--line);}
        @media (max-width:820px){ .bk .feat-grid{grid-template-columns:1fr 1fr;} }
        @media (max-width:560px){ .bk .feat-grid{grid-template-columns:1fr;} }
        .bk .feat{background:var(--panel); padding:24px;}
        .bk .feat .k{font-family:'IBM Plex Mono', monospace; font-size:12px; color:var(--cyan); margin-bottom:10px;}
        .bk .feat h3{font-size:16px; margin:0 0 8px; font-weight:600;}
        .bk .feat p{font-size:13.5px; color:var(--paper-dim); margin:0;}
        .bk .loc-table{width:100%; border-collapse:collapse; font-size:14px;}
        .bk .loc-table th{text-align:left; font-weight:500; color:var(--paper-dim); font-size:12.5px; padding:10px 12px; border-bottom:1px solid var(--line);}
        .bk .loc-table td{padding:14px 12px; border-bottom:1px solid var(--line);}
        .bk .loc-table td.mono{color:var(--cyan);}
        .bk .loc-table tr:last-child td{border-bottom:none;}
        .bk .steps{display:grid; grid-template-columns:repeat(4,1fr); gap:24px;}
        @media (max-width:820px){ .bk .steps{grid-template-columns:1fr 1fr;} }
        @media (max-width:520px){ .bk .steps{grid-template-columns:1fr;} }
        .bk .step{border-top:1px solid var(--line); padding-top:16px;}
        .bk .step .num{font-family:'IBM Plex Mono', monospace; color:var(--amber); font-size:13px; margin-bottom:10px;}
        .bk .step h3{font-size:15.5px; margin:0 0 6px; font-weight:600;}
        .bk .step p{font-size:13.5px; color:var(--paper-dim); margin:0;}
        .bk .faq-item{border-top:1px solid var(--line); padding:18px 0;}
        .bk .faq-item:last-child{border-bottom:1px solid var(--line);}
        .bk .faq-item summary{cursor:pointer; font-size:15.5px; font-weight:600; list-style:none; display:flex; justify-content:space-between; align-items:center;}
        .bk .faq-item summary::-webkit-details-marker{display:none;}
        .bk .faq-item summary .ind{color:var(--paper-dim); font-family:'IBM Plex Mono', monospace;}
        .bk .faq-item p{font-size:14.5px; color:var(--paper-dim); margin:12px 0 0; max-width:64ch;}
        .bk .contact-band{background:var(--panel); border:1px solid var(--line); border-radius:4px; padding:40px; display:flex; justify-content:space-between; align-items:center; gap:24px; flex-wrap:wrap;}
        .bk .contact-band h2{font-size:24px; margin:0 0 8px; font-weight:700;}
        .bk .contact-band p{margin:0; color:var(--paper-dim); font-size:14.5px;}
        .bk .contact-links{display:flex; gap:12px; flex-wrap:wrap;}
        .bk footer{border-top:1px solid var(--line); padding:28px 0; font-size:13px; color:var(--paper-dim);}
        .bk .foot-row{display:flex; justify-content:space-between; flex-wrap:wrap; gap:12px;}
      `}</style>

      <div className="bk">
        <header>
          <div className="nav wrap">
            <div className="brand"><span className="dot"></span>BOTKET VPS</div>
            <nav className="navlinks">
              <a href="#plans">Plans</a>
              <a href="#locations">Locations</a>
              <a href="#deploy">How it works</a>
              <a href="#faq">FAQ</a>
              <a href="#contact">Contact</a>
            </nav>
            <a className="navcta" href="https://wa.me/447448315610">Order on WhatsApp</a>
          </div>
        </header>

        <section className="hero">
          <div className="wrap hero-grid">
            <div>
              <h1>Servers that don&apos;t blink when your trade needs to fire.</h1>
              <p className="lede">BOTKET VPS gives EA and MT4/MT5 traders sub-millisecond routes to major brokers — and gives everyone else a fast, no-fuss server for apps, bots, and sites. Pick your lane below.</p>
              <div className="hero-ctas">
                <a className="btn btn-primary" href="#plans">See plans</a>
                <a className="btn btn-ghost" href="https://wa.me/447448315610">Talk to us</a>
              </div>
            </div>
            <div className="console">
              <div className="console-head">
                <span>Live latency — sample routes</span>
                <span className="live"><span className="p"></span>LIVE</span>
              </div>
              <div className="console-row"><span className="loc">London (Equinix LD4)</span><span className="ms mono">0.8 ms</span></div>
              <div className="console-row"><span className="loc">New York (NY4)</span><span className="ms mono">1.1 ms</span></div>
              <div className="console-row"><span className="loc">Singapore</span><span className="ms mono">1.4 ms</span></div>
              <div className="console-row"><span className="loc">Mumbai</span><span className="ms mono">2.0 ms</span></div>
            </div>
          </div>
        </section>

        <section id="plans">
          <div className="wrap">
            <div className="sec-head">
              <h2>Two kinds of fast</h2>
              <p>Same infrastructure underneath. Trading VPS is tuned for uptime and broker latency; general VPS is priced for everyday hosting.</p>
            </div>

            <div className="tabs">
              <button className={`tab-btn ${tab === 'forex' ? 'active' : ''}`} onClick={() => setTab('forex')}>Forex Trading VPS</button>
              <button className={`tab-btn ${tab === 'general' ? 'active' : ''}`} onClick={() => setTab('general')}>General Purpose VPS</button>
            </div>

            {tab === 'forex' && (
              <div className="plans">
                <div className="plan">
                  <div className="plan-name">Starter</div>
                  <div className="plan-price">₹699<span>/mo</span></div>
                  <div className="plan-note">Good for 1–2 EAs on a single pair</div>
                  <ul className="specs">
                    <li><span className="k">vCPU</span><span className="v">1 core</span></li>
                    <li><span className="k">RAM</span><span className="v">2 GB</span></li>
                    <li><span className="k">Storage</span><span className="v">40 GB NVMe</span></li>
                    <li><span className="k">OS</span><span className="v">Windows Server</span></li>
                    <li><span className="k">MT4/MT5 setup</span><span className="v">Included</span></li>
                  </ul>
                  <a className="btn btn-ghost" href="https://wa.me/447448315610">Order Starter</a>
                </div>
                <div className="plan featured">
                  <div className="plan-name">Trader</div>
                  <div className="plan-price">₹1,299<span>/mo</span></div>
                  <div className="plan-note">Most traders running multiple EAs pick this</div>
                  <ul className="specs">
                    <li><span className="k">vCPU</span><span className="v">2 cores</span></li>
                    <li><span className="k">RAM</span><span className="v">4 GB</span></li>
                    <li><span className="k">Storage</span><span className="v">80 GB NVMe</span></li>
                    <li><span className="k">OS</span><span className="v">Windows Server</span></li>
                    <li><span className="k">MT4/MT5 setup</span><span className="v">Included</span></li>
                  </ul>
                  <a className="btn btn-primary" href="https://wa.me/447448315610">Order Trader</a>
                </div>
                <div className="plan">
                  <div className="plan-name">Pro Trader</div>
                  <div className="plan-price">₹2,499<span>/mo</span></div>
                  <div className="plan-note">Low-latency London/NY node, heavier EA loads</div>
                  <ul className="specs">
                    <li><span className="k">vCPU</span><span className="v">4 cores</span></li>
                    <li><span className="k">RAM</span><span className="v">8 GB</span></li>
                    <li><span className="k">Storage</span><span className="v">160 GB NVMe</span></li>
                    <li><span className="k">OS</span><span className="v">Windows Server</span></li>
                    <li><span className="k">MT4/MT5 setup</span><span className="v">Included</span></li>
                  </ul>
                  <a className="btn btn-ghost" href="https://wa.me/447448315610">Order Pro Trader</a>
                </div>
              </div>
            )}

            {tab === 'general' && (
              <div className="plans">
                <div className="plan">
                  <div className="plan-name">Basic</div>
                  <div className="plan-price">₹399<span>/mo</span></div>
                  <div className="plan-note">Small sites, bots, background jobs</div>
                  <ul className="specs">
                    <li><span className="k">vCPU</span><span className="v">1 core</span></li>
                    <li><span className="k">RAM</span><span className="v">1 GB</span></li>
                    <li><span className="k">Storage</span><span className="v">25 GB NVMe</span></li>
                    <li><span className="k">OS</span><span className="v">Ubuntu / Windows</span></li>
                    <li><span className="k">Bandwidth</span><span className="v">1 TB</span></li>
                  </ul>
                  <a className="btn btn-ghost" href="https://wa.me/447448315610">Order Basic</a>
                </div>
                <div className="plan featured">
                  <div className="plan-name">Standard</div>
                  <div className="plan-price">₹899<span>/mo</span></div>
                  <div className="plan-note">Apps with real traffic, small teams</div>
                  <ul className="specs">
                    <li><span className="k">vCPU</span><span className="v">2 cores</span></li>
                    <li><span className="k">RAM</span><span className="v">4 GB</span></li>
                    <li><span className="k">Storage</span><span className="v">80 GB NVMe</span></li>
                    <li><span className="k">OS</span><span className="v">Ubuntu / Windows</span></li>
                    <li><span className="k">Bandwidth</span><span className="v">3 TB</span></li>
                  </ul>
                  <a className="btn btn-primary" href="https://wa.me/447448315610">Order Standard</a>
                </div>
                <div className="plan">
                  <div className="plan-name">Business</div>
                  <div className="plan-price">₹1,799<span>/mo</span></div>
                  <div className="plan-note">Heavier workloads, multiple services</div>
                  <ul className="specs">
                    <li><span className="k">vCPU</span><span className="v">4 cores</span></li>
                    <li><span className="k">RAM</span><span className="v">8 GB</span></li>
                    <li><span className="k">Storage</span><span className="v">160 GB NVMe</span></li>
                    <li><span className="k">OS</span><span className="v">Ubuntu / Windows</span></li>
                    <li><span className="k">Bandwidth</span><span className="v">5 TB</span></li>
                  </ul>
                  <a className="btn btn-ghost" href="https://wa.me/447448315610">Order Business</a>
                </div>
              </div>
            )}
          </div>
        </section>

        <section>
          <div className="wrap">
            <div className="sec-head">
              <h2>What&apos;s included, every plan</h2>
              <p>No hidden setup fees. No surprise throttling.</p>
            </div>
            <div className="feat-grid">
              <div className="feat"><div className="k">01</div><h3>Instant deployment</h3><p>Most VPS instances are provisioned within 15–30 minutes of payment confirmation.</p></div>
              <div className="feat"><div className="k">02</div><h3>DDoS protection</h3><p>Network-level filtering on every plan, so a bad actor doesn&apos;t take your EA or app offline.</p></div>
              <div className="feat"><div className="k">03</div><h3>99.9% uptime</h3><p>Monitored infrastructure with automatic failover on the underlying provider network.</p></div>
              <div className="feat"><div className="k">04</div><h3>MT4/MT5 setup help</h3><p>We install and configure your terminal on trading plans at no extra cost.</p></div>
              <div className="feat"><div className="k">05</div><h3>Windows or Linux</h3><p>Windows Server for trading terminals, Ubuntu for apps, bots, and general workloads.</p></div>
              <div className="feat"><div className="k">06</div><h3>Human support</h3><p>WhatsApp and Telegram support, response within 24 hours — usually much faster.</p></div>
            </div>
          </div>
        </section>

        <section id="locations">
          <div className="wrap">
            <div className="sec-head">
              <h2>Where your VPS lives</h2>
              <p>Choose a location close to your broker&apos;s server for the shortest possible round trip.</p>
            </div>
            <table className="loc-table">
              <thead>
                <tr><th>Location</th><th>Best for</th><th>Typical broker latency</th></tr>
              </thead>
              <tbody>
                <tr><td>London (Equinix LD4)</td><td>UK/EU brokers, LMAX, IC Markets EU</td><td className="mono">0.5 – 1.5 ms</td></tr>
                <tr><td>New York (NY4)</td><td>US brokers, FXCM, Oanda</td><td className="mono">0.8 – 2 ms</td></tr>
                <tr><td>Singapore</td><td>Asia-Pacific brokers</td><td className="mono">1 – 3 ms</td></tr>
                <tr><td>Mumbai</td><td>Indian brokers, general hosting</td><td className="mono">1.5 – 4 ms</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section id="deploy">
          <div className="wrap">
            <div className="sec-head">
              <h2>From order to online</h2>
              <p>Four steps, no technical back-and-forth unless you want it.</p>
            </div>
            <div className="steps">
              <div className="step"><div className="num">1</div><h3>Pick a plan</h3><p>Choose forex or general, then message us on WhatsApp to confirm.</p></div>
              <div className="step"><div className="num">2</div><h3>Pay securely</h3><p>UPI, bank transfer, or card — we&apos;ll send a link for your plan.</p></div>
              <div className="step"><div className="num">3</div><h3>We provision it</h3><p>Your VPS is set up and ready, usually within 15–30 minutes.</p></div>
              <div className="step"><div className="num">4</div><h3>Get your login</h3><p>RDP or SSH details land in your inbox. Install your EA or app and go.</p></div>
            </div>
          </div>
        </section>

        <section id="faq">
          <div className="wrap">
            <div className="sec-head">
              <h2>Frequently asked questions</h2>
            </div>
            <div>
              <details className="faq-item" open>
                <summary>Does this work with MT4 and MT5?<span className="ind">+</span></summary>
                <p>Yes. All forex plans come with Windows Server and we&apos;ll install and configure MT4 or MT5 for you at no extra charge.</p>
              </details>
              <details className="faq-item">
                <summary>What&apos;s the difference between forex and general VPS?<span className="ind">+</span></summary>
                <p>Same hardware tiers, but forex plans are provisioned in locations chosen for low latency to major broker servers and default to Windows Server for MT4/MT5. General plans default to Ubuntu and are priced for everyday hosting.</p>
              </details>
              <details className="faq-item">
                <summary>Can I upgrade my plan later?<span className="ind">+</span></summary>
                <p>Yes, you can move up a tier at any time. We prorate the difference for the current billing cycle.</p>
              </details>
              <details className="faq-item">
                <summary>How fast is setup?<span className="ind">+</span></summary>
                <p>Most orders are live within 15–30 minutes of payment during business hours. Complex setups may take longer — we&apos;ll tell you upfront.</p>
              </details>
              <details className="faq-item">
                <summary>Which locations can I choose from?<span className="ind">+</span></summary>
                <p>London, New York, Singapore, and Mumbai today. Let us know your broker and we&apos;ll recommend the closest node.</p>
              </details>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="wrap">
            <div className="contact-band">
              <div>
                <h2>Ready to set up your VPS?</h2>
                <p>Message us your plan choice and we&apos;ll have you running the same day.</p>
              </div>
              <div className="contact-links">
                <a className="btn btn-primary" href="https://wa.me/447448315610">WhatsApp</a>
                <a className="btn btn-ghost" href="https://t.me/botketsupport">Telegram</a>
                <a className="btn btn-ghost" href="mailto:botketsupport@gmail.com">Email</a>
              </div>
            </div>
          </div>
        </section>

        <footer>
          <div className="wrap foot-row">
            <span>© 2026 BOTKET VPS. All rights reserved.</span>
            <span className="mono">botketsupport@gmail.com · @botketsupport</span>
          </div>
        </footer>
      </div>
    </>
  );
}