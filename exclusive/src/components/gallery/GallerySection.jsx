import React, { useState } from 'react';
import { galleryItems } from '../../data/hotelData';
import { Maximize2, Compass } from 'lucide-react';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filters = [
    { id: 'all', label: 'All Perspectives' },
    { id: 'architecture', label: 'Architecture & Stone' },
    { id: 'suites', label: 'Sanctuaries' },
    { id: 'gastronomy', label: 'Gastronomy' },
    { id: 'grounds', label: 'Terroir & Flora' },
  ];

  const filteredItems = activeFilter === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeFilter);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <section id="gallery" className="py-28 sm:py-36 bg-ivory-100/70 text-charcoal-900 border-b border-sand-300/80 paper-grain relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-sand-300 pb-6 mb-16 gap-4">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-bronze-700">
            <span className="font-bold">CH. 07</span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
            <span>VISUAL CHRONICLES — LES REGARDS</span>
          </div>
          <span className="text-xs font-serif italic text-charcoal-600 tracking-wider">
            An intimate photographic record of hand-chiseled limestone and shadow.
          </span>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-start sm:justify-center gap-2 sm:gap-3 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              data-cursor="button"
              data-cursor-text="FILTER"
              className={`px-5 py-2.5 text-xs font-sans tracking-luxury uppercase transition-all duration-300 rounded-full ${
                activeFilter === filter.id
                  ? 'bg-olive-900 text-ivory-50 shadow-soft'
                  : 'bg-ivory-50 text-charcoal-700 hover:text-charcoal-950 border border-sand-300 hover:border-sand-400'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Asymmetrical Gallery Salon: Mixed row heights and widths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          {filteredItems.map((item, idx) => {
            // Asymmetrical span logic based on index
            const colSpan = idx % 5 === 0 
              ? 'lg:col-span-8 h-[420px]' 
              : idx % 5 === 1 
              ? 'lg:col-span-4 h-[420px]' 
              : idx % 5 === 2 
              ? 'lg:col-span-4 h-[360px]' 
              : idx % 5 === 3 
              ? 'lg:col-span-4 h-[360px]' 
              : 'lg:col-span-4 h-[360px]';

            return (
              <div
                key={item.id}
                onClick={() => handleOpenLightbox(idx)}
                data-cursor="view"
                data-cursor-text="EXPAND"
                className={`group relative overflow-hidden rounded-sm cursor-pointer bg-sand-200 shadow-soft hover:shadow-elevated transition-all duration-700 ${colSpan}`}
              >
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-editorial"
                  loading="lazy"
                />

                {/* Subtle scrim on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/85 via-charcoal-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6 text-left" />

                {/* Overlay Label on Hover */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 text-left pointer-events-none">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-ivory-50/90 flex items-center justify-center text-charcoal-900 shadow-soft">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase font-mono tracking-widest text-bronze-300 block mb-1">
                      CHRONICLE 0{idx + 1} • {item.category}
                    </span>
                    <h4 className="font-serif text-xl sm:text-2xl text-ivory-50 font-light mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-sand-200 font-light line-clamp-1 italic font-serif">
                      "{item.caption}"
                    </p>
                  </div>
                </div>

                {/* Always visible small corner badge */}
                <div className="absolute bottom-3 left-3 px-2 py-0.5 bg-charcoal-950/60 backdrop-blur-sm text-ivory-50 text-[9px] font-mono tracking-widest uppercase group-hover:opacity-0 transition-opacity">
                  0{idx + 1}
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
