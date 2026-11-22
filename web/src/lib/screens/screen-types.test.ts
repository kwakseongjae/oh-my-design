import { describe, expect, it } from "vitest";
import { TYPE_ORDER, compareTypes, groupByType, typeFromParam, typeParam, typeSlug } from "./screen-types";

/** The walk's screen types: one order for every page, one ASCII slug for URLs and file names. */

describe("screen types", () => {
  it("orders the known types, then unknown ones by name, then the catch-all, then the missing addresses", () => {
    const types = ["오류", "화면", "로그인", "홈", "새로운 종류", "검색 결과", "상세", "목록"];
    expect([...types].sort(compareTypes)).toEqual(["홈", "검색 결과", "목록", "상세", "로그인", "새로운 종류", "화면", "오류"]);
  });
  it("every known type has an ASCII slug, and no two share one", () => {
    const slugs = [...TYPE_ORDER, "화면", "오류"].map(typeSlug);
    expect(slugs.every((s) => /^[a-z][a-z-]*$/.test(s))).toBe(true);
    expect(new Set(slugs).size).toBe(slugs.length);
    expect(typeSlug("검색 결과")).toBe("search-results");
    expect(typeSlug("새로운 종류")).toBe("screen");
  });
  it("a URL names a type by its slug, or an unknown one as written", () => {
    const present = ["홈", "검색 결과", "새로운 종류"];
    expect(typeFromParam("search-results", present)).toBe("검색 결과");
    expect(typeParam("새로운 종류")).toBe("새로운 종류");
    expect(typeFromParam("새로운 종류", present)).toBe("새로운 종류");
    expect(typeFromParam("list", present)).toBeNull();
    expect(typeFromParam(null, present)).toBeNull();
  });
  it("groups by type in that order, a state screen last within its type", () => {
    const cards = [
      { key: "a", type: "검색 결과", state: "빈 상태" },
      { key: "b", type: "홈", state: null },
      { key: "c", type: "검색 결과", state: null },
      { key: "d", type: "오류", state: null },
    ];
    expect(groupByType(cards).map((g) => [g.type, g.cards.map((c) => c.key)])).toEqual([
      ["홈", ["b"]],
      ["검색 결과", ["c", "a"]],
      ["오류", ["d"]],
    ]);
  });
});
