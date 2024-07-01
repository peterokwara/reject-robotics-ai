/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#6169A2',

					secondary: '#C5A0C7',

					accent: '#B989A8',

					neutral: '#221812',

					'base-100': '#F7F7FA',

					info: '#4dd4ff',

					success: '#00fbcb',

					warning: '#ffc800',

					error: '#ff7f93'
				}
			}
		]
	},
	plugins: [daisyui]
};
