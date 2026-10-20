import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { SiteFooterA } from "@/components/brand-a/site-footer";
import type { CliDocsDictionary } from "@/data/cli-docs";
import {
  DOC_HTML_LANG,
  DOC_NAV_GROUPS,
  DOC_PAGES,
  DOCS_SITE_LOCALE,
  docsHref,
  type DocsLocale,
  type DocsPage,
} from "@/lib/docs/locales";
import { docsPageMarkdown } from "@/lib/docs/page-markdown";
import { docsLlmsText } from "@/lib/docs/llms-text";
import { LanguageSwitcher } from "./language-switcher";
import { DocsPageActions } from "./docs-page-actions";
import { DocsToc, type TocItem } from "./docs-toc";
import "./docs.css";

function DocsNav({
  locale,
  page,
  dictionary,
}: {
  locale: DocsLocale;
  page: DocsPage;
  dictionary: CliDocsDictionary;
}) {
  return (
    <nav aria-label={dictionary.ui.docs} className="dx-nav">
      {DOC_NAV_GROUPS.map((group) => (
        <div key={group.id} className="dx-nav-group">
          <p className="dx-nav-title">{dictionary.navGroups[group.id]}</p>
          {group.pages.map((item) => (
            <Link
              key={item}
              href={docsHref(locale, item)}
              aria-current={item === page ? "page" : undefined}
              prefetch={false}
            >
              {dictionary.nav[item]}
            </Link>
          ))}
        </div>
      ))}
    </nav>
  );
}

function Chevron() {
  return (
    <svg width="12" height="12" viewBox="0 0 10 10" aria-hidden="true" focusable="false">
      <path d="M2 3.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
      <path d="M2.5 4.5h11M2.5 8h11M2.5 11.5h11" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function Arrow({ back = false }: { back?: boolean }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" focusable="false">
      <path d={back ? "M7.5 2.5L4 6l3.5 3.5" : "M4.5 2.5L8 6 4.5 9.5"} fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

/**
 * Frame of every docs route: the site header (with the docs' own five-locale switch in its
 * tools slot), the grouped nav, the reading column, the on-this-page list and the footer.
 * Pages render their own head (DocsHead) and sections inside it.
 */
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
  const siteLocale = DOCS_SITE_LOCALE[locale];

  return (
    <div lang={DOC_HTML_LANG[locale]} className="sq-root sq-root-page dx-root">
      <SiteHeaderA
        locale={siteLocale}
        locales={false}
        skipTo="#docs-content"
        extra={<LanguageSwitcher locale={locale} page={page} label={dictionary.ui.language} />}
      />

      <div className="dx-mnav">
        <details>
          <summary>
            <MenuIcon />
            <span className="sq-sr">{dictionary.ui.menu}: </span>
            <span>{dictionary.nav[page]}</span>
            <Chevron />
          </summary>
          <DocsNav locale={locale} page={page} dictionary={dictionary} />
        </details>
      </div>

      <div className="dx-layout">
        <aside className="dx-side">
          <DocsNav locale={locale} page={page} dictionary={dictionary} />
        </aside>

        <main id="docs-content" tabIndex={-1} className="dx-main">
          <div className="dx-doc">
            <DocsPageActions
              locale={locale}
              page={page}
              labels={dictionary.ui}
              pageContent={docsPageMarkdown(locale, page)}
              llmsContent={docsLlmsText(locale)}
            />
            {children}
            <nav aria-label={dictionary.ui.pagination} className="dx-pager">
              {previous ? (
                <Link href={docsHref(locale, previous)} prefetch={false}>
                  <small><Arrow back />{dictionary.ui.previous}</small>
                  <b>{dictionary.nav[previous]}</b>
                </Link>
              ) : null}
              {next ? (
                <Link href={docsHref(locale, next)} className="dx-next" prefetch={false}>
                  <small>{dictionary.ui.next}<Arrow /></small>
                  <b>{dictionary.nav[next]}</b>
                </Link>
              ) : null}
            </nav>
          </div>
        </main>

        <aside className="dx-toc">
          <DocsToc items={toc} label={dictionary.ui.onThisPage} />
        </aside>
      </div>
      <SiteFooterA locale={siteLocale} />
    </div>
  );
}
