/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily:{
        "Schibsted": ["Schibsted Grotesk"],
        "lora": ["Lora"],
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 80s linear infinite',
    },
    keyframes: {
        'infinite-scroll': {
            from: { transform: 'translateX(0)' },
            to: { transform: 'translateX(-100%)' },
        }
    }
     },

     screens: {

      m : '375px',
      // => @media (min-width: 375px) {....}

      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }
    },

  },
  variants: {},
  plugins: [],
}

