import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from './context/ThemeContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LeadCaptureModal } from './components/LeadCaptureModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfService } from './pages/TermsOfService';
import { WorkPage } from './pages/WorkPage';
import { AboutUs } from './pages/AboutUs';

export default function App() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "SMEStudio",
    "description": "SMEStudio helps Nigerian and global digital brands grow with AI-powered SEO, performance marketing, web development, and growth strategy.",
    "areaServed": "Nigeria",
    "founder": {
      "@type": "Person",
      "name": "Eb'Rahim Durosimi"
    },
    "sameAs": [
      "https://linkedin.com/company/smestudio",
      "https://twitter.com/smestudio",
      "https://instagram.com/smestudio"
    ]
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>SMEStudio — AI-Powered Growth Marketing Agency | Zero to Hero</title>
        <meta name="description" content="SMEStudio helps Nigerian and global digital brands grow with AI-powered SEO, performance marketing, web development, and growth strategy. 17+ years of hands-on experience. Get your free growth proposal today." />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="SMEStudio — AI-Powered Growth Marketing Agency | Zero to Hero" />
        <meta property="og:description" content="SMEStudio helps Nigerian and global digital brands grow with AI-powered SEO, performance marketing, web development, and growth strategy. 17+ years of hands-on experience. Get your free growth proposal today." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://smestudio.com" />
        {/* TODO: Add real branded image before launch */}
        <meta property="og:image" content="/placeholder-og.jpg" />
        
        {/* Twitter Card Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SMEStudio — AI-Powered Growth Marketing Agency | Zero to Hero" />
        <meta name="twitter:description" content="SMEStudio helps Nigerian and global digital brands grow with AI-powered SEO, performance marketing, web development, and growth strategy." />
        <meta name="twitter:image" content="/placeholder-og.jpg" />
        
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <ThemeProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/work" element={<WorkPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
          <Footer />
          <LeadCaptureModal />
          <WhatsAppButton />
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
}
