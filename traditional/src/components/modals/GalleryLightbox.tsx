import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Camera, MapPin } from 'lucide-react';
import { GalleryItem } from '../../types';

interface GalleryLightboxProps {
  item: GalleryItem | null;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export const GalleryLightbox: React.FC<GalleryLightboxProps> = ({
  item,
  isOpen,
  onClose,
  onNext,
  onPrev,
}) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-palace-night/95 backdrop-blur-2xl"
          />

          {/* Lightbox Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative z-10 max-w-6xl w-full max-h-[90vh] flex flex-col items-center"
          >
            {/* Top Toolbar */}
            <div className="w-full flex items-center justify-between py-3 px-4 border-b border-gold-500/20 text-palace-cream mb-4">
              <div className="flex items-center gap-2 text-xs font-sans tracking-widest uppercase text-gold-400">
                <Camera className="w-4 h-4" />
                <span>The Mewar Photographic Archive</span>
              </div>

              <button
                onClick={onClose}
                className="p-2 rounded-full border border-gold-500/30 text-gold-300 hover:text-white hover:border-gold-400 hover:bg-palace-surface transition-all cursor-pointer"
                aria-label="Close Lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Photo Container */}
            <div className="relative w-full flex items-center justify-center overflow-hidden rounded-xl border border-gold-500/30 max-h-[70vh]">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full max-h-[70vh] object-contain"
              />

              {/* Prev Button */}
              <button
                onClick={onPrev}
                className="absolute left-4 p-3 rounded-full bg-palace-night/80 border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-palace-night transition-all cursor-pointer"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>

              {/* Next Button */}
              <button
                onClick={onNext}
                className="absolute right-4 p-3 rounded-full bg-palace-night/80 border border-gold-500/40 text-gold-300 hover:bg-gold-500 hover:text-palace-night transition-all cursor-pointer"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Caption & Context Footer */}
            <div className="w-full mt-4 p-4 rounded-xl palace-glass border border-gold-500/20 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
              <div>
                <h4 className="font-serif text-xl text-palace-cream">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-palace-sandstone/80 font-light mt-0.5">
                  {item.caption}
                </p>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-gold-400 font-sans tracking-widest uppercase shrink-0">
                <MapPin className="w-3.5 h-3.5" />
                <span>{item.location}</span>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
