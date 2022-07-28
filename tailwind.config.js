const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '360px',
      ...defaultTheme.screens,
    },
    extend: {
      keyframes: {
        lazyLoading: {
          "0%, 100%": {
            transform: "scale(0)",
            opacity: "0",
          },
          "100%": {
            transform: "scale(1)",
            opacity: "1",
          },
        },
        slideRightToLeft: {
          "0%, 100%": {
            transform: "translateX(100%)",
          },
          "100%": {
            transform: "none",
          },
        },
        slideBottomToTop: {
          from: {
            bottom: "bottom(0%)",
          },
          to: {
            bottom: "bottom(100%)",
          },
        },
        slideBottomToTopNavbar: {
          from: {
            transform: "translateY(10%)",
          },
          to: {
            transform: "none",
          },
        },
      },
      animation: {
        lazyLoading: "lazyLoading",
        slideRightToLeft: "slideRightToLeft",
        slideBottomToTop: "slideBottomToTop",
        slideBottomToTopNavbar: "slideBottomToTopNavbar",
      },
    },
  },
  plugins: [],
};