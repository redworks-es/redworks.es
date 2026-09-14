import { ui, defaultLang, type Lang, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const [, maybeLang] = url.pathname.split('/');
  if (maybeLang === 'fr') return 'fr';
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: UiKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefixes a root-relative path (e.g. "/megafonia/") with "/fr" when lang is French. */
export function localizePath(path: string, lang: Lang): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}

/** Given the current pathname, returns the equivalent path in the other language (same slug). */
export function swapLangInPath(pathname: string, targetLang: Lang): string {
  const withoutFrPrefix = pathname.startsWith('/fr/') || pathname === '/fr' ? pathname.replace(/^\/fr/, '') || '/' : pathname;
  return localizePath(withoutFrPrefix, targetLang);
}
