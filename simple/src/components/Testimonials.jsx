import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Star, Quote, ChevronDown } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#F5EFE6]/50 border-y border-stone-200/80 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
            Guest Reflections
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold mt-2 tracking-tight">
            Words From Those Who Stayed
          </h2>
          <p className="text-stone-600 mt-3 text-sm sm:text-base">
            Honest feedback from couples, writers, and families who made our inn their home away from home.
          </p>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          {siteConfig.testimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white p-7 rounded-2xl border border-stone-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 stroke-amber-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-stone-700 text-sm leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author info */}
              <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                <div>
                  <h4 className="text-xs font-bold text-stone-900">{t.name}</h4>
                  <p className="text-[11px] text-stone-500">{t.role} • {t.location}</p>
                </div>
                <span className="text-[10px] text-stone-400 font-medium">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-xs text-stone-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>4.9 / 5 Rating on Google Reviews</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>TripAdvisor Traveler's Choice 2025</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span>100% Verified Guest Stays</span>
          </div>
        </div>

      </div>
    </section>
  );
};
