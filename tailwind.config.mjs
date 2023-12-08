/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: ({theme}) => ({
				DEFAULT: {
					css: {
						color: theme('colors.slate'),
						strong: {
							color: theme('colors.blue[200]'),
							opacity: .8
						},
					}
				}
			}),
			fontFamily: {
        sans: ["Inter Variable", "Inter", ...defaultTheme.fontFamily.sans],
      },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
