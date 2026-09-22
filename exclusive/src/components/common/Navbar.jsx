import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Calendar, Volume2, VolumeX, ArrowUpRight } from 'lucide-react';
import { hotelBrand } from '../../data/hotelData';

export default function Navbar({
  currentCurrency,
  onCurrencyChange,
  onOpenBooking,
  ambientAudioActive,
  onToggleAmbientAudio,
}) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);
  const [localTime, setLocalTime] = useState('');

  // Live Mallorca / Deià local time (CET / CEST)
  useEffect(() => {
    const updateTime = () => {
      try {
        const timeStr = new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Madrid',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(new Date());
        setLocalTime(timeStr);
      } catch {
        setLocalTime('19:42:10');
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 9 Complete chapters of the narrative sanctuary
  const navChapters = [
    { num: '01', label: 'Prologue', href: '#hero' },
    { num: '02', label: 'Manifesto', href: '#story' },
    { num: '03', label: 'Atmosphere', href: '#spaces' },
    { num: '04', label: 'Sanctuaries', href: '#suites' },
    { num: '05', label: 'The Hearth', href: '#dining' },
    { num: '06', label: 'Rituals', href: '#experiences' },
    { num: '07', label: 'Chronicles', href: '#gallery' },
    { num: '08', label: 'Gatherings', href: '#events' },
    { num: '09', label: 'Terroir', href: '#location' },
  ];

  // Curated essential desktop links to ensure perfect centering and breathing room
  const desktopNavLinks = [
    { label: 'Manifesto', href: '#story' },
    { label: 'Atmosphere', href: '#spaces' },
    { label: 'Sanctuaries', href: '#suites' },
    { label: 'The Hearth', href: '#dining' },
    { label: 'Rituals', href: '#experiences' },
    { label: 'Chronicles', href: '#gallery' },
  ];

  const currencies = Object.keys(hotelBrand.currencyRates);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-700 ease-editorial ${
          isScrolled
            ? 'bg-ivory-50/92 backdrop-blur-md py-3.5 border-b border-sand-200/70 shadow-soft text-charcoal-950'
            : 'bg-gradient-to-b from-charcoal-950/70 via-charcoal-950/20 to-transparent py-5 sm:py-6 text-ivory-50'
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-14 flex items-center justify-between gap-6">
          
          {/* Brand Col & Local Time */}
          <div className="flex items-center gap-5 lg:gap-7 shrink-0 min-w-[220px]">
            <a href="#hero" className="group flex flex-col tracking-widest">
              <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.24em] transition-colors group-hover:text-bronze-400">
                {hotelBrand.name}
              </span>
              <span className={`text-[9px] uppercase font-sans tracking-[0.32em] font-light ${
                isScrolled ? 'text-charcoal-500' : 'text-sand-200/80'
              }`}>
                Deià • {hotelBrand.coordinates.split(',')[0]}
              </span>
            </a>

            {/* Live Estate Meridian Time Indicator */}
            <div className={`hidden 2xl:flex flex-col pl-6 border-l text-[10px] font-mono tracking-wider ${
              isScrolled ? 'border-sand-300 text-charcoal-500' : 'border-sand-100/20 text-sand-300/80'
            }`}>
              <span className="uppercase text-[9px] text-bronze-500">Estate Time (CET)</span>
              <span>{localTime || '20:15:00'}</span>
            </div>
          </div>

          {/* Desktop Narrative Nav Links - Centered & balanced */}
          <nav className="hidden lg:flex items-center justify-center gap-6 xl:gap-8 2xl:gap-10 text-[11px] uppercase tracking-[0.22em] font-medium flex-1">
            {desktopNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 transition-colors whitespace-nowrap group ${
                  isScrolled ? 'text-charcoal-700 hover:text-charcoal-950' : 'text-sand-100/90 hover:text-white'
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-bronze-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}

            {/* All Chapters Drawer Button for Desktop */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 border rounded-full transition-colors flex items-center gap-1 ${
                isScrolled
                  ? 'border-sand-300 text-charcoal-600 hover:text-charcoal-900 hover:border-bronze-400'
                  : 'border-white/20 text-sand-200 hover:text-white hover:border-bronze-400'
              }`}
            >
              <span>9 Chapters</span>
            </button>
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 min-w-[220px] justify-end">
            
            {/* Ambient Mediterranean Soundscape Toggle */}
            {onToggleAmbientAudio && (
              <button
                onClick={onToggleAmbientAudio}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] tracking-wider uppercase font-mono transition-colors ${
                  ambientAudioActive
                    ? 'bg-olive-800 text-ivory-50 border border-olive-700 shadow-sm'
                    : isScrolled
                    ? 'text-charcoal-600 hover:text-charcoal-900 border border-sand-300/70 hover:bg-sand-100'
                    : 'text-sand-200 hover:text-white border border-sand-200/20 hover:bg-white/10'
                }`}
                title={ambientAudioActive ? "Mute Mediterranean Ambient Soundscape" : "Play Mediterranean Ambient Soundscape"}
                aria-label="Soundscape toggle"
              >
                {ambientAudioActive ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-bronze-300 animate-pulse" />
                    <span className="hidden sm:inline">Audio On</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5 opacity-70" />
                    <span className="hidden sm:inline">Sound</span>
                  </>
                )}
              </button>
            )}

            {/* Currency Selector */}
            <div className="relative">
              <button
                onClick={() => setCurrencyDropdownOpen(!currencyDropdownOpen)}
                className={`flex items-center gap-1.5 text-xs tracking-luxury uppercase font-medium px-2 py-1 rounded transition-colors ${
                  isScrolled 
                    ? 'text-charcoal-700 hover:text-charcoal-950 hover:bg-sand-100' 
                    : 'text-sand-200 hover:text-white hover:bg-white/10'
                }`}
                aria-label="Select Currency"
              >
                <Globe className="w-3.5 h-3.5 text-bronze-400" />
                <span>{currentCurrency}</span>
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-ivory-50 border border-sand-300 shadow-elevated rounded-sm py-1 z-50 text-charcoal-800 animate-fade-in-scale">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        onCurrencyChange(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3.5 py-2 text-xs tracking-wider flex items-center justify-between hover:bg-sand-100 transition-colors ${
                        currentCurrency === curr ? 'font-semibold text-olive-800 bg-sand-100/60' : ''
                      }`}
                    >
                      <span>{curr}</span>
                      <span className="text-charcoal-400 font-serif">{hotelBrand.currencyRates[curr].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Reserve Pill Button */}
            <button
              onClick={onOpenBooking}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 text-xs font-semibold tracking-[0.22em] uppercase transition-all duration-500 ease-editorial ${
                isScrolled
                  ? 'bg-olive-800 text-ivory-50 hover:bg-olive-900 shadow-soft'
                  : 'bg-ivory-50 text-charcoal-950 hover:bg-sand-100 shadow-elevated'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-sm transition-colors ${
                isScrolled ? 'text-charcoal-950 hover:bg-sand-100' : 'text-ivory-50 hover:bg-white/10'
              }`}
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>

          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Editorial Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-950 text-ivory-50 flex flex-col justify-between p-6 sm:p-12 animate-fade-in-scale overflow-y-auto">
          {/* Header inside mobile nav */}
          <div className="flex items-center justify-between border-b border-charcoal-800/80 pb-6 shrink-0">
            <div>
              <span className="font-serif text-2xl tracking-[0.24em] block">{hotelBrand.name}</span>
              <span className="text-[10px] tracking-ultra text-bronze-400 uppercase">Sanctuary of Light & Stone • Mallorca</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2.5 text-sand-300 hover:text-white rounded-full bg-charcoal-900 border border-charcoal-800"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Chapters Navigation in Mobile */}
          <nav className="my-auto py-8 space-y-3 sm:space-y-4">
            <span className="text-[10px] font-mono tracking-widest uppercase text-bronze-400 block mb-2">
              CHAPTERS OF THE SANCTUARY
            </span>
            {navChapters.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between text-2xl sm:text-3xl font-serif font-light text-sand-100 hover:text-bronze-300 transition-colors py-1.5"
              >
                <div className="flex items-baseline gap-4">
                  <span className="text-xs font-mono text-bronze-500/80">CH. {link.num}</span>
                  <span>{link.label}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-bronze-400" />
              </a>
            ))}
          </nav>

          {/* Bottom actions & coordinates */}
          <div className="border-t border-charcoal-800/80 pt-6 space-y-4 shrink-0">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 bg-bronze-400 text-charcoal-950 font-semibold tracking-luxury uppercase text-xs hover:bg-bronze-300 transition-colors"
            >
              Reserve Sanctuary Accommodation
            </button>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs text-sand-400 pt-2 gap-2">
              <a href={`tel:${hotelBrand.phone}`} className="hover:text-white transition-colors">
                Estate Liaison: {hotelBrand.phone}
              </a>
              <span className="font-mono text-[10px] tracking-wider uppercase text-bronze-500">
                GPS: {hotelBrand.coordinates}
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
