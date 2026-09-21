import React, { useState, useEffect } from 'react';
import { Menu, Sun, Sunset, Moon, Sparkles } from 'lucide-react';
import { RoyalMonogram } from '../common/RoyalMonogram';
import { FullscreenMenu } from './FullscreenMenu';
import type { AtmosphereMode } from '../../types';

interface NavbarProps {
  atmosphereMode: AtmosphereMode;
  onSetAtmosphere: (mode: AtmosphereMode) => void;
  onOpenInquiry: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  atmosphereMode,
  onSetAtmosphere,
  onOpenInquiry,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Jag Niwas Legacy', href: '#legacy' },
    { name: 'Architecture', href: '#highlights' },
    { name: 'Suites', href: '#suites' },
    { name: 'Dining', href: '#dining' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'J Wellness', href: '#wellness' },
    { name: 'Celebrations', href: '#celebrations' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'py-3.5 palace-glass shadow-2xl shadow-palace-night/80 border-b border-gold-500/20'
            : 'py-6 bg-gradient-to-b from-palace-night/90 via-palace-night/40 to-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Left: Palace Menu Trigger & Visual Lighting Atmosphere */}
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="flex items-center gap-2 p-2 sm:px-3.5 sm:py-2 rounded-full border border-gold-500/30 hover:border-gold-400 bg-palace-card/60 hover:bg-palace-surface text-gold-300 transition-all duration-300 cursor-pointer"
              aria-label="Open Palace Chapters Menu"
            >
              <Menu className="w-4 h-4" />
              <span className="font-sans text-[11px] tracking-widest uppercase hidden md:inline">
                Palace Index
              </span>
            </button>

            {/* Atmosphere Mode Switcher (Visual mood only, no audio) */}
            <div className="hidden lg:flex items-center gap-1 p-1 rounded-full border border-gold-500/20 bg-palace-dark/70">
              <button
                onClick={() => onSetAtmosphere('surya')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                  atmosphereMode === 'surya'
                    ? 'bg-gold-500 text-palace-night font-semibold shadow'
                    : 'text-gold-200/60 hover:text-gold-300'
                }`}
                title="Surya: Golden Dawn Mood"
              >
                <Sun className="w-3 h-3" />
                <span>Dawn</span>
              </button>
              <button
                onClick={() => onSetAtmosphere('sandhya')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                  atmosphereMode === 'sandhya'
                    ? 'bg-gold-500 text-palace-night font-semibold shadow'
                    : 'text-gold-200/60 hover:text-gold-300'
                }`}
                title="Sandhya: Royal Sunset Dusk"
              >
                <Sunset className="w-3 h-3" />
                <span>Dusk</span>
              </button>
              <button
                onClick={() => onSetAtmosphere('chandra')}
                className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] uppercase tracking-widest transition-all cursor-pointer ${
                  atmosphereMode === 'chandra'
                    ? 'bg-gold-500 text-palace-night font-semibold shadow'
                    : 'text-gold-200/60 hover:text-gold-300'
                }`}
                title="Chandra: Moonlit Pichola Night"
              >
                <Moon className="w-3 h-3" />
                <span>Moonlight</span>
              </button>
            </div>
          </div>

          {/* Center: Taj Lake Palace Monogram */}
          <a
            href="#"
            className="flex items-center justify-center transform hover:scale-105 transition-transform duration-300"
          >
            <RoyalMonogram size={isScrolled ? 'sm' : 'md'} showText={true} />
          </a>

          {/* Right: Quick Links & Inquiry CTA */}
          <div className="flex items-center gap-3 sm:gap-5">
            {/* Quick Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-5 font-serif text-sm tracking-widest uppercase text-palace-sandstone/80">
              {navLinks.slice(0, 4).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-gold-300 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Inquire Stay CTA Button */}
            <button
              onClick={onOpenInquiry}
              className="relative group overflow-hidden px-4 sm:px-5 py-2 sm:py-2.5 rounded-full border border-gold-400 bg-gold-shimmer text-palace-night font-sans tracking-widest text-xs font-semibold uppercase shadow-md shadow-gold-500/20 hover:shadow-gold-500/40 hover:scale-[1.02] transition-all duration-300 cursor-pointer"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-palace-night" />
                <span className="hidden sm:inline">Inquire Residence</span>
                <span className="sm:hidden">Inquire</span>
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Modal Navigation */}
      <FullscreenMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onOpenInquiry={onOpenInquiry}
      />
    </>
  );
};
