"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { LOCALE_COOKIE, LOCALE_SWITCH_KEY, SITE_LOCALES, SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import "./locale-switch.css";

/**
 * Header language picker (round 6): one compact trigger (globe + current language)
 * that opens a modal — a centred dialog on desktop, a bottom sheet on phones — with the
 * four languages as rows: native name large, the name in the page's language small, a
 * keycap glyph, a check on the current one.
 *
 * The rows are real links (crawlable, and they work without JS); hreflang lives in
 * <head> and is untouched. Choosing one stores the choice in a cookie (src/proxy.ts sends
 * a later visit to `/` there) and leaves a sessionStorage note of the switch, which the
 * hero keyboard reads to drop in the caps that are new for the arriving locale.
 *
 * Native <dialog> + showModal(): top layer, inert page behind (focus stays inside),
 * Esc closes. Added here: backdrop click closes, arrow keys / Home / End move between
 * rows, focus starts on the current row and returns to the trigger, no page scroll
 * while open, no motion under prefers-reduced-motion (CSS).
 */
const SWITCH_KEY = LOCALE_SWITCH_KEY;
const GLYPH: Record<SiteLocale, { g: string; lang: string }> = {
  en: { g: "A", lang: "en" },
  ko: { g: "한", lang: "ko" },
  ja: { g: "あ", lang: "ja" },
  "zh-tw": { g: "ㄅ", lang: "zh-Hant" },
};

function remember(to: SiteLocale, from: SiteLocale | null) {
  try {
    document.cookie = `${LOCALE_COOKIE}=${to}; path=/; max-age=31536000; samesite=lax`;
    localStorage.setItem(LOCALE_COOKIE, to);
    if (from) sessionStorage.setItem(SWITCH_KEY, JSON.stringify({ from, to, t: Date.now() }));
  } catch {
    /* storage blocked: the link still navigates */
  }
}

export interface LocaleSwitchText {
  lang: string;
  langTitle: string;
  close: string;
  langNames: Record<SiteLocale, string>;
}

export function LocaleSwitch({ current, t, origin = "" }: { current: SiteLocale | null; t: LocaleSwitchText; origin?: string }) {
  const dlg = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);

  const rows = () => [...(list.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [])];

  const show = () => {
    const d = dlg.current;
    if (!d || d.open) return;
    d.showModal();
    setOpen(true);
    const r = rows();
    (r.find((a) => a.getAttribute("aria-current") === "page") ?? r[0])?.focus();
  };
  const hide = () => {
    const d = dlg.current;
    if (d?.open) d.close();
  };

  useEffect(() => {
    const d = dlg.current;
    if (!d) return;
    const onClose = () => {
      setOpen(false);
      trigger.current?.focus();
    };
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, []);

  // no page scroll behind the modal
  useEffect(() => {
    const el = document.documentElement;
    el.classList.toggle("sq-noscroll", open);
    return () => el.classList.remove("sq-noscroll");
  }, [open]);

  const onKey = (e: KeyboardEvent<HTMLUListElement>) => {
    const r = rows();
    const i = r.indexOf(document.activeElement as HTMLAnchorElement);
    let n = -1;
    if (e.key === "ArrowDown" || e.key === "ArrowRight") n = (i + 1) % r.length;
    else if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = (i - 1 + r.length) % r.length;
    else if (e.key === "Home") n = 0;
    else if (e.key === "End") n = r.length - 1;
    if (n < 0) return;
    e.preventDefault();
    r[n]?.focus();
  };

  const cur = current ? SITE_LOCALE_META[current] : null;
  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="sq-lp-btn"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={show}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <circle cx="8" cy="8" r="6.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
          <path d="M1.8 8h12.4M8 1.6c-2 2.2-2 10.6 0 12.8M8 1.6c2 2.2 2 10.6 0 12.8" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        <span lang={cur?.htmlLang}>{cur ? cur.label : t.lang}</span>
        {cur ? <span className="sq-sr">{` — ${t.lang}`}</span> : null}
      </button>
      <dialog
        ref={dlg}
        className="sq-lp"
        aria-labelledby="sq-lp-title"
        aria-modal="true"
        onClick={(e) => {
          if (e.target === e.currentTarget) hide(); // backdrop
        }}
        onKeyDown={(e) => {
          // focus trap: Tab / Shift+Tab wrap inside the dialog (native modal lets focus leave to the browser)
          if (e.key !== "Tab") return;
          const f = [...e.currentTarget.querySelectorAll<HTMLElement>("button, a[href]")];
          if (!f.length) return;
          const i = f.indexOf(document.activeElement as HTMLElement);
          if (e.shiftKey && i <= 0) { e.preventDefault(); f[f.length - 1].focus(); }
          else if (!e.shiftKey && i === f.length - 1) { e.preventDefault(); f[0].focus(); }
        }}
      >
        <div className="sq-lp-in">
          <div className="sq-lp-head">
            <p id="sq-lp-title" className="sq-lp-title">{t.langTitle}</p>
            <button type="button" className="sq-lp-x" onClick={hide} aria-label={t.close}>
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true" focusable="false">
                <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
          <ul ref={list} onKeyDown={onKey}>
            {SITE_LOCALES.map((l) => {
              const m = SITE_LOCALE_META[l];
              const on = l === current;
              const sub = t.langNames[l];
              return (
                <li key={l}>
                  <a
                    href={`${origin}${m.path}`}
                    hrefLang={m.hreflang}
                    aria-current={on ? "page" : undefined}
                    onClick={(e) => {
                      if (on) {
                        e.preventDefault();
                        hide();
                        return;
                      }
                      remember(l, current);
                    }}
                  >
                    <span className="sq-lp-key" lang={GLYPH[l].lang} aria-hidden="true">{GLYPH[l].g}</span>
                    <span className="sq-lp-name">
                      <span lang={m.htmlLang}>{m.label}</span>
                      {sub !== m.label ? <small>{sub}</small> : null}
                    </span>
                    {on ? (
                      <svg className="sq-lp-check" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true" focusable="false">
                        <path d="M3.5 9.5l3.5 3.5 7.5-8" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    ) : null}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </dialog>
    </>
  );
}
