import React, { useState } from 'react';
import { Sparkles, Eye, ArrowRight, Sun, Moon, Wind, Droplets } from 'lucide-react';

const SPACES = [
  {
    id: 'cistern',
    roman: 'I',
    name: 'The Subterranean Thermal Cistern',
    location: 'Underground Vaults • Level -2',
    element: 'Thermal Water & Sound',
    description: 'Chiseled deep into the mountain limestone where natural 37°C salt water flows uninterrupted. Silent acoustic acoustics create an environment of complete sensory weightlessness.',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=88',
    materials: ['Raw Mountain Rock', 'Unpolished Travertine', 'Cast Bronze Sconces'],
    sensoryDetail: 'Scent of mountain mint, water dripping rhythmically, low resonant tones.',
    timeOfDay: 'Best experienced at dawn or dusk',
  },
  {
    id: 'orchard',
    roman: 'II',
    name: 'The Ancient Olive Terraces',
    location: 'Upper Grounds • 12 Hectares',
    element: 'Sun & Living Soil',
    description: 'Centuries-old gnarly olive trunks supported by dry-stone terraces built in the 1800s. A sanctuary for morning walks, private reading enclaves, and quiet contemplation.',
    image: 'https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?auto=format&fit=crop&w=1600&q=88',
    materials: ['Dry Marés Stone', 'Aged Olive Wood', 'Crushed Limestone Paths'],
    sensoryDetail: 'Wild rosemary crushed underfoot, warm Mediterranean breeze, distant sea murmurs.',
    timeOfDay: 'Golden hour between 18:00 and 20:00',
  },
  {
    id: 'hearth',
    roman: 'III',
    name: 'The Sunken Wood-Fire Hearth',
    location: 'Central Courtyard',
    element: 'Living Fire & Embers',
    description: 'An open-air amphitheater of flame where wild olive logs burn slowly each night. Blankets of unbleached Scottish wool and glasses of chilled cellar wine accompany the crackling embers.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=88',
    materials: ['Volcanic Basalt', 'Blackened Steel', 'Handcrafted Clay Stools'],
    sensoryDetail: 'Smoky almond wood fragrance, glowing ember radiance, starry night sky.',
    timeOfDay: 'Nightfall into late starlight',
  },
  {
    id: 'solarium',
    roman: 'IV',
    name: 'The Cliffside Bastion Solarium',
    location: 'Western Crag • Sea Edge',
    element: 'Wind & Horizon',
    description: 'Cantilevered over the 200-meter drop to the sea. The horizon stretches unbroken across 180 degrees, capturing the slow chromatic transformation of the Balearic sunset.',
    image: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&w=1600&q=88',
    materials: ['Honed Coral Limestone', 'Teak Decking', 'Clear Tempered Glass'],
    sensoryDetail: 'Cool maritime updraft, saline air, hypnotic rhythm of deep water.',
    timeOfDay: 'High noon basking or sunset meditation',
  },
];

export default function SignatureSpacesSection() {
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);
  const activeSpace = SPACES[activeSpaceIndex];

  return (
    <section id="spaces" className="py-28 sm:py-36 bg-charcoal-950 text-ivory-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-olive-900/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-terracotta-800/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-charcoal-800 pb-6 mb-16 gap-4">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-bronze-400">
            <span className="font-bold">CH. 03</span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-400" />
            <span>THE ATMOSPHERE — LES LIEUX</span>
          </div>
          <span className="text-xs font-serif italic text-sand-400 tracking-wider">
            Four sensory sanctuaries sculpted to frame light, fire, and water.
          </span>
        </div>

        {/* Space Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12">
          {SPACES.map((space, idx) => {
            const isSelected = activeSpaceIndex === idx;
            return (
              <button
                key={space.id}
                onClick={() => setActiveSpaceIndex(idx)}
                data-cursor="button"
                data-cursor-text={space.roman}
                className={`p-4 sm:p-5 text-left border rounded-sm transition-all duration-500 flex flex-col justify-between h-28 sm:h-32 ${
                  isSelected
                    ? 'border-bronze-400 bg-charcoal-900/90 shadow-elevated'
                    : 'border-charcoal-800 bg-charcoal-900/40 hover:border-charcoal-700 text-sand-400'
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <span className={`text-[11px] font-mono tracking-widest ${
                    isSelected ? 'text-bronze-400 font-bold' : 'text-charcoal-500'
                  }`}>
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-serif italic text-sand-400">
                    {space.roman}
                  </span>
                </div>
                <div>
                  <h3 className={`font-serif text-sm sm:text-base transition-colors ${
                    isSelected ? 'text-ivory-50 font-normal' : 'text-sand-300'
                  }`}>
                    {space.name}
                  </h3>
                  <span className="text-[10px] uppercase tracking-luxury text-charcoal-400 block mt-1 truncate">
                    {space.element}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Hero Interactive Space Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center bg-charcoal-900/60 border border-charcoal-800/80 rounded-sm p-6 sm:p-10">
          
          {/* Main Visual Display */}
          <div className="lg:col-span-7 relative overflow-hidden rounded-sm h-[380px] sm:h-[480px] bg-charcoal-900 group">
            <img
              key={activeSpace.id}
              src={activeSpace.image}
              alt={activeSpace.name}
              className="w-full h-full object-cover animate-fade-in-scale img-editorial-zoom filter brightness-[0.92] contrast-[1.05]"
              data-cursor="view"
              data-cursor-text="SPACE"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-transparent to-transparent opacity-60" />
            
            <div className="absolute top-4 left-4 px-3 py-1 bg-charcoal-950/80 backdrop-blur-sm text-sand-200 text-[10px] font-mono tracking-widest uppercase">
              ATMOSPHERE ARCHIVE • {activeSpace.roman}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
              <span className="text-xs font-mono text-sand-300 tracking-wider">
                {activeSpace.timeOfDay}
              </span>
              <span className="text-[11px] font-serif italic text-bronze-300">
                Maison Sylvan Deià
              </span>
            </div>
          </div>

          {/* Sensory Narrative & Materiality Specs */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div>
              <span className="text-xs font-mono text-bronze-400 tracking-widest uppercase block mb-1">
                {activeSpace.location}
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-ivory-50 font-light leading-snug">
                {activeSpace.name}
              </h2>
            </div>

            <p className="font-sans text-sand-300/90 text-sm sm:text-base leading-relaxed font-light">
              {activeSpace.description}
            </p>

            {/* Materiality Palette */}
            <div className="space-y-2 pt-2 border-t border-charcoal-800">
              <span className="text-[10px] uppercase font-mono tracking-widest text-sand-400 block">
                Tactile Materiality
              </span>
              <div className="flex flex-wrap gap-2">
                {activeSpace.materials.map((mat, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 bg-charcoal-800/80 border border-charcoal-700 text-xs text-sand-200 rounded-sm font-sans"
                  >
                    {mat}
                  </span>
                ))}
              </div>
            </div>

            {/* Sensory Footnote */}
            <div className="p-4 bg-charcoal-950/70 border-l-2 border-bronze-400 text-xs text-sand-300/90 space-y-1">
              <span className="font-semibold text-ivory-50 block uppercase tracking-wider text-[10px]">
                Sensory Imprint:
              </span>
              <p className="italic font-serif">
                "{activeSpace.sensoryDetail}"
              </p>
            </div>

            <div className="pt-2">
              <a
                href="#suites"
                data-cursor="link"
                data-cursor-text="SUITES"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-bronze-300 hover:text-white transition-colors"
              >
                <span>Continue Journey to Sanctuaries</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
