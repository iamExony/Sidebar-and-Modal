/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
    gridTemplateColumns:{
      space: '1fr 1fr 1fr'
    },
    gap: {
      point5: '1.5rem'
    }
  },
  },
  plugins: [],
};

