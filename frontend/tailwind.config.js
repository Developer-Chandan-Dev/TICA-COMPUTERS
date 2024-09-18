/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: {
        "fill-available": "-webkit-fill-available",
      },
      height: {
        "fill-available": "-webkit-fill-available",
      },
    },
  },
  plugins: [],
};
