/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'color1' : '#535354',
        'color2' : '#121212',
        'color3' : '#212121'
      },
    },
  },
  plugins: [],
}