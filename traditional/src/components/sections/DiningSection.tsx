import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, Sparkles, Clock, Wine, Award, Anchor } from 'lucide-react';
import { DINING_VENUES } from '../../data/palaceData';
import { GoldDivider } from '../common/GoldDivider';

interface DiningSectionProps {
  onOpenInquiry: (initialData?: { bespokeNotes?: string }) => void;
}

export const DiningSection: React.FC<DiningSectionProps> = ({ onOpenInquiry }) => {
  const [activeVenueId, setActiveVenueId] = useState<string>(DINING_VENUES[0].id);

  const currentVenue = DINING_VENUES.find((v) => v.id === activeVenueId) || DINING_VENUES[0];

  return (
    <section id="dining" className="relative py-28 bg-palace-dark text-palace-cream overflow-hidden">
      <div className="absolute inset-0 bg-jaali-lattice pointer-events-none opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-400">
            <Utensils className="w-4 h-4" />
            <span className="font-display text-xs tracking-ceremonial uppercase">
              Distinctive Dining at Taj Lake Palace
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-palace-marble leading-tight">
            Culinary Art Above <br />
            <span className="text-gold-gradient italic font-normal">Moonlit Waters</span>
          </h2>

          <p className="font-serif text-base sm:text-lg text-palace-sandstone/80 italic max-w-2xl mx-auto">
            "From authentic royal Mewari feasts beside the lotus pond at Neel Kamal, to open-air rooftop gastronomy at Bhairo and private cruises aboard the 150-year-old Gangaur barge."
          </p>

          <GoldDivider motif="lotus" width="sm" className="mt-4" />

          {/* Venue Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 pt-6">
            {DINING_VENUES.map((venue) => (
              <button
                key={venue.id}
                onClick={() => setActiveVenueId(venue.id)}
                className={`px-4 sm:px-5 py-2 rounded-full font-display text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeVenueId === venue.id
                    ? 'bg-gold-500 text-palace-night font-semibold shadow-lg shadow-gold-500/20 scale-105'
                    : 'border border-gold-500/30 text-gold-200/70 hover:border-gold-400 hover:text-gold-200 bg-palace-card/50'
                }`}
              >
                {venue.name}
              </button>
            ))}
          </div>
        </div>

        {/* Theatrical Venue Showcase Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentVenue.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
            className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
          >
            {/* Left: Atmospheric Photography */}
            <div className="lg:col-span-6 relative">
              <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl group">
                <img
                  src={currentVenue.image}
                  alt={currentVenue.name}
                  className="w-full aspect-[4/3] sm:aspect-[16/11] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-palace-night via-transparent to-black/20" />

                {/* Badges */}
                <div className="absolute top-5 left-5">
                  <span className="px-3.5 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase bg-palace-night/80 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                    {currentVenue.tagline}
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl palace-glass border border-gold-500/20 text-xs font-sans text-palace-sandstone/80 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gold-400">
                    <Clock className="w-4 h-4" />
                    <span>{currentVenue.timing}</span>
                  </div>
                  <span className="text-[10px] tracking-widest uppercase text-gold-500 font-medium">
                    {currentVenue.dressCode}
                  </span>
                </div>
              </div>
            </div>

            {/* Right: Narrative & Signature Dishes */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <span className="text-xs font-sans tracking-widest uppercase text-gold-400 font-medium">
                  {currentVenue.setting}
                </span>
                <h3 className="font-serif text-3xl sm:text-4xl text-palace-marble mt-1">
                  {currentVenue.name}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-palace-sandstone/85 leading-relaxed font-light">
                {currentVenue.description}
              </p>

              {/* Signature Dishes Card Showcase */}
              <div className="space-y-3 pt-2">
                <h4 className="font-display text-xs tracking-ceremonial uppercase text-gold-400 flex items-center gap-2">
                  <Award className="w-3.5 h-3.5" />
                  Executive Chef Signature Selections
                </h4>

                <div className="space-y-3">
                  {currentVenue.signatureDishes.map((dish, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-xl border border-gold-500/20 bg-palace-card/70 hover:border-gold-400/40 transition-colors space-y-1.5"
                    >
                      <div className="flex items-baseline justify-between gap-4">
                        <h5 className="font-serif text-lg text-palace-cream font-medium">
                          {dish.name}
                        </h5>
                        <span className="text-[10px] font-sans tracking-widest uppercase text-gold-400 shrink-0">
                          {dish.origin}
                        </span>
                      </div>

                      <p className="font-sans text-xs text-palace-sandstone/75 leading-relaxed font-light">
                        {dish.description}
                      </p>

                      {dish.pairing && (
                        <div className="flex items-center gap-1.5 text-[11px] font-serif italic text-gold-300/80 pt-1">
                          <Wine className="w-3 h-3 text-gold-400 shrink-0" />
                          <span>Sommelier reserve: {dish.pairing}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Reserve Table CTA */}
              <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                <button
                  onClick={() =>
                    onOpenInquiry({
                      bespokeNotes: `Dining reservation inquiry for ${currentVenue.name} at Taj Lake Palace.`,
                    })
                  }
                  className="w-full sm:w-auto px-6 py-3 rounded-md bg-gold-foil text-palace-night font-sans tracking-widest text-xs font-semibold uppercase shadow-lg shadow-gold-500/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Reserve Table</span>
                </button>

                <span className="text-xs font-serif italic text-palace-sandstone/60 text-center sm:text-left">
                  Advance table reservation recommended for non-resident and resident guests.
                </span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
