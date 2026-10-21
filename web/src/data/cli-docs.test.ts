import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { CLI_DOCS, SKILL_GROUP_IDS } from "./cli-docs";
import {
  DOC_LOCALES,
  DOC_HTML_LANG,
  DOC_NAV_GROUPS,
  DOC_OG_LOCALE,
  DOC_PAGES,
  docsHref,
} from "@/lib/docs/locales";
import { getDocsToc } from "@/components/cli-docs/docs-route";
import { REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";
import { PUBLIC_SKILL_COUNT, REFERENCE_COUNT, SKILL_COUNT, SUBAGENT_COUNT } from "@/lib/catalog-count";

/** The skills the docs list: the public set (owner decision 2026-10-15), not the whole bundle. */
const ALL_SKILLS: string[] = Object.values(SKILL_GROUP_IDS).flat();

/**
 * What `npx skills add` lists: the skills package.json ships, minus `metadata.internal: true`
 * (the rule scripts/check-counts.mjs and build-registry.mjs apply). The docs name an installed
 * skill the way Claude Code invokes it, `omd:<x>` for the `omd-<x>` folder.
 */
function publicSkillIds(): string[] {
  const repo = join(__dirname, "..", "..", "..");
  const files: string[] = JSON.parse(readFileSync(join(repo, "package.json"), "utf8")).files ?? [];
  return files
    .filter((entry) => entry.startsWith("skills/"))
    .filter((entry) => {
      const frontmatter = /^---\r?\n([\s\S]*?)\r?\n---/.exec(readFileSync(join(repo, entry, "SKILL.md"), "utf8"))?.[1] ?? "";
      const metadata = /^metadata:[ \t]*\r?\n((?:[ \t]+.*(?:\r?\n|$))*)/m.exec(frontmatter)?.[1] ?? "";
      return !/^[ \t]+internal:[ \t]*true[ \t]*$/m.test(metadata);
    })
    .map((entry) => entry.replace(/^skills\//, "").replace(/\/$/, "").replace(/^omd-/, "omd:"));
}

describe("localized CLI docs", () => {
  it("ships every locale with a label for every page and nav group", () => {
    expect(Object.keys(CLI_DOCS).sort()).toEqual([...DOC_LOCALES].sort());
    for (const locale of DOC_LOCALES) {
      const dictionary = CLI_DOCS[locale];
      expect(dictionary.localeName.length).toBeGreaterThan(0);
      for (const page of DOC_PAGES) {
        expect(dictionary.nav[page], `${locale}/${page}`).toBeTruthy();
      }
      for (const group of DOC_NAV_GROUPS) {
        expect(dictionary.navGroups[group.id], `${locale}/${group.id}`).toBeTruthy();
      }
    }
  });

  it("puts every page in exactly one nav group, in reading order", () => {
    expect(DOC_NAV_GROUPS.flatMap((group) => group.pages)).toEqual([...DOC_PAGES]);
  });

  it("keeps the same structure across locales", () => {
    const baseline = CLI_DOCS.en;
    for (const locale of DOC_LOCALES) {
      const dictionary = CLI_DOCS[locale];
      expect(dictionary.overview.outcomes).toHaveLength(baseline.overview.outcomes.length);
      expect(dictionary.overview.next.map((item) => item.page)).toEqual(baseline.overview.next.map((item) => item.page));
      expect(dictionary.gettingStarted.steps.map((step) => step.command)).toEqual(baseline.gettingStarted.steps.map((step) => step.command));
      expect(dictionary.gettingStarted.steps.map((step) => Boolean(step.prompt))).toEqual(baseline.gettingStarted.steps.map((step) => Boolean(step.prompt)));
      expect(dictionary.gettingStarted.channels.map((channel) => channel.command)).toEqual(baseline.gettingStarted.channels.map((channel) => channel.command));
      expect(dictionary.gettingStarted.rawLinks).toHaveLength(baseline.gettingStarted.rawLinks.length);
      expect(dictionary.demo.formats).toHaveLength(3);
      expect(dictionary.demo.steps).toHaveLength(6);
      expect(dictionary.demo.proof).toHaveLength(6);
      expect(dictionary.demo.guardrails).toHaveLength(4);
      expect(dictionary.skills.groups.map((group) => group.skills)).toEqual(baseline.skills.groups.map((group) => group.skills));
    }
  });

  it("lists exactly the public skills, and describes each one in every locale", () => {
    expect(new Set(ALL_SKILLS).size).toBe(PUBLIC_SKILL_COUNT);
    expect(PUBLIC_SKILL_COUNT).toBeLessThan(SKILL_COUNT);
    expect([...ALL_SKILLS].sort()).toEqual(publicSkillIds().sort());
    expect(ALL_SKILLS).toContain("omd:autopilot");
    for (const locale of DOC_LOCALES) {
      const descriptions = CLI_DOCS[locale].skills.descriptions;
      expect(Object.keys(descriptions).sort(), locale).toEqual([...ALL_SKILLS].sort());
      for (const skill of ALL_SKILLS) expect(descriptions[skill]?.trim().length, `${locale} ${skill}`).toBeGreaterThan(8);
    }
  });

  it("links /hangul to its launch page: /ko/hangul from the Korean docs, the English /hangul elsewhere", () => {
    // A fixed URL contract with the launch page (docs/HANGUL_LAUNCH_PLAN_2026-10-21.md).
    for (const locale of DOC_LOCALES) {
      const pages = CLI_DOCS[locale].skills.pages;
      expect(Object.keys(pages), locale).toEqual(["hangul"]);
      expect(pages.hangul.href, locale).toBe(locale === "ko" ? "/ko/hangul" : "/hangul");
      expect(pages.hangul.label, locale).toContain("/hangul");
      for (const skill of Object.keys(pages)) expect(ALL_SKILLS, `${locale} ${skill}`).toContain(skill);
    }
  });

  it("states the bundle and archive counts the build actually ships", () => {
    const cursorSkillCount = SKILL_COUNT - 1;
    for (const locale of DOC_LOCALES) {
      const dictionary = CLI_DOCS[locale];
      const cursor = dictionary.gettingStarted.channels.find((channel) => channel.name === "Cursor");

      expect(dictionary.overview.lead, locale).toContain(String(REFERENCE_COUNT));
      // The installer writes the whole bundle; the overview says so and names the public part.
      expect(dictionary.overview.cli.body, locale).toContain(String(SKILL_COUNT));
      expect(dictionary.overview.cli.body, locale).toContain(String(PUBLIC_SKILL_COUNT));
      expect(dictionary.overview.cli.body, locale).toContain(String(SUBAGENT_COUNT));
      // The skills page lists the public set and states the bundle once.
      expect(dictionary.skills.lead, locale).toContain(String(PUBLIC_SKILL_COUNT));
      expect(dictionary.skills.lead, locale).toContain(String(SKILL_COUNT));
      expect(dictionary.skills.lead, locale).toContain(String(SUBAGENT_COUNT));
      expect(cursor?.body, locale).toContain(String(cursorSkillCount));
    }
  });

  it("discloses the quality tiers with their real counts in every locale", () => {
    for (const locale of DOC_LOCALES) {
      const dictionary = CLI_DOCS[locale];
      const quality = dictionary.overview.qualityBody;

      expect(quality, locale).toContain("verified_v2");
      expect(quality, locale).toContain("partial");
      expect(quality, locale).toContain("legacy");
      expect(quality, locale).toContain(String(REFERENCE_QUALITY_COUNTS.verified_v2));
      expect(quality, locale).toContain(String(REFERENCE_QUALITY_COUNTS.partial));
      expect(quality, locale).toContain(String(REFERENCE_QUALITY_COUNTS.legacy_snapshot));
      expect(dictionary.demo.steps.map((step) => `${step.title} ${step.body}`).join(" "), locale).toContain("verified_v2");
    }
  });

  it("builds stable localized paths", () => {
    expect(docsHref("ko")).toBe("/docs/ko");
    expect(docsHref("zh-tw", "getting-started")).toBe("/docs/zh-tw/getting-started");
    expect(docsHref("ja", "demo")).toBe("/docs/ja/demo");
  });

  it("publishes region-qualified Open Graph locales", () => {
    expect(DOC_OG_LOCALE).toEqual({
      en: "en_US",
      ko: "ko_KR",
      ja: "ja_JP",
      "zh-cn": "zh_CN",
      "zh-tw": "zh_TW",
    });
  });

  it("provides a truthful server-rendered language for every docs body", () => {
    expect(DOC_HTML_LANG).toEqual({
      en: "en",
      ko: "ko",
      ja: "ja",
      "zh-cn": "zh-CN",
      "zh-tw": "zh-TW",
    });
  });

  it("does not inherit English copy into translated locales", () => {
    const en = CLI_DOCS.en;
    for (const locale of DOC_LOCALES.filter((item) => item !== "en")) {
      const dictionary = CLI_DOCS[locale];
      expect(dictionary.metaDescription).not.toBe(en.metaDescription);
      expect(dictionary.overview.lead).not.toBe(en.overview.lead);
      expect(dictionary.overview.archive.body).not.toBe(en.overview.archive.body);
      expect(dictionary.overview.qualityBody).not.toBe(en.overview.qualityBody);
      expect(dictionary.gettingStarted.lead).not.toBe(en.gettingStarted.lead);
      expect(dictionary.gettingStarted.steps.map((step) => step.prompt)).not.toEqual(en.gettingStarted.steps.map((step) => step.prompt));
      expect(dictionary.gettingStarted.rawBody).not.toBe(en.gettingStarted.rawBody);
      expect(dictionary.skills.lead).not.toBe(en.skills.lead);
      expect(dictionary.skills.descriptions["omd:init"]).not.toBe(en.skills.descriptions["omd:init"]);
      expect(dictionary.demo.title).not.toBe(en.demo.title);
      expect(dictionary.demo.starterPrompt).not.toBe(en.demo.starterPrompt);
    }
  });

  it("points each locale at its own agent index", () => {
    const own = { en: "/llms.txt", ko: "/llms.ko.txt", ja: "/llms.ja.txt", "zh-cn": "/llms.zh-cn.txt", "zh-tw": "/llms.zh-tw.txt" } as const;
    for (const locale of DOC_LOCALES) {
      const hrefs = CLI_DOCS[locale].gettingStarted.rawLinks.map((link) => link.href);
      expect(hrefs, locale).toEqual(["/toss/design.md", own[locale], "/llms-full.txt"]);
    }
  });

  it("writes the Korean docs in 해요체", () => {
    // Prompts are what a user types to an agent (반말), and the anti-slop "before"
    // specimens are deliberately bad copy; everything else speaks 해요체.
    const skip = new Set(["prompt", "starterPrompt", "beforeTitle", "beforeBody", "beforeSignals", "command", "href", "label", "ruleIds", "id", "skills"]);
    const formal: string[] = [];
    const walk = (value: unknown, key: string) => {
      if (skip.has(key)) return;
      if (typeof value === "string") {
        if (/니다(?=[.。!?\s"”’)]|$)/.test(value)) formal.push(`${key}: ${value}`);
      } else if (Array.isArray(value)) value.forEach((item) => walk(item, key));
      else if (value && typeof value === "object") for (const [k, v] of Object.entries(value)) walk(v, k);
    };
    walk(CLI_DOCS.ko, "ko");
    expect(formal).toEqual([]);
  });

  it("ships independent, locale-native anti-slop guidance in all five locales", () => {
    const guides = DOC_LOCALES.map((locale) => CLI_DOCS[locale].antiSlop);

    expect(new Set(guides).size).toBe(DOC_LOCALES.length);
    expect(new Set(guides.map((guide) => guide.examples)).size).toBe(DOC_LOCALES.length);
    for (const [index, guide] of guides.entries()) {
      expect(guide.title, DOC_LOCALES[index]).toBeTruthy();
      expect(guide.examples, DOC_LOCALES[index]).toHaveLength(3);
      expect(guide.classifications, DOC_LOCALES[index]).toHaveLength(3);
      expect(guide.lenses, DOC_LOCALES[index]).toHaveLength(10);
      expect(guide.directions, DOC_LOCALES[index]).toHaveLength(3);
      expect(guide.sources.length, DOC_LOCALES[index]).toBeGreaterThanOrEqual(18);
      expect(new Set(guide.lenses.map((lens) => lens.id)).size, DOC_LOCALES[index]).toBe(10);
      expect(guide.sources.map((source) => source.href), DOC_LOCALES[index]).toEqual(
        expect.arrayContaining([
          "https://primer.style/product/ui-patterns/",
          "https://carbondesignsystem.com/components/data-table/usage/",
          "https://fluent2.microsoft.design/components/web/react/core/card/usage",
          "https://designsystem.digital.gov/components/card/",
        ]),
      );
    }

    expect(JSON.stringify(CLI_DOCS.en.antiSlop)).toContain("product");
    expect(JSON.stringify(CLI_DOCS.ko.antiSlop)).toContain("판단");
    expect(JSON.stringify(CLI_DOCS.ja.antiSlop)).toContain("AI エージェント");
    expect(JSON.stringify(CLI_DOCS["zh-cn"].antiSlop)).toContain("AI 编程助手");
    expect(JSON.stringify(CLI_DOCS["zh-tw"].antiSlop)).toContain("AI 程式助理");
    expect(CLI_DOCS["zh-tw"].antiSlop.title).not.toBe(CLI_DOCS["zh-cn"].antiSlop.title);
  });

  it("keeps the live-demo contract honest in every locale", () => {
    for (const locale of DOC_LOCALES) {
      const demo = CLI_DOCS[locale].demo;
      expect(demo.formats.every((format) => format.duration.length > 0)).toBe(true);
      expect(demo.steps.some((step) => step.command?.includes("doctor"))).toBe(true);
      expect(demo.starterPrompt).toContain("DESIGN.md");
      expect(demo.guardrails.map((item) => item.body).join(" ")).toMatch(
        /installer|설치기|インストーラー|安装器|安裝器/,
      );
    }
  });

  it("keeps doctor in getting started, where the old troubleshooting URL now lands", () => {
    for (const locale of DOC_LOCALES) {
      const steps = CLI_DOCS[locale].gettingStarted.steps;
      expect(steps.some((step) => step.command?.endsWith(" doctor")), locale).toBe(true);
    }
  });

  it("has a non-empty table of contents with unique ids for every route", () => {
    for (const locale of DOC_LOCALES) {
      for (const page of DOC_PAGES) {
        const toc = getDocsToc(CLI_DOCS[locale], page);
        expect(toc.length, `${locale}/${page}`).toBeGreaterThan(0);
        expect(new Set(toc.map((item) => item.id)).size, `${locale}/${page}`).toBe(toc.length);
        expect(toc.every((item) => item.label.trim().length > 0), `${locale}/${page}`).toBe(true);
      }
    }
  });

  it("links the raw-file section the old docs-for-AI URL now lands on", () => {
    for (const locale of DOC_LOCALES) {
      expect(getDocsToc(CLI_DOCS[locale], "getting-started").map((item) => item.id), locale).toContain("without-cli");
    }
  });
});
