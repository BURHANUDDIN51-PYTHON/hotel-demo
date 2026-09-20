import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { diningData } from '../../data/hotelData';
import { Utensils, Wine, Award, Calendar, Sparkles, Flame } from 'lucide-react';
import TableReserveModal from './TableReserveModal';

export default function DiningSection() {
  const [activeTab, setActiveTab] = useState('tasting');
  const [reserveModalOpen, setReserveModalOpen] = useState(false);

  return (
    <section id="dining" className="py-24 sm:py-32 bg-charcoal-950 text-ivory-50 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-terracotta-800/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-olive-900/30 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header (Dark Mode) */}
        <SectionHeader
          dark={true}
          badge="GASTRONOMY & TERROIR"
          title={diningData.restaurantName}
          subtitle={diningData.headline}
        />

        {/* Accolades Bar */}
        <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-10 mb-16 py-4 border-y border-charcoal-800/80 text-sand-300/80 text-xs tracking-luxury uppercase">
          {diningData.accolades.map((acc, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Award className="w-4 h-4 text-bronze-400 shrink-0" />
              <span>{acc}</span>
            </div>
          ))}
        </div>

        {/* Two-Column Culinary Narrative & Atmosphere */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left: Chef Bio & Wood-Fire Manifesto */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-bronze-400">
              <Flame className="w-4 h-4 text-terracotta-500" />
              <span>ZERO-KILOMETER HARVEST</span>
            </div>

            <h3 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-light leading-snug">
              Every dish is born from embers, sea salt, and cold-pressed estate olive oil.
            </h3>

            <p className="text-sand-300/90 font-sans text-sm sm:text-base leading-relaxed font-light">
              {diningData.chef.bio}
            </p>

            {/* Chef Card */}
            <div className="flex items-center gap-4 p-4 bg-charcoal-900/80 border border-charcoal-800 rounded-sm">
              <img
                src={diningData.chef.image}
                alt={diningData.chef.name}
                className="w-14 h-14 rounded-full object-cover border border-bronze-400/50"
              />
              <div>
                <div className="font-serif text-lg text-ivory-50 font-light">
                  {diningData.chef.name}
                </div>
                <div className="text-xs text-sand-400 tracking-wider uppercase font-sans">
                  {diningData.chef.role}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setReserveModalOpen(true)}
                className="px-7 py-3.5 bg-bronze-400 hover:bg-bronze-300 text-charcoal-950 text-xs font-semibold uppercase tracking-luxury transition-all shadow-lg flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>Reserve a Table</span>
              </button>
            </div>
          </div>

          {/* Right: Atmosphere Image Grid */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 sm:h-72 overflow-hidden rounded-sm">
                <img
                  src={diningData.atmosphereImages[0]}
                  alt="Atmospheric courtyard dining"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div className="h-44 sm:h-52 overflow-hidden rounded-sm">
                <img
                  src={diningData.atmosphereImages[1]}
                  alt="Wood-fired hearth"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="pt-8">
              <div className="h-80 sm:h-96 overflow-hidden rounded-sm">
                <img
                  src={diningData.atmosphereImages[2]}
                  alt="Low intervention cellar wine"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Interactive Menu Showcase */}
        <div className="bg-charcoal-900/70 border border-charcoal-800 rounded-sm p-6 sm:p-10 text-left">
          
          {/* Menu Tab Switches */}
          <div className="flex items-center justify-between border-b border-charcoal-800 pb-6 mb-8 flex-wrap gap-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-bronze-400 block mb-1">
                Seasonal Composition
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl text-ivory-50 font-light">
                {activeTab === 'tasting' ? "The Autumn Terroir Tasting Menu" : "The Botanical Cellar & Spirits"}
              </h4>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('tasting')}
                className={`px-4 py-2 text-xs uppercase tracking-luxury rounded-sm transition-colors ${
                  activeTab === 'tasting'
                    ? 'bg-ivory-50 text-charcoal-950 font-semibold'
                    : 'bg-charcoal-800 text-sand-300 hover:text-white'
                }`}
              >
                Tasting Menu
              </button>
              <button
                onClick={() => setActiveTab('cellar')}
                className={`px-4 py-2 text-xs uppercase tracking-luxury rounded-sm transition-colors ${
                  activeTab === 'cellar'
                    ? 'bg-ivory-50 text-charcoal-950 font-semibold'
                    : 'bg-charcoal-800 text-sand-300 hover:text-white'
                }`}
              >
                Botanical Cocktails
              </button>
            </div>
          </div>

          {/* Tab 1: Tasting Menu Movements */}
          {activeTab === 'tasting' ? (
            <div className="space-y-6">
              {diningData.menus.tasting.map((item, idx) => (
                <div key={idx} className="group flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-charcoal-800/60 pb-5 gap-2">
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-mono tracking-widest text-bronze-400">
                      {item.course}
                    </span>
                    <h5 className="font-serif text-xl sm:text-2xl text-ivory-50 font-light group-hover:text-bronze-300 transition-colors">
                      {item.dish}
                    </h5>
                    <p className="text-xs text-sand-400/80 font-sans font-light max-w-xl">
                      {item.notes}
                    </p>
                  </div>

                  <div className="text-right shrink-0 mt-2 sm:mt-0">
                    <span className="text-[10px] uppercase font-sans text-charcoal-400 block">Sommelier Pairing</span>
                    <span className="font-serif text-xs italic text-sand-200">{item.pairing}</span>
                  </div>
                </div>
              ))}
              <div className="pt-2 flex flex-col sm:flex-row justify-between items-center text-xs text-sand-400">
                <span>Five Movements €145 • Sommelier Natural Wine Pairing €95</span>
                <span className="italic mt-1 sm:mt-0">Menu evolves weekly depending on morning boat catch & garden harvest.</span>
              </div>
            </div>
          ) : (
            /* Tab 2: Botanical Cellar Cocktails */
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {diningData.menus.cellarBar.map((drink, idx) => (
                <div key={idx} className="p-5 bg-charcoal-950/60 border border-charcoal-800 rounded-sm space-y-2">
                  <div className="flex justify-between items-baseline">
                    <h5 className="font-serif text-lg text-ivory-50 font-light">{drink.name}</h5>
                    <span className="text-xs font-serif text-bronze-400">{drink.price}</span>
                  </div>
                  <p className="text-xs text-sand-400 leading-relaxed font-light">
                    {drink.ingredients}
                  </p>
                </div>
              ))}
            </div>
          )}

        </div>

      </div>

      {/* Table Reservation Modal */}
      <TableReserveModal
        isOpen={reserveModalOpen}
        onClose={() => setReserveModalOpen(false)}
      />
    </section>
  );
}
