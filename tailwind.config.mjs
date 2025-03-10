import defaultTheme from "tailwindcss/defaultTheme";
const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Satoshi", ...defaultTheme.fontFamily.sans],
				serif: ["Instrument-Serif", ...defaultTheme.fontFamily.serif],
			},
			colors: {
				bgColor: "#FDFFF4",
				primary: "#00997E",
				title: "#535353",
				body: "#666",
				hoverColor: "#DEFFEB",
			},
		},
	},
	safelist: ["md:max-w-[850px]", "md:max-w-[950px]", "md:max-w-[1100px]"],
	plugins: [
		"prettier-plugin-tailwindcss",
		require("@tailwindcss/typography"),
		plugin(({ addUtilities }) => {
			addUtilities({
				/* Chrome, Safari and Opera */
				".scrollbar-hidden::-webkit-scrollbar": {
					display: "none",
				},

				".scrollbar-hidden": {
					"scrollbar-width": "none" /* Firefox */,
					"-ms-overflow-style": "none" /* IE and Edge */,
				},
			});
		}),
	],
};
