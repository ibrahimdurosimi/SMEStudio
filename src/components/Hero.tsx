import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

const phrases = [
  { start: "zero", end: "hero." },
  { start: "ideas", end: "product launch." },
  { start: "low sales", end: "10x sales." },
  { start: "concept", end: "market leader." },
  { start: "stagnant", end: "scaling." }
];

export function Hero() {
  const { openLeadModal } = useTheme();
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % phrases.length);
        setIsAnimating(false);
      }, 400); // half of transition
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <span className="eyebrow">AI-Powered Growth Marketing Agency</span>
          <h1 style={{ minHeight: '3.15em', fontFamily: 'monospace', fontSize: '70px' }}>
            We take digital brands from{' '}
            <span 
              style={{ 
                opacity: isAnimating ? 0 : 1, 
                transform: isAnimating ? 'translateY(10px)' : 'translateY(0)',
                transition: 'all 0.4s ease',
                display: 'inline-block'
              }}
            >
              <em>{phrases[index].start}</em> to {phrases[index].end}
            </span>
          </h1>
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
