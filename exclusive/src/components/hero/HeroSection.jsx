import React from 'react';
import { ArrowDown, Compass, Sparkles, MapPin } from 'lucide-react';
import { hotelBrand, heroData } from '../../data/hotelData';
import AvailabilityBar from '../booking/AvailabilityBar';

export default function HeroSection({ onOpenBooking, onCheckAvailability }) {
  return (
    <section
      id="hero"
      className="relative w-full min-h-[100svh] flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-charcoal-950 text-ivory-50"
    >
      {/* Background with cinematic Ken-Burns slow movement */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={heroData.backgroundImage}
          alt="Maison Sylvan Sanctuary overlooking the Balearic Sea"
          className="w-full h-full object-cover object-center animate-ken-burns filter brightness-[0.78] contrast-[1.08]"
        />
        {/* Editorial gradient scrims - non-uniform, like darkroom dodging */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/40 to-charcoal-950/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-transparent to-charcoal-950/40" />
        
        {/* Handcrafted paper grain overlay */}
        <div className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay noise-overlay" />
      </div>

      {/* Top Editorial Index Meta */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex items-center justify-between text-xs font-mono tracking-widest text-sand-300/80 border-b border-sand-200/15 pb-4">
          <div className="flex items-center gap-3">
            <span className="text-bronze-400 font-semibold">CH. 01</span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
            <span className="uppercase text-[11px]">PROLOGUE — L'AURA</span>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-[11px] text-sand-300/70">
            <MapPin className="w-3 h-3 text-bronze-400" />
            <span>DEIÀ, SERRA DE TRAMUNTANA</span>
          </div>
          <div className="text-[11px] font-mono text-sand-300/80">
            EST. {hotelBrand.established}
          </div>
        </div>
      </div>

      {/* Central Editorial Display */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center my-auto py-12">
        
        {/* Subtle Architectural Badge */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-sand-200/25 bg-charcoal-900/50 backdrop-blur-md mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 animate-pulse" />
          <span className="text-[10px] font-sans font-medium tracking-ultra uppercase text-sand-200">
            {heroData.badge}
          </span>
        </div>

        {/* Oversized Architectural Serif Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-[5.75rem] font-light tracking-[-0.02em] leading-[1.03] mb-8 text-ivory-50 max-w-5xl mx-auto">
          Where <span className="font-editorial-italic font-normal text-bronze-200">silence</span> becomes an architectural art.
        </h1>

        {/* Poetic Subheading */}
        <p className="max-w-2xl mx-auto font-sans text-base sm:text-lg md:text-xl font-light text-sand-200/90 leading-relaxed tracking-wide mb-10">
          Twenty-four sculpted suites sheltered between ancient olive terraces and the cobalt abyss of the Balearic Sea.
        </p>

        {/* Primary Interaction Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onOpenBooking}
            data-cursor="button"
            data-cursor-text="RESERVE"
            className="w-full sm:w-auto px-9 py-4 bg-ivory-50 text-charcoal-950 hover:bg-sand-200 text-xs font-semibold tracking-luxury uppercase transition-all duration-500 shadow-elevated"
          >
            Reserve Your Sanctuary
          </button>
          
          <a
            href="#story"
            data-cursor="link"
            data-cursor-text="DISCOVER"
            className="w-full sm:w-auto px-9 py-4 border border-sand-200/35 text-ivory-50 hover:border-bronze-300 hover:text-bronze-200 text-xs font-semibold tracking-luxury uppercase backdrop-blur-sm transition-all duration-500"
          >
            Read the Manifesto
          </a>
        </div>
      </div>

      {/* Floating Availability Bar & Scroll Cue */}
      <div className="relative z-10 w-full space-y-6">
        <AvailabilityBar onCheckAvailability={onCheckAvailability} />

        {/* Understated Scroll Prompt */}
        <div className="flex justify-center items-center pb-2">
          <a
            href="#story"
            className="flex flex-col items-center text-sand-300/80 hover:text-ivory-50 transition-colors group"
            aria-label="Scroll to discover the manifesto"
          >
            <span className="text-[10px] tracking-monumental uppercase font-sans font-light mb-2 group-hover:tracking-widest transition-all">
              CHAPTER II • THE MANIFESTO
            </span>
            <ArrowDown className="w-4 h-4 animate-bounce text-bronze-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
