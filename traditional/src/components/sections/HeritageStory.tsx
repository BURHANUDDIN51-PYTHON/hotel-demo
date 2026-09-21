import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PALACE_IMAGERY } from '../../data/imagery';
import { GoldDivider } from '../common/GoldDivider';
import { Shield, Sparkles, Feather } from 'lucide-react';

export const HeritageStory: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'genesis' | 'architecture' | 'restoration'>('genesis');

  const chapters = {
    genesis: {
      title: "The Genesis of Jag Niwas (1743 – 1746 A.D.)",
      subtitle: "A royal summer pleasure palace conceived by Maharana Jagat Singh II",
      content: "Legend recounts that young prince Jagat Singh II wished to reside at the island palace of Jag Mandir with his companions. When his father, Maharana Sangram Singh II, decreed that he must build his own palace if he desired an island retreat, Jagat Singh vowed to create a summer sanctuary of surpassing beauty. Between 1743 and 1746, he oversaw the creation of Jag Niwas in the middle of Lake Pichola, naming it after himself.",
      statistic: "1746 A.D. Consecration",
      image: PALACE_IMAGERY.heritageArches,
    },
    architecture: {
      title: "White Makrana Marble Over Natural Bedrock",
      subtitle: "A floating miracle of Rajput & Mughal geometry",
      content: "The palace was constructed upon an island reef of natural lake bedrock measuring four acres. Master masons transported pure white Makrana marble across Rajasthan by bullock cart. The palace was intentionally oriented toward the east to welcome the rising sun—symbolic of the Sisodia dynasty's descent from Surya, the Sun God. Scalloped archways, cusped pillars, black-and-white marble chess courtyards, and jharokhas were built to catch breezes off the water.",
      statistic: "4-Acre Island of Pure Marble",
      image: PALACE_IMAGERY.heritageJali,
    },
    restoration: {
      title: "The 1963 Heritage Hotel & Taj Stewardship",
      subtitle: "From royal summer residence to world-renowned sanctuary",
      content: "In 1963, Maharana Bhagwat Singh made the visionary decision to convert Jag Niwas into India's premier luxury heritage hotel, preserving the ancestral palace for generations to come. In 1971, Taj Hotels assumed management, embarking on a meticulous restoration that restored the original frescoes, antique Belgian chandeliers, and stained-glass mosaics while introducing the refined hospitality for which Taj is globally renowned.",
      statistic: "1971 Taj Partnership",
      image: PALACE_IMAGERY.heritageCourtyard,
    },
  };

  return (
    <section id="legacy" className="relative py-28 bg-palace-dark text-palace-cream overflow-hidden">
      <div className="absolute inset-0 bg-jaali-lattice pointer-events-none opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-400">
            <Shield className="w-4 h-4" />
            <span className="font-display text-xs tracking-ceremonial uppercase">
              The Legacy of Jag Niwas
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-palace-marble leading-tight">
            Three Centuries of <br />
            <span className="text-gold-gradient italic font-normal">Living Mewar Royalty</span>
          </h2>

          <p className="font-serif text-base sm:text-lg text-palace-sandstone/80 italic">
            "Built so that the Maharanas could hold the moon and the cool waters of Lake Pichola in the palm of their hand."
          </p>

          <GoldDivider motif="lotus" width="sm" className="mt-4" />
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-16 items-center">
          {/* Left Column: Multi-Layered Archival Imagery */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl group">
              <img
                src={chapters[activeTab].image}
                alt={chapters[activeTab].title}
                className="w-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-palace-night/90 via-transparent to-transparent" />

              {/* Floating Statistic Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl palace-glass border border-gold-400/30 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-sans tracking-widest uppercase text-gold-400">
                    Chronicle Milestone
                  </p>
                  <p className="font-serif text-xl sm:text-2xl text-palace-cream font-medium">
                    {chapters[activeTab].statistic}
                  </p>
                </div>
                <Sparkles className="w-6 h-6 text-gold-400 animate-pulse" />
              </div>
            </div>

            {/* Decorative Offset Backdrop Frame */}
            <div className="absolute -bottom-5 -right-5 w-full h-full rounded-2xl border-2 border-gold-500/20 -z-0 pointer-events-none hidden sm:block" />
            <div className="absolute -top-5 -left-5 w-24 h-24 border-t-2 border-l-2 border-gold-400/40 pointer-events-none" />
          </div>

          {/* Right Column: Editorial Chapters */}
          <div className="lg:col-span-6 space-y-8">
            {/* Interactive Pillar Selector Tabs */}
            <div className="flex items-center gap-2 sm:gap-3 border-b border-gold-500/20 pb-3 overflow-x-auto">
              <button
                onClick={() => setActiveTab('genesis')}
                className={`pb-2 font-display text-xs tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'genesis'
                    ? 'text-gold-300 border-b-2 border-gold-400 font-semibold'
                    : 'text-palace-sandstone/60 hover:text-gold-200'
                }`}
              >
                I. 1746 Genesis
              </button>
              <button
                onClick={() => setActiveTab('architecture')}
                className={`pb-2 font-display text-xs tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'architecture'
                    ? 'text-gold-300 border-b-2 border-gold-400 font-semibold'
                    : 'text-palace-sandstone/60 hover:text-gold-200'
                }`}
              >
                II. White Marble
              </button>
              <button
                onClick={() => setActiveTab('restoration')}
                className={`pb-2 font-display text-xs tracking-wider uppercase transition-all whitespace-nowrap cursor-pointer ${
                  activeTab === 'restoration'
                    ? 'text-gold-300 border-b-2 border-gold-400 font-semibold'
                    : 'text-palace-sandstone/60 hover:text-gold-200'
                }`}
              >
                III. Taj Stewardship
              </button>
            </div>

            {/* Active Narrative Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              <div>
                <p className="text-xs font-sans uppercase tracking-widest text-gold-400/90 font-medium">
                  {chapters[activeTab].subtitle}
                </p>
                <h3 className="font-serif text-2xl sm:text-3xl text-palace-cream mt-1 leading-snug">
                  {chapters[activeTab].title}
                </h3>
              </div>

              <p className="font-sans text-sm sm:text-base text-palace-sandstone/85 leading-relaxed font-light">
                {chapters[activeTab].content}
              </p>

              {/* Royal Seal Citation */}
              <div className="pt-4 p-5 rounded-lg border border-gold-500/20 bg-palace-card/40 space-y-2">
                <div className="flex items-center gap-2 text-gold-400 text-xs font-serif italic">
                  <Feather className="w-3.5 h-3.5 text-gold-400" />
                  <span>The Annals and Antiquities of Rajasthan</span>
                </div>
                <p className="text-xs text-palace-sandstone/75 italic font-serif leading-relaxed">
                  "Jag Niwas appears like an enchanted palace emerging from the sacred lake, floating without anchor, illuminated by the silvery moon."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
