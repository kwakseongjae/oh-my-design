import Link from "next/link";
import { ArrowLeft, ArrowRight, BookOpen, Menu } from "lucide-react";
import type { ReactNode } from "react";
import type { CliDocsDictionary } from "@/data/cli-docs";
import {
  DOC_HTML_LANG,
  DOC_PAGES,
  docsHref,
  type DocsLocale,
  type DocsPage,
} from "@/lib/docs/locales";
import { LanguageSwitcher } from "./language-switcher";
import { DocsPageActions } from "./docs-page-actions";
import { DocsToc } from "./docs-toc";
import { GithubStarButton } from "@/components/github-star-button";
import { docsPageMarkdown } from "@/lib/docs/page-markdown";
import { docsLlmsText } from "@/lib/docs/llms-text";

type TocItem = { id: string; label: string };

export function DocsShell({
  locale,
  page,
  dictionary,
  toc,
  children,
}: {
  locale: DocsLocale;
  page: DocsPage;
  dictionary: CliDocsDictionary;
  toc: TocItem[];
  children: ReactNode;
}) {
  const pageIndex = DOC_PAGES.indexOf(page);
  const previous = pageIndex > 0 ? DOC_PAGES[pageIndex - 1] : null;
  const next = pageIndex < DOC_PAGES.length - 1 ? DOC_PAGES[pageIndex + 1] : null;

  const navLinks = (
    <nav aria-label={dictionary.ui.docs} className="space-y-1">
      {DOC_PAGES.map((item) => (
        <Link
          key={item}
          href={docsHref(locale, item)}
          aria-current={item === page ? "page" : undefined}
          className={`flex min-h-9 items-center rounded-lg px-3 text-[13px] transition-colors focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50 ${
            item === page
              ? "bg-muted font-medium text-foreground ring-1 ring-foreground/10"
              : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
          }`}
        >
          {dictionary.nav[item]}
        </Link>
      ))}
    </nav>
  );

  return (
    <div lang={DOC_HTML_LANG[locale]} className="min-h-screen bg-background text-foreground">
      <a
        href="#docs-content"
        className="sr-only z-[60] rounded-lg bg-background px-3 py-2 text-sm text-foreground ring-3 ring-ring/50 focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        {dictionary.ui.skipContent}
      </a>
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background">
        <div className="mx-auto flex h-14 max-w-[1480px] items-center gap-3 px-4 sm:px-6">
          <Link
            href="/"
            className="inline-flex shrink-0 items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            aria-label={dictionary.ui.homeAria}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="oh-my-design" className="h-6 dark:hidden" />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo-white.png" alt="oh-my-design" className="hidden h-6 dark:block" />
          </Link>
          <span className="h-5 w-px bg-border" aria-hidden />
          <Link href={docsHref(locale)} className="hidden items-center gap-1.5 text-sm font-medium text-foreground/75 sm:inline-flex">
            <BookOpen className="h-4 w-4 text-primary" />
            {dictionary.ui.docs}
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <LanguageSwitcher locale={locale} page={page} label={dictionary.ui.language} />
            <GithubStarButton variant="control" className="hidden sm:inline-flex" />
          </div>
        </div>
      </header>

      <div className="border-b border-border/60 px-4 py-2 lg:hidden">
        <details className="group mx-auto max-w-3xl">
          <summary className="flex min-h-10 cursor-pointer list-none items-center justify-between rounded-lg px-2 text-sm text-muted-foreground hover:bg-muted">
            <span className="inline-flex items-center gap-2"><Menu className="h-4 w-4" />{dictionary.nav[page]}</span>
            <span className="text-muted-foreground/70 group-open:rotate-180">▾</span>
          </summary>
          <div className="pb-3 pt-1">{navLinks}</div>
        </details>
      </div>

      <div className="mx-auto grid max-w-[1480px] grid-cols-1 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 lg:px-6 xl:grid-cols-[240px_minmax(0,1fr)_200px] xl:gap-10">
        <aside className="hidden border-r border-border/60 py-10 pr-6 lg:block">
          <div className="sticky top-24">
            <p className="mb-3 px-3 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-primary">
              {dictionary.ui.product}
            </p>
            {navLinks}
          </div>
        </aside>

        <main id="docs-content" tabIndex={-1} className="min-w-0 px-4 py-12 sm:px-6 sm:py-16 lg:px-0 lg:py-20 focus:outline-none">
          <DocsPageActions
            locale={locale}
            page={page}
            labels={dictionary.ui}
            pageContent={docsPageMarkdown(locale, page)}
            llmsContent={docsLlmsText(locale)}
          />
          {children}
          <nav aria-label={dictionary.ui.pagination} className="mt-20 grid gap-3 border-t border-border/60 pt-8 sm:grid-cols-2">
            {previous ? (
              <Link href={docsHref(locale, previous)} className="group rounded-lg p-4 ring-1 ring-foreground/10 transition-colors hover:bg-muted/60">
                <span className="flex items-center gap-1 text-[11px] text-muted-foreground"><ArrowLeft className="h-3 w-3" />{dictionary.ui.previous}</span>
                <span className="mt-2 block text-sm font-medium text-foreground/85">{dictionary.nav[previous]}</span>
              </Link>
            ) : <span />}
            {next && (
              <Link href={docsHref(locale, next)} className="group rounded-lg p-4 text-right ring-1 ring-foreground/10 transition-colors hover:bg-muted/60">
                <span className="flex items-center justify-end gap-1 text-[11px] text-muted-foreground">{dictionary.ui.next}<ArrowRight className="h-3 w-3" /></span>
                <span className="mt-2 block text-sm font-medium text-foreground/85">{dictionary.nav[next]}</span>
              </Link>
            )}
          </nav>
        </main>

        <aside className="hidden py-20 xl:block">
          <div className="sticky top-24">
            <DocsToc items={toc} label={dictionary.ui.onThisPage} />
          </div>
        </aside>
      </div>
    </div>
  );
}
