import { describe, expect, it } from "vitest";
import { parseFrontmatter } from "./frontmatter";

const VALID = `---
title: "v2.0.0 — a system: held"
description: "Why it exists"
date: 2026-08-20
tags: [release, ai]
---

Body starts here.
`;

describe("frontmatter", () => {
  it("reads the four fields and hands back the body", () => {
    const { data, body } = parseFrontmatter(VALID, "test.md");
    // A colon inside the value must survive — only the first one separates.
    expect(data.title).toBe("v2.0.0 — a system: held");
    expect(data.description).toBe("Why it exists");
    expect(data.date).toBe("2026-08-20");
    expect(data.tags).toEqual(["release", "ai"]);
    expect(body).toBe("Body starts here.");
  });

  it("names the file in every failure", () => {
    expect(() => parseFrontmatter("no frontmatter", "post.md")).toThrow(/post\.md.*missing frontmatter/);
    expect(() => parseFrontmatter("---\ntitle: x\n", "post.md")).toThrow(/unterminated/);
  });

  it("rejects a post that would render blank or sort wrong", () => {
    const without = (key: string) =>
      VALID.split("\n").filter((line) => !line.startsWith(`${key}:`)).join("\n");
    expect(() => parseFrontmatter(without("title"), "post.md")).toThrow(/missing required.*title/);
    expect(() => parseFrontmatter(without("date"), "post.md")).toThrow(/missing required.*date/);
    expect(() => parseFrontmatter(VALID.replace("2026-08-20", "Aug 20"), "post.md")).toThrow(/YYYY-MM-DD/);
    expect(() => parseFrontmatter(VALID.replace("[release, ai]", "[]"), "post.md")).toThrow(/tags must not be empty/);
    expect(() => parseFrontmatter(VALID.replace("[release, ai]", "release"), "post.md")).toThrow(/inline list/);
  });

  it("rejects a typo'd key instead of dropping it", () => {
    expect(() => parseFrontmatter(VALID.replace("tags:", "tag:"), "post.md")).toThrow(/unknown frontmatter key "tag"/);
  });
});
