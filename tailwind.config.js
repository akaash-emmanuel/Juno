/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
      },
      fontWeight: {
        ralewayLight: 300,
        ralewayNormal: 400,
        ralewayBold: 700,
      },
      animation: {
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
      },
      keyframes: {
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
      },
      colors: {
        'custom-yellow': '#FFFDF0',
      }
    },
  },
  plugins: [],
};


