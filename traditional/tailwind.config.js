/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDF9EE',
          100: '#FAF0D5',
          200: '#F3DEA7',
          300: '#ECC878',
          400: '#E4B553',
          500: '#C5A059', // Master royal gold
          600: '#A9833E',
          700: '#84632B',
          800: '#63471D',
          900: '#463113',
        },
        palace: {
          night: '#06090E',
          dark: '#0B1017',
          card: '#121722',
          surface: '#181F2D',
          border: '#273142',
          sandstone: '#E8DFC8',
          marble: '#FDFBF7',
          cream: '#F4ECE1',
          ruby: '#5C1420',
          rubyDark: '#3A0A13',
          emerald: '#0D2922',
          emeraldDark: '#061713',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Cinzel"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest: '.2em',
        ceremonial: '.3em',
        ethereal: '.4em',
      },
      backgroundImage: {
        'gold-shimmer': 'linear-gradient(135deg, #F3DEA7 0%, #C5A059 50%, #84632B 100%)',
        'gold-foil': 'linear-gradient(105deg, #E6CA85 0%, #C5A059 30%, #F5DEB3 50%, #B8860B 80%, #C5A059 100%)',
        'radial-vignette': 'radial-gradient(circle at center, transparent 40%, rgba(6,9,14,0.85) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
