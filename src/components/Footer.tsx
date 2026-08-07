export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-top">
          <div>
            <a href="#top" className="logo">
              <span className="logo-mark">
                <svg viewBox="0 0 24 24" fill="none"><path d="M4 16 L10 10 L14 14 L20 6" style={{stroke: "var(--gold)"}} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </span>
              SME<span className="thin">Studio</span>
            </a>
            <p className="footer-tag">AI-powered growth marketing for digital brands going from zero to hero.</p>
          </div>
          <div className="footer-links">
            <div className="footer-col">
              <h5>Studio</h5>
              <a href="#solutions">Solutions</a>
              <a href="#pricing">Pricing</a>
              <a href="#method">Approach</a>
              <a href="#founder">About</a>
            </div>
            <div className="footer-col">
              <h5>Connect</h5>
              <a href="mailto:hello@smestudio.com">Email</a>
              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} SMEStudio. All rights reserved.</p>
          <div className="social-row">
            <a href="#">LinkedIn</a><a href="#">Instagram</a><a href="#">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
