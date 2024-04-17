/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        blink: {
          from: { transform: "scale(0.5, 0.5)" },
          to: { transform: "scale(1, 1)" },
        },
      },
      animation: {
        blink: "blink 1s linear infinite alternate",
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
