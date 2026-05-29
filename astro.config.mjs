import { defineConfig } from 'astro/config';

// GitHub Pages user site — repo is Ennyn-pf/ennyn-pf.github.io so the
// site serves at root: https://ennyn-pf.github.io/
// When we cut over to Cloudflare Pages for production:
//   site: 'https://ennyn.io', base: '/'
export default defineConfig({
  site: 'https://ennyn-pf.github.io',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
