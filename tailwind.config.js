/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      width: {
        200: "50rem",
        230: "70rem",
        250: "80rem", // Custom size example
      },
      height: {
        200: "50rem", // Custom size example
      },
      fontSize: {
        "10xl": "10rem",
        "15xl": "15rem",
      },
    },
  },
  plugins: [],
};
