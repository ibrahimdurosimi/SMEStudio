import whyAiImage from "../assets/images/regenerated_image_1786829531177.png";
import solImage from "../assets/images/regenerated_image_1786829542818.png";
import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { Helmet } from 'react-helmet-async';
import { Founder } from '../components/Founder';

const NODE_DATA = [
  {
    id: 1,
    year: "2013",
    title: "The Spark",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
      </svg>
    )
  },
  {
    id: 2,
    year: "The Founder",
    title: "Built By Someone Who's Sat In the Room",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
      </svg>
    )
  },
  {
    id: 3,
    year: "2013–2023",
    title: "From ICT Lifeline to Growth Partner",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
      </svg>
    )
  },
  {
    id: 4,
    year: "Today",
    title: "AI-Powered, Growth-Obsessed",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    )
  },
  {
    id: 5,
    year: "What's Next",
    title: "The Vision",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/>
      </svg>
    )
  }
];

export function AboutUs() {
  const { openLeadModal } = useTheme();
  const [activeNode, setActiveNode] = useState<number | null>(1);
  const [exploredNodes, setExploredNodes] = useState<Set<number>>(new Set([1]));

  const handleNodeClick = (id: number) => {
    setActiveNode(activeNode === id ? null : id);
    setExploredNodes(prev => new Set(prev).add(id));
  };

  const WA_CONFIG = {
    phoneNumber: '2347081108201',
    message: "Hi SMEStudio, I'm ready to be part of the next chapter."
  };
  const waUrl = `https://wa.me/${WA_CONFIG.phoneNumber}?text=${encodeURIComponent(WA_CONFIG.message)}`;

  return (
    <main id="top" className="about-page">
      <Helmet>
        <title>About Us | SMEStudio</title>
        <meta name="description" content="The Zero to Hero Timeline: How SMEStudio evolved from an ICT lifeline to an AI-powered growth partner for digital brands." />
      </Helmet>

      <div className="wrap">
        <div className="about-header">
          <span className="eyebrow" style={{ display: 'inline-flex', justifyContent: 'center' }}>Zero to Hero</span>
          <h1>Our Timeline</h1>
          <div className="progress-indicator">
            {exploredNodes.size} of {NODE_DATA.length} chapters explored
          </div>
        </div>

        <div className="timeline-container">
          <div className="timeline-track"></div>
          {NODE_DATA.map((node) => {
            const isActive = activeNode === node.id;
            const isExplored = exploredNodes.has(node.id);
            return (
              <React.Fragment key={node.id}>
                <button 
                  className={`timeline-node ${isActive ? 'active' : ''} ${isExplored ? 'explored' : ''}`}
                  onClick={() => handleNodeClick(node.id)}
                  aria-expanded={isActive}
                >
                  <div className="node-icon">{node.icon}</div>
                  <div className="node-label">
                    <span className="node-year">{node.year}</span>
                    <span className="node-title">{node.title}</span>
                  </div>
                </button>
                <div className={`timeline-content ${isActive ? 'active' : ''}`}>
                  <div className="timeline-content-inner">
                    {node.id === 1 && <Node1 />}
                    {node.id === 2 && <Node2 />}
                    {node.id === 3 && <Node3 />}
                    {node.id === 4 && <Node4 />}
                    {node.id === 5 && <Node5 />}
                  </div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>

      <Founder />

      <section className="about-cta-block">
        <div className="wrap">
          <h2>Ready to be part of the next chapter?</h2>
          <div className="about-cta-actions">
            <button 
              className="btn-on-panel" 
              style={{ background: 'var(--on-gold)', color: 'var(--gold-light)' }} 
              onClick={openLeadModal}
            >
              Get your free growth proposal &rarr;
            </button>
            <a 
              href={waUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-outline-on-gold" 
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

// --- NODE CONTENTS ---

function Node1() {
  const reasons = ['Marketing', 'Finance', 'Funding', 'Product', 'Staff', 'Competence', 'Technology', 'Distribution'];
  
  return (
    <div className="node-grid">
      <div className="node-text">
        <p style={{marginBottom: '1rem'}}>
          Every great journey begins with a problem that refuses to be ignored. For us, it was watching brilliant ideas fade away simply because the barrier to entry was too high.
        </p>
        <p style={{marginBottom: '1rem'}}>
          Eight out of ten entrepreneurs who start a business don't make it past 18 months. Not because the idea was bad — because of everything around the idea: marketing they couldn't afford, technology they didn't understand, support priced for someone else's budget. That statistic isn't a headline to us. It's personal.
        </p>
        <p style={{marginBottom: '1rem'}}>
          In 2013, our founder Eb'Rahim Durosimi lived it — launching an early venture called Aspire and hitting every wall a small business hits: agencies too expensive to retain, tech too confusing to self-serve, advice that assumed you already had a team, a budget, a plan. He got through it. Most founders don't. That gap is the reason SMEStudio exists.
        </p>
        <p>
          We realized that survival shouldn't be reserved only for those with massive seed capital. It should belong to those with the best ideas and the grit to see them through.
        </p>
      </div>
      <div className="node-visual">
        <div style={{ marginBottom: '24px', borderRadius: '12px', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1531123414780-f74242c2b052?auto=format&fit=crop&q=80&w=800" alt="Entrepreneur working hard" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div className="fallen-figures">
          {Array.from({ length: 10 }).map((_, i) => {
            const isFallen = i < 8;
            return (
              <div key={i} className={`human-figure ${isFallen ? 'fallen' : 'standing'}`} tabIndex={isFallen ? 0 : -1}>
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <circle cx="12" cy="5" r="3" />
                  <path d="M12 9c-3.3 0-6 2.7-6 6v3h3v5h6v-5h3v-3c0-3.3-2.7-6-6-6z" />
                </svg>
                {isFallen && <div className="figure-tooltip">{reasons[i]}</div>}
              </div>
            );
          })}
        </div>
        <p className="viz-caption">8 out of 10 businesses fail. Hover to see why.</p>
      </div>
    </div>
  );
}

function Node2() {
  const [activeTab, setActiveTab] = useState('edu');
  
  const TABS = [
    { id: 'edu', label: 'Education', content: "BSc Mathematics & Statistics — University of Lagos · Strategy Formulation — Copenhagen Business School · Design Thinking & Innovation — University of Virginia · Business Innovation — African University of Science & Technology, Abuja · Background across Banking, Advertising, HR Consulting, and IT Support · FATE Foundation Alumnus, Enterprise Education Programme (EEP) Graduate" },
    { id: 'pers', label: 'Personality', content: "Cerebral · Passionate about human-centred problems · Creative, clear thinker · Excellent problem solver · Can juggle several things at once without dropping them" },
    { id: 'str', label: 'Strengths', content: "Sharp analytical instincts · Strong at spotting business opportunities · Comfortable taking risks on new ventures · Great at identifying talent · Understands technology and where it's heading · Trusts his intuition" },
    { id: 'real', label: 'Keeping It Real', content: "Can overthink a decision into the ground · Likes playing in too many spaces at once · Marketing decisions aren't always his strongest instinct · Would rather build the thing than do the accounting · Wants to fix everything, everywhere, all at once" },
  ];

  return (
    <div className="node-grid">
      <div className="node-text">
        <p style={{marginBottom: '1rem'}}>
          We believe the best solutions come from people who have actually experienced the problem. We didn't learn about the struggles of African founders from a textbook; we lived them on the frontlines.
        </p>
        <p style={{marginBottom: '1rem'}}>
          Eb'Rahim isn't a marketer who read about small-business problems from the outside. Before SMEStudio, he worked across banking, advertising, HR consulting, and IT support — four different vantage points on the same problem: good businesses failing because the systems around them were never built with them in mind.
        </p>
        <p>
          This multifaceted background forms the DNA of SMEStudio. It's an approach that combines analytical rigor with creative problem-solving, always keeping the human element at the center of every growth strategy we deploy.
        </p>
      </div>
      <div className="node-visual">
        <div style={{ marginBottom: '24px', borderRadius: '12px', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&q=80&w=800" alt="Eb'Rahim Durosimi - Founder" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div className="node-tabs">
          <div className="tab-pills">
            {TABS.map(t => (
              <button 
                key={t.id} 
                className={`pill ${activeTab === t.id ? 'active' : ''}`}
                onClick={() => setActiveTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>
          <div className="tab-content">
            {TABS.map(t => (
              <div key={t.id} className={`tab-pane ${activeTab === t.id ? 'active' : ''}`}>
                <p>{t.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function Node3() {
  const [isNow, setIsNow] = useState(false);

  return (
    <div className="node-grid">
      <div className="node-text">
        <p style={{marginBottom: '1rem'}}>
          Evolution is mandatory. The landscape of digital business shifts constantly, and adapting means staying relentlessly focused on what actually drives value for the client.
        </p>
        <p style={{marginBottom: '1rem'}}>
          SMEStudio started as something simpler: a one-stop shop offering Nigerian SMEs the ICT and digital support they couldn't otherwise afford — "world-class support, at the lowest rate, the fastest time, stress-free," as the original mission put it. 
        </p>
        <p style={{marginBottom: '1rem'}}>
          Over a decade and 100+ businesses later — across fintech, IT, education, energy, construction, security, healthcare, and ecommerce, in Nigeria and beyond — that mission sharpened into something more specific: not just support, but growth.
        </p>
        <p>
          We moved from fixing immediate technical problems to architecting long-term digital expansion. We realized that setting up a website is just the starting line; turning that digital presence into a revenue-generating asset is the actual race.
        </p>
      </div>
      <div className="node-visual">
        <div style={{ marginBottom: '24px', borderRadius: '12px', overflow: 'hidden' }}>
          <img src={solImage} alt="Team collaborating" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
        <div className="node-toggle-viz">
          <div className="billing-toggle">
            <span className={!isNow ? 'active' : ''}>Then (2013)</span>
            <button 
              className={`toggle-switch ${isNow ? 'on' : 'off'}`}
              onClick={() => setIsNow(!isNow)}
              aria-label="Toggle Then vs Now"
            >
              <div className="toggle-knob" />
            </button>
            <span className={isNow ? 'active' : ''}>Now</span>
          </div>
          
          <div className="mission-cards">
            <div className={`mission-card ${!isNow ? 'active' : ''}`}>
              <h5>Mission</h5>
              <p>"To provide world-class ICT & digital media support services, at the lowest rate, fastest time, and stress-free."</p>
              <h5>Vision</h5>
              <p>"To be the powerhouse of ICT support services for small businesses."</p>
            </div>
            <div className={`mission-card ${isNow ? 'active' : ''}`}>
              <h5>Mission</h5>
              <p>"To help ambitious digital brands go from zero to hero with AI-powered growth strategy and execution."</p>
              <h5>Vision</h5>
              <p>"To make world-class growth marketing accessible to businesses that don't have world-class budgets."</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Node4() {
  return (
    <div className="node-grid">
      <div className="node-text">
        <p style={{marginBottom: '1rem'}}>
          The introduction of artificial intelligence didn't just change the tools we use; it fundamentally altered the speed and scale at which we can operate. What used to take massive teams and weeks of research can now be executed with precision in days.
        </p>
        <p style={{marginBottom: '1rem'}}>
          SMEStudio now blends that decade of in-the-trenches experience with AI-powered strategy — the same instinct for a struggling founder's real problem, running at machine speed. 
        </p>
        <p style={{marginBottom: '1rem'}}>
          We call it Zero to Hero, because that's the actual distance most of our clients are trying to cross, and pretending otherwise never helped anyone. We don't deal in vanity metrics or superficial engagement; we deploy hyper-targeted, data-driven systems that generate real, measurable business outcomes.
        </p>
        <p>
          By leveraging modern technology, we bring enterprise-level insights and capabilities directly to the digital brands that need them most, leveling the playing field permanently.
        </p>
      </div>
      <div className="node-visual">
        <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <img src={whyAiImage} alt="AI powered strategy" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </div>
  );
}

function Node5() {
  return (
    <div className="node-grid">
      <div className="node-text">
        <p style={{marginBottom: '1rem'}}>
          Looking forward, our focus remains fiercely locked on empowering the next generation of digital giants. The tools evolve, but the core ethos remains the same.
        </p>
        <p style={{marginBottom: '1rem'}}>
          The long game hasn't changed since 2013: make world-class support accessible to businesses that don't have world-class budgets. We're just doing it now with AI as the equalizer, instead of just hustle.
        </p>
        <p>
          As we expand our reach across Africa and the globe, we are continuously refining our frameworks. The ultimate goal is a world where a brilliant product, backed by our growth engine, becomes an undeniable market leader — every single time.
        </p>
      </div>
      <div className="node-visual">
        <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1573164574572-cb89e39749b4?auto=format&fit=crop&q=80&w=800" alt="The Vision" style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>
      </div>
    </div>
  );
}
