import Link from "next/link";
import type { CSSProperties } from "react";
import logoManifest from "@/data/brand-logos.json";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { SITE_LOCALES, type SiteLocale } from "@/lib/i18n/site-locales";
import { detailHrefFor, hasKoDetail } from "@/lib/i18n/ko-detail";
import { REGION_ORDER } from "@/lib/landing-a/picks";
import { fmt } from "./copy";
import { getR10 } from "./copy/r10";
import { getChromeCopy, type ShowcaseRegion } from "./copy/r11-chrome";
import "./catalog-showcase.css";

/**
 * The catalog showcase (round 11 W5 #14): the closing band of the landing became a grid of
 * official logos, six per country, each opening that company's DESIGN.md page, then one archive
 * button (the section's one accent).
 *
 * Which companies: an editorial pick, like lib/landing-a/picks.ts. Six per country so each row
 * spans six different businesses (KR: fintech, commerce, portal, local marketplace, mobility,
 * B2B messaging; JP: marketplace, accounting, HR, automotive, creative platform, developer
 * community; TW: jobs, PC hardware, books and retail, airline, convenience stores, news). Every
 * pick is a verified (v2) reference whose official logo is in data/brand-logos.json.
 *
 * Logo rules, from the manifest itself:
 *   - risk_tier "high" never appears here. LINE's guideline forbids a gallery grid and motion,
 *     and Cybozu and Loglass ask for an application before web use.
 *   - dark_bg variants never appear (the site is light only).
 *   - The file is shown as delivered: never recoloured, filtered or redrawn. The hover lift and
 *     tint belong to the tile, not the logo.
 * The resolver fails closed: a pick whose logo, reference or verified tier is missing is dropped,
 * never swapped for a guess.
 *
 * No `fs` at render. The landing is ISR, so this renders in a function at runtime, where public/
 * is not traced in (next.config sets no outputFileTracingIncludes). Each pick's viewBox ratio is
 * written here, and __tests__/r11-chrome.test.ts re-reads every SVG and fails on drift, a missing
 * file or a rule above.
 */

export interface ShowcasePick {
  readonly id: string;
  readonly variant: string;
  /** viewBox width ÷ height of the stored SVG (checked by the test). */
  readonly ratio: number;
  /**
   * Share of the file's width, from the left, that is empty and cut by CSS (object-fit: cover,
   * anchored right). The file is untouched. Toss's header wordmark keeps the slot where the
   * header's symbol sits: x 0–242.5 of its 656.3-wide viewBox is transparent.
   */
  readonly crop?: number;
}

export const SHOWCASE_PICKS: Readonly<Record<ShowcaseRegion, readonly ShowcasePick[]>> = {
  KR: [
    { id: "toss", variant: "wordmark", ratio: 3.281, crop: 0.3695 },
    { id: "coupang", variant: "wordmark", ratio: 4.409 },
    { id: "naver", variant: "wordmark", ratio: 5.211 },
    { id: "karrot", variant: "combined", ratio: 1.781 },
    { id: "socar", variant: "combined", ratio: 4.591 },
    { id: "channeltalk", variant: "combined", ratio: 5.092 },
  ],
  JP: [
    { id: "mercari", variant: "wordmark", ratio: 4.986 },
    { id: "freee", variant: "combined", ratio: 2.589 },
    { id: "smarthr", variant: "combined", ratio: 5.385 },
    { id: "toyota", variant: "wordmark", ratio: 5.667 },
    { id: "pixiv", variant: "wordmark", ratio: 2.412 },
    { id: "qiita", variant: "wordmark", ratio: 3.134 },
  ],
  TW: [
    { id: "104", variant: "wordmark", ratio: 2.125 },
    { id: "acer", variant: "wordmark", ratio: 4.15 },
    { id: "eslite", variant: "wordmark", ratio: 5.043 },
    { id: "evaair", variant: "wordmark", ratio: 6.316 },
    { id: "familymart-tw", variant: "combined", ratio: 6.873 },
    { id: "udn", variant: "wordmark", ratio: 4.237 },
  ],
};

interface LogoVariant {
  ref: string;
  source?: string;
  license?: string;
  dark_bg?: boolean;
  risk_tier?: string;
}
interface LogoRecord {
  id: string;
  risk_tier?: string;
  variants: Record<string, LogoVariant>;
}

const LOGOS = new Map((logoManifest as unknown as { records: LogoRecord[] }).records.map((r) => [r.id, r]));

