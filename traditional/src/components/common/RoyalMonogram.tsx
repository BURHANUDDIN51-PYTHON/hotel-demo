import React from 'react';

interface RoyalMonogramProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const RoyalMonogram: React.FC<RoyalMonogramProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: 'w-7 h-7',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  };

  return (
    <div className={`inline-flex flex-col items-center justify-center text-center select-none ${className}`}>
      {/* Mewar Sun & Taj Palace Insignia */}
      <div className={`relative ${sizeMap[size]} text-gold-500`}>
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-md">
          {/* Sun of Mewar Outer Radiance Rays */}
          <g stroke="currentColor" strokeWidth="1.2" opacity="0.8">
            <line x1="60" y1="4" x2="60" y2="16" />
            <line x1="60" y1="104" x2="60" y2="116" />
            <line x1="4" y1="60" x2="16" y2="60" />
            <line x1="104" y1="60" x2="116" y2="60" />
            <line x1="20" y1="20" x2="29" y2="29" />
            <line x1="91" y1="91" x2="100" y2="100" />
            <line x1="100" y1="20" x2="91" y2="29" />
            <line x1="29" y1="91" x2="20" y2="100" />
          </g>

          {/* Concentric Heritage Rings */}
          <circle cx="60" cy="60" r="44" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
          <circle cx="60" cy="60" r="40" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="60" cy="60" r="37" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />

          {/* Central Royal Lotus & Scalloped Palace Arch */}
          <path
            d="M60 26 C63 38 73 45 73 55 C73 66 65 72 60 72 C55 72 47 66 47 55 C47 45 57 38 60 26 Z"
            fill="url(#goldGradientTajMonogram)"
            opacity="0.9"
          />
          <path
            d="M60 46 C68 44 78 51 78 60 C78 69 70 73 60 73 C50 73 42 69 42 60 C42 51 52 44 60 46 Z"
            stroke="currentColor"
            strokeWidth="0.8"
            fill="none"
          />

          {/* Flanking Mewari Royal Peacocks */}
          <path
            d="M32 60 C32 49 42 42 50 42 C46 48 45 56 46 64 C40 65 32 63 32 60 Z"
            fill="currentColor"
            opacity="0.55"
          />
          <path
            d="M88 60 C88 49 78 42 70 42 C74 48 75 56 74 64 C80 65 88 63 88 60 Z"
            fill="currentColor"
            opacity="0.55"
          />

          {/* Sun of Mewar Center Core */}
          <circle cx="60" cy="58" r="4" fill="#FDFBF7" />

          {/* Floating Water Waves Base (Jag Niwas on Lake Pichola) */}
          <path
            d="M42 76 C48 74 54 77 60 75 C66 77 72 74 78 76 C76 81 69 84 60 84 C51 84 44 81 42 76 Z"
            fill="url(#goldGradientTajMonogram)"
          />
          <path d="M46 88 C53 87 67 87 74 88" stroke="currentColor" strokeWidth="1.2" />

          <defs>
            <linearGradient id="goldGradientTajMonogram" x1="0" y1="0" x2="120" y2="120" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFF2D6" />
              <stop offset="0.4" stopColor="#C5A059" />
              <stop offset="1" stopColor="#876527" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {showText && (
        <div className="mt-1 flex flex-col items-center">
          <span className="font-display tracking-widest text-[11px] uppercase text-gold-400 font-bold">
            TAJ LAKE PALACE
          </span>
          <span className="font-serif tracking-ceremonial text-[9px] uppercase text-gold-200/70 italic">
            Udaipur • Jag Niwas 1746
          </span>
        </div>
      )}
    </div>
  );
};
