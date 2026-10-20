"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getStoredConsent,
  setStoredConsent,
  grantGAConsent,
  revokeGAConsent,
} from "@/lib/consent";
import { loadMixpanel, mpOptIn, mpOptOut, mpPageview } from "@/lib/mixpanel";

type ConsentLocale = "en" | "ko" | "ja" | "zh-cn" | "zh-tw";

/* Round 11 (W9): two short lines for the corner card. Each still names both vendors and says no
   ads and no data sales — that is the disclosure, the privacy page ("details") has the rest. */
const CONSENT_COPY: Record<ConsentLocale, {
  /** Accessible name of the card. */
  label: string;
  body: string;
  details: string;
  decline: string;
  accept: string;
}> = {
  en: {
    label: "Analytics cookies",
    body: "Google Analytics and Mixpanel show us how the site is used. No ads, no data sales.",
    details: "Learn more",
    decline: "Decline",
    accept: "Accept",
  },
  ko: {
    label: "분석 쿠키 동의",
    body: "Google Analytics와 Mixpanel로 사이트 이용 현황을 살펴봐요. 광고를 싣거나 데이터를 팔지 않아요.",
    details: "자세히 보기",
    decline: "거부",
    accept: "동의",
  },
  ja: {
    label: "アクセス解析 Cookie の同意",
    body: "Google Analytics と Mixpanel で利用状況を把握しています。広告やデータの販売はしません。",
    details: "詳しく見る",
    decline: "拒否",
    accept: "同意",
  },
  "zh-cn": {
    label: "分析 Cookie 同意",
    body: "我们用 Google Analytics 和 Mixpanel 了解网站的使用情况。不投放广告，也不出售数据。",
    details: "了解详情",
    decline: "拒绝",
    accept: "同意",
  },
  "zh-tw": {
    label: "分析 Cookie 同意",
    body: "我們用 Google Analytics 與 Mixpanel 瞭解網站的使用情況。不投放廣告，也不販售資料。",
    details: "瞭解詳情",
    decline: "拒絕",
    accept: "同意",
  },
};

function consentLocale(pathname: string): ConsentLocale {
  const routeLocale = pathname.match(/^\/docs\/(en|ko|ja|zh-cn|zh-tw)(?:\/|$)/)?.[1]
    // Landing roots (/ko, /ja, /zh-tw) and the Korean legal pages pick the copy
    // only; the consent decision below never depends on the language shown.
    ?? pathname.match(/^\/(ko|ja|zh-tw)(?:\/|$)/)?.[1]
    ?? (/^\/(?:privacy|terms)\/ko(?:\/|$)/.test(pathname) ? "ko" : undefined);
  return (routeLocale as ConsentLocale | undefined) ?? "en";
}

/**
 * The single consent gate for GA + Mixpanel.
 *
 * On mount it resolves the visitor's region via /api/geo:
 *  - confirmed non-EU          → auto-grant: GA consent → granted, Mixpanel
 *    opt-in, no banner.
 *  - EEA/UK/CH OR geo unknown  → FAIL CLOSED: honor the stored choice; if
 *    undecided, show the banner. GA stays Consent-Mode-denied (cookieless) and
 *    Mixpanel stays opted-out until Accept. (Geo can fail because an ad-blocker
 *    blocks /api/geo — exactly the EU population we must not auto-track.)
 *
 * Users can withdraw later via ManageConsentButton (fires `omd:manage-consent`),
 * which re-opens the banner; Decline then revokes GA consent + Mixpanel opt-out.
 *
 * Mixpanel autocapture is off, so the first pageview is fired after opt-in
 * resolves (in applyGrant) and subsequent SPA navs are tracked in the effect
 * below. GA's own page_view comes from gtag config + enhanced measurement.
 */
