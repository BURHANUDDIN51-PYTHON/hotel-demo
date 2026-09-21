import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Maximize2, MapPin } from 'lucide-react';
import { GALLERY_ITEMS } from '../../data/palaceData';
import { GoldDivider } from '../common/GoldDivider';
import { GalleryLightbox } from '../modals/GalleryLightbox';

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Complete Archive' },
    { id: 'architecture', label: 'White Marble Architecture' },
    { id: 'suites', label: 'Royal Suites' },
    { id: 'courtyards', label: 'Lily Pond & Courtyards' },
    { id: 'gastronomy', label: 'Dining & The Gangaur' },
    { id: 'ceremonies', label: 'Ceremonial Moments' },
  ];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const handleOpenLightbox = (index: number) => {
    setActiveLightboxIndex(index);
  };

  const handleNext = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  };

  const handlePrev = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! - 1 + filteredItems.length) % filteredItems.length));
  };

  return (
    <section id="gallery" className="relative py-28 bg-palace-dark text-palace-cream overflow-hidden">
      <div className="absolute inset-0 bg-jaali-lattice pointer-events-none opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-400">
            <Camera className="w-4 h-4" />
            <span className="font-display text-xs tracking-ceremonial uppercase">
              The Photographic Exhibition
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-palace-marble leading-tight">
            Light, Marble & <br />
            <span className="text-gold-gradient italic font-normal">Living Water</span>
          </h2>

          <p className="font-serif text-base sm:text-lg text-palace-sandstone/80 italic max-w-2xl mx-auto">
            "A visual study of Jag Niwas. Capturing how morning light illuminates scalloped arches, afternoon breezes ripple the lake, and evening candles reflect on white stone."
          </p>

          <GoldDivider motif="sun" width="sm" className="mt-4" />

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-[11px] font-sans tracking-widest uppercase transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-gold-500 text-palace-night font-semibold shadow-md shadow-gold-500/20'
                    : 'border border-gold-500/25 text-gold-200/70 hover:border-gold-400 hover:text-gold-300'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetrical Editorial Art Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => handleOpenLightbox(idx)}
              className={`group relative rounded-2xl overflow-hidden border border-gold-500/20 bg-palace-card hover:border-gold-400 cursor-pointer transition-all duration-500 ${
                item.aspect === 'wide' ? 'sm:col-span-2' : ''
              }`}
            >
              <div
                className={`relative w-full overflow-hidden ${
                  item.aspect === 'wide'
                    ? 'aspect-[21/9]'
                    : item.aspect === 'portrait'
                    ? 'aspect-[3/4]'
                    : 'aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-108 transition-transform duration-700 ease-out"
                />

                {/* Ambient Shadow Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-palace-night via-palace-night/20 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-between p-6" />

                {/* Hover Reveal Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full text-[10px] font-sans tracking-widest uppercase bg-palace-night/80 border border-gold-400 text-gold-300 backdrop-blur-md">
                      {item.category}
                    </span>
                    <Maximize2 className="w-5 h-5 text-gold-400" />
                  </div>

                  <div className="space-y-1">
                    <p className="flex items-center gap-1.5 text-[11px] font-sans tracking-widest uppercase text-gold-400">
                      <MapPin className="w-3 h-3" />
                      {item.location}
                    </p>
                    <h4 className="font-serif text-2xl text-palace-cream font-medium">
                      {item.title}
                    </h4>
                    <p className="font-sans text-xs text-palace-sandstone/80 font-light line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <GalleryLightbox
        item={activeLightboxIndex !== null ? filteredItems[activeLightboxIndex] : null}
        isOpen={activeLightboxIndex !== null}
        onClose={() => setActiveLightboxIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
      />
    </section>
  );
};
