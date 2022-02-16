let tailwindConfig = process.env.HUGO_FILE_TAILWIND_CONFIG_JS || "./tailwind.config.js";
const tailwindcss = require("tailwindcss")(tailwindConfig);
const easyimport = require("postcss-easy-import");
const autoprefixer = require("autoprefixer");

module.exports = {
  // eslint-disable-next-line no-process-env
  plugins: [
    easyimport,
    tailwindcss,
    ...(process.env.HUGO_ENVIRONMENT === "production" ? [autoprefixer] : []),
  ],
};

// https://github.com/bep/hugo-starter-tailwind-basic/blob/master/postcss.config.js
