import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Crown, ArrowRight, Eye, Waves } from 'lucide-react';
import { SUITES } from '../../data/palaceData';
import type { Suite } from '../../types';
import { GoldDivider } from '../common/GoldDivider';

interface SuitesSectionProps {
  onSelectSuite: (suite: Suite) => void;
  onOpenInquiry: (initialData?: { suite?: string }) => void;
}

export const SuitesSection: React.FC<SuitesSectionProps> = ({
  onSelectSuite,
  onOpenInquiry,
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'presidential' | 'grand' | 'royal'>('all');

  const filteredSuites = SUITES.filter((suite) => {
    if (activeFilter === 'presidential') return suite.id.includes('shambhu');
    if (activeFilter === 'grand') return suite.id.includes('mayur') || suite.id.includes('khush');
    if (activeFilter === 'royal') return suite.id.includes('sajjan');
    return true;
  });

  return (
    <section id="suites" className="relative py-28 bg-palace-night text-palace-cream overflow-hidden">
      <div className="absolute inset-0 bg-jaali-lattice pointer-events-none opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-400">
            <Crown className="w-4 h-4" />
            <span className="font-display text-xs tracking-ceremonial uppercase">
              The Royal Accommodations
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-palace-marble leading-tight">
            Chambers of Mewar <br />
            <span className="text-gold-gradient italic font-normal">Monarchs & Queens</span>
          </h2>

          <p className="font-serif text-base sm:text-lg text-palace-sandstone/80 italic max-w-2xl mx-auto">
            "Each suite was once the private sanctuary of a Mewar ruler or royal consort. White marble jharokhas, stained-glass peacocks, and antique chandeliers that reflect upon Lake Pichola."
          </p>

          <GoldDivider motif="diamond" width="sm" className="mt-4" />

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-6">
            {(['all', 'presidential', 'grand', 'royal'] as const).map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-sans tracking-widest uppercase transition-all cursor-pointer ${
                  activeFilter === filter
                    ? 'bg-gold-500 text-palace-night font-semibold shadow-md shadow-gold-500/20'
                    : 'border border-gold-500/25 text-gold-200/70 hover:border-gold-400 hover:text-gold-300'
                }`}
              >
                {filter === 'all' && 'All Suites'}
                {filter === 'presidential' && 'Presidential Suite'}
                {filter === 'grand' && 'Grand Royal Suites'}
                {filter === 'royal' && 'Royal Suites'}
              </button>
            ))}
          </div>
        </div>

        {/* Suites Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
          {filteredSuites.map((suite, idx) => (
            <motion.div
              key={suite.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="group relative rounded-2xl overflow-hidden border border-gold-500/20 bg-palace-card hover:border-gold-400/60 transition-all duration-500 shadow-xl flex flex-col justify-between"
            >
              {/* Image Container with Luxury Hover Zoom */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={suite.image}
                  alt={suite.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-108 transition-transform duration-1000 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-palace-card via-transparent to-black/20" />

                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase bg-palace-night/80 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                    {suite.size}
                  </span>
                </div>

                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase bg-palace-night/80 border border-gold-400/40 text-gold-300 backdrop-blur-md">
                    {suite.priceStarting}
                  </span>
                </div>

                {/* Overlay Quick Peek Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-palace-night/40 backdrop-blur-xs">
                  <button
                    onClick={() => onSelectSuite(suite)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-palace-night/90 border border-gold-400 text-gold-300 font-sans tracking-widest text-xs uppercase shadow-xl hover:bg-gold-500 hover:text-palace-night transition-all cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>Explore Suite</span>
                  </button>
                </div>
              </div>

              {/* Suite Information Card */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gold-400 font-sans tracking-wider uppercase">
                    <span>{suite.subheading}</span>
                    <span className="flex items-center gap-1">
                      <Waves className="w-3.5 h-3.5" />
                      Lake Pichola
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-palace-marble group-hover:text-gold-200 transition-colors">
                    {suite.name}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-palace-sandstone/80 leading-relaxed font-light line-clamp-3">
                    {suite.description}
                  </p>
                </div>

                {/* Features Pill List */}
                <div className="space-y-4 pt-4 border-t border-gold-500/15">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-sans text-palace-sandstone/75">
                    {suite.features.slice(0, 2).map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-gold-400" />
                        <span className="truncate">{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Actions */}
                  <div className="flex items-center justify-between gap-4 pt-2">
                    <button
                      onClick={() => onSelectSuite(suite)}
                      className="text-xs font-sans uppercase tracking-widest text-gold-400 hover:text-gold-200 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>Suite Chronicle</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenInquiry({ suite: suite.name })}
                      className="px-4 py-2 rounded border border-gold-500/40 text-gold-300 font-sans tracking-widest text-xs uppercase hover:bg-gold-500 hover:text-palace-night transition-all duration-300 cursor-pointer"
                    >
                      Inquire
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
