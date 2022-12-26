const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      gray: colors.gray,
      blue: colors.purple,
      red: colors.rose,
      pink: colors.fuchsia,
    },
    fontFamily: {
      mono: ["JetBrains Mono", "monospace"],
    },
    extend: {},
  },
  plugins: [require("flowbite/plugin")],
};
