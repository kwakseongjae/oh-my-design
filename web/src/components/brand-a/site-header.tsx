import Link from "next/link";
import type { ReactNode } from "react";
import { SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { catalogPathFor } from "@/lib/i18n/ko-detail";
import { docsHref, type DocsLocale } from "@/lib/docs/locales";
import { getCopy } from "./copy";
import { LocaleSwitch } from "./locale-switch";
import { Logo } from "./logo";
import { StarPill } from "./star-pill";
import "./chrome.css";

export const GITHUB_URL = "https://github.com/kwakseongjae/oh-my-design";

/**
 * The docs locale each site locale reads (round 11 #29). The docs have five locales
 * (lib/docs/locales.ts) and every site locale is one of them; zh-cn has no site locale.
 */
export const DOCS_LOCALE_OF: Readonly<Record<SiteLocale, DocsLocale>> = {
  en: "en",
  ko: "ko",
  ja: "ja",
  "zh-tw": "zh-tw",
};

/** Where the header's and footer's "Skills" link goes: the docs skills page in that locale. */
export function skillsHrefFor(locale: SiteLocale, docsLocale?: DocsLocale): string {
  return docsHref(docsLocale ?? DOCS_LOCALE_OF[locale], "skills");
}

/**
 * Site-wide header (concept A). `locale` picks the nav copy and docs link;
 * `current` marks the active language in the switcher and is null on pages
 * that exist only in English (catalog, docs, blog), so no language claims
 * to be "this page" there.
 *
 * Round 7 (after Taste Skill's nav): wordmark, three links, the language control and one
 * dark GitHub star pill — the pill replaces the GitHub text link (one link to the repo per
 * header). Light only: no theme control. `stars` is the server-fetched count (the landing
 * passes it); undefined lets the pill read it on the client.
 *
 * Round 11 (#29): "Skills" opens the docs skills page (/docs/<docs locale>/skills) on every
 * page, the landing included, instead of a landing anchor. `docsLocale` lets a docs page in a
 * locale the site has no landing for (zh-cn) point Skills and Docs at its own locale.
 *
 * `origin` prefixes every internal link — "" on the main site; the blog passes
 * the site origin once it serves from its own host (lib/site.ts siteHref).
 * `extra` sits before the language switcher (the blog's own ko/en switch, the
 * docs' 5-locale switch, with `locales={false}`).
 */
export function SiteHeaderA({
  locale = "en",
  current = null,
  origin = "",
  extra,
  locales = true,
  skipTo = "#main",
  stars,
  localeHrefs,
  twins = false,
  docsLocale,
}: {
  /** Language-switch targets read from the page's hreflang alternates (a shared layout's header). */
  twins?: boolean;
  /** Language-switch targets when this page has translated twins (the item page). */
  localeHrefs?: Partial<Record<SiteLocale, string>>;
  /** Skip-link target; the docs' main region is #docs-content. */
  skipTo?: string;
  locale?: SiteLocale;
  current?: SiteLocale | null;
  /** Accepted for the landing's call; since round 11 no link depends on it. */
  onLanding?: boolean;
  origin?: string;
  extra?: ReactNode;
  /** false on docs and blog: their own language switch (in `extra`) replaces
   *  the landing-locale switch, so a page never shows two language controls. */
  locales?: boolean;
  /** GitHub stars fetched on the server; null = unavailable (pill without a number). */
  stars?: number | null;
  /** The docs locale for Skills and Docs when it is not the site locale's own (docs zh-cn). */
  docsLocale?: DocsLocale;
}) {
  const t = getCopy(locale).nav;
  const meta = SITE_LOCALE_META[locale];
  const docs = docsLocale ?? DOCS_LOCALE_OF[locale];
  const links = (
    <>
      <Link href={`${origin}${catalogPathFor(locale)}`} prefetch={false}>{t.archive}</Link>
      <Link href={`${origin}${skillsHrefFor(locale, docs)}`} prefetch={false}>{t.skills}</Link>
      <Link href={`${origin}${docsHref(docs)}`} prefetch={false}>{t.docs}</Link>
    </>
  );
  return (
    <header className="sq-root sq-top" lang={meta.htmlLang}>
      <a className="sq-skip" href={skipTo}>{t.skip}</a>
      <div className="sq-wrap sq-bar">
        <Link className="sq-brand" href={`${origin}${meta.path}`} prefetch={false} aria-label="oh-my-design">
          <Logo />
        </Link>
        <nav className="sq-menu" aria-label="Main">{links}</nav>
        <div className="sq-tools">
          {extra}
          {locales ? <LocaleSwitch current={current} t={t} origin={origin} hrefs={localeHrefs} twins={twins} /> : null}
          <StarPill stars={stars} label={t.github} />
        </div>
      </div>
      <nav className="sq-wrap sq-menu-m" aria-label="Main">{links}</nav>
    </header>
  );
}
