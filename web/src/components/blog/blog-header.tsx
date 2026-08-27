/**
 * Shared blog header. Links out to the main site through siteHref, which turns
 * absolute once the blog has its own host — a bare "/cli" there would resolve
 * against blog.oh-my-design.kr and 404.
 *
 * The logo goes to the blog index (this site's own root); the explicit
 * arrow item is the way back to oh-my-design proper. The locale switcher and
 * theme toggle live here so every blog page carries them.
 */

import Link from "next/link";
import { ArrowUpRight, Languages } from "lucide-react";
import { blogIndexHref, siteHref } from "@/lib/site";
import { BLOG_CHROME } from "@/lib/blog/i18n";
import type { PostLocale } from "@/lib/blog/locales";
import { BlogThemeToggle } from "./blog-theme-toggle";

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
        <nav className="flex items-center gap-1 text-xs sm:gap-2 sm:text-sm">
          <Link
            href={siteHref("/")}
            className="hidden items-center gap-1 rounded-lg px-2 py-1.5 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:inline-flex"
          >
            oh-my-design <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <Link
            href={siteHref("/cli")}
            className="rounded-lg px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            CLI
          </Link>
          <Link
            href={siteHref("/docs/en")}
            className="rounded-lg px-2 py-1.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            Docs
          </Link>
          {switchTo && (
            <Link
              href={switchTo}
              className="inline-flex items-center gap-1.5 rounded-lg px-2 py-1.5 font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <Languages className="h-4 w-4" />
              <span className="hidden sm:inline">{chrome.switchLocale}</span>
              <span className="sm:hidden">{chrome.switchLocaleShort}</span>
            </Link>
          )}
          <BlogThemeToggle label={chrome.themeToggle} />
        </nav>
      </div>
    </header>
  );
}
