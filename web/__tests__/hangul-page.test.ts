import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import type { Metadata } from "next";
import robots from "@/app/robots";
import sitemap from "@/app/sitemap";
import { metadata as koMetadata } from "@/app/(ko)/ko/hangul/page";
import { metadata as enMetadata } from "@/app/(en)/hangul/page";
import { HangulPage } from "@/components/hangul/hangul-page";
import { CompareSection, MeasuredSection, fmtEm } from "@/components/hangul/asset-sections";
import {
  DEMO_HEADING,
  H3_METRICS,
  H7_LINES,
  HANGUL_COPY,
  INSTALL_CLI,
  INSTALL_SKILL,
  LAUNCH_POST_SLUG,
  WRITING_EVAL,
  fill,
  objectParticle,
  subjectParticle,
  type HangulLocale,
} from "@/components/hangul/copy";
import { getPost } from "@/lib/blog/posts";
import type { HangulAssets } from "@/lib/hangul/assets";

// next/font/local only works inside the Next compiler; the page needs nothing from it but the class.
vi.mock("@/components/brand-a/journey/faces", () => ({
  pretendard: { variable: "hg-test-pretendard", style: { fontFamily: "Pretendard" } },
}));
vi.mock("@/components/hangul/faces", () => ({
  songMyung: { variable: "hg-test-songmyung", style: { fontFamily: "Song Myung" } },
}));

/**
 * /hangul launch pages (docs/HANGUL_LAUNCH_PLAN_2026-10-21.md H2): the hreflang pair, the share
 * cards, the sitemap, what each page renders, and the launch-asset contract (render a block only
 * when its entry exists, never a placeholder).
 */

const WEB = path.resolve(__dirname, "..");
const ORIGIN = "https://oh-my-design.kr";
const LOCALES: HangulLocale[] = ["ko", "en"];
const META: Record<HangulLocale, Metadata> = { ko: koMetadata, en: enMetadata };
const PATH: Record<HangulLocale, string> = { ko: "/ko/hangul", en: "/hangul" };

const render = (locale: HangulLocale) => renderToStaticMarkup(createElement(HangulPage, { locale }));

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
  it.each(LOCALES)("%s: one h1, both demo results, the install command, no placeholder", (locale) => {
    const html = render(locale);
    const t = HANGUL_COPY[locale];
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1);
    expect(html).toContain(t.hero.h1);
    // the demo: the eval heading in both screens, as Korean text
    expect(html).toContain('data-hangul-specimen="before"');
    expect(html).toContain('data-hangul-specimen="after"');
    expect(html.split(DEMO_HEADING).length - 1).toBeGreaterThanOrEqual(2);
    expect(html).toMatch(/<p class="hg-sp-h" lang="ko">/);
    // one copy box: the bundle command is the box, the skill-only command a line under it
    expect(html.match(/class="hg-inst"/g)).toHaveLength(1);
    expect(html).toContain(`data-copy="${INSTALL_CLI}"`);
    for (const token of INSTALL_SKILL.split(" ")) expect(html).toContain(token);
    // no checker step and no source list (owner v4 review)
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
    expect(html).toContain('id="install"');
  });

  it("states the eval as the results doc words it, caveats included", () => {
    const ko = HANGUL_COPY.ko.evals;
    const en = HANGUL_COPY.en.evals;
    expect(ko.h2).toContain("18개 중 17개");
    expect(en.h2).toContain("17 of 18");
    expect(ko.unit).toMatch(/BLOCK.*WARN/);
    expect(en.unit).toMatch(/BLOCK.*WARN/);
    expect(ko.after.sub).toBe("BLOCK 0 · WARN 0");
    // the four caveats: the checker ships with the skill, it reads source only, the skill was named
    // in the prompt (all in the caveat line), and 3 runs per cell (in the method line)
    expect(ko.caveat).toMatch(/체커/);
    expect(ko.caveat).toMatch(/소스 코드/);
    expect(ko.caveat).toMatch(/프롬프트/);
    expect(ko.method).toMatch(/3번씩/);
    expect(en.caveat).toMatch(/checker/);
    expect(en.caveat).toMatch(/source code/);
    expect(en.caveat).toMatch(/prompt/);
    expect(en.method).toMatch(/three runs each/);
  });
});

