import React from 'react';
import { ArrowDown, Sparkles, Compass } from 'lucide-react';
import { hotelBrand, heroData } from '../../data/hotelData';
import AvailabilityBar from '../booking/AvailabilityBar';

export default function HeroSection({ onOpenBooking, onCheckAvailability }) {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-between pt-24 pb-12 overflow-hidden bg-charcoal-950 text-ivory-50">
      {/* Background Image with Cinematic Grading */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroData.backgroundImage}
          alt="Maison Sylvan Mediterranean Sanctuary"
          className="w-full h-full object-cover object-center scale-105 animate-fade-in-scale filter brightness-[0.82] contrast-[1.05]"
        />
        {/* Editorial gradient scrims */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/60 via-transparent to-charcoal-950/40" />
      </div>

      {/* Atmospheric ambient grain overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 mix-blend-overlay bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]"></div>

      {/* Central Editorial Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto pt-16 pb-8">
        {/* Subtle Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sand-200/20 bg-charcoal-900/40 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 animate-ping"></span>
          <span className="text-[11px] font-sans font-medium tracking-ultra uppercase text-sand-200">
            {heroData.badge}
          </span>
        </div>

        {/* Major Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[1.05] mb-8 text-ivory-50 text-balance drop-shadow-md">
          Where <span className="italic font-normal text-bronze-200">silence</span> becomes an architectural art.
        </h1>

        {/* Emotional Subheading */}
        <p className="max-w-2xl mx-auto font-sans text-base sm:text-lg md:text-xl font-light text-sand-200/90 leading-relaxed tracking-wide mb-10">
          {heroData.subheading}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 bg-ivory-50 text-charcoal-950 hover:bg-sand-200 text-xs font-semibold tracking-luxury uppercase transition-all duration-300 shadow-xl hover:shadow-2xl"
          >
            Reserve Your Sanctuary
          </button>
          
          <a
            href="#story"
            className="w-full sm:w-auto px-8 py-4 border border-sand-200/30 text-ivory-50 hover:border-bronze-300 hover:text-bronze-200 text-xs font-semibold tracking-luxury uppercase backdrop-blur-sm transition-all duration-300"
          >
            Discover the Estate
          </a>
        </div>
      </div>

      {/* Floating Availability Bar & Scroll Cue */}
      <div className="relative z-10 w-full space-y-6">
        <AvailabilityBar onCheckAvailability={onCheckAvailability} />

        {/* Scroll down indicator */}
        <div className="flex justify-center items-center pb-2">
          <a
            href="#story"
            className="flex flex-col items-center text-sand-300/80 hover:text-ivory-50 transition-colors group"
            aria-label="Scroll to discover story"
          >
            <span className="text-[10px] tracking-ultra uppercase font-sans font-light mb-2 group-hover:tracking-widest transition-all">
              Scroll to Explore
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-bronze-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
