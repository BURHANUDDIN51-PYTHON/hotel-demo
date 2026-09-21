import React from 'react';

interface GoldDividerProps {
  className?: string;
  motif?: 'lotus' | 'diamond' | 'sun' | 'minimal';
  width?: 'sm' | 'md' | 'lg' | 'full';
}

export const GoldDivider: React.FC<GoldDividerProps> = ({
  className = '',
  motif = 'lotus',
  width = 'md',
}) => {
  const widthClasses = {
    sm: 'max-w-xs',
    md: 'max-w-md',
    lg: 'max-w-xl',
    full: 'w-full',
  };

  return (
    <div className={`flex items-center justify-center gap-3 mx-auto my-6 ${widthClasses[width]} ${className}`}>
      {/* Left Hairline Gradient */}
      <div className="flex-1 h-[1px] bg-gradient-to-r from-transparent via-gold-500/40 to-gold-400" />

      {/* Central Motif */}
      {motif === 'lotus' && (
        <div className="text-gold-400 shrink-0 flex items-center gap-1">
          <span className="w-1 h-1 rounded-full bg-gold-400" />
          <svg className="w-4 h-4 text-gold-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 3 C13 7 16 10 18 14 C20 18 17 21 12 21 C7 21 4 18 6 14 C8 10 11 7 12 3 Z" fill="currentColor" fillOpacity="0.2" />
            <circle cx="12" cy="14" r="2" fill="currentColor" />
          </svg>
          <span className="w-1 h-1 rounded-full bg-gold-400" />
        </div>
      )}

      {motif === 'diamond' && (
        <div className="text-gold-400 shrink-0 flex items-center gap-1.5">
          <span className="w-1 h-1 rotate-45 border border-gold-400/60" />
          <span className="w-2.5 h-2.5 rotate-45 bg-gradient-to-tr from-gold-600 to-gold-300" />
          <span className="w-1 h-1 rotate-45 border border-gold-400/60" />
        </div>
      )}

      {motif === 'sun' && (
        <div className="text-gold-400 shrink-0 flex items-center justify-center w-5 h-5">
          <div className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-slow" />
          <div className="absolute w-4 h-4 rounded-full border border-gold-500/40" />
        </div>
      )}

      {motif === 'minimal' && (
        <div className="w-1.5 h-1.5 rotate-45 bg-gold-400 shrink-0" />
      )}

      {/* Right Hairline Gradient */}
      <div className="flex-1 h-[1px] bg-gradient-to-l from-transparent via-gold-500/40 to-gold-400" />
    </div>
  );
};
