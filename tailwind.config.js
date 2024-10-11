/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroImage:
          'linear-gradient(to right, rgba(0, 0, 0, .7), rgba(0, 0, 0, .5)), url("../public/images/water-landscape-freshness-beauty-forest.jpg")',

        parallax:
          'linear-gradient(to right, rgba(0, 0, 0, .9), rgba(0, 0, 0, .85)), url("../public/images/view-lion-animal-its-natural-habitat.jpg")',

        paralla2:
          'linear-gradient(180deg, rgba(0, 0, 0, .99), rgba(45,253,52,0.1), rgba(0, 0, 0, .99)), url("../public/images/hikers-mountains.jpg")',

        textClip:
          'linear-gradient(to right, rgba(45,253,52,0.8), rgba(0, 0, 0, .99)), url("../public/images/hikers-mountains.jpg")',
        textClip2:
          'linear-gradient(to right, rgba(45,253,52), rgba(255, 255, 255, 1)), url("../public/images/hikers-mountains.jpg")',

        aboutImage:
          'linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url("../public/images/pexels-kimsanxw-46102905-28793564.jpg")',
        community:
          'linear-gradient(to right, rgba(0, 0, 0, .8), rgba(0, 0, 0, .7)), url("../public/images/community.jpg")',
      },

      keyframes: {
        testimonialName: {
          "0%": {
            opacity: "0",
            transform: "translateX(-30%)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(0)",
          },
        },

        testiMonialIdea: {
          "0%": {
            opacity: "0",
            transform: "scale(0.6)",
          },
          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
      },

      animation: {
        testNameAnimation: "testimonialName 2s ease-in-out 1",
        testIdeaAnimation: "testiMonialIdea 2s ease-in-out 1",
      },
    },
  },
  plugins: [],
};
