import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter({
			fallback: undefined
		}),
		paths: {
			// Set by CI for GitHub Pages project sites (e.g. /the-interior-aura);
			// empty locally and on hosts that serve from the domain root.
			base: process.env.BASE_PATH || ''
		},
		prerender: {
			handleHttpError: ({ path, message }) => {
				// Product photos are added to static/images/ separately; plates show a
				// toned placeholder until then, so a missing image must not fail the
				// build. Match with the base path included (e.g. /the-interior-aura/images/).
				if (path.startsWith(`${process.env.BASE_PATH || ''}/images/`)) {
					console.warn(`(ignored during prerender) ${message}`);
					return;
				}
				throw new Error(message);
			}
		}
	}
};

export default config;
