/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, 
  theme: {
    extend: {
      colors: {
        primaryColor: "#60a5fa",
        secondaryColor: "#a5f3fc",
        perimaryText: "#020617",
        SecondaryText: "#1e293b",
        bgColor:"#f0f9ff",
        hoverColor:"#e0f2fe"
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
