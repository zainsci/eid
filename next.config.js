/** @type {import('next').NextConfig} */

const basePath = process.env.NODE_ENV === "development" ? "" : "/eid"

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[jt]sx?$/,
			use: ["@svgr/webpack"],
		})

		return config
	},
	reactStrictMode: true,
	basePath,
}
