/* === Internationalization plugin (vue-i18n) === */
// Libraries
import { createI18n } from 'vue-i18n';
import en from '@src/locales/en.json';
import ja from '@src/locales/ja.json';

export type Locale = 'ja' | 'en';

const DEFAULT_LOCALE: Locale = 'ja';
const STORAGE_KEY = 'locale';

const readStoredLocale = (): Locale => {
  if (typeof window === 'undefined') {
    return DEFAULT_LOCALE;
  }
  try {
    const stored = window.localStorage?.getItem(STORAGE_KEY);
    return stored === 'ja' || stored === 'en' ? stored : DEFAULT_LOCALE;
  } catch {
    // ignore storage access errors (e.g. privacy mode)
    return DEFAULT_LOCALE;
  }
};

export const i18n = createI18n({
  legacy: false,
  locale: readStoredLocale(),
  fallbackLocale: DEFAULT_LOCALE,
  messages: { ja, en }
});

const SITE_TITLE_SUFFIX = ' | Portfolio';

const setMetaContent = (selector: string, content: string): void => {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
};

// Reflect the brand name on <title> and meta tags (client-side only).
const applyDocumentMeta = (): void => {
  const brand = i18n.global.t('brand.name');
  const title = `${brand}${SITE_TITLE_SUFFIX}`;
  document.title = title;
  setMetaContent('meta[name="title"]', title);
  setMetaContent('meta[name="author"]', brand);
  setMetaContent('meta[name="description"]', title);
  setMetaContent('meta[property="og:site_name"]', title);
  setMetaContent('meta[property="og:title"]', title);
  setMetaContent('meta[property="og:description"]', title);
};

export const setLocale = (locale: Locale): void => {
  i18n.global.locale.value = locale;
  if (typeof window !== 'undefined') {
    try {
      window.localStorage?.setItem(STORAGE_KEY, locale);
    } catch {
      // ignore storage access errors (e.g. privacy mode)
    }
    document.documentElement.lang = locale;
    applyDocumentMeta();
  }
};

export const toggleLocale = (): Locale => {
  const next: Locale = i18n.global.locale.value === 'ja' ? 'en' : 'ja';
  setLocale(next);
  return next;
};

// Reflect the restored locale on the <html> element (client-side only).
if (typeof window !== 'undefined') {
  document.documentElement.lang = i18n.global.locale.value;
  applyDocumentMeta();
}
