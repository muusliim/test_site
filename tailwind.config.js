/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"gray-01": "#A4ADAC",
				"gray-02": "#D6DBDB",
				"gray-03": "#E8EDEE",
				"gray-04": "#F2F6F6",
				"customBlack": "#1D1D1B",
				"customOrange": "#FF5900",
				"darkOrange": "#E0570E",
				"error": "#FF4026",
			},
			fontFamily: {
				onest: ["var(--font-onest)"],
			},
		},
	},
	plugins: [],
};
