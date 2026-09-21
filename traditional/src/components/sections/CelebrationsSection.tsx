import React from 'react';
import { Heart, Sparkles, Flame, Users, Calendar, Crown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PALACE_IMAGERY } from '../../data/imagery';
import { GoldDivider } from '../common/GoldDivider';

interface CelebrationsSectionProps {
  onOpenInquiry: (initialData?: { bespokeNotes?: string }) => void;
}

export const CelebrationsSection: React.FC<CelebrationsSectionProps> = ({ onOpenInquiry }) => {
  const triggerRoyalPetals = () => {
    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#C5A059', '#E6CA85', '#E0A982', '#6A1B28'],
      shapes: ['circle'],
      scalar: 1.2,
      ticks: 200,
    });

    onOpenInquiry({
      bespokeNotes: "Private Celebration or Wedding Inquiry at Taj Lake Palace (Island Buyout / Lakeside Mandap).",
    });
  };

  return (
    <section id="celebrations" className="relative py-28 bg-palace-night text-palace-cream overflow-hidden">
      <div className="absolute inset-0 bg-jaali-lattice pointer-events-none opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-400">
            <Heart className="w-4 h-4" />
            <span className="font-display text-xs tracking-ceremonial uppercase">
              Weddings & Celebrations
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-palace-marble leading-tight">
            An Entire Island for Your <br />
            <span className="text-gold-gradient italic font-normal">Living Fairy Tale</span>
          </h2>

          <p className="font-serif text-base sm:text-lg text-palace-sandstone/80 italic max-w-2xl mx-auto">
            "A mandap floating upon the waters of Lake Pichola. A thousand brass lanterns illuminating white marble courtyards. Taj Lake Palace offers one of the world's most romantic wedding settings."
          </p>

          <GoldDivider motif="diamond" width="sm" className="mt-4" />
        </div>

        {/* Hero Celebration Showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left: Large Visual Spread */}
          <div className="lg:col-span-7 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl group">
              <img
                src={PALACE_IMAGERY.weddingMandapLake}
                alt="Lakeside wedding mandap at Taj Lake Palace"
                className="w-full aspect-[16/10] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-palace-night via-transparent to-transparent opacity-80" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-xl palace-glass border border-gold-500/30 flex items-center justify-between">
                <div>
                  <p className="font-display text-xs tracking-widest uppercase text-gold-400">
                    Lakeside Mandap on Pichola
                  </p>
                  <p className="font-serif text-sm sm:text-base text-palace-cream mt-0.5">
                    Framed by white marble arches and floating candles across the water
                  </p>
                </div>
                <Flame className="w-6 h-6 text-gold-400 animate-pulse shrink-0" />
              </div>
            </div>
          </div>

          {/* Right: Narrative & Ceremony Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-sans tracking-widest uppercase text-gold-400 font-medium">
                Exclusive Island Buyout
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-palace-marble">
                Reserve the Four-Acre Island of Jag Niwas Exclusively
              </h3>
            </div>

            <p className="font-sans text-xs sm:text-sm text-palace-sandstone/85 leading-relaxed font-light">
              For distinguished weddings, Taj Lake Palace may be reserved in its entirety. All 65 palatial rooms, 18 grand suites, private boat fleet, and courtyards become exclusively yours.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 p-3 rounded-lg border border-gold-500/20 bg-palace-card/50">
                <Crown className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs font-sans text-palace-sandstone/90">
                  Ceremonial boat arrival across Pichola with traditional shehnai welcome
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-gold-500/20 bg-palace-card/50">
                <Users className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs font-sans text-palace-sandstone/90">
                  Intimate ceremonies for 50 up to 300 guests across open-air marble terraces
                </span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg border border-gold-500/20 bg-palace-card/50">
                <Calendar className="w-4 h-4 text-gold-400 shrink-0" />
                <span className="text-xs font-sans text-palace-sandstone/90">
                  Custom three-day royal wedding celebrations curated by Taj wedding specialists
                </span>
              </div>
            </div>

            {/* Action Button */}
            <div className="pt-4">
              <button
                onClick={triggerRoyalPetals}
                className="w-full sm:w-auto px-8 py-3.5 rounded-md bg-gold-foil text-palace-night font-sans tracking-ceremonial text-xs font-semibold uppercase shadow-xl shadow-gold-500/20 hover:brightness-110 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-palace-night" />
                <span>Inquire for Celebrations</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
