import { defineConfig } from 'astro/config';

// GitHub Pages serves at https://ennyn-pf.github.io/home/
// When we cut over to Cloudflare Pages for production, flip these:
//   site: 'https://ennyn.io', base: '/'
export default defineConfig({
  site: 'https://ennyn-pf.github.io',
  base: '/home',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
