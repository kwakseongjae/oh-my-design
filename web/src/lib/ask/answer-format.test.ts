import { describe, expect, it } from "vitest";
import { parseAnswer, parseInline, sourceLabel } from "./answer-format";

describe("answer formatting", () => {
  it("turns [n] into citations, dropping numbers with no source", () => {
    expect(parseInline("Yes [1][2], see [1, 3] and [9].", 3)).toEqual([
      { k: "text", v: "Yes" },
      { k: "cite", n: [1, 2] },
      { k: "text", v: ", see" },
      { k: "cite", n: [1, 3] },
      { k: "text", v: " and ." },
    ]);
  });

  it("keeps code spans, strips bold, and never yields HTML", () => {
    expect(parseInline("Run `npx oh-my-design-cli@latest` **now** <b>x</b>", 0)).toEqual([
      { k: "text", v: "Run " },
      { k: "code", v: "npx oh-my-design-cli@latest" },
      { k: "text", v: " now <b>x</b>" },
    ]);
  });

  it("groups bullet lines into a list and paragraphs on blank lines", () => {
    const blocks = parseAnswer("Steps:\n- Install [1]\n- Restart\n\nThat's it.", 1);
    expect(blocks.map((b) => b.k)).toEqual(["p", "ul", "p"]);
    expect(blocks[1].k === "ul" && blocks[1].items).toHaveLength(2);
  });

  it("labels source links", () => {
    expect(sourceLabel("/docs/ko/getting-started")).toBe("oh-my-design.kr/docs/ko/getting-started");
    expect(sourceLabel("/#faq")).toBe("oh-my-design.kr");
    expect(sourceLabel("https://github.com/kwakseongjae/oh-my-design/blob/main/README.ko.md#설치")).toBe("github.com/…/README.ko.md");
    expect(sourceLabel("https://github.com/kwakseongjae/oh-my-design#install")).toBe("github.com/…/README.md");
  });
});
