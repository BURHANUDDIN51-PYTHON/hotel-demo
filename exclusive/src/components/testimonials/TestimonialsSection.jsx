import React from 'react';
import { pressAndReviews } from '../../data/hotelData';
import { Quote } from 'lucide-react';

export default function TestimonialsSection() {
  return (
    <section className="py-28 sm:py-36 bg-ivory-50 text-charcoal-900 border-b border-sand-300/80 paper-grain relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Subheader */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-sand-300 pb-6 mb-16 gap-4">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-bronze-700">
            <span className="font-bold">ECHOES</span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
            <span>PRESS CRITIQUES & GUEST CHRONICLES</span>
          </div>
          <span className="text-xs font-serif italic text-charcoal-600 tracking-wider">
            Reflections from those who stepped out of the clock.
          </span>
        </div>

        {/* 4 Testimonials in 2x2 Asymmetric Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
          {pressAndReviews.map((review, idx) => (
            <div
              key={idx}
              className="bg-ivory-50 border border-sand-300 p-8 sm:p-12 rounded-sm shadow-soft flex flex-col justify-between relative text-left group hover:border-bronze-400 transition-all duration-700"
            >
              {/* Subtle quote watermark */}
              <Quote className="w-14 h-14 text-sand-300/40 absolute top-8 right-8 pointer-events-none stroke-[1]" />

              <div className="space-y-5 relative z-10">
                <div className="flex items-center gap-3">
                  <span className={`text-[10px] uppercase font-mono tracking-widest px-3 py-1 rounded-full ${
                    review.type === 'press' 
                      ? 'bg-olive-100 text-olive-900 border border-olive-200' 
                      : 'bg-sand-100 text-charcoal-800 border border-sand-200'
                  }`}>
                    {review.publication}
                  </span>
                  <span className="text-xs text-charcoal-400 font-mono">• {review.date}</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-950 font-light">
                  {review.headline}
                </h3>

                <p className="font-serif italic text-base sm:text-lg text-charcoal-700 font-light leading-relaxed">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-8 mt-8 border-t border-sand-200 flex items-center justify-between text-xs">
                <span className="font-sans font-semibold tracking-wider text-charcoal-900 uppercase">
                  {review.author}
                </span>
                <span className="text-bronze-700 font-serif italic text-xs">
                  Sanctuary Archive
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
