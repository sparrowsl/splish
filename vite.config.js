import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import { extractorSvelte, presetUno } from 'unocss';

export default defineConfig({
	plugins: [
		sveltekit(),
		UnoCSS({
			extractors: [extractorSvelte],
			rules: [
				['opensans', { 'font-family': ['Open Sans', 'sans-serif'] }],
				['roboto', { 'font-family': ['Roboto', 'sans-serif'] }]
			],
			presets: [presetUno()]
		})
	]
});
