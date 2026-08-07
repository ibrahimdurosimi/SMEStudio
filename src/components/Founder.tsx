import { useInView } from '../hooks/useInView';

export function Founder() {
  const { ref: imgRef, isInView: imgInView } = useInView();
  const { ref: textRef, isInView: textInView } = useInView();

  return (
    <section id="founder" className="founder">
      <div className="wrap founder-grid">
        <div ref={imgRef} className={`reveal ${imgInView ? 'in' : ''}`}>
          <div className="founder-avatar">ED</div>
          <div className="founder-name">Eb'Rahim Durosimi</div>
          <div className="founder-role">Founder, SMEStudio</div>
        </div>
        <div ref={textRef} className={`reveal ${textInView ? 'in' : ''}`}>
          <span className="eyebrow">About the Studio</span>
          <h3>Built by an operator who has owned the numbers, not just advised on them.</h3>
          <p className="founder-bio">17+ years driving user acquisition, activation, retention and growth strategy across fintech, IT, and financial services — in Lagos and London. SMEStudio started as a one-stop digital shop for SMEs a decade ago; today it's the AI-powered growth partner that same experience was always building toward.</p>
          <div className="career-line">
            <span className="k">Career snapshot</span>
            <div className="career-ticker">
              <span className="step">Retail Banking</span><span className="sep">/</span>
              <span className="step">Social Media Strategy</span><span className="sep">/</span>
              <span className="step">Co-Founded SMEStudio</span><span className="sep">/</span>
              <span className="step">Digital Management</span><span className="sep">/</span>
              <span className="step">Growth, Zazuu (London)</span><span className="sep">/</span>
              <span className="step">E-Business, Lotus Capital</span><span className="sep">/</span>
              <span className="step">Head of Growth, Mabilla Group</span>
            </div>
            <div className="edu-line">
              BSc Mathematics & Statistics — University of Lagos · PG Diploma, Finance — Nungu Business School<br/>
              Design Thinking & Innovation — University of Virginia · Business Innovation — AUST Abuja
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
