import { existsSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { describe, expect, it } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import COMMITTED from "@/data/ask-index.generated.json";
import { CHUNK_MAX, type AskIndexFile } from "./chunk";
import { ASK_INDEX_VERSION, buildAskIndex, GUIDE_FILE, README_FILES, serializeAskIndex } from "./build-index";

const ROOT = resolve(__dirname, "../../../..");
const readmes = README_FILES.filter(({ path }) => existsSync(join(ROOT, path))).map(({ path, loc }) => ({
  path,
  loc,
  markdown: readFileSync(join(ROOT, path), "utf8"),
}));
const guidePath = join(ROOT, GUIDE_FILE);
const index = buildAskIndex({ readmes, guide: existsSync(guidePath) ? readFileSync(guidePath, "utf8") : null });

describe("ask index builder", () => {
  it("covers the FAQ, docs and READMEs in all four locales, and every reference", () => {
    for (const loc of ["en", "ko", "ja", "zh-tw"]) {
      for (const src of ["faq", "docs"]) expect(index.chunks.some((c) => c.src === src && c.loc === loc), `${src} ${loc}`).toBe(true);
    }
    expect(index.chunks.filter((c) => c.src === "faq")).toHaveLength(28);
    expect(index.chunks.filter((c) => c.src === "ref")).toHaveLength(REGISTRY.length);
    if (readmes.length === 4) for (const loc of ["en", "ko", "ja", "zh-tw"]) expect(index.chunks.some((c) => c.src === "readme" && c.loc === loc)).toBe(true);
  });

  it("gives every chunk a title, a URL and bounded text", () => {
    const ids = new Set<string>();
    for (const c of index.chunks) {
      expect(ids.has(c.id)).toBe(false);
      ids.add(c.id);
      expect(c.title.length).toBeGreaterThan(0);
      expect(c.url).toMatch(/^(\/|https:\/\/github\.com\/kwakseongjae\/oh-my-design)/);
      expect(c.text.length).toBeGreaterThan(0);
      if (c.src !== "ref" && c.src !== "faq") expect(c.text.length).toBeLessThanOrEqual(CHUNK_MAX);
    }
  });

  it("links references to their item pages, Korean ones on /ko too", () => {
    const toss = index.chunks.find((c) => c.id === "ref:toss")!;
    expect(toss.url).toBe("/design-systems/toss");
    expect(toss.urlKo).toBe("/ko/design-systems/toss");
    expect(toss.title).toBe("Toss DESIGN.md");
    expect(toss.text).toContain("Country: South Korea");
  });

  it("fills the FAQ placeholders and indexes only the guide's user-facing steps", () => {
    for (const c of index.chunks.filter((x) => x.src === "faq")) expect(c.text).not.toMatch(/\{\w+\}/);
    const guide = index.chunks.filter((c) => c.src === "guide");
    for (const c of guide) expect(c.title).not.toMatch(/What NOT|cheap path/i);
  });

  it("indexes no web/docs file but the public guide (the rest are internal notes)", () => {
    const webDocs = index.chunks.filter((c) => c.url.includes("/web/docs/"));
    expect(webDocs.length).toBeGreaterThan(0);
    expect(webDocs.every((c) => c.url.endsWith(GUIDE_FILE))).toBe(true);
  });

  it("is deterministic and the committed file has the same shape", () => {
    const again = buildAskIndex({ readmes, guide: existsSync(guidePath) ? readFileSync(guidePath, "utf8") : null });
    expect(serializeAskIndex(again)).toBe(serializeAskIndex(index));
    const committed = COMMITTED as unknown as AskIndexFile;
    expect(committed.version).toBe(ASK_INDEX_VERSION);
    expect(committed.chunks.length).toBeGreaterThan(REGISTRY.length);
    expect(committed.intent.length).toBeGreaterThan(100);
  });
});
