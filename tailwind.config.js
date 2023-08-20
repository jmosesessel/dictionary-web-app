/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/index.html", "./src/**/*.{html,js,jsx}"],
	theme: {
    screens: {
			sm: "375px",
			md: "768px",
			lg: "976px",
			xl: "1440px",
		},
		colors: {
			"d-deep-black": "#050505",
			"d-black": "#1F1F1F",
			"d-light-black": "#2D2D2D",
			"p-lighter-black": "#3A3A3A",
			"d-deep-grey": "#757575",
			"d-grey": "#E9E9E9",
			"d-light-grey": "#F4F4F4",
			"p-purple": "#A445ED",
			"d-red": "#FF5252",
			"d-white": "#FFFFFF",
		},
		fontFamily: {
			"mono": ["Inconsolata"],
			"san-serif": ["Inter"],
			"serif": ["Lora"],
		},
		extend: {},
	},
	plugins: [],
};
