/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm': '150px',
      // => @media (min-width: 640px) { ... }

      'md': '833px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      animation: {
        blob:"blob 7s infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px,0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px,-10px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-5px,10px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px,0px) scale(1)",
          }
    },
  },
},
  },
  plugins: [],
}
