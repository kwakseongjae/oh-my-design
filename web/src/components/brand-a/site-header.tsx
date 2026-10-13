import Link from "next/link";
import { SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { getCopy } from "./copy";
import { LocaleSwitch } from "./locale-switch";
import { Mark } from "./mark";
import { ThemeToggle } from "./theme-toggle";
import "./chrome.css";

export const GITHUB_URL = "https://github.com/kwakseongjae/oh-my-design";

/**
 * Site-wide header (concept A). `locale` picks the nav copy and docs link;
 * `current` marks the active language in the switcher and is null on pages
 * that exist only in English (catalog, docs, blog), so no language claims
 * to be "this page" there.
 */
export function SiteHeaderA({ locale = "en", current = null, onLanding = false }: { locale?: SiteLocale; current?: SiteLocale | null; onLanding?: boolean }) {
  const t = getCopy(locale).nav;
  const meta = SITE_LOCALE_META[locale];
  const skills = onLanding ? "#skills" : meta.path === "/" ? "/#skills" : `${meta.path}#skills`;
  const links = (
    <>
      <Link href="/design-systems" prefetch={false}>{t.archive}</Link>
      <a href={skills}>{t.skills}</a>
      <Link href={meta.docs} prefetch={false}>{t.docs}</Link>
      <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">{t.github}</a>
    </>
  );
  return (
    <header className="sq-root sq-top" lang={meta.htmlLang}>
      <a className="sq-skip" href="#main">{t.skip}</a>
      <div className="sq-wrap sq-bar">
        <Link className="sq-brand" href={meta.path} prefetch={false} aria-label="oh-my-design">
          <Mark />
          <span lang="en">oh-my-design</span>
        </Link>
        <nav className="sq-menu" aria-label="Main">{links}</nav>
        <div className="sq-tools">
          <LocaleSwitch current={current} label={t.lang} />
          <ThemeToggle label={t.theme} />
        </div>
      </div>
      <nav className="sq-wrap sq-menu-m" aria-label="Main">{links}</nav>
    </header>
  );
}
