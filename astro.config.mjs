import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fast-hr.is',
  redirects: {
    // Old slug, kept so links published before the rename keep working.
    '/en/terms-and-rights': '/en/rights-and-terms',
  },
  i18n: {
    locales: ['is', 'en'],
    defaultLocale: 'is',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
