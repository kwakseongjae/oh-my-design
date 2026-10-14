import Link from "next/link";
import type { ReactNode } from "react";
import { SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { getCopy } from "./copy";
import { LocaleSwitch } from "./locale-switch";
import { Logo } from "./logo";
import { ThemeToggle } from "./theme-toggle";
import "./chrome.css";

export const GITHUB_URL = "https://github.com/kwakseongjae/oh-my-design";

/**
 * Site-wide header (concept A). `locale` picks the nav copy and docs link;
 * `current` marks the active language in the switcher and is null on pages
 * that exist only in English (catalog, docs, blog), so no language claims
 * to be "this page" there.
 *
 * `origin` prefixes every internal link — "" on the main site; the blog passes
 * the site origin once it serves from its own host (lib/site.ts siteHref).
 * `extra` sits before the language switcher (the blog's own ko/en switch, the
 * docs' 5-locale switch, with `locales={false}`); the theme control stays the
 * only one on the page.
 */
export function SiteHeaderA({
  locale = "en",
  current = null,
  onLanding = false,
  origin = "",
  extra,
  locales = true,
  skipTo = "#main",
}: {
  /** Skip-link target; the docs' main region is #docs-content. */
  skipTo?: string;
  locale?: SiteLocale;
  current?: SiteLocale | null;
  onLanding?: boolean;
  origin?: string;
  extra?: ReactNode;
  /** false on docs and blog: their own language switch (in `extra`) replaces
   *  the landing-locale switch, so a page never shows two language controls. */
  locales?: boolean;
}) {
  const t = getCopy(locale).nav;
  const meta = SITE_LOCALE_META[locale];
  const skills = onLanding ? "#skills" : meta.path === "/" ? "/#skills" : `${meta.path}#skills`;
  const links = (
    <>
      <Link href={`${origin}/design-systems`} prefetch={false}>{t.archive}</Link>
      <a href={onLanding ? skills : `${origin}${skills}`}>{t.skills}</a>
      <Link href={`${origin}${meta.docs}`} prefetch={false}>{t.docs}</Link>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">{t.github}</a>
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
          {locales ? <LocaleSwitch current={current} label={t.lang} origin={origin} /> : null}
          <ThemeToggle label={t.theme} />
        </div>
      </div>
      <nav className="sq-wrap sq-menu-m" aria-label="Main">{links}</nav>
    </header>
  );
}
