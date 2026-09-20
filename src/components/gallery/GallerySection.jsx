import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { galleryItems } from '../../data/hotelData';
import { Maximize2 } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'architecture', label: 'Architecture' },
    { id: 'suites', label: 'Suites' },
    { id: 'gastronomy', label: 'Gastronomy' },
    { id: 'grounds', label: 'Terroir & Grounds' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-ivory-50 text-charcoal-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="VISUAL CHRONICLES"
          title="The Sanctuary in Light & Frame"
          subtitle="An intimate photographic record of quiet mornings, hand-chiseled limestone, and the slow movement of shadow."
        />

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 text-xs font-sans tracking-luxury uppercase transition-all duration-300 rounded-full ${
                activeFilter === filter.id
                  ? 'bg-olive-800 text-ivory-50 shadow-sm'
                  : 'bg-sand-100 text-charcoal-700 hover:text-charcoal-950 border border-sand-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 auto-rows-[280px] sm:auto-rows-[320px]">
          {filteredItems.map((item, idx) => {
            const isWide = item.aspect === 'landscape' && idx % 3 === 0;

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                className={`group relative overflow-hidden rounded-sm cursor-pointer bg-sand-200 shadow-soft hover:shadow-elevated transition-all duration-500 ${
                  isWide ? 'sm:col-span-2' : ''
                }`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left" />

                {/* Hover Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 text-left pointer-events-none">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-ivory-50/90 flex items-center justify-center text-charcoal-900 shadow-md">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-bronze-300 block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-ivory-50 font-light mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-sand-200 font-light line-clamp-1 italic">
                      "{item.caption}"
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        items={filteredItems}
        currentIndex={currentIndex}
        onIndexChange={setCurrentIndex}
      />
    </section>
  );
}
