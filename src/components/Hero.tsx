import { useTheme } from '../context/ThemeContext';

export function Hero() {
  const { openLeadModal } = useTheme();

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">AI-Powered Growth Marketing Agency</span>
          <h1>We take digital brands from <em>zero</em> to hero.</h1>
          <p className="lead">SMEStudio blends a decade of hands-on growth marketing with AI-driven strategy, design, and build — so ambitious Nigerian and global brands stop guessing and start compounding.</p>
          <div className="btn-row">
            <a href="#" className="btn-primary" onClick={(e) => { e.preventDefault(); openLeadModal(); }}>Get your free proposal →</a>
            <a href="#solutions" className="btn-ghost">See solutions ↓</a>
          </div>
        </div>
        <div className="hero-visual" aria-hidden="true">
          <svg viewBox="0 0 480 420">
            <path className="growth-path" d="M10 340 C 45 348, 80 332, 110 338 C 150 344, 165 320, 190 310 C 225 296, 245 250, 270 215 C 300 175, 325 130, 365 95 C 395 70, 420 48, 460 28" />
            <circle cx="10" cy="340" r="5" style={{fill: "var(--ink)"}}/>
            <text x="0" y="366" className="zero-label">ZERO</text>
            <circle cx="460" cy="28" r="7" style={{fill: "var(--gold)"}}/>
            <text x="392" y="16" className="hero-label" fontWeight="600" style={{fill: "var(--gold-deep)"}}>HERO</text>
          </svg>
          <span className="hero-tag t1">10+ yrs in the trenches</span>
          <span className="hero-tag t2">100+ brands guided</span>
          <span className="hero-tag t3">● AI-augmented, always-on</span>
        </div>
      </div>
    </section>
  );
}
