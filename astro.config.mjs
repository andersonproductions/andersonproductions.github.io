import { defineConfig } from 'astro/config';
import github from '@astrojs/github';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  base: '/',
  site: 'https://andersonproductions.github.io',
  adapter: github(),
  integrations: [tailwind()],
});
