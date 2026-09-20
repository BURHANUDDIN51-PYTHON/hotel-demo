import React, { useState } from 'react';
import Modal from '../common/Modal';
import { hotelBrand } from '../../data/hotelData';
import { Check, Sparkles, Maximize2, Users, Bed, Eye, ArrowRight } from 'lucide-react';

export default function RoomDetailModal({
  isOpen,
  onClose,
  suite,
  currentCurrency = 'EUR',
  onSelectForBooking
}) {
  if (!suite) return null;

  const [activeImgIndex, setActiveImgIndex] = useState(0);

  const rateInfo = hotelBrand.currencyRates[currentCurrency] || hotelBrand.currencyRates.EUR;
  const price = Math.round(suite.priceEUR * rateInfo.rate);

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={suite.title}
      subtitle={suite.subtitle}
      maxWidth="max-w-5xl"
    >
      <div className="space-y-8">
        
        {/* Photo Gallery with Thumbnail selector */}
        <div className="space-y-3">
          <div className="relative h-[320px] sm:h-[420px] w-full overflow-hidden rounded-sm bg-sand-200">
            <img
              src={suite.images[activeImgIndex]}
              alt={suite.title}
              className="w-full h-full object-cover transition-all duration-700"
            />
            <div className="absolute top-3 left-3 px-3 py-1 bg-charcoal-950/80 backdrop-blur-sm text-ivory-50 text-xs tracking-luxury uppercase">
              {suite.categoryLabel}
            </div>
            <div className="absolute bottom-3 right-3 px-3 py-1 bg-ivory-50/90 backdrop-blur-sm text-charcoal-900 text-xs font-serif">
              {activeImgIndex + 1} of {suite.images.length}
            </div>
          </div>

          {/* Thumbnails row */}
          <div className="flex gap-3 overflow-x-auto pb-1">
            {suite.images.map((imgUrl, idx) => (
              <button
                key={idx}
                onClick={() => setActiveImgIndex(idx)}
                className={`relative w-24 h-16 shrink-0 rounded-sm overflow-hidden border-2 transition-all ${
                  activeImgIndex === idx ? 'border-bronze-500 scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                }`}
              >
                <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Specifications Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-sand-100/60 border border-sand-200 rounded-sm text-left">
          <div className="flex items-center gap-3">
            <Maximize2 className="w-4 h-4 text-bronze-600 shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-sans tracking-luxury text-charcoal-500 block">Dimensions</span>
              <span className="text-xs font-medium text-charcoal-900">{suite.size}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Users className="w-4 h-4 text-bronze-600 shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-sans tracking-luxury text-charcoal-500 block">Capacity</span>
              <span className="text-xs font-medium text-charcoal-900">{suite.capacity}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Bed className="w-4 h-4 text-bronze-600 shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-sans tracking-luxury text-charcoal-500 block">Bedding</span>
              <span className="text-xs font-medium text-charcoal-900 truncate">{suite.bed}</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Eye className="w-4 h-4 text-bronze-600 shrink-0" />
            <div>
              <span className="text-[10px] uppercase font-sans tracking-luxury text-charcoal-500 block">Aspect</span>
              <span className="text-xs font-medium text-charcoal-900 truncate">{suite.view}</span>
            </div>
          </div>
        </div>

        {/* Narrative description */}
        <div className="space-y-3 text-left">
          <h4 className="text-xs uppercase tracking-ultra font-sans text-olive-800 font-semibold">
            Atmosphere & Architecture
          </h4>
          <p className="font-sans text-charcoal-700 leading-relaxed text-sm sm:text-base font-light">
            {suite.description}
          </p>
        </div>

        {/* Features & Inclusions Two Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left pt-2">
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-luxury font-sans font-semibold text-charcoal-800">
              Architectural Features
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-600">
              {suite.features.map((feat, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 mt-2 shrink-0"></span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-luxury font-sans font-semibold text-charcoal-800">
              Complimentary Inclusions
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-charcoal-600">
              {suite.amenities.map((amenity, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive-700 mt-0.5 shrink-0" />
                  <span>{amenity}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Sensory Detail Pill */}
        <div className="p-4 bg-ivory-100 border-l-2 border-bronze-400 text-left flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-bronze-600 shrink-0 mt-0.5" />
          <div className="text-xs text-charcoal-700">
            <strong className="text-charcoal-900 font-semibold">Sensory Signature:</strong> Scented with bespoke wild mountain thyme & dried sea salt oils distilled on the estate. Turndown service includes warm herbal tisanes and unbleached organic linen bedding.
          </div>
        </div>

        {/* Bottom Booking Action Bar */}
        <div className="pt-6 border-t border-sand-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <span className="text-[11px] uppercase tracking-luxury text-charcoal-500 block">From</span>
            <div className="font-serif text-3xl text-charcoal-950 font-light">
              {rateInfo.symbol}{price.toLocaleString()} <span className="text-sm font-sans font-normal text-charcoal-500">/ night</span>
            </div>
          </div>

          <div className="flex gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-6 py-3 border border-sand-300 text-xs uppercase tracking-luxury text-charcoal-700 hover:bg-sand-100 transition-colors w-1/2 sm:w-auto"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onSelectForBooking(suite.id);
              }}
              className="px-8 py-3 bg-olive-800 hover:bg-olive-900 text-ivory-50 text-xs uppercase tracking-luxury font-semibold transition-all shadow-md flex items-center justify-center gap-2 w-1/2 sm:w-auto"
            >
              <span>Reserve This Suite</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </Modal>
  );
}
