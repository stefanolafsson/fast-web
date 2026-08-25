import type { Lang } from './ui';

/**
 * URL path segment for each page, per locale (no base, no leading/trailing
 * slash; home is an empty string). English pages additionally live under the
 * `en/` prefix — that prefix is added by the helpers in `utils.ts`, not here.
 */
export const routes = {
  is: {
    home: '',
    about: 'um-felagid',
    board: 'stjorn',
    pay: 'kjaramal',
    news: 'frettir',
    contact: 'hafa-samband',
  },
  en: {
    home: '',
    about: 'about',
    board: 'board',
    pay: 'rights-and-terms',
    news: 'news',
    contact: 'contact',
  },
} as const satisfies Record<Lang, Record<string, string>>;

export type RouteKey = keyof (typeof routes)['is'];

/** Order in which nav items appear in the header and footer. */
export const navOrder: RouteKey[] = [
  'home',
  'about',
  'board',
  'pay',
  'news',
  'contact',
];
