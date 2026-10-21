import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import transcript from "@/data/cli-transcript.json";
import { CliSection, INSTALL, boxLines, installRows } from "@/components/brand-a/cli-section";
import { installBeats, installFrame } from "@/components/brand-a/cli-steps";
import { fmt, getCopy } from "@/components/brand-a/copy";
import { getR10 } from "@/components/brand-a/copy/r10";
import { getR11Hero } from "@/components/brand-a/copy/r11-hero";

/**
 * Round 13 CLI section (owner 2026-10-21): the install terminal types the command and streams the
 * real output, the two steps are rows (no sticky stage, so no empty bands and no jump), and the
 * apply trace carries no brand-face note.
 */
const LOCALES = ["en", "ko", "ja", "zh-tw"] as const;
const [install] = transcript.runs;
const WEB = path.resolve(__dirname, "..");
/** cli.css declarations, comments dropped (they may name what was removed) */
const css = fs.readFileSync(path.join(WEB, "src/components/brand-a/cli.css"), "utf8").replace(/\/\*[\s\S]*?\*\//g, "");
const visible = (html: string) => html.replace(/<[^>]+>/g, " ");
const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/'/g, "&#x27;").replace(/"/g, "&quot;");
const render = (l: (typeof LOCALES)[number]) =>
  renderToStaticMarkup(createElement(CliSection, { locale: l, c: getCopy(l), r: getR10(l), total: 521, skills: 31, skillsHref: "#" }));

describe("the streamed install is the transcript, in order, with its one cut marked", () => {
  it("every row is a transcript line in its order; the cut is one row that counts what it leaves out", () => {
    for (const l of LOCALES) {
      const gap = fmt(getCopy(l).use.gap, { n: install.elided });
      const rows = installRows(gap);
      expect(rows.filter((r) => !r.gap).map((r) => r.t), l).toEqual([...boxLines(install.lines), ...boxLines(install.tail)]);
      const cuts = rows.flatMap((r, i) => (r.gap ? [i] : []));
      expect(cuts, l).toEqual([boxLines(install.lines).length]);
      expect(rows[cuts[0]].t, l).toBe(`│  … ${gap}`);
      expect(rows[cuts[0]].t, l).toContain(String(install.elided));
      expect(rows.at(-1)?.t, l).toMatch(/^└ {2}Done\. \d+ skills/);
      for (const r of rows) expect([undefined, "sq-ta", "sq-tw", "sq-tp"], r.t).toContain(r.c);
    }
  });

  it("types at a hand's pace, pauses before Enter, holds at the cut, and ends on Done in a few seconds", () => {
    const rows = installRows("x");
    const t = installBeats(INSTALL, rows);
    const n = INSTALL.length;
    expect(t.length).toBe(n + 2 + rows.length);
    for (let i = 1; i < t.length; i++) expect(t[i], `beat ${i}`).toBeGreaterThan(t[i - 1]);
    // the characters: 35–60 ms apart
    for (let i = 2; i <= n; i++) expect(t[i] - t[i - 1], `key ${i}`).toBeGreaterThanOrEqual(35);
    for (let i = 2; i <= n; i++) expect(t[i] - t[i - 1], `key ${i}`).toBeLessThanOrEqual(60);
    // a small pause before Enter, longer than any keystroke
    expect(t[n + 1] - t[n]).toBeGreaterThanOrEqual(250);
    // the longest wait in the output is the cut, standing for the install's work
    const out = rows.map((_, k) => t[n + 2 + k] - t[n + 1 + k]);
    const cut = rows.findIndex((r) => r.gap);
    expect(Math.max(...out)).toBe(out[cut]);
    expect(t.at(-1)).toBeLessThan(7000);
  });

  it("a beat maps to characters typed, Enter, then rows shown", () => {
    const n = INSTALL.length, rows = installRows("x").length;
    expect(installFrame(0, n)).toEqual({ typed: 0, entered: false, shown: 0 });
    expect(installFrame(7, n)).toEqual({ typed: 7, entered: false, shown: 0 });
    expect(installFrame(n, n)).toEqual({ typed: n, entered: false, shown: 0 });
    expect(installFrame(n + 1, n)).toEqual({ typed: n, entered: true, shown: 0 });
    expect(installFrame(n + 1 + rows, n)).toEqual({ typed: n, entered: true, shown: rows });
  });
});

describe("rendered: two rows, the finished runs, no font note", () => {
  it("each step is a row holding its text and its own visual", () => {
    for (const l of LOCALES) {
      const html = render(l);
      const h = getR11Hero(l);
      const list = html.match(/<ol class="sq-cli">([\s\S]*)<\/ol>/)?.[1] ?? "";
      const rows = list.split(/<li class="sq-cli-row"/).slice(1);
      expect(rows.length, l).toBe(2);
      expect(rows[0], l).toContain(`<h3 class="sq-cli-t">${esc(h.cli.steps[0].t)}</h3>`);
      expect(rows[0], l).toContain(`id="cli-term"`);
      expect(rows[0], l).not.toContain(`id="cli-apply"`);
      expect(rows[1], l).toContain(`<h3 class="sq-cli-t">${esc(h.cli.steps[1].t)}</h3>`);
      expect(rows[1], l).toContain(`id="cli-apply"`);
      // no active-step state left over from the sticky stage
      expect(html, l).not.toMatch(/sq-on\b|data-on=|sq-cli-scene/);
    }
  });

  it("the server renders the finished install: the whole command, every row, Done; the copy button carries the command", () => {
    for (const l of LOCALES) {
      const html = render(l);
      const rows = installRows(fmt(getCopy(l).use.gap, { n: install.elided }));
      for (const r of rows) expect(html, `${l}: ${r.t}`).toContain(esc(r.t));
      expect(html, l).not.toMatch(/sq-tc-rest|sq-tc-car|sq-to-cur/); // nothing left to type, no cursor
      expect(visible(html).replace(/\s+/g, " "), l).toContain(INSTALL);
      expect(html, l).toContain(`data-copy="${INSTALL}"`);
      // the replay control: named in the page language, hidden until a run has played
      expect(html, l).toContain(`class="sq-term-re sq-re-wait" aria-label="${esc(getR11Hero(l).cli.replay)}"`);
      // the pre-hydration script hides both runs that are about to play
      expect(html, l).toMatch(/\["cli-term","cli-apply"\]\.forEach/);
    }
  });

  it("the apply trace carries no brand-face note", () => {
    for (const l of LOCALES) {
      const html = render(l);
      expect(html, l).not.toContain("sq-at-note");
      const text = visible(html);
      // the note named the face it could not load and its substitute; neither appears in the section
      expect(text, l).not.toContain("Toss Product Sans");
      expect(text, l).not.toContain("Pretendard");
      expect(text, l).not.toContain("IBM Plex");
    }
  });
});

describe("layout: rows, fixed-height visuals", () => {
  it("nothing is pinned and nothing is a spacer", () => {
    expect(css).not.toMatch(/sticky/);
    expect(css).not.toMatch(/\d+vh/);
  });
  it("the terminal and the apply panel have a fixed height on wide screens, the terminal on phones too", () => {
    const base = css.slice(0, css.indexOf("@media"));
    const phone = css.slice(css.indexOf("@media (max-width:900px)"));
    expect(base).toMatch(/\.sq-term\{[^}]*\bheight:\d+px/);
    expect(base).toMatch(/\.sq-apply\{[^}]*\bheight:\d+px/);
    expect(phone).toMatch(/\.sq-term\{[^}]*\bheight:\d+px/);
  });
});
