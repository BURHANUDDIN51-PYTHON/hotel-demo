import React from 'react';
import SectionHeader from '../common/SectionHeader';
import { locationData } from '../../data/localGuide';
import { hotelBrand } from '../../data/hotelData';
import { MapPin, Navigation, Compass, Plane, ShieldCheck, Car, Wind } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="py-24 sm:py-32 bg-ivory-100/60 text-charcoal-900 border-t border-sand-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="TERROIR & LOCATION"
          title="Tucked Into the Limestone Fold of Deià"
          subtitle="Where the Serra de Tramuntana plunges dramatically into the cobalt waters of the western Mediterranean."
        />

        {/* Top Grid: Cartography Card & Transport Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-20">
          
          {/* Left Column: Stylized Minimalist Map & GPS Plaque */}
          <div className="lg:col-span-6 bg-sand-200/60 border border-sand-300 rounded-sm p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden text-left">
            {/* Background Minimalist Map SVG */}
            <div className="absolute inset-0 opacity-25 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#6E6C64" strokeWidth="0.5" strokeDasharray="2,2"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                {/* Stylized contour lines */}
                <path d="M 10 80 Q 150 20 300 90 T 600 60" fill="none" stroke="#3D3B37" strokeWidth="1.2" opacity="0.4"/>
                <path d="M 0 160 Q 200 110 400 180 T 800 130" fill="none" stroke="#3D3B37" strokeWidth="1.2" opacity="0.4"/>
                <path d="M 20 280 Q 250 210 500 290 T 900 240" fill="none" stroke="#3D3B37" strokeWidth="1.2" opacity="0.4"/>
              </svg>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-bronze-600 tracking-widest uppercase">
                  Cartographic Reference
                </span>
                <span className="px-2.5 py-0.5 bg-ivory-50 text-charcoal-800 text-[10px] font-mono rounded border border-sand-300">
                  {locationData.coordinates}
                </span>
              </div>

              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-950 font-light">
                {hotelBrand.name} Sanctuary
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
                {hotelBrand.address}
              </p>
            </div>

            {/* Visual Pin Card */}
            <div className="relative z-10 my-8 p-6 bg-ivory-50/90 backdrop-blur-sm border border-sand-300/80 rounded-sm shadow-soft flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-olive-800 text-ivory-50 flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-xs space-y-0.5">
                <div className="font-semibold text-charcoal-900 uppercase tracking-wider text-[11px]">
                  Protected UNESCO Heritage Zone
                </div>
                <div className="text-charcoal-600">
                  Zero commercial development within a 4-kilometer sanctuary perimeter.
                </div>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4 pt-4 border-t border-sand-300 text-xs text-charcoal-700">
              <div>
                <span className="text-charcoal-400 block text-[10px] uppercase tracking-wider">Altitude</span>
                <span className="font-medium">{locationData.elevation}</span>
              </div>
              <div>
                <span className="text-charcoal-400 block text-[10px] uppercase tracking-wider">Climate</span>
                <span className="font-medium">Balearic Maritime Microclimate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Arrivals & Transit */}
          <div className="lg:col-span-6 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-bronze-600 block">
                Arrival Logistics
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-950 font-light">
                Seamless Arrival by Land, Sea, or Air
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 font-sans font-light leading-relaxed">
                Our guest liaison team monitors all incoming arrivals to coordinate effortless, private transfers directly from aircraft steps or yacht berths.
              </p>
            </div>

            <div className="space-y-4">
              {locationData.gettingHere.map((transit, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-ivory-50 border border-sand-200 rounded-sm shadow-soft space-y-1 hover:border-bronze-400 transition-colors"
                >
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-serif text-lg text-charcoal-950 font-medium">
                      {transit.title}
                    </h4>
                    <span className="text-xs font-mono text-olive-800 font-semibold">
                      {transit.time}
                    </span>
                  </div>
                  <div className="text-xs text-bronze-600 font-mono">
                    Mode: {transit.mode}
                  </div>
                  <p className="text-xs text-charcoal-600 font-sans font-light pt-1 leading-relaxed">
                    {transit.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Concierge's Secret Notebook Grid */}
        <div className="text-left space-y-6">
          <div className="border-b border-sand-200 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-bronze-600 block mb-1">
                Insider Curations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-950 font-light">
                The Concierge's Secret Notebook
              </h3>
            </div>
            <p className="text-xs text-charcoal-500 font-sans sm:text-right max-w-xs">
              Hand-annotated gems curated each season by our Head Concierge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationData.conciergeNotebook.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-ivory-50 border border-sand-200 rounded-sm shadow-soft space-y-3 hover:border-bronze-400 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-olive-800 px-2 py-0.5 bg-sand-100 rounded">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-charcoal-400 font-mono">
                    {item.distance}
                  </span>
                </div>

                <h4 className="font-serif text-lg text-charcoal-950 font-normal">
                  {item.title}
                </h4>

                <p className="text-xs text-charcoal-600 font-sans font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
