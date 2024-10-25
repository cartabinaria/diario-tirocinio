/** @type {import('tailwindcss').Config} */
const { addDynamicIconSelectors } = require('@iconify/tailwind');

export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cartabinaria-light-blu': '#0f1f2a',
        'cartabinaria-dark-blu': '#02111b',
        'cartabinaria-dark-grey': '#c5c9cc'
      },
    },
  },
  plugins: [
    addDynamicIconSelectors(),
  ],
}

