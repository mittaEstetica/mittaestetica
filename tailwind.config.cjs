/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-header-start': '#cd9540',
        'brand-header-end': '#cd9540',
        'brand-ui-element': '#cd9540',
        'brand-background': '#f7f7f9',
        'brand-text-primary': '#2c3e50',
        'brand-text-secondary': '#7f8c8d',
        'brand-green': '#94b47e',
        'brand-gold': '#dfb678',
      },
    },
  },
  plugins: [],
} 