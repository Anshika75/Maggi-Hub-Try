/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Null': ['Null'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Dosis': ['Dosis', 'sans-serif'],
        'Pacifico': ['Pacifico', 'cursive'],
      },
      colors: {
        'darkGreen': '#131E00',
        'white': '#FBFBFB',
        'yellow': '#F2B640',
        'brown': '#4c2c15',
        'orange': '#F45200',
        'lightwhite': '#dde6eb',
        'grey': '#5a6a72'
      },
    },
  },
  plugins: [],
}
