"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { LOCALE_COOKIE, LOCALE_SWITCH_KEY, SITE_LOCALES, SITE_LOCALE_META, type SiteLocale } from "@/lib/i18n/site-locales";
import "./locale-switch.css";

/**
 * Header language picker (round 8): the globe + language button opens a small dropdown
 * right under it — four rows, native names only, a check on the current one. No modal,
 * no glyph keycaps, no secondary labels (owner, 2026-10-16).
 *
 * The rows are real links (crawlable, and they work without JS); hreflang lives in
 * <head> and is untouched. Choosing one stores the choice in a cookie (src/proxy.ts sends
 * a later visit to `/` there) and leaves a sessionStorage note of the switch, which the
 * hero keyboard reads to drop in the caps that are new for the arriving locale.
 *
 * Menu-button pattern: aria-haspopup="menu" + aria-expanded + aria-controls on the button,
 * role="menu" / "menuitem" rows. Click, or ↓ / ↑ on the button, opens on the current row
 * (↑: the last); ↑ ↓ Home End move; Enter / Space follow the link; Esc closes and returns
 * focus to the button; Tab or a press outside closes. The same dropdown on phones, anchored
 * to the button's right edge.
 */
const SWITCH_KEY = LOCALE_SWITCH_KEY;

function remember(to: SiteLocale, from: SiteLocale | null, note = true) {
  try {
    document.cookie = `${LOCALE_COOKIE}=${to}; path=/; max-age=31536000; samesite=lax`;
    localStorage.setItem(LOCALE_COOKIE, to);
    if (from && note) sessionStorage.setItem(SWITCH_KEY, JSON.stringify({ from, to, t: Date.now() }));
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

/* hero poster of each locale's cap set (landing.css --k3p / --k3pm) */
const posterOf = (l: SiteLocale, phone: boolean) =>
  `/brand-a/hero-logos${l === "ja" || l === "zh-tw" ? `-${l}` : ""}-light${phone ? "-m" : devicePixelRatio > 1.25 ? "@2x" : ""}.webp`;

let warmed = false;
/**
 * Round 7: warm the other locales the moment the picker is hovered, focused or opened.
 * Each language is its own root layout (a full document load), so Chromium gets a
 * speculation-rules document prefetch (measured: the switch commits from
 * deliveryType "navigational-prefetch") and other browsers a <link rel=prefetch>. No
 * prerender: a prerendered landing would run its analytics and DAU ping for a visit that
 * may never happen. The target hero posters are fetched too, so the new page paints its
 * keyboard from cache. (hero-keys.tsx still copes with a prerendered page, should a
 * browser prerender on its own.)
 */
function warm(current: SiteLocale | null, origin: string, hrefs?: Partial<Record<SiteLocale, string>>) {
  if (warmed || typeof document === "undefined") return;
  warmed = true;
  const others = SITE_LOCALES.filter((l) => l !== current);
  // "/" is left out: src/proxy.ts may answer it with a cookie redirect that the click is about to change
  // an item page's twins (hrefs) are warmed instead of the landings, and need no posters
  const urls = hrefs
    ? others.flatMap((l) => (hrefs[l] ? [`${origin}${hrefs[l]}`] : []))
    : others.filter((l) => SITE_LOCALE_META[l].path !== "/").map((l) => `${origin}${SITE_LOCALE_META[l].path}`);
  try {
    if (!origin && HTMLScriptElement.supports?.("speculationrules")) {
      const s = document.createElement("script");
      s.type = "speculationrules";
      s.textContent = JSON.stringify({ prefetch: [{ urls, eagerness: "immediate" }] });
      document.head.appendChild(s);
    } else {
      for (const href of urls) {
        const l = document.createElement("link");
        l.rel = "prefetch";
        l.href = href;
        l.as = "document";
        document.head.appendChild(l);
      }
    }
    if (hrefs) return;
    const phone = matchMedia("(max-width:900px)").matches;
    for (const l of new Set(others.map((x) => posterOf(x, phone)))) {
      const img = new Image();
      img.decoding = "async";
      img.src = `${origin}${l}`;
    }
  } catch {
    /* warming is best effort; the links still navigate */
  }
}

type Hrefs = Partial<Record<SiteLocale, string>>;

/**
 * The page's translated twins, read from its own <link rel="alternate" hreflang> tags —
 * the metadata that already declares the pair (design-systems/[id]/page.tsx), so the
 * switch can never point at a twin the page does not claim. Used by a shared layout
 * header that cannot see its page's params. `current` is the twin whose path is this page.
 */
function twinsFromHead(): { hrefs: Hrefs; current: SiteLocale | null } | null {
  const hrefs: Hrefs = {};
  let current: SiteLocale | null = null;
  for (const l of SITE_LOCALES) {
    const el = document.head.querySelector<HTMLLinkElement>(`link[rel="alternate"][hreflang="${SITE_LOCALE_META[l].hreflang}"]`);
    if (!el) continue;
    const u = new URL(el.href, location.href);
    hrefs[l] = u.pathname;
    if (u.pathname === location.pathname) current = l;
  }
  return Object.keys(hrefs).length > 1 ? { hrefs, current } : null;
}

export function LocaleSwitch({
  current: currentProp,
  t,
  origin = "",
  hrefs: hrefsProp,
  twins = false,
}: {
  current: SiteLocale | null;
  t: LocaleSwitchText;
  origin?: string;
  /** Per-locale targets for a page with translated twins (the item page); landings otherwise. */
  hrefs?: Hrefs;
  /** Take the twins from this page's hreflang alternates (a layout header that cannot see the page). */
  twins?: boolean;
}) {
  const [found, setFound] = useState<{ hrefs: Hrefs; current: SiteLocale | null } | null>(null);
  useEffect(() => {
    if (twins && !hrefsProp) setFound(twinsFromHead());
  }, [twins, hrefsProp]);
  const hrefs = hrefsProp ?? found?.hrefs;
  const current = currentProp ?? found?.current ?? null;
  const wrap = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const list = useRef<HTMLUListElement>(null);
  const [open, setOpen] = useState(false);
  const focusOn = useRef<"current" | "last" | null>(null);

  const rows = () => [...(list.current?.querySelectorAll<HTMLAnchorElement>("a") ?? [])];
  const show = (at: "current" | "last" = "current") => {
    warm(current, origin, hrefs);
    focusOn.current = at;
    setOpen(true);
  };
  const hide = (refocus: boolean) => {
    setOpen(false);
    if (refocus) trigger.current?.focus();
  };

  // focus the current (or last) row once the menu is on screen
  useEffect(() => {
    if (!open || !focusOn.current) return;
    const r = rows();
    (focusOn.current === "last" ? r[r.length - 1] : (r.find((a) => a.getAttribute("aria-current") === "page") ?? r[0]))?.focus();
    focusOn.current = null;
  }, [open]);

  // a press anywhere outside closes it
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

  const cur = current ? SITE_LOCALE_META[current] : null;
  return (
    <div className="sq-lp-wrap" ref={wrap}>
      <button
        ref={trigger}
        type="button"
        className="sq-lp-btn"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls="sq-lp-menu"
        aria-label={cur ? `${cur.label} — ${t.lang}` : undefined}
        onClick={() => (open ? hide(false) : show())}
        onKeyDown={onBtnKey}
        onPointerEnter={() => warm(current, origin, hrefs)}
        onFocus={() => warm(current, origin, hrefs)}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <circle cx="8" cy="8" r="6.4" fill="none" stroke="currentColor" strokeWidth="1.3" />
          <path d="M1.8 8h12.4M8 1.6c-2 2.2-2 10.6 0 12.8M8 1.6c2 2.2 2 10.6 0 12.8" fill="none" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        <span lang={cur?.htmlLang}>{cur ? cur.label : t.lang}</span>
        <svg className="sq-lp-caret" width="10" height="10" viewBox="0 0 10 10" aria-hidden="true" focusable="false">
          <path d="M2 3.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.4" />
        </svg>
      </button>
      <ul ref={list} id="sq-lp-menu" className="sq-lp" role="menu" aria-label={t.lang} hidden={!open} onKeyDown={onKey}>
        {SITE_LOCALES.map((l) => {
          const m = SITE_LOCALE_META[l];
          const on = l === current;
          return (
            <li key={l} role="none">
              <a
                role="menuitem"
                tabIndex={-1}
                href={`${origin}${hrefs?.[l] ?? m.path}`}
                hrefLang={m.hreflang}
                lang={m.htmlLang}
                aria-current={on ? "page" : undefined}
                onClick={(e) => {
                  if (on) {
                    e.preventDefault();
                    hide(true);
                    return;
                  }
                  // the choice is always kept; the drop-in note only for a landing (a twin item page has no keyboard)
                  remember(l, current, !hrefs?.[l]);
                }}
              >
                <span>{m.label}</span>
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