describe("/hangul rules list", () => {
  it.each(LOCALES)("%s: HG-1 to HG-14, in order", (locale) => {
    expect(HANGUL_COPY[locale].rules.list.map((r) => r.id)).toEqual(Array.from({ length: 14 }, (_, i) => `HG-${i + 1}`));
  });

  // Once the skill lands on main (stream H1), the page's list must match its rule IDs.
  const skill = path.resolve(WEB, "..", "skills", "hangul", "SKILL.md");
  it.skipIf(!fs.existsSync(skill))("matches the rule IDs in skills/hangul/SKILL.md", () => {
    const ids = [...fs.readFileSync(skill, "utf8").matchAll(/^\d+\.\s+\*\*(HG-\d+)\b/gm)].map((m) => m[1]);
    expect(HANGUL_COPY.ko.rules.list.map((r) => r.id)).toEqual(ids);
  });

  it.skipIf(!fs.existsSync(skill))("lists the writing rules in skills/hangul/SKILL.md §3b, in both languages", () => {
    const ids = [...fs.readFileSync(skill, "utf8").matchAll(/^\d+\.\s+\*\*(HW-\d+)\b/gm)].map((m) => m[1]);
    expect(ids).toHaveLength(14);
    for (const locale of ["ko", "en"] as const) expect(HANGUL_COPY[locale].rules.writing.map((r) => r.id)).toEqual(ids);
  });
});

describe("/hangul writing section", () => {
  it("adds up its figures: per channel to the whole, and never more than the runs", () => {
    for (const arm of [WRITING_EVAL.before, WRITING_EVAL.after]) {
      expect(arm.codex + arm.claude).toBe(arm.all);
      expect(arm.all).toBeLessThanOrEqual(WRITING_EVAL.runs);
    }
    expect(WRITING_EVAL.bw.before).toBeLessThanOrEqual(WRITING_EVAL.before.all);
    expect(WRITING_EVAL.bw.after).toBeLessThanOrEqual(WRITING_EVAL.after.all);
  });

  it.each(LOCALES)("%s: marks a part of each quoted string, says the examples were picked, and states the criterion", (locale) => {
    const w = HANGUL_COPY[locale].writing;
    for (const f of w.fixes) expect(f.before).toContain(f.mark);
    expect(w.fixesNote).toMatch(locale === "ko" ? /골랐어요/ : /picked/);
    expect(w.evalCaveat).toMatch(locale === "ko" ? /미리 정한 기준/ : /criterion/);
    const html = render(locale);
    expect(html).toContain('id="writing"');
    expect(html).toContain(`${WRITING_EVAL.before.all}<span>/${WRITING_EVAL.runs}</span>`);
    expect(html).toContain(`${WRITING_EVAL.after.all}<span>/${WRITING_EVAL.runs}</span>`);
    expect(html.indexOf('id="writing"')).toBeLessThan(html.indexOf('id="rules"'));
  });
});

