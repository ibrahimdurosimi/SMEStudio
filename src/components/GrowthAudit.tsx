import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export function GrowthAudit() {
  const { openLeadModal } = useTheme();
  const [url, setUrl] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'results'>('idle');
  const [scores, setScores] = useState({ seo: 0, speed: 0, mobile: 0, conversion: 0 });

  const handleAudit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!url) return;
    setStatus('loading');
    
    // TODO: This scoring is currently randomized/simulated. 
    // Replace with a real backend API call (e.g., PageSpeed Insights API or a custom audit script) before launch.
    setTimeout(() => {
      setScores({
        seo: Math.floor(Math.random() * (90 - 50) + 50),
        speed: Math.floor(Math.random() * (95 - 40) + 40),
        mobile: Math.floor(Math.random() * (98 - 70) + 70),
        conversion: Math.floor(Math.random() * (70 - 30) + 30),
      });
      setStatus('results');
    }, 2500);
  };

  return (
    <section id="audit" className="audit-section">
      <div className="wrap">
        <div className="audit-card">
          <div className="audit-header">
            <h3>Free Website Growth Audit</h3>
            <p>Enter your URL to get an instant automated analysis of your site's growth potential.</p>
          </div>
          
          {status === 'idle' && (
            <form onSubmit={handleAudit} className="audit-form">
              <input 
                type="url" 
                placeholder="https://yourwebsite.com" 
                required 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="audit-input"
              />
              <button type="submit" className="btn-primary">Get My Free Audit &rarr;</button>
            </form>
          )}

          {status === 'loading' && (
            <div className="audit-loading">
              <div className="audit-spinner"></div>
              <p>Analyzing {url}...</p>
            </div>
          )}

          {status === 'results' && (
            <div className="audit-results">
              <div className="audit-scores">
                <ScoreBar label="SEO Health" score={scores.seo} />
                <ScoreBar label="Page Speed" score={scores.speed} />
                <ScoreBar label="Mobile Experience" score={scores.mobile} />
                <ScoreBar label="Conversion Readiness" score={scores.conversion} />
              </div>
              <div className="audit-action">
                <p>Want the full breakdown and a plan to fix it?</p>
                <button onClick={openLeadModal} className="btn-outline-dark">Get your free growth proposal &rarr;</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function ScoreBar({ label, score }: { label: string, score: number }) {
  const getColor = (val: number) => {
    if (val >= 80) return 'var(--gold)';
    if (val >= 60) return '#f59e0b'; // amber
    return 'var(--red)';
  };
  
  return (
    <div className="score-row">
      <div className="score-labels">
        <span>{label}</span>
        <span>{score}/100</span>
      </div>
      <div className="score-track">
        <div 
          className="score-fill" 
          style={{ 
            width: `${score}%`, 
            backgroundColor: getColor(score) 
          }} 
        />
      </div>
    </div>
  );
}
