import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it, vi } from "vitest";
import manifest from "@/components/hangul/fonts/display-glyphs.json";
import { HangulPage } from "@/components/hangul/hangul-page";
import type { HangulLocale } from "@/components/hangul/copy";

// next/font only works inside the Next compiler; the page needs nothing from either face but its class.
vi.mock("@/components/brand-a/journey/faces", () => ({ pretendard: { variable: "hg-test-pretendard" } }));
vi.mock("@/components/hangul/faces", () => ({ songMyung: { variable: "hg-test-songmyung" } }));

/**
 * The /hangul display face is a subset of Song Myung (components/hangul/faces.ts, fonts/subset.mjs):
 * only the syllables the pages set in it. A heading that needs a syllable outside the subset would
 * draw that one syllable in the fallback face, so every character inside an `hg-d` element, in both
 * locales, must be in the subset. If this fails after a copy change, run fonts/subset.mjs again.
 */
const FONTS = path.resolve(__dirname, "../src/components/hangul/fonts");
const CSS = path.resolve(__dirname, "../src/components/hangul/hangul.css");
const render = (locale: HangulLocale) => renderToStaticMarkup(createElement(HangulPage, { locale }));
const decode = (s: string) =>
  s.replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");

/** The text of every element that carries the display-face class, nested tags stripped. */
function displayText(html: string): string[] {
  const out: string[] = [];
  const open = /<(\w+)\b[^>]*\bclass="[^"]*\bhg-d\b[^"]*"[^>]*>/g;
  for (let m = open.exec(html); m; m = open.exec(html)) {
    const tag = m[1];
    const tags = new RegExp(`<${tag}\\b[^>]*>|</${tag}>`, "g");
    tags.lastIndex = m.index + m[0].length;
    let depth = 1;
    let end = html.length;
    for (let t = tags.exec(html); t && depth > 0; t = tags.exec(html)) {
      if (t[0][1] === "/") {
        depth -= 1;
        if (depth === 0) end = t.index;
      } else depth += 1;
    }
    out.push(decode(html.slice(m.index + m[0].length, end).replace(/<[^>]+>/g, "")));
  }
  return out;
}

describe("/hangul display face (Song Myung subset)", () => {
  it("is the file its manifest describes, small enough to preload", () => {
    const file = path.join(FONTS, manifest.woff2.file);
    const buf = fs.readFileSync(file);
    expect(buf.subarray(0, 4).toString("latin1")).toBe("wOF2");
    expect(createHash("sha256").update(buf).digest("hex")).toBe(manifest.woff2.sha256);
    expect(buf.length).toBe(manifest.woff2.bytes);
    expect(buf.length).toBeLessThanOrEqual(40_000);
  });

  it("ships its licence beside it", () => {
    const ofl = fs.readFileSync(path.join(FONTS, "OFL.txt"), "utf8");
    expect(ofl).toMatch(/Copyright 2018 The Song ?Myung Project Authors/);
    expect(ofl).toContain("SIL Open Font License, Version 1.1");
  });

  it.each(["ko", "en"] as const)("%s: every character set in the face is in the subset", (locale) => {
    const text = displayText(render(locale));
    // the h1 and the h2s at least (the eval figures left the page on 2026-10-24)
    expect(text.length).toBeGreaterThanOrEqual(6);
    const have = new Set(manifest.text);
    const missing = [...new Set(text.join("").replace(/\s/g, ""))].filter((c) => !have.has(c));
    expect(missing).toEqual([]);
  });

  it("is set only through .hg-d, at the one weight it ships", () => {
    const css = fs.readFileSync(CSS, "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
    const rules = [...css.matchAll(/([^{}]+)\{([^{}]*--font-hg-display[^{}]*)\}/g)];
    expect(rules.map((r) => r[1].trim())).toEqual([".hg-d"]);
    expect(rules[0][2]).toMatch(/font-weight:400/);
    expect(rules[0][2]).toMatch(/font-synthesis:none/);
  });
});
