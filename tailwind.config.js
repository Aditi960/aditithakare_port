/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FAF9F6',
        parchment: '#F5F5DC',
        gold: '#D4AF37',
        'gold-dark': '#B8860B',
        charcoal: '#36454F',
        ink: '#1B263B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        luxury: '0.2em',
        wide: '0.15em',
      },
    },
  },
  plugins: [],
}
