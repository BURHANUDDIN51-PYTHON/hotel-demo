import React from 'react';
import { MapPin, Navigation, Compass, Plane, Ship } from 'lucide-react';
import { PALACE_INFO } from '../../data/palaceData';
import { PALACE_IMAGERY } from '../../data/imagery';
import { GoldDivider } from '../common/GoldDivider';

export const LocationSection: React.FC = () => {
  const arrivalMethods = [
    {
      icon: <Ship className="w-5 h-5 text-gold-400" />,
      title: "Private Palace Boat from City Palace Jetty",
      time: "10-Minute Glide",
      desc: "Guests arrive at the private Taj jetty beside the City Palace. Attendants usher you onto our private mahogany launches for a tranquil crossing across Lake Pichola to the steps of Jag Niwas.",
    },
    {
      icon: <Plane className="w-5 h-5 text-gold-400" />,
      title: "Maharana Pratap Airport (UDR)",
      time: "40 Minutes (26 km)",
      desc: "Direct luxury transfer in chauffeured executive sedans or vintage cars from Udaipur Airport to the mainland jetty, coordinated with your flight schedule.",
    },
    {
      icon: <Navigation className="w-5 h-5 text-gold-400" />,
      title: "Udaipur Heritage Landmarks",
      time: "Surrounding Waters",
      desc: "Direct water sightlines to Jag Mandir Island (1 km south), City Palace Complex (800m east), and the ancient Ghats of Udaipur (Gangaur Ghat & Ambrai Ghat).",
    },
  ];

  return (
    <section id="location" className="relative py-28 bg-palace-dark text-palace-cream overflow-hidden">
      <div className="absolute inset-0 bg-jaali-lattice pointer-events-none opacity-10" />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 text-gold-400">
            <Compass className="w-4 h-4" />
            <span className="font-display text-xs tracking-ceremonial uppercase">
              Geographic Setting & Arrival
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-light text-palace-marble leading-tight">
            Surrounded by Water & <br />
            <span className="text-gold-gradient italic font-normal">Ancient Aravalli Peaks</span>
          </h2>

          <p className="font-serif text-base sm:text-lg text-palace-sandstone/80 italic max-w-2xl mx-auto">
            "A four-acre island floating in the middle of Lake Pichola. Isolated from the hustle of the city, yet commanding dramatic views of Udaipur's imperial skyline."
          </p>

          <GoldDivider motif="lotus" width="sm" className="mt-4" />
        </div>

        {/* Map & Arrival Split */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Visual Lake Map Feature */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-gold-500/30 shadow-2xl group">
              <img
                src={PALACE_IMAGERY.locationPicholaAerial}
                alt="Lake Pichola and Taj Lake Palace"
                className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-palace-night via-transparent to-black/30" />

              {/* Coordinates Card */}
              <div className="absolute top-6 left-6 p-4 rounded-xl palace-glass border border-gold-400/40 text-xs font-sans">
                <div className="flex items-center gap-2 text-gold-400 font-medium">
                  <MapPin className="w-4 h-4" />
                  <span>{PALACE_INFO.coordinates}</span>
                </div>
                <p className="text-palace-sandstone/80 text-[11px] mt-0.5">
                  Jag Niwas, Lake Pichola, Udaipur 313001
                </p>
              </div>

              {/* Bottom Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl palace-glass border border-gold-500/20 flex items-center justify-between text-xs font-sans">
                <span className="text-palace-sandstone/90">
                  Accessible solely by private watercraft
                </span>
                <span className="text-gold-400 font-display text-[10px] tracking-widest uppercase">
                  Island Sanctuary
                </span>
              </div>
            </div>
          </div>

          {/* Arrival Routes */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-sans tracking-widest uppercase text-gold-400 font-medium">
                The Journey to Jag Niwas
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-palace-marble">
                Ceremonial Arrival Experience
              </h3>
            </div>

            <div className="space-y-4">
              {arrivalMethods.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl border border-gold-500/20 bg-palace-card/60 hover:border-gold-400/40 transition-colors space-y-2"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      {item.icon}
                      <h4 className="font-serif text-lg text-palace-cream font-medium">
                        {item.title}
                      </h4>
                    </div>
                    <span className="text-[10px] font-sans tracking-widest uppercase text-gold-400">
                      {item.time}
                    </span>
                  </div>
                  <p className="font-sans text-xs text-palace-sandstone/80 leading-relaxed font-light pl-7">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Taj Concierge Contact */}
            <div className="p-4 rounded-xl border border-gold-500/30 bg-palace-card flex items-center justify-between">
              <div>
                <p className="text-[10px] font-sans tracking-widest uppercase text-gold-400">
                  Taj Palace Concierge & Boat Jetty Desk
                </p>
                <p className="font-serif text-lg text-palace-cream">
                  {PALACE_INFO.phone}
                </p>
              </div>
              <span className="text-xs font-sans text-palace-sandstone/70 tracking-wider">
                Continuous 24-Hour Service
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
