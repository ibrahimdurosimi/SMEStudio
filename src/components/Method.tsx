import { useState } from 'react';
import { useInView } from '../hooks/useInView';

import React from "react";
const MethodRow: React.FC<{ num: string, title: string, desc: string, isOpen: boolean, onClick: () => void }> = ({ num, title, desc, isOpen, onClick }) => {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className={`method-row reveal ${isInView ? 'in' : ''}`} onClick={onClick} style={{ cursor: 'pointer' }}>
      <div className="m-num" style={{ paddingTop: '2px' }}>{num}</div>
      <div className="m-content">
        <h4 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: 0, transition: 'margin 0.3s ease' }}>
          {title}
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease', opacity: 0.5 }}>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </h4>
        <div className="m-desc" style={{ 
          display: 'grid',
          gridTemplateRows: isOpen ? '1fr' : '0fr',
          transition: 'grid-template-rows 0.3s ease' 
        }}>
          <div style={{ overflow: 'hidden' }}>
            <p style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.3s ease 0.1s', paddingTop: '12px' }}>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Method() {
  const { ref: headRef, isInView: headInView } = useInView();
  const [openIndex, setOpenIndex] = useState<number>(0);

  const methods = [
    {
      num: "01",
      title: "Comprehensive Audit",
      desc: "A clear-eyed, data-backed read of your brand, conversion funnels, and marketing channels as they actually perform today. We don't carry over assumptions; we look at the raw numbers to find out where you're bleeding cash and losing customers."
    },
    {
      num: "02",
      title: "Targeted Strategy",
      desc: "We build a prioritised, lean growth plan focusing exclusively on the two or three levers that will move the needle right now. No vanity metrics — just a straight path to acquiring and retaining high-value customers."
    },
    {
      num: "03",
      title: "Conversion-First Build",
      desc: "Whether it's a new Shopify storefront, a React web app, or an automated email infrastructure, we design and ship assets with the growth strategy inherently baked in. Everything is built to convert."
    },
    {
      num: "04",
      title: "Orchestrated Launch",
      desc: "A coordinated go-live sequence across all your active channels. We wire in advanced tracking, server-side attribution, and analytics before the first click happens, ensuring every ad dollar is fully accountable."
    },
    {
      num: "05",
      title: "Scale with AI",
      desc: "Once the foundation is set, we deploy AI-assisted A/B testing, dynamic content generation, and predictive optimisation. The machine handles the repetitive scaling work, allowing the next stage of your growth to compound rapidly."
    }
  ];

  return (
    <section id="method" className="method" style={{ padding: '80px 0', background: 'var(--paper)' }}>
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headInView ? 'in' : ''}`} style={{ maxWidth: '800px', margin: '0 auto 50px', textAlign: 'center' }}>
          <span className="eyebrow" style={{ display: 'inline-flex', justifyContent: 'center' }}>The Method</span>
          <h2>The Zero to Hero Framework</h2>
          <p>
            A five-step operating rhythm — the exact framework we've used to accelerate growth for African fintechs, local retail brands, and B2B services. We've stripped away the agency bloat to deliver a compressed, high-impact strategy for teams who need measurable revenue, not just theory.
          </p>
        </div>
        
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'start' }} className="method-grid-responsive">
          <div className="method-visual" style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)', position: 'sticky', top: '100px' }}>
            <img 
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" 
              alt="Strategic planning session" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', minHeight: '400px' }} 
            />
          </div>
          <div className="method-list">
            {methods.map((m, i) => (
              <MethodRow 
                key={i}
                num={m.num}
                title={m.title}
                desc={m.desc}
                isOpen={openIndex === i}
                onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
