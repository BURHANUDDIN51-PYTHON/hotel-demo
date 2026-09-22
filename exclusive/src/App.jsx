import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/common/Navbar';
import ChapterNav from './components/common/ChapterNav';
import CustomCursor from './components/common/CustomCursor';
import HeroSection from './components/hero/HeroSection';
import StorySection from './components/story/StorySection';
import SignatureSpacesSection from './components/spaces/SignatureSpacesSection';
import RoomsSection from './components/rooms/RoomsSection';
import DiningSection from './components/dining/DiningSection';
import ExperiencesSection from './components/experiences/ExperiencesSection';
import GallerySection from './components/gallery/GallerySection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import EventsSection from './components/events/EventsSection';
import LocationSection from './components/location/LocationSection';
import ContactSection from './components/contact/ContactSection';
import Footer from './components/common/Footer';
import BookingModal from './components/booking/BookingModal';

export default function App() {
  const [currentCurrency, setCurrentCurrency] = useState('EUR');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [ambientAudioActive, setAmbientAudioActive] = useState(false);
  const audioContextRef = useRef(null);
  const audioNodesRef = useRef([]);

  const [bookingInitialData, setBookingInitialData] = useState({
    suiteId: 'cliffside-ocean-suite',
    checkIn: '',
    checkOut: '',
    guests: '2 Guests'
  });

  const handleOpenBooking = (initialParams = {}) => {
    setBookingInitialData(prev => ({
      ...prev,
      ...initialParams
    }));
    setBookingModalOpen(true);
  };

  const handleOpenBookingWithSuite = (suiteId) => {
    handleOpenBooking({ suiteId });
  };

  // Luxury Mediterranean Ambient Soundscape (Web Audio API Synthesizer)
  // Recreates subtle sea breeze and warm acoustic harmonic resonance without external audio files
  const toggleAmbientAudio = () => {
    if (ambientAudioActive) {
      // Stop audio
      if (audioContextRef.current) {
        audioNodesRef.current.forEach(node => {
          try {
            if (node.stop) node.stop();
            node.disconnect();
          } catch (e) {
            // Node might already be stopped
          }
        });
        audioNodesRef.current = [];
        audioContextRef.current.close();
        audioContextRef.current = null;
      }
      setAmbientAudioActive(false);
    } else {
      // Start audio
      try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();
        audioContextRef.current = ctx;

        // 1. Warm pink-noise generator for sea breeze
        const bufferSize = ctx.sampleRate * 2;
        const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const output = noiseBuffer.getChannelData(0);
        let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
        for (let i = 0; i < bufferSize; i++) {
          const white = Math.random() * 2 - 1;
          b0 = 0.99886 * b0 + white * 0.0555179;
          b1 = 0.99332 * b1 + white * 0.0750759;
          b2 = 0.96900 * b2 + white * 0.1538520;
          b3 = 0.86650 * b3 + white * 0.3104856;
          b4 = 0.55000 * b4 + white * 0.5329522;
          b5 = -0.7616 * b5 - white * 0.0168980;
          output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.035;
          b6 = white * 0.115926;
        }

        const whiteNoise = ctx.createBufferSource();
        whiteNoise.buffer = noiseBuffer;
        whiteNoise.loop = true;

        // Bandpass filter to simulate rolling breeze
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 380;

        // Breeze Gain
        const noiseGain = ctx.createGain();
        noiseGain.gain.value = 0.35;

        whiteNoise.connect(filter);
        filter.connect(noiseGain);
        noiseGain.connect(ctx.destination);
        whiteNoise.start();

        // 2. Meditative drone chord (A=432Hz harmonic: D & A pure sine tones)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const toneGain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.value = 144; // D3 resonant
        osc2.type = 'sine';
        osc2.frequency.value = 216; // A3 fifth

        toneGain.gain.value = 0.018; // Very soft, subconscious

        osc1.connect(toneGain);
        osc2.connect(toneGain);
        toneGain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        audioNodesRef.current = [whiteNoise, filter, noiseGain, osc1, osc2, toneGain];
        setAmbientAudioActive(true);
      } catch (err) {
        console.warn('Audio context initialization error:', err);
      }
    }
  };

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        audioContextRef.current.close();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-ivory-50 text-charcoal-900 font-sans selection:bg-bronze-300 selection:text-charcoal-950 flex flex-col justify-between relative">
      
      {/* Luxury Trailing Custom Cursor */}
      <CustomCursor />

      {/* Floating Roman Chapter Indicator (Desktop) */}
      <ChapterNav />

      {/* Navigation Header */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenBooking={() => handleOpenBooking()}
        ambientAudioActive={ambientAudioActive}
        onToggleAmbientAudio={toggleAmbientAudio}
      />

      {/* Main Narrative Flow */}
      <main className="flex-grow">
        {/* Chapter 01: Hero / Prologue */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onCheckAvailability={(params) => handleOpenBooking(params)}
        />

        {/* Chapter 02: Manifesto & Ethos */}
        <StorySection />

        {/* Chapter 03: The Atmosphere & Signature Spaces */}
        <SignatureSpacesSection />

        {/* Chapter 04: The Sanctuaries (Rooms & Suites) */}
        <RoomsSection
          currentCurrency={currentCurrency}
          onOpenBookingWithSuite={handleOpenBookingWithSuite}
        />

        {/* Chapter 05: The Hearth & Cellar (Fine Dining) */}
        <DiningSection />

        {/* Chapter 06: Curated Rituals & Terroir */}
        <ExperiencesSection />

        {/* Chapter 07: Visual Chronicles (Asymmetric Gallery) */}
        <GallerySection />

        {/* Guest Chronicles & Press */}
        <TestimonialsSection />

        {/* Chapter 08: Gatherings & Buyouts */}
        <EventsSection />

        {/* Chapter 09: Terroir, Cartography & Guide */}
        <LocationSection />

        {/* Direct Liaison & Concierge Desk */}
        <ContactSection />
      </main>

      {/* Footer / Epilogue */}
      <Footer onOpenBooking={() => handleOpenBooking()} />

      {/* Global Booking & Availability Drawer */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
        currentCurrency={currentCurrency}
      />
    </div>
  );
}
