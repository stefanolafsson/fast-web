import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fast-hr.is',
  i18n: {
    locales: ['is', 'en'],
    defaultLocale: 'is',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
