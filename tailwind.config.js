/** @type {import('tailwindcss').Config} */
export default {
 content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pantone-light': 'hsl(178, 100%, 37%)',
        'pantole-dark': 'hsl(184, 100%, 24%)'
      },
      fontFamily: {
        montserrat : 'Montserrat'
      }
    },
  },
  plugins: [],
}

