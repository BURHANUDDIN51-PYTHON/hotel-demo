import React, { useState } from 'react';
import Modal from '../common/Modal';
import { hotelBrand, suitesCollection } from '../../data/hotelData';
import { Check, Calendar, Sparkles, ShieldCheck, Clock, User, Mail, MessageSquare } from 'lucide-react';

export default function BookingModal({
  isOpen,
  onClose,
  initialData = {},
  currentCurrency = 'EUR',
}) {
  const [suiteId, setSuiteId] = useState(initialData.suiteId || 'cliffside-ocean-suite');
  const [checkIn, setCheckIn] = useState(initialData.checkIn || '2026-10-04');
  const [checkOut, setCheckOut] = useState(initialData.checkOut || '2026-10-08');
  const [guests, setGuests] = useState(initialData.guests || '2 Guests');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [specialNotes, setSpecialNotes] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  // Selected suite
  const selectedSuite = suitesCollection.find(s => s.id === suiteId) || suitesCollection[0];

  // Calculate nights
  const calculateNights = () => {
    try {
      const d1 = new Date(checkIn);
      const d2 = new Date(checkOut);
      const diffTime = Math.abs(d2 - d1);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return isNaN(diffDays) || diffDays <= 0 ? 4 : diffDays;
    } catch {
      return 4;
    }
  };

  const nights = calculateNights();
  const rateInfo = hotelBrand.currencyRates[currentCurrency] || hotelBrand.currencyRates.EUR;
  const pricePerNight = Math.round(selectedSuite.priceEUR * rateInfo.rate);
  const subtotal = pricePerNight * nights;
  const taxes = Math.round(subtotal * 0.10); // 10% Balearic eco & hospitality tax
  const total = subtotal + taxes;

  const handleConfirm = (e) => {
    e.preventDefault();
    const randomCode = 'MS-' + Math.floor(100000 + Math.random() * 900000);
    setReservationCode(randomCode);
    setIsConfirmed(true);
  };

  const handleReset = () => {
    setIsConfirmed(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={isConfirmed ? handleReset : onClose}
      title={isConfirmed ? "Reservation Requested" : "Reserve Your Stay"}
      subtitle={isConfirmed ? "Confirmation Voucher" : "Direct Sanctuary Booking"}
      maxWidth="max-w-4xl"
    >
      {isConfirmed ? (
        <div className="text-center py-8 space-y-6">
          <div className="w-16 h-16 rounded-full bg-olive-100 text-olive-800 flex items-center justify-center mx-auto mb-4 border border-olive-200">
            <Check className="w-8 h-8 stroke-[2.5]" />
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-bronze-600 block mb-1">
              Reservation Reference: {reservationCode}
            </span>
            <h4 className="font-serif text-3xl text-charcoal-950 font-light mb-2">
              We Look Forward to Welcoming You
            </h4>
            <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
              Your provisional sanctuary reservation for <strong className="text-charcoal-900">{selectedSuite.title}</strong> has been secured for {nights} nights ({checkIn} to {checkOut}).
            </p>
          </div>

          {/* Luxury Voucher Card */}
          <div className="max-w-lg mx-auto bg-sand-50 border border-sand-200 p-6 text-left rounded-sm space-y-4">
            <div className="flex justify-between items-baseline border-b border-sand-200 pb-3">
              <span className="text-xs font-serif tracking-luxury uppercase text-charcoal-800 font-semibold">
                {hotelBrand.name}
              </span>
              <span className="text-xs font-mono text-charcoal-500">Deià, Mallorca</span>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div>
                <span className="text-charcoal-400 block uppercase tracking-wider text-[10px]">Guest</span>
                <span className="font-medium text-charcoal-800">{fullName || "Honored Guest"}</span>
              </div>
              <div>
                <span className="text-charcoal-400 block uppercase tracking-wider text-[10px]">Party</span>
                <span className="font-medium text-charcoal-800">{guests}</span>
              </div>
              <div>
                <span className="text-charcoal-400 block uppercase tracking-wider text-[10px]">Dates</span>
                <span className="font-medium text-charcoal-800">{checkIn} → {checkOut} ({nights} nights)</span>
              </div>
              <div>
                <span className="text-charcoal-400 block uppercase tracking-wider text-[10px]">Total Est.</span>
                <span className="font-medium text-olive-800 font-serif text-sm">{rateInfo.symbol}{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="pt-2 text-[11px] text-charcoal-500 flex items-center gap-2 border-t border-sand-200/80">
              <Clock className="w-3.5 h-3.5 text-bronze-500 shrink-0" />
              <span>Concierge team will reach out via email to arrange airport transfer & dietary preferences.</span>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleReset}
              className="px-8 py-3 bg-olive-800 text-ivory-50 text-xs uppercase tracking-luxury font-medium hover:bg-olive-900 transition-colors"
            >
              Return to Website
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleConfirm} className="space-y-6">
          {/* Top suite selection & photo preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center p-4 bg-sand-50 border border-sand-200 rounded-sm">
            <div className="h-28 md:h-full overflow-hidden rounded-sm relative">
              <img
                src={selectedSuite.images[0]}
                alt={selectedSuite.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-2 left-2 px-2 py-0.5 bg-charcoal-950/80 text-ivory-50 text-[10px] uppercase tracking-wider">
                {selectedSuite.categoryLabel}
              </span>
            </div>

            <div className="md:col-span-2 space-y-2 text-left">
              <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block">
                Choose Suite Category
              </label>
              <select
                value={suiteId}
                onChange={(e) => setSuiteId(e.target.value)}
                className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-sm font-medium text-charcoal-900 rounded-sm focus:outline-none focus:border-bronze-500"
              >
                {suitesCollection.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title} — {rateInfo.symbol}{Math.round(s.priceEUR * rateInfo.rate).toLocaleString()}/night
                  </option>
                ))}
              </select>
              <p className="text-xs text-charcoal-600 line-clamp-2">
                {selectedSuite.description}
              </p>
            </div>
          </div>

          {/* Dates and party size */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
            <div>
              <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block mb-1.5">
                Arrival Date
              </label>
              <input
                type="date"
                required
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-sm rounded-sm text-charcoal-900 focus:outline-none focus:border-bronze-500"
              />
            </div>

            <div>
              <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block mb-1.5">
                Departure Date
              </label>
              <input
                type="date"
                required
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-sm rounded-sm text-charcoal-900 focus:outline-none focus:border-bronze-500"
              />
            </div>

            <div>
              <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block mb-1.5">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-sm rounded-sm text-charcoal-900 focus:outline-none focus:border-bronze-500"
              >
                <option>1 Guest</option>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
              </select>
            </div>
          </div>

          {/* Guest Contact Inputs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div>
              <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block mb-1.5">
                Full Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-charcoal-400 absolute left-3 top-3" />
                <input
                  type="text"
                  required
                  placeholder="Count / Madame / Mr."
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-ivory-50 border border-sand-300 text-sm rounded-sm text-charcoal-900 focus:outline-none focus:border-bronze-500"
                />
              </div>
            </div>

            <div>
              <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-charcoal-400 absolute left-3 top-3" />
                <input
                  type="email"
                  required
                  placeholder="guest@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-ivory-50 border border-sand-300 text-sm rounded-sm text-charcoal-900 focus:outline-none focus:border-bronze-500"
                />
              </div>
            </div>
          </div>

          {/* Bespoke Requests */}
          <div className="text-left">
            <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block mb-1.5">
              Bespoke Requests (Dietary, Airport Transfer, Pillow Preferences)
            </label>
            <textarea
              rows={2}
              value={specialNotes}
              onChange={(e) => setSpecialNotes(e.target.value)}
              placeholder="e.g., Porsche airport pick-up from PMI, non-feather bedding, champagne on arrival..."
              className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs sm:text-sm rounded-sm text-charcoal-900 focus:outline-none focus:border-bronze-500"
            ></textarea>
          </div>

          {/* Inclusions summary */}
          <div className="p-4 bg-sand-100/70 border border-sand-200 rounded-sm text-left">
            <div className="flex items-center gap-2 mb-2 text-xs font-semibold uppercase tracking-luxury text-olive-800">
              <Sparkles className="w-3.5 h-3.5 text-bronze-500" />
              <span>Complimentary Sanctuary Inclusions</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal-700">
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 text-olive-700" />
                <span>Wood-fired artisanal breakfast each morning</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 text-olive-700" />
                <span>Daily sunset aperitivo & biodynamic wine</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 text-olive-700" />
                <span>90-min Thermal Cistern & Bath access</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3 h-3 text-olive-700" />
                <span>Electric vehicle charging & Starlink Wi-Fi</span>
              </div>
            </div>
          </div>

          {/* Price Calculation Box & Submit */}
          <div className="border-t border-sand-200 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="text-xs text-charcoal-500">
                {nights} Nights × {rateInfo.symbol}{pricePerNight.toLocaleString()} / night + 10% eco tax
              </div>
              <div className="font-serif text-2xl font-light text-charcoal-950">
                Total: <span className="font-medium text-olive-900">{rateInfo.symbol}{total.toLocaleString()}</span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                type="button"
                onClick={onClose}
                className="px-5 py-3 border border-sand-300 text-charcoal-700 text-xs font-medium uppercase tracking-luxury hover:bg-sand-100 transition-colors w-1/2 sm:w-auto"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-3 bg-olive-800 hover:bg-olive-900 text-ivory-50 text-xs font-semibold uppercase tracking-luxury transition-all shadow-md w-1/2 sm:w-auto"
              >
                Confirm Request
              </button>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
}
