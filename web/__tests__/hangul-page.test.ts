import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import type { Metadata } from "next";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { metadata as koMetadata } from "@/app/(ko)/ko/hangul/page";
import { metadata as enMetadata } from "@/app/(en)/hangul/page";
import { HangulPage } from "@/components/hangul/hangul-page";
import { HANGUL_COPY, INSTALL_CLI, INSTALL_SKILL, LAUNCH_POST_SLUG, type HangulLocale } from "@/components/hangul/copy";
import { MOA_COPY, MOA_COPY_MARKS, MOA_SHARED, MOA_TYPE_MARKS } from "@/components/hangul/moa-copy";
import { getPost } from "@/lib/blog/posts";

// next/font/local only works inside the Next compiler; the page needs nothing from it but the class.
vi.mock("@/components/brand-a/journey/faces", () => ({
  pretendard: { variable: "hg-test-pretendard", style: { fontFamily: "Pretendard" } },
}));

/**
 * /hangul launch pages (r16, owner review 2026-10-24): the hreflang pair, the share cards, the
 * sitemap, what each page renders, and the claims the page makes about its own moa screens.
 */

const WEB = path.resolve(__dirname, "..");
const ROOT = path.resolve(WEB, "..");
const ORIGIN = "https://oh-my-design.kr";
const LOCALES: HangulLocale[] = ["ko", "en"];
const META: Record<HangulLocale, Metadata> = { ko: koMetadata, en: enMetadata };
const PATH: Record<HangulLocale, string> = { ko: "/ko/hangul", en: "/hangul" };

const render = (locale: HangulLocale) => renderToStaticMarkup(createElement(HangulPage, { locale }));
/** the markup of one section, from its opening tag to the next <section */
const section = (html: string, id: string) => {
  const start = html.indexOf(`<section id="${id}"`);
  expect(start, id).toBeGreaterThan(-1);
  const end = html.indexOf("<section", start + 1);
  return html.slice(start, end === -1 ? undefined : end);
};
const ids = (s: string) => s.split(/\s*·\s*/);

function pngSize(file: string): { width: number; height: number } {
  const buf = fs.readFileSync(file);
  expect(buf.subarray(1, 4).toString("latin1")).toBe("PNG");
  return { width: buf.readUInt32BE(16), height: buf.readUInt32BE(20) };
}

describe("/hangul metadata", () => {
  it.each(LOCALES)("%s: canonical, the hreflang pair and x-default = English", (locale) => {
    const m = META[locale];
    expect(m.alternates?.canonical).toBe(PATH[locale]);
    expect(m.alternates?.languages).toEqual({ en: "/hangul", ko: "/ko/hangul", "x-default": "/hangul" });
    expect(m.title).toBe(HANGUL_COPY[locale].meta.title);
    expect(m.description).toBe(HANGUL_COPY[locale].meta.description);
    expect(m.openGraph && "url" in m.openGraph ? m.openGraph.url : null).toBe(PATH[locale]);
  });

  it.each(LOCALES)("%s: a 1200x630 share card that exists and that card fetchers may read", (locale) => {
    const m = META[locale];
    const og = [m.openGraph?.images].flat()[0] as { url: string; width: number; height: number };
    const tw = [m.twitter?.images].flat()[0];
    expect(og.url).toBe(`/hangul/og-${locale}.png`);
    expect(tw).toBe(og.url);
    expect(pngSize(path.join(WEB, "public", og.url))).toEqual({ width: 1200, height: 630 });
    expect({ width: og.width, height: og.height }).toEqual({ width: 1200, height: 630 });
    const disallowed = [robots().rules].flat().flatMap((r) => [r.disallow ?? []].flat());
    expect(disallowed.some((p) => og.url.startsWith(p))).toBe(false);
    expect(JSON.stringify(m)).not.toContain("/api/");
  });
});

describe("/hangul in the sitemap", () => {
  it("lists both pages, each naming the pair and x-default", () => {
    const routes = sitemap();
    const languages = { en: `${ORIGIN}/hangul`, ko: `${ORIGIN}/ko/hangul`, "x-default": `${ORIGIN}/hangul` };
    for (const locale of LOCALES) {
      const route = routes.find((r) => r.url === `${ORIGIN}${PATH[locale]}`);
      expect(route, PATH[locale]).toBeDefined();
      expect(route?.alternates?.languages).toEqual(languages);
    }
  });
});

