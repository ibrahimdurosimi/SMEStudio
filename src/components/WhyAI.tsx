import whyAiImage from "../assets/images/regenerated_image_1786829531177.png";
import { useInView } from '../hooks/useInView';

export function WhyAI() {
  const { ref: textRef, isInView: textInView } = useInView();
  const { ref: listRef, isInView: listInView } = useInView();
  
  return (
    <section id="why-ai" style={{ padding: '120px 0', background: 'var(--bg)', color: 'var(--ink)' }}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }} id="why-ai-grid">
        
        <div ref={textRef} className={`reveal ${textInView ? 'in' : ''}`}>
          <span className="eyebrow">Why AI-Powered</span>
          <h2 style={{ fontSize: 'clamp(32px,4vw,48px)', margin: '16px 0 24px', lineHeight: 1.1 }}>
            Growth marketing, run at machine speed.
          </h2>
          <p style={{ marginBottom: '16px', fontSize: '17px', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
            Most ambitious SMEs simply can't afford to hire a ten-person growth marketing team. Artificial Intelligence closes that execution gap. It is how SMEStudio delivers the massive creative and analytical output of a much larger agency, without losing the strategic judgment that only a real human growth operator can bring.
          </p>
          <p style={{ marginBottom: '32px', fontSize: '17px', lineHeight: 1.6, color: 'var(--ink-soft)' }}>
            We fold AI directly into the parts of the marketing funnel that used to eat the most billable hours: market research, audience targeting, endless ad copy variations, and real-time reporting. By automating the heavy lifting, we free up our strategy time for the critical business decisions that actually move the needle for your bottom line.
          </p>
          
          <div ref={listRef} className={`cap-list reveal ${listInView ? 'in' : ''}`} style={{ marginTop: '0' }}>
            <div className="cap-item"><span>Predictive Analytics & Attribution</span><span>Always-on</span></div>
            <div className="cap-item"><span>Automated Campaign Optimisation</span><span>Real-time</span></div>
            <div className="cap-item"><span>AI Content & Creative Ops</span><span>At scale</span></div>
            <div className="cap-item"><span>Funnel & Activation Testing</span><span>Continuous</span></div>
          </div>
        </div>

        <div className={`reveal ${textInView ? 'in' : ''}`} style={{ transitionDelay: '0.2s', position: 'relative' }}>
          <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.08)' }}>
            <img 
              src={whyAiImage} 
              alt="AI Analytics Dashboard" 
              style={{ width: '100%', height: 'auto', display: 'block' }} 
            />
          </div>
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: 'var(--gold)', color: 'var(--on-gold)', padding: '24px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', maxWidth: '240px' }}>
            <h4 style={{ margin: '0 0 8px', fontSize: '18px', fontWeight: '700' }}>10x Faster Execution</h4>
            <p style={{ margin: 0, fontSize: '14px', opacity: 0.9 }}>Launch campaigns in days, not weeks, with AI-assisted creative ops.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
