import Link from "next/link";
import { SITE_LOCALES, SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { catalogPathFor } from "@/lib/i18n/ko-detail";
import { getCopy } from "./copy";
import { Logo } from "./logo";
import { GITHUB_URL } from "./site-header";
import "./chrome.css";

/** Site-wide footer (concept A): mark + tagline, product links, languages, licence line. */
export function SiteFooterA({
  locale = "en",
  current = null,
  origin = "",
  extraLinks = [],
}: {
  locale?: SiteLocale;
  current?: SiteLocale | null;
  /** Prefix for internal links; the blog passes the site origin on its own host. */
  origin?: string;
  /** Surface-specific links appended to the product column (the blog's index and feed). */
  extraLinks?: { label: string; href: string }[];
}) {
  const c = getCopy(locale);
  const meta = SITE_LOCALE_META[locale];
  const o = (path: string) => `${origin}${path}`;
  return (
    <footer className="sq-root sq-foot" lang={meta.htmlLang}>
      <div className="sq-wrap sq-foot-in">
        <div className="sq-foot-brand">
          <Logo wordmark={false} />
          <p>
            <b lang="en">oh-my-design</b>
            <span>{c.foot.tag}</span>
          </p>
        </div>
        <nav className="sq-foot-links" aria-label="Footer">
          <Link href={o(catalogPathFor(locale))} prefetch={false}>{c.nav.archive}</Link>
          <Link href={o(meta.docs)} prefetch={false}>{c.nav.docs}</Link>
          <Link href={o("/what-is-design-md")} prefetch={false} lang="en">What is DESIGN.md?</Link>
          <Link href={o("/faq")} prefetch={false} lang="en">FAQ</Link>
          <Link href={o("/changelog")} prefetch={false} lang="en">Changelog</Link>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">{c.nav.github}</a>
          <a href="https://www.npmjs.com/package/oh-my-design-cli" target="_blank" rel="noopener noreferrer">npm</a>
          {extraLinks.map((l) => (
            <a key={l.href} href={l.href}>{l.label}</a>
          ))}
        </nav>
        <nav className="sq-foot-loc" aria-label={c.nav.lang}>
          {SITE_LOCALES.map((l) => (
            <a key={l} href={o(SITE_LOCALE_META[l].path)} lang={SITE_LOCALE_META[l].htmlLang} hrefLang={SITE_LOCALE_META[l].hreflang} aria-current={l === current ? "true" : undefined}>
              {SITE_LOCALE_META[l].label}
            </a>
          ))}
        </nav>
        <p className="sq-legal">
          {c.foot.legal} {c.foot.marks}{" "}
          <Link href={o(locale === "ko" ? "/privacy/ko" : "/privacy")} prefetch={false}>Privacy</Link>
          {" · "}
          <Link href={o(locale === "ko" ? "/terms/ko" : "/terms")} prefetch={false}>Terms</Link>
        </p>
      </div>
    </footer>
  );
}
