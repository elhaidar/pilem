/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Work Sans", "sans-serif"],
      heading: ["Montserrat", "sans-serif"],
    },
    boxShadow: {
      mobile: "127px -104px 200px 100px rgba(0,0,0,1) inset",
      desktop: "127px -150px 200px 200px rgba(0,0,0,1) inset",
    },
    extend: {},
  },
  plugins: [],
};
