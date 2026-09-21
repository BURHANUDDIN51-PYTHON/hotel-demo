import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { TESTIMONIALS } from '../../data/palaceData';
import { GoldDivider } from '../common/GoldDivider';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const current = TESTIMONIALS[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="relative py-28 bg-palace-night text-palace-cream overflow-hidden border-t border-gold-500/15">
      {/* Background Lattice */}
      <div className="absolute inset-0 bg-jaali-lattice pointer-events-none opacity-10" />

      <div className="relative max-w-5xl mx-auto px-6 sm:px-12 text-center">
        {/* Top Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-400">
            <Award className="w-4 h-4" />
            <span className="font-display text-xs tracking-ceremonial uppercase">
              Chapter VIII • The Royal Ledger
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl font-light text-palace-marble">
            Handwritten Memoirs of <br />
            <span className="text-gold-gradient italic font-normal">Distinguished Patrons</span>
          </h2>

          <GoldDivider motif="minimal" width="sm" className="mt-4" />
        </div>

        {/* Testimonial Memoir Carousel Display */}
        <div className="mt-16 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Giant Serif Quote Glyph */}
              <div className="flex justify-center text-gold-500/40">
                <Quote className="w-12 h-12 rotate-180" />
              </div>

              {/* Poetic Quote Body */}
              <blockquote className="font-serif text-xl sm:text-3xl lg:text-4xl text-palace-cream font-light italic leading-relaxed max-w-4xl mx-auto">
                "{current.quote}"
              </blockquote>

              {/* Author Attribution & Royal Wax Seal */}
              <div className="pt-6 flex flex-col items-center space-y-3">
                {/* Wax Seal Emblem */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gold-400/40 bg-palace-card text-[10px] font-display tracking-widest text-gold-400 uppercase shadow-inner">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
                  <span>{current.sealText}</span>
                </div>

                <div>
                  <p className="font-serif text-2xl text-gold-gradient font-medium">
                    {current.author}
                  </p>
                  <p className="font-sans text-xs text-palace-sandstone/70 tracking-widest uppercase mt-0.5">
                    {current.title} • {current.city} ({current.date})
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full border border-gold-500/30 text-gold-300 hover:border-gold-400 hover:bg-palace-surface transition-all cursor-pointer"
              aria-label="Previous Memoir"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                    currentIndex === i ? 'w-6 bg-gold-400' : 'bg-gold-500/30'
                  }`}
                  aria-label={`Go to memoir ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="p-3 rounded-full border border-gold-500/30 text-gold-300 hover:border-gold-400 hover:bg-palace-surface transition-all cursor-pointer"
              aria-label="Next Memoir"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
