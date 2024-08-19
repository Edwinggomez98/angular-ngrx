/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        exampleBlack: "#1E201E",
        exampleGray: "#3C3D37",
        exampleGreen: "#697565",
        exampleCreme: "#ECDFCC",
      },
    },
  },
  plugins: [],
};
