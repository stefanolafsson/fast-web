import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://stefanolafsson.github.io',
  base: '/fast-web/',
  i18n: {
    locales: ['is', 'en'],
    defaultLocale: 'is',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
