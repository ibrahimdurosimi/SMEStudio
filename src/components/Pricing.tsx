import { useState } from 'react';
import { useInView } from '../hooks/useInView';
import { useTheme } from '../context/ThemeContext';

export function Pricing() {
  const [annual, setAnnual] = useState(false);
  const { openLeadModal } = useTheme();
  
  const { ref: headRef, isInView: headInView } = useInView();
  const { ref: topRef, isInView: topInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  const formatNaira = (n: number) => '₦' + n.toLocaleString('en-NG');

  return (
    <section id="pricing">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headInView ? 'in' : ''}`}>
          <span className="eyebrow">Simple, Transparent Pricing</span>
          <h2>Pricing built for Nigerian SMEs — ready to scale.</h2>
          <p>Tailored packages designed to grow with your business. No hidden fees, no long-term lock-in — just results.</p>
        </div>

        <div ref={topRef} className={`pricing-top reveal ${topInView ? 'in' : ''}`}>
          <div></div>
          <div className="billing-switch">
            <span>Monthly</span>
            <button className={`switch ${annual ? 'on' : ''}`} id="billingSwitch" onClick={() => setAnnual(!annual)} aria-label="Toggle annual billing">
              <span className="knob"></span>
            </button>
            <span>Annually <span className="save-tag">— save 20%</span></span>
          </div>
        </div>

        <div ref={gridRef} className={`pricing-grid reveal ${gridInView ? 'in' : ''}`}>
          <div className="price-card">
            <div className="plan-head"><span className="plan-name">🌱 Starter</span></div>
            <div className="price"><span className="price-num">{formatNaira(annual ? 280000 : 350000)}</span><span className="cycle">{annual ? '/mo, billed annually' : '/month'}</span></div>
            <p className="plan-desc">Everything a growing brand needs to start showing up online with confidence.</p>
            <button className="btn-outline-dark plan-cta" onClick={openLeadModal}>Get Started</button>
            <div className="price-feat">
              <div className="feat-row">✔️<div><span className="feat-main">1 marketing channel</span><span className="feat-sub">SEO, Ads, Social, or Email — your choice</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Monthly strategy call</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Competitor & digital audit</span><span className="feat-sub">One-time setup audit included</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Monthly performance report</span><span className="feat-sub">Clear metrics, plain English</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Email support</span><span className="feat-sub">Response within 48 hours</span></div></div>
            </div>
          </div>

          <div className="price-card featured">
            <div className="plan-head"><span className="plan-name">⚡ Growth</span><span className="popular-badge">POPULAR</span></div>
            <div className="price"><span className="price-num">{formatNaira(annual ? 680000 : 850000)}</span><span className="cycle">{annual ? '/mo, billed annually' : '/month'}</span></div>
            <p className="plan-desc">More channels, tighter strategy, and priority support for brands ready to scale seriously.</p>
            <button className="btn-primary plan-cta" onClick={openLeadModal}>Start Growing</button>
            <div className="price-feat">
              <div className="feat-row">✔️<div><span className="feat-main">Up to 3 marketing channels</span><span className="feat-sub">SEO + Ads + Social or Email — combined</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Bi-weekly strategy calls</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Full marketing + competitor audit</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Weekly performance report</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">A/B testing included</span><span className="feat-sub">Ads, landing pages, email subject lines</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Priority WhatsApp support</span></div></div>
            </div>
          </div>

          <div className="price-card">
            <div className="plan-head"><span className="plan-name">🏢 Agency</span></div>
            <div className="price"><span className="price-num">{formatNaira(annual ? 1440000 : 1800000)}</span><span className="cycle">{annual ? '/mo, billed annually' : '/month'}</span></div>
            <p className="plan-desc">No limits — full-stack execution and dedicated support for serious teams scaling fast.</p>
            <button className="btn-outline-dark plan-cta" onClick={openLeadModal}>Talk to Us</button>
            <div className="price-feat">
              <div className="feat-row">✔️<div><span className="feat-main">All channels + AI automation</span><span className="feat-sub">SEO + Ads + Social + Email — full stack</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Weekly strategy calls</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Full audit + CRO</span><span className="feat-sub">Conversion rate optimisation included</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Custom KPI dashboard</span><span className="feat-sub">Daily reporting</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Unlimited A/B testing</span></div></div>
              <div className="feat-row">✔️<div><span className="feat-main">Dedicated account strategist</span></div></div>
            </div>
          </div>
        </div>
        <p className="pricing-note">All plans billed in Naira · Custom enterprise packages available on request</p>
      </div>
    </section>
  );
}
