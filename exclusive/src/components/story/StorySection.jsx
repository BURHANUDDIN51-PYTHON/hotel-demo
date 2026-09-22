import React from 'react';
import { storyData, hotelBrand } from '../../data/hotelData';
import { Compass, Sparkles, Feather } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-28 sm:py-36 bg-ivory-50 text-charcoal-900 overflow-hidden relative paper-grain border-b border-sand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Index Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-sand-300/70 pb-6 mb-16 sm:mb-24 gap-4">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-bronze-600">
            <span className="font-bold">CH. 02</span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-500" />
            <span>THE MANIFESTO — LE SILENCE</span>
          </div>
          <span className="text-xs font-serif italic text-charcoal-500 tracking-wider">
            "We listened to the stone before laying a single foundation."
          </span>
        </div>

        {/* Editorial Asymmetrical Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Overlapping Photographic Assemblage */}
          <div className="lg:col-span-6 relative order-2 lg:order-1 pt-6 lg:pt-0">
            
            {/* Architectural Primary Frame */}
            <div className="relative z-10 w-full sm:w-11/12 overflow-hidden shadow-elevated rounded-sm bg-sand-200">
              <img
                src={storyData.images.primary}
                alt="Restored Marés limestone architecture at Maison Sylvan"
                className="w-full h-[460px] sm:h-[560px] object-cover img-editorial-zoom filter contrast-[1.03]"
                loading="lazy"
                data-cursor="view"
                data-cursor-text="EXPAND"
              />
              <div className="absolute bottom-4 left-4 px-3 py-1 bg-ivory-50/90 backdrop-blur-sm text-charcoal-900 text-[10px] font-mono tracking-widest uppercase">
                PL. 01 — RESTORED 1894 STONE FAÇADE
              </div>
            </div>

            {/* Overlapping Secondary Vignette Frame */}
            <div className="hidden sm:block absolute -bottom-10 -right-4 z-20 w-7/12 overflow-hidden shadow-2xl border-8 border-ivory-50 rounded-sm bg-sand-100">
              <img
                src={storyData.images.secondary}
                alt="Dappled sunlight through olive branches"
                className="w-full h-[280px] object-cover img-editorial-zoom"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-charcoal-950/80 text-ivory-50 text-[9px] font-mono tracking-widest uppercase">
                PL. 02 — MORNING LIGHT
              </div>
            </div>

            {/* Tactile Material Stamp (Wax / Seal aesthetic) */}
            <div className="absolute -top-6 -left-4 w-28 h-28 rounded-full border border-bronze-400/40 bg-sand-100/80 backdrop-blur-sm flex flex-col items-center justify-center text-center p-2 rotate-[-6deg] shadow-soft z-20">
              <span className="text-[9px] font-mono uppercase tracking-widest text-charcoal-500">TERROIR</span>
              <span className="font-serif text-sm font-semibold text-charcoal-900">MARÉS</span>
              <span className="text-[8px] font-mono text-bronze-600 tracking-wider">HAND-CUT</span>
            </div>
          </div>

          {/* Right Column: Editorial Copy, Pull Quote, & Architect's Seal */}
          <div className="lg:col-span-6 space-y-8 order-1 lg:order-2 text-left">
            
            {/* Major Editorial Headline */}
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-5xl font-light text-charcoal-950 tracking-tight leading-[1.12]">
              A slow rhythm carved from <span className="font-editorial-italic font-normal text-bronze-700">lime plaster</span>, aged teak, and morning salt mist.
            </h2>

            {/* Paragraphs with editorial dropped cap */}
            <div className="space-y-6 font-sans text-charcoal-700 leading-relaxed text-base sm:text-lg font-light">
              <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-charcoal-950 first-letter:float-left first-letter:mr-3 first-letter:leading-none">
                {storyData.manifesto[0]}
              </p>
              <p>
                {storyData.manifesto[1]}
              </p>
              <p className="text-charcoal-600 text-sm sm:text-base italic font-serif">
                "{storyData.manifesto[2]}"
              </p>
            </div>

            {/* Architect Citation & Conservation Signoff */}
            <div className="p-8 bg-sand-100/70 border-l-2 border-bronze-500 rounded-sm space-y-3 relative">
              <p className="font-serif italic text-lg sm:text-xl text-charcoal-900 leading-snug">
                "{storyData.quote.text}"
              </p>
              <div className="flex items-center justify-between pt-2">
                <div className="text-xs uppercase tracking-luxury font-sans text-charcoal-600">
                  — <span className="font-semibold text-charcoal-900">{storyData.quote.author}</span>, {storyData.quote.role}
                </div>
                <span className="text-[10px] font-mono text-bronze-600 uppercase tracking-widest">
                  DEIÀ • 2024
                </span>
              </div>
            </div>

            {/* Key Figures Strip with Bespoke Editorial Layout */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-sand-300">
              {storyData.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-3xl sm:text-4xl text-olive-900 font-light">
                    {stat.value}
                  </div>
                  <div className="text-[11px] uppercase font-semibold tracking-wider text-charcoal-900">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-charcoal-500 font-sans leading-tight">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
