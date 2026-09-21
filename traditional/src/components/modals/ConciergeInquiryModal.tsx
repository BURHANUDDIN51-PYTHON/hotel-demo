import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RoyalMonogram } from '../common/RoyalMonogram';
import { PALACE_INFO } from '../../data/palaceData';

interface ConciergeInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: {
    checkIn?: string;
    checkOut?: string;
    suite?: string;
    guests?: string;
    bespokeNotes?: string;
  };
}

export const ConciergeInquiryModal: React.FC<ConciergeInquiryModalProps> = ({
  isOpen,
  onClose,
  initialData,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    suite: 'The Shambhu Prakash Suite',
    guests: '2 Guests',
    enhancements: [] as string[],
    notes: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [reservationCode, setReservationCode] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData((prev) => ({
        ...prev,
        checkIn: initialData.checkIn || prev.checkIn,
        checkOut: initialData.checkOut || prev.checkOut,
        suite: initialData.suite || prev.suite,
        guests: initialData.guests || prev.guests,
        notes: initialData.bespokeNotes || prev.notes,
      }));
    }
  }, [initialData]);

  const enhancementOptions = [
    'Private Taj Boat Transfer Across Lake Pichola',
    'Gangaur Royal Barge Dinner on the Lake',
    'J Wellness Floating Spa Boat Session',
    'Palace Heritage Walking Tour with Historian',
    'Sunset Cruise past Jag Mandir Island',
  ];

  const handleToggleEnhancement = (enhancement: string) => {
    setFormData((prev) => {
      const exists = prev.enhancements.includes(enhancement);
      return {
        ...prev,
        enhancements: exists
          ? prev.enhancements.filter((e) => e !== enhancement)
          : [...prev.enhancements, enhancement],
      };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomCode = `TLP-${Math.floor(1000 + Math.random() * 9000)}`;
    setReservationCode(randomCode);
    setIsSubmitted(true);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#C5A059', '#E6CA85', '#FFF0D0'],
    });
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-palace-night/90 backdrop-blur-xl"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-3xl max-h-[92vh] overflow-y-auto bg-palace-card border border-gold-500/30 rounded-2xl shadow-2xl z-10 text-palace-cream my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-palace-night/80 border border-gold-500/30 text-gold-300 hover:text-white hover:bg-gold-500 hover:text-palace-night transition-all cursor-pointer"
              aria-label="Close Reservation Drawer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="p-6 sm:p-8 text-center border-b border-gold-500/20 bg-palace-dark/50">
              <RoyalMonogram size="sm" showText={false} />
              <h3 className="font-serif text-2xl sm:text-3xl text-gold-gradient mt-2 font-light">
                Taj Lake Palace Concierge Desk
              </h3>
              <p className="font-sans text-xs tracking-ceremonial text-gold-400 uppercase mt-1">
                Jag Niwas Residence Inquiries • {PALACE_INFO.city}
              </p>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8">
              {isSubmitted ? (
                /* Success Screen */
                <div className="text-center py-8 space-y-6">
                  <div className="flex justify-center text-gold-400">
                    <CheckCircle2 className="w-16 h-16 animate-pulse" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-sans tracking-widest uppercase text-gold-400">
                      Inquiry Transmitted to Palace Butler
                    </span>
                    <h4 className="font-serif text-3xl text-palace-marble">
                      Inscribed in the Taj Registry
                    </h4>
                    <p className="font-serif text-base italic text-palace-sandstone/80 max-w-md mx-auto">
                      "Thank you for your interest in Taj Lake Palace, Udaipur. Our Chief Palace Butler will reach out within four hours to curate your arrival across Lake Pichola."
                    </p>
                  </div>

                  {/* Reference Ticket Card */}
                  <div className="max-w-sm mx-auto p-5 rounded-xl border border-gold-400/40 bg-palace-dark/80 space-y-2 text-left">
                    <div className="flex items-center justify-between text-xs text-gold-400 font-sans tracking-widest uppercase">
                      <span>Inquiry Reference</span>
                      <span className="font-mono text-gold-300 font-semibold">{reservationCode}</span>
                    </div>
                    <div className="border-t border-gold-500/20 pt-2 text-xs font-sans space-y-1 text-palace-sandstone/80">
                      <p><strong className="text-palace-cream">Guest:</strong> {formData.fullName}</p>
                      <p><strong className="text-palace-cream">Suite:</strong> {formData.suite}</p>
                      <p><strong className="text-palace-cream">Dates:</strong> {formData.checkIn || 'Open'} — {formData.checkOut || 'Open'}</p>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="px-8 py-3 rounded-md bg-gold-foil text-palace-night font-sans tracking-widest text-xs font-semibold uppercase hover:brightness-110 transition-all cursor-pointer"
                  >
                    Return to Palace Journey
                  </button>
                </div>
              ) : (
                /* Inquiry Form */
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Details */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-gold-400 font-medium">
                        Guest Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Lord & Lady Sterling"
                        className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3.5 py-2.5 text-xs text-palace-cream placeholder:text-palace-sandstone/40 focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-gold-400 font-medium">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="guest@domain.com"
                        className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3.5 py-2.5 text-xs text-palace-cream placeholder:text-palace-sandstone/40 focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Guests */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-gold-400 font-medium">
                        Contact Telephone / WhatsApp
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 / International Country Code"
                        className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3.5 py-2.5 text-xs text-palace-cream placeholder:text-palace-sandstone/40 focus:border-gold-400 focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-gold-400 font-medium">
                        Number of Guests
                      </label>
                      <select
                        value={formData.guests}
                        onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                        className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3.5 py-2.5 text-xs text-palace-cream focus:border-gold-400 focus:outline-none cursor-pointer"
                      >
                        <option value="1 Guest">1 Guest</option>
                        <option value="2 Guests">2 Guests</option>
                        <option value="3 Guests">3 Guests</option>
                        <option value="Family / Entourage">Family & Entourage (4+ Guests)</option>
                        <option value="Entire Island Buyout">Four-Acre Palace Island Buyout</option>
                      </select>
                    </div>
                  </div>

                  {/* Dates */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-gold-400 font-medium">
                        Arrival Date
                      </label>
                      <input
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
                        className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3.5 py-2.5 text-xs text-palace-cream focus:border-gold-400 focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[11px] font-sans uppercase tracking-widest text-gold-400 font-medium">
                        Departure Date
                      </label>
                      <input
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
                        className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3.5 py-2.5 text-xs text-palace-cream focus:border-gold-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Suite Selection */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-gold-400 font-medium">
                      Preferred Taj Palace Suite
                    </label>
                    <select
                      value={formData.suite}
                      onChange={(e) => setFormData({ ...formData, suite: e.target.value })}
                      className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3.5 py-2.5 text-xs text-palace-cream focus:border-gold-400 focus:outline-none cursor-pointer"
                    >
                      <option value="The Shambhu Prakash Suite">The Shambhu Prakash Presidential Suite (1,800 sq.ft)</option>
                      <option value="Mayur Mahal (The Peacock Suite)">Mayur Mahal (Peacock Suite with Stained Glass)</option>
                      <option value="Khush Mahal (Queen's Suite)">Khush Mahal (Queen's Private Retreat)</option>
                      <option value="Sajjan Niwas Suite">Sajjan Niwas Suite (Lake View)</option>
                      <option value="Undecided / Butler Recommendation">Undecided / Butler Recommendation</option>
                    </select>
                  </div>

                  {/* Bespoke Enhancements */}
                  <div className="space-y-2 pt-2">
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-gold-400 font-medium">
                      Bespoke Palace Privileges (Optional)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {enhancementOptions.map((opt) => {
                        const checked = formData.enhancements.includes(opt);
                        return (
                          <button
                            type="button"
                            key={opt}
                            onClick={() => handleToggleEnhancement(opt)}
                            className={`p-2.5 rounded-lg border text-left text-xs font-sans transition-all flex items-center gap-2 cursor-pointer ${
                              checked
                                ? 'border-gold-400 bg-gold-500/20 text-gold-200'
                                : 'border-gold-500/20 bg-palace-dark/60 text-palace-sandstone/70 hover:border-gold-500/40'
                            }`}
                          >
                            <span
                              className={`w-3.5 h-3.5 rounded-sm border flex items-center justify-center ${
                                checked ? 'bg-gold-500 border-gold-400 text-palace-night' : 'border-gold-500/40'
                              }`}
                            >
                              {checked && '✓'}
                            </span>
                            <span className="truncate">{opt}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Notes / Special Requests */}
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-sans uppercase tracking-widest text-gold-400 font-medium">
                      Special Wishes, Anniversary or Dietary Requirements
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="e.g. Wedding anniversary celebration, boat arrival timing preferences, or private dining requests..."
                      className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3.5 py-2.5 text-xs text-palace-cream placeholder:text-palace-sandstone/40 focus:border-gold-400 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full py-3.5 px-6 rounded-md bg-gold-foil text-palace-night font-sans tracking-ceremonial text-xs font-semibold uppercase shadow-xl shadow-gold-500/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 text-palace-night" />
                      <span>Transmit Inquiry to Palace Butler</span>
                    </button>
                    <p className="text-center text-[10px] font-sans text-palace-sandstone/60 mt-2">
                      Reviewed directly by the Chief Butler of Taj Lake Palace, Udaipur.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
