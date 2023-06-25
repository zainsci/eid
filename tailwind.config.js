module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"purple-400": "rgb(76 29 112)",
				"purple-500": "rgb(55 33 72)",
				"purple-600": "rgb(36 21 52)",

				"teal-2022": "rgb(39 160 155)",
				"yellow-2022": "rgb(179 128 64)",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
			},
			animation: {
				"spin-slow": "spin 40s linear infinite",
			},
		},
		fontFamily: {
			display: ["'Lilita One'", "cursive"],
		},
	},
	plugins: [],
}
