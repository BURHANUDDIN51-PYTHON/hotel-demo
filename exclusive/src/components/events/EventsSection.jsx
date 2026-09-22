import React, { useState } from 'react';
import { eventsData } from '../../data/hotelData';
import { Users, Calendar, ArrowRight, Check, Shield } from 'lucide-react';
import Modal from '../common/Modal';

export default function EventsSection() {
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [selectedEventType, setSelectedEventType] = useState('Estate Buyout (All 24 Suites)');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    setInquiryModalOpen(false);
  };

  return (
    <section id="events" className="py-28 sm:py-36 bg-ivory-50 text-charcoal-900 paper-grain border-b border-sand-300/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-sand-300 pb-6 mb-16 gap-4">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-bronze-700">
            <span className="font-bold">CH. 08</span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
            <span>PRIVATE GATHERINGS & BUYOUTS — LES GALA</span>
          </div>
          <span className="text-xs font-serif italic text-charcoal-600 tracking-wider">
            An exclusive canvas for nuptials, creative salons, and reunions.
          </span>
        </div>

        {/* 3 Pillars Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {eventsData.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-ivory-50 border border-sand-300 rounded-sm overflow-hidden flex flex-col justify-between group hover:border-bronze-500 transition-all duration-700 shadow-soft"
            >
              <div className="h-64 overflow-hidden relative bg-sand-200">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-editorial"
                  loading="lazy"
                  data-cursor="view"
                  data-cursor-text="GATHER"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-3 left-3 px-3 py-1 bg-ivory-50/95 backdrop-blur-sm text-charcoal-900 text-[10px] uppercase font-mono tracking-wider">
                  {pillar.capacity}
                </div>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between text-left space-y-4">
                <div>
                  <h3 className="font-serif text-2xl text-charcoal-950 font-light mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-charcoal-600 font-sans font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-300">
                  <button
                    onClick={() => {
                      setSelectedEventType(pillar.title);
                      setInquiryModalOpen(true);
                    }}
                    data-cursor="button"
                    data-cursor-text="DOSSIER"
                    className="text-xs uppercase tracking-luxury font-medium text-olive-900 hover:text-charcoal-950 flex items-center gap-1.5 transition-colors group/link"
                  >
                    <span>Request Dossier</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Private Estate Buyout Statement Banner */}
        <div className="p-8 sm:p-14 bg-olive-950 text-ivory-50 rounded-sm flex flex-col lg:flex-row items-center justify-between gap-8 text-left relative overflow-hidden shadow-elevated">
          <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-olive-900/30 rounded-full blur-3xl pointer-events-none" />
          
          <div className="space-y-4 max-w-2xl relative z-10">
            <span className="text-[10px] tracking-ultra uppercase text-bronze-300 font-mono">
              EXCLUSIVITY • FULL ESTATE PRIVATIZATION
            </span>
            <h3 className="font-serif text-3xl sm:text-5xl font-light text-ivory-50 leading-tight">
              Your Own Private Mediterranean Kingdom
            </h3>
            <p className="text-sm sm:text-base text-sand-200/90 font-light leading-relaxed">
              Reserving all 24 sanctuaries grants your inner circle absolute freedom. Complete seclusion, bespoke culinary itineraries by Chef Matteo, and dedicated private boat expeditions.
            </p>
          </div>

          <div className="shrink-0 relative z-10 w-full lg:w-auto">
            <button
              onClick={() => {
                setSelectedEventType('Full Estate Buyout (24 Suites)');
                setInquiryModalOpen(true);
              }}
              data-cursor="button"
              data-cursor-text="CONSULT"
              className="w-full sm:w-auto px-9 py-4 bg-bronze-400 hover:bg-bronze-300 text-charcoal-950 font-semibold text-xs tracking-luxury uppercase transition-all shadow-lg"
            >
              Consult Event Director
            </button>
          </div>
        </div>

      </div>

      {/* Event Inquiries Modal */}
      <Modal
        isOpen={inquiryModalOpen}
        onClose={handleClose}
        title={submitted ? "Inquiry Transmitted" : "Private Gatherings Dossier"}
        subtitle={selectedEventType}
        maxWidth="max-w-xl"
      >
        {submitted ? (
          <div className="text-center py-6 space-y-4">
            <div className="w-12 h-12 rounded-full bg-olive-100 text-olive-800 flex items-center justify-center mx-auto border border-olive-200">
              <Check className="w-6 h-6" />
            </div>
            <h4 className="font-serif text-2xl text-charcoal-900">
              Dossier Requested
            </h4>
            <p className="text-xs sm:text-sm text-charcoal-600 max-w-sm mx-auto">
              Our Gatherings Director will contact you within 24 hours with floorplans, seasonal catering options, and private buyout rates.
            </p>
            <button
              onClick={handleClose}
              className="px-6 py-2.5 bg-olive-900 text-ivory-50 text-xs uppercase tracking-luxury font-semibold"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-left">
            <p className="text-xs text-charcoal-600">
              Please share approximate dates and guest count so our event curator can prepare a customized presentation.
            </p>

            <div>
              <label className="text-[10px] font-semibold uppercase tracking-luxury text-charcoal-500 block mb-1">
                Event Format
              </label>
              <input
                type="text"
                readOnly
                value={selectedEventType}
                className="w-full p-2.5 bg-sand-100 border border-sand-300 text-xs rounded-sm text-charcoal-800"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-luxury text-charcoal-500 block mb-1">
                  Target Season / Dates
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Spring 2027 / October"
                  className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-luxury text-charcoal-500 block mb-1">
                  Estimated Attendees
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 20-50 guests"
                  className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-luxury text-charcoal-500 block mb-1">
                  Contact Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm"
                />
              </div>
              <div>
                <label className="text-[10px] font-semibold uppercase tracking-luxury text-charcoal-500 block mb-1">
                  Direct Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="email@domain.com"
                  className="w-full p-2.5 bg-ivory-50 border border-sand-300 text-xs rounded-sm"
                />
              </div>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 border border-sand-300 text-xs uppercase tracking-luxury"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2.5 bg-olive-900 text-ivory-50 text-xs font-semibold uppercase tracking-luxury"
              >
                Send Dossier Request
              </button>
            </div>
          </form>
        )}
      </Modal>
    </section>
  );
}
