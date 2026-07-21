import { describe, expect, it } from "vitest";
import { CLI_DOCS } from "./cli-docs";
import {
  DOC_LOCALES,
  DOC_HTML_LANG,
  DOC_OG_LOCALE,
  DOC_PAGES,
  docsHref,
} from "@/lib/docs/locales";
import { getDocsToc } from "@/components/cli-docs/docs-route";
import { REFERENCE_QUALITY_COUNTS } from "@/data/reference-quality.generated";

describe("localized CLI docs", () => {
  it("ships every requested locale with every page label", () => {
    expect(Object.keys(CLI_DOCS).sort()).toEqual([...DOC_LOCALES].sort());
    for (const locale of DOC_LOCALES) {
      const dictionary = CLI_DOCS[locale];
      expect(dictionary.localeName.length).toBeGreaterThan(0);
      for (const page of DOC_PAGES) {
        expect(dictionary.nav[page], `${locale}/${page}`).toBeTruthy();
      }
    }
  });

  it("keeps the same outcome and skill-group shape across locales", () => {
    const baseline = CLI_DOCS.en;
    for (const locale of DOC_LOCALES) {
      expect(CLI_DOCS[locale].overview.outcomes).toHaveLength(baseline.overview.outcomes.length);
      expect(CLI_DOCS[locale].demo.formats).toHaveLength(3);
      expect(CLI_DOCS[locale].demo.steps).toHaveLength(6);
      expect(CLI_DOCS[locale].demo.proof).toHaveLength(6);
      expect(CLI_DOCS[locale].demo.guardrails).toHaveLength(4);
      expect(CLI_DOCS[locale].skills.groups.map((group) => group.skills)).toEqual(
        baseline.skills.groups.map((group) => group.skills),
      );
      expect(CLI_DOCS[locale].troubleshooting.cases).toHaveLength(
        baseline.troubleshooting.cases.length,
      );
    }
  });

  it("builds stable localized paths", () => {
    expect(docsHref("ko")).toBe("/docs/ko");
    expect(docsHref("zh-tw", "getting-started")).toBe(
      "/docs/zh-tw/getting-started",
    );
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

  it("presents the 440-reference catalog as quality graded in every locale", () => {
    const cursorRuleTerms = {
      en: "project rule",
      ko: "프로젝트 규칙",
      ja: "プロジェクトルール",
      "zh-cn": "项目规则",
      "zh-tw": "專案規則",
    } satisfies Record<(typeof DOC_LOCALES)[number], string>;

    for (const locale of DOC_LOCALES) {
      const dictionary = CLI_DOCS[locale];
      const qualityDisclosure = `${dictionary.overview.truthBody} ${dictionary.ui.pipelineNote}`;

      expect(qualityDisclosure, locale).toContain("verified_v2");
      expect(qualityDisclosure, locale).toContain(String(REFERENCE_QUALITY_COUNTS.verified_v2));
      expect(qualityDisclosure, locale).toContain(String(REFERENCE_QUALITY_COUNTS.partial));
      expect(qualityDisclosure, locale).toContain(String(REFERENCE_QUALITY_COUNTS.legacy_snapshot));
      expect(dictionary.overview.truthBody, locale).toContain(String(REFERENCE_QUALITY_COUNTS.total));
      expect(dictionary.demo.steps.map((step) => `${step.title} ${step.body}`).join(" "), locale)
        .toContain("verified_v2");
      expect(dictionary.overview.truthBody, locale).toContain("Cursor");
      expect(dictionary.overview.truthBody.toLowerCase(), locale).toContain(
        cursorRuleTerms[locale].toLowerCase(),
      );
    }
  });

  it("does not inherit English case-study or builder copy into translated locales", () => {
    for (const locale of DOC_LOCALES.filter((item) => item !== "en")) {
      expect(CLI_DOCS[locale].showcase.prompt).not.toBe(CLI_DOCS.en.showcase.prompt);
      expect(CLI_DOCS[locale].showcase.verification).not.toEqual(
        CLI_DOCS.en.showcase.verification,
      );
      expect(CLI_DOCS[locale].showcase.previewStats).not.toEqual(
        CLI_DOCS.en.showcase.previewStats,
      );
      expect(CLI_DOCS[locale].showcase.productCase.prompt).not.toBe(
        CLI_DOCS.en.showcase.productCase.prompt,
      );
      expect(CLI_DOCS[locale].showcase.productCase.videoSummary).not.toBe(
        CLI_DOCS.en.showcase.productCase.videoSummary,
      );
      expect(CLI_DOCS[locale].ai.builderTitle).not.toBe(
        CLI_DOCS.en.ai.builderTitle,
      );
      expect(CLI_DOCS[locale].ui.pipeline).not.toBe(CLI_DOCS.en.ui.pipeline);
      expect(CLI_DOCS[locale].demo.title).not.toBe(CLI_DOCS.en.demo.title);
      expect(CLI_DOCS[locale].demo.starterPrompt).not.toBe(
        CLI_DOCS.en.demo.starterPrompt,
      );
    }
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
    expect(CLI_DOCS["zh-tw"].antiSlop.title).not.toBe(
      CLI_DOCS["zh-cn"].antiSlop.title,
    );
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

  it("scopes the controlled showcase evidence honestly in every locale", () => {
    for (const locale of DOC_LOCALES) {
      const productCase = CLI_DOCS[locale].showcase.productCase;
      expect(productCase.metrics).toHaveLength(4);
      expect(productCase.metrics.join(" ")).toContain("18");
      expect(productCase.historicalNote).toContain("18");
      expect(productCase.historicalNote).toContain("MCP");
      expect(productCase.disclosure).toContain("Apple");
      expect(productCase.beforeAlt.length).toBeGreaterThan(15);
      expect(productCase.afterAlt.length).toBeGreaterThan(15);
      expect(productCase.videoSummary.length).toBeGreaterThan(15);
    }
  });

  it("has a non-empty table of contents for every generated route", () => {
    for (const locale of DOC_LOCALES) {
      for (const page of DOC_PAGES) {
        const toc = getDocsToc(CLI_DOCS[locale], page);
        expect(Array.isArray(toc), `${locale}/${page}`).toBe(true);
        expect(toc.length, `${locale}/${page}`).toBeGreaterThan(0);
        expect(new Set(toc.map((item) => item.id)).size, `${locale}/${page}`).toBe(toc.length);
      }
    }
  });
});