describe("/hangul pages", () => {
  it.each(LOCALES)("%s: one h1, the sections in order, the install command, no placeholder", (locale) => {
    const html = render(locale);
    const t = HANGUL_COPY[locale];
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1);
    expect(html).toContain(t.hero.h1);
    const order = ['id="hg-h1"', '<section id="type"', '<section id="copy"', '<section id="rules"', '<section id="install"'].map((s) => html.indexOf(s));
    expect(order.every((i) => i > -1)).toBe(true);
    expect([...order].sort((a, b) => a - b)).toEqual(order);
    // one copy box: the bundle command is the box, the skill-only command a line under it
    expect(html.match(/class="hg-inst"/g)).toHaveLength(1);
    expect(html).toContain(`data-copy="${INSTALL_CLI}"`);
    for (const token of INSTALL_SKILL.split(" ")) expect(html).toContain(token);
    expect(html).not.toContain("check.mjs");
    expect(html).not.toMatch(/id="(sources|checker)"/);
    expect(html).not.toMatch(/TODO|placeholder|lorem|FILL IN/i);
    expect(html).not.toContain("/api/og");
  });

  it.each(LOCALES)("%s: the language switch names the twin, and the links point at real pages", (locale) => {
    const html = render(locale);
    expect(html).toContain(`href="/docs/${locale}/skills"`);
    const post = getPost(LAUNCH_POST_SLUG, locale);
    // the launch post is linked only while it exists in this locale
    if (post) expect(html).toContain(`/${locale === "ko" ? "blog" : "blog/en"}/${LAUNCH_POST_SLUG}`);
    else expect(html).not.toContain(LAUNCH_POST_SLUG);
    expect(html).toContain('href="#install"');
    expect(html).toContain('href="#rules"');
  });

  it.each(LOCALES)("%s: no eval totals, no measured card, no seal, no keycaps (owner review 2026-10-24)", (locale) => {
    const html = render(locale);
    expect(html).not.toMatch(/id="(eval|measured|writing)"/);
    expect(html).not.toContain("hg-seal");
    expect(html).not.toMatch(/18개 중 17개|17 of 18|\/18</);
    expect(html).not.toMatch(/keys3d|k3-canvas|hg-keys/);
  });

  it.each(LOCALES)("%s: no 'demo' label over the screens, and one line under the install box says they are examples", (locale) => {
    const html = render(locale);
    const note = HANGUL_COPY[locale].install.screensNote;
    expect(html.split(note)).toHaveLength(2);
    expect(html.indexOf(note)).toBeGreaterThan(html.indexOf('<section id="install"'));
    expect(html).not.toContain("시연용");
  });
});

