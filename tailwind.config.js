/** @type {import('tailwindcss').Config} */

const { transform } = require("next/dist/build/swc");

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
      primary: "#d31ef7",
      white: "white",
      black: "#334155",
    },

    fontFamily: {
      primary: "var(--font-jetbrainsMono)",
    },
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(11) forwards",
        caret:
          "typewriter 2s steps(11) forwards, blink 1s steps(11) infinite 2s",
        timeline: "timeline 2s steps(11) forwards",
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
        timeline: {
          "0%": {
            transform: "scaleY(0)",
          },
          "20%": {
            transform: "scaleY(0.2)",
          },
          "40%": {
            transform: "scaleY(0.4)",
          },
          "60%": {
            transform: "scaleY(0.6)",
          },
          "80%": {
            transform: "scaleY(0.8)",
          },
          "100%": {
            transform: "scaleY(1)",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
