"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { event } from "@/lib/gtag";
import {
  DOC_HTML_LANG,
  DOC_LOCALES,
  DOC_LOCALE_LABELS,
  docsHref,
  type DocsLocale,
  type DocsPage,
} from "@/lib/docs/locales";
// The site's language dropdown styling (chrome stream's file, imported read-only) so the docs
// control looks and behaves like the one in every other header.
import "@/components/brand-a/locale-switch.css";

/**
 * Docs language picker. Same look and menu-button pattern as the site's LocaleSwitch
 * (brand-a/locale-switch.tsx), which cannot be reused directly: it lists the four landing
 * locales, while the docs also ship zh-CN, and each row here keeps the reader on the same
 * docs page. Rows are real links (crawlable, work without JS). Unlike the landing switch it
 * sets no locale cookie: zh-CN has no landing to send `/` to.
 *
 * Keys: click, ↓ or ↑ on the button opens on the current (↑: last) row; ↑ ↓ Home End move;
 * Enter / Space follow; Esc closes and returns focus; Tab or a press outside closes.
 */
export function LanguageSwitcher({
  locale,
  page,
  label,
}: {
  locale: DocsLocale;
  page: DocsPage;
  label: string;
}) {
  const wrap = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const focusOn = useRef<"current" | "last" | null>(null);

  // The docs share the English root layout (<html lang="en">); the body is scoped with
  // `lang`, and this keeps the document language truthful for assistive tech once hydrated.
  useEffect(() => {
    document.documentElement.lang = DOC_HTML_LANG[locale];
    return () => {
      document.documentElement.lang = "en";
    };
  }, [locale]);

  const rows = () => [...(list.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [])];
  const show = (at: "current" | "last" = "current") => {
    focusOn.current = at;
    setOpen(true);
  };
  const hide = (refocus: boolean) => {
    setOpen(false);
    if (refocus) trigger.current?.focus();
  };

  useEffect(() => {
    if (!open || !focusOn.current) return;
    const r = rows();
    (focusOn.current === "last" ? r[r.length - 1] : (r.find((a) => a.getAttribute("aria-current") === "page") ?? r[0]))?.focus();
    focusOn.current = null;
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const away = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", away);
    return () => document.removeEventListener("pointerdown", away);
  }, [open]);

  const onBtnKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === "ArrowDown" || e.key === "ArrowUp") {
      e.preventDefault();
      show(e.key === "ArrowUp" ? "last" : "current");
    } else if (e.key === "Escape" && open) {
      e.preventDefault();
      hide(true);
    }
  };
  const onKey = (e: KeyboardEvent<HTMLUListElement>) => {
    const r = rows();
    const i = r.indexOf(document.activeElement as HTMLAnchorElement);
    if (e.key === "Escape") {
      e.preventDefault();
      hide(true);
      return;
    }
    if (e.key === "Tab") {
      setOpen(false);
      return;
    }
    if (e.key === " ") {
      e.preventDefault();
      (document.activeElement as HTMLAnchorElement | null)?.click();
      return;
    }
    let n = -1;
    if (e.key === "ArrowDown") n = (i + 1) % r.length;
    else if (e.key === "ArrowUp") n = (i - 1 + r.length) % r.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = r.length - 1;
    if (n < 0) return;
    e.preventDefault();
    r[n]?.focus();
  };

  return (
    <div className="sq-lp-wrap" ref={wrap}>
      <button
        ref={trigger}
        type="button"
        className="sq-lp-btn"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="dx-lang-menu"
        aria-label={`${DOC_LOCALE_LABELS[locale]} — ${label}`}
        onClick={() => (open ? hide(false) : show())}
        onKeyDown={onBtnKey}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <circle cx="8" cy="8" r="6.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
          <path d="M1.8 8h12.4M8 1.6c-2 2.2-2 10.6 0 12.8M8 1.6c2 2.2 2 10.6 0 12.8" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        <span lang={DOC_HTML_LANG[locale]}>{DOC_LOCALE_LABELS[locale]}</span>
        <svg className="sq-lp-caret" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" focusable="false">
          <path d="M2 3.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>
      <ul ref={list} id="dx-lang-menu" className="sq-lp" role="menu" aria-label={label} hidden={!open} onKeyDown={onKey}>
        {DOC_LOCALES.map((item) => {
          const on = item === locale;
          return (
            <li key={item} role="none">
              <a
                role="menuitem"
                tabIndex={-1}
                href={docsHref(item, page)}
                hrefLang={DOC_HTML_LANG[item]}
                lang={DOC_HTML_LANG[item]}
                aria-current={on ? "page" : undefined}
                onClick={(e) => {
                  if (on) {
                    e.preventDefault();
                    hide(true);
                    return;
                  }
                  event("cli_locale_change", { from: locale, to: item, page });
                }}
              >
                <span>{DOC_LOCALE_LABELS[item]}</span>
                {on ? (
                  <svg className="sq-lp-check" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                    <path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                ) : null}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
