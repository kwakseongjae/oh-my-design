/**
 * Blog footer — since rebrand round 2 (2026-10-14) the concept-A site footer
 * plus the blog's own index and feed links. Every link into the main site
 * goes through siteHref's origin so it stays correct on both hosts (path on
 * oh-my-design.kr, absolute from the blog subdomain).
 */

import { SiteFooterA } from "@/components/brand-a/site-footer";
import { blogFeedHref, blogIndexHref, siteHref } from "@/lib/site";
import { BLOG_CHROME } from "@/lib/blog/i18n";
import type { PostLocale } from "@/lib/blog/locales";

export function BlogFooter({ locale }: { locale: PostLocale }) {
  const chrome = BLOG_CHROME[locale];
  return (
    <SiteFooterA
      locale={locale}
      origin={siteHref("")}
      extraLinks={[
        { label: "Blog", href: blogIndexHref(locale) },
        { label: chrome.feedLabel, href: blogFeedHref(locale) },
      ]}
    />
  );
}
