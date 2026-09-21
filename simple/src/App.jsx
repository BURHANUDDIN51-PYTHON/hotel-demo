import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { RoomsAndMenu } from './components/RoomsAndMenu';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Gallery } from './components/Gallery';
import { Testimonials } from './components/Testimonials';
import { LocationSection } from './components/LocationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState('room'); // 'room' | 'table'
  const [selectedRoom, setSelectedRoom] = useState('');

  const handleOpenBooking = (type = 'room', roomName = '') => {
    setModalType(type);
    setSelectedRoom(roomName);
    setModalOpen(true);
  };

  const handleCloseBooking = () => {
    setModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-amber-100 selection:text-amber-900 bg-[#FBF9F5] text-stone-800">
      {/* Navigation */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenBooking={handleOpenBooking} />
        <About />
        <RoomsAndMenu onOpenBooking={handleOpenBooking} />
        <WhyChooseUs />
        <Gallery />
        <Testimonials />
        <LocationSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Reservation & Booking Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={handleCloseBooking}
        initialType={modalType}
        initialRoom={selectedRoom}
      />
    </div>
  );
}

export default App;
