/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,md}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/typography")],
};
