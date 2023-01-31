/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        colorBrown: "#634B46",
        colorBrownSecond: "#7F6B67",
        colorYellow: "#FFDE59",
        colorRed: "#FF5757",
        colorGreen: "#7ED957",
      },
    },
  },
  plugins: [],
};
