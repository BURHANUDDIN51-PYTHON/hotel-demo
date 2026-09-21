import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ChevronDown, Clock, Moon } from 'lucide-react';
import { PALACE_IMAGERY } from '../../data/imagery';
import { PALACE_INFO } from '../../data/palaceData';
import type { AtmosphereMode } from '../../types';

interface HeroSectionProps {
  atmosphereMode: AtmosphereMode;
  onOpenInquiry: (initialData?: { checkIn?: string; checkOut?: string; suite?: string; guests?: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  atmosphereMode,
  onOpenInquiry,
}) => {
  const [udaipurTime, setUdaipurTime] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [selectedSuite, setSelectedSuite] = useState('The Shambhu Prakash Suite');
  const [guests, setGuests] = useState('2 Guests');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setUdaipurTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const heroImageMap: Record<AtmosphereMode, string> = {
    surya: PALACE_IMAGERY.heroDawn,
    sandhya: PALACE_IMAGERY.heroDusk,
    chandra: PALACE_IMAGERY.heroNight,
  };

  const modeDescriptions: Record<AtmosphereMode, { label: string; poem: string }> = {
    surya: {
      label: 'Surya • Dawn on Pichola',
      poem: 'When the first rays of morning strike the white marble jharokhas of Jag Niwas.',
    },
    sandhya: {
      label: 'Sandhya • Sunset Golden Hour',
      poem: 'Arriving by private boat across Lake Pichola as the Aravalli hills catch fire in amber light.',
    },
    chandra: {
      label: 'Chandra • Moonlit Sanctuary',
      poem: 'A four-acre island of Makrana marble glowing serenely under the desert constellations.',
    },
  };

  const handleQuickInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenInquiry({
      checkIn,
      checkOut,
      suite: selectedSuite,
      guests,
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden pt-28 pb-12">
      {/* Background Image with Cinematic Pacing */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          key={atmosphereMode}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: 'easeOut' }}
          className="w-full h-full"
        >
          <img
            src={heroImageMap[atmosphereMode]}
            alt="Taj Lake Palace floating on Lake Pichola, Udaipur"
            className="w-full h-full object-cover object-center transform scale-105"
          />
        </motion.div>

        {/* Layered Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-palace-night via-palace-night/45 to-palace-night/65" />
        <div className="absolute inset-0 bg-radial-vignette opacity-80 pointer-events-none" />
        <div className="absolute inset-0 bg-jaali-lattice pointer-events-none" />
      </div>

      {/* Top Status Indicators: Real Udaipur Local Time & Setting */}
      <div className="max-w-7xl mx-auto px-6 w-full flex items-center justify-between text-[11px] font-sans text-gold-300/80 tracking-widest uppercase">
        <div className="flex items-center gap-2 palace-glass-subtle px-3.5 py-1 rounded-full">
          <Clock className="w-3.5 h-3.5 text-gold-400" />
          <span>Udaipur: {udaipurTime || 'Calculating...'} IST</span>
        </div>

        <div className="hidden sm:flex items-center gap-2 palace-glass-subtle px-3.5 py-1 rounded-full">
          <Moon className="w-3.5 h-3.5 text-gold-400" />
          <span>{modeDescriptions[atmosphereMode].label}</span>
        </div>

        <div className="hidden md:flex items-center gap-2 palace-glass-subtle px-3.5 py-1 rounded-full">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Lake Pichola Waters • Jag Niwas</span>
        </div>
      </div>

      {/* Central Poetic Narrative */}
      <div className="max-w-5xl mx-auto px-6 text-center my-auto py-12 space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-400/40 bg-palace-card/70 backdrop-blur-md"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
          <span className="font-display tracking-ceremonial text-xs uppercase text-gold-300 font-medium">
            Jag Niwas • Built 1746 by Maharana Jagat Singh II
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-gold-400" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-palace-marble tracking-tight font-light leading-[1.08]"
        >
          The Floating Jewel of <br />
          <span className="text-gold-gradient italic font-normal">Lake Pichola</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="font-serif text-lg sm:text-2xl text-palace-sandstone/90 max-w-3xl mx-auto italic font-light leading-relaxed"
        >
          "{modeDescriptions[atmosphereMode].poem}"
        </motion.p>
      </div>

      {/* Floating Quick Reservation Console with Real Suites */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="palace-glass rounded-xl p-4 sm:p-6 shadow-2xl border border-gold-500/30"
        >
          <form
            onSubmit={handleQuickInquiry}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end"
          >
            {/* Arrival Date */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-sans uppercase tracking-widest text-gold-400/90 font-medium">
                Arrival at Jetty
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3 py-2.5 text-xs text-palace-cream focus:border-gold-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Departure Date */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-sans uppercase tracking-widest text-gold-400/90 font-medium">
                Departure
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3 py-2.5 text-xs text-palace-cream focus:border-gold-400 focus:outline-none transition-colors"
              />
            </div>

            {/* Authentic Suite Category */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-sans uppercase tracking-widest text-gold-400/90 font-medium">
                Palace Suite
              </label>
              <select
                value={selectedSuite}
                onChange={(e) => setSelectedSuite(e.target.value)}
                className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3 py-2.5 text-xs text-palace-cream focus:border-gold-400 focus:outline-none transition-colors cursor-pointer"
              >
                <option value="The Shambhu Prakash Suite">Shambhu Prakash Presidential Suite (1,800 sq.ft)</option>
                <option value="Mayur Mahal (The Peacock Suite)">Mayur Mahal (Peacock Suite)</option>
                <option value="Khush Mahal (Queen's Suite)">Khush Mahal (Queen's Suite)</option>
                <option value="Sajjan Niwas Suite">Sajjan Niwas Suite (Lake View)</option>
              </select>
            </div>

            {/* Guests */}
            <div className="space-y-1.5">
              <label className="block text-[10px] font-sans uppercase tracking-widest text-gold-400/90 font-medium">
                Guests
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full bg-palace-dark/90 border border-gold-500/30 rounded px-3 py-2.5 text-xs text-palace-cream focus:border-gold-400 focus:outline-none transition-colors cursor-pointer"
              >
                <option value="1 Guest">1 Guest</option>
                <option value="2 Guests">2 Guests</option>
                <option value="3 Guests">3 Guests</option>
                <option value="Family / Entourage">Family & Entourage (4+)</option>
              </select>
            </div>

            {/* Submit CTA */}
            <div>
              <button
                type="submit"
                className="w-full py-2.5 px-4 rounded bg-gold-foil text-palace-night font-sans tracking-widest text-xs font-semibold uppercase shadow-lg shadow-gold-500/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-palace-night" />
                <span>Check Residence</span>
              </button>
            </div>
          </form>
        </motion.div>

        {/* Subtle Scroll Cue */}
        <div className="flex flex-col items-center justify-center pt-6 text-gold-400/60 hover:text-gold-300 transition-colors">
          <a href="#legacy" className="flex flex-col items-center gap-1 group">
            <span className="text-[10px] font-sans tracking-ceremonial uppercase">
              Discover Jag Niwas
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce group-hover:text-gold-300" />
          </a>
        </div>
      </div>
    </section>
  );
};
