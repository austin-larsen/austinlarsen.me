import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://austinlarsen.me',
  integrations: [sitemap()],
});
