// @ts-check
import { defineConfig } from 'astro/config';

// Standalone static microsite → Cloudflare Pages (deploy dist/)
export default defineConfig({
  site: 'https://cos72-tour.pages.dev',
  output: 'static',
});
