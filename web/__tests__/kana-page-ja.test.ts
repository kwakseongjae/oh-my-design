import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import { metadata } from "@/app/(ja)/ja/kana/page";
import { KanaPage } from "@/components/kana/kana-page";
import { LEAD_RULES } from "@/components/kana/copy";
import { AREA_JA, KANA_COPY_JA, KANA_ISSUE_URL, KANA_PATH_JA, SOURCE_ORGS_JA, composedJa } from "@/components/kana/copy-ja";
import { appStrings } from "@/components/kana/app-copy";
import { NO_LEAD, jaLead } from "@/components/kana/rule-lead";
import data from "@/data/kana-rules.generated.json";

/**
 * /ja/kana (2026-11-23): the Japanese edition of /ko/kana. Nobody on the project reads Japanese natively, so the page's
 * promise is narrow and tested here: every Japanese sentence that states or illustrates a rule is a source's own
 * (generated data); the only Japanese of ours is the chrome in copy-ja.ts and the #app screen's app-copy.ts, each in
 * its own places; the page says so at the top; and it stays unreleased (noindex, self-only alternate, no sitemap).
 */

const WEB = path.resolve(__dirname, "..");
const ROOT = path.resolve(WEB, "..");
const JA = /[\u3000-\u303f\u3040-\u30ff\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef]/;
const JA_RUNS = new RegExp(`${JA.source}+`, "g");

