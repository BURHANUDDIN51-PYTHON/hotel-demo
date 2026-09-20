import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
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
    <section id="suites" className="py-24 sm:py-32 bg-ivory-100/60 text-charcoal-900 border-t border-sand-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="ROOMS & SUITES"
          title="The Sanctuary Collection"
          subtitle="Twenty-four sculpted chambers designed as peaceful observatories for light, mountain air, and the sea."
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 text-xs font-sans tracking-luxury uppercase transition-all duration-300 rounded-full ${
                activeCategory === cat.id
                  ? 'bg-olive-800 text-ivory-50 shadow-sm'
                  : 'bg-ivory-50 text-charcoal-600 hover:text-charcoal-950 border border-sand-200 hover:border-sand-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Suites Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12">
          {filteredSuites.map((suite) => {
            const price = Math.round(suite.priceEUR * rateInfo.rate);

            return (
              <div
                key={suite.id}
                className="group bg-ivory-50 border border-sand-200/80 rounded-sm overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-500 flex flex-col justify-between"
              >
                {/* Image Container with Zoom and Badge */}
                <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-sand-200">
                  <img
                    src={suite.images[0]}
                    alt={suite.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-ivory-50/90 backdrop-blur-sm text-charcoal-900 text-[10px] tracking-ultra uppercase font-medium">
                    {suite.categoryLabel}
                  </div>

                  {/* Bottom Price Pill inside image */}
                  <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-charcoal-950/80 backdrop-blur-sm text-ivory-50 text-xs font-serif font-light">
                    From <span className="font-semibold text-bronze-300">{rateInfo.symbol}{price.toLocaleString()}</span> / night
                  </div>
                </div>

                {/* Card Content Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[11px] font-mono tracking-wider uppercase text-bronze-600">
                        {suite.subtitle}
                      </span>
                      <span className="text-xs font-sans text-charcoal-400">
                        {suite.size}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-950 font-light group-hover:text-olive-900 transition-colors">
                      {suite.title}
                    </h3>

                    <p className="font-sans text-charcoal-600 text-sm leading-relaxed line-clamp-2">
                      {suite.description}
                    </p>
                  </div>

                  {/* Quick Feature Pills */}
                  <div className="pt-4 border-t border-sand-200/80 grid grid-cols-2 gap-2 text-xs text-charcoal-600">
                    <div className="flex items-center gap-2 truncate">
                      <Bed className="w-3.5 h-3.5 text-bronze-500 shrink-0" />
                      <span className="truncate">{suite.bed}</span>
                    </div>
                    <div className="flex items-center gap-2 truncate">
                      <Users className="w-3.5 h-3.5 text-bronze-500 shrink-0" />
                      <span>{suite.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 truncate col-span-2">
                      <Sparkles className="w-3.5 h-3.5 text-bronze-500 shrink-0" />
                      <span className="truncate">{suite.features[0]}</span>
                    </div>
                  </div>

                  {/* Actions row */}
                  <div className="pt-2 flex items-center justify-between gap-4">
                    <button
                      onClick={() => setSelectedSuiteForDetail(suite)}
                      className="text-xs uppercase tracking-luxury font-medium text-charcoal-800 hover:text-olive-800 flex items-center gap-1.5 transition-colors group/link"
                    >
                      <span>Discover Suite</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                    </button>

                    <button
                      onClick={() => onOpenBookingWithSuite(suite.id)}
                      className="px-5 py-2.5 bg-olive-800 hover:bg-olive-900 text-ivory-50 text-xs font-semibold uppercase tracking-luxury transition-all rounded-sm shadow-sm"
                    >
                      Reserve
                    </button>
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
