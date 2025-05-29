import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://andersonproductions.github.io/YOUR_REPO_NAME',
  base: '/',
  adapter: github(),
  integrations: [tailwind()],
});
