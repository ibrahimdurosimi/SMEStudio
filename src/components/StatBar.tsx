import { useCountUp } from '../hooks/useInView';

function StatItem({ target, label }: { target: number, label: string }) {
  const { ref, count } = useCountUp(target);
  return (
    <div className="stat-cell" ref={ref}>
      <div className="stat-num">{count}{target >= 17 ? '+' : ''}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export function StatBar() {
  return (
    <div className="statbar">
      <div className="wrap">
        <StatItem target={17} label="Years in growth & digital" />
        <StatItem target={100} label="Brands scaled, +" />
        <StatItem target={8} label="Industries served" />
        <StatItem target={2} label="Continents active" />
      </div>
    </div>
  );
}
