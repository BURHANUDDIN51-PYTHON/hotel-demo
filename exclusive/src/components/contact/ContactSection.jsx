import React, { useState } from 'react';
import { hotelBrand } from '../../data/hotelData';
import { Phone, Mail, MessageCircle, MapPin, Check, Send, Sparkles } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Sanctuary Inquiry',
    message: ''
  });
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(true);
  };

  const handleReset = () => {
    setIsSent(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'General Sanctuary Inquiry',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-28 sm:py-36 bg-ivory-50 text-charcoal-900 paper-grain relative border-b border-sand-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-sand-300 pb-6 mb-16 gap-4">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-bronze-700">
            <span className="font-bold">LIAISON</span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
            <span>DIRECT CONCIERGE & INQUIRIES</span>
          </div>
          <span className="text-xs font-serif italic text-charcoal-600 tracking-wider">
            Attentive, discreet, and dedicated to customized stays.
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 text-left">
          
          {/* Left Column: Direct Concierge Touchpoints */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-bronze-700 font-semibold block">
                Direct Communication
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-950 font-light leading-snug">
                Attentive, Discreet, & Always at Hand
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 font-sans font-light leading-relaxed">
                Whether orchestrating a private helicopter arrival, procuring an unlisted vintage wine, or reserving our subterranean cistern, our team responds promptly.
              </p>
            </div>

            <div className="space-y-4">
              {/* Telephone */}
              <a
                href={`tel:${hotelBrand.phone}`}
                data-cursor="link"
                data-cursor-text="CALL"
                className="p-5 bg-ivory-50 border border-sand-300 rounded-sm flex items-center gap-4 hover:border-bronze-400 transition-colors group shadow-soft"
              >
                <div className="w-11 h-11 rounded-full bg-sand-100 flex items-center justify-center text-olive-900 group-hover:bg-olive-900 group-hover:text-ivory-50 transition-colors shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-luxury text-charcoal-400 block font-mono">Estate Telephone</span>
                  <span className="text-sm font-medium text-charcoal-900 group-hover:text-olive-900 transition-colors">{hotelBrand.phone}</span>
                </div>
              </a>

              {/* WhatsApp Concierge */}
              <a
                href={`https://wa.me/${hotelBrand.whatsapp.replace(/[^0-9]/g, '')}`}
                target="_blank"
                rel="noreferrer"
                data-cursor="link"
                data-cursor-text="CHAT"
                className="p-5 bg-ivory-50 border border-sand-300 rounded-sm flex items-center gap-4 hover:border-bronze-400 transition-colors group shadow-soft"
              >
                <div className="w-11 h-11 rounded-full bg-sand-100 flex items-center justify-center text-olive-900 group-hover:bg-olive-900 group-hover:text-ivory-50 transition-colors shrink-0">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-luxury text-charcoal-400 block font-mono">WhatsApp Concierge Desk</span>
                  <span className="text-sm font-medium text-charcoal-900 group-hover:text-olive-900 transition-colors">{hotelBrand.whatsapp} (Direct 24/7)</span>
                </div>
              </a>

              {/* Email */}
              <a
                href={`mailto:${hotelBrand.email}`}
                data-cursor="link"
                data-cursor-text="EMAIL"
                className="p-5 bg-ivory-50 border border-sand-300 rounded-sm flex items-center gap-4 hover:border-bronze-400 transition-colors group shadow-soft"
              >
                <div className="w-11 h-11 rounded-full bg-sand-100 flex items-center justify-center text-olive-900 group-hover:bg-olive-900 group-hover:text-ivory-50 transition-colors shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-luxury text-charcoal-400 block font-mono">Reservations & Dispatches</span>
                  <span className="text-sm font-medium text-charcoal-900 group-hover:text-olive-900 transition-colors">{hotelBrand.email}</span>
                </div>
              </a>

              {/* Physical Grounds */}
              <div className="p-5 bg-ivory-50 border border-sand-300 rounded-sm flex items-center gap-4 shadow-soft">
                <div className="w-11 h-11 rounded-full bg-sand-100 flex items-center justify-center text-olive-900 shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase tracking-luxury text-charcoal-400 block font-mono">Sanctuary Address</span>
                  <span className="text-xs sm:text-sm font-medium text-charcoal-900">{hotelBrand.address}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Inquiry Dispatch Form */}
          <div className="lg:col-span-7 bg-ivory-50 border border-sand-300 p-8 sm:p-12 rounded-sm shadow-soft">
            {isSent ? (
              <div className="py-12 text-center space-y-4 animate-fade-in-scale">
                <div className="w-14 h-14 rounded-full bg-olive-100 text-olive-900 flex items-center justify-center mx-auto border border-olive-200">
                  <Check className="w-7 h-7 stroke-[2.5]" />
                </div>
                <h4 className="font-serif text-3xl text-charcoal-950 font-light">
                  Dispatch Conveyed
                </h4>
                <p className="text-sm text-charcoal-600 max-w-md mx-auto leading-relaxed">
                  Thank you, {formData.name || 'Honored Guest'}. Our concierge office has received your note and will reply personally to <span className="font-medium text-charcoal-800">{formData.email}</span> within four hours.
                </p>
                <div className="pt-4">
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 border border-sand-300 text-xs font-semibold uppercase tracking-luxury hover:bg-sand-100"
                  >
                    Transmit Another Note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-bronze-600" />
                  <span className="text-xs font-semibold uppercase tracking-luxury text-charcoal-800">
                    Concierge Inquiry Dispatch
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Lady Genevieve / Alexander"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full p-3 bg-sand-50/60 border border-sand-300 text-xs sm:text-sm rounded-sm text-charcoal-900 focus:outline-none focus:border-bronze-500"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="guest@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full p-3 bg-sand-50/60 border border-sand-300 text-xs sm:text-sm rounded-sm text-charcoal-900 focus:outline-none focus:border-bronze-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block mb-1">
                      Telephone (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+44 7911 123456"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full p-3 bg-sand-50/60 border border-sand-300 text-xs sm:text-sm rounded-sm text-charcoal-900 focus:outline-none focus:border-bronze-500"
                    />
                  </div>

                  <div>
                    <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block mb-1">
                      Inquiry Nature
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full p-3 bg-sand-50/60 border border-sand-300 text-xs sm:text-sm rounded-sm text-charcoal-900 focus:outline-none focus:border-bronze-500"
                    >
                      <option>General Sanctuary Inquiry</option>
                      <option>Suite Reservation Inquiry</option>
                      <option>Private Estate Buyout</option>
                      <option>Maritime Llaüt Yacht Charter</option>
                      <option>Michelin Dining Table Request</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[10px] font-sans font-semibold tracking-luxury uppercase text-charcoal-500 block mb-1">
                    Your Message or Bespoke Specifications
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Describe your anticipated travel dates, preferred suite style, or specific desires..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full p-3 bg-sand-50/60 border border-sand-300 text-xs sm:text-sm rounded-sm text-charcoal-900 focus:outline-none focus:border-bronze-500"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    data-cursor="button"
                    data-cursor-text="SEND"
                    className="w-full sm:w-auto px-9 py-4 bg-olive-900 hover:bg-charcoal-950 text-ivory-50 text-xs font-semibold uppercase tracking-luxury transition-all flex items-center justify-center gap-2 shadow-md"
                  >
                    <span>Transmit to Head Concierge</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
