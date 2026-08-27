/**
 * Blog footer. Every link into the main site goes through siteHref so it stays
 * correct on both hosts (path on oh-my-design.kr, absolute from the blog
 * subdomain). bg-muted/50 is the footer surface DESIGN.md records for this
 * project.
 */

import Link from "next/link";
import { blogFeedHref, blogIndexHref, siteHref } from "@/lib/site";
import { BLOG_CHROME } from "@/lib/blog/i18n";
import type { PostLocale } from "@/lib/blog/locales";

const GITHUB_URL = "https://github.com/kwakseongjae/oh-my-design";
const NPM_URL = "https://www.npmjs.com/package/oh-my-design-cli";

export function BlogFooter({ locale }: { locale: PostLocale }) {
  const chrome = BLOG_CHROME[locale];

  const productLinks = [
    { label: chrome.mainSite, href: siteHref("/") },
    { label: chrome.footerBuilder, href: siteHref("/builder") },
    { label: chrome.footerReferences, href: siteHref("/design-systems") },
    { label: chrome.footerBenchmarks, href: siteHref("/benchmarks") },
    { label: "CLI", href: siteHref("/cli") },
    { label: chrome.footerDocs, href: siteHref("/docs/en") },
  ];

  const resourceLinks = [
    { label: "GitHub", href: GITHUB_URL, external: true },
    { label: "npm", href: NPM_URL, external: true },
    { label: chrome.feedLabel, href: blogFeedHref(locale), external: false },
  ];

  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto grid max-w-3xl gap-10 px-4 py-12 sm:grid-cols-[1fr_auto_auto] sm:gap-16 sm:px-6">
        <div>
          <Link href={blogIndexHref(locale)} className="inline-flex items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={siteHref("/logo.png")} alt="oh-my-design" className="block h-6 dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={siteHref("/logo-white.png")} alt="oh-my-design" className="hidden h-6 dark:block" />
          </Link>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {chrome.footerTagline}
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} oh-my-design · MIT
          </p>
        </div>

        <nav aria-label={chrome.footerProduct}>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {chrome.footerProduct}
          </div>
          <ul className="mt-3 space-y-2">
            {productLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={chrome.footerResources}>
          <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            {chrome.footerResources}
          </div>
          <ul className="mt-3 space-y-2">
            {resourceLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </footer>
  );
}
