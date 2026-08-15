import solImage from "../assets/images/regenerated_image_1786829542818.png";
import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export function Solutions() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: headerRef, isInView: headerInView } = useInView();
  const { ref: listRef, isInView: listInView } = useInView();

  const scrollSol = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 380, behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="solutions" style={{ padding: '120px 0', background: 'var(--panel)', color: 'var(--panel-text)', overflow: 'hidden' }}>
      <div className="wrap">
        
        <div ref={headerRef} className={`reveal ${headerInView ? 'in' : ''}`} style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '60px', alignItems: 'center', marginBottom: '80px' }} id="sol-head-grid">
          <div>
            <span className="eyebrow" style={{ color: 'var(--gold)' }}>Growth-Focused Digital Solutions</span>
            <h2 style={{ color: '#ffffff', fontFamily: 'monospace', fontSize: '49px', lineHeight: 1.1, margin: '20px 0' }}>
              From performance-focused strategy to technical execution — the tools you need to <em style={{ color: 'var(--gold)', fontStyle: 'normal' }}>dominate your niche.</em>
            </h2>
            <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.7)', maxWidth: '500px', lineHeight: 1.6 }}>
              Every solution we deploy is purpose-built for how Nigerian, pan-African, and diaspora-facing brands actually grow today. We navigate Naira-denominated ad budgets, build high-converting WhatsApp-first funnels, and integrate local payment gateways that just work.
            </p>
          </div>
          <div style={{ borderRadius: '24px', overflow: 'hidden' }}>
            <img 
              src={solImage} 
              alt="Digital marketing team collaborating" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '340px' }} 
            />
          </div>
        </div>

        <div ref={listRef} className={`sol-scroll-wrap reveal ${listInView ? 'in' : ''}`}>
          <div className="sol-scroll" id="solScroll" ref={scrollRef} style={{ display: 'flex', gap: '24px', overflowX: 'auto', paddingBottom: '40px', scrollbarWidth: 'none' }}>
            
            <div className="sol-card" style={{ minWidth: '340px', background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="sol-num" style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '14px', marginBottom: '20px' }}>01 — SEO</div>
              <div className="sol-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🔎</div>
              <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#fff' }}>Search Engine Optimization</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                Rank higher on Google and stay there. We build organic growth engines for Nigerian and global search queries that compound your traffic month after month, reducing your reliance on paid ads over time.
              </p>
              <div className="sol-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>Technical SEO</span>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>Local SEO</span>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>Content Strategy</span>
              </div>
            </div>

            <div className="sol-card" style={{ minWidth: '340px', background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="sol-num" style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '14px', marginBottom: '20px' }}>02 — Performance</div>
              <div className="sol-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>⚡</div>
              <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#fff' }}>Performance Marketing</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                Hyper-targeted Meta, Google, and TikTok campaigns built strictly for ROAS (Return on Ad Spend). Every Naira is tracked, tested, and aggressively optimised until the revenue numbers move in the right direction.
              </p>
              <div className="sol-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>Meta Ads</span>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>Google Ads</span>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>A/B Testing</span>
              </div>
            </div>

            <div className="sol-card" style={{ minWidth: '340px', background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="sol-num" style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '14px', marginBottom: '20px' }}>03 — Social & Comm</div>
              <div className="sol-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>📱</div>
              <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#fff' }}>Content & Social</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                Establishing a consistent, authoritative brand presence across Instagram, LinkedIn, X, and WhatsApp Business. We deploy content calendars designed to build a highly engaged, loyal audience that converts.
              </p>
              <div className="sol-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>Content Ops</span>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>WhatsApp Business</span>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>Community</span>
              </div>
            </div>

            <div className="sol-card" style={{ minWidth: '340px', background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="sol-num" style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '14px', marginBottom: '20px' }}>04 — Retention</div>
              <div className="sol-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>✉️</div>
              <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#fff' }}>Email & CRM</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                Unlock the hidden revenue in your existing customer base. We build automated email sequences, SMS drip campaigns, and CRM pipelines that nurture cold leads and drive massive repeat purchase rates.
              </p>
              <div className="sol-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>Marketing Automation</span>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>Drip Campaigns</span>
              </div>
            </div>

            <div className="sol-card" style={{ minWidth: '340px', background: 'rgba(255,255,255,0.05)', padding: '40px', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.1)' }}>
              <div className="sol-num" style={{ color: 'var(--gold)', fontFamily: 'var(--mono)', fontSize: '14px', marginBottom: '20px' }}>05 — Build</div>
              <div className="sol-icon" style={{ fontSize: '32px', marginBottom: '20px' }}>🖥️</div>
              <h3 style={{ fontSize: '24px', marginBottom: '16px', color: '#fff' }}>Web & App Development</h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: 1.6, marginBottom: '24px' }}>
                From high-converting landing pages to fully custom React web applications. We engineer digital storefronts wired directly to local gateways like Paystack and Flutterwave, designed exclusively to turn browsers into buyers.
              </p>
              <div className="sol-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>Websites & Apps</span>
                <span className="sol-tag" style={{ background: 'rgba(255,255,255,0.1)', padding: '6px 12px', borderRadius: '100px', fontSize: '12px' }}>Paystack/Flutterwave</span>
              </div>
            </div>
            
          </div>
          
          <div className="sol-nav" style={{ display: 'flex', gap: '12px', marginTop: '20px' }}>
            <button 
              onClick={() => scrollSol(-1)} 
              aria-label="Previous"
              style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ←
            </button>
            <button 
              onClick={() => scrollSol(1)} 
              aria-label="Next"
              style={{ width: '48px', height: '48px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', background: 'transparent', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              →
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
