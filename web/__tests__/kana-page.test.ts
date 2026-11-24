import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import type { Metadata } from "next";
import sitemap from "@/app/sitemap";
import { metadata as koShowcaseMeta } from "@/app/(ko)/ko/kana/page";
import { metadata as koRulesMeta } from "@/app/(ko)/ko/kana/rules/page";
import { metadata as jaShowcaseMeta } from "@/app/(ja)/ja/kana/page";
import { metadata as jaRulesMeta } from "@/app/(ja)/ja/kana/rules/page";
import { KanaShowcase } from "@/components/kana/showcase";
import { KanaRulesPage } from "@/components/kana/rules-page";
import { AREA_KO, COMPARE_STOPS, HOUSE_KO, KANA_COPY, RULE_KO, RULE_LABEL_KO, SOURCE_ORGS, type KanaLocale } from "@/components/kana/copy";
import { AREA_JA, KANA_COPY_JA, SOURCE_ORGS_JA, composedJa } from "@/components/kana/copy-ja";
import { APP_CANCEL, APP_PAIRS, APP_SHARED, appStrings } from "@/components/kana/app-copy";
import { TYPE_MEASURED, TYPE_QUOTES } from "@/components/kana/type-quotes";
import { jaLead } from "@/components/kana/rule-lead";
import data from "@/data/kana-rules.generated.json";

// next/font only works inside the Next compiler; the pages need nothing from it but the class.
vi.mock("@/components/brand-a/journey/faces", () => ({
  notoSansJP: { variable: "kn-test-noto-jp", style: { fontFamily: "Noto Sans JP" } },
}));

/**
 * The kana pages (2026-11-24): /ko/kana and /ja/kana (the showcase, direction A) and /ko/kana/rules and /ja/kana/rules
 * (the reference). What is held here:
 *  - every Japanese string is a quote out of writing-rules.md or rules.md, or one of three files of our own: the moa
 *    screens (app-copy.ts), the typography quotes' file (type-quotes.ts, quotes only) and the Japanese edition's chrome
 *    (copy-ja.ts); the composed ones are labelled as ours where they render;
 *  - quotes are verbatim; the measured values match their files;
 *  - the pages stay unreleased (noindex, self-only hreflang, no sitemap, no shared navigation link) until the owner says go.
 */

