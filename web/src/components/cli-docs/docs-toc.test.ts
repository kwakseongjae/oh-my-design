import { describe, expect, it } from "vitest";
import { resolveActiveTocId, type TocItem } from "./docs-toc";

const items: TocItem[] = [
  { id: "definition", label: "Definition" },
  { id: "principles", label: "Principles" },
  { id: "atlas", label: "Atlas" },
  { id: "workflow", label: "Workflow" },
];

const metrics = {
  scrollTop: 1_200,
  viewportHeight: 900,
  scrollHeight: 4_000,
};

describe("resolveActiveTocId", () => {
  it("tracks the last section that crossed the reading line", () => {
    const tops = new Map([
      ["definition", -1_000],
      ["principles", -300],
      ["atlas", 120],
      ["workflow", 860],
    ]);

    expect(resolveActiveTocId(items, tops, metrics)).toBe("atlas");
  });

  it("keeps the first item active before the first section reaches the reading line", () => {
    const tops = new Map([
      ["definition", 220],
      ["principles", 900],
      ["atlas", 1_400],
      ["workflow", 2_000],
    ]);

    expect(resolveActiveTocId(items, tops, { ...metrics, scrollTop: 0 })).toBe("definition");
  });

  it("skips missing sections without losing later section tracking", () => {
    const tops = new Map([
      ["definition", -900],
      ["atlas", 80],
      ["workflow", 780],
    ]);

    expect(resolveActiveTocId(items, tops, metrics)).toBe("atlas");
  });

  it("activates the final item at the document end even when its heading is below the reading line", () => {
    const tops = new Map([
      ["definition", -2_900],
      ["principles", -1_800],
      ["atlas", -600],
      ["workflow", 260],
    ]);

    expect(resolveActiveTocId(items, tops, {
      scrollTop: 3_100,
      viewportHeight: 900,
      scrollHeight: 4_000,
    })).toBe("workflow");
  });

  it("returns an empty id for an empty table of contents", () => {
    expect(resolveActiveTocId([], new Map(), metrics)).toBe("");
  });
});
