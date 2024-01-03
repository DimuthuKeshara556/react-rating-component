/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
      extend: {
        screens: {
          'sm': '376px',
        },
        fontFamily: {
          'sans': ['ui-sans-serif', 'system-ui'],
          'OutfitFont': ['Outfit', 'sans-serif'],
          'OverpassFont': ['Overpass', 'sans-serif'],
        },
        colors: {
          'regal-blue': '#243c5a',
          'Orange': 'hsl(25, 97%, 53%)',
          'pure-White':' hsl(0, 0%, 100%)',
          'Light-Grey': 'hsl(217, 12%, 63%)',
          'Medium-Grey': 'hsl(216, 12%, 54%)',
          'Dark-Blue': 'hsl(213, 19%, 18%)',
          'Very-Dark-Blue': 'hsl(216, 12%, 8%)',
        },
      },
  },
  plugins: [],
}