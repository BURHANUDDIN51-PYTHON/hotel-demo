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
        },
        sand: {
          50: '#FBF9F6',
          100: '#F0ECE1',
          200: '#E4DDD0',
          300: '#D4C9B7',
          400: '#BDB09B',
          500: '#9E907B',
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
          950: '#121211',
        },
        olive: {
          50: '#F5F6F3',
          100: '#E7EAE1',
          200: '#D0D6C4',
          600: '#5C634E',
          700: '#474D3B',
          800: '#373C2D',
          900: '#282C20',
          950: '#1C2016',
        },
        bronze: {
          200: '#E4D5BE',
          300: '#D5C0A0',
          400: '#C2A781',
          500: '#AA8C62',
          600: '#8E714B',
          700: '#735B3B',
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
        'luxury': '0.2em',
        'ultra': '0.35em',
      },
      boxShadow: {
        'soft': '0 20px 40px -15px rgba(26, 25, 24, 0.05)',
        'elevated': '0 30px 60px -20px rgba(26, 25, 24, 0.12)',
        'glow': '0 0 35px rgba(194, 167, 129, 0.25)',
      },
      transitionDuration: {
        '800': '800ms',
        '1000': '1000ms',
      }
    },
  },
  plugins: [],
}
