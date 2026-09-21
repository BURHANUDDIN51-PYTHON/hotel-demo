import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Flower2, Clock, Check, Anchor, Sparkles } from 'lucide-react';
import { WELLNESS_TREATMENTS } from '../../data/palaceData';
import { PALACE_IMAGERY } from '../../data/imagery';
import { GoldDivider } from '../common/GoldDivider';

interface WellnessSanctuaryProps {
  onOpenInquiry: (initialData?: { bespokeNotes?: string }) => void;
}

export const WellnessSanctuary: React.FC<WellnessSanctuaryProps> = ({ onOpenInquiry }) => {
  const [activeTreatmentId, setActiveTreatmentId] = useState<string>(WELLNESS_TREATMENTS[0].id);

  const currentTreatment =
    WELLNESS_TREATMENTS.find((t) => t.id === activeTreatmentId) || WELLNESS_TREATMENTS[0];

  return (
    <section id="wellness" className="relative py-28 bg-palace-dark text-palace-cream overflow-hidden">
      <div className="absolute inset-0 bg-jaali-lattice pointer-events-none opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-400">
            <Flower2 className="w-4 h-4" />
            <span className="font-display text-xs tracking-ceremonial uppercase">
              J Wellness Circle • Taj Lake Palace
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-palace-marble leading-tight">
            The J Wellness Sanctuary & <br />
            <span className="text-gold-gradient italic font-normal">Floating Spa Boat</span>
          </h2>

          <p className="font-serif text-base sm:text-lg text-palace-sandstone/80 italic max-w-2xl mx-auto">
            "Ancient Indian healing traditions meet the sublime rhythm of Lake Pichola. Experience therapeutic treatments aboard our private luxury Spa Boat drifting upon open water."
          </p>

          <GoldDivider motif="lotus" width="sm" className="mt-4" />
        </div>

        {/* Featured Spa Boat Banner */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center rounded-2xl overflow-hidden border border-gold-500/25 bg-palace-card/40 p-6 sm:p-8">
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-gold-400 text-xs font-sans tracking-widest uppercase">
              <Anchor className="w-4 h-4" />
              <span>World-Famous Signature Experience</span>
            </div>
            <h3 className="font-serif text-2xl sm:text-3xl text-palace-marble">
              The J Wellness Floating Spa Boat on Lake Pichola
            </h3>
            <p className="font-sans text-xs sm:text-sm text-palace-sandstone/85 leading-relaxed font-light">
              An exclusive sanctuary afloat the water. Step onto your private luxury boat complete with a relaxation deck, steam room, and heated outdoor plunge pool. As the gentle waves of Pichola rock the vessel, master therapists perform personalized aromatherapy and Ayurvedic treatments.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 text-xs font-sans text-palace-sandstone/80">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Private Outdoor Plunge Pool</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>On-Board Private Steam Room</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Pure Indian Herbal Formulations</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-gold-400" />
                <span>Fresh Rosewater Hydration</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="rounded-xl overflow-hidden border border-gold-500/20 aspect-[4/5]">
              <img
                src={PALACE_IMAGERY.wellnessBaths}
                alt="Rose petal bath at Taj Lake Palace"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-xl overflow-hidden border border-gold-500/20 aspect-[4/5] mt-6">
              <img
                src={PALACE_IMAGERY.wellnessRituals}
                alt="J Wellness Circle therapy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Treatment Selector & Deep Dive */}
        <div className="mt-16">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {WELLNESS_TREATMENTS.map((treatment) => (
              <button
                key={treatment.id}
                onClick={() => setActiveTreatmentId(treatment.id)}
                className={`px-5 py-2.5 rounded-full font-display text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                  activeTreatmentId === treatment.id
                    ? 'bg-gold-500 text-palace-night font-semibold shadow-lg shadow-gold-500/20'
                    : 'border border-gold-500/30 text-gold-200/70 hover:border-gold-400 bg-palace-card/50'
                }`}
              >
                {treatment.name}
              </button>
            ))}
          </div>

          {/* Active Treatment Card */}
          <motion.div
            key={currentTreatment.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-8 rounded-2xl border border-gold-500/30 bg-palace-card/70 p-6 sm:p-10 space-y-6"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gold-500/20 pb-6">
              <div>
                <span className="font-serif italic text-sm text-gold-300">
                  {currentTreatment.sanskritName}
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl text-palace-cream mt-1">
                  {currentTreatment.name}
                </h3>
              </div>

              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-gold-500/30 bg-palace-dark text-xs text-gold-400 font-sans tracking-widest uppercase self-start sm:self-auto">
                <Clock className="w-3.5 h-3.5" />
                <span>{currentTreatment.duration}</span>
              </div>
            </div>

            <p className="font-sans text-sm sm:text-base text-palace-sandstone/85 leading-relaxed font-light">
              {currentTreatment.description}
            </p>

            {/* Grid of Ingredients & Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-4 rounded-xl border border-gold-500/20 bg-palace-dark/50 space-y-2">
                <p className="text-xs font-sans tracking-widest uppercase text-gold-400 font-medium">
                  Botanical & Mineral Elements
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentTreatment.ingredients.map((ing, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded bg-palace-card border border-gold-500/20 text-xs text-palace-cream/90"
                    >
                      {ing}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl border border-gold-500/20 bg-palace-dark/50 space-y-2">
                <p className="text-xs font-sans tracking-widest uppercase text-gold-400 font-medium">
                  Holistic Benefits
                </p>
                <p className="text-xs font-sans text-palace-sandstone/80 leading-relaxed font-light">
                  {currentTreatment.benefit}
                </p>
              </div>
            </div>

            {/* Ritual Steps */}
            <div className="space-y-3 pt-2">
              <p className="text-xs font-sans tracking-widest uppercase text-gold-400 font-medium">
                Ritual Progression
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {currentTreatment.ritualSteps.map((step, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-lg border border-gold-500/15 bg-palace-surface/30 space-y-1.5"
                  >
                    <span className="text-[10px] font-display text-gold-400 font-semibold">
                      Step 0{idx + 1}
                    </span>
                    <p className="text-xs font-sans text-palace-sandstone/80 leading-snug">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Action */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs font-serif italic text-palace-sandstone/70 text-center sm:text-left">
                Spa Boat appointments require 24 hours advance reservation.
              </span>

              <button
                onClick={() =>
                  onOpenInquiry({
                    bespokeNotes: `J Wellness Circle appointment inquiry for: ${currentTreatment.name}.`,
                  })
                }
                className="px-6 py-2.5 rounded bg-gold-foil text-palace-night font-sans tracking-widest text-xs font-semibold uppercase hover:brightness-110 transition-all cursor-pointer"
              >
                Inquire for Treatment
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
