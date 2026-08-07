import { useInView } from '../hooks/useInView';

export function Proof() {
  const { ref: headRef, isInView: headInView } = useInView();
  const { ref: gridRef, isInView: gridInView } = useInView();
  const { ref: tagsRef, isInView: tagsInView } = useInView();

  return (
    <section id="proof">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headInView ? 'in' : ''}`}>
          <span className="eyebrow">Proof, Not Promises</span>
          <h2>A decade of results, across markets and industries.</h2>
          <p>No client wall, no logo soup — just the track record. SMEStudio has quietly powered growth for founders and teams across two continents since day one.</p>
        </div>
        <div ref={gridRef} className={`proof-grid reveal ${gridInView ? 'in' : ''}`}>
          <div className="proof-cell"><div className="big">100+</div><div className="small">Brands guided from zero</div></div>
          <div className="proof-cell"><div className="big">17+</div><div className="small">Years of hands-on growth work</div></div>
          <div className="proof-cell"><div className="big">8</div><div className="small">Industries served end to end</div></div>
          <div className="proof-cell"><div className="big">2</div><div className="small">Continents — Africa & Europe</div></div>
        </div>
        <div ref={tagsRef} className={`industry-tags reveal ${tagsInView ? 'in' : ''}`}>
          <span>FinTech</span><span>IT Services</span><span>Financial Services</span><span>EdTech</span>
          <span>Energy</span><span>Construction</span><span>Security</span><span>Healthcare</span><span>Ecommerce</span>
        </div>
      </div>
    </section>
  );
}
