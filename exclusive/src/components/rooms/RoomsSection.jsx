import React, { useState } from 'react';
import { suitesCollection, hotelBrand } from '../../data/hotelData';
import { Maximize2, Users, Bed, Eye, ArrowRight, Sparkles } from 'lucide-react';
import RoomDetailModal from './RoomDetailModal';

export default function RoomsSection({ currentCurrency = 'EUR', onOpenBookingWithSuite }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSuiteForDetail, setSelectedSuiteForDetail] = useState(null);

  const categories = [
    { id: 'all', label: 'All Sanctuaries' },
    { id: 'garden', label: 'Garden Pavilions' },
    { id: 'ocean', label: 'Cliffside Ocean Suites' },
    { id: 'penthouse', label: 'The Belvédère Penthouse' },
    { id: 'villa', label: 'Standalone Villa' },
  ];

  const filteredSuites = activeCategory === 'all'
    ? suitesCollection
    : suitesCollection.filter(s => s.category === activeCategory);

  const rateInfo = hotelBrand.currencyRates[currentCurrency] || hotelBrand.currencyRates.EUR;

  return (
    <section id="suites" className="py-28 sm:py-36 bg-ivory-100/60 text-charcoal-900 border-b border-sand-300/80 paper-grain relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-sand-300 pb-6 mb-16 gap-4">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-bronze-700">
            <span className="font-bold">CH. 04</span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
            <span>THE SANCTUARY COLLECTION — LES DEMEURES</span>
          </div>
          <span className="text-xs font-serif italic text-charcoal-600 tracking-wider">
            Twenty-four chambers sculpted to frame light, mountain air, and the sea.
          </span>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              data-cursor="button"
              data-cursor-text="FILTER"
              className={`px-5 py-2.5 text-xs font-sans tracking-luxury uppercase transition-all duration-300 rounded-full ${
                activeCategory === cat.id
                  ? 'bg-olive-900 text-ivory-50 shadow-soft'
                  : 'bg-ivory-50 text-charcoal-700 hover:text-charcoal-950 border border-sand-300 hover:border-sand-400'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Fashion Editorial Suites Layout: Asymmetrical alternating rhythm */}
        <div className="space-y-20 sm:space-y-28">
          {filteredSuites.map((suite, idx) => {
            const isReversed = idx % 2 === 1;
            const price = Math.round(suite.priceEUR * rateInfo.rate);

            return (
              <div
                key={suite.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-14 items-center bg-ivory-50/90 border border-sand-300/80 p-6 sm:p-10 shadow-soft hover:shadow-elevated transition-all duration-700 rounded-sm"
              >
                {/* Photo Presentation (7 cols) */}
                <div className={`lg:col-span-7 relative ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div
                    onClick={() => setSelectedSuiteForDetail(suite)}
                    className="relative h-[360px] sm:h-[440px] w-full overflow-hidden rounded-sm bg-sand-200 cursor-pointer group"
                    data-cursor="view"
                    data-cursor-text="DISCOVER"
                  >
                    <img
                      src={suite.images[0]}
                      alt={suite.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-editorial"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                    {/* Suite Plate Badge */}
                    <div className="absolute top-4 left-4 px-3.5 py-1 bg-ivory-50/95 backdrop-blur-sm text-charcoal-950 text-[10px] tracking-ultra uppercase font-medium">
                      0{idx + 1} • {suite.categoryLabel}
                    </div>

                    {/* Quick photo counter badge */}
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-charcoal-950/80 backdrop-blur-sm text-ivory-50 text-[10px] font-mono tracking-widest uppercase">
                      {suite.images.length} PHOTOGRAPHIC PERSPECTIVES
                    </div>
                  </div>

                  {/* Overlapping secondary detail preview */}
                  {suite.images[1] && (
                    <div
                      onClick={() => setSelectedSuiteForDetail(suite)}
                      className={`hidden md:block absolute -bottom-6 ${isReversed ? '-left-6' : '-right-6'} w-40 h-28 overflow-hidden rounded-sm border-4 border-ivory-50 shadow-xl cursor-pointer hover:scale-105 transition-transform`}
                    >
                      <img src={suite.images[1]} alt="Suite architectural detail" className="w-full h-full object-cover" />
                    </div>
                  )}
                </div>

                {/* Editorial Details & Narrative (5 cols) */}
                <div className={`lg:col-span-5 space-y-6 text-left ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono tracking-wider text-bronze-600 uppercase">
                      <span>{suite.subtitle}</span>
                      <span className="text-charcoal-500 font-sans">{suite.size}</span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-charcoal-950 font-light leading-snug">
                      {suite.title}
                    </h3>

                    <p className="font-editorial-italic text-sm sm:text-base text-olive-800">
                      "{suite.tagline}"
                    </p>
                  </div>

                  <p className="font-sans text-charcoal-600 text-sm sm:text-base leading-relaxed font-light">
                    {suite.description}
                  </p>

                  {/* Curated Key Specifications Matrix */}
                  <div className="grid grid-cols-2 gap-3 py-4 border-y border-sand-300 text-xs text-charcoal-700">
                    <div className="flex items-center gap-2 truncate">
                      <Bed className="w-4 h-4 text-bronze-600 shrink-0" />
                      <span className="truncate">{suite.bed}</span>
                    </div>
                    <div className="flex items-center gap-2 truncate">
                      <Users className="w-4 h-4 text-bronze-600 shrink-0" />
                      <span>{suite.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 truncate col-span-2 text-olive-900 font-medium">
                      <Sparkles className="w-4 h-4 text-bronze-500 shrink-0" />
                      <span className="truncate">{suite.features[0]}</span>
                    </div>
                  </div>

                  {/* Actions & Nightly Rate */}
                  <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[10px] uppercase font-sans tracking-luxury text-charcoal-400 block">
                        Sanctuary Tariff
                      </span>
                      <div className="font-serif text-2xl sm:text-3xl text-charcoal-950 font-light">
                        {rateInfo.symbol}{price.toLocaleString()} <span className="text-xs font-sans font-normal text-charcoal-500">/ night</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setSelectedSuiteForDetail(suite)}
                        data-cursor="button"
                        data-cursor-text="VIEW"
                        className="px-5 py-3 border border-sand-300 hover:border-charcoal-800 text-xs uppercase tracking-luxury text-charcoal-800 hover:text-charcoal-950 transition-colors"
                      >
                        Explore Dossier
                      </button>

                      <button
                        onClick={() => onOpenBookingWithSuite(suite.id)}
                        data-cursor="button"
                        data-cursor-text="BOOK"
                        className="px-6 py-3 bg-olive-900 hover:bg-charcoal-950 text-ivory-50 text-xs font-semibold uppercase tracking-luxury transition-all shadow-md"
                      >
                        Reserve
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      <RoomDetailModal
        isOpen={Boolean(selectedSuiteForDetail)}
        onClose={() => setSelectedSuiteForDetail(null)}
        suite={selectedSuiteForDetail}
        currentCurrency={currentCurrency}
        onSelectForBooking={(id) => onOpenBookingWithSuite(id)}
      />
    </section>
  );
}