/** The country whose companies a landing names natively (registry displayName); others use `name`. */
const NATIVE: Record<SiteLocale, string | null> = { en: null, ko: "KR", ja: "JP", "zh-tw": "TW" };

/* Optical size: every logo gets about the same ink area (A px² at desktop), within a max box,
   so a square mark and a long wordmark read at one weight. Phones scale it in the CSS. */
const AREA = 3000;
const MAX_W = 132;
const MAX_H = 40;
export function opticalSize(ratio: number): { w: number; h: number } {
  let w = Math.sqrt(AREA * ratio);
  let h = Math.sqrt(AREA / ratio);
  if (w > MAX_W) [w, h] = [MAX_W, MAX_W / ratio];
  if (h > MAX_H) [w, h] = [MAX_H * ratio, MAX_H];
  return { w: Math.round(w), h: Math.round(h) };
}

export interface ShowcaseItem {
  id: string;
  label: string;
  href: string;
  src: string;
  w: number;
  h: number;
  crop: boolean;
}

export interface ShowcaseGroup {
  region: ShowcaseRegion;
  label: string;
  items: ShowcaseItem[];
}

/** Showcase rows for a landing locale, in that locale's region order. */
export function showcaseFor(locale: SiteLocale): ShowcaseGroup[] {
  const t = getChromeCopy(locale).showcase;
  const regions = REGION_ORDER[locale].filter((r): r is ShowcaseRegion => r in SHOWCASE_PICKS);
  return regions.map((region) => ({
    region,
    label: t.regions[region],
    items: SHOWCASE_PICKS[region].flatMap((p): ShowcaseItem[] => {
      const rec = LOGOS.get(p.id);
      const v = rec?.variants[p.variant];
      if (!rec || !v || rec.risk_tier === "high" || v.risk_tier === "high" || v.dark_bg || !v.source || !v.license) return [];
      const ref = REGISTRY_BY_ID[p.id];
      const status = REFERENCE_QUALITY_BY_ID[p.id]?.status;
      if (!ref || ref.country !== region || status !== "verified_v2") return [];
      const name = NATIVE[locale] === ref.country ? ref.displayName : ref.name;
      const visible = p.crop ? p.ratio * (1 - p.crop) : p.ratio;
      return [{
        id: p.id,
        label: fmt(t.item, { name }),
        href: detailHrefFor(locale, p.id, hasKoDetail(ref.country, status)),
        src: `/${v.ref}`,
        ...opticalSize(visible),
        crop: !!p.crop,
      }];
    }),
  })).filter((g) => g.items.length > 0);
}

/** The landing locale a round-10 copy object belongs to (CloseSection's props carry no locale). */
export function localeOfR10(r: ReturnType<typeof getR10>): SiteLocale {
  return SITE_LOCALES.find((l) => getR10(l) === r) ?? "en";
}

export function CatalogShowcase({
  locale,
  h2,
  p,
  cta,
  archive,
}: {
  locale: SiteLocale;
  h2: string;
  p: string;
  cta: string;
  archive: string;
}) {
  const groups = showcaseFor(locale);
  return (
    <section className="sq-sc" aria-labelledby="h-close">
      <div className="sq-wrap">
        <div className="sq-sc-head">
          <h2 id="h-close">{h2}</h2>
          <p>{p}</p>
        </div>
        <div className="sq-sc-groups">
          {groups.map((g) => (
            <div className="sq-sc-g" key={g.region}>
              <h3 id={`sc-${g.region}`}>{g.label}</h3>
              <ul className="sq-sc-grid" aria-labelledby={`sc-${g.region}`}>
                {g.items.map((it) => (
                  <li key={it.id}>
                    <Link className="sq-sc-tile" href={it.href} prefetch={false} aria-label={it.label}>
                      {/* eslint-disable-next-line @next/next/no-img-element -- an official SVG shown as delivered */}
                      <img
                        className={it.crop ? "sq-sc-logo sq-sc-crop" : "sq-sc-logo"}
                        src={it.src}
                        alt=""
                        width={it.w}
                        height={it.h}
                        loading="lazy"
                        decoding="async"
                        style={{ "--w": it.w, "--h": it.h } as CSSProperties}
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="sq-sc-end">
          <Link className="sq-sc-cta" href={archive} prefetch={false}>{cta}</Link>
        </div>
      </div>
    </section>
  );
}
