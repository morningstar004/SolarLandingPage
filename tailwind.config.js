/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        forest: {
          950: '#070B09',
          900: '#0A120F',
          850: '#0D1714',
          800: '#101B17', // Main requested Forest Black
          750: '#14221D',
          700: '#192C26',
          600: '#233E35',
          500: '#34574C',
          400: '#4D7A6C',
        },
        lime: {
          DEFAULT: '#B8F36B', // Solar Lime
          glow: '#C8FF7D',
          dark: '#96D448',
          subtle: 'rgba(184, 243, 107, 0.12)',
        },
        solar: {
          yellow: '#FFEA00', // Solar Beam Yellow
          gold: '#FFD700',
          amber: '#F59E0B',
        },
        warm: {
          white: '#F5F5EF', // Warm White
          cream: '#FAFAF5',
          muted: '#D8D8CF',
        },
        grid: {
          border: 'rgba(255, 255, 255, 0.08)',
          'border-active': 'rgba(184, 243, 107, 0.28)',
          card: 'rgba(16, 27, 23, 0.85)',
        }
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Cabinet Grotesk', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'lime-glow': '0 0 40px -10px rgba(184, 243, 107, 0.35)',
        'lime-glow-sm': '0 0 20px -5px rgba(184, 243, 107, 0.25)',
        'solar-glow': '0 0 45px -8px rgba(255, 234, 0, 0.28)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
