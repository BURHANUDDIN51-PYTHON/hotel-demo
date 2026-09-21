import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { Heart, Sparkles, Coffee, Trees } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5EFE6]/60 border-y border-stone-200/60 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Column */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3]">
              <img
                src={siteConfig.about.imageMain}
                alt="Courtyard and guests enjoying bistro seating"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Overlapping secondary image */}
            <div className="hidden sm:block absolute -bottom-8 -right-6 w-1/2 aspect-square rounded-xl overflow-hidden shadow-xl border-4 border-white z-20">
              <img
                src={siteConfig.about.imageSecondary}
                alt="Inside the cozy bistro and hearth"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Decorative background shape */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-amber-900/15 rounded-2xl -z-0 pointer-events-none" />
          </div>

          {/* Right Narrative Column */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-amber-800">
              <Heart className="w-3.5 h-3.5" />
              <span>Our Story & Philosophy</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl text-stone-900 font-semibold tracking-tight leading-tight">
              {siteConfig.about.title}
            </h2>

            <div className="space-y-4 text-stone-600 text-sm sm:text-base leading-relaxed">
              {siteConfig.about.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>

            {/* Pull Quote */}
            <div className="p-4 rounded-xl bg-white border border-stone-200/90 shadow-xs">
              <p className="font-serif italic text-stone-800 text-sm sm:text-base">
                {siteConfig.about.quote}
              </p>
              <p className="text-xs font-semibold text-amber-800 mt-2">
                — {siteConfig.about.author}
              </p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {siteConfig.about.badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-md text-xs font-medium bg-stone-100 text-stone-700 border border-stone-200"
                >
                  ✓ {badge}
                </span>
              ))}
            </div>

            {/* Quick Numbers */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-stone-200">
              {siteConfig.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="font-serif text-2xl font-bold text-stone-900">{stat.value}</p>
                  <p className="text-xs text-stone-500 mt-0.5">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
