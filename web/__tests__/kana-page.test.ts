import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { metadata } from "@/app/(ko)/ko/kana/page";
import { KanaPage } from "@/components/kana/kana-page";
import { AREA_KO, HOUSE_KO, KANA_PATH, LEAD_RULES, RULE_KO, SOURCE_ORGS } from "@/components/kana/copy";
import data from "@/data/kana-rules.generated.json";

/**
 * /ko/kana (2026-11-21): the page is the research behind the draft /kana skill. Two promises are tested here:
 * every Japanese string on it is a copy out of writing-rules.md (none is ours), and it stays unreleased (noindex,
 * no sitemap, no header or footer link) until the owner says otherwise.
 */

const WEB = path.resolve(__dirname, "..");
const ROOT = path.resolve(WEB, "..");
const JA = /[\u3000-\u303f\u3040-\u30ff\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef]/;
const JA_RUNS = new RegExp(`${JA.source}+`, "g");

/** every string in the generated data except the input bookkeeping */
function dataStrings(): string[] {
  const out: string[] = [];
  (function walk(v: unknown) {
    if (typeof v === "string") out.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  })({ ...data, input: null, fonts: null });
  return out;
}

const html = renderToStaticMarkup(createElement(KanaPage));
const main = html.slice(html.indexOf("<main"), html.indexOf("</main>"));
/** the page's text, one element's text per line: the page's own 「」 around a quote (kn-qm) and labels are not part of it */
const text = (s: string) =>
  s
    .replace(/<span class="kn-qm"[^>]*>[^<]*<\/span>/g, "\n")
    .replace(/<[^>]+>/g, "\n")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");