function dataStrings(): string[] {
  const out: string[] = [];
  (function walk(v: unknown) {
    if (typeof v === "string") out.push(v);
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  })({ ...data, input: null, fonts: null });
  return out.flatMap((s) => [s, s.replace(/`/g, "")]);
}
const DATA = dataStrings().join("\n");
/** the page's own glue between two of its strings (copy.ts KanaChrome sep, list, colon, paren) */
const GLUE = new Set(["（", "）", "：", "、"]);
/** a run made only of pieces of `hay` (two characters or more) and glue: two composed strings set side by side pass */
function covered(run: string, hay: string): boolean {
  if (run.length === 1) return hay.includes(run);
  const ok: boolean[] = [true];
  for (let i = 1; i <= run.length; i++) {
    ok[i] = false;
    for (let j = 0; j < i && !ok[i]; j++) {
      const piece = run.slice(j, i);
      if (ok[j] && ((piece.length === 1 && GLUE.has(piece)) || (piece.length >= 2 && hay.includes(piece)))) ok[i] = true;
    }
  }
  return ok[run.length];
}
const COMPOSED = composedJa();
const APP = appStrings();

const html = renderToStaticMarkup(createElement(KanaPage, { locale: "ja" }));
const main = html.slice(html.indexOf("<main"), html.indexOf("</main>"));
const appSection = main.slice(main.indexOf('<section id="app"'), main.indexOf('<section id="compare"'));
const text = (s: string) =>
  s
    .replace(/<span class="kn-qm"[^>]*>[^<]*<\/span>/g, "\n")
    .replace(/<[^>]+>/g, "\n")
    .replace(/&quot;/g, '"')
    .replace(/&#x27;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
const lines = (s: string) =>
  text(s)
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

/** Where the page sets a source's own words: quote blocks, example lists, the lead sentence of a card, #compare's pairs,
 *  and the rule lines of #app's tags and #compare's captions (which repeat a card's lead sentence). */
const SOURCE_PARTS = [
  /<figure class="kn-quote">[\s\S]*?<\/figure>/g,
  /<ul lang="ja">[\s\S]*?<\/ul>/g,
  /<p class="kn-ex-label"><span[^>]*>[^<]*<\/span><\/p>/g,
  /<h[35] id="KW-\d+-h" class="kn-card-h kn-card-h--quote"[^>]*>[\s\S]*?<\/h[35]>/g,
  /<span class="kc-ja"[^>]*>[^<]*<\/span>/g,
  /<span class="ka-tag-t">[\s\S]*?<\/span><\/span><\/li>/g,
  /<p class="kc-cap-rule">[\s\S]*?<\/p>/g,
];
const sourceParts = (s: string) => SOURCE_PARTS.flatMap((re) => s.match(re) ?? []);
const withoutSources = (s: string) => SOURCE_PARTS.reduce((acc, re) => acc.replace(re, "\n"), s);
/** the two phones' screens (data-copy marks each; the focus ring closes it) */
const phones = (["ai", "fix"] as const)
  .map((side) => {
    const start = appSection.indexOf(`data-copy="${side}"`);
    return appSection.slice(start, appSection.indexOf('class="moa-focus"', start));
  })
  .join("\n");

describe("/ja/kana: whose Japanese is where", () => {
  it("every Japanese run where the page sets a source's words is inside a string of the generated data", () => {
    const parts = sourceParts(main);
    expect(parts.length).toBeGreaterThan(150);
    const runs = [...new Set(text(parts.join("\n")).match(JA_RUNS) ?? [])];
    expect(runs.length).toBeGreaterThan(300);
    expect(runs.filter((r) => !DATA.includes(r))).toEqual([]);
  });

  it("everywhere else in <main>, outside #app, every Japanese run is copy-ja.ts's or the data's", () => {
    const rest = withoutSources(main.replace(appSection, "\n"));
    const hay = [...COMPOSED, DATA].join("\n");
    const runs = [...new Set(text(rest).match(JA_RUNS) ?? [])];
    expect(runs.length).toBeGreaterThan(30);
    expect(runs.filter((r) => !covered(r, hay))).toEqual([]);
  });

  it("inside #app, every Japanese run is copy-ja.ts's, app-copy.ts's or the data's", () => {
    const hay = [...COMPOSED, ...APP, DATA].join("\n");
    const runs = [...new Set(text(withoutSources(appSection)).match(JA_RUNS) ?? [])];
    expect(runs.filter((r) => !covered(r, hay))).toEqual([]);
  });

  it("no composed string sits where a source's words go, or in the phones", () => {
    const src = lines(sourceParts(main).join("\n") + "\n" + phones);
    for (const s of COMPOSED) {
      // a short chrome word (ボタン, 敬語 …) may sit inside a quoted sentence; it must not stand alone as an element's text
      expect(src, s).not.toContain(s);
      // a longer one must not appear inside one either (表示する文言 is also a phrase of SmartHR's, so the bar is 10)
      if (s.length >= 10) expect(src.filter((l) => l.includes(s)), s).toEqual([]);
    }
  });

  it("no #app string outside #app", () => {
    const outside = lines(main.replace(appSection, "\n"));
    for (const s of APP) if (s.length >= 4 && !DATA.includes(s)) expect(outside.filter((l) => l.includes(s)), s).toEqual([]);
  });

  it("no Japanese in a component file but copy-ja.ts and app-copy.ts, beyond words quoted from the data", () => {
    const dir = path.join(WEB, "src/components/kana");
    const files = [
      ...fs.readdirSync(dir).filter((f) => /\.tsx?$/.test(f) && !["copy-ja.ts", "app-copy.ts", "copy.ts"].includes(f)).map((f) => path.join(dir, f)),
      path.join(WEB, "src/app/(ja)/ja/kana/page.tsx"),
    ];
    for (const f of files) {
      const runs = fs.readFileSync(f, "utf8").match(JA_RUNS) ?? [];
      expect(runs.filter((r) => !DATA.includes(r)), path.basename(f)).toEqual([]);
    }
  });

  it("no Korean on the page, attributes included, but the site's language lists naming 한국어", () => {
    const rest = html.replace(/<ul[^>]*id="sq-lp-menu"[\s\S]*?<\/ul>/, "").replace(/>한국어</g, "><");
    expect(rest.match(/[\uac00-\ud7a3]+/g)).toBeNull();
  });
});

describe("/ja/kana: the page", () => {
  it("says at the top, before #app, that its Japanese chrome is a model's and unread by a native speaker, and where to report", () => {
    const hero = main.slice(0, main.indexOf('<section id="app"'));
    const n = KANA_COPY_JA.hero.notice;
    expect(hero).toContain('<p class="kn-notice">');
    expect(hero).toContain(n.text);
    expect(n.text).toMatch(/AIモデル/);
    expect(n.text).toMatch(/ネイティブ/);
    expect(n.text).toMatch(/引用/);
    expect(hero).toContain(`href="${KANA_ISSUE_URL}"`);
    // right under the lede, above the status line and the actions
    expect(hero.indexOf("kn-notice")).toBeLessThan(hero.indexOf("kn-status"));
    expect(hero.indexOf('class="kn-lede"')).toBeLessThan(hero.indexOf("kn-notice"));
  });

  it("the document is Japanese: the page root says lang=ja", () => {
    expect(html).toContain('<div class="sq-root sq-root-page kn-root" lang="ja">');
    expect(html).not.toContain('lang="ko"><main');
  });

  it("one h1, the sections in order without #use, all 51 rule cards once, the lead six first, 16 house choices", () => {
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1);
    const order = ['id="kn-h1"', '<section id="app"', '<section id="compare"', '<section id="rules"', '<section id="house"', '<section id="fonts"', '<section id="sources"'].map((s) => html.indexOf(s));
    expect(order.every((i) => i > -1)).toBe(true);
    expect([...order].sort((a, b) => a - b)).toEqual(order);
    expect(html).not.toContain('<section id="use"');
    const cards = [...html.matchAll(/<article id="(kw-\d+)"/g)].map((m) => m[1].toUpperCase());
    expect(cards).toHaveLength(51);
    expect(new Set(cards).size).toBe(51);
    expect(cards.slice(0, 6)).toEqual([...LEAD_RULES]);
    expect([...html.matchAll(/<article id="(uw-\d+)"/g)]).toHaveLength(16);
  });

  it("43 cards lead with a Japanese quote, 3 with Microsoft's English one, 5 with our English rule; every quote shown once", () => {
    const leads = data.rules.map((r) => jaLead(r));
    expect(leads.filter((l) => l && l.quote.lang !== "en")).toHaveLength(43);
    expect(data.rules.filter((r, i) => leads[i]?.quote.lang === "en").map((r) => r.id)).toEqual(["KW-10", "KW-70", "KW-62"]);
    expect(data.rules.filter((r, i) => !leads[i]).map((r) => r.id).sort()).toEqual(Object.keys(NO_LEAD).sort());
    expect(main.match(/class="kn-card-h kn-card-h--quote"/g)).toHaveLength(46);
    expect(main.match(/class="kn-card-h kn-card-h--en"/g)).toHaveLength(5 + 16);
    const total = data.rules.reduce((n, r) => n + r.quotes.length, 0) + data.houseChoices.reduce((n, c) => n + c.sides.reduce((m, s) => m + s.quotes.length, 0), 0);
    expect((main.match(/class="kn-qtext"/g) ?? []).length + 46).toBe(total);
    // a lead sentence is followed by its source, linked
    for (const m of main.matchAll(/<div class="kn-lead">([\s\S]*?)<\/div>/g)) expect(m[1]).toMatch(/<span class="kn-src"><a href="https:\/\//);
  });

  it("every area and organisation has a Japanese name; every source key one organisation", () => {
    for (const a of data.areas) expect(AREA_JA[a.name], a.name).toBeTruthy();
    for (const k of [...data.sources.map((s) => s.key), ...data.keysWithoutUrl]) {
      expect(SOURCE_ORGS_JA.filter((o) => k === o.prefix || k.startsWith(`${o.prefix}-`)), k).toHaveLength(1);
    }
  });

  it("#compare renders the pairs and says what is real; #app keeps the composed-screen line above the phones", () => {
    const section = main.slice(main.indexOf('<section id="compare"'), main.indexOf('<section id="rules"'));
    expect(section).toContain(KANA_COPY_JA.compare.real);
    expect(section.match(/<span class="kc-ja"/g)?.length).toBeGreaterThan(16);
    expect(appSection.split(KANA_COPY_JA.app.composed)).toHaveLength(2);
    expect(appSection.indexOf(KANA_COPY_JA.app.composed)).toBeLessThan(appSection.indexOf('class="hg-phone"'));
  });

  it("#app's tags and #compare's captions name each rule by a quoted source sentence, never by our English", () => {
    const lines = [...(main.match(/<span class="ka-tag-t">[\s\S]*?<\/span><\/span><\/li>/g) ?? []), ...(main.match(/<p class="kc-cap-rule">[\s\S]*?<\/p>/g) ?? [])];
    expect(lines.length).toBeGreaterThan(15);
    for (const l of lines) expect(l, l.slice(0, 120)).toContain('class="kn-qm"');
  });

  it("the intros that call the English ours say it is the English without quote marks", () => {
    expect(KANA_COPY_JA.rules.intro).toMatch(/引用符のない英文は当サイト/);
    expect(KANA_COPY_JA.house.intro).toMatch(/引用符のない英文は当サイト/);
  });

  it("the header's language switch points the Korean row at /ko/kana", () => {
    expect(html).toMatch(/href="\/ko\/kana" hrefLang="ko"/);
    expect(html).toMatch(/href="\/ja\/kana" hrefLang="ja"/);
  });
});

describe("/ja/kana stays unreleased", () => {
  it("noindex, canonical to itself, its only alternate itself", () => {
    expect(metadata.robots).toMatchObject({ index: false });
    expect(metadata.alternates?.canonical).toBe(KANA_PATH_JA);
    expect(metadata.alternates?.languages).toEqual({ ja: KANA_PATH_JA });
  });

  it("in no sitemap", () => {
    expect(sitemap().some((r) => r.url.includes("/kana"))).toBe(false);
  });
});

describe("/ja/kana composed chrome against the kana copy checker", () => {
  const checker = path.join(ROOT, "scripts", "lang", "kana-copy-check.mjs");
  it.skipIf(!fs.existsSync(checker))("kana-copy-check finds no WARN on copy-ja.ts's strings, each set in the element it is on the page", () => {
    const fixture = jaFixture();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "kana-ja-"));
    const file = path.join(dir, "chrome.tsx");
    fs.writeFileSync(file, fixture);
    let out = "";
    try {
      out = execFileSync(process.execPath, [checker, "--json", file], { encoding: "utf8" });
    } catch (e) {
      out = String((e as { stdout?: string }).stdout ?? "");
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
    const j = JSON.parse(out) as { summary: { WARN: number; FYI: number } };
    expect(j.summary.WARN).toBe(0);
  });
});

/** copy-ja.ts's strings in a TSX fixture, each in the element the page sets it in: labels of controls in <button>,
 *  headings in <hN>, everything else in <p>, the way the #app test sets app-copy.ts's. */
function jaFixture(): string {
  const t = KANA_COPY_JA;
  const buttons = [t.hero.cta(), t.hero.ctaSources, t.hero.notice.report, t.app.sides.before, t.app.sides.after, t.compare.wrong, t.compare.right, t.compare.play, t.compare.pause];
  const h = [t.hero.h1, t.app.h2, t.compare.h2, t.rules.h2, t.rules.allH2, t.house.h2, t.fonts.h2(data.fonts.services), t.sources.h2, ...Object.values(AREA_JA), ...SOURCE_ORGS_JA.map((o) => o.name)];
  const inButtonsOrHeadings = new Set([...buttons, ...h]);
  const p = COMPOSED.filter((s) => !inButtonsOrHeadings.has(s));
  const body = [...h.map((x) => `    <h2>${x}</h2>`), ...buttons.map((x) => `    <button>${x}</button>`), ...p.map((x) => `    <p>${x}</p>`)].join("\n");
  return `export function S() {\n  return (\n    <div>\n${body}\n    </div>\n  );\n}\n`;
}
