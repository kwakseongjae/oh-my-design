import { describe, expect, it } from "vitest";
import { DOC_LOCALES, DOC_PAGES } from "./locales";
import { docsPageMarkdown } from "./page-markdown";

describe("docsPageMarkdown", () => {
  it("renders every localized page as useful agent-readable Markdown", () => {
    for (const locale of DOC_LOCALES) {
      for (const page of DOC_PAGES) {
        const markdown = docsPageMarkdown(locale, page);
        expect(markdown, `${locale}/${page}`).toMatch(/^# /);
        expect(markdown, `${locale}/${page}`).toContain(`/docs/${locale}`);
        expect(markdown.length, `${locale}/${page}`).toBeGreaterThan(300);
      }
    }
  });
});
