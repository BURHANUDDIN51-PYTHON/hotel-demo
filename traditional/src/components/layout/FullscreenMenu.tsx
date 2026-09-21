import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Compass, Phone, Mail } from 'lucide-react';
import { RoyalMonogram } from '../common/RoyalMonogram';
import { PALACE_INFO } from '../../data/palaceData';
import { PALACE_IMAGERY } from '../../data/imagery';

interface FullscreenMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const FullscreenMenu: React.FC<FullscreenMenuProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
}) => {
  const menuLinks = [
    { number: '01', title: 'The Legacy of Jag Niwas', href: '#legacy', desc: 'Built 1746 by Maharana Jagat Singh II of Mewar' },
    { number: '02', title: 'Signature Architecture', href: '#highlights', desc: 'The 4-acre white marble island, lily pond & scalloped jharokhas' },
    { number: '03', title: 'Royal Palace Suites', href: '#suites', desc: 'Shambhu Prakash Presidential Suite, Mayur Mahal & Khush Mahal' },
    { number: '04', title: 'Distinctive Dining', href: '#dining', desc: 'Neel Kamal, Bhairo rooftop, Jharokha, and the Gangaur Royal Barge' },
    { number: '05', title: 'Palace Experiences', href: '#experiences', desc: 'Pichola private boat arrival, heritage walk & Jag Mandir sunset cruise' },
    { number: '06', title: 'J Wellness Circle', href: '#wellness', desc: 'Holistic Indian therapies and the private J Wellness Spa Boat' },
    { number: '07', title: 'Lakeside Celebrations', href: '#celebrations', desc: 'Floating mandaps, candlelit island courtyards & royal banquets' },
    { number: '08', title: 'The Palace Art Exhibition', href: '#gallery', desc: 'Editorial photographic study of white marble and Pichola light' },
    { number: '09', title: 'Lake Pichola Location', href: '#location', desc: 'Arrival via private jetty, Jag Mandir views & Udaipur skyline' },
  ];

  const handleLinkClick = (href: string) => {
    onClose();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex flex-col bg-palace-night/95 backdrop-blur-2xl text-palace-cream overflow-y-auto"
        >
          {/* Header Bar within Menu */}
          <div className="flex items-center justify-between px-6 sm:px-12 py-6 border-b border-gold-500/20">
            <RoyalMonogram size="sm" showText={true} />

            <div className="flex items-center gap-6">
              <button
                onClick={() => {
                  onClose();
                  onOpenInquiry();
                }}
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border border-gold-500/40 text-gold-300 font-sans tracking-widest text-xs uppercase hover:bg-gold-500 hover:text-palace-night transition-all duration-300 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                Inquire Residence
              </button>

              <button
                onClick={onClose}
                className="p-3 rounded-full border border-gold-500/30 text-gold-300 hover:text-white hover:border-gold-400 hover:bg-palace-surface transition-all duration-300 cursor-pointer"
                aria-label="Close Palace Navigation"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Body Content: Split Editorial Grid */}
          <div className="flex-1 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 sm:px-12 py-10 items-center">
            {/* Left Column: Navigation Links */}
            <div className="lg:col-span-7 flex flex-col space-y-3">
              <span className="font-display text-xs tracking-ceremonial text-gold-500 uppercase">
                Chapters of Taj Lake Palace
              </span>

              <nav className="flex flex-col space-y-0.5">
                {menuLinks.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + idx * 0.04, duration: 0.35 }}
                  >
                    <button
                      onClick={() => handleLinkClick(item.href)}
                      className="group flex flex-col items-start py-2 text-left w-full transition-all cursor-pointer"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="font-display text-xs text-gold-500/60 group-hover:text-gold-400 transition-colors">
                          {item.number}
                        </span>
                        <span className="font-serif text-2xl sm:text-3xl text-palace-cream group-hover:text-gold-300 group-hover:translate-x-2 transition-all duration-300">
                          {item.title}
                        </span>
                      </div>
                      <span className="font-sans text-xs text-palace-sandstone/60 ml-8 tracking-wide font-light hidden sm:block">
                        {item.desc}
                      </span>
                    </button>
                  </motion.div>
                ))}
              </nav>
            </div>

            {/* Right Column: Visual Splendour & Taj Contact */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.25, duration: 0.45 }}
              className="lg:col-span-5 flex flex-col justify-between h-full space-y-8 border-t lg:border-t-0 lg:border-l border-gold-500/20 lg:pl-10 pt-8 lg:pt-0"
            >
              {/* Image Feature */}
              <div className="relative overflow-hidden rounded-lg border border-gold-500/30 aspect-[4/3] group">
                <img
                  src={PALACE_IMAGERY.heritageArches}
                  alt="Scalloped Mewari Arches at Taj Lake Palace"
                  className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-palace-night via-transparent to-transparent opacity-85" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-serif text-sm italic text-gold-200">
                    "Jag Niwas: An 18th-century summer sanctuary floating upon the waters of Lake Pichola."
                  </p>
                  <p className="text-[10px] font-sans tracking-widest text-gold-400 uppercase mt-1">
                    House of Mewar • Taj Heritage Hotels
                  </p>
                </div>
              </div>

              {/* Concierge Dispatch */}
              <div className="space-y-3 font-sans text-xs text-palace-sandstone/80">
                <div className="flex items-center gap-2 text-gold-400">
                  <Compass className="w-3.5 h-3.5" />
                  <span className="tracking-widest uppercase">{PALACE_INFO.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-gold-500" />
                  <span>{PALACE_INFO.phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-gold-500" />
                  <span>{PALACE_INFO.conciergeEmail}</span>
                </div>
              </div>

              {/* Action */}
              <div>
                <button
                  onClick={() => {
                    onClose();
                    onOpenInquiry();
                  }}
                  className="w-full py-3.5 px-6 rounded-md bg-gold-foil text-palace-night font-sans tracking-ceremonial text-xs font-semibold uppercase shadow-lg shadow-gold-500/10 hover:brightness-110 transition-all text-center cursor-pointer"
                >
                  Inquire for Residence
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
