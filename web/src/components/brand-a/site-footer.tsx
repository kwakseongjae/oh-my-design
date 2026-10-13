import Link from "next/link";
import { SITE_LOCALES, SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { getCopy } from "./copy";
import { Mark } from "./mark";
import { GITHUB_URL } from "./site-header";
import "./chrome.css";

/** Site-wide footer (concept A): mark + tagline, product links, languages, licence line. */
export function SiteFooterA({ locale = "en", current = null }: { locale?: SiteLocale; current?: SiteLocale | null }) {
  const c = getCopy(locale);
  const meta = SITE_LOCALE_META[locale];
  return (
    <footer className="sq-root sq-foot" lang={meta.htmlLang}>
      <div className="sq-wrap sq-foot-in">
        <div className="sq-foot-brand">
          <Mark />
          <p>
            <b lang="en">oh-my-design</b>
            <span>{c.foot.tag}</span>
          </p>
        </div>
        <nav className="sq-foot-links" aria-label="Footer">
          <Link href="/design-systems" prefetch={false}>{c.nav.archive}</Link>
          <Link href={meta.docs} prefetch={false}>{c.nav.docs}</Link>
          <Link href="/what-is-design-md" prefetch={false} lang="en">What is DESIGN.md?</Link>
          <Link href="/faq" prefetch={false} lang="en">FAQ</Link>
          <Link href="/changelog" prefetch={false} lang="en">Changelog</Link>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">{c.nav.github}</a>
          <a href="https://www.npmjs.com/package/oh-my-design-cli" target="_blank" rel="noopener noreferrer">npm</a>
        </nav>
        <nav className="sq-foot-loc" aria-label={c.nav.lang}>
          {SITE_LOCALES.map((l) => (
            <a key={l} href={SITE_LOCALE_META[l].path} lang={SITE_LOCALE_META[l].htmlLang} hrefLang={SITE_LOCALE_META[l].hreflang} aria-current={l === current ? "true" : undefined}>
              {SITE_LOCALE_META[l].label}
            </a>
          ))}
        </nav>
        <p className="sq-legal">
          {c.foot.legal}{" "}
          <Link href={locale === "ko" ? "/privacy/ko" : "/privacy"} prefetch={false}>Privacy</Link>
          {" · "}
          <Link href={locale === "ko" ? "/terms/ko" : "/terms"} prefetch={false}>Terms</Link>
        </p>
      </div>
    </footer>
  );
}
