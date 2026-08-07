import { useState } from 'react';
import { useInView } from '../hooks/useInView';

const CATEGORIES = ["All", "Web & App", "Branding", "Ecommerce", "Performance Marketing", "EdTech", "Social & Content"];

const PROJECTS = [
  {
    name: "FinTech Portal",
    description: "Custom payment flow and portal for local businesses.",
    category: "Web & App",
    metric: "+40% Checkout rate",
    initials: "FP"
  },
  {
    name: "Zazuu Rebrand",
    description: "Visual identity and digital guidelines for a fintech.",
    category: "Branding",
    metric: "Brand consistency",
    initials: "ZR"
  },
  {
    name: "Shopper Hub",
    description: "Optimized Shopify storefront and ad scaling.",
    category: "Ecommerce",
    metric: "2.5x ROAS",
    initials: "SH"
  },
  {
    name: "Kobo360 Growth",
    description: "Scaled B2B lead gen for logistics network.",
    category: "Performance Marketing",
    metric: "3x ROI",
    initials: "K3"
  },
  {
    name: "AltSchool Promo",
    description: "Conversion-focused landing page and ad funnel.",
    category: "EdTech",
    metric: "10k+ Signups",
    initials: "AS"
  },
  {
    name: "Lagos Foodie",
    description: "Community engagement and viral content calendar.",
    category: "Social & Content",
    metric: "50k Followers",
    initials: "LF"
  },
  {
    name: "HealthTech App",
    description: "Mobile app design and patient onboarding flow.",
    category: "Web & App",
    metric: "4.8 App Rating",
    initials: "HA"
  },
  {
    name: "Boutique Fashion",
    description: "Full brand identity and e-commerce build out.",
    category: "Branding",
    metric: "300% Engagement",
    initials: "BF"
  },
  {
    name: "SaaS Dashboard",
    description: "User dashboard UX refresh and feature adoption campaigns.",
    category: "Web & App",
    metric: "-20% Churn",
    initials: "SD"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Web & App': return 'linear-gradient(135deg, var(--gold), var(--gold-deep))';
    case 'Branding': return 'linear-gradient(135deg, var(--red), var(--red-deep))';
    case 'Ecommerce': return 'linear-gradient(135deg, var(--panel-soft), var(--panel))';
    case 'Performance Marketing': return 'linear-gradient(135deg, var(--ink-soft), var(--ink))';
    case 'EdTech': return 'linear-gradient(135deg, var(--gold-light), var(--gold))';
    case 'Social & Content': return 'linear-gradient(135deg, var(--red-light), var(--red))';
    default: return 'var(--panel)';
  }
};

const getInitialsColor = (category: string) => {
  switch (category) {
    case 'Web & App': return 'var(--on-gold)';
    case 'Branding': return 'var(--paper)';
    case 'Ecommerce': return 'var(--panel-text)';
    case 'Performance Marketing': return 'var(--paper)';
    case 'EdTech': return 'var(--ink)';
    case 'Social & Content': return 'var(--ink)';
    default: return 'var(--panel-text)';
  }
};

export function Work() {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref: headRef, isInView: headInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();

  const filteredProjects = activeFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="work" style={{ background: 'var(--paper)' }}>
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headInView ? 'in' : ''}`}>
          <span className="eyebrow">Selected Work</span>
          <h2>Some of what we've shipped.</h2>
        </div>

        <div className="work-filters">
          {CATEGORIES.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`work-filter-pill ${activeFilter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div ref={gridRef} className={`work-grid reveal ${gridInView ? 'in' : ''}`}>
          {filteredProjects.map((p, i) => (
            <div key={i} className="work-card">
              {/* TODO: replace with real project screenshot */}
              <div 
                className="work-card-img" 
                style={{ background: getCategoryColor(p.category), color: getInitialsColor(p.category) }}
              >
                {p.initials}
              </div>
              <div className="work-card-content">
                <div className="work-card-header">
                  <h3>{p.name}</h3>
                  <span className="work-card-tag">{p.category}</span>
                </div>
                <p>{p.description}</p>
                <div className="work-card-metric">{p.metric}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
