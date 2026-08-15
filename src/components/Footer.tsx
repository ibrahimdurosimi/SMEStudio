import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer style={{ padding: '60px 5%', background: 'var(--panel)', borderTop: '1px solid var(--line)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
        <div>
          <Link to="/#top" className="logo" style={{ marginBottom: '16px', display: 'inline-flex', color: 'var(--panel-text)', textDecoration: 'none' }}>
            <span className="logo-mark" style={{ marginRight: '10px' }}>
              <svg viewBox="0 0 24 24" fill="none" width="24" height="24">
                <path d="M4 16 L10 10 L14 14 L20 6" style={{stroke: "var(--gold)"}} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            SME<span style={{ fontWeight: 400 }}>Studio</span>
          </Link>
          <p style={{ color: 'var(--panel-text-soft)', fontSize: '14px', lineHeight: 1.6 }}>
            A growth technology partner connecting world-class marketing capabilities with ambitious digital brands across Africa.
          </p>
        </div>
        
        <div>
          <h4 style={{ color: 'var(--panel-text)', fontSize: '16px', marginBottom: '16px' }}>Company</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/about" style={{ color: 'var(--panel-text-soft)', textDecoration: 'none', fontSize: '14px' }}>About us</Link>
            <Link to="/#method" style={{ color: 'var(--panel-text-soft)', textDecoration: 'none', fontSize: '14px' }}>Approach</Link>
            <Link to="/work" style={{ color: 'var(--panel-text-soft)', textDecoration: 'none', fontSize: '14px' }}>Selected Work</Link>
          </div>
        </div>

        <div>
          <h4 style={{ color: 'var(--panel-text)', fontSize: '16px', marginBottom: '16px' }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="mailto:hello@smestudio.com" style={{ color: 'var(--panel-text-soft)', textDecoration: 'none', fontSize: '14px' }}>hello@smestudio.com</a>
            <a href="tel:+2347081108201" style={{ color: 'var(--panel-text-soft)', textDecoration: 'none', fontSize: '14px' }}>+234 708 110 8201</a>
          </div>
        </div>

        <div>
          <h4 style={{ color: 'var(--panel-text)', fontSize: '16px', marginBottom: '16px' }}>Legal</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <Link to="/privacy-policy" style={{ color: 'var(--panel-text-soft)', textDecoration: 'none', fontSize: '14px' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: 'var(--panel-text-soft)', textDecoration: 'none', fontSize: '14px' }}>Terms of Use</Link>
          </div>
        </div>
      </div>
      
      <div style={{ maxWidth: '1200px', margin: '40px auto 0', paddingTop: '24px', borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'var(--panel-text-faint)', fontSize: '14px' }}>
        <p>© {new Date().getFullYear()} SMEStudio Ltd. All rights reserved.</p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Twitter</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
