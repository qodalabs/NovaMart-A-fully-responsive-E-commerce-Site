import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6C5CE7',
          dark: '#5849D6',
          light: '#A29BFE'
        }
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-700px 0' },
          '100%': { backgroundPosition: '700px 0' }
        },
        ripple: {
          '0%': { transform: 'scale(0)', opacity: '0.6' },
          '100%': { transform: 'scale(2.5)', opacity: '0' }
        }
      },
      animation: {
        shimmer: 'shimmer 1.8s infinite linear',
        ripple: 'ripple 0.7s ease-out'
      }
    }
  },
  plugins: []
}

export default config

