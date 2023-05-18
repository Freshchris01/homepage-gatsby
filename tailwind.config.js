/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
    container: {
      center: true,
    },
    colors: {
      primary: "#F1F2F6",
    },
    fontFamily: {
      primary: "work-sans-regular",
      bold: "work-sans-bold",
    }
  },
  plugins: [],
}
