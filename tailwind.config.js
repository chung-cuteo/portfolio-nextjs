/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "25px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    colors: {
      primary: colors.pink[500],
      white: colors.white,
      black: colors.black,
    },

    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {},
  },
  plugins: [require("tailwindcss-animate")],
};
