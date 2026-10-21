import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { describe, expect, it } from "vitest";
import transcript from "@/data/cli-transcript.json";
import { CliSection, HOOK_COUNT, INSTALL, PUBLIC_SKILLS, installScript } from "@/components/brand-a/cli-section";
import { PUBLIC_SKILL_COUNT, REFERENCE_COUNT, SKILL_COUNT, SUBAGENT_COUNT } from "@/lib/catalog-count";
import { installBeats, installFrame } from "@/components/brand-a/cli-steps";
import { fmt, getCopy } from "@/components/brand-a/copy";
import { getR10 } from "@/components/brand-a/copy/r10";
import { getR11Hero } from "@/components/brand-a/copy/r11-hero";

/**
 * Round 13 CLI section (owner 2026-10-21): the install terminal types the command and streams an
 * abstract of what it does (the agents it finds, what each gets, every skill, the archive), the two
 * steps are rows (no sticky stage, so no empty bands and no jump), and the apply trace carries no
 * brand-face note.
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

describe("the streamed install: one command, every agent in its own format, every skill", () => {
  const rows = installScript();
  const text = rows.map((r) => r.t).join("\n");
  const ROOT = path.resolve(WEB, "..");

  it("opens on the agents it finds, ends on Done, and only uses the terminal's tones", () => {
    expect(rows[0]).toEqual({ t: "◆  Coding agents in this project", c: "sq-tp" });
    expect(rows.at(-1)?.t).toMatch(/^└ {2}Done\./);
    for (const r of rows) expect([undefined, "sq-ta", "sq-tw", "sq-tp"], r.t).toContain(r.c);
  });

  it("every number is the installer's own: catalog counts, and the hook count from the real run", () => {
    expect(HOOK_COUNT).toBe(Number(/(\d+) hooks/.exec(install.tail.join("\n"))?.[1]));
    expect(text).toContain(`Claude Code   ${SKILL_COUNT} skills · ${SUBAGENT_COUNT} sub-agents · ${HOOK_COUNT} hooks`);
    expect(text).toContain(`Codex         ${SKILL_COUNT} skills · ${SUBAGENT_COUNT} sub-agents`);
    expect(text).toContain(`${PUBLIC_SKILL_COUNT} public, ${SKILL_COUNT} in the bundle`);
    expect(text).toContain(`+ ${SKILL_COUNT - PUBLIC_SKILLS.length} more`);
    expect(text).toContain(`${REFERENCE_COUNT} references`);
  });

  it("what each agent gets matches the installer: sub-agents for Claude Code, Codex and OpenCode, hooks for Claude Code only", () => {
    const src = fs.readFileSync(path.join(ROOT, "src/cli/install-skills.ts"), "utf8");
    for (const ch of ["claude", "codex", "opencode"]) expect(src).toContain(`installAgentFile(packageRoot, installRoot, '${ch}'`);
    expect(src).not.toContain("installAgentFile(packageRoot, installRoot, 'cursor'");
    expect(src).toMatch(/join\(projectRoot, '\.claude', 'hooks', filename\)/);
    expect(text).toMatch(/Cursor {8}Agent Skills · DESIGN\.md rule/);
    expect(text).not.toMatch(/Cursor .*sub-agents|Codex .*hooks/);
  });

  it("the public skills are exactly the skills npx skills lists (no metadata.internal)", () => {
    const listed = fs
      .readdirSync(path.join(ROOT, "skills"))
      .filter((d) => fs.existsSync(path.join(ROOT, "skills", d, "SKILL.md")))
      .filter((d) => !/^\s*internal:\s*true\s*$/m.test(fs.readFileSync(path.join(ROOT, "skills", d, "SKILL.md"), "utf8").split(/^---\s*$/m)[1] ?? ""));
    expect([...listed].sort()).toEqual([...PUBLIC_SKILLS].sort());
    expect(PUBLIC_SKILLS.length).toBe(PUBLIC_SKILL_COUNT);
    for (const n of PUBLIC_SKILLS) expect(text).toContain(n);
  });

  it("types at a hand's pace, pauses before Enter, holds where the install works, and ends on Done in a few seconds", () => {
    const t = installBeats(INSTALL, rows);
    const n = INSTALL.length;
    expect(t.length).toBe(n + 2 + rows.length);
    for (let i = 1; i < t.length; i++) expect(t[i], `beat ${i}`).toBeGreaterThan(t[i - 1]);
    for (let i = 2; i <= n; i++) expect(t[i] - t[i - 1], `key ${i}`).toBeGreaterThanOrEqual(35);
    for (let i = 2; i <= n; i++) expect(t[i] - t[i - 1], `key ${i}`).toBeLessThanOrEqual(60);
    expect(t[n + 1] - t[n]).toBeGreaterThanOrEqual(250);
    const out = rows.map((_, k) => t[n + 2 + k] - t[n + 1 + k]);
    expect(Math.max(...out)).toBe(out[rows.findIndex((r) => r.hold)]);
    expect(t.at(-1)).toBeLessThan(7000);
  });

  it("a beat maps to characters typed, Enter, then rows shown", () => {
    const n = INSTALL.length;
    expect(installFrame(0, n)).toEqual({ typed: 0, entered: false, shown: 0 });
    expect(installFrame(7, n)).toEqual({ typed: 7, entered: false, shown: 0 });
    expect(installFrame(n, n)).toEqual({ typed: n, entered: false, shown: 0 });
    expect(installFrame(n + 1, n)).toEqual({ typed: n, entered: true, shown: 0 });
    expect(installFrame(n + 1 + rows.length, n)).toEqual({ typed: n, entered: true, shown: rows.length });
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
      const rows = installScript();
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
