import React from 'react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  alignment = 'center',
  dark = false,
  className = ''
}) {
  const isCenter = alignment === 'center';

  return (
    <div className={`mb-16 md:mb-20 ${isCenter ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'} ${className}`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium tracking-ultra uppercase mb-5 ${
          dark 
            ? 'bg-charcoal-800/80 text-sand-300 border border-charcoal-700/50' 
            : 'bg-sand-100 text-olive-800 border border-sand-200/80'
        }`}>
          <span className="w-1.5 h-1.5 rounded-full bg-bronze-400 animate-pulse"></span>
          <span>{badge}</span>
        </div>
      )}
      
      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light tracking-tight leading-[1.15] mb-5 ${
        dark ? 'text-ivory-50' : 'text-charcoal-950'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`font-sans text-base sm:text-lg font-light leading-relaxed ${
          dark ? 'text-sand-300/80' : 'text-charcoal-600'
        }`}>
          {subtitle}
        </p>
      )}
      
      <div className={`mt-6 flex items-center gap-3 ${isCenter ? 'justify-center' : 'justify-start'}`}>
        <span className="w-8 h-[1px] bg-bronze-400/60"></span>
        <span className="w-1.5 h-1.5 rounded-full bg-bronze-400/80"></span>
        <span className="w-8 h-[1px] bg-bronze-400/60"></span>
      </div>
    </div>
  );
}
