import Link from "next/link";
import { ArrowLeft, ArrowRight, Menu } from "lucide-react";
import type { ReactNode } from "react";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { SiteFooterA } from "@/components/brand-a/site-footer";
import type { SiteLocale } from "@/lib/i18n/site-locales";
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

/** Site chrome copy per docs locale; zh-cn has no site locale, so it reads English chrome. */
const SITE_COPY_LOCALE: Record<DocsLocale, SiteLocale> = {
  en: "en",
  ko: "ko",
  ja: "ja",
  "zh-tw": "zh-tw",
  "zh-cn": "en",
};
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
      {/* Concept-A site header (rebrand round 2). The docs keep their own 5-locale
          switcher in its tools slot, so the landing-locale switch is off here. */}
      <SiteHeaderA
        locale={SITE_COPY_LOCALE[locale]}
        locales={false}
        skipTo="#docs-content"
        extra={<LanguageSwitcher locale={locale} page={page} label={dictionary.ui.language} />}
      />

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
      <SiteFooterA locale={SITE_COPY_LOCALE[locale]} />
    </div>
  );
}
