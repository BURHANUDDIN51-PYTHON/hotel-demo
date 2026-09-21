import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar, ArrowRight } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const Navbar = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Rooms & Menu', href: '#experience' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#testimonials' },
    { name: 'Location', href: '#location' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FBF9F5]/90 backdrop-blur-md shadow-sm py-3 border-b border-stone-200/80' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group text-left">
            <div className="w-10 h-10 rounded-full bg-amber-800/90 text-white flex items-center justify-center font-serif text-lg font-semibold tracking-wider shadow-sm group-hover:bg-amber-900 transition-colors">
              C&S
            </div>
            <div>
              <span className={`block font-serif text-xl tracking-tight leading-tight font-semibold transition-colors ${
                isScrolled ? 'text-stone-900' : 'text-stone-950 md:text-stone-900'
              }`}>
                {siteConfig.name}
              </span>
              <span className="block text-[11px] uppercase tracking-widest text-stone-500 font-medium">
                {siteConfig.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-stone-700 hover:text-amber-800 transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-amber-800 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="flex items-center gap-2 text-xs font-semibold text-stone-700 hover:text-amber-800 py-2 px-3 rounded-full hover:bg-stone-100 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>{siteConfig.contact.phone}</span>
            </a>

            <button
              onClick={() => onOpenBooking('room')}
              className="inline-flex items-center gap-2 bg-stone-900 hover:bg-amber-800 text-white text-xs font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95"
            >
              <Calendar className="w-3.5 h-3.5 text-amber-300" />
              <span>Reserve</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenBooking('room')}
              className="bg-stone-900 text-white text-xs font-semibold px-3 py-1.5 rounded-full"
            >
              Reserve
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="p-2 rounded-lg text-stone-700 hover:bg-stone-200/60 focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FBF9F5] border-b border-stone-200 px-6 py-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-stone-800 hover:text-amber-800 py-1"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-stone-200 flex flex-col gap-3">
              <a
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="flex items-center gap-2 text-sm text-stone-700 font-medium py-1"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call {siteConfig.contact.phone}</span>
              </a>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking('room');
                }}
                className="w-full flex items-center justify-center gap-2 bg-stone-900 text-white text-sm font-semibold py-3 rounded-xl hover:bg-amber-800 transition-colors"
              >
                <span>Book a Room or Table</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
