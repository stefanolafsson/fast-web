export const languages = {
  is: 'Íslenska',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'is';

/** Short label shown in the header language switcher for each locale. */
export const langSwitchLabel: Record<Lang, string> = {
  is: 'EN',
  en: 'IS',
};

/** Date-formatting locale per site language. */
export const dateLocale: Record<Lang, string> = {
  is: 'is-IS',
  en: 'en-GB',
};

export const ui = {
  is: {
    'site.tagline': 'Félag akademískra starfsmanna við Háskólann í Reykjavík',
    'nav.home': 'Forsíða',
    'nav.about': 'Um félagið',
    'nav.board': 'Stjórn',
    'nav.pay': 'Kjaramál',
    'nav.news': 'Fréttir',
    'nav.contact': 'Hafa samband',
    'nav.menu': 'Aðalvalmynd',
    'nav.openMenu': 'Opna valmynd',
    'nav.switchLang': 'English',
    'header.logoText': 'Félag akademískra starfsmanna við HR',
    'footer.about':
      'Félag akademískra starfsmanna við Háskólann í Reykjavík. Aðildarfélag BHM — Bandalags háskólamanna.',
    'footer.quickLinks': 'Flýtileiðir',
    'footer.links': 'Tenglar',
    'footer.contact': 'Samband',
    'footer.bhm': 'BHM — Bandalag háskólamanna',
    'footer.ru': 'Háskólinn í Reykjavík',
    'footer.rights': 'Allur réttur áskilinn.',
    'news.all': 'Allar fréttir',
    'news.readMore': 'Lesa meira →',
    'news.back': '← Allar fréttir',
    'news.backToNews': '← Til baka í fréttir',
    'news.latestTitle': 'Fréttir',
    'news.latestSubtitle': 'Nýjustu fréttir og tilkynningar frá FAST.',
  },
  en: {
    'site.tagline': 'Association of Academic Staff at Reykjavík University',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.board': 'Board',
    'nav.pay': 'Terms & Rights',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.menu': 'Main menu',
    'nav.openMenu': 'Open menu',
    'nav.switchLang': 'Íslenska',
    'header.logoText': 'Association of Academic Staff at RU',
    'footer.about':
      'Association of Academic Staff at Reykjavík University. A member union of BHM — the Icelandic Confederation of University Graduates.',
    'footer.quickLinks': 'Quick links',
    'footer.links': 'Links',
    'footer.contact': 'Contact',
    'footer.bhm': 'BHM — Confederation of University Graduates',
    'footer.ru': 'Reykjavík University',
    'footer.rights': 'All rights reserved.',
    'news.all': 'All news',
    'news.readMore': 'Read more →',
    'news.back': '← All news',
    'news.backToNews': '← Back to news',
    'news.latestTitle': 'News',
    'news.latestSubtitle': 'Latest news and announcements from FAST.',
  },
} as const;

export type UIKey = keyof (typeof ui)['is'];