describe("/hangul specimens", () => {
  it("are set only in syllables the self-hosted Pretendard subset carries (KS X 1001)", () => {
    const euckr = new TextDecoder("euc-kr");
    const ksx = new Set<string>();
    for (let a = 0xb0; a <= 0xc8; a++) for (let b = 0xa1; b <= 0xfe; b++) ksx.add(euckr.decode(new Uint8Array([a, b])));
    const text = [DEMO_HEADING, ...H7_LINES, ...H3_METRICS.flatMap((m) => [m.label, m.unit, m.note])].join("");
    const missing = [...new Set([...text].filter((c) => /[가-힣]/.test(c) && !ksx.has(c)))];
    expect(missing).toEqual([]);
  });

  it("word the break readout with the right particles", () => {
    expect(subjectParticle("있어요")).toBe("가");
    expect(subjectParticle("많은")).toBe("이");
    expect(objectParticle("요.")).toBe("로");
    expect(objectParticle("은")).toBe("으로");
    expect(objectParticle("길")).toBe("로");
    expect(fill(HANGUL_COPY.ko.demo.broken, { word: "있어요", p: "가", head: "있어", tail: "요.", ro: "로" })).toBe(
      "‘있어요’가 ‘있어 / 요.’로 끊겼어요",
    );
  });
});

describe("/hangul launch assets (hangul-assets.json contract)", () => {
  const EMPTY: HangulAssets = { beforeAfter: null, video: null, measured: null };
  // A shape-only fixture for the render logic; these values are not data and never ship.
  const FIXTURE: HangulAssets = {
    beforeAfter: {
      desktop: { before: "/hangul/fixture-b-d.webp", after: "/hangul/fixture-a-d.webp", width: 1440, height: 900 },
      phone: { before: "/hangul/fixture-b-p.webp", after: "/hangul/fixture-a-p.webp", width: 390, height: 844 },
      source: "fixture-run",
    },
    video: { mp4: "/hangul/fixture.mp4", poster: "/hangul/fixture.webp", width: 1280, height: 720, seconds: 9.6 },
    measured: {
      services: 3,
      date: "fixture-date",
      bodyLineHeight: { min: 1, median: 1.5, max: 2 },
      bodyLetterSpacingEm: { min: -0.07, median: 0, max: 0 },
      headingLetterSpacingEm: { min: -0.05, median: 0, max: 0.006 },
      topFonts: [
        { family: "Fixture Sans", count: 2 },
        { family: "Fixture Serif", count: 1 },
      ],
    },
  };
  const html = (el: typeof CompareSection | typeof MeasuredSection, assets: HangulAssets) =>
    renderToStaticMarkup(createElement(el, { assets, t: HANGUL_COPY.ko.assets, band: false }));

  it("renders nothing while every entry is empty", () => {
    expect(html(CompareSection, EMPTY)).toBe("");
    expect(html(MeasuredSection, EMPTY)).toBe("");
  });

  it("renders each block only when its own entry exists", () => {
    const shots = html(CompareSection, { ...EMPTY, beforeAfter: FIXTURE.beforeAfter });
    expect(shots).toContain('src="/hangul/fixture-b-d.webp"');
    expect(shots).toContain('width="390" height="844"');
    expect(shots).toContain("fixture-run");
    expect(shots).not.toContain("<video");
    const video = html(CompareSection, { ...EMPTY, video: FIXTURE.video });
    expect(video).toContain('<source src="/hangul/fixture.mp4" type="video/mp4"/>');
    expect(video).toContain('poster="/hangul/fixture.webp"');
    expect(video).not.toContain("<img");
    const measured = html(MeasuredSection, { ...EMPTY, measured: FIXTURE.measured });
    expect(measured).toContain("한국 서비스 3곳을 직접 쟀어요");
    expect(measured).toContain("−0.07em");
    expect(measured).toContain("Fixture Sans");
    expect(html(CompareSection, { ...EMPTY, measured: FIXTURE.measured })).toBe("");
  });

  it("formats em values with a real minus sign", () => {
    expect(fmtEm(-0.03)).toBe("−0.03em");
    expect(fmtEm(0)).toBe("0");
    expect(fmtEm(0.006)).toBe("0.006em");
  });

  it("ships no test values in the data file", () => {
    const raw = fs.readFileSync(path.join(WEB, "src/data/hangul-assets.json"), "utf8");
    expect(raw).not.toMatch(/fixture|test-|example\./i);
  });
});