describe("/ko/kana data", () => {
  it("51 rules in the file's eight areas, each area listing only its own rules, and the sixteen house choices", () => {
    expect(data.rules).toHaveLength(51);
    expect(data.areas).toHaveLength(8);
    expect(data.areas.flatMap((a) => a.rules)).toEqual(data.rules.map((r) => r.id));
    for (const r of data.rules) expect(data.areas.find((a) => a.name === r.area)?.rules).toContain(r.id);
    expect(data.houseChoices).toHaveLength(16);
  });

  it("every area has a Korean heading, and the one legal duty is the only rule with the law tier", () => {
    for (const a of data.areas) expect(AREA_KO[a.name], a.name).toBeTruthy();
    expect(data.rules.filter((r) => r.tiers.some((x) => x.tier === "law")).map((r) => r.id)).toEqual(["KW-68"]);
  });

  it("every rule has a strength from the file's wording table and at least one quote, and every quote or example a source", () => {
    const keys = new Set([...data.sources.map((s) => s.key), ...data.keysWithoutUrl]);
    for (const r of data.rules) {
      expect(r.tiers.length, r.id).toBeGreaterThan(0);
      expect(r.quotes.length, r.id).toBeGreaterThan(0);
      for (const q of r.quotes) expect(keys.has(q.key), `${r.id} ${q.key}`).toBe(true);
      for (const e of r.examples) expect(keys.has(e.key), `${r.id} ${e.key}`).toBe(true);
      expect(r.examples.length > 0 || r.exampleNote !== null, r.id).toBe(true);
    }
    for (const c of data.houseChoices) for (const s of c.sides) for (const q of s.quotes) expect(keys.has(q.key), `${c.id} ${q.key}`).toBe(true);
    for (const s of data.sources) expect(s.url).toMatch(/^https:\/\//);
  });

  // writing-rules.md is in the repository (docs/drafts/kana/references/); KANA_RULES_MD points the test at another copy.
  const rulesMd = process.env.KANA_RULES_MD ?? path.join(ROOT, data.input.rules.path);
  it("every Japanese string is a character-for-character copy from writing-rules.md, the one it was built from", () => {
    expect(fs.existsSync(rulesMd), rulesMd).toBe(true);
    const md = fs.readFileSync(rulesMd, "utf8");
    const stray = dataStrings().filter((s) => JA.test(s) && !md.includes(s));
    expect(stray).toEqual([]);
    expect(crypto.createHash("sha256").update(md).digest("hex")).toBe(data.input.rules.sha256);
  });
});

describe("/ko/kana page", () => {
  it("every Japanese run on the page, quotes and Korean copy alike, is inside a string of the generated data", () => {
    // the data's strings, and the same with writing-rules.md's \`code\` marks taken out (the page sets those as <code>)
    const hay = dataStrings().flatMap((s) => [s, s.replace(/`/g, "")]).join("\n");
    const runs = [...new Set(text(main).match(JA_RUNS) ?? [])];
    expect(runs.length).toBeGreaterThan(100);
    expect(runs.filter((r) => !hay.includes(r))).toEqual([]);
  });

  it("one h1, the sections in order, all 51 rule cards once, the lead six first", () => {
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1);
    const order = ['id="kn-h1"', '<section id="rules"', '<section id="house"', '<section id="fonts"', '<section id="sources"', '<section id="use"'].map((s) => html.indexOf(s));
    expect(order.every((i) => i > -1)).toBe(true);
    expect([...order].sort((a, b) => a - b)).toEqual(order);
    const cards = [...html.matchAll(/<article id="(kw-\d+)"/g)].map((m) => m[1].toUpperCase());
    expect(cards).toHaveLength(51);
    expect(new Set(cards).size).toBe(51);
    expect(cards.slice(0, 6)).toEqual([...LEAD_RULES]);
    expect([...html.matchAll(/<article id="(uw-\d+)"/g)]).toHaveLength(16);
  });

  it("a Korean reading for every rule and a Korean line for every side of every house choice, and no reading without a rule", () => {
    expect(Object.keys(RULE_KO).sort()).toEqual(data.rules.map((r) => r.id).sort());
    expect(Object.keys(HOUSE_KO).sort()).toEqual(data.houseChoices.map((c) => c.id).sort());
    for (const c of data.houseChoices) expect(HOUSE_KO[c.id].sides, c.id).toHaveLength(c.sides.length);
  });

  it("every quote is shown, in a block that names its source, linked to the source URL in a new tab", () => {
    const total = data.rules.reduce((n, r) => n + r.quotes.length, 0) + data.houseChoices.reduce((n, c) => n + c.sides.reduce((m, s) => m + s.quotes.length, 0), 0);
    expect(main.match(/class="kn-qtext"/g)).toHaveLength(total);
    const blocks = main.match(/<figure class="kn-quote">[\s\S]*?<\/figure>/g) ?? [];
    for (const b of blocks) {
      if (/<span lang="en">(JTF|KB)/.test(b)) continue; // keys with no URL in the inputs: named, not linked
      expect(b).toMatch(/<figcaption><span class="kn-src"><a href="https:\/\/[^"]+" target="_blank" rel="noopener noreferrer"/);
    }
    for (const s of data.sources) expect(main).toContain(`href="${s.url}"`);
  });

  it("the actions: the rules, then the sources list on the page; no install command", () => {
    const hero = main.slice(0, main.indexOf('<section id="rules"'));
    expect(hero).toContain('href="#rules"');
    expect(hero).toContain(`규칙 ${data.rules.length}개 보기`);
    expect(hero).toContain('href="#sources"');
    expect(html).not.toMatch(/npx |omd install|install-skills/);
    expect(hero).toContain("초안");
  });

  it("every source key belongs to one organisation on the sources list", () => {
    for (const k of [...data.sources.map((s) => s.key), ...data.keysWithoutUrl]) {
      expect(SOURCE_ORGS.filter((o) => k === o.prefix || k.startsWith(`${o.prefix}-`)), k).toHaveLength(1);
    }
  });

  it("the font bars add up to the services measured", () => {
    const bars = [...main.matchAll(/<span class="kn-bar-n">(\d+)/g)].map((m) => Number(m[1]));
    expect(bars.reduce((a, b) => a + b, 0)).toBe(data.fonts.services);
  });
});

describe("/ko/kana stays unreleased", () => {
  it("noindex, canonical to itself, no twin", () => {
    expect(metadata.robots).toMatchObject({ index: false });
    expect(metadata.alternates?.canonical).toBe(KANA_PATH);
    expect(metadata.alternates?.languages).toEqual({ ko: KANA_PATH });
  });

  it("in no sitemap and linked from no shared header or footer", () => {
    expect(sitemap().some((r) => r.url.includes("/kana"))).toBe(false);
    const chrome = ["site-header.tsx", "site-footer.tsx", ...fs.readdirSync(path.join(WEB, "src/components/brand-a/copy")).map((f) => `copy/${f}`)];
    for (const f of chrome) expect(fs.readFileSync(path.join(WEB, "src/components/brand-a", f), "utf8"), f).not.toContain("/kana");
    expect(fs.existsSync(path.join(WEB, "src/app/(en)/kana"))).toBe(false);
    expect(fs.existsSync(path.join(WEB, "src/app/(ja)/ja/kana"))).toBe(false);
  });
});
