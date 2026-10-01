import Link from "next/link";
import type { LandingCopy } from "./copy";
import { Wordmark } from "./wordmark";

/**
 * Proof-sheet header for the landing pages (/ and /ko). The builder, catalog
 * and docs keep their own inline headers — the redesign brief keeps those
 * surfaces visually unchanged.
 */
export function SiteHeader({ copy }: { copy: LandingCopy }) {
  return (
    <header className="border-b border-ink">
      <div className="mx-auto flex h-14 max-w-[1440px] items-center justify-between gap-3 px-4 sm:px-8 lg:px-12">
        <Link href={copy.home} prefetch={false} aria-label="oh-my-design home" className="text-ink">
          <Wordmark />
        </Link>
        <nav aria-label="Main" className="flex items-center gap-1 text-sm font-medium sm:gap-2">
          <Link href="/design-systems" prefetch={false} className="rounded-tag px-2 py-1.5 text-ink hover:bg-paper-2">
            {copy.nav.catalog}
          </Link>
          <Link href={copy.docsHref} prefetch={false} className="hidden rounded-tag px-2 py-1.5 text-ink hover:bg-paper-2 md:inline-block">
            {copy.nav.docs}
          </Link>
          <a
            href="https://github.com/kwakseongjae/oh-my-design"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-tag px-2 py-1.5 text-ink hover:bg-paper-2 md:inline-block"
          >
            {copy.nav.github}
          </a>
          <a
            href={copy.nav.switchHref}
            hrefLang={copy.locale === "en" ? "ko" : "en"}
            lang={copy.locale === "en" ? "ko" : "en"}
            aria-label={copy.nav.switchLabel}
            className="rounded-tag border border-ink px-2 py-1 font-mono text-xs text-ink hover:bg-paper-2"
          >
            {copy.nav.switchText}
          </a>
          <Link
            href="/builder"
            prefetch={false}
            className="ml-1 hidden rounded-tag bg-ink px-3 py-1.5 text-paper hover:opacity-90 sm:inline-block"
          >
            {copy.nav.builder}
          </Link>
        </nav>
      </div>
    </header>
  );
}
