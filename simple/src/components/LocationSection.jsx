import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { MapPin, Navigation, Clock, Car, Phone, Mail, Compass, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const LocationSection = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (idx) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <section id="location" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16 text-left">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
          Find Us & Planning Your Visit
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold mt-2 tracking-tight">
          How to Reach The Cedar & Stone
        </h2>
        <p className="text-stone-600 mt-3 text-sm sm:text-base">
          Quietly tucked off the main highway along Millpond Lane, minutes on foot from town galleries, bakeries, and walking trails.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Map Preview & Practical Directions */}
        <div className="lg:col-span-7 space-y-6">
          
          {/* Interactive Map Visual Placeholder */}
          <div className="relative rounded-2xl overflow-hidden border border-stone-200 shadow-sm bg-stone-100 aspect-[16/10]">
            <img
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80"
              alt="Map area overview and scenic countryside surrounding the inn"
              className="w-full h-full object-cover opacity-90"
              loading="lazy"
            />
            
            {/* Map Overlay Card */}
            <div className="absolute inset-0 bg-stone-950/30 flex items-center justify-center p-4">
              <div className="bg-white/95 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-stone-200 max-w-sm text-center">
                <div className="w-10 h-10 rounded-full bg-amber-800 text-white flex items-center justify-center mx-auto mb-3 shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900">{siteConfig.name}</h3>
                <p className="text-xs text-stone-600 mt-1">{siteConfig.contact.address}</p>
                <div className="mt-4 pt-4 border-t border-stone-100 flex justify-center gap-3">
                  <a
                    href={siteConfig.contact.mapDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-amber-800 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                  >
                    <Navigation className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Nearby Landmarks & Walk Times */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 mb-4">
              <Compass className="w-4 h-4 text-amber-700" />
              <span>What's Nearby & Distances</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {siteConfig.nearbyAttractions.map((att, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-lg bg-stone-50 border border-stone-100">
                  <span className="font-medium text-stone-800">{att.name}</span>
                  <span className="text-stone-500">{att.time}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Right: Hours, Parking & Practical FAQs */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Hours Card */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700">
              <Clock className="w-4 h-4 text-amber-700" />
              <span>Timings & Hospitality Hours</span>
            </div>

            <div className="space-y-3 text-xs text-stone-700 divide-y divide-stone-100">
              <div className="pt-2 flex justify-between">
                <span className="font-medium text-stone-500">Reception Desk:</span>
                <span className="font-semibold text-stone-900">{siteConfig.hours.reception}</span>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="font-medium text-stone-500">Check-in / Check-out:</span>
                <span className="font-semibold text-stone-900">{siteConfig.hours.checkIn} / {siteConfig.hours.checkOut}</span>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="font-medium text-stone-500">Farmhouse Breakfast:</span>
                <span className="font-semibold text-stone-900">{siteConfig.hours.breakfast}</span>
              </div>
              <div className="pt-2 flex justify-between">
                <span className="font-medium text-stone-500">Garden Bistro Dinner:</span>
                <span className="font-semibold text-stone-900">{siteConfig.hours.bistroDinner}</span>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-100 text-xs text-stone-500 flex items-start gap-2">
              <Car className="w-4 h-4 text-amber-700 flex-shrink-0 mt-0.5" />
              <span>{siteConfig.contact.parkingNote}</span>
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-stone-700 mb-4">
              <HelpCircle className="w-4 h-4 text-amber-700" />
              <span>Guest FAQ</span>
            </div>

            <div className="space-y-3">
              {siteConfig.faqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border-b border-stone-100 pb-3 last:border-0 last:pb-0">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between text-left text-xs font-bold text-stone-800 hover:text-amber-800 transition-colors py-1"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-stone-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-stone-400 flex-shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <p className="text-xs text-stone-600 mt-2 leading-relaxed animate-in fade-in duration-200">
                        {faq.a}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
