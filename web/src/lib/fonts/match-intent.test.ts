/**
 * Deterministic match engine — the Stage 2 fallback when Haiku is
 * unavailable. Regressions here create silent empty-result UX, so three
 * invariants are worth freezing:
 *
 *   1. Common Korean/English keywords parse into the expected tags
 *   2. Catalog-name references boost their own entry
 *   3. Gibberish queries still return 3 safe-default picks (never empty)
 */

import { describe, expect, it } from "vitest";
import { FONT_CATALOG } from "./catalog";
import { matchQuery, parseIntent } from "./match-intent";

describe("parseIntent — keyword coverage", () => {
  it("maps Korean 따뜻 to the warm mood", () => {
    const intent = parseIntent("따뜻한 폰트");
    expect(intent.tags.mood).toContain("warm");
  });

  it("maps English 'serif' to serif family", () => {
    const intent = parseIntent("a clean serif for reading");
    expect(intent.family).toBe("serif");
  });

  it("filters on hangul when '한글' appears", () => {
    const intent = parseIntent("한글 세리프");
    expect(intent.scripts).toContain("hangul");
    expect(intent.family).toBe("serif");
  });

  it("picks up soft/rounded Korean onomatopoeia (몽글몽글, 동글동글)", () => {
    const a = parseIntent("몽글몽글한 느낌");
    const b = parseIntent("동글동글한 폰트");
    expect(a.tags.mood).toContain("soft");
    expect(b.tags.mood).toContain("soft");
  });

  it("dedupes overlapping tags from multiple rules", () => {
    const intent = parseIntent("따뜻한 몽글몽글한 폰트");
    // Both rules push "warm"; dedupe keeps only one
    const warms = intent.tags.mood.filter((m) => m === "warm").length;
    expect(warms).toBe(1);
  });
});

describe("parseIntent — reference detection", () => {
  it("detects when a catalog font is named in the query", () => {
    const intent = parseIntent("like Pretendard but warmer");
    expect(intent.referenceFontId).toBe("pretendard");
  });

  it("returns no referenceFontId when no catalog name appears", () => {
    const intent = parseIntent("a warm serif");
    expect(intent.referenceFontId).toBeUndefined();
  });
});

describe("matchQuery — result guarantees", () => {
  it("returns 3+ picks even for gibberish (safe defaults)", () => {
    const res = matchQuery("asdf qwerty jkl", FONT_CATALOG, 3);
    expect(res.length).toBeGreaterThanOrEqual(3);
    expect(res.every((r) => r.font && r.font.id)).toBe(true);
  });

  it("returns empty array for empty string", () => {
    expect(matchQuery("   ", FONT_CATALOG, 3)).toEqual([]);
    expect(matchQuery("", FONT_CATALOG, 3)).toEqual([]);
  });

  it("hard-filters on requiredScripts — all results include the script", () => {
    const res = matchQuery("warm modern", FONT_CATALOG, 5, ["hangul"]);
    expect(res.length).toBeGreaterThan(0);
    for (const r of res) {
      expect(r.font.scripts).toContain("hangul");
    }
  });

  it("respects both-scripts filter (union of intent + UI)", () => {
    const res = matchQuery("clean", FONT_CATALOG, 5, ["hangul", "latin"]);
    for (const r of res) {
      // Every result must cover *both* scripts since requiredScripts has both
      expect(r.font.scripts).toContain("hangul");
      expect(r.font.scripts).toContain("latin");
    }
  });

  it("a keyword-rich query beats the safe-default confidence floor", () => {
    const generic = matchQuery("xxxxx", FONT_CATALOG, 3)[0];
    const specific = matchQuery("warm korean sans", FONT_CATALOG, 3)[0];
    expect(specific.confidence).toBeGreaterThan(generic.confidence);
  });
});
