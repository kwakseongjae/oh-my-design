import { describe, expect, it } from "vitest";
import { askLength, createNdjsonParser, type AskEvent } from "./protocol";

describe("ask NDJSON parser", () => {
  it("joins events split across chunks and drops malformed lines", () => {
    const got: AskEvent[] = [];
    const p = createNdjsonParser((e) => got.push(e));
    p.push('{"type":"sources","sources":[{"n":1,"title":"A","url":"/a"}]}\n{"type":"del');
    p.push('ta","text":"Hi [1]"}\nnot json\n{"type":"bogus"}\n');
    p.push('{"type":"done","reason":"end_turn"}');
    p.end();
    expect(got).toEqual([
      { type: "sources", sources: [{ n: 1, title: "A", url: "/a" }] },
      { type: "delta", text: "Hi [1]" },
      { type: "done", reason: "end_turn" },
    ]);
  });

  it("counts characters, not UTF-16 units", () => {
    expect(askLength("가나다")).toBe(3);
    expect(askLength("👍")).toBe(1);
  });
});
