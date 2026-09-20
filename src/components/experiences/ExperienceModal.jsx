import React, { useState } from 'react';
import Modal from '../common/Modal';
import { Clock, Calendar, Check, ArrowRight } from 'lucide-react';

export default function ExperienceModal({ isOpen, onClose, experience }) {
  const [requested, setRequested] = useState(false);
  const [guestName, setGuestName] = useState('');
  const [preferredDate, setPreferredDate] = useState('');

  if (!experience) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setRequested(true);
  };

  const handleClose = () => {
    setRequested(false);
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      title={experience.title}
      subtitle={experience.category}
      maxWidth="max-w-3xl"
    >
      {requested ? (
        <div className="text-center py-8 space-y-4">
          <div className="w-14 h-14 rounded-full bg-olive-100 text-olive-800 flex items-center justify-center mx-auto mb-2 border border-olive-200">
            <Check className="w-7 h-7 stroke-[2.5]" />
          </div>
          <h4 className="font-serif text-2xl text-charcoal-900 font-light">
            Experience Inquired
          </h4>
          <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
            Thank you, {guestName || 'Guest'}. Our Head Concierge has received your request for <strong className="text-charcoal-800">{experience.title}</strong> and will confirm availability with your stay.
          </p>
          <div className="pt-4">
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-olive-800 text-ivory-50 text-xs font-semibold uppercase tracking-luxury hover:bg-olive-900 transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      ) : (
        <div className="space-y-6 text-left">
          {/* Main Image */}
          <div className="h-64 sm:h-72 w-full overflow-hidden rounded-sm relative bg-sand-200">
            <img
              src={experience.image}
              alt={experience.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 px-3 py-1 bg-charcoal-950/80 text-ivory-50 text-[10px] uppercase tracking-luxury">
              {experience.badge}
            </div>
          </div>

          {/* Quick info row */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-charcoal-600 border-b border-sand-200 pb-4">
            <div className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-bronze-600" />
              <span>Duration: <strong className="text-charcoal-800">{experience.duration}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-bronze-600" />
              <span>Schedule: <strong className="text-charcoal-800">{experience.schedule}</strong></span>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-luxury font-sans font-semibold text-charcoal-800">
              The Ritual
            </h4>
            <p className="font-sans text-charcoal-700 text-sm sm:text-base font-light leading-relaxed">
              {experience.description}
            </p>
          </div>

          {/* Key Details list */}
          <div className="space-y-2">
            <h4 className="text-xs uppercase tracking-luxury font-sans font-semibold text-charcoal-800">
              Experience Inclusions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-600">
              {experience.details.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive-700 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Concierge Inquiry Form */}
          <form onSubmit={handleSubmit} className="p-4 bg-sand-100/70 border border-sand-200 rounded-sm space-y-4">
            <div className="text-xs font-semibold uppercase tracking-luxury text-charcoal-800">
              Request with Head Concierge
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <input
                type="text"
                required
                placeholder="Your Name / Suite #"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm focus:outline-none focus:border-bronze-500"
              />
              <input
                type="date"
                required
                value={preferredDate}
                onChange={(e) => setPreferredDate(e.target.value)}
                className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm focus:outline-none focus:border-bronze-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-olive-800 hover:bg-olive-900 text-ivory-50 text-xs font-semibold uppercase tracking-luxury transition-all flex items-center justify-center gap-2"
            >
              <span>Submit Experience Request</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </Modal>
  );
}
