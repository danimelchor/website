module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2F4858",
        secondary: "#17B169",
        primaryDark: "#0070C4",
        secondaryDark: "#E9B500",
      },
      screens: {
        "3xl": "2048px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  safelist: [
    {
      pattern: /bg-(blue|indigo|purple|pink)-(100|900)/,
      variants: ["dark"],
    },
    {
      pattern: /text-(blue|indigo|purple|pink)-(200|300|400|500|800|900)/,
      variants: ["dark"],
    },
  ],
};
