import re

with open('src/components/Testimonials.tsx', 'r') as f:
    content = f.read()

testimonials_new = '''  const testimonials = [
    {
      quote: "SMEStudio completely overhauled our acquisition funnel. We went from guessing where our leads came from to having a predictable engine.",
      role: "CEO",
      industry: "FinTech",
      location: "Lagos",
      metric: "-40% CPA",
      image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "The team understood our market better than we did. Their AI-driven approach helped us scale across three new cities without bloating our ad spend.",
      role: "Founder",
      industry: "Logistics",
      location: "Abuja",
      metric: "3x ROI",
      image: "https://images.unsplash.com/photo-1506803682981-6e718a9dd3ee?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "We were struggling with organic visibility. SMEStudio's programmatic SEO approach dominated our niche within months.",
      role: "Marketing Dir",
      industry: "EdTech",
      location: "London",
      metric: "+210% Traffic",
      image: "https://images.unsplash.com/photo-1589156191108-c762ff4b96ab?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "Not just another agency. They act like true partners and operators. The results on our e-commerce store were immediate.",
      role: "Owner",
      industry: "Retail",
      location: "Accra",
      metric: "+180% Sales",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "Their automated sequences transformed our inactive mailing list into our highest converting channel.",
      role: "Head of Growth",
      industry: "SaaS",
      location: "Lagos",
      metric: "45% Open Rate",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
    },
    {
      quote: "Precise, data-driven, and relentlessly focused on revenue. We dropped our previous agency within two weeks of working with SMEStudio.",
      role: "CMO",
      industry: "Real Estate",
      location: "Abuja",
      metric: "+300% Leads",
      image: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?auto=format&fit=crop&q=80&w=150"
    }
  ];'''

content = re.sub(r'const testimonials = \[[^;]+\];', testimonials_new, content)

card_old = '''              <div key={i} className="test-card">
                <div className="test-quote-mark">“</div>
                <p className="test-quote">{t.quote}</p>
                <div className="test-meta">
                  <span className="test-role">{t.role}</span>
                  <span className="test-sep">/</span>
                  <span className="test-industry">{t.industry}</span>
                  <span className="test-sep">/</span>
                  <span className="test-location">{t.location}</span>
                </div>
                <div className="test-metric">{t.metric}</div>
              </div>'''

card_new = '''              <div key={i} className="test-card">
                <div className="test-quote-mark">“</div>
                <p className="test-quote">{t.quote}</p>
                <div className="test-meta-wrap" style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: 'auto' }}>
                  <img src={t.image} alt={t.role} style={{ width: '48px', height: '48px', borderRadius: '50%', objectFit: 'cover' }} />
                  <div>
                    <div className="test-meta" style={{ marginTop: 0 }}>
                      <span className="test-role">{t.role}</span>
                      <span className="test-sep">/</span>
                      <span className="test-industry">{t.industry}</span>
                    </div>
                    <div style={{ fontSize: '13px', color: 'var(--ink-soft)', marginTop: '4px' }}>{t.location}</div>
                  </div>
                  <div className="test-metric" style={{ marginLeft: 'auto', marginTop: 0 }}>{t.metric}</div>
                </div>
              </div>'''

content = content.replace(card_old, card_new)

with open('src/components/Testimonials.tsx', 'w') as f:
    f.write(content)

