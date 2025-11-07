import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      strict: false,
    }),

    // 👇 Add this to tell SvelteKit where your site will live
    paths: {
      base: process.argv.includes('dev') ? '' : '/canvas/canvas/Canvas44',
    },

    // optional: ensures all pages are pre-rendered for static hosting
    prerender: {
      entries: ['*'],
    },
  },
};

export default config;
