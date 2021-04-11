module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'primary': "#2F4858",
        'secondary': '#FFC800',
        'primaryDark': "#0070C4",
        'secondaryDark': "#E9B500",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
