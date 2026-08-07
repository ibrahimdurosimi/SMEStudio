import { useRef } from 'react';
import { useInView } from '../hooks/useInView';

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { ref: headRef, isInView: headInView } = useInView();
  const { ref: listRef, isInView: listInView } = useInView();

  const scrollTestimonials = (dir: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir * 350, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      quote: "SMEStudio completely overhauled our acquisition funnel. We went from guessing where our leads came from to having a predictable engine.",
      role: "CEO",
      industry: "FinTech",
      location: "Lagos",
      metric: "-40% CPA"
    },
    {
      quote: "The team understood our market better than we did. Their AI-driven approach helped us scale across three new cities without bloating our ad spend.",
      role: "Founder",
      industry: "Logistics",
      location: "Abuja",
      metric: "3x ROI"
    },
    {
      quote: "We were struggling with organic visibility. SMEStudio's programmatic SEO approach dominated our niche within months.",
      role: "Marketing Dir",
      industry: "EdTech",
      location: "London",
      metric: "+210% Traffic"
    },
    {
      quote: "Not just another agency. They act like true partners and operators. The results on our e-commerce store were immediate.",
      role: "Owner",
      industry: "Retail",
      location: "Accra",
      metric: "+180% Sales"
    },
    {
      quote: "Their automated sequences transformed our inactive mailing list into our highest converting channel.",
      role: "Head of Growth",
      industry: "SaaS",
      location: "Lagos",
      metric: "45% Open Rate"
    },
    {
      quote: "Precise, data-driven, and relentlessly focused on revenue. We dropped our previous agency within two weeks of working with SMEStudio.",
      role: "CMO",
      industry: "Real Estate",
      location: "Abuja",
      metric: "+300% Leads"
    },
    {
      quote: "The predictive analytics they deployed allowed us to forecast demand perfectly during our peak season.",
      role: "Operations VP",
      industry: "Retail",
      location: "Nairobi",
      metric: "99% Accuracy"
    },
    {
      quote: "We tried running Meta ads in-house and burned cash. They stepped in, restructured everything, and made it profitable.",
      role: "Founder",
      industry: "Healthcare",
      location: "Lagos",
      metric: "5x ROAS"
    }
  ];

  return (
    <section id="testimonials" style={{ background: 'var(--paper-deep)' }}>
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headInView ? 'in' : ''}`}>
          <span className="eyebrow">Client Results</span>
          <h2>Results our clients actually feel.</h2>
        </div>
        
        <div ref={listRef} className={`sol-scroll-wrap reveal ${listInView ? 'in' : ''}`}>
          <div className="sol-scroll" ref={scrollRef}>
            {testimonials.map((t, i) => (
              <div key={i} className="test-card">
                <div className="test-quote-mark">“</div>
                <p className="test-quote">{t.quote}</p>
                <div className="test-meta">
                  <span className="test-role">{t.role}</span>
                  <span className="test-sep">/</span>
                  <span className="test-industry">{t.industry}</span>
                  <span className="test-sep">/</span>
                  <span className="test-location">{t.location}</span>
                </div>
                <div className="test-metric">{t.metric}</div>
              </div>
            ))}
          </div>
          <div className="sol-nav">
            <button onClick={() => scrollTestimonials(-1)} aria-label="Previous">←</button>
            <button onClick={() => scrollTestimonials(1)} aria-label="Next">→</button>
          </div>
        </div>
      </div>
    </section>
  );
}
