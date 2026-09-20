import React, { useState } from 'react';
import SectionHeader from '../common/SectionHeader';
import { experiencesData } from '../../data/hotelData';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import ExperienceModal from './ExperienceModal';

export default function ExperiencesSection() {
  const [activeExp, setActiveExp] = useState(null);

  return (
    <section id="experiences" className="py-24 sm:py-32 bg-ivory-50 text-charcoal-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <SectionHeader
          badge="CURATED MOMENTS"
          title="Signature Rituals & Terroir"
          subtitle="We believe luxury is found in presence, tactile depth, and memories that cannot be reproduced anywhere else."
        />

        {/* Experiences Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
          {experiencesData.map((exp) => (
            <div
              key={exp.id}
              className="group relative bg-sand-50/70 border border-sand-200/80 rounded-sm overflow-hidden flex flex-col justify-between hover:border-bronze-400/80 transition-all duration-500 shadow-soft hover:shadow-elevated"
            >
              {/* Photo Frame */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-sand-200">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-charcoal-950/80 backdrop-blur-sm text-ivory-50 text-[10px] tracking-luxury uppercase">
                  {exp.badge}
                </div>

                {/* Duration Badge */}
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 px-3 py-1 bg-ivory-50/90 backdrop-blur-sm text-charcoal-800 text-xs font-sans">
                  <Clock className="w-3.5 h-3.5 text-bronze-600" />
                  <span>{exp.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div className="space-y-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-bronze-600 block">
                    {exp.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-charcoal-950 font-light group-hover:text-olive-900 transition-colors">
                    {exp.title}
                  </h3>
                  <p className="font-sans text-charcoal-600 text-sm leading-relaxed font-light line-clamp-3">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-sand-200/70 flex items-center justify-between">
                  <span className="text-xs font-sans text-charcoal-400">
                    {exp.schedule}
                  </span>

                  <button
                    onClick={() => setActiveExp(exp)}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-luxury text-olive-800 hover:text-charcoal-950 transition-colors group/btn"
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
