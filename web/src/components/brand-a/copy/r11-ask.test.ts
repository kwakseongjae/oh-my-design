import { describe, expect, it } from "vitest";
import { SITE_LOCALES } from "@/lib/i18n/site-locales";
import { getR10 } from "./r10";
import { getR11Ask, localeOfR10 } from "./r11-ask";

const PLACEHOLDERS = new Set(["total", "tossChk", "tossNext"]);

describe("round 11 FAQ + question box copy", () => {
  it("reads the page locale back from the round 10 copy object", () => {
    for (const l of SITE_LOCALES) expect(localeOfR10(getR10(l))).toBe(l);
  });

  it("has the same shape in all four locales", () => {
    const en = getR11Ask("en");
    for (const l of SITE_LOCALES) {
      const t = getR11Ask(l);
      expect(t.faq.items).toHaveLength(7);
      expect(t.faq.items.map((x) => !!x.issueLink)).toEqual(en.faq.items.map((x) => !!x.issueLink));
      expect(Object.keys(t.ask).sort()).toEqual(Object.keys(en.ask).sort());
      expect(t.ask.examples).toHaveLength(3);
      for (const v of Object.values(t.ask)) {
        if (typeof v === "string") expect(v.trim().length).toBeGreaterThan(0);
      }
      expect(t.ask.cite).toContain("{n}");
    }
  });

  it("FAQ answers use only the landing's placeholders and no hardcoded counts", () => {
    for (const l of SITE_LOCALES) {
      for (const { q, a } of getR11Ask(l).faq.items) {
        for (const m of `${q} ${a}`.matchAll(/\{(\w+)\}/g)) expect(PLACEHOLDERS.has(m[1])).toBe(true);
        // a count written into the copy goes stale as the catalog grows; numbers come from data
        const prose = a.replace(/<code>[\s\S]*?<\/code>/g, "").replace(/\{\w+\}/g, "");
        expect(prose, `${l}: ${q}`).not.toMatch(/\d/);
        // rich.tsx renders <code> and entities only; anything else would print literally
        expect(a.replace(/<\/?code>/g, "")).not.toMatch(/<[a-z/]/i);
      }
    }
  });
});
