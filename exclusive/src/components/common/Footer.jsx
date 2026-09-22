import React, { useState } from 'react';
import { hotelBrand } from '../../data/hotelData';
import { ArrowUpRight, Check, Sparkles, Feather } from 'lucide-react';

export default function Footer({ onOpenBooking }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="bg-charcoal-950 text-ivory-50 pt-24 pb-14 border-t border-charcoal-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top Editorial Dispatch Bar */}
        <div className="pb-16 mb-16 border-b border-charcoal-800 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-3 text-left">
            <span className="text-[10px] font-mono tracking-ultra uppercase text-bronze-400 block">
              THE SEASONAL DISPATCHES
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-light text-ivory-50 leading-snug">
              Invitations to Seasonal Harvests & Solstice Gatherings
            </h3>
            <p className="text-xs sm:text-sm text-sand-300/80 font-sans font-light max-w-lg">
              Published quarterly. Notes from our stone olive mills, rare cellar releases, and quiet seasonal openings.
            </p>
          </div>

          <div className="lg:col-span-6">
            {subscribed ? (
              <div className="p-5 bg-charcoal-900 border border-charcoal-800 text-left flex items-center gap-3">
                <Check className="w-5 h-5 text-bronze-400 shrink-0" />
                <span className="text-xs text-sand-200">
                  You are inscribed for our seasonal dispatches. Welcome to the inner circle.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-4 py-3.5 bg-charcoal-900 border border-charcoal-700 text-xs sm:text-sm text-ivory-50 rounded-sm focus:outline-none focus:border-bronze-400 flex-1"
                />
                <button
                  type="submit"
                  data-cursor="button"
                  data-cursor-text="JOIN"
                  className="px-8 py-3.5 bg-bronze-400 hover:bg-bronze-300 text-charcoal-950 font-semibold text-xs tracking-luxury uppercase transition-all shrink-0"
                >
                  Inscribe
                </button>
              </form>
            )}
          </div>
        </div>

        {/* 5 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 text-left pb-16 border-b border-charcoal-800 text-xs">
          
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <span className="font-serif text-2xl tracking-[0.24em] text-ivory-50 block">
              {hotelBrand.name}
            </span>
            <p className="text-sand-300/80 font-light leading-relaxed max-w-sm">
              An intimate 24-suite architectural sanctuary set amidst the UNESCO-protected olive terraces of Deià. Restored with respect for stillness, natural Marés limestone, and Balearic sea breezes.
            </p>
            <div className="pt-2 text-[11px] text-bronze-400 font-mono">
              GPS: {hotelBrand.coordinates}
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-luxury text-sand-200">
              The Sanctuary
            </h4>
            <ul className="space-y-2 text-sand-400 font-light">
              <li><a href="#hero" className="hover:text-ivory-50 transition-colors">Prologue</a></li>
              <li><a href="#story" className="hover:text-ivory-50 transition-colors">The Manifesto</a></li>
              <li><a href="#spaces" className="hover:text-ivory-50 transition-colors">Atmosphere & Spaces</a></li>
              <li><a href="#suites" className="hover:text-ivory-50 transition-colors">The 24 Sanctuaries</a></li>
              <li><a href="#dining" className="hover:text-ivory-50 transition-colors">L'Atelier de Terre</a></li>
              <li><a href="#gallery" className="hover:text-ivory-50 transition-colors">Visual Chronicles</a></li>
            </ul>
          </div>

          {/* Gatherings */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-luxury text-sand-200">
              Gatherings
            </h4>
            <ul className="space-y-2 text-sand-400 font-light">
              <li><a href="#events" className="hover:text-ivory-50 transition-colors">Full Estate Buyouts</a></li>
              <li><a href="#events" className="hover:text-ivory-50 transition-colors">Intimate Nuptials</a></li>
              <li><a href="#events" className="hover:text-ivory-50 transition-colors">Executive Salons</a></li>
              <li><a href="#experiences" className="hover:text-ivory-50 transition-colors">Llaüt Yacht Charters</a></li>
              <li><a href="#location" className="hover:text-ivory-50 transition-colors">Helipad Coordination</a></li>
            </ul>
          </div>

          {/* Direct Liaison */}
          <div className="space-y-3">
            <h4 className="font-sans text-[11px] font-semibold uppercase tracking-luxury text-sand-200">
              Concierge Desk
            </h4>
            <ul className="space-y-2 text-sand-400 font-light">
              <li><a href={`tel:${hotelBrand.phone}`} className="hover:text-ivory-50 transition-colors">{hotelBrand.phone}</a></li>
              <li><a href={`mailto:${hotelBrand.email}`} className="hover:text-ivory-50 transition-colors">{hotelBrand.email}</a></li>
              <li><span className="text-sand-400">{hotelBrand.address}</span></li>
              <li className="pt-2">
                <button
                  onClick={onOpenBooking}
                  data-cursor="button"
                  data-cursor-text="BOOK"
                  className="text-bronze-400 font-semibold tracking-wider uppercase hover:underline flex items-center gap-1.5"
                >
                  <span>Check Sanctuary Availability</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-sand-400/70 font-light gap-4">
          <div>
            © {new Date().getFullYear()} {hotelBrand.name} Sanctuary & Spa. All rights reserved. Member of The Heritage Sanctuaries.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#story" className="hover:text-sand-200 transition-colors">Ethos</a>
            <a href="#contact" className="hover:text-sand-200 transition-colors">Privacy Charter</a>
            <a href="#location" className="hover:text-sand-200 transition-colors">UNESCO Stewardship</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
