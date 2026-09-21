import React from 'react';
import { motion } from 'framer-motion';
import { Crown, Sparkles, Compass, Shield, Waves, Sun, Anchor } from 'lucide-react';
import { SIGNATURE_HIGHLIGHTS } from '../../data/palaceData';
import { PALACE_IMAGERY } from '../../data/imagery';
import { GoldDivider } from '../common/GoldDivider';

export const SignatureHighlights: React.FC = () => {
  const icons = [
    <Waves className="w-5 h-5 text-gold-400" />,
    <Sparkles className="w-5 h-5 text-gold-400" />,
    <Sun className="w-5 h-5 text-gold-400" />,
    <Anchor className="w-5 h-5 text-gold-400" />,
  ];

  return (
    <section id="highlights" className="relative py-28 bg-palace-dark text-palace-cream overflow-hidden">
      <div className="absolute inset-0 bg-jaali-lattice pointer-events-none opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-400">
            <Crown className="w-4 h-4" />
            <span className="font-display text-xs tracking-ceremonial uppercase">
              Architectural Marvel • Jag Niwas
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-palace-marble leading-tight">
            An Island Suspended in <br />
            <span className="text-gold-gradient italic font-normal">Marble & Legend</span>
          </h2>

          <p className="font-serif text-base sm:text-lg text-palace-sandstone/80 italic max-w-2xl mx-auto">
            "Four acres of white Makrana marble rising directly out of Lake Pichola. Designed in 1746 to be an unbroken sanctuary of beauty, breeze, and light."
          </p>

          <GoldDivider motif="lotus" width="sm" className="mt-4" />
        </div>

        {/* 4 Signature Moments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          {SIGNATURE_HIGHLIGHTS.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="p-8 rounded-2xl border border-gold-500/20 bg-palace-card/50 hover:border-gold-400/50 transition-all duration-500 space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="p-3 rounded-xl border border-gold-500/30 bg-palace-surface/50 group-hover:scale-105 transition-transform">
                  {icons[idx]}
                </div>
                <span className="text-[10px] font-sans tracking-widest uppercase text-gold-400/90 font-medium">
                  {item.statistic}
                </span>
              </div>

              <div>
                <span className="text-xs font-sans tracking-widest uppercase text-gold-500 font-medium">
                  {item.subtitle}
                </span>
                <h3 className="font-serif text-2xl text-palace-marble mt-1 group-hover:text-gold-200 transition-colors">
                  {item.title}
                </h3>
              </div>

              <p className="font-sans text-xs sm:text-sm text-palace-sandstone/80 leading-relaxed font-light">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Panoramic Imagery Banner */}
        <div className="mt-16 rounded-2xl overflow-hidden border border-gold-500/30 relative aspect-[21/9] shadow-2xl group">
          <img
            src={PALACE_IMAGERY.heritageCourtyard}
            alt="Courtyard of Taj Lake Palace"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-palace-night via-palace-night/30 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-display text-xs tracking-ceremonial text-gold-400 uppercase">
                The Inner Sanctum
              </p>
              <h4 className="font-serif text-xl sm:text-2xl text-palace-cream">
                Where the Only Movement is Sunlight Across White Marble
              </h4>
            </div>
            <span className="px-4 py-1.5 rounded-full text-xs font-sans tracking-widest uppercase bg-palace-night/80 border border-gold-400/40 text-gold-300 backdrop-blur-md self-start sm:self-auto">
              Udaipur • Mewar
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
