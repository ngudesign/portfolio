// @ts-check
import { defineConfig } from 'astro/config';

// When the site goes live on GitHub Pages at ngudesignwork.github.io/portfolio,
// add these two lines inside defineConfig so every link gets the /portfolio prefix:
//   site: 'https://ngudesignwork.github.io',
//   base: '/portfolio',
export default defineConfig({
  // Hide Astro's floating developer toolbar in the local preview
  devToolbar: { enabled: false },
});
