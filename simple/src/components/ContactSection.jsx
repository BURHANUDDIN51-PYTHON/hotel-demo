import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Mail, Phone, MessageSquare, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'Room Inquiry',
    dates: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage)}`;

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#F5EFE6]/60 border-t border-stone-200/80 scroll-mt-16 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
            We Are Here to Help
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold mt-2 tracking-tight">
            Reach Out to Our Family
          </h2>
          <p className="text-stone-600 mt-3 text-sm sm:text-base">
            Have questions about room availability, private events, or dietary requests at the bistro? Message us directly.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact & Instant Channels */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Box */}
            <div className="bg-white p-7 rounded-2xl border border-stone-200 shadow-xs space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Direct Contact Channels
              </h3>
              
              <div className="space-y-4">
                {/* Phone */}
                <a
                  href={`tel:${siteConfig.contact.phoneClean}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-stone-50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase font-bold text-stone-400">Call Us Directly</span>
                    <span className="text-sm font-semibold text-stone-800 group-hover:text-amber-800 transition-colors">
                      {siteConfig.contact.phone}
                    </span>
                    <span className="block text-xs text-stone-500">7:00 AM – 10:00 PM EST</span>
                  </div>
                </a>

                {/* WhatsApp Direct Action */}
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3.5 p-3 rounded-xl bg-emerald-50/70 border border-emerald-200/80 hover:bg-emerald-100/70 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase font-bold text-emerald-800">Quick WhatsApp Chat</span>
                    <span className="text-sm font-semibold text-emerald-950">Chat with Reception</span>
                    <span className="block text-xs text-emerald-700">Usually replies in under 15 minutes</span>
                  </div>
                </a>

                {/* Email */}
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-stone-50 transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-amber-50 text-amber-800 flex items-center justify-center flex-shrink-0 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase font-bold text-stone-400">Email Inquiries</span>
                    <span className="text-sm font-semibold text-stone-800 group-hover:text-amber-800 transition-colors">
                      {siteConfig.contact.email}
                    </span>
                    <span className="block text-xs text-stone-500">We respond same-day</span>
                  </div>
                </a>

                {/* Physical Address */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl">
                  <div className="w-9 h-9 rounded-lg bg-stone-100 text-stone-700 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[11px] uppercase font-bold text-stone-400">Physical Location</span>
                    <span className="text-xs font-semibold text-stone-800">
                      {siteConfig.contact.address}
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Right Column: Clean Interactive Contact Form */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-9 rounded-2xl border border-stone-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-stone-900">
                  Thank You, {formState.name || 'Friend'}!
                </h3>
                <p className="text-stone-600 text-sm max-w-md mx-auto">
                  We have received your message regarding <strong>{formState.type}</strong>. Elena or David will get back to you via email or phone within a few hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({ name: '', email: '', phone: '', type: 'Room Inquiry', dates: '', message: '' });
                  }}
                  className="mt-4 text-xs font-semibold text-amber-800 underline hover:text-amber-900"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-serif text-xl font-bold text-stone-900">
                  Send an Inquiry
                </h3>
                <p className="text-xs text-stone-500">
                  Please share your dates or party size and we'll check our live guest book.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="sarah@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-stone-700 mb-1">
                      Inquiry Type
                    </label>
                    <select
                      value={formState.type}
                      onChange={(e) => setFormState({ ...formState, type: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700 bg-white"
                    >
                      <option>Room Inquiry</option>
                      <option>Bistro Table Reservation</option>
                      <option>Private Garden Event</option>
                      <option>General Question</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Preferred Dates or Timing
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Oct 12–15 (2 adults) or Saturday 7 PM dinner"
                    value={formState.dates}
                    onChange={(e) => setFormState({ ...formState, dates: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-stone-700 mb-1">
                    Message / Special Requests
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Any questions about room features, late check-in, pet accommodation, or dietary needs..."
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-stone-200 text-stone-800 text-sm focus:outline-none focus:ring-2 focus:ring-amber-700/20 focus:border-amber-700"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-stone-900 hover:bg-amber-800 text-white font-medium py-3.5 rounded-xl transition-colors shadow-xs active:scale-[0.99]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Reception</span>
                </button>

                <p className="text-[11px] text-stone-400 text-center">
                  We respect your privacy. No marketing spam ever.
                </p>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
