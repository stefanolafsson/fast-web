import { ui, defaultLang, dateLocale, type Lang, type UIKey } from './ui';
import { routes, type RouteKey } from './routes';

const BASE = import.meta.env.BASE_URL;

/** Detect the active language from a request URL (English lives under `/en/`). */
export function getLangFromUrl(url: URL): Lang {
  const parts = url.pathname.replace(BASE, '').split('/').filter(Boolean);
  return parts[0] === 'en' ? 'en' : 'is';
}

/** Returns a `t(key)` translation helper bound to a language. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Full href (including base) for a page key in the given language. */
export function localizedPath(key: RouteKey, lang: Lang): string {
  const segment = routes[lang][key];
  const prefix = lang === 'en' ? 'en/' : '';
  const path = segment ? `${prefix}${segment}/` : prefix;
  return `${BASE}${path}`;
}

/** The opposite language to the one given. */
export function otherLang(lang: Lang): Lang {
  return lang === 'is' ? 'en' : 'is';
}

/** Language of a news entry, derived from its `is/` or `en/` id prefix. */
export function newsLang(id: string): Lang {
  return id.startsWith('en/') ? 'en' : 'is';
}

/** Strip the `is/` or `en/` folder prefix from a news entry id. */
export function newsSlug(id: string): string {
  return id.replace(/^(is|en)\//, '');
}

/** Full href (including base) for a news article in the given language. */
export function newsUrl(id: string, lang: Lang): string {
  return `${localizedPath('news', lang)}${newsSlug(id)}/`;
}

export type { Lang, RouteKey, UIKey };
export { dateLocale };
