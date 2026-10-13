/**
 * Shared blog header — since rebrand round 2 (2026-10-14) the concept-A site
 * header, so the blog reads as the same site. Links into the main site go
 * through siteHref's origin, which turns absolute once the blog has its own
 * host — a bare "/design-systems" there would resolve against
 * blog.oh-my-design.kr and 404.
 *
 * Language: the blog has its own ko/en pair, so the landing-locale switch is
 * off here (`locales={false}`) and this page's other-language link takes its
 * place. The site header's theme control is the only one on the page.
 */

import Link from "next/link";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { blogIndexHref, siteHref } from "@/lib/site";
import { BLOG_CHROME } from "@/lib/blog/i18n";
import type { PostLocale } from "@/lib/blog/locales";

export function BlogHeader({
  locale,
  switchTo,
}: {
  locale: PostLocale;
  /** Href of this same page in the other locale, when it exists. */
  switchTo?: string;
}) {
  const chrome = BLOG_CHROME[locale];
  return (
    <SiteHeaderA
      locale={locale}
      origin={siteHref("")}
      locales={false}
      extra={
        <>
          <Link href={blogIndexHref(locale)} className="sq-xlink sq-xlink-on">
            Blog
          </Link>
          {switchTo ? (
            <Link
              href={switchTo}
              className="sq-xlink"
              hrefLang={locale === "ko" ? "en" : "ko"}
              aria-label={chrome.switchLocale}
            >
              {chrome.switchLocaleShort}
            </Link>
          ) : null}
        </>
      }
    />
  );
}
