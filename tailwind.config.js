/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      boxShadow: {
        "elevate-light": "5px 5px 15px 5px #000000",
      },
    },
  },
  plugins: [],
};
