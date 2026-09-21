import React, { useState } from 'react';
import { siteConfig } from '../data/siteConfig';
import { Camera, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState(null);

  const categories = ['All', 'Rooms', 'Dining', 'Grounds', 'Interiors'];

  const filteredPhotos = activeCategory === 'All'
    ? siteConfig.gallery
    : siteConfig.gallery.filter(item => item.category === activeCategory);

  const openLightbox = (index) => {
    setActiveLightboxIndex(index);
  };

  const closeLightbox = () => {
    setActiveLightboxIndex(null);
  };

  const nextPhoto = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex((activeLightboxIndex + 1) % filteredPhotos.length);
    }
  };

  const prevPhoto = () => {
    if (activeLightboxIndex !== null) {
      setActiveLightboxIndex(
        (activeLightboxIndex - 1 + filteredPhotos.length) % filteredPhotos.length
      );
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-16">
      
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-semibold uppercase tracking-widest text-amber-800">
          Visual Tour
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold mt-2 tracking-tight">
          Life at The Cedar & Stone
        </h2>
        <p className="text-stone-600 mt-3 text-sm sm:text-base">
          Glimpses of quiet mornings, fresh kitchen harvests, hand-finished bedrooms, and our garden brook.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all ${
                activeCategory === cat
                  ? 'bg-stone-900 text-white shadow-xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {filteredPhotos.map((photo, idx) => (
          <div
            key={photo.id}
            onClick={() => openLightbox(idx)}
            className="group relative aspect-[4/3] rounded-xl overflow-hidden bg-stone-100 cursor-pointer shadow-xs hover:shadow-md transition-all duration-300"
          >
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
            {/* Hover overlay with title */}
            <div className="absolute inset-0 bg-stone-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col justify-end p-4 text-left text-white">
              <span className="text-[10px] uppercase font-semibold text-amber-300 tracking-wider">
                {photo.category}
              </span>
              <p className="text-xs font-medium truncate">{photo.title}</p>
              <Maximize2 className="w-4 h-4 absolute top-3 right-3 text-white/80" />
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeLightboxIndex !== null && filteredPhotos[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-5 right-5 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Close photo preview"
          >
            <X className="w-7 h-7" />
          </button>

          <button
            onClick={prevPhoto}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <div className="max-w-4xl w-full max-h-[85vh] flex flex-col items-center">
            <img
              src={filteredPhotos[activeLightboxIndex].url}
              alt={filteredPhotos[activeLightboxIndex].title}
              className="max-h-[75vh] w-auto max-w-full rounded-lg object-contain shadow-2xl"
            />
            <div className="mt-4 text-center text-white">
              <p className="text-sm font-semibold">{filteredPhotos[activeLightboxIndex].title}</p>
              <p className="text-xs text-stone-400 mt-1">
                {filteredPhotos[activeLightboxIndex].category} • Image {activeLightboxIndex + 1} of {filteredPhotos.length}
              </p>
            </div>
          </div>

          <button
            onClick={nextPhoto}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>
        </div>
      )}

    </section>
  );
};
