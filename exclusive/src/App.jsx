import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import HeroSection from './components/hero/HeroSection';
import StorySection from './components/story/StorySection';
import RoomsSection from './components/rooms/RoomsSection';
import ExperiencesSection from './components/experiences/ExperiencesSection';
import DiningSection from './components/dining/DiningSection';
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

  return (
    <div className="min-h-screen bg-ivory-50 text-charcoal-900 font-sans selection:bg-bronze-300 selection:text-charcoal-950 flex flex-col justify-between">
      {/* Navigation Header */}
      <Navbar
        currentCurrency={currentCurrency}
        onCurrencyChange={setCurrentCurrency}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Page Content */}
      <main className="flex-grow">
        {/* 1. Hero Section */}
        <HeroSection
          onOpenBooking={() => handleOpenBooking()}
          onCheckAvailability={(params) => handleOpenBooking(params)}
        />

        {/* 2. Brand Story / Manifesto */}
        <StorySection />

        {/* 3. Rooms & Suites Collection */}
        <RoomsSection
          currentCurrency={currentCurrency}
          onOpenBookingWithSuite={handleOpenBookingWithSuite}
        />

        {/* 4. Signature Experiences */}
        <ExperiencesSection />

        {/* 5. Fine Dining & Cellar */}
        <DiningSection />

        {/* 6. Visual Chronicles & Gallery */}
        <GallerySection />

        {/* 7. Press & Guest Testimonials */}
        <TestimonialsSection />

        {/* 8. Gatherings & Buyouts */}
        <EventsSection />

        {/* 9. Terroir & Location */}
        <LocationSection />

        {/* 10. Concierge Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
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
