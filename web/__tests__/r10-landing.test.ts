import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { getR10 } from "@/components/brand-a/copy/r10";

/**
 * Round 10 (owner, 2026-10-16; docs/research/2026-10-17-direction/DIRECTIONS.md): Iris palette,
 * B's radius system (the square-chrome rule is retired), the illustrative chat on real Toss
 * values, the CLI transcript cut only as its caption says, and the FAQ in four locales.
 */
const WEB = path.resolve(__dirname, "..");
const read = (p: string) => fs.readFileSync(path.join(WEB, p), "utf8");
const LOCALES = ["en", "ko", "ja", "zh-tw"] as const;

describe("brand tokens: Iris and the radius system", () => {
  const css = read("src/styles/brand-a.css");
  it("primary is Iris 600 and the ramp is the documented one", () => {
    expect(css).toMatch(/--sq-p600:\s*#6749e2/);
    expect(css).toMatch(/--sq-primary:\s*var\(--sq-p600\)/);
    expect(css).toMatch(/--sq-ink-2:\s*var\(--sq-n600\)/); // body text 6.82:1; n500 is icon-only
    expect(css).toMatch(/--sq-n600:\s*#5a5a63/);
  });
  it("controls 14, pill, cards 20, panels 28; no square chrome", () => {
    expect(css).toMatch(/--sq-r-ctl:\s*14px/);
    expect(css).toMatch(/--sq-r-pill:\s*999px/);
    expect(css).toMatch(/--sq-r-card:\s*20px/);
    expect(css).toMatch(/--sq-r-panel:\s*28px/);
    expect(css).not.toMatch(/--sq-radius:\s*0/);
  });
  it("gamboge is gone from the site's code", () => {
    const files = [
      "src/styles/brand-a.css", "src/app/globals.css", "src/app/global-not-found.tsx",
      "src/components/analytics-consent.tsx", "src/components/status-badge.tsx",
      ...fs.readdirSync(path.join(WEB, "src/components/brand-a")).filter((f) => /\.(css|tsx|ts)$/.test(f)).map((f) => `src/components/brand-a/${f}`),
    ];
    for (const f of files) {
      expect(/gamboge|#f2a900/i.test(read(f)), f).toBe(false);
    }
  });
});

// The hero chat and the CLI transcript moved to round 11: __tests__/r11-hero.test.ts.

describe("FAQ", () => {
  it("nine questions in every locale, three per category, written per locale", () => {
    for (const l of LOCALES) {
      const items = getR10(l).faq.items;
      expect(items).toHaveLength(9);
      for (const c of ["basics", "use", "cost"] as const) expect(items.filter((x) => x.cat === c), `${l} ${c}`).toHaveLength(3);
    }
    const firstQ = LOCALES.map((l) => getR10(l).faq.items[0].q);
    expect(new Set(firstQ).size).toBe(4);
  });
});
