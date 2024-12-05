import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {},
    },
    extend: {
      fontSize: {
        h1: "2.1rem",
        h2: "2rem",
        h3: "1.5rem",
        h4: "1rem",
      },

      colors: {
        primary: "",
        secondary: "",
        textcolor: "#4B5563",
        textcolorpara: "#6B7280",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },

      animation: {
        "slide-in": "slide-in 3s ease-out forwards",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            transform: "translateX(100%)",
            opacity: 0,
          },

          "100%": {
            transform: "translateX(0)",
            opacity: 1,
          },
        },
      },
    },
  },
  plugins: [],
};
