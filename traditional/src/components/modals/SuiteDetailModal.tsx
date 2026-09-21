import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Check, Crown, Maximize2, Users, Waves } from 'lucide-react';
import type { Suite } from '../../types';

interface SuiteDetailModalProps {
  suite: Suite | null;
  isOpen: boolean;
  onClose: () => void;
  onSelectForBooking: (suiteName: string) => void;
}

export const SuiteDetailModal: React.FC<SuiteDetailModalProps> = ({
  suite,
  isOpen,
  onClose,
  onSelectForBooking,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  if (!suite) return null;

  const handleBook = () => {
    onClose();
    onSelectForBooking(suite.name);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-palace-night/90 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.35 }}
            className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-palace-card border border-gold-500/30 rounded-2xl shadow-2xl z-10 text-palace-cream my-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-full bg-palace-night/80 border border-gold-500/40 text-gold-300 hover:text-white hover:bg-gold-500 hover:text-palace-night transition-all cursor-pointer"
              aria-label="Close Suite Details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top Showcase Imagery */}
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full overflow-hidden">
              <img
                src={suite.gallery[activeImageIndex] || suite.image}
                alt={suite.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-palace-card via-transparent to-black/30" />

              {/* Badges */}
              <div className="absolute top-6 left-6 flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase bg-palace-night/80 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                  Taj Lake Palace Suite
                </span>
                <span className="px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase bg-palace-night/80 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                  {suite.size}
                </span>
              </div>

              {/* Gallery Thumbnails */}
              <div className="absolute bottom-4 right-6 flex items-center gap-2">
                {suite.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-12 h-8 rounded overflow-hidden border transition-all cursor-pointer ${
                      activeImageIndex === idx
                        ? 'border-gold-400 scale-105 shadow-md shadow-gold-500/30'
                        : 'border-white/30 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="Thumbnail" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-10 space-y-8">
              {/* Header Title & Pricing */}
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-gold-500/20 pb-6">
                <div>
                  <p className="font-display text-xs tracking-ceremonial uppercase text-gold-400 font-medium">
                    {suite.subheading}
                  </p>
                  <h3 className="font-serif text-3xl sm:text-4xl text-palace-marble mt-1">
                    {suite.name}
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 mt-3 text-xs text-palace-sandstone/80 font-sans">
                    <span className="flex items-center gap-1.5">
                      <Maximize2 className="w-3.5 h-3.5 text-gold-400" />
                      {suite.size}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Waves className="w-3.5 h-3.5 text-gold-400" />
                      {suite.view}
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-gold-400" />
                      {suite.occupancy}
                    </span>
                  </div>
                </div>

                <div className="sm:text-right">
                  <p className="text-[11px] font-sans tracking-widest text-gold-400/80 uppercase">
                    Tariff of Residence
                  </p>
                  <p className="font-serif text-2xl text-gold-gradient font-medium">
                    {suite.priceStarting}
                  </p>
                </div>
              </div>

              {/* Editorial Description & Quote */}
              <div className="space-y-4">
                <p className="font-sans text-sm sm:text-base text-palace-sandstone/90 leading-relaxed font-light">
                  {suite.description}
                </p>
                <div className="p-4 rounded-xl border border-gold-500/20 bg-palace-dark/50 italic font-serif text-sm text-gold-200/90">
                  "{suite.quote}"
                </div>
              </div>

              {/* Architectural Features */}
              <div className="space-y-3">
                <h4 className="font-display text-xs tracking-ceremonial uppercase text-gold-400 flex items-center gap-2">
                  <Crown className="w-3.5 h-3.5" />
                  Mewar Architecture & Inclusions
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {suite.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg border border-gold-500/15 bg-palace-surface/40 text-xs font-sans text-palace-sandstone/85"
                    >
                      <Check className="w-3.5 h-3.5 text-gold-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Taj Butler Privileges */}
              <div className="space-y-3">
                <h4 className="font-display text-xs tracking-ceremonial uppercase text-gold-400 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5" />
                  Taj Royal Butler Privileges
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {suite.amenities.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-gold-500/20 bg-palace-dark/60 space-y-1"
                    >
                      <p className="font-serif text-base text-palace-cream font-medium">
                        {item.title}
                      </p>
                      <p className="font-sans text-xs text-palace-sandstone/70 leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-6 border-t border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs font-serif italic text-palace-sandstone/70 text-center sm:text-left">
                  Includes private boat transfer across Lake Pichola and traditional ceremonial welcome.
                </p>

                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={onClose}
                    className="flex-1 sm:flex-none px-6 py-3 rounded-md border border-gold-500/30 text-xs font-sans tracking-widest uppercase hover:bg-palace-surface transition-colors cursor-pointer"
                  >
                    Return to Palace
                  </button>

                  <button
                    onClick={handleBook}
                    className="flex-1 sm:flex-none px-8 py-3 rounded-md bg-gold-foil text-palace-night font-sans tracking-widest text-xs font-semibold uppercase shadow-xl shadow-gold-500/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Inquire for Stay</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
