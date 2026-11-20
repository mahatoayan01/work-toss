/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        wok: {
          darkest: '#090A0D',
          dark: '#111317',
          surface: '#181B20',
          card: '#1F232B',
          border: '#2C323E',
          red: '#DC2626',
          redHover: '#B91C1C',
          gold: '#F59E0B',
          goldHover: '#D97706',
          cream: '#FAF7F2',
          sand: '#ECE7DF',
          muted: '#8E96A4',
          subtle: '#5A6270'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      boxShadow: {
        'glow-red': '0 0 25px -5px rgba(220, 38, 38, 0.35)',
        'glow-gold': '0 0 25px -5px rgba(245, 158, 11, 0.35)',
        'subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.25)',
      }
    },
  },
  plugins: [],
}
