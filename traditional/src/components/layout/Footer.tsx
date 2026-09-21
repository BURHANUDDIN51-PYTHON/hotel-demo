import React, { useState } from 'react';
import { RoyalMonogram } from '../common/RoyalMonogram';
import { GoldDivider } from '../common/GoldDivider';
import { PALACE_INFO } from '../../data/palaceData';
import { Send, MapPin, Phone, Mail, Compass, Award, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <footer className="relative bg-palace-night text-palace-cream border-t border-gold-500/20 overflow-hidden">
      <div className="absolute inset-0 bg-jaali-lattice pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 pt-20 pb-12">
        {/* Top Centerpiece */}
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <RoyalMonogram size="lg" showText={false} />
          <h3 className="font-serif text-3xl sm:text-4xl text-gold-gradient tracking-wide">
            {PALACE_INFO.name}
          </h3>
          <p className="font-serif text-base italic text-palace-sandstone/80">
            "{PALACE_INFO.tagline}"
          </p>
          <p className="font-sans text-xs tracking-ceremonial text-gold-500 uppercase">
            Jag Niwas • Built 1746 • Managed by Taj Hotels Since 1971
          </p>
        </div>

        <GoldDivider motif="sun" width="md" className="my-10" />

        {/* 4-Column Editorial Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 py-8 border-b border-gold-500/15">
          {/* Column 1: Heritage & Provenance */}
          <div className="space-y-4">
            <h4 className="font-display text-xs tracking-ceremonial uppercase text-gold-400">
              The Heritage of Jag Niwas
            </h4>
            <p className="font-sans text-xs text-palace-sandstone/70 leading-relaxed font-light">
              Erected by Maharana Jagat Singh II as an island pleasure palace upon Lake Pichola, Taj Lake Palace represents the zenith of Mewar craftsmanship and iconic Indian hospitality under the stewardship of Taj Hotels.
            </p>
            <div className="flex items-center gap-2 text-xs text-gold-300/80 pt-2">
              <Award className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Conde Nast Traveler Gold List & World Top Hotel</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gold-300/80">
              <ShieldCheck className="w-4 h-4 text-gold-400 shrink-0" />
              <span>Living Mewar Heritage Preservation</span>
            </div>
          </div>

          {/* Column 2: Palace Wings & Venues */}
          <div className="space-y-4">
            <h4 className="font-display text-xs tracking-ceremonial uppercase text-gold-400">
              Palace Sanctuaries & Dining
            </h4>
            <ul className="space-y-2.5 font-sans text-xs text-palace-sandstone/80">
              <li>
                <a href="#suites" className="hover:text-gold-300 transition-colors">
                  The Shambhu Prakash Presidential Suite
                </a>
              </li>
              <li>
                <a href="#suites" className="hover:text-gold-300 transition-colors">
                  Mayur Mahal (The Peacock Suite)
                </a>
              </li>
              <li>
                <a href="#suites" className="hover:text-gold-300 transition-colors">
                  Khush Mahal (The Queen's Palace)
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-gold-300 transition-colors">
                  Neel Kamal Mewari Fine Dining
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-gold-300 transition-colors">
                  Bhairo Open-Air Rooftop Gastronomy
                </a>
              </li>
              <li>
                <a href="#dining" className="hover:text-gold-300 transition-colors">
                  The 150-Year-Old Gangaur Royal Barge
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Coordinates & Direct Contact */}
          <div className="space-y-4">
            <h4 className="font-display text-xs tracking-ceremonial uppercase text-gold-400">
              Palace Address & Jetty
            </h4>
            <div className="space-y-2.5 font-sans text-xs text-palace-sandstone/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0 mt-0.5" />
                <span>{PALACE_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Compass className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{PALACE_INFO.coordinates} ({PALACE_INFO.elevation})</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{PALACE_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <span>{PALACE_INFO.conciergeEmail}</span>
              </div>
            </div>
          </div>

          {/* Column 4: Newsletter */}
          <div className="space-y-4">
            <h4 className="font-display text-xs tracking-ceremonial uppercase text-gold-400">
              The Lake Palace Chronicle
            </h4>
            <p className="font-sans text-xs text-palace-sandstone/70 leading-relaxed font-light">
              Receive private invitations, seasonal cultural calendars, and astronomical chronicles directly from the Taj Lake Palace concierge desk.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Your email address"
                  required
                  className="w-full px-4 py-2.5 rounded bg-palace-card/80 border border-gold-500/30 text-xs text-palace-cream placeholder:text-palace-sandstone/40 focus:outline-none focus:border-gold-400 transition-colors"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded bg-gold-500 text-palace-night hover:bg-gold-400 transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Subscribe to Taj Chronicle"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-[11px] font-serif italic text-gold-300">
                  Your address has been inscribed into the Taj Lake Palace registry.
                </p>
              )}
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Credentials */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-sans text-palace-sandstone/60">
          <div className="flex items-center gap-3">
            <span>© 1746 – {new Date().getFullYear()} Taj Lake Palace, Udaipur. Part of The Indian Hotels Company Limited (IHCL).</span>
          </div>

          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-gold-300 transition-colors">Privacy Charter</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Palace Etiquette</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Jetty Boat Access</a>
            <a href="#" className="hover:text-gold-300 transition-colors">Heritage Trust</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
