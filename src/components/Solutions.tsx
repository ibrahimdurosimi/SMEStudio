import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export function Solutions() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: listRef, isInView: listInView } = useInView();

  const scrollSol = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 320, behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="solutions">
      <div className="wrap">
        <div ref={headerRef} className={`section-head reveal ${headerInView ? 'in' : ''}`}>
          <span className="eyebrow">Growth-Focused Digital Solutions</span>
          <h2>From performance-focused strategy to technical execution — the tools you need to <em>dominate your niche.</em></h2>
          <p>Every solution is built for how Nigerian and diaspora-facing brands actually grow — Naira-denominated ad budgets, WhatsApp-first funnels, and payments that just work.</p>
        </div>
        <div ref={listRef} className={`sol-scroll-wrap reveal ${listInView ? 'in' : ''}`}>
          <div className="sol-scroll" id="solScroll" ref={scrollRef}>
            <div className="sol-card">
              <div className="sol-num">01 — SEO</div>
              <div className="sol-icon">🔎</div>
              <h3>SEO Optimization</h3>
              <p>Rank higher on Google and stay there — organic growth for Nigerian and global search that compounds month after month.</p>
              <div className="sol-tags"><span className="sol-tag">Technical SEO</span><span className="sol-tag">Local SEO</span><span className="sol-tag">Content Strategy</span></div>
            </div>
            <div className="sol-card">
              <div className="sol-num">02 — Performance</div>
              <div className="sol-icon">⚡</div>
              <h3>Performance Marketing</h3>
              <p>Meta, Google, and TikTok campaigns built for ROAS — every Naira tracked, tested, and optimised until the numbers move.</p>
              <div className="sol-tags"><span className="sol-tag">Meta Ads</span><span className="sol-tag">Google Ads</span><span className="sol-tag">TikTok</span><span className="sol-tag">A/B Testing</span></div>
            </div>
            <div className="sol-card">
              <div className="sol-num">03 — Social</div>
              <div className="sol-icon">📱</div>
              <h3>Content & Social</h3>
              <p>Consistent brand presence across Instagram, WhatsApp Business, and X — content calendars that build a real audience.</p>
              <div className="sol-tags"><span className="sol-tag">Content Calendar</span><span className="sol-tag">WhatsApp Business</span><span className="sol-tag">Community</span></div>
            </div>
            <div className="sol-card">
              <div className="sol-num">04 — Email</div>
              <div className="sol-icon">✉️</div>
              <h3>Email & CRM</h3>
              <p>Automated sequences, drip campaigns, and newsletters that nurture leads and drive repeat revenue.</p>
              <div className="sol-tags"><span className="sol-tag">Automation</span><span className="sol-tag">Drip Campaigns</span><span className="sol-tag">CRM</span></div>
            </div>
            <div className="sol-card">
              <div className="sol-num">05 — Ecommerce</div>
              <div className="sol-icon">🛒</div>
              <h3>Ecommerce & Payments</h3>
              <p>Storefronts wired to Paystack and Flutterwave, built to turn browsers into buyers — catalogue to checkout.</p>
              <div className="sol-tags"><span className="sol-tag">Paystack</span><span className="sol-tag">Flutterwave</span><span className="sol-tag">Checkout UX</span></div>
            </div>
            <div className="sol-card">
              <div className="sol-num">06 — Build</div>
              <div className="sol-icon">🖥️</div>
              <h3>Web & App Development</h3>
              <p>Company sites, web apps, and mobile apps engineered for conversion, not just aesthetics.</p>
              <div className="sol-tags"><span className="sol-tag">Websites</span><span className="sol-tag">Web Apps</span><span className="sol-tag">Mobile</span></div>
            </div>
            <div className="sol-card">
              <div className="sol-num">07 — AI</div>
              <div className="sol-icon">🤖</div>
              <h3>AI & Marketing Automation</h3>
              <p>AI-assisted content, always-on optimisation, and predictive analytics folded into the daily workflow.</p>
              <div className="sol-tags"><span className="sol-tag">AI Content</span><span className="sol-tag">Predictive</span><span className="sol-tag">Automation</span></div>
            </div>
          </div>
          <div className="sol-nav">
            <button onClick={() => scrollSol(-1)} aria-label="Previous">←</button>
            <button onClick={() => scrollSol(1)} aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
