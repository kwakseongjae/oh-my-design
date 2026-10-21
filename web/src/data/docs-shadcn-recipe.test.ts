import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { CLI_DOCS } from "./cli-docs";
import { SHADCN_RECIPE, SHADCN_RUN_EXCERPT, SHADCN_SKILL_INSTALL } from "./docs-shadcn-recipe";
import { DOC_LOCALES } from "@/lib/docs/locales";
import { docsPageMarkdown } from "@/lib/docs/page-markdown";

const REPO = join(__dirname, "..", "..", "..");

describe("shadcn recipe docs page", () => {
  it("uses shadcn's documented install command and the live raw DESIGN.md path", () => {
    // shadcn-ui/ui apps/v4/content/docs/(root)/skills.mdx: `npx skills add shadcn/ui`.
    expect(SHADCN_SKILL_INSTALL).toBe("npx skills add shadcn/ui");
    for (const locale of DOC_LOCALES) {
      const commands = SHADCN_RECIPE[locale].steps.map((step) => step.command).filter(Boolean);
      expect(commands, locale).toEqual([
        "curl -o DESIGN.md https://oh-my-design.kr/toss/design.md",
        "npx skills add shadcn/ui",
      ]);
    }
  });

  it("quotes the real run verbatim and keeps the run files it cites", () => {
    const runDir = join(REPO, "docs/research/2026-10-14-referral/shadcn-run");
    const report = readFileSync(join(runDir, "REPORT.md"), "utf8");
    for (const passage of SHADCN_RUN_EXCERPT.split("\n\n")) {
      expect(report).toContain(passage);
    }
    for (const file of ["EXTRACTION.md", "PROMPT.txt", "run-meta.json", "globals.after.css", "button.after.tsx"]) {
      expect(existsSync(join(runDir, file)), file).toBe(true);
    }
  });

  it("ships its own copy in every locale, merged into the docs dictionary and nav", () => {
    for (const locale of DOC_LOCALES) {
      expect(CLI_DOCS[locale].shadcn).toBe(SHADCN_RECIPE[locale]);
      expect(CLI_DOCS[locale].nav.shadcn).toBe(SHADCN_RECIPE[locale].navLabel);
      if (locale !== "en") {
        expect(SHADCN_RECIPE[locale].title, locale).not.toBe(SHADCN_RECIPE.en.title);
        expect(SHADCN_RECIPE[locale].limits, locale).not.toEqual(SHADCN_RECIPE.en.limits);
      }
      const markdown = docsPageMarkdown(locale, "shadcn");
      expect(markdown).toContain("npx skills add shadcn/ui");
      expect(markdown).toContain(`/docs/${locale}/shadcn`);
    }
  });
});
