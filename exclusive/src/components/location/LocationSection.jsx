import React from 'react';
import { locationData } from '../../data/localGuide';
import { hotelBrand } from '../../data/hotelData';
import { MapPin, Navigation, Compass, Plane, ShieldCheck, Car, Wind } from 'lucide-react';

export default function LocationSection() {
  return (
    <section id="location" className="py-28 sm:py-36 bg-ivory-100/70 text-charcoal-900 border-b border-sand-300/80 paper-grain relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-sand-300 pb-6 mb-16 gap-4">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-bronze-700">
            <span className="font-bold">CH. 09</span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
            <span>TERROIR & CARTOGRAPHY — LA TERRE</span>
          </div>
          <span className="text-xs font-serif italic text-charcoal-600 tracking-wider">
            Tucked into the ancient limestone fold of Deià and the Tramuntana mountain ridge.
          </span>
        </div>

        {/* Top Grid: Cartography Card & Transport Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch mb-24">
          
          {/* Left Column: Stylized Minimalist Architectural Map */}
          <div className="lg:col-span-6 bg-sand-200/60 border border-sand-300 rounded-sm p-6 sm:p-10 flex flex-col justify-between relative overflow-hidden text-left shadow-soft">
            {/* Background Minimalist Map SVG */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#58564F" strokeWidth="0.5" strokeDasharray="3,3"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid-pattern)" />
                {/* Stylized contour lines */}
                <path d="M 10 80 Q 150 20 300 90 T 600 60" fill="none" stroke="#2A2927" strokeWidth="1.2" opacity="0.5"/>
                <path d="M 0 160 Q 200 110 400 180 T 800 130" fill="none" stroke="#2A2927" strokeWidth="1.2" opacity="0.5"/>
                <path d="M 20 280 Q 250 210 500 290 T 900 240" fill="none" stroke="#2A2927" strokeWidth="1.2" opacity="0.5"/>
              </svg>
            </div>

            <div className="relative z-10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-bronze-700 tracking-widest uppercase font-semibold">
                  Cartographic Plaque
                </span>
                <span className="px-3 py-1 bg-ivory-50 text-charcoal-900 text-[10px] font-mono rounded border border-sand-300 shadow-sm">
                  {locationData.coordinates}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-950 font-light">
                {hotelBrand.name} Sanctuary
              </h3>

              <p className="text-xs sm:text-sm text-charcoal-600 font-sans leading-relaxed">
                {hotelBrand.address}
              </p>
            </div>

            {/* Visual Pin Plaque */}
            <div className="relative z-10 my-8 p-6 bg-ivory-50/95 backdrop-blur-sm border border-sand-300 rounded-sm shadow-soft flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-olive-900 text-ivory-50 flex items-center justify-center shrink-0 shadow-md">
                <MapPin className="w-6 h-6 animate-pulse" />
              </div>
              <div className="text-xs space-y-1">
                <div className="font-semibold text-charcoal-900 uppercase tracking-wider text-[11px]">
                  Protected UNESCO Heritage Zone
                </div>
                <div className="text-charcoal-600 font-sans font-light">
                  Zero commercial development within a 4-kilometer sanctuary perimeter.
                </div>
              </div>
            </div>

            <div className="relative z-10 grid grid-cols-2 gap-4 pt-4 border-t border-sand-300 text-xs text-charcoal-700">
              <div>
                <span className="text-charcoal-400 block text-[10px] uppercase tracking-wider font-mono">Elevation</span>
                <span className="font-medium text-charcoal-900">{locationData.elevation}</span>
              </div>
              <div>
                <span className="text-charcoal-400 block text-[10px] uppercase tracking-wider font-mono">Microclimate</span>
                <span className="font-medium text-charcoal-900">Maritime Mediterranean</span>
              </div>
            </div>
          </div>

          {/* Right Column: Arrivals & Transit Dossier */}
          <div className="lg:col-span-6 space-y-6 text-left flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase tracking-widest text-bronze-700 font-semibold block">
                Arrival Logistics
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-950 font-light leading-snug">
                Effortless Arrival by Air, Sea, or Mountain Pass
              </h3>
              <p className="text-xs sm:text-sm text-charcoal-600 font-sans font-light leading-relaxed">
                Our estate liaisons monitor incoming flights and yacht movements to orchestrate discreet transfers directly to the sanctuary steps.
              </p>
            </div>

            <div className="space-y-4">
              {locationData.gettingHere.map((transit, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-ivory-50 border border-sand-300 rounded-sm shadow-soft space-y-1.5 hover:border-bronze-400 transition-colors"
                >
                  <div className="flex justify-between items-baseline">
                    <h4 className="font-serif text-lg text-charcoal-950 font-normal">
                      {transit.title}
                    </h4>
                    <span className="text-xs font-mono text-olive-900 font-semibold">
                      {transit.time}
                    </span>
                  </div>
                  <div className="text-xs text-bronze-700 font-mono">
                    Mode: {transit.mode}
                  </div>
                  <p className="text-xs text-charcoal-600 font-sans font-light leading-relaxed">
                    {transit.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Concierge's Secret Notebook */}
        <div className="text-left space-y-8">
          <div className="border-b border-sand-300 pb-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
            <div>
              <span className="text-xs font-mono tracking-widest uppercase text-bronze-700 font-semibold block mb-1">
                Insider Curations
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-950 font-light">
                The Concierge's Hand-Annotated Field Notes
              </h3>
            </div>
            <p className="text-xs text-charcoal-500 font-sans sm:text-right max-w-xs">
              Curated gems recommended each season by our Head Concierge.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {locationData.conciergeNotebook.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-ivory-50 border border-sand-300 rounded-sm shadow-soft space-y-3 hover:border-bronze-400 transition-colors"
              >
                <div className="flex justify-between items-start">
                  <span className="text-[10px] uppercase font-mono tracking-widest text-olive-900 px-2.5 py-0.5 bg-sand-100 rounded border border-sand-200">
                    {item.category}
                  </span>
                  <span className="text-[10px] text-charcoal-500 font-mono">
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
