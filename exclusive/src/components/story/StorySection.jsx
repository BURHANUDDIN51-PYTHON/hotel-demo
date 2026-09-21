import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { storyData } from '../../data/hotelData';
import { Sparkles, Compass } from 'lucide-react';

export default function StorySection() {
  return (
    <section id="story" className="py-24 sm:py-32 bg-ivory-50 text-charcoal-900 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge={storyData.badge}
          title={storyData.headline}
          subtitle="Restoring a 19th-century Mallorcan olive estate through natural materials, tactile simplicity, and uninterrupted silence."
        />

        {/* Editorial Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Storytelling & Layered Frames */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 w-4/5 ml-auto overflow-hidden shadow-elevated rounded-sm">
              <img
                src={storyData.images.primary}
                alt="Restored Stone Architecture"
                className="w-full h-[450px] sm:h-[520px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Overlapping secondary frame */}
            <div className="absolute -bottom-8 left-0 z-20 w-3/5 overflow-hidden shadow-2xl border-4 border-ivory-50 rounded-sm">
              <img
                src={storyData.images.secondary}
                alt="Architectural details and light"
                className="w-full h-[260px] sm:h-[300px] object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>

            {/* Subtle background decorative stone tile accent */}
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-sand-200/50 rounded-full blur-2xl -z-10"></div>
          </div>

          {/* Right Column: Editorial Copy & Manifesto */}
          <div className="lg:col-span-6 space-y-6 pt-6 lg:pt-0">
            <div className="space-y-4 font-sans text-charcoal-700 leading-relaxed text-base sm:text-lg font-light">
              {storyData.manifesto.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Architect Quote Box */}
            <div className="p-6 sm:p-8 bg-sand-100/60 border-l-2 border-bronze-400 mt-8 space-y-3">
              <p className="font-serif italic text-lg sm:text-xl text-charcoal-900 leading-snug">
                "{storyData.quote.text}"
              </p>
              <div className="text-xs tracking-luxury uppercase font-sans text-charcoal-500">
                — <span className="font-semibold text-charcoal-800">{storyData.quote.author}</span>, {storyData.quote.role}
              </div>
            </div>

            {/* Key Figures / Stats Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-sand-200">
              {storyData.stats.map((stat, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-serif text-3xl sm:text-4xl text-olive-900 font-light">
                    {stat.value}
                  </div>
                  <div className="text-xs uppercase font-semibold tracking-wider text-charcoal-800">
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
