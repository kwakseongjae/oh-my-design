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

const CONSENT_COPY: Record<ConsentLocale, {
  body: string;
  details: string;
  decline: string;
  accept: string;
}> = {
  en: {
    body: "We use Google Analytics and Mixpanel to understand how oh-my-design is used and improve the product. We do not run ads or sell your data.",
    details: "Learn more",
    decline: "Decline",
    accept: "Accept",
  },
  ko: {
    body: "oh-my-design 사용 현황을 파악하고 제품을 개선하기 위해 Google Analytics와 Mixpanel을 사용합니다. 광고를 게재하거나 데이터를 판매하지 않습니다.",
    details: "자세히 보기",
    decline: "거부",
    accept: "동의",
  },
  ja: {
    body: "oh-my-design の利用状況を把握し、製品を改善するために Google Analytics と Mixpanel を使用します。広告の表示やデータの販売は行いません。",
    details: "詳しく見る",
    decline: "拒否",
    accept: "同意",
  },
  "zh-cn": {
    body: "我们使用 Google Analytics 和 Mixpanel 了解 oh-my-design 的使用情况并改进产品。不会投放广告，也不会出售您的数据。",
    details: "了解详情",
    decline: "拒绝",
    accept: "同意",
  },
  "zh-tw": {
    body: "我們使用 Google Analytics 與 Mixpanel 瞭解 oh-my-design 的使用情況並改善產品。不會投放廣告，也不會出售您的資料。",
    details: "瞭解詳情",
    decline: "拒絕",
    accept: "同意",
  },
};

function consentLocale(pathname: string): ConsentLocale {
  const routeLocale = pathname.match(/^\/docs\/(en|ko|ja|zh-cn|zh-tw)(?:\/|$)/)?.[1];
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

  return (
    <div className="fixed inset-x-0 bottom-0 z-[60] flex justify-center p-3 sm:p-4">
      <div className="flex w-full max-w-2xl flex-col gap-3 rounded-xl border border-border bg-card/95 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center">
        <p className="flex-1 text-xs leading-relaxed text-muted-foreground">
          {copy.body}{" "}
          <Link href={privacyHref} className="underline underline-offset-2 hover:text-foreground">
            {copy.details}
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            onClick={decline}
            className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
          >
            {copy.decline}
          </button>
          <button
            onClick={accept}
            className="rounded-lg bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90"
          >
            {copy.accept}
          </button>
        </div>
      </div>
    </div>
  );
}
