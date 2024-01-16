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
    textColor:{
      'primary-100': '#0f172a'
    },
  },
  },
  plugins: [],
};

