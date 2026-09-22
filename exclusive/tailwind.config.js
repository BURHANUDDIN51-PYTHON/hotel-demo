/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FAF8F5',
          100: '#F5F0E8',
          200: '#ECE5DA',
          300: '#DFD5C5',
          400: '#D2C4B0',
        },
        sand: {
          50: '#FBF9F6',
          100: '#F0ECE1',
          200: '#E4DDD0',
          300: '#D4C9B7',
          400: '#BDB09B',
          500: '#9E907B',
        },
        limestone: {
          50: '#FDFCF9',
          100: '#F7F4EC',
          200: '#EFE9DC',
          300: '#E2D8C3',
          400: '#CBBFA6',
          500: '#A99D84',
        },
        charcoal: {
          50: '#F6F6F5',
          100: '#E7E7E5',
          200: '#D0CFCB',
          300: '#AFAEA8',
          400: '#88867E',
          500: '#6E6C64',
          600: '#58564F',
          700: '#45443E',
          800: '#2A2927',
          900: '#1A1918',
          950: '#0F0E0D',
        },
        olive: {
          50: '#F5F6F3',
          100: '#E7EAE1',
          200: '#D0D6C4',
          300: '#A9B497',
          600: '#5C634E',
          700: '#474D3B',
          800: '#373C2D',
          900: '#25291D',
          950: '#171A12',
        },
        bronze: {
          100: '#F3ECE1',
          200: '#E4D5BE',
          300: '#D5C0A0',
          400: '#C2A781',
          500: '#AA8C62',
          600: '#8E714B',
          700: '#735B3B',
          800: '#5A462C',
        },
        terracotta: {
          50: '#FBF5F2',
          100: '#F5E6E0',
          500: '#B96743',
          600: '#A35838',
          700: '#864327',
          800: '#6C341D',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        'luxury': '0.22em',
        'ultra': '0.38em',
        'monumental': '0.45em',
      },
      boxShadow: {
        'soft': '0 20px 45px -15px rgba(26, 25, 24, 0.04)',
        'elevated': '0 35px 70px -25px rgba(26, 25, 24, 0.10)',
        'glow': '0 0 40px rgba(194, 167, 129, 0.20)',
        'deep': '0 30px 80px -20px rgba(0, 0, 0, 0.45)',
      },
      transitionDuration: {
        '800': '800ms',
        '1000': '1000ms',
        '1200': '1200ms',
      },
      transitionTimingFunction: {
        'editorial': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'gentle': 'cubic-bezier(0.25, 1, 0.5, 1)',
      }
    },
  },
  plugins: [],
}
