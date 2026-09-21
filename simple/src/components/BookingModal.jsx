import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { X, Calendar, Check, BedDouble, UtensilsCrossed, Phone } from 'lucide-react';

export const BookingModal = ({ isOpen, onClose, initialType = 'room', initialRoom = '' }) => {
  const [bookingType, setBookingType] = useState(initialType);
  const [roomChoice, setRoomChoice] = useState(initialRoom || siteConfig.rooms[0].title);
  const [guests, setGuests] = useState('2 Guests');
  const [dateRange, setDateRange] = useState('');
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Sync state if modal is opened with new props
  React.useEffect(() => {
    setBookingType(initialType);
    if (initialRoom) setRoomChoice(initialRoom);
    setSubmitted(false);
  }, [initialType, initialRoom, isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="relative bg-[#FBF9F5] w-full max-w-lg rounded-2xl border border-stone-200 shadow-2xl p-6 sm:p-8 text-left animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-stone-400 hover:text-stone-800 p-1.5 rounded-full hover:bg-stone-200/60 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
              <Check className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Reservation Request Received!
            </h3>
            <p className="text-stone-600 text-sm">
              Thank you, {name || 'Guest'}. We have placed a preliminary hold for your {bookingType === 'room' ? `stay (${roomChoice})` : 'bistro table'}. Our desk manager will confirm via phone or email shortly.
            </p>
            <div className="pt-4 border-t border-stone-200">
              <button
                onClick={onClose}
                className="bg-stone-900 text-white text-xs font-semibold px-6 py-2.5 rounded-xl hover:bg-amber-800 transition-colors"
              >
                Done
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
                Direct Reservation
              </span>
              <h3 className="font-serif text-2xl font-bold text-stone-900 mt-1">
                {bookingType === 'room' ? 'Check Room Availability' : 'Reserve a Bistro Table'}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                No upfront card payment required for enquiry. We will confirm dates with you directly.
              </p>
            </div>

            {/* Type selector */}
            <div className="flex rounded-xl bg-stone-200/70 p-1">
              <button
                type="button"
                onClick={() => setBookingType('room')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition-all ${
                  bookingType === 'room' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
                }`}
              >
                <BedDouble className="w-3.5 h-3.5" />
                <span>Boutique Room</span>
              </button>
              <button
                type="button"
                onClick={() => setBookingType('table')}
                className={`flex-1 flex items-center justify-center gap-2 py-2 text-xs font-semibold rounded-lg transition-all ${
                  bookingType === 'table' ? 'bg-white text-stone-900 shadow-xs' : 'text-stone-600'
                }`}
              >
                <UtensilsCrossed className="w-3.5 h-3.5" />
                <span>Bistro Table</span>
              </button>
            </div>

            {bookingType === 'room' ? (
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Select Room Preference
                </label>
                <select
                  value={roomChoice}
                  onChange={(e) => setRoomChoice(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/20"
                >
                  {siteConfig.rooms.map((r) => (
                    <option key={r.id} value={r.title}>
                      {r.title} — {r.price}/{r.pricePeriod}
                    </option>
                  ))}
                </select>
              </div>
            ) : (
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Seating Area Preference
                </label>
                <select
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/20"
                >
                  <option>Garden Brook Terrace (Weather permitting)</option>
                  <option>Indoor Hearth Dining Room</option>
                  <option>First Available Table</option>
                </select>
              </div>
            )}

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Party Size
                </label>
                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm text-stone-800 bg-white focus:outline-none focus:ring-2 focus:ring-amber-700/20"
                >
                  <option>1 Guest</option>
                  <option>2 Guests</option>
                  <option>3 Guests</option>
                  <option>4 Guests</option>
                  <option>5+ Guests (Private party)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Desired Date(s) *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Oct 14 - Oct 17"
                  value={dateRange}
                  onChange={(e) => setDateRange(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Your Full Name *
              </label>
              <input
                type="text"
                required
                placeholder="Marcus Jenkins"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700/20"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Email or Phone Number *
              </label>
              <input
                type="text"
                required
                placeholder="marcus@example.com or (555) 000-0000"
                value={contactInfo}
                onChange={(e) => setContactInfo(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700/20"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-stone-700 mb-1">
                Special Requests (Optional)
              </label>
              <textarea
                rows={2}
                placeholder="Dietary preferences, quiet corner, ground floor preference..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className="w-full px-3.5 py-2 rounded-xl border border-stone-200 text-sm text-stone-800 focus:outline-none focus:ring-2 focus:ring-amber-700/20"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-stone-900 hover:bg-amber-800 text-white font-medium py-3 rounded-xl transition-all shadow-xs text-sm"
            >
              Submit Reservation Request
            </button>

            <p className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1">
              <Phone className="w-3 h-3 text-amber-700" />
              <span>Or call reception directly at {siteConfig.contact.phone}</span>
            </p>
          </form>
        )}

      </div>
    </div>
  );
};
