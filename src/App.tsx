import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatBar } from './components/StatBar';
import { Solutions } from './components/Solutions';
import { Work } from './components/Work';
import { Pricing } from './components/Pricing';
import { Method } from './components/Method';
import { WhyAI } from './components/WhyAI';
import { FAQ } from './components/FAQ';
import { Founder } from './components/Founder';
import { Proof } from './components/Proof';
import { Testimonials } from './components/Testimonials';
import { CTABand } from './components/CTABand';
import { Footer } from './components/Footer';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <main id="top">
        <Hero />
        <StatBar />
        <Solutions />
        <Work />
        <Pricing />
        <Method />
        <WhyAI />
        <FAQ />
        <Founder />
        <Proof />
        <Testimonials />
        <CTABand />
      </main>
      <Footer />
      <LeadCaptureModal />
      <WhatsAppButton />
    </ThemeProvider>
  );
}
