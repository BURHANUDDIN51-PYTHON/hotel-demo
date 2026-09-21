import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Wifi, UtensilsCrossed, Car, Coffee, MapPin, Sparkles } from 'lucide-react';

const iconMap = {
  Wifi: Wifi,
  UtensilsCrossed: UtensilsCrossed,
  Car: Car,
  Coffee: Coffee,
  MapPin: MapPin,
  Sparkles: Sparkles,
};

export const WhyChooseUs = () => {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-[#F5EFE6]/50 border-t border-stone-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
            Thoughtful Touches
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold mt-2 tracking-tight">
            Why Guests Return to The Cedar & Stone
          </h2>
          <p className="text-stone-600 mt-3 text-sm sm:text-base">
            We focus on the simple things done really well: clean, quiet rooms, attentive service, and genuine local warmth.
          </p>
        </div>

        {/* 6 Clean Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteConfig.features.map((feature, idx) => {
            const IconComponent = iconMap[feature.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-stone-200/80 hover:border-amber-700/40 hover:shadow-md transition-all duration-300 text-left group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-800 flex items-center justify-center mb-5 group-hover:bg-amber-800 group-hover:text-white transition-colors">
                  <IconComponent className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Family assurance note */}
        <div className="mt-12 text-center text-xs text-stone-500">
          Need special accommodations, luggage holding, or high chairs? We are always here to assist our guests.
        </div>

      </div>
    </section>
  );
};
