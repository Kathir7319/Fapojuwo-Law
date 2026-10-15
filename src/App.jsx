import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileActionBar from './components/MobileActionBar';
import ScrollToTop from './components/ScrollToTop';
import ConsultationModal from './components/ConsultationModal';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import PracticeAreas from './pages/PracticeAreas';
import CriminalDefense from './pages/CriminalDefense';
import TrafficLaw from './pages/TrafficLaw';
import LicenseRestoration from './pages/LicenseRestoration';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

export default function App() {
  const [isConsultModalOpen, setIsConsultModalOpen] = useState(false);
  const [initialPractice, setInitialPractice] = useState('traffic-transportation');

  const handleOpenConsultation = (practiceArea = 'traffic-transportation') => {
    setInitialPractice(practiceArea);
    setIsConsultModalOpen(true);
  };

  const handleCloseConsultation = () => {
    setIsConsultModalOpen(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen w-full bg-white text-slate-800 font-sans pb-16 lg:pb-0">
        {/* Universal Top Navigation */}
        <Navbar onOpenConsultation={handleOpenConsultation} />

        {/* Dynamic Route Pages */}
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Home onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/about" element={<About onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/practice-areas" element={<PracticeAreas onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/practice-areas/criminal-defense" element={<CriminalDefense onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/practice-areas/traffic-transportation" element={<TrafficLaw onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/practice-areas/license-restoration" element={<LicenseRestoration onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/resources" element={<Resources onOpenConsultation={handleOpenConsultation} />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Universal Legal Footer */}
        <Footer onOpenConsultation={handleOpenConsultation} />

        {/* Mobile Sticky Quick Action Bar */}
        <MobileActionBar onOpenConsultation={() => handleOpenConsultation()} />

        {/* Interactive Consultation Modal */}
        <ConsultationModal 
          isOpen={isConsultModalOpen} 
          onClose={handleCloseConsultation}
          initialPractice={initialPractice}
        />
      </div>
    </BrowserRouter>
  );
}
