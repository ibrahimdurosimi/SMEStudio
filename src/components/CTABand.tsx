import { useInView } from '../hooks/useInView';
import { useTheme } from '../context/ThemeContext';

export function CTABand() {
  const { ref, isInView } = useInView();
  const { openLeadModal } = useTheme();

  return (
    <section id="contact">
      <div ref={ref} className={`cta-section reveal ${isInView ? 'in' : ''}`}>
        <div className="cta-inner">
          <div className="cta-note-block">
            <span className="eyebrow" style={{ color: 'var(--on-gold)' }}><span></span>Let's Talk</span>
            <h2 style={{ marginTop: '14px' }}>Ready to go from zero to hero?</h2>
            <p>Tell us where the brand is today and where it needs to be. We'll reply with next steps, not a sales pitch.</p>
            <div className="cta-direct">
              <a href="mailto:hello@smestudio.com">hello@smestudio.com</a><br/><br/>
              <span style={{ opacity: 0.7 }}>↳ update with your live email & socials</span>
            </div>
          </div>
          <div>
            <button className="btn-on-panel" style={{ background: 'var(--on-gold)', color: 'var(--gold-light)', width: '100%', justifyContent: 'center', padding: '20px' }} onClick={openLeadModal}>Get Your Free Proposal →</button>
          </div>
        </div>
      </div>
    </section>
  );
}
