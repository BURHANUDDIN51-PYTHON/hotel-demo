import React, { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Modal({ isOpen, onClose, title, subtitle, children, maxWidth = 'max-w-3xl' }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
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
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-charcoal-950/70 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div className={`relative w-full ${maxWidth} bg-ivory-50 border border-sand-200 shadow-2xl rounded-sm overflow-hidden z-10 my-8 animate-fade-in-scale`}>
        {/* Header */}
        <div className="px-6 sm:px-8 pt-6 sm:pt-8 pb-4 border-b border-sand-200/80 flex items-start justify-between">
          <div>
            {subtitle && (
              <span className="text-xs font-semibold tracking-luxury uppercase text-bronze-600 block mb-1">
                {subtitle}
              </span>
            )}
            <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-900 font-light">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 -mr-2 text-charcoal-400 hover:text-charcoal-900 transition-colors rounded-full hover:bg-sand-100"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="px-6 sm:px-8 py-6 max-h-[75vh] overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}
