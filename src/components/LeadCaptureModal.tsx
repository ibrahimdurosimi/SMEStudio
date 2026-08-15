import React, { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export function LeadCaptureModal() {
  const { isLeadModalOpen, closeLeadModal } = useTheme();
  const [currentStep, setCurrentStep] = useState<number | 'success'>(1);
  const totalSteps = 6;

  useEffect(() => {
    if (isLeadModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setTimeout(() => {
        setCurrentStep(1);
      }, 400);
    }
  }, [isLeadModalOpen]);

  const handleNext = () => {
    if (typeof currentStep === 'number' && currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };
  const handlePrev = () => {
    if (typeof currentStep === 'number' && currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  const handleSubmit = () => {
    setCurrentStep('success');
  };

  const handleOptionToggle = (e: React.MouseEvent<HTMLDivElement>) => {
    e.currentTarget.classList.toggle('selected');
  };
  
  const handleOptionSelectSingle = (e: React.MouseEvent<HTMLDivElement>) => {
    const parent = e.currentTarget.closest('.q-options');
    if (parent) {
      parent.querySelectorAll('.q-option').forEach(el => el.classList.remove('selected'));
    }
    e.currentTarget.classList.add('selected');
  };

  return (
    <div className={`q-overlay ${isLeadModalOpen ? 'open' : ''}`} onClick={(e) => { if (e.target === e.currentTarget) closeLeadModal(); }}>
      <div className="q-modal">
        <button className="q-close" onClick={closeLeadModal} aria-label="Close">✕</button>
        <div className="q-header">
          <span className="eyebrow">Free Growth Proposal</span>
          <h3>Let's Build Your Growth Plan</h3>
          <p>Answer a few quick questions and we'll send a customised strategy within 48 hours.</p>
        </div>
        <div className="q-progress">
          {[1,2,3,4,5,6].map(step => (
            <div key={step} className={`bar ${currentStep === 'success' ? 'done' : step < currentStep ? 'done' : step === currentStep ? 'active' : ''}`}>
              <div className="fill"></div>
            </div>
          ))}
        </div>
        <div className="q-body">
          {/* STEP 1 */}
          <div className={`q-step ${currentStep === 1 ? 'active' : ''}`}>
            <h4>First, tell us about you</h4>
            <div className="q-input-group">
              <input type="text" className="q-input" placeholder="Your name" required />
              <input type="email" className="q-input" placeholder="Email address" required />
              <input type="text" className="q-input" placeholder="Company name (optional)" />
            </div>
            <div className="q-footer"><div></div><button className="btn-primary q-next" onClick={handleNext}>Next →</button></div>
          </div>
          {/* STEP 2 */}
          <div className={`q-step ${currentStep === 2 ? 'active' : ''}`}>
            <h4>What do you need help with?</h4>
            <div className="q-options">
              <div className="q-option" onClick={handleOptionToggle}>🎨 Branding & Identity</div>
              <div className="q-option" onClick={handleOptionToggle}>🖥️ Web Design & Dev</div>
              <div className="q-option" onClick={handleOptionToggle}>🛒 Ecommerce</div>
              <div className="q-option" onClick={handleOptionToggle}>🔎 SEO & Content</div>
              <div className="q-option" onClick={handleOptionToggle}>⚡ Performance Marketing</div>
              <div className="q-option" onClick={handleOptionToggle}>🤖 AI & Automation</div>
              <div className="q-option" onClick={handleOptionToggle}>📱 Social Media</div>
              <div className="q-option" onClick={handleOptionToggle}>📧 Email Marketing</div>
            </div>
            <div className="q-footer"><button className="q-back" onClick={handlePrev}>← Back</button><button className="btn-primary q-next" onClick={handleNext}>Next →</button></div>
          </div>
          {/* STEP 3 */}
          <div className={`q-step ${currentStep === 3 ? 'active' : ''}`}>
            <h4>What are your main goals? (pick up to 3)</h4>
            <div className="q-options">
              <div className="q-option" onClick={handleOptionToggle}>📈 Increase brand awareness</div>
              <div className="q-option" onClick={handleOptionToggle}>🧲 Generate more leads</div>
              <div className="q-option" onClick={handleOptionToggle}>💰 Boost sales / revenue</div>
              <div className="q-option" onClick={handleOptionToggle}>🔄 Improve conversion rates</div>
              <div className="q-option" onClick={handleOptionToggle}>🤖 Automate marketing</div>
              <div className="q-option" onClick={handleOptionToggle}>🌍 Expand to new markets</div>
            </div>
            <div className="q-footer"><button className="q-back" onClick={handlePrev}>← Back</button><button className="btn-primary q-next" onClick={handleNext}>Next →</button></div>
          </div>
          {/* STEP 4 */}
          <div className={`q-step ${currentStep === 4 ? 'active' : ''}`}>
            <h4>What's your biggest marketing challenge today?</h4>
            <div className="q-input-group"><textarea className="q-input" placeholder="Tell us what's holding your brand back..."></textarea></div>
            <div className="q-footer"><button className="q-back" onClick={handlePrev}>← Back</button><button className="btn-primary q-next" onClick={handleNext}>Next →</button></div>
          </div>
          {/* STEP 5 */}
          <div className={`q-step ${currentStep === 5 ? 'active' : ''}`}>
            <h4>What's your ideal timeline?</h4>
            <div className="q-options">
              <div className="q-option" onClick={handleOptionSelectSingle}>🚀 1–3 months</div>
              <div className="q-option" onClick={handleOptionSelectSingle}>📅 3–6 months</div>
              <div className="q-option" onClick={handleOptionSelectSingle}>🗓️ 6–12 months</div>
              <div className="q-option" onClick={handleOptionSelectSingle}>🔍 Just exploring</div>
            </div>
            <div className="q-footer"><button className="q-back" onClick={handlePrev}>← Back</button><button className="btn-primary q-next" onClick={handleNext}>Next →</button></div>
          </div>
          {/* STEP 6 */}
          <div className={`q-step ${currentStep === 6 ? 'active' : ''}`}>
            <h4>What's your approximate monthly budget?</h4>
            <div className="q-options">
              <div className="q-option" onClick={handleOptionSelectSingle}>Under ₦350K</div>
              <div className="q-option" onClick={handleOptionSelectSingle}>₦350K – ₦850K</div>
              <div className="q-option" onClick={handleOptionSelectSingle}>₦850K – ₦1.8M</div>
              <div className="q-option" onClick={handleOptionSelectSingle}>₦1.8M+</div>
            </div>
            <div className="q-footer"><button className="q-back" onClick={handlePrev}>← Back</button><button className="btn-primary q-next" onClick={handleSubmit}>Submit Proposal Request →</button></div>
          </div>
          {/* SUCCESS */}
          <div className={`q-step ${currentStep === 'success' ? 'active' : ''}`}>
            <div className="q-success">
              <div className="check-circle">✓</div>
              <h3>You're all set!</h3>
              <p>Your growth proposal is on the way. We'll review your brief and get back to you within 48 hours with a plan tailored to your goals.</p>
              <br/>
              <button className="btn-outline-dark" onClick={closeLeadModal}>Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
