import { defineConfig } from 'astro.config';
import tailwind from "@astrojs/tailwind";
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://andersonproductions.github.io',
  base: '/',
  adapter: github(),
  integrations: [tailwind()],
});
