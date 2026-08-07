import { useInView } from '../hooks/useInView';

export function WhyAI() {
  const { ref: textRef, isInView: textInView } = useInView();
  const { ref: listRef, isInView: listInView } = useInView();

  return (
    <section id="why-ai">
      <div className="wrap why-grid">
        <div ref={textRef} className={`reveal ${textInView ? 'in' : ''}`}>
          <span className="eyebrow">Why AI-Powered</span>
          <h2 style={{ fontSize: 'clamp(28px,3.6vw,38px)', margin: '16px 0 22px' }}>Growth marketing, run at machine speed.</h2>
          <p>Most SMEs can't afford a ten-person growth team. AI closes that gap — it's how a small studio delivers the output of a much larger one, without losing the judgment a real growth operator brings.</p>
          <p>SMEStudio folds AI into the parts of the funnel that used to eat the most hours: research, targeting, content variants, and reporting — freeing the strategy time for the decisions that actually need a human.</p>
        </div>
        <div ref={listRef} className={`cap-list reveal ${listInView ? 'in' : ''}`}>
          <div className="cap-item"><span>Analytics & Attribution</span><span>Always-on</span></div>
          <div className="cap-item"><span>Automated Campaign Optimisation</span><span>Real-time</span></div>
          <div className="cap-item"><span>AI Content & Creative Ops</span><span>At scale</span></div>
          <div className="cap-item"><span>Predictive Retention Modelling</span><span>Data-driven</span></div>
          <div className="cap-item"><span>Funnel & Activation Testing</span><span>Continuous</span></div>
        </div>
      </div>
    </section>
  );
}
