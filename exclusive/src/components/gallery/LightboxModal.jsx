import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ isOpen, onClose, items, currentIndex, onIndexChange }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onIndexChange((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onIndexChange((currentIndex - 1 + items.length) % items.length);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, currentIndex, items.length, onIndexChange]);

  if (!isOpen || !items[currentIndex]) return null;

  const currentItem = items[currentIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    onIndexChange((currentIndex - 1 + items.length) % items.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onIndexChange((currentIndex + 1) % items.length);
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8 animate-fade-in-scale"
      onClick={onClose}
    >
      {/* Top Bar */}
      <div className="flex items-center justify-between z-10" onClick={(e) => e.stopPropagation()}>
        <div className="text-ivory-50">
          <span className="text-[10px] tracking-ultra uppercase text-bronze-400 block">
            {currentItem.category}
          </span>
          <span className="font-serif text-lg sm:text-xl font-light">
            {currentItem.title}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-sand-300">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 text-sand-300 hover:text-white rounded-full bg-charcoal-900/80 hover:bg-charcoal-800 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div 
        className="relative my-auto flex items-center justify-center max-h-[78vh] w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={handlePrev}
          className="absolute left-2 sm:left-4 p-3 rounded-full bg-charcoal-900/70 hover:bg-charcoal-800 text-ivory-50 transition-colors z-20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <img
          src={currentItem.url}
          alt={currentItem.title}
          className="max-h-[75vh] max-w-full object-contain rounded-sm shadow-2xl animate-fade-in-scale"
        />

        <button
          onClick={handleNext}
          className="absolute right-2 sm:right-4 p-3 rounded-full bg-charcoal-900/70 hover:bg-charcoal-800 text-ivory-50 transition-colors z-20"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Caption Bottom Bar */}
      <div className="text-center z-10 py-2" onClick={(e) => e.stopPropagation()}>
        <p className="text-xs sm:text-sm text-sand-300/80 font-sans font-light italic max-w-lg mx-auto">
          "{currentItem.caption}"
        </p>
      </div>
    </div>
  );
}