export function AnalyticsConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const pathname = usePathname();
  const firstNav = useRef(true);
  const copy = CONSENT_COPY[consentLocale(pathname)];
  const privacyHref = consentLocale(pathname) === "ko" ? "/privacy/ko" : "/privacy";

  const applyGrant = useCallback(() => {
    grantGAConsent();
    // Opt in BEFORE the first pageview so it isn't dropped by the opt-out race.
    void loadMixpanel().then(() => mpOptIn().then(() => mpPageview()));
  }, []);

  useEffect(() => {
    let alive = true;
    (async () => {
      let country: string | null = null;
      let eu = false;
      try {
        const r = await fetch("/api/geo");
        if (r.ok) {
          const j = await r.json();
          country = j?.country ?? null;
          eu = Boolean(j?.eu);
        }
      } catch {
        /* geo lookup blocked/failed → country stays null → fail closed */
      }
      if (!alive) return;
      const known = country !== null;
      const stored = getStoredConsent();
      if (stored === "granted") applyGrant();
      else if (stored === "denied") {
        // layout.tsx's unregioned Consent Mode default re-grants
        // analytics_storage on every load, so re-apply the stored opt-out for
        // both GA and Mixpanel to honor a returning visitor's prior Decline.
        revokeGAConsent();
        void mpOptOut(); // ensure opted-out across reloads
      }
      else if (known && !eu) applyGrant(); // confirmed non-EU → auto-grant
      else setShowBanner(true); // EU or unknown → ask
    })();
    return () => {
      alive = false;
    };
  }, [applyGrant]);

  // Withdrawal entry point: ManageConsentButton re-opens the banner from anywhere.
  useEffect(() => {
    const open = () => setShowBanner(true);
    window.addEventListener("omd:manage-consent", open);
    return () => window.removeEventListener("omd:manage-consent", open);
  }, []);

  // Presentation (round 11): when the card is re-opened from a "cookie settings" control, move
  // focus into it so a keyboard or screen-reader user lands on the choice they asked for. The
  // first, automatic showing never takes focus.
  const card = useRef<HTMLDivElement>(null);
  const focusOnOpen = useRef(false);
  useEffect(() => {
    const mark = () => {
      focusOnOpen.current = true;
    };
    window.addEventListener("omd:manage-consent", mark);
    return () => window.removeEventListener("omd:manage-consent", mark);
  }, []);
  useEffect(() => {
    if (!showBanner || !focusOnOpen.current) return;
    focusOnOpen.current = false;
    card.current?.focus();
  }, [showBanner]);

  // Mixpanel pageview on subsequent SPA navs (the first one is fired by
  // applyGrant after opt-in). mpPageview no-ops until opted in.
  useEffect(() => {
    if (firstNav.current) {
      firstNav.current = false;
      return;
    }
    mpPageview();
  }, [pathname]);

  const accept = () => {
    setStoredConsent("granted");
    setShowBanner(false);
    applyGrant();
  };
  const decline = () => {
    setStoredConsent("denied");
    setShowBanner(false);
    revokeGAConsent();
    void mpOptOut();
  };

  if (!showBanner) return null;

  // Round 11 (W9, docs/REDESIGN_R11_PLAN_2026-10-20.md): a small card in the bottom-right corner
  // instead of the full-width bar. Two lines of copy, the details link, and Decline and Accept
  // as the same button: same size, same fill, same weight, so neither choice is pushed
  // (regulatory practice: refusing is as easy as agreeing). On phones it is a compact card
  // fixed to the bottom edge, below the hero's actions. Presentation only: the geo /
  // stored-choice / accept / decline logic above is unchanged.
  const loc = consentLocale(pathname);
  return (
    <div
      ref={card}
      role="region"
      aria-label={copy.label}
      tabIndex={-1}
      lang={loc === "zh-tw" ? "zh-Hant-TW" : loc === "zh-cn" ? "zh-Hans" : loc}
      className="fixed inset-x-3 bottom-3 z-[60] rounded-[var(--sq-r-card)] bg-[var(--sq-paper)] p-4 text-[var(--sq-ink)] shadow-[var(--sq-shadow-panel)] outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sq-focus)] sm:inset-x-auto sm:right-6 sm:bottom-6 sm:w-[380px] sm:p-5"
    >
      <p className="text-[13.5px] leading-[1.55] text-[var(--sq-ink-2)] sm:text-[14px]">
        {copy.body}{" "}
        <Link
          href={privacyHref}
          className="whitespace-nowrap font-semibold text-[var(--sq-ink)] underline decoration-[var(--sq-guide)] decoration-2 underline-offset-2 hover:decoration-current"
        >
          {copy.details}
        </Link>
      </p>
      <div className="mt-3 grid grid-cols-2 gap-2 sm:mt-4">
        <button type="button" onClick={decline} className={CHOICE}>
          {copy.decline}
        </button>
        <button type="button" onClick={accept} className={CHOICE}>
          {copy.accept}
        </button>
      </div>
    </div>
  );
}

/** Decline and Accept share this one class: neither choice outweighs the other. */
const CHOICE =
  "min-h-10 rounded-[var(--sq-r-pill)] bg-[var(--sq-cell)] px-4 text-[14px] font-semibold text-[var(--sq-ink)] transition-colors hover:bg-[var(--sq-guide-2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--sq-focus)]";