const WEB = path.resolve(__dirname, "..");
const ROOT = path.resolve(WEB, "..");
const JA = /[\u3000-\u303f\u3040-\u30ff\u31f0-\u31ff\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff\uff00-\uffef]/;
const JA_RUNS = new RegExp(`${JA.source}+`, "g");
const LOCALES: KanaLocale[] = ["ko", "ja"];

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
const decode = (s: string) => s.replace(/&quot;/g, '"').replace(/&#x27;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
/** the page's text, one element's text per line; the page's own 「」 and “” around a quote (kn-qm) are not part of it */
const text = (s: string) => decode(s.replace(/<span class="kn-qm"[^>]*>[^<]*<\/span>/g, "\n").replace(/<[^>]+>/g, "\n"));
const mainOf = (html: string) => html.slice(html.indexOf("<main"), html.indexOf("</main>"));

const showcase = Object.fromEntries(LOCALES.map((l) => [l, renderToStaticMarkup(createElement(KanaShowcase, { locale: l }))])) as Record<KanaLocale, string>;
const rules = Object.fromEntries(LOCALES.map((l) => [l, renderToStaticMarkup(createElement(KanaRulesPage, { locale: l }))])) as Record<KanaLocale, string>;
/** copy-ja.ts strings the pages glue together with the edition's own punctuation (copy-ja.ts sep, colon, paren) */
const gluedJa = () => {
  const t = KANA_COPY_JA;
  return [
    `${t.paren[0]}${t.rules.newTab}${t.paren[1]}`,
    `${t.rules.english}${t.colon}`,
    `${t.sources.intro}${t.sources.opened[0]}`,
    ...[0, 1, 2].flatMap((r) => [0, 1, 2].map((h) => t.sources.cited(r, h))),
  ];
};
const hay = (extra: string[] = []) => [...dataStrings(), ...dataStrings().map((s) => s.replace(/`/g, "")), ...TYPE_QUOTES.map((q) => q.text), ...extra].join("\n");

describe("kana data", () => {
  it("51 rules in the file's eight areas, each area listing only its own rules, and the sixteen house choices", () => {
    expect(data.rules).toHaveLength(51);
    expect(data.areas).toHaveLength(8);
    expect(data.areas.flatMap((a) => a.rules)).toEqual(data.rules.map((r) => r.id));
    for (const r of data.rules) expect(data.areas.find((a) => a.name === r.area)?.rules).toContain(r.id);
    expect(data.houseChoices).toHaveLength(16);
  });

  it("every area has a heading in both editions, and the one legal duty is the only rule with the law tier", () => {
    for (const a of data.areas) {
      expect(AREA_KO[a.name], a.name).toBeTruthy();
      expect(AREA_JA[a.name], a.name).toBeTruthy();
    }
    expect(data.rules.filter((r) => r.tiers.some((x) => x.tier === "law")).map((r) => r.id)).toEqual(["KW-68"]);
  });

  it("every rule has a strength and at least one quote, and every quote or example a source", () => {
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
    expect(dataStrings().filter((s) => JA.test(s) && !md.includes(s))).toEqual([]);
    expect(crypto.createHash("sha256").update(md).digest("hex")).toBe(data.input.rules.sha256);
  });

  it("the typography quotes are in rules.md, checked on a date, and the measured values are their files' own", () => {
    const md = fs.readFileSync(path.join(ROOT, "docs/drafts/kana/references/rules.md"), "utf8");
    for (const q of TYPE_QUOTES) {
      expect(md, q.id).toContain(q.text);
      expect(q.checked, q.id).toMatch(/^2026-\d\d-\d\d$/);
      expect(q.source.url, q.id).toMatch(/^https:\/\//);
    }
    const ja = fs.readFileSync(path.join(ROOT, TYPE_MEASURED.ja.file), "utf8");
    expect(ja).toContain(`measured on ${TYPE_MEASURED.ja.measuredOn}`);
    expect(ja).toContain(`heading letter-spacing is negative: ${TYPE_MEASURED.ja.headingNegative} / ${TYPE_MEASURED.ja.services}`);
    expect(ja).toContain(`word-break: keep-all on 10% of the text or more: ${TYPE_MEASURED.ja.keepAll} / ${TYPE_MEASURED.ja.services}`);
    expect(ja).toMatch(new RegExp(`paragraph line-height[^\\n]*n ${TYPE_MEASURED.ja.paragraphServices},[^\\n]*median ${TYPE_MEASURED.ja.paragraphMedian},`));
    const ko = fs.readFileSync(path.join(ROOT, TYPE_MEASURED.ko.file), "utf8");
    expect(ko).toContain(`${TYPE_MEASURED.ko.headingNegative}/${TYPE_MEASURED.ko.headings} negative`);
  });
});

describe("kana copy", () => {
  it("a Korean reading and a Korean index line for every rule, a Korean line for every side of every house choice", () => {
    const ids = data.rules.map((r) => r.id).sort();
    expect(Object.keys(RULE_KO).sort()).toEqual(ids);
    expect(Object.keys(RULE_LABEL_KO).sort()).toEqual(ids);
    expect(Object.keys(HOUSE_KO).sort()).toEqual(data.houseChoices.map((c) => c.id).sort());
    for (const c of data.houseChoices) expect(HOUSE_KO[c.id].sides, c.id).toHaveLength(c.sides.length);
  });

  it("the Korean pages are in 해요체: no 합니다체 ending in any rendered Korean line", () => {
    for (const html of [showcase.ko, rules.ko]) {
      const lines = text(mainOf(html)).split("\n").filter((l) => /[가-힣]/.test(l));
      expect(lines.filter((l) => /[가-힣](습니다|ㅂ니다|니다)[.\s]?$/.test(l.trim()) || /습니다[. ]/.test(l))).toEqual([]);
    }
  });

  it("the Japanese wording in the Korean copy is all words that occur in the generated data", () => {
    const src = fs.readFileSync(path.join(WEB, "src/components/kana/copy.ts"), "utf8");
    const runs = [...new Set(src.replace(/^\s*(\/\/|\*).*$/gm, "").match(JA_RUNS) ?? [])];
    const h = hay();
    expect(runs.filter((r) => !h.includes(r))).toEqual([]);
  });

  it("the two editions' tag lines and chapter keys cover the same rules", () => {
    expect(Object.keys(KANA_COPY_JA.app.tags).sort()).toEqual(Object.keys(KANA_COPY.app.tags).sort());
    expect(Object.keys(KANA_COPY.app.tags).sort()).toEqual(APP_PAIRS.map((p) => p.rule).sort());
    expect(Object.keys(KANA_COPY_JA.sheet.notes)).toEqual(Object.keys(KANA_COPY.sheet.notes));
    expect(Object.keys(KANA_COPY_JA.register.rows)).toEqual(Object.keys(KANA_COPY.register.rows));
  });

  it("every source key belongs to one organisation on both sources lists", () => {
    for (const k of [...data.sources.map((s) => s.key), ...data.keysWithoutUrl]) {
      expect(SOURCE_ORGS.filter((o) => k === o.prefix || k.startsWith(`${o.prefix}-`)), k).toHaveLength(1);
      expect(SOURCE_ORGS_JA.filter((o) => k === o.prefix || k.startsWith(`${o.prefix}-`)), k).toHaveLength(1);
    }
  });
});

describe.each(LOCALES)("/%s/kana (the showcase)", (locale) => {
  const html = showcase[locale];
  const main = mainOf(html);

  it("one h1, the sections in order, and the root in the page's language", () => {
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1);
    expect(html.match(/<div class="sq-root[^"]*" lang="(\w+)"/)?.[1]).toBe(locale);
    const order = ['id="km-h1"', ...(locale === "ja" ? ['<section id="app"'] : []), '<section id="register"', '<section id="sheet"', '<section id="type"', '<section id="rules"', '<section id="status"'].map((s) => html.indexOf(s));
    expect(order.every((i) => i > -1)).toBe(true);
    expect([...order].sort((a, b) => a - b)).toEqual(order);
  });

  it("every Japanese run is a quote, a moa string, or (Japanese edition) copy-ja.ts", () => {
    const h = hay([...appStrings(), ...(locale === "ja" ? [...composedJa(), ...gluedJa()] : [])]);
    const runs = [...new Set(text(main).match(JA_RUNS) ?? [])];
    expect(runs.length).toBeGreaterThan(50);
    expect(runs.filter((r) => !h.includes(r))).toEqual([]);
  });

  it("every quoted span is verbatim from the data or the typography quotes, never a moa string or our chrome", () => {
    const quotes = [...main.matchAll(/<span class="kn-qtext"[^>]*>(?:<span[^>]*>)?<span class="kn-qm">[「“]<\/span>([\s\S]*?)<span class="kn-qm">[」”]<\/span>/g)].map((m) => text(m[1]).replace(/\n/g, "").trim());
    expect(quotes.length).toBeGreaterThan(20);
    const h = hay();
    expect(quotes.filter((q) => !h.includes(q))).toEqual([]);
  });

  it("the moa pair: two phones, every pair's rule tagged with its source card, the line that says the Japanese is ours", () => {
    expect(main.match(/class="hg-phone"/g)).toHaveLength(2);
    for (const p of APP_PAIRS) {
      expect(main, p.rule).toContain(`data-rule="${p.rule}" data-tour-card=""`);
      expect(main, p.rule).toContain(`href="#${p.rule.toLowerCase()}"`);
    }
    const t = locale === "ko" ? KANA_COPY : KANA_COPY_JA;
    expect(main.split(decodeURIComponent(t.app.composed).replace(/&/g, "&amp;"))).toHaveLength(2);
  });

  it("the chapters say where the screens' Japanese comes from", () => {
    const t = locale === "ko" ? KANA_COPY : KANA_COPY_JA;
    for (const s of [t.register.intro, t.sheet.intro, t.type.intro]) expect(text(main).replace(/\n/g, "")).toContain(s);
    expect(t.register.intro).toMatch(locale === "ko" ? /우리가 지은 예문/ : /当サイトの例文/);
    expect(t.sheet.intro).toMatch(locale === "ko" ? /우리가 지은 예문/ : /当サイトの例文/);
    expect(t.type.intro).toMatch(locale === "ko" ? /우리가 지은 예문/ : /当サイトの例文/);
  });

  it("the index lists all 51 rules once, each opening in place and linking its card on the rules page", () => {
    const rows = [...main.matchAll(/<li id="(kw-\d+)" class="km-li">/g)].map((m) => m[1]);
    expect(rows).toHaveLength(51);
    expect(new Set(rows).size).toBe(51);
    const rulesPath = locale === "ko" ? "/ko/kana/rules" : "/ja/kana/rules";
    for (const id of rows) expect(main, id).toContain(`href="${rulesPath}#${id}"`);
  });

  it("no install command: the status band says what is not done yet", () => {
    expect(html).not.toMatch(/npx |omd install|install-skills/);
    const status = main.slice(main.indexOf('<section id="status"'));
    expect(text(status)).toMatch(locale === "ko" ? /아직 배포하지 않았어요/ : /まだ公開していません/);
  });

  if (locale === "ja") {
    it("the Japanese edition opens on the sources' own pairs, each stop exactly its pair's texts, and says who wrote its Japanese", () => {
      const hero = main.slice(0, main.indexOf('<section id="app"'));
      expect(hero).toContain(KANA_COPY_JA.hero.notice.text);
      expect(hero).toContain("https://github.com/kwakseongjae/oh-my-design/issues/new");
      type Ex = { key: string; sides: { role: string; texts: string[] }[] };
      const shown = [...hero.matchAll(/<span class="kc-ja" lang="ja" data-stop="(\d+)" data-role="(wrong|right)">([^<]*)<\/span>/g)];
      COMPARE_STOPS.forEach((s, i) => {
        const e = (data.rules.find((r) => r.id === s.rule)!.examples as Ex[])[s.example];
        for (const role of ["wrong", "right"] as const) {
          const want = e.sides.filter((x) => x.role === role).flatMap((x) => x.texts);
          expect(shown.filter((m) => m[1] === String(i) && m[2] === role).map((m) => decode(m[3])), `${s.rule} ${role}`).toEqual(want);
        }
      });
      // the specimens are pictures of controls, not controls
      for (const p of hero.match(/<div class="kc-panel">[\s\S]*?<\/figure>/g) ?? []) expect(p).not.toMatch(/<(button|input|a)[\s>]/);
    });
  }
});

describe.each(LOCALES)("/%s/kana/rules (the reference)", (locale) => {
  const html = rules[locale];
  const main = mainOf(html);

  it("one h1, all 51 rule cards once, all 16 house choices, every quote shown", () => {
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1);
    const cards = [...html.matchAll(/<article id="(kw-\d+)"/g)].map((m) => m[1]);
    expect(cards).toHaveLength(51);
    expect(new Set(cards).size).toBe(51);
    expect([...html.matchAll(/<article id="(uw-\d+)"/g)]).toHaveLength(16);
    const total = data.rules.reduce((n, r) => n + r.quotes.length, 0) + data.houseChoices.reduce((n, c) => n + c.sides.reduce((m, s) => m + s.quotes.length, 0), 0);
    // the Japanese edition sets the quote that leads a card as its heading (rule-lead.ts), not in a quote block
    const leads = locale === "ja" ? data.rules.filter((r) => jaLead(r)).length : 0;
    expect(main.match(/class="kn-qtext"/g)).toHaveLength(total - leads);
    for (const s of data.sources) expect(main).toContain(`href="${s.url}"`);
  });

  it("every Japanese run is in the data, or (Japanese edition) in copy-ja.ts", () => {
    const h = hay(locale === "ja" ? [...composedJa(), ...gluedJa()] : []);
    const runs = [...new Set(text(main).match(JA_RUNS) ?? [])];
    expect(runs.filter((r) => !h.includes(r))).toEqual([]);
  });

  it("the font bars add up to the services measured", () => {
    const bars = [...main.matchAll(/<span class="kn-bar-n">(\d+)/g)].map((m) => Number(m[1]));
    expect(bars.reduce((a, b) => a + b, 0)).toBe(data.fonts.services);
  });
});

describe("the moa screens' Japanese (app-copy.ts)", () => {
  const RULE_IDS = new Set(data.rules.map((r) => r.id));
  const HOUSE_IDS = new Set(data.houseChoices.map((c) => c.id));

  it("every pair names a real rule, not a house choice or an unchecked one, differs, and its example is a real one", () => {
    expect(APP_PAIRS.length).toBeGreaterThanOrEqual(6);
    for (const p of APP_PAIRS) {
      expect(RULE_IDS.has(p.rule), p.key).toBe(true);
      expect(HOUSE_IDS.has(p.rule), p.key).toBe(false);
      expect(["KW-39", "KW-10"], p.key).not.toContain(p.rule);
      expect(p.ai, p.key).not.toBe(p.fix);
      if (p.example !== undefined) expect(data.rules.find((r) => r.id === p.rule)!.examples[p.example], p.key).toBeTruthy();
    }
  });

  it("a side marked as a source's own string is one, character for character, from the generated data", () => {
    const h = dataStrings().join("\n");
    for (const p of APP_PAIRS) if (p.source) expect(h, p.key).toContain(p[p.source.side]);
    expect(h).toContain(APP_CANCEL.text);
  });

  const checker = path.join(ROOT, "scripts", "lang", "kana-copy-check.mjs");
  const check = (dir: string, name: string, body: string) => {
    const file = path.join(dir, `${name}.tsx`);
    fs.writeFileSync(file, `export function S() {\n  return (\n    <div>\n${body}\n    </div>\n  );\n}\n`);
    let out = "";
    try {
      out = execFileSync(process.execPath, [checker, "--json", file], { encoding: "utf8" });
    } catch (e) {
      out = String((e as { stdout?: string }).stdout ?? "");
    }
    const j = JSON.parse(out) as { summary: { WARN: number; FYI: number }; findings: { rule: string }[] };
    return { ...j.summary, rules: [...new Set(j.findings.map((f) => f.rule))].sort() };
  };

  it.skipIf(!fs.existsSync(checker))("kana-copy-check: nothing on the fixed screen, the pairs' rules on the other one", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "kana-app-"));
    const s = APP_SHARED;
    try {
      const shared = [s.amount, `${s.deltaLead} ${s.delta}`, s.deposit, s.transfer, s.recentH, ...s.recent, s.amountLabel, s.amountValue, ...s.tabs];
      const side = (k: "ai" | "fix") =>
        [...APP_PAIRS.filter((p) => p.key !== "send").map((p) => `    <p>${p[k]}</p>`), `    <button>${APP_CANCEL.text}</button>`, `    <button>${APP_PAIRS.find((p) => p.key === "send")![k]}</button>`].join("\n");
      expect(check(dir, "fix", side("fix"))).toMatchObject({ WARN: 0, FYI: 0 });
      expect(check(dir, "shared", shared.map((x) => `    <p>${x}</p>`).join("\n"))).toMatchObject({ WARN: 0, FYI: 0 });
      const ai = check(dir, "ai", side("ai"));
      expect(ai.WARN).toBe(2);
      expect(ai.rules.filter((r) => r !== "KW-35")).toEqual(APP_PAIRS.map((p) => p.rule).filter((r) => r !== "KW-38").sort());
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it.skipIf(!fs.existsSync(checker))("kana-copy-check: no WARN on the Japanese edition's composed chrome (copy-ja.ts)", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "kana-ja-"));
    try {
      const body = composedJa()
        .map((x) => `    <p>${x.replace(/[{}<>]/g, "")}</p>`)
        .join("\n");
      const r = check(dir, "ja", body);
      expect(r.WARN).toBe(0);
      // FYI allowed: KW-35's kanji ratio over the whole fixture (headings and labels are nouns, KW-02), and KW-12 on
      // the two labels that name 「あなたの」 as the form to leave out
      expect(r.rules.filter((x) => !["KW-35", "KW-12"].includes(x))).toEqual([]);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe("the kana pages stay unreleased", () => {
  const pages: [string, Metadata, string][] = [
    ["/ko/kana", koShowcaseMeta, "ko"],
    ["/ko/kana/rules", koRulesMeta, "ko"],
    ["/ja/kana", jaShowcaseMeta, "ja"],
    ["/ja/kana/rules", jaRulesMeta, "ja"],
  ];

  it.each(pages)("%s: noindex, canonical to itself, no twin", (p, meta, lang) => {
    expect(meta.robots).toMatchObject({ index: false });
    expect(meta.alternates?.canonical).toBe(p);
    expect(meta.alternates?.languages).toEqual({ [lang]: p });
    expect((meta.openGraph as { locale?: string })?.locale).toBe(lang === "ko" ? "ko_KR" : "ja_JP");
  });

  it("in no sitemap and linked from no shared header or footer", () => {
    expect(sitemap().some((r) => r.url.includes("/kana"))).toBe(false);
    const chrome = ["site-header.tsx", "site-footer.tsx", ...fs.readdirSync(path.join(WEB, "src/components/brand-a/copy")).map((f) => `copy/${f}`)];
    for (const f of chrome) expect(fs.readFileSync(path.join(WEB, "src/components/brand-a", f), "utf8"), f).not.toContain("/kana");
    expect(fs.existsSync(path.join(WEB, "src/app/(en)/kana"))).toBe(false);
    expect(fs.existsSync(path.join(WEB, "src/app/(zh-tw)/zh-tw/kana"))).toBe(false);
  });
});
