import { useState, useEffect } from 'react';
import { useTheme } from '../context/ThemeContext';

export function Header() {
  const { theme, toggleTheme, openLeadModal } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header id="site-header" className={scrolled ? 'scrolled' : ''}>
      <nav className="wrap">
        <a href="#top" className="logo">
          <span className="logo-mark">
            <svg viewBox="0 0 24 24" fill="none"><path d="M4 16 L10 10 L14 14 L20 6" style={{stroke: "var(--gold)"}} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </span>
          SME<span className="thin">Studio</span>
        </a>
        <div className={`nav-links ${navOpen ? 'open' : ''}`} id="navLinks">
          <a href="#solutions" onClick={() => setNavOpen(false)}>Solutions</a>
          <a href="#pricing" onClick={() => setNavOpen(false)}>Pricing</a>
          <a href="#method" onClick={() => setNavOpen(false)}>Approach</a>
          <a href="#founder" onClick={() => setNavOpen(false)}>About</a>
          <a href="#" className="nav-cta" onClick={(e) => { e.preventDefault(); setNavOpen(false); openLeadModal(); }}>Get Free Proposal →</a>
        </div>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle dark mode">
          <svg className="icon-moon" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
          <svg className="icon-sun" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
        </button>
        <button className="nav-toggle" onClick={() => setNavOpen(!navOpen)} aria-label="Toggle menu">
          <span></span><span></span>
        </button>
      </nav>
    </header>
  );
}
