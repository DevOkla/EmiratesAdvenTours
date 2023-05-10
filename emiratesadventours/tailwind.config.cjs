/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Gold: '#FFD700',
        Brown: '#451a03'
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "968px",
        xl: "1024px",
        "2xl": "1200px",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },
      transitionDuration: {
        400: "0.4s",
      },
    },
  },
  plugins: [],
};
