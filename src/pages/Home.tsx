import { Hero } from '../components/Hero';
import { GrowthAudit } from '../components/GrowthAudit';
import { StatBar } from '../components/StatBar';
import { Solutions } from '../components/Solutions';
import { Method } from '../components/Method';
import { WhyAI } from '../components/WhyAI';
import { FAQ } from '../components/FAQ';
import { Proof } from '../components/Proof';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <main id="top">
      <Hero />
      <GrowthAudit />
      <StatBar />
      <Solutions />
      <Method />
      <WhyAI />
      <Proof />
      <Testimonials />
      <FAQ />
    </main>
  );
}
