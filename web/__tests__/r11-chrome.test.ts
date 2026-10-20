import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import logoManifest from "@/data/brand-logos.json";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { REGION_ORDER } from "@/lib/landing-a/picks";
import { SITE_LOCALES } from "@/lib/i18n/site-locales";
import { getR10 } from "@/components/brand-a/copy/r10";
import { SHOWCASE_PICKS, localeOfR10, opticalSize, showcaseFor } from "@/components/brand-a/catalog-showcase";

/**
 * Round 11 chrome (docs/REDESIGN_R11_PLAN_2026-10-20.md W5, W9, item 29). The showcase renders
 * from bundled data only, so everything it would otherwise check on disk is checked here: the
 * file exists, its viewBox matches the ratio written in the pick list, and the manifest's own
 * rules hold (no high-risk logo, no dark-background variant, a verified reference behind it).
 */
const WEB = path.resolve(__dirname, "..");
const read = (p: string) => fs.readFileSync(path.join(WEB, p), "utf8");

interface Variant { ref: string; source?: string; license?: string; dark_bg?: boolean; risk_tier?: string }
interface Rec { id: string; risk_tier?: string; variants: Record<string, Variant> }
const RECS = (logoManifest as unknown as { records: Rec[] }).records;
const REC = new Map(RECS.map((r) => [r.id, r]));
const PICKS = Object.entries(SHOWCASE_PICKS).flatMap(([region, ps]) => ps.map((p) => ({ region, ...p })));

describe("catalog showcase: the pick list", () => {
  it("six picks per country, no company twice", () => {
    for (const ps of Object.values(SHOWCASE_PICKS)) expect(ps).toHaveLength(6);
    expect(new Set(PICKS.map((p) => p.id)).size).toBe(PICKS.length);
  });

  it("every pick is an official logo the manifest allows on a moving tile", () => {
    for (const p of PICKS) {
      const rec = REC.get(p.id);
      expect(rec, p.id).toBeDefined();
      const v = rec!.variants[p.variant];
      expect(v, `${p.id}/${p.variant}`).toBeDefined();
      expect(rec!.risk_tier, p.id).not.toBe("high");
      expect(v.risk_tier, p.id).not.toBe("high");
      expect(v.dark_bg, p.id).toBeFalsy();
      expect(v.source && v.license, p.id).toBeTruthy();
    }
  });

  it("never shows LINE, Cybozu or Loglass (high risk: no grid, no motion, ask first)", () => {
    const high = RECS.filter((r) => r.risk_tier === "high").map((r) => r.id);
    expect(high.sort()).toEqual(["cybozu", "line", "loglass"]);
    for (const id of high) expect(PICKS.some((p) => p.id === id), id).toBe(false);
  });

  it("the stored file exists and its viewBox matches the written ratio", () => {
    for (const p of PICKS) {
      const svg = read(`public/${REC.get(p.id)!.variants[p.variant].ref}`);
      const vb = svg.match(/viewBox="([^"]+)"/)?.[1].trim().split(/[\s,]+/).map(Number);
      expect(vb, p.id).toBeDefined();
      expect(Math.abs(vb![2] / vb![3] - p.ratio), p.id).toBeLessThan(0.01);
    }
  });

  it("behind every logo is a verified reference from that country", () => {
    for (const p of PICKS) {
      expect(REGISTRY_BY_ID[p.id]?.country, p.id).toBe(p.region);
      expect(REFERENCE_QUALITY_BY_ID[p.id]?.status, p.id).toBe("verified_v2");
    }
  });

  it("only Toss crops, and only its empty left slot", () => {
    const cropped = PICKS.filter((p) => p.crop);
    expect(cropped.map((p) => p.id)).toEqual(["toss"]);
    // the toss header wordmark draws from x = 242.5 of 656.3: the cut stays inside the empty slot
    const svg = read("public/brand-svg/toss/wordmark.svg");
    const firstX = Number(svg.match(/<path d="M([\d.]+)/)?.[1]);
    expect(firstX).toBeGreaterThan(cropped[0].crop! * 656.3);
  });
});

describe("catalog showcase: per locale", () => {
  it("three rows of six in each locale's region order", () => {
    for (const l of SITE_LOCALES) {
      const g = showcaseFor(l);
      expect(g.map((x) => x.region), l).toEqual(REGION_ORDER[l].filter((r) => r !== "CN"));
      for (const row of g) expect(row.items, `${l} ${row.region}`).toHaveLength(6);
    }
  });

  it("links open the item page; /ko opens the Korean page that exists for every verified reference", () => {
    for (const l of SITE_LOCALES) {
      for (const it of showcaseFor(l).flatMap((g) => g.items)) {
        expect(it.href, `${l} ${it.id}`).toBe(l === "ko" ? `/ko/design-systems/${encodeURIComponent(it.id)}` : `/design-systems/${encodeURIComponent(it.id)}`);
        expect(it.src).toMatch(/^\/brand-svg\/[\w-]+\/(wordmark|combined|symbol)\.svg$/);
      }
    }
  });

  it("names the company natively only on its own country's landing", () => {
    const label = (l: (typeof SITE_LOCALES)[number], id: string) => showcaseFor(l).flatMap((g) => g.items).find((x) => x.id === id)!.label;
    expect(label("en", "toss")).toBe("Toss DESIGN.md");
    expect(label("ko", "toss")).toBe("토스 DESIGN.md");
    expect(label("ko", "mercari")).toBe(`${REGISTRY_BY_ID.mercari.name} DESIGN.md`);
    expect(label("ja", "toyota")).toBe(`${REGISTRY_BY_ID.toyota.displayName} の DESIGN.md`);
    expect(label("zh-tw", "eslite")).toBe(`${REGISTRY_BY_ID.eslite.displayName} 的 DESIGN.md`);
  });

  it("optical size keeps every logo inside its box", () => {
    for (const p of PICKS) {
      const { w, h } = opticalSize(p.crop ? p.ratio * (1 - p.crop) : p.ratio);
      expect(w, p.id).toBeLessThanOrEqual(132);
      expect(h, p.id).toBeLessThanOrEqual(40);
      expect(w * h, p.id).toBeGreaterThan(1800);
    }
  });

  it("CloseSection reads its locale back from the round-10 copy it is given", () => {
    for (const l of SITE_LOCALES) expect(localeOfR10(getR10(l))).toBe(l);
  });
});
