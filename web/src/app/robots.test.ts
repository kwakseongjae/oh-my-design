import { describe, expect, it } from "vitest";
import robots from "./robots";

describe("robots.txt", () => {
  it("gives every named crawler group the wildcard's disallows", () => {
    // A named group replaces `*` for that crawler (RFC 9309), so a group
    // without the disallows would reopen /api/ and /reference/ to it.
    const rules = [robots().rules].flat();
    const wildcard = rules.find((rule) => rule.userAgent === "*");
    expect(wildcard?.disallow).toEqual(expect.arrayContaining(["/api/", "/reference/", "/qa-references"]));
    for (const rule of rules) {
      expect(rule.disallow, String(rule.userAgent)).toEqual(wildcard?.disallow);
    }
    expect(rules.some((rule) => rule.userAgent === "ClaudeBot")).toBe(true);
  });
});
