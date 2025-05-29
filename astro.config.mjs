import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import github from "@astrojs/github";

export default defineConfig({
  integrations: [tailwind(), github()],
  base: "/andersonproductions.github.io/"
});
