/**
 * Shared blog header. Links out to the main site through siteHref, which turns
 * absolute once the blog has its own host — a bare "/cli" there would resolve
 * against blog.oh-my-design.kr and 404.
 */

import Link from "next/link";
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
    <header className="sticky top-0 z-50 border-b border-border/40 bg-background/60 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6">
        <Link href={blogIndexHref(locale)} className="flex items-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={siteHref("/logo.png")} alt="oh-my-design" className="block h-6 dark:hidden sm:h-7" />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={siteHref("/logo-white.png")} alt="oh-my-design" className="hidden h-6 dark:block sm:h-7" />
        </Link>
        <nav className="flex items-center gap-4 text-xs sm:text-sm">
          {switchTo && (
            <Link href={switchTo} className="text-muted-foreground hover:text-foreground">
              {chrome.switchLocale}
            </Link>
          )}
          <Link href={siteHref("/cli")} className="text-muted-foreground hover:text-foreground">
            CLI
          </Link>
          <Link href={siteHref("/docs/en")} className="text-muted-foreground hover:text-foreground">
            Docs
          </Link>
        </nav>
      </div>
    </header>
  );
}
