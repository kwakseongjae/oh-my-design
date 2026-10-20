import Link from "next/link";
import { SITE_LOCALES, SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import { catalogPathFor } from "@/lib/i18n/ko-detail";
import { docsHref, type DocsLocale } from "@/lib/docs/locales";
import { BLOG_ON_SUBDOMAIN, blogIndexHref, blogIndexUrl } from "@/lib/site";
import { ManageConsentButton } from "@/components/manage-consent-button";
import { fmt, getCopy } from "./copy";
import { GITHUB_MARK, NPM_URL, THREADS_MARK, THREADS_URL, getChromeCopy, type Mark } from "./copy/r11-chrome";
import { Logo } from "./logo";
import { DOCS_LOCALE_OF, GITHUB_URL, skillsHrefFor } from "./site-header";
import "./chrome.css";

const LICENSE_URL = `${GITHUB_URL}/blob/main/LICENSE`;

function MarkIcon({ mark }: { mark: Mark }) {
  return (
    <svg viewBox={mark.viewBox} width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false">
      <path d={mark.d} />
    </svg>
  );
}

/**
 * Site-wide footer. Round 11 (#15, after Taste Skill's footer): on the left the logo, the
 * one-line intro and the GitHub and Threads icon links (official marks, copy/r11-chrome.ts);
 * on the right three columns, Product, Open source and Language; one bottom line.
 *
 * The bottom line keeps the trademark sentence and the Privacy, Terms and cookie-settings links
 * on purpose: the landing now shows official logos, and the cookie choice must stay as easy to
 * change as it was to make (ManageConsentButton re-opens the consent card).
 */
export function SiteFooterA({
  locale = "en",
  current = null,
  origin = "",
  extraLinks = [],
  docsLocale,
}: {
  locale?: SiteLocale;
  current?: SiteLocale | null;
  /** Prefix for internal links; the blog passes the site origin on its own host. */
  origin?: string;
  /** Surface-specific links appended to the product column (the blog's index and feed). */
  extraLinks?: { label: string; href: string }[];
  /** The docs locale for Skills and Docs when it is not the site locale's own (docs zh-cn). */
  docsLocale?: DocsLocale;
}) {
  const c = getCopy(locale);
  const t = getChromeCopy(locale).foot;
  const meta = SITE_LOCALE_META[locale];
  const o = (path: string) => `${origin}${path}`;
  const docs = docsLocale ?? DOCS_LOCALE_OF[locale];
  // the blog is ko + en: Korean pages read the Korean blog, the others the English one
  const blogLocale = locale === "ko" ? "ko" : "en";
  const blogHref = BLOG_ON_SUBDOMAIN ? blogIndexUrl(blogLocale) : blogIndexHref(blogLocale);
  // the blog's own footer passes its index again; the Product column already has it
  const extras = extraLinks.filter((l) => l.href !== blogIndexHref(blogLocale));
  const ext = { target: "_blank", rel: "noopener noreferrer" } as const;
  return (
    <footer className="sq-root sq-foot" lang={meta.htmlLang}>
      <div className="sq-wrap">
        <div className="sq-foot-in">
          <div className="sq-foot-brand">
            <Link className="sq-foot-logo" href={o(meta.path)} prefetch={false} aria-label="oh-my-design">
              <Logo />
            </Link>
            <p className="sq-foot-tag">{c.foot.tag}</p>
            <ul className="sq-foot-social">
              <li>
                <a href={GITHUB_URL} {...ext} aria-label={t.github}>
                  <MarkIcon mark={GITHUB_MARK} />
                </a>
              </li>
              <li>
                <a href={THREADS_URL} target="_blank" rel="me noopener noreferrer" aria-label={t.threads}>
                  <MarkIcon mark={THREADS_MARK} />
                </a>
              </li>
            </ul>
          </div>
          <nav className="sq-foot-col" aria-labelledby="sq-foot-product">
            <h2 className="sq-foot-h" id="sq-foot-product">{t.product}</h2>
            <ul>
              <li><Link href={o(catalogPathFor(locale))} prefetch={false}>{c.nav.archive}</Link></li>
              <li><Link href={o(skillsHrefFor(locale, docs))} prefetch={false}>{c.nav.skills}</Link></li>
              <li><Link href={o(docsHref(docs))} prefetch={false}>{c.nav.docs}</Link></li>
              <li><Link href={o("/changelog")} prefetch={false}>{t.changelog}</Link></li>
              <li><a href={blogHref}>{t.blog}</a></li>
              {extras.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <nav className="sq-foot-col" aria-labelledby="sq-foot-oss">
            <h2 className="sq-foot-h" id="sq-foot-oss">{t.oss}</h2>
            <ul>
              <li><a href={GITHUB_URL} {...ext}>GitHub</a></li>
              <li><a href={NPM_URL} {...ext}>npm</a></li>
              <li><a href={LICENSE_URL} {...ext}>{t.license}</a></li>
            </ul>
          </nav>
          <nav className="sq-foot-col" aria-labelledby="sq-foot-lang">
            <h2 className="sq-foot-h" id="sq-foot-lang">{t.lang}</h2>
            <ul>
              {SITE_LOCALES.map((l) => (
                <li key={l}>
                  <a href={o(SITE_LOCALE_META[l].path)} lang={SITE_LOCALE_META[l].htmlLang} hrefLang={SITE_LOCALE_META[l].hreflang} aria-current={l === current ? "true" : undefined}>
                    {SITE_LOCALE_META[l].label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="sq-foot-bottom">
          <p>{fmt(t.legal, { year: new Date().getFullYear() })}</p>
          <p className="sq-foot-meta">
            <Link href={o(locale === "ko" ? "/privacy/ko" : "/privacy")} prefetch={false}>{t.privacy}</Link>
            <Link href={o(locale === "ko" ? "/terms/ko" : "/terms")} prefetch={false}>{t.terms}</Link>
            <ManageConsentButton label={t.cookies} className="sq-foot-btn" />
          </p>
        </div>
      </div>
    </footer>
  );
}
