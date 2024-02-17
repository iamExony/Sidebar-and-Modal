/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        topdown: {
          from: { transform: "translateY(-30px)" },
          to: { transform: "translateY(100px)" },
        },
      },
      animation: {
        topdown: "topdown 1s linear 1s",
      },
      gridTemplateColumns: {
        space: "1fr 1fr 1fr",
      },
      textColor: {
        "primary-100": "#0f172a",
      },
    },
  },
  plugins: [],
};
