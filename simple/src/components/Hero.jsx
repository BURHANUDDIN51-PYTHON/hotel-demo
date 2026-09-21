import React from 'react';
import { BedDouble, UtensilsCrossed, Sparkles, MapPin, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Hero = ({ onOpenBooking }) => {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Welcoming, Authentic Narrative */}
          <div className="lg:col-span-6 space-y-6 text-left">
            {/* Friendly pill badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-700" />
              <span>{siteConfig.established} • 24 Boutique Rooms & Garden Bistro</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-stone-900 tracking-tight leading-[1.15] font-semibold">
              Rest deeply. <br />
              Dine like family.
            </h1>

            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-xl">
              {siteConfig.heroSubtitle}
            </p>

            {/* Practical CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                onClick={() => onOpenBooking('room')}
                className="inline-flex items-center justify-center gap-2.5 bg-amber-800 hover:bg-amber-900 text-white font-medium px-7 py-3.5 rounded-xl shadow-sm hover:shadow-md transition-all active:scale-95"
              >
                <BedDouble className="w-4 h-4" />
                <span>Check Room Availability</span>
              </button>

              <button
                onClick={() => onOpenBooking('table')}
                className="inline-flex items-center justify-center gap-2.5 bg-white hover:bg-stone-50 text-stone-800 border border-stone-300 font-medium px-6 py-3.5 rounded-xl transition-all shadow-xs hover:border-stone-400"
              >
                <UtensilsCrossed className="w-4 h-4 text-amber-700" />
                <span>Reserve a Table</span>
              </button>
            </div>

            {/* Fast Trust Elements */}
            <div className="pt-4 grid grid-cols-2 gap-3 text-xs text-stone-600 border-t border-stone-200/80 max-w-lg">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Complimentary farm breakfast</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Free on-site parking & Wi-Fi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Flexible 48h cancellation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>Direct family-run service</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-6 relative">
            {/* Primary Main Photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-[4/3] bg-stone-100 group">
              <img
                src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80"
                alt="The Cedar & Stone Inn facade and surrounding greenery"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent opacity-80" />
              
              {/* Bottom badge on photo */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white p-3 rounded-xl bg-stone-900/40 backdrop-blur-md border border-white/20">
                <div className="flex items-center gap-2 text-xs font-medium">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Historic Quarter, Old Mill Town</span>
                </div>
                <span className="text-xs font-semibold bg-amber-600/90 px-2.5 py-1 rounded-md text-amber-50">
                  Open Year-Round
                </span>
              </div>
            </div>

            {/* Floating Inset Badge for Bistro/Local Vibe */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-stone-100 items-center gap-4 max-w-xs animate-in fade-in slide-in-from-bottom-3 duration-500">
              <div className="w-12 h-12 rounded-lg bg-amber-100 flex items-center justify-center text-amber-800 flex-shrink-0 font-serif text-lg font-bold">
                4.9
              </div>
              <div>
                <p className="text-xs font-bold text-stone-900">Loved by Travelers</p>
                <p className="text-[11px] text-stone-500">Over 380 verified reviews across Google & TripAdvisor</p>
              </div>
            </div>

          </div>

        </div>

        {/* Quick Highlights Strip */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-2xl bg-white border border-stone-200/80 shadow-xs">
          {siteConfig.highlights.map((item, idx) => (
            <div key={idx} className="p-3 text-left border-l-2 border-amber-700/40 pl-4">
              <span className="block text-xs font-bold text-stone-900 tracking-tight">{item.label}</span>
              <span className="block text-xs text-stone-500 mt-0.5">{item.detail}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
