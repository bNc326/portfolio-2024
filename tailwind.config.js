/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        title: "rgba(255, 255, 255, 1)",
        subTitle: "rgba(255, 255, 255, .8)",
        desc: "rgba(255, 255, 255, .6)",
        desc2: "rgba(255, 255, 255, .5)",
      },
      fontSize: {
        h1: "clamp(3.052rem, calc(3.052rem + ((1vw - 0.2rem) * 0.763)), 3.815rem);",
        h2: "clamp(2.441rem, calc(2.441rem + ((1vw - 0.2rem) * 0.611)), 3.052rem);",
        h3: "clamp(1.953rem, calc(1.953rem + ((1vw - 0.2rem) * 0.488)), 2.441rem);",
        h4: "clamp(1.563rem, calc(1.563rem + ((1vw - 0.2rem) * 0.39)), 1.953rem);",
        h5: "clamp(1.25rem, calc(1.25rem + ((1vw - 0.2rem) * 0.313)), 1.563rem);",
        h6: "clamp(1rem, calc(1rem + ((1vw - 0.2rem) * 0.25)), 1.25rem);",
        p: "clamp(0.8rem, calc(0.8rem + ((1vw - 0.2rem) * 0.2)), 1rem);",
        small:
          "clamp(0.64rem, calc(0.64rem + ((1vw - 0.2rem) * 0.16)), 0.8rem);",
        smallest: "0.64rem",
        bgTitle: "clamp(8rem, calc(8rem + ((1vw - 0.2rem) * 7)), 15rem);",
      },
      screens: {
        mobile: "768px",
        tablet: "992px",
        customTablet: "1100px",
        nav: "1200px",
        laptop: "1366px",
        desktop: "1920px",
        tall: { raw: "(max-height: 650px)" },
      },
    },
  },
  plugins: [],
};
