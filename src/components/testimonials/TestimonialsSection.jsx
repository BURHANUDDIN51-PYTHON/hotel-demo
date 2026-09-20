import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { pressAndReviews } from '../../data/hotelData';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-24 sm:py-32 bg-ivory-100/70 text-charcoal-900 border-y border-sand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="GUEST CHRONICLES & PRESS"
          title="Echoes of Stillness"
          subtitle="Reflections from those who stepped out of the clock and into the rhythm of the stone."
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {pressAndReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-ivory-50 border border-sand-200/90 p-8 sm:p-10 rounded-sm shadow-soft flex flex-col justify-between relative text-left group hover:border-bronze-400/80 transition-all duration-300"
            >
              {/* Large quote watermark in background */}
              <Quote className="w-12 h-12 text-sand-200/60 absolute top-6 right-6 pointer-events-none stroke-[1.5]" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] uppercase font-mono tracking-widest px-2.5 py-0.5 rounded-full ${
                    review.type === 'press' 
                      ? 'bg-olive-100 text-olive-800' 
                      : 'bg-sand-200 text-charcoal-700'
                  }`}>
                    {review.publication}
                  </span>
                  <span className="text-xs text-charcoal-400 font-sans">• {review.date}</span>
                </div>

                <h3 className="font-serif text-xl sm:text-2xl text-charcoal-950 font-normal">
                  {review.headline}
                </h3>

                <p className="font-serif italic text-base sm:text-lg text-charcoal-700 font-light leading-relaxed">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-sand-200/80 flex items-center justify-between text-xs">
                <span className="font-sans font-semibold tracking-wider text-charcoal-900 uppercase">
                  {review.author}
                </span>
                <span className="text-bronze-600 font-serif italic text-xs">
                  Maison Sylvan Archive
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
