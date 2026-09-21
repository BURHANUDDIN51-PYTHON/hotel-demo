import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Compass, Sparkles, MapPin, ArrowRight } from 'lucide-react';
import { EXPERIENCES } from '../../data/palaceData';
import { GoldDivider } from '../common/GoldDivider';

interface ExperiencesSectionProps {
  onOpenInquiry: (initialData?: { bespokeNotes?: string }) => void;
}

export const ExperiencesSection: React.FC<ExperiencesSectionProps> = ({ onOpenInquiry }) => {
  const [selectedTag, setSelectedTag] = useState<string>('All');

  const tags = ['All', 'Serenity', 'Heritage', 'Culture', 'Adventure'];

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (selectedTag === 'All') return true;
    return exp.tag === selectedTag;
  });

  return (
    <section id="experiences" className="relative py-28 bg-palace-night text-palace-cream overflow-hidden">
      <div className="absolute inset-0 bg-jaali-lattice pointer-events-none opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-400">
            <Compass className="w-4 h-4" />
            <span className="font-display text-xs tracking-ceremonial uppercase">
              Palace Encounters & Traditions
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-palace-marble leading-tight">
            Curated Experiences on <br />
            <span className="text-gold-gradient italic font-normal">Sacred Waters</span>
          </h2>

          <p className="font-serif text-base sm:text-lg text-palace-sandstone/80 italic max-w-2xl mx-auto">
            "Arriving by ceremonial boat with rose petals, private sunset cruises past 17th-century island palaces, and heritage walks unveiling the secrets of the Maharanas."
          </p>

          <GoldDivider motif="sun" width="sm" className="mt-4" />

          {/* Tag Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {tags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSelectedTag(tag)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-sans tracking-widest uppercase transition-all cursor-pointer ${
                  selectedTag === tag
                    ? 'bg-gold-500 text-palace-night font-semibold shadow-md shadow-gold-500/20'
                    : 'border border-gold-500/25 text-gold-200/70 hover:border-gold-400 hover:text-gold-300'
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Magazine Editorial Layout */}
        <div className="mt-16 space-y-12">
          {filteredExperiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl p-6 sm:p-8 border border-gold-500/20 bg-palace-card/50 hover:border-gold-400/50 transition-all duration-500 ${
                idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Image side */}
              <div
                className={`lg:col-span-5 relative rounded-xl overflow-hidden border border-gold-500/25 group ${
                  idx % 2 === 1 ? 'lg:order-last' : ''
                }`}
              >
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-palace-night/80 via-transparent to-transparent" />

                {/* Time Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase bg-palace-night/90 border border-gold-400/50 text-gold-300 backdrop-blur-md">
                    {exp.timeSlot}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-xs font-sans text-palace-sandstone/80 flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-gold-400">
                    <MapPin className="w-3.5 h-3.5" />
                    {exp.location}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-gold-500">
                    {exp.duration}
                  </span>
                </div>
              </div>

              {/* Story Narrative side */}
              <div
                className={`lg:col-span-7 space-y-4 ${
                  idx % 2 === 1 ? 'lg:order-first' : ''
                }`}
              >
                <div>
                  <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-gold-400 mb-1">
                    <span className="px-2.5 py-0.5 rounded-full border border-gold-500/30 bg-palace-dark/60 text-[10px]">
                      {exp.tag}
                    </span>
                    <span>•</span>
                    <span>{exp.subtitle}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-palace-cream font-medium">
                    {exp.title}
                  </h3>
                </div>

                <p className="font-sans text-xs sm:text-sm text-palace-sandstone/85 leading-relaxed font-light">
                  {exp.description}
                </p>

                {/* Signature Highlight Box */}
                <div className="p-4 rounded-xl border border-gold-500/20 bg-palace-dark/60 text-xs font-sans text-palace-sandstone/80 flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-gold-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-gold-400 font-medium">Authentic Highlight: </span>
                    <span>{exp.highlight}</span>
                  </div>
                </div>

                {/* Inquire for Encounter */}
                <div className="pt-2">
                  <button
                    onClick={() =>
                      onOpenInquiry({
                        bespokeNotes: `Curated experience inquiry for: ${exp.title} at Taj Lake Palace.`,
                      })
                    }
                    className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-gold-400 hover:text-gold-200 transition-colors cursor-pointer group"
                  >
                    <span>Arrange with Taj Concierge</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
