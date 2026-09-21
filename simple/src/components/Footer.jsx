import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-stone-900 text-stone-300 pt-16 pb-12 border-t border-stone-800 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-stone-800">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-amber-700 text-white flex items-center justify-center font-serif text-base font-bold">
                C&S
              </div>
              <span className="font-serif text-xl text-white font-semibold tracking-tight">
                {siteConfig.name}
              </span>
            </div>
            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              {siteConfig.heroSubtitle}
            </p>
            <p className="text-xs text-stone-500">
              Family-owned and sustainably operated since 2014.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3 text-xs">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Explore
            </h4>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-amber-400 transition-colors">Our Story & Heritage</a></li>
              <li><a href="#experience" className="hover:text-amber-400 transition-colors">Boutique Rooms</a></li>
              <li><a href="#experience" className="hover:text-amber-400 transition-colors">Bistro & Terrace Menu</a></li>
              <li><a href="#gallery" className="hover:text-amber-400 transition-colors">Inn Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-amber-400 transition-colors">Guest Reviews</a></li>
            </ul>
          </div>

          {/* Practical Hours */}
          <div className="space-y-3 text-xs">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Daily Hours
            </h4>
            <ul className="space-y-1.5 text-stone-400">
              <li><span className="text-stone-200">Reception:</span> 7:00 AM – 10:00 PM</li>
              <li><span className="text-stone-200">Check-in:</span> 3:00 PM onwards</li>
              <li><span className="text-stone-200">Check-out:</span> 11:00 AM</li>
              <li><span className="text-stone-200">Breakfast:</span> 7:30 AM – 10:30 AM</li>
              <li><span className="text-stone-200">Dinner:</span> 5:30 PM – 9:30 PM (Wed–Sun)</li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-3 text-xs">
            <h4 className="font-semibold text-white uppercase tracking-wider text-[11px]">
              Contact Desk
            </h4>
            <div className="space-y-2 text-stone-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.contact.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <a href={`tel:${siteConfig.contact.phoneClean}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <span>Built for Independent Hospitality</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 hover:text-stone-200 transition-colors p-1"
              aria-label="Scroll to top of page"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
