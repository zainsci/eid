module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "purple-400": "rgb(76 29 112)",
      "purple-500": "rgb(55 33 72)",
      "purple-600": "rgb(36 21 52)",

      teal: "rgb(39 160 155)",
      yellow: "rgb(179 128 64)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
    fontFamily: {
      display: ["'Lilita One'", "cursive"],
    },
  },
  plugins: [],
}
