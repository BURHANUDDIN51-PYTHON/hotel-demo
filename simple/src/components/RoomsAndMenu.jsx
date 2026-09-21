import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { BedDouble, UtensilsCrossed, Users, Check, Sparkles, ArrowRight, Bath, Maximize2 } from 'lucide-react';

export const RoomsAndMenu = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState('rooms'); // 'rooms' | 'menu'
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredMenuItems = selectedCategory === 'All' 
    ? siteConfig.menuItems 
    : siteConfig.menuItems.filter(item => item.category === selectedCategory);

  return (
    <section id="experience" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
          The Experience
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-stone-900 font-semibold mt-2 tracking-tight">
          Restful Rooms & Wholesome Dining
        </h2>
        <p className="text-stone-600 mt-3 text-sm sm:text-base">
          Whether you are looking for a weekend hideaway or a memorable dinner in our garden bistro, explore what we have prepared for you.
        </p>

        {/* Big Switcher Tabs */}
        <div className="inline-flex p-1.5 bg-stone-200/80 rounded-2xl mt-8 shadow-inner">
          <button
            onClick={() => setActiveTab('rooms')}
            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'rooms'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <BedDouble className="w-4 h-4 text-amber-700" />
            <span>Boutique Rooms (24)</span>
          </button>
          
          <button
            onClick={() => setActiveTab('menu')}
            className={`flex items-center gap-2.5 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
              activeTab === 'menu'
                ? 'bg-white text-stone-900 shadow-sm'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <UtensilsCrossed className="w-4 h-4 text-amber-700" />
            <span>Garden Bistro Menu</span>
          </button>
        </div>
      </div>

      {/* --- TAB 1: ROOMS VIEW --- */}
      {activeTab === 'rooms' && (
        <div className="space-y-12 animate-in fade-in duration-300">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {siteConfig.rooms.map((room) => (
              <div
                key={room.id}
                className="bg-white rounded-2xl overflow-hidden border border-stone-200/90 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group text-left"
              >
                {/* Image & Tag */}
                <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
                  <img
                    src={room.image}
                    alt={room.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
                    {room.badge}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-white/95 backdrop-blur-xs text-stone-900 text-xs font-semibold px-2.5 py-1 rounded-md shadow-xs">
                    {room.size}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                        {room.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-stone-500 mt-2 pb-3 border-b border-stone-100">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {room.capacity}
                      </span>
                      <span>•</span>
                      <span>{room.bed}</span>
                    </div>

                    <p className="text-stone-600 text-xs sm:text-sm mt-3 leading-relaxed">
                      {room.description}
                    </p>

                    {/* Room features */}
                    <div className="mt-4 space-y-1.5">
                      {room.amenities.map((item, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                          <Check className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price & Action */}
                  <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between">
                    <div>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-2xl font-bold text-stone-900">{room.price}</span>
                        <span className="text-xs text-stone-500">/{room.pricePeriod}</span>
                      </div>
                      <span className="text-[11px] text-emerald-700 font-medium">Includes Farm Breakfast</span>
                    </div>

                    <button
                      onClick={() => onOpenBooking('room', room.title)}
                      className="inline-flex items-center gap-1.5 bg-stone-900 hover:bg-amber-800 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-colors shadow-xs"
                    >
                      <span>Check Dates</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Simple Note on Direct Booking */}
          <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/70 text-center max-w-xl mx-auto text-xs text-amber-900">
            <span className="font-semibold">Direct Booking Benefit:</span> Best rate guaranteed, complimentary late check-out till noon upon availability, and house baked welcome treats.
          </div>
        </div>
      )}

      {/* --- TAB 2: RESTAURANT & BISTRO MENU VIEW --- */}
      {activeTab === 'menu' && (
        <div className="space-y-8 animate-in fade-in duration-300">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2">
            {siteConfig.menuCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-amber-800 text-white shadow-xs'
                    : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Menu Items Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {filteredMenuItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-xl border border-stone-200 flex gap-4 hover:border-amber-300 transition-colors group"
              >
                {/* Photo thumbnail */}
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden flex-shrink-0 bg-stone-100 relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {item.featured && (
                    <span className="absolute top-1 left-1 bg-amber-800 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-baseline justify-between gap-2">
                      <h4 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-800 transition-colors">
                        {item.name}
                      </h4>
                      <span className="font-serif text-base font-bold text-amber-900 flex-shrink-0">
                        {item.price}
                      </span>
                    </div>

                    <span className="inline-block text-[11px] font-medium text-stone-500 bg-stone-100 px-2 py-0.5 rounded mt-1">
                      {item.dietary}
                    </span>

                    <p className="text-xs sm:text-sm text-stone-600 mt-2 leading-relaxed line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-2 text-[11px] text-stone-400">
                    Category: {item.category}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bistro Schedule & Booking Bar */}
          <div className="bg-stone-900 text-white p-6 sm:p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 text-left">
            <div>
              <h4 className="font-serif text-xl font-semibold">Join us for Dinner or Weekend Brunch</h4>
              <p className="text-stone-300 text-xs sm:text-sm mt-1 max-w-xl">
                Open Wednesday through Sunday. Indoor fireside seating and seasonal riverside terrace tables available.
              </p>
              <p className="text-amber-400 text-xs mt-2 font-medium">
                Hours: Lunch 12:00 PM – 3:00 PM • Dinner 5:30 PM – 9:30 PM
              </p>
            </div>

            <button
              onClick={() => onOpenBooking('table')}
              className="bg-amber-600 hover:bg-amber-500 text-white font-medium text-xs sm:text-sm px-6 py-3 rounded-xl transition-all flex items-center gap-2 flex-shrink-0"
            >
              <UtensilsCrossed className="w-4 h-4" />
              <span>Reserve a Bistro Table</span>
            </button>
          </div>

        </div>
      )}

    </section>
  );
};
