import React, { useState } from 'react';
import { experiencesData } from '../../data/hotelData';
import { Clock, ArrowRight, Sparkles, Compass } from 'lucide-react';
import ExperienceModal from './ExperienceModal';

export default function ExperiencesSection() {
  const [activeExp, setActiveExp] = useState(null);

  return (
    <section id="experiences" className="py-28 sm:py-36 bg-ivory-50 text-charcoal-900 paper-grain border-b border-sand-300/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Chapter Header */}
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-sand-300 pb-6 mb-16 gap-4">
          <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-bronze-700">
            <span className="font-bold">CH. 06</span>
            <span className="w-1.5 h-1.5 rounded-full bg-bronze-600" />
            <span>CURATED RITUALS — LES RITUELS</span>
          </div>
          <span className="text-xs font-serif italic text-charcoal-600 tracking-wider">
            Presence, tactile depth, and memories that cannot be reproduced anywhere else.
          </span>
        </div>

        {/* Editorial Grid: Asymmetrical Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {experiencesData.map((exp, idx) => (
            <div
              key={exp.id}
              className="group bg-ivory-50 border border-sand-300 rounded-sm overflow-hidden flex flex-col justify-between hover:border-bronze-500 transition-all duration-700 shadow-soft hover:shadow-elevated"
            >
              {/* Photo Frame */}
              <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-sand-200">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-editorial"
                  loading="lazy"
                  data-cursor="view"
                  data-cursor-text="RITUAL"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-50 group-hover:opacity-30 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-charcoal-950/80 backdrop-blur-sm text-ivory-50 text-[10px] tracking-luxury uppercase">
                  {exp.badge}
                </div>

                {/* Duration */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-ivory-50/90 backdrop-blur-sm text-charcoal-800 text-xs font-sans">
                  <Clock className="w-3.5 h-3.5 text-bronze-600" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-5 text-left">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-bronze-600 block">
                    0{idx + 1} • {exp.category}
                  </span>
                  <h3 className="font-serif text-2xl text-charcoal-950 font-light group-hover:text-olive-900 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-charcoal-600 text-sm leading-relaxed font-light line-clamp-3">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-300 flex items-center justify-between">
                  <span className="text-xs font-sans text-charcoal-500">
                    {exp.schedule}
                  </span>

                  <button
                    onClick={() => setActiveExp(exp)}
                    data-cursor="button"
                    data-cursor-text="DOSSIER"
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-olive-900 hover:text-charcoal-950 transition-colors group/btn"
                  >
                    <span>View Itinerary</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Experience Details Modal */}
      <ExperienceModal
        isOpen={Boolean(activeExp)}
        onClose={() => setActiveExp(null)}
        experience={activeExp}
      />
    </section>
  );
}
