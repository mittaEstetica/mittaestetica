/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        'brand-header-start': '#B89B72',
        'brand-header-end': '#B89B72',
        'brand-ui-element': '#B89B72',
        'brand-background': '#FAF8F5',
        'brand-text-primary': '#1C1917',
        'brand-text-secondary': '#78716C',
        'brand-green': '#A3B19B',
        'brand-gold': '#B89B72',
        'luxury-bg': '#FAF8F5',
        'luxury-card': '#FFFFFF',
        'luxury-border': '#EAE5DF',
        'luxury-gold': '#B89B72',
        'luxury-dark': '#1C1917',
      },
    },
  },
  plugins: [],
}