/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#27713F',
        'darkGreen': '#0B3813',
        'orange': '#F26929',
        'gray': '#373F41',
        'lightGray': '#F4F5EE',
        'white': '#FFFFFC',
      },
    },
  },
  plugins: [],
}