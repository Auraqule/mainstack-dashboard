/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkOrange_: "#FF5403",
        lightOrange_: "#FFEEE6",
        lightText_: "#56616B",
        darkText_: "#131316",
        blue_: "#599EEA",
        purple_: "#844FF6",
        green_: "#0FB77A",
        yellow_: "#FAB70A",
        brown_: "#F09468",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
