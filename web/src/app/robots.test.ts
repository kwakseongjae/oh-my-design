import { describe, expect, it } from "vitest";
import robots from "./robots";

describe("robots.txt", () => {
  it("gives every named crawler group the wildcard's disallows", () => {
    // A named group replaces `*` for that crawler (RFC 9309), so a group
    // without the disallows would reopen /api/ to it.
    const rules = [robots().rules].flat();
    const wildcard = rules.find((rule) => rule.userAgent === "*");
    expect(wildcard?.disallow).toEqual(expect.arrayContaining(["/api/", "/qa-references"]));
    for (const rule of rules) {
      expect(rule.disallow, String(rule.userAgent)).toEqual(wildcard?.disallow);
    }
    expect(rules.some((rule) => rule.userAgent === "ClaudeBot")).toBe(true);
  });

  it("leaves /reference/ crawlable so its 308 to the detail page can be seen", () => {
    // The route became a redirect on 2026-10-01 (D4). A disallowed URL is never
    // fetched, so a crawler would keep the old URL instead of following it.
    for (const rule of [robots().rules].flat()) {
      expect(rule.disallow).not.toContain("/reference/");
    }
  });
});
