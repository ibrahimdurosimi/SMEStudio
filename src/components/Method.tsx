import { useInView } from '../hooks/useInView';

function MethodRow({ num, title, desc }: { num: string, title: string, desc: string }) {
  const { ref, isInView } = useInView();
  return (
    <div ref={ref} className={`method-row reveal ${isInView ? 'in' : ''}`}>
      <div className="m-num">{num}</div>
      <h4>{title}</h4>
      <div className="m-desc"><p>{desc}</p></div>
    </div>
  );
}

export function Method() {
  const { ref: headRef, isInView: headInView } = useInView();

  return (
    <section id="method" className="method">
      <div className="wrap">
        <div ref={headRef} className={`section-head reveal ${headInView ? 'in' : ''}`}>
          <span className="eyebrow">The Method</span>
          <h2>The Zero to Hero framework</h2>
          <p>A five-step operating rhythm — the same one used to run growth for fintech and IT brands — compressed for teams who need results, not theory.</p>
        </div>
        <div className="method-list">
          <MethodRow num="01" title="Audit" desc="A clear-eyed read of the brand, funnel, and channels as they actually perform today — no assumptions carried over." />
          <MethodRow num="02" title="Strategy" desc="A prioritised growth plan built around the two or three levers that will move the number that matters most, right now." />
          <MethodRow num="03" title="Build" desc="Site, app, brand assets, or campaign infrastructure — designed and shipped with the growth plan already built in." />
          <MethodRow num="04" title="Launch" desc="Coordinated go-live across channels, with tracking and attribution wired in before the first click, not after." />
          <MethodRow num="05" title="Scale with AI" desc="AI-assisted testing, content, and optimisation take over the repetitive work, so the next stage of growth compounds." />
        </div>
      </div>
    </section>
  );
}
