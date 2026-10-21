import { describe, expect, it } from "vitest";
import { SITE_LOCALES } from "@/lib/i18n/site-locales";
import { getR10 } from "./r10";
import { getR11Faq, localeOfR10 } from "./r11-faq";

const PLACEHOLDERS = new Set(["total", "tossChk", "tossNext"]);

describe("round 11 FAQ copy", () => {
  it("reads the page locale back from the round 10 copy object", () => {
    for (const l of SITE_LOCALES) expect(localeOfR10(getR10(l))).toBe(l);
  });

  it("has the same shape in all four locales", () => {
    const en = getR11Faq("en");
    for (const l of SITE_LOCALES) {
      const t = getR11Faq(l);
      expect(t.faq.items).toHaveLength(7);
      expect(t.faq.items.map((x) => !!x.issueLink)).toEqual(en.faq.items.map((x) => !!x.issueLink));
      for (const x of t.faq.items) expect(x.q.trim().length * x.a.trim().length).toBeGreaterThan(0);
    }
  });

  it("FAQ answers use only the landing's placeholders and no hardcoded counts", () => {
    for (const l of SITE_LOCALES) {
      for (const { q, a } of getR11Faq(l).faq.items) {
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
