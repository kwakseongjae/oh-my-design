import { describe, expect, it } from "vitest";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Markdown } from "@/components/markdown";

const SAMPLE = [
  "# Title", "", "A paragraph with a [link](https://example.com), **strong**, *em* and `code`.", "",
  "## Section", "", "- one", "- two", "", "1. first", "", "> quoted", "",
  "| a | b |", "|---|---|", "| 1 | 2 |", "", "```css", ".x { color: red }", "```", "", "### Sub", "", "#### Sub-sub", "", "---",
].join("\n");

describe("Markdown", () => {
  const html = renderToStaticMarkup(createElement(Markdown, { content: SAMPLE }));

  it("does not leak react-markdown's node prop into the HTML", () => {
    expect(html).not.toContain("node=");
    expect(html).not.toContain("[object Object]");
  });

  it("still renders every element with its classes", () => {
    for (const tag of ["<h1", "<h2", "<h3", "<h4", "<p", "<a", "<strong", "<em", "<ul", "<ol", "<li", "<blockquote", "<table", "<thead", "<tbody", "<tr", "<th", "<td", "<pre", "<code", "<hr"]) expect(html).toContain(tag);
    expect(html).toContain('href="https://example.com"');
    expect(html).toContain('target="_blank"');
    expect(html).toContain('class="my-3 leading-relaxed"');
  });

  it("demotes the document title when asked", () => {
    const demoted = renderToStaticMarkup(createElement(Markdown, { content: SAMPLE, demoteH1: true }));
    expect(demoted).not.toContain("<h1");
  });
});
