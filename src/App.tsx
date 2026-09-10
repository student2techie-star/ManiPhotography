import { Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import Chatbot from './components/Chatbot/Chatbot';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home/Home';
import Portfolio from './pages/Portfolio/Portfolio';
import PortfolioCategory from './pages/PortfolioCategory/PortfolioCategory';
import Services from './pages/Services/Services';
import DedicatedService from './pages/DedicatedService/DedicatedService';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Guides from './pages/Guides/Guides';
import GuideDetail from './pages/GuideDetail/GuideDetail';
import NotFound from './pages/NotFound/NotFound';
import Preloader from './components/Preloader/Preloader';

function App() {
  return (
    <LanguageProvider>
      <Preloader />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Dedicated Service SEO Landing Pages */}
        <Route path="/wedding-photography-thirukadaiyur" element={<DedicatedService routeSlug="wedding-photography-thirukadaiyur" />} />
        <Route path="/thirukadaiyur-temple-wedding-photography" element={<DedicatedService routeSlug="wedding-photography-thirukadaiyur" />} />
        <Route path="/60th-birthday-photography-thirukadaiyur" element={<DedicatedService routeSlug="60th-birthday-photography-thirukadaiyur" />} />
        <Route path="/shashtiapthapoorthi-photography" element={<DedicatedService routeSlug="shashtiapthapoorthi-photography" />} />
        <Route path="/sashti-abda-poorthi-photography" element={<DedicatedService routeSlug="shashtiapthapoorthi-photography" />} />
        <Route path="/70th-birthday-photography-thirukadaiyur" element={<DedicatedService routeSlug="70th-birthday-photography-thirukadaiyur" />} />
        <Route path="/bhima-ratha-shanthi-photography" element={<DedicatedService routeSlug="70th-birthday-photography-thirukadaiyur" />} />
        <Route path="/80th-birthday-photography-thirukadaiyur" element={<DedicatedService routeSlug="80th-birthday-photography-thirukadaiyur" />} />
        <Route path="/sadhabishegam-photography" element={<DedicatedService routeSlug="80th-birthday-photography-thirukadaiyur" />} />
        <Route path="/temple-photography-thirukadaiyur" element={<DedicatedService routeSlug="temple-photography-thirukadaiyur" />} />
        <Route path="/wedding-videography-thirukadaiyur" element={<DedicatedService routeSlug="wedding-videography-thirukadaiyur" />} />

        {/* Portfolio & Gallery Routes */}
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/gallery" element={<Portfolio />} />
        <Route path="/portfolio/:category" element={<PortfolioCategory />} />
        
        {/* Services Overview & Dynamic Service Detail */}
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<DedicatedService />} />

        {/* Content & Contact Routes */}
        <Route path="/guides" element={<Guides />} />
        <Route path="/blog" element={<Guides />} />
        <Route path="/guides/:slug" element={<GuideDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        
        {/* Fallback 404 Route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <WhatsAppButton />
      <Chatbot />
    </LanguageProvider>
  );
}

export default App;


