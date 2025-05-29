import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import github from '@astrojs/github';

export default defineConfig({
  site: 'https://andersonproductions.github.io/YOUR_REPO_NAME',
  base: '/YOUR_REPO_NAME/', // ← use '/' if deploying to username.github.io
  adapter: github(),
  integrations: [tailwind()],
});
