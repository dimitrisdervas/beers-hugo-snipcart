const theme = require("tailwindcss/defaultTheme");
const typography = require("@tailwindcss/typography");

//const colorBrand = 'var(--color-pretty)';

// Utils
const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;
const px = (px) => `${px}px`;

module.exports = {
  // See https://tailwindcss.com/docs/configuration#important
  content: {
    enabled: process.env.HUGO_ENVIRONMENT === "production",
    content: ["./hugo_stats.json", "./layouts/**/*.html"]
  },
  theme: {
    extend: {
      fontFamily: {
        robregular: ["Roboto-Regular"],
        robmono: ["Roboto-mono"],
        code: ["source code pro", "monospace"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")]
};

// https://github.com/bep/hugo-starter-tailwind-basic/blob/master/tailwind.config.js
