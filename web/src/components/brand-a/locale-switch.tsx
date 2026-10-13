"use client";

import { LOCALE_COOKIE, SITE_LOCALES, SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";

/**
 * Header locale switcher: four real links (crawlable, work without JS) plus a
 * <select> below 720px where four labels do not fit. Choosing one stores the
 * choice in a cookie, so a later visit to `/` lands on it (src/proxy.ts).
 */
function remember(l: SiteLocale) {
  try {
    document.cookie = `${LOCALE_COOKIE}=${l}; path=/; max-age=31536000; samesite=lax`;
    localStorage.setItem(LOCALE_COOKIE, l);
  } catch {
    /* storage blocked: the link still navigates */
  }
}

export function LocaleSwitch({ current, label }: { current: SiteLocale | null; label: string }) {
  return (
    <>
      <nav className="sq-loc" aria-label={label}>
        {SITE_LOCALES.map((l) => {
          const m = SITE_LOCALE_META[l];
          return (
            <a
              key={l}
              href={m.path}
              lang={m.htmlLang}
              hrefLang={m.hreflang}
              aria-current={l === current ? "page" : undefined}
              onClick={() => remember(l)}
            >
              {m.label}
            </a>
          );
        })}
      </nav>
      <label className="sq-loc-sel">
        <span className="sq-sr">{label}</span>
        <select
          value={current ?? ""}
          onChange={(e) => {
            const l = e.target.value as SiteLocale;
            if (!SITE_LOCALE_META[l]) return;
            remember(l);
            window.location.href = SITE_LOCALE_META[l].path;
          }}
        >
          {current ? null : <option value="">{label}</option>}
          {SITE_LOCALES.map((l) => (
            <option key={l} value={l} lang={SITE_LOCALE_META[l].htmlLang}>
              {SITE_LOCALE_META[l].label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
