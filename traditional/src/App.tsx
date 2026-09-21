import React, { useState } from 'react';
import type { AtmosphereMode, Suite } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AtmosphericParticles } from './components/common/AtmosphericParticles';
import { HeroSection } from './components/sections/HeroSection';
import { HeritageStory } from './components/sections/HeritageStory';
import { SignatureHighlights } from './components/sections/SignatureHighlights';
import { SuitesSection } from './components/sections/SuitesSection';
import { DiningSection } from './components/sections/DiningSection';
import { ExperiencesSection } from './components/sections/ExperiencesSection';
import { WellnessSanctuary } from './components/sections/WellnessSanctuary';
import { CelebrationsSection } from './components/sections/CelebrationsSection';
import { GallerySection } from './components/sections/GallerySection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { LocationSection } from './components/sections/LocationSection';
import { SuiteDetailModal } from './components/modals/SuiteDetailModal';
import { ConciergeInquiryModal } from './components/modals/ConciergeInquiryModal';

export const App: React.FC = () => {
  // Lighting atmosphere mode: Surya (Dawn), Sandhya (Sunset Dusk), Chandra (Moonlight) - Visual only, silent
  const [atmosphereMode, setAtmosphereMode] = useState<AtmosphereMode>('sandhya');

  // Suite Detail Modal state
  const [selectedSuite, setSelectedSuite] = useState<Suite | null>(null);
  const [isSuiteModalOpen, setIsSuiteModalOpen] = useState(false);

  // Concierge Inquiry Modal state
  const [isInquiryOpen, setIsInquiryOpen] = useState(false);
  const [inquiryInitialData, setInquiryInitialData] = useState<{
    checkIn?: string;
    checkOut?: string;
    suite?: string;
    guests?: string;
    bespokeNotes?: string;
  } | undefined>(undefined);

  const handleOpenInquiry = (initialData?: {
    checkIn?: string;
    checkOut?: string;
    suite?: string;
    guests?: string;
    bespokeNotes?: string;
  }) => {
    setInquiryInitialData(initialData);
    setIsInquiryOpen(true);
  };

  const handleSelectSuite = (suite: Suite) => {
    setSelectedSuite(suite);
    setIsSuiteModalOpen(true);
  };

  const handleSelectSuiteForBooking = (suiteName: string) => {
    setIsSuiteModalOpen(false);
    handleOpenInquiry({ suite: suiteName });
  };

  return (
    <div className={`relative min-h-screen bg-palace-night text-palace-cream selection:bg-gold-500/30 selection:text-gold-200 mode-${atmosphereMode}`}>
      {/* Subtle Visual Particle Shimmer Overlay (Silent, low GPU) */}
      <AtmosphericParticles enabled={true} />

      {/* Royal Global Navbar with Lighting Mood Controls (Completely Silent) */}
      <Navbar
        atmosphereMode={atmosphereMode}
        onSetAtmosphere={setAtmosphereMode}
        onOpenInquiry={() => handleOpenInquiry()}
      />

      {/* Master Taj Lake Palace Experience */}
      <main className="relative z-10">
        {/* Chapter 0: The Arrival by Boat across Lake Pichola */}
        <HeroSection
          atmosphereMode={atmosphereMode}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Chapter 1: The Legacy of Jag Niwas (1743–1746 A.D.) */}
        <HeritageStory />

        {/* Chapter 2: Signature Architectural Highlights of the 4-Acre Island */}
        <SignatureHighlights />

        {/* Chapter 3: Royal Suites (Shambhu Prakash, Mayur Mahal, Khush Mahal, Sajjan Niwas) */}
        <SuitesSection
          onSelectSuite={handleSelectSuite}
          onOpenInquiry={handleOpenInquiry}
        />

        {/* Chapter 4: Distinctive Dining (Neel Kamal, Bhairo, Jharokha, Amrit Sagar, Gangaur) */}
        <DiningSection onOpenInquiry={handleOpenInquiry} />

        {/* Chapter 5: Palace Encounters & Traditions */}
        <ExperiencesSection onOpenInquiry={handleOpenInquiry} />

        {/* Chapter 6: J Wellness Circle & The Floating Spa Boat */}
        <WellnessSanctuary onOpenInquiry={handleOpenInquiry} />

        {/* Chapter 7: Island Celebrations & Lakeside Mandaps */}
        <CelebrationsSection onOpenInquiry={handleOpenInquiry} />

        {/* Chapter 8: The Palace Art Exhibition */}
        <GallerySection />

        {/* Chapter 9: The Royal Ledger / Handwritten Memoirs */}
        <TestimonialsSection />

        {/* Chapter 10: Geographic Setting & Arrival Pathways */}
        <LocationSection />
      </main>

      {/* Taj Lake Palace Footer */}
      <Footer />

      {/* Deep-Dive Suite Modal */}
      <SuiteDetailModal
        suite={selectedSuite}
        isOpen={isSuiteModalOpen}
        onClose={() => setIsSuiteModalOpen(false)}
        onSelectForBooking={handleSelectSuiteForBooking}
      />

      {/* Taj Concierge Reservation Drawer */}
      <ConciergeInquiryModal
        isOpen={isInquiryOpen}
        onClose={() => setIsInquiryOpen(false)}
        initialData={inquiryInitialData}
      />
    </div>
  );
};

export default App;
