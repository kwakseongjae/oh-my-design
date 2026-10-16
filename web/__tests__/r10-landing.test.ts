import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import transcript from "@/data/cli-transcript.json";
import { TOSS_VALUES, CHAT_PATH } from "@/components/brand-a/chat-demo";
import { doctorLines } from "@/components/brand-a/cli-section";
import { getR10 } from "@/components/brand-a/copy/r10";

/**
 * Round 10 (owner, 2026-10-16; docs/research/2026-10-17-direction/DIRECTIONS.md): Iris palette,
 * B's radius system (the square-chrome rule is retired), the illustrative chat on real Toss
 * values, the CLI transcript cut only as its caption says, and the FAQ in four locales.
 */
const WEB = path.resolve(__dirname, "..");
const read = (p: string) => fs.readFileSync(path.join(WEB, p), "utf8");
const LOCALES = ["en", "ko", "ja", "zh-tw"] as const;

describe("brand tokens: Iris and the radius system", () => {
  const css = read("src/styles/brand-a.css");
  it("primary is Iris 600 and the ramp is the documented one", () => {
    expect(css).toMatch(/--sq-p600:\s*#6749e2/);
    expect(css).toMatch(/--sq-primary:\s*var\(--sq-p600\)/);
    expect(css).toMatch(/--sq-ink-2:\s*var\(--sq-n600\)/); // body text 6.82:1; n500 is icon-only
    expect(css).toMatch(/--sq-n600:\s*#5a5a63/);
  });
  it("controls 14, pill, cards 20, panels 28; no square chrome", () => {
    expect(css).toMatch(/--sq-r-ctl:\s*14px/);
    expect(css).toMatch(/--sq-r-pill:\s*999px/);
    expect(css).toMatch(/--sq-r-card:\s*20px/);
    expect(css).toMatch(/--sq-r-panel:\s*28px/);
    expect(css).not.toMatch(/--sq-radius:\s*0/);
  });
  it("gamboge is gone from the site's code", () => {
    const files = [
      "src/styles/brand-a.css", "src/app/globals.css", "src/app/global-not-found.tsx",
      "src/components/analytics-consent.tsx", "src/components/status-badge.tsx",
      ...fs.readdirSync(path.join(WEB, "src/components/brand-a")).filter((f) => /\.(css|tsx|ts)$/.test(f)).map((f) => `src/components/brand-a/${f}`),
    ];
    for (const f of files) {
      expect(/gamboge|#f2a900/i.test(read(f)), f).toBe(false);
    }
  });
});

describe("hero chat", () => {
  const toss = read("references/toss/DESIGN.md");
  const fm = toss.slice(0, toss.indexOf("\n---", 4));
  it("uses twelve Toss values, each in the Toss DESIGN.md frontmatter", () => {
    expect(TOSS_VALUES).toHaveLength(12);
    const block = (key: string) => {
      const i = fm.search(new RegExp(`^\\s*${key}:`, "m"));
      expect(i, key).toBeGreaterThanOrEqual(0);
      return fm.slice(i, i + 400);
    };
    for (const { k, v } of TOSS_VALUES) {
      const parts = k.split(".");
      if (parts[0] === "colors") expect(fm).toMatch(new RegExp(`^\\s+${parts[1]}:\\s*'${v}'`, "m"));
      else if (parts[0] === "rounded") expect(block("rounded")).toMatch(new RegExp(`\\b${parts[1]}:\\s*${v}`));
      else if (parts[0] === "typography") {
        const [size, weight, lh] = v.split(" / ");
        const ty = fm.slice(fm.search(/^typography:/m));
        const at = ty.search(new RegExp(`^  ${parts[1]}:`, "m"));
        expect(at, k).toBeGreaterThan(0);
        const b = ty.slice(at, at + 200);
        expect(b).toMatch(new RegExp(`fontSize:\\s*${size}`));
        expect(b).toMatch(new RegExp(`fontWeight:\\s*${weight}`));
        expect(b).toMatch(new RegExp(`lineHeight:\\s*${lh}`));
      } else {
        const b = block("  tds-button");
        const field = { height: "height", rounded: "rounded", typography: "typography" }[parts[2]]!;
        expect(b, k).toMatch(new RegExp(`${field}:\\s*${v}`));
      }
    }
  });
  it("the trace reads the path install-skills writes in a user project", () => {
    expect(CHAT_PATH.dir + CHAT_PATH.file).toBe(".claude/data/references/toss/DESIGN.md");
    expect(fs.readFileSync(path.join(WEB, "../src/cli/install-skills.ts"), "utf8")).toContain("`.claude/data/references/<id>/DESIGN.md`");
  });
  it("the prompt is localized and every locale labels the chat as an example", () => {
    const prompts = LOCALES.map((l) => getR10(l).chat.prompt);
    expect(new Set(prompts).size).toBe(4);
    for (const l of LOCALES) expect(getR10(l).chat.note.length).toBeGreaterThan(20);
  });
});

describe("CLI transcript", () => {
  const all = transcript.runs[1].lines;
  it("keeps the locale's example prompt, drops the other and the notes the caption names", () => {
    const flat = (l: (typeof LOCALES)[number]) => doctorLines(l).flat().join("\n");
    expect(flat("ko")).toMatch(/KR {2}토스/);
    expect(flat("ko")).not.toMatch(/\bEN {2}Set up/);
    for (const l of ["en", "ja", "zh-tw"] as const) {
      expect(flat(l)).toMatch(/EN {2}Set up/);
      expect(flat(l)).not.toMatch(/KR {2}/);
    }
    for (const l of LOCALES) {
      expect(flat(l)).not.toMatch(/Render checks|Start a new agent session|Codex also requires|[╮╯]/);
    }
  });
  it("prints transcript text only (box rows lose just their border and padding)", () => {
    for (const l of LOCALES) for (const line of doctorLines(l).flat()) {
      const body = line.replace(/^│/, "").trim();
      expect(all.some((src) => src.includes(body)), line).toBe(true);
    }
  });
});

describe("FAQ", () => {
  it("nine questions in every locale, three per category, written per locale", () => {
    for (const l of LOCALES) {
      const items = getR10(l).faq.items;
      expect(items).toHaveLength(9);
      for (const c of ["basics", "use", "cost"] as const) expect(items.filter((x) => x.cat === c), `${l} ${c}`).toHaveLength(3);
    }
    const firstQ = LOCALES.map((l) => getR10(l).faq.items[0].q);
    expect(new Set(firstQ).size).toBe(4);
  });
});
