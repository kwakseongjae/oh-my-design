import { describe, expect, it } from "vitest";
import { CHUNK_MAX, githubSlug, markdownSections, plainText, sectionChunks } from "./chunk";

describe("ask chunker", () => {
  it("splits at headings and flattens tables, HTML, images and links", () => {
    const md = [
      '<p align="center"><img src="x.svg" alt="logo"></p>',
      "# Title",
      "Lead with a [link](https://x.y) and **bold**.",
      "> Human page: https://oh-my-design.kr/docs/en",
      "## Agents",
      "| Agent | Channel |",
      "|---|---|",
      "| **Claude Code** | `--agent claude-code` |",
      "```bash",
      "npx oh-my-design-cli@latest",
      "```",
      "English | 한국어 | 日本語 | 繁體中文",
    ].join("\n");
    const s = markdownSections(md);
    expect(s.map((x) => x.heading)).toEqual(["Title", "Agents"]);
    expect(s[0].body).toBe("Lead with a link and bold.");
    expect(s[1].body).toContain("Claude Code — `--agent claude-code`");
    expect(s[1].body).toContain("npx oh-my-design-cli@latest");
    expect(s[1].body).not.toContain("繁體中文");
  });

  it("merges small sections and keeps every chunk under the cap", () => {
    const long = Array.from({ length: 40 }, (_, i) => `Sentence ${i} about installing the CLI in a project.`).join(" ");
    const sections = [
      { heading: "A", level: 2, body: "short" },
      { heading: "B", level: 2, body: "also short" },
      { heading: "C", level: 2, body: long },
    ];
    const chunks = sectionChunks(sections);
    expect(chunks[0].text).toContain("B\nalso short");
    expect(chunks.every((c) => c.text.length <= CHUNK_MAX)).toBe(true);
    expect(chunks.filter((c) => c.section === 2).length).toBeGreaterThan(1);
  });

  it("decodes entities and drops tags", () => {
    expect(plainText("<code>oh-my-design.kr/&lt;id&gt;/design.md</code>")).toBe("oh-my-design.kr/<id>/design.md");
  });

  it("slugs headings the way GitHub does", () => {
    expect(githubSlug("Your first 60 seconds — Claude Code, Codex, or OpenCode")).toBe("your-first-60-seconds--claude-code-codex-or-opencode");
    expect(githubSlug("oh-my-design이란?")).toBe("oh-my-design이란");
  });
});
