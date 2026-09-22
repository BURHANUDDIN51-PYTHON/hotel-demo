import React, { useEffect, useState } from 'react';

const CHAPTERS = [
  { id: 'hero', number: '01', title: 'Prologue', roman: 'I' },
  { id: 'story', number: '02', title: 'The Manifesto', roman: 'II' },
  { id: 'spaces', number: '03', title: 'The Atmosphere', roman: 'III' },
  { id: 'suites', number: '04', title: 'Sanctuaries', roman: 'IV' },
  { id: 'dining', number: '05', title: 'The Hearth', roman: 'V' },
  { id: 'experiences', number: '06', title: 'Rituals', roman: 'VI' },
  { id: 'gallery', number: '07', title: 'Chronicles', roman: 'VII' },
  { id: 'events', number: '08', title: 'Gatherings', roman: 'VIII' },
  { id: 'location', number: '09', title: 'Terroir', roman: 'IX' },
];

export default function ChapterNav() {
  const [activeChapter, setActiveChapter] = useState(CHAPTERS[0]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall page scroll progress %
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      // Identify active chapter based on section positions
      const scrollPos = window.scrollY + window.innerHeight * 0.4;

      for (let i = CHAPTERS.length - 1; i >= 0; i--) {
        const el = document.getElementById(CHAPTERS[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveChapter(CHAPTERS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <aside
      aria-label="Editorial Chapter Progress"
      className="hidden 2xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-6 pointer-events-auto select-none"
    >
      {/* Roman Chapter Marker */}
      <div className="flex flex-col items-center space-y-1 text-right">
        <span className="text-[10px] font-mono tracking-widest text-bronze-500 uppercase">
          CH. {activeChapter.roman}
        </span>
        <span className="text-[11px] font-serif italic text-charcoal-700/80 tracking-wider">
          {activeChapter.title}
        </span>
      </div>

      {/* Progress track */}
      <div className="relative w-[1px] h-32 bg-sand-300/60 overflow-hidden">
        <div
          className="absolute top-0 left-0 w-full bg-charcoal-900 transition-all duration-150 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* Dots for all chapters */}
      <div className="flex flex-col gap-2.5">
        {CHAPTERS.map((chap) => {
          const isActive = chap.id === activeChapter.id;
          return (
            <a
              key={chap.id}
              href={`#${chap.id}`}
              className="group relative flex items-center justify-center p-1"
              aria-label={`Jump to Chapter ${chap.number}: ${chap.title}`}
            >
              <span
                className={`block rounded-full transition-all duration-300 ${
                  isActive
                    ? 'w-1.5 h-3.5 bg-bronze-600'
                    : 'w-1.5 h-1.5 bg-sand-400 group-hover:bg-charcoal-800'
                }`}
              />
              {/* Tooltip on hover */}
              <span className="absolute right-6 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 text-[10px] uppercase font-mono tracking-widest bg-ivory-50 px-2 py-0.5 border border-sand-200 text-charcoal-800 whitespace-nowrap shadow-soft">
                {chap.number} • {chap.title}
              </span>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
