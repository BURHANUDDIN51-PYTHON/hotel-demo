import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, Calendar, Phone, ArrowUpRight } from 'lucide-react';
import { hotelBrand } from '../../data/hotelData';

export default function Navbar({ currentCurrency, onCurrencyChange, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currencyDropdownOpen, setCurrencyDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: "The Story", href: "#story" },
    { label: "Suites", href: "#suites" },
    { label: "Experiences", href: "#experiences" },
    { label: "Dining", href: "#dining" },
    { label: "Gallery", href: "#gallery" },
    { label: "Gatherings", href: "#events" },
    { label: "Location", href: "#location" },
    { label: "Contact", href: "#contact" },
  ];

  const currencies = Object.keys(hotelBrand.currencyRates);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-ivory-50/90 backdrop-blur-md py-4 border-b border-sand-200/60 shadow-soft text-charcoal-900'
            : 'bg-gradient-to-b from-charcoal-950/60 via-charcoal-950/20 to-transparent py-6 text-ivory-50'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="group flex flex-col tracking-widest text-left">
            <span className="font-serif text-xl sm:text-2xl font-light tracking-[0.2em] transition-colors group-hover:text-bronze-400">
              {hotelBrand.name}
            </span>
            <span className={`text-[9px] sm:text-[10px] uppercase font-sans tracking-[0.3em] ${
              isScrolled ? 'text-charcoal-500' : 'text-sand-200/80'
            }`}>
              Mallorca • Est. {hotelBrand.established}
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-5 xl:space-x-7 text-[11px] xl:text-[12px] uppercase tracking-[0.16em] font-medium whitespace-nowrap">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`relative py-1 whitespace-nowrap transition-colors group ${
                  isScrolled ? 'text-charcoal-700 hover:text-charcoal-950' : 'text-sand-100 hover:text-white'
                }`}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-bronze-400 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* Right Action Bar */}
          <div className="flex items-center space-x-4 sm:space-x-6">
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
                <Globe className="w-3.5 h-3.5" />
                <span>{currentCurrency}</span>
              </button>

              {currencyDropdownOpen && (
                <div className="absolute right-0 mt-2 w-28 bg-ivory-50 border border-sand-200 shadow-elevated rounded-sm py-1 z-50 text-charcoal-800 animate-fade-in-scale">
                  {currencies.map((curr) => (
                    <button
                      key={curr}
                      onClick={() => {
                        onCurrencyChange(curr);
                        setCurrencyDropdownOpen(false);
                      }}
                      className={`w-full text-left px-3 py-1.5 text-xs tracking-wider flex items-center justify-between hover:bg-sand-100 transition-colors ${
                        currentCurrency === curr ? 'font-bold text-olive-800 bg-sand-50' : ''
                      }`}
                    >
                      <span>{curr}</span>
                      <span className="text-charcoal-400">{hotelBrand.currencyRates[curr].symbol}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop Reserve Button */}
            <button
              onClick={onOpenBooking}
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2.5 text-xs font-medium tracking-[0.2em] uppercase transition-all duration-300 ${
                isScrolled
                  ? 'bg-olive-800 text-ivory-50 hover:bg-olive-900 shadow-sm'
                  : 'bg-ivory-50/90 text-charcoal-900 hover:bg-ivory-50 hover:shadow-lg backdrop-blur-sm'
              }`}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Reserve</span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className={`lg:hidden p-2 rounded-sm transition-colors ${
                isScrolled ? 'text-charcoal-900 hover:bg-sand-100' : 'text-ivory-50 hover:bg-white/10'
              }`}
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-charcoal-950 text-ivory-50 flex flex-col justify-between p-6 sm:p-10 animate-fade-in-scale">
          {/* Header inside mobile nav */}
          <div className="flex items-center justify-between border-b border-charcoal-800/80 pb-6">
            <div>
              <span className="font-serif text-2xl tracking-[0.2em] block">{hotelBrand.name}</span>
              <span className="text-[10px] tracking-ultra text-bronze-400 uppercase">Sanctuary of Light & Stone</span>
            </div>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-sand-300 hover:text-white rounded-full bg-charcoal-900/60"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links list */}
          <nav className="my-auto py-8 space-y-4 sm:space-y-6">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between text-2xl sm:text-3xl font-serif font-light text-sand-100 hover:text-bronze-300 transition-colors py-1"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-bronze-400/80">0{idx + 1}</span>
                  <span>{link.label}</span>
                </div>
                <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-bronze-400" />
              </a>
            ))}
          </nav>

          {/* Bottom actions */}
          <div className="border-t border-charcoal-800/80 pt-6 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 bg-bronze-400 text-charcoal-950 font-medium tracking-[0.2em] uppercase text-xs hover:bg-bronze-300 transition-colors"
            >
              Check Availability & Rates
            </button>

            <div className="flex items-center justify-between text-xs text-sand-400 pt-2">
              <a href={`tel:${hotelBrand.phone}`} className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5 text-bronze-400" />
                <span>{hotelBrand.phone}</span>
              </a>
              <span className="tracking-widest uppercase text-[10px]">{hotelBrand.locationName}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
