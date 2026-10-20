import { describe, expect, it } from "vitest";
import { queryTerms, tokenize } from "./tokenize";

describe("ask tokenizer", () => {
  it("keeps Latin words, compounds and two-word phrases", () => {
    const t = tokenize("Install oh-my-design-cli with Claude Design agents");
    expect(t).toEqual(expect.arrayContaining(["install", "oh-my-design-cli", "design", "cli", "claude", "claude design", "agent"]));
    expect(t).not.toContain("with");
    expect(tokenize("DESIGN.md")).toEqual(["design.md", "design", "md"]);
  });

  it("strips Korean particles, 하다 tails and question words", () => {
    expect(tokenize("토스는")).toEqual(["토스"]);
    expect(tokenize("레퍼런스도")).toEqual(["레퍼런스"]);
    expect(tokenize("검증하나요")).toEqual(["검증"]);
    expect(tokenize("설치하려면 어떻게 해요")).toEqual(["설치"]);
    expect(tokenize("Codex에서도 쓸 수 있나요?")).toEqual(["codex"]);
    expect(tokenize("속도")).toEqual(["속도"]); // a noun that only looks inflected stays whole
  });

  it("drops hiragana and bigrams kanji and katakana", () => {
    expect(tokenize("インストール方法")).toEqual(["イン", "ンス", "スト", "トー", "ール"]);
    expect(tokenize("日本企業のリファレンスはありますか？")).toEqual(expect.arrayContaining(["日本", "企業", "リフ"]));
    expect(tokenize("ですか")).toEqual([]);
    expect(tokenize("tossの色")).toEqual(["toss", "色"]);
  });

  it("splits Chinese at function characters", () => {
    expect(tokenize("有台灣企業的參考嗎？", { zh: true })).toEqual(["台灣", "灣企", "企業", "參考"]);
    expect(tokenize("Codex 也能用嗎？", { zh: true })).toEqual(["codex", "用"]);
  });

  it("weighs a long word's bigrams as one word in a query", () => {
    const q = queryTerms("日本のリファレンス");
    expect(q.get("日本")).toBe(1);
    expect(q.get("リフ")).toBeCloseTo(0.2);
  });

  it("normalises full-width forms", () => {
    expect(tokenize("ＤＥＳＩＧＮ")).toEqual(["design"]);
  });
});
