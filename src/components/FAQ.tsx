import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const FAQS = [
  {
    question: "What exactly do you do as a digital marketer?",
    answer: "We're a full-stack growth marketing studio. That means brand strategy and identity design, building your website or app, running paid and organic campaigns, setting up marketing automation, and tracking performance — all engineered around growing your business."
  },
  {
    question: "How long before I start seeing real results?",
    answer: "Depends on the channel. Paid campaigns can show traction within weeks. SEO and organic content typically need 3–6 months to compound. We set clear milestones at the start so you know what to expect and when."
  },
  {
    question: "Do you work with freelancers, startups, or larger teams?",
    answer: "All three. We've helped solo founders launch their first digital presence, scaled growth for funded startups, and added AI-powered marketing muscle for larger teams."
  },
  {
    question: "What does the onboarding process look like?",
    answer: "Starts with a growth audit — we review your current setup, channels, and numbers. Then we build a prioritised strategy, agree on deliverables and timelines, and get to work. Most clients are fully onboarded within 5–7 business days."
  },
  {
    question: "Do you lock clients into long-term contracts?",
    answer: "No. We work on flexible engagement models — project-based, monthly retainers, or growth sprints. Growth compounds over time, and most clients stay because the numbers speak for themselves."
  },
  {
    question: "Do you offer services outside Nigeria?",
    answer: "Yes — SMEStudio has run growth for brands across Africa and Europe. Pricing outside Nigeria is quoted separately; reach out and we'll scope it."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { ref: leftRef, isInView: leftInView } = useInView();
  const { ref: rightRef, isInView: rightInView } = useInView();

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const WA_CONFIG = {
    phoneNumber: '2347081108201',
    message: "Hi SMEStudio, I have a few questions before getting started."
  };
  const waUrl = `https://wa.me/${WA_CONFIG.phoneNumber}?text=${encodeURIComponent(WA_CONFIG.message)}`;

  return (
    <section id="faq" style={{ background: 'var(--paper-deep)' }}>
      <div className="wrap faq-grid">
        <div ref={leftRef} className={`faq-left reveal ${leftInView ? 'in' : ''}`}>
          <span className="eyebrow">Common Questions</span>
          <h2>Everything you need to know.</h2>
          <p>Here are the questions we get asked most often when speaking with founders and marketing teams.</p>
          <a href={waUrl} target="_blank" rel="noopener noreferrer" className="btn-outline-dark faq-cta">
            Still have questions? Chat on WhatsApp
          </a>
        </div>
        <div ref={rightRef} className={`faq-right reveal ${rightInView ? 'in' : ''}`}>
          {FAQS.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(i)} aria-expanded={openIndex === i}>
                <span>{faq.question}</span>
                <div className="faq-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="12" y1="5" x2="12" y2="19"></line>
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                  </svg>
                </div>
              </button>
              <div className="faq-answer-wrapper">
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