describe("/hangul moa screens", () => {
  it.each(LOCALES)("%s: the hero pairs the screen without the skill and with it, in phones", (locale) => {
    const hero = render(locale).split('<section id="type"')[0];
    expect(hero.match(/class="hg-phone"/g)).toHaveLength(2);
    expect(hero).toContain('data-typo="ai"');
    expect(hero).toContain('data-typo="fix"');
    expect(hero).toContain(MOA_COPY.ai.toast);
    expect(hero).toContain(MOA_COPY.fix.toast);
    expect(hero).not.toContain('class="moa-chip"');
  });

  it.each(LOCALES)("%s: the 조판 chapter changes only the typesetting, the 문구 chapter only the strings", (locale) => {
    const html = render(locale);
    const type = section(html, "type");
    expect(type.match(/data-typo="ai"/g)).toHaveLength(1);
    expect(type.match(/data-typo="fix"/g)).toHaveLength(1);
    expect(type).not.toContain(MOA_COPY.ai.toast);
    expect(type.split(MOA_COPY.fix.toast)).toHaveLength(3);
    const copy = section(html, "copy");
    expect(copy).not.toContain('data-typo="ai"');
    expect(copy.match(/data-typo="fix"/g)).toHaveLength(2);
    expect(copy).toContain(MOA_COPY.ai.toast);
    expect(copy).toContain(MOA_COPY.fix.toast);
    expect(copy).toContain('class="moa-wavy"');
  });

  it("every rule a screen marks or the hero lights is explained beside it and is a real rule", () => {
    for (const locale of LOCALES) {
      const t = HANGUL_COPY[locale];
      const rules = new Set([...t.rules.list, ...t.rules.writing].map((r) => r.id));
      const typeNotes = new Set(t.type.notes.flatMap((n) => ids(n.id)));
      const copyNotes = new Set(t.copy.notes.flatMap((n) => ids(n.id)));
      for (const m of Object.values(MOA_TYPE_MARKS).flatMap(ids)) expect(typeNotes.has(m), `${locale} type ${m}`).toBe(true);
      for (const m of Object.values(MOA_COPY_MARKS).flatMap((v) => ids(v ?? ""))) expect(copyNotes.has(m), `${locale} copy ${m}`).toBe(true);
      for (const id of [...typeNotes, ...copyNotes, ...t.hero.tags.map((g) => g.id)]) expect(rules.has(id), `${locale} ${id}`).toBe(true);
      for (const g of t.hero.tags) expect(typeNotes.has(g.id) || copyNotes.has(g.id), `${locale} tag ${g.id}`).toBe(true);
    }
  });

  it("set every Hangul syllable in the self-hosted Pretendard subset (KS X 1001)", () => {
    const euckr = new TextDecoder("euc-kr");
    const ksx = new Set<string>();
    for (let a = 0xb0; a <= 0xc8; a++) for (let b = 0xa1; b <= 0xfe; b++) ksx.add(euckr.decode(new Uint8Array([a, b])));
    const text = JSON.stringify([MOA_COPY, MOA_SHARED]);
    const missing = [...new Set([...text].filter((c) => /[가-힣]/.test(c) && !ksx.has(c)))];
    expect(missing).toEqual([]);
  });

  const checker = path.join(ROOT, "skills", "hangul", "scripts", "copy-check.mjs");
  it.skipIf(!fs.existsSync(checker))("copy-check: nothing in the /hangul strings or the shared ones, findings in the others", () => {
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "hg-moa-"));
    const check = (name: string, strings: readonly string[]) => {
      const file = path.join(dir, `${name}.tsx`);
      fs.writeFileSync(file, `export const S = [\n${strings.map((s) => `  ${JSON.stringify(s)}`).join(",\n")}\n];\n`);
      let out = "";
      try {
        out = execFileSync(process.execPath, [checker, "--json", file], { encoding: "utf8" });
      } catch (e) {
        out = String((e as { stdout?: string }).stdout ?? "");
      }
      return JSON.parse(out).summary as { BLOCK: number; WARN: number; FYI: number };
    };
    const s = MOA_SHARED;
    const shared = [s.app, s.amount, s.deltaLead, s.delta, s.accounts, s.transfer, s.recentH, ...s.recent, s.statsCap, s.statsH, ...s.stats.flatMap((f) => [f.value + f.unit, f.label]), s.asOf, ...s.tabs];
    try {
      expect(check("fix", Object.values(MOA_COPY.fix))).toEqual({ BLOCK: 0, WARN: 0, FYI: 0 });
      expect(check("shared", shared)).toEqual({ BLOCK: 0, WARN: 0, FYI: 0 });
      const ai = check("ai", Object.values(MOA_COPY.ai));
      expect(ai.WARN + ai.FYI).toBeGreaterThan(0);
    } finally {
      fs.rmSync(dir, { recursive: true, force: true });
    }
  });
});

describe("/hangul rules list", () => {
  it.each(LOCALES)("%s: HG-1 to HG-14, in order", (locale) => {
    expect(HANGUL_COPY[locale].rules.list.map((r) => r.id)).toEqual(Array.from({ length: 14 }, (_, i) => `HG-${i + 1}`));
  });

  const skill = path.resolve(ROOT, "skills", "hangul", "SKILL.md");
  it.skipIf(!fs.existsSync(skill))("matches the rule IDs in skills/hangul/SKILL.md", () => {
    const found = [...fs.readFileSync(skill, "utf8").matchAll(/^\d+\.\s+\*\*(HG-\d+)\b/gm)].map((m) => m[1]);
    expect(HANGUL_COPY.ko.rules.list.map((r) => r.id)).toEqual(found);
  });

  it.skipIf(!fs.existsSync(skill))("lists the writing rules in skills/hangul/SKILL.md §3b, in both languages", () => {
    const found = [...fs.readFileSync(skill, "utf8").matchAll(/^\d+\.\s+\*\*(HW-\d+)\b/gm)].map((m) => m[1]);
    expect(found).toHaveLength(14);
    for (const locale of LOCALES) expect(HANGUL_COPY[locale].rules.writing.map((r) => r.id)).toEqual(found);
  });
});
