import { describe, expect, it } from "vitest";
import type { SiteLocale } from "@/lib/i18n/site-locales";
import { getR11Ask } from "@/components/brand-a/copy/r11-ask";
import type { AskChunk } from "./chunk";
import { askRetriever } from "./default-index";
import { createRetriever } from "./retrieve";

const chunk = (over: Partial<AskChunk> & Pick<AskChunk, "id">): AskChunk => ({
  src: "docs",
  loc: "en",
  group: over.id,
  title: over.id,
  url: `/${over.id}`,
  text: "",
  ...over,
});

describe("ask retriever (synthetic)", () => {
  const chunks = [
    chunk({ id: "en-install", group: "install", text: "Run npx oh-my-design-cli@latest to install." }),
    chunk({ id: "ko-install", group: "install", loc: "ko", text: "설치는 npx oh-my-design-cli@latest 한 번이면 돼요." }),
    chunk({ id: "ja-install", group: "install", loc: "ja", text: "インストールは npx oh-my-design-cli@latest です。" }),
    chunk({ id: "ref-toss", src: "ref", loc: "*", title: "Toss DESIGN.md", url: "/design-systems/toss", urlKo: "/ko/design-systems/toss", text: "Toss (토스). Country: South Korea.", kw: "토스 Korea 한국" }),
  ];
  const r = createRetriever(chunks, ["Toss", "토스", "Korea", "한국"]);

  it("prefers the page's locale and never cites one group twice", () => {
    const hits = r.search("oh-my-design-cli 설치", "ko");
    expect(hits[0].chunk.id).toBe("ko-install");
    expect(hits.filter((h) => h.chunk.group === "install")).toHaveLength(1);
  });

  it("hides other locales and discounts English on a non-English page", () => {
    const hits = r.search("npx oh-my-design-cli", "ja");
    expect(hits.map((h) => h.chunk.id)).not.toContain("ko-install");
    expect(hits[0].chunk.id).toBe("ja-install");
  });

  it("links a reference to its Korean page on /ko only", () => {
    expect(r.search("토스", "ko")[0].url).toBe("/ko/design-systems/toss");
    expect(r.search("Toss", "en")[0].url).toBe("/design-systems/toss");
  });

  it("returns nothing for words it has never seen", () => {
    expect(r.search("asdkjh qwe", "en")).toEqual([]);
    expect(r.search("", "en")).toEqual([]);
  });
});

describe("ask retriever (committed index)", () => {
  const r = askRetriever();
  const ids = (q: string, l: SiteLocale) => r.search(q, l).map((h) => h.chunk.id);

  it("answers the agents chip from the FAQ in every locale", () => {
    for (const l of ["en", "ko", "ja", "zh-tw"] as const) {
      expect(ids(getR11Ask(l).ask.examples[0], l), l).toContain(`faq:${l}:2`);
    }
  });

  it("answers the DESIGN.md chip from the FAQ in every locale", () => {
    for (const l of ["en", "ko", "ja", "zh-tw"] as const) {
      expect(ids(getR11Ask(l).ask.examples[1], l)[0], l).toBe(`faq:${l}:0`);
    }
  });

  it("brings archive entries for a country question in every locale", () => {
    const want: Record<SiteLocale, string> = { en: "JP", ko: "JP", ja: "JP", "zh-tw": "TW" };
    for (const l of ["en", "ko", "ja", "zh-tw"] as const) {
      const hits = r.search(getR11Ask(l).ask.examples[2], l);
      const refs = hits.filter((h) => h.chunk.src === "ref");
      expect(refs.length, l).toBeGreaterThanOrEqual(2);
      const country = want[l] === "JP" ? "Japan" : "Taiwan";
      for (const h of refs) expect(h.chunk.text, `${l} ${h.chunk.id}`).toContain(`Country: ${country}`);
      expect(hits.some((h) => h.chunk.id === `faq:${l}:6`), l).toBe(true);
    }
  });

  it("finds install docs, and keeps archive entries out of questions that are not about companies", () => {
    expect(ids("설치는 어떻게 해요?", "ko")).toEqual(expect.arrayContaining(["readme:ko:5:0"]));
    for (const [q, l] of [["インストール方法", "ja"], ["Does it work with Codex?", "en"], ["如何安裝？", "zh-tw"]] as const) {
      expect(r.search(q, l).some((h) => h.chunk.src === "ref"), q).toBe(false);
    }
  });

  it("names a brand's entry when asked about it", () => {
    expect(ids("토스 DESIGN.md 색상", "ko")).toContain("ref:toss");
    expect(ids("pixiv primary color", "en")[0]).toBe("ref:pixiv");
  });

  it("reaches the English-only Claude Design guide from a Korean question", () => {
    expect(ids("Claude Design에서 쓸 수 있나요?", "ko")[0]).toMatch(/^guide:en:/);
  });

  it("caps the sources at six", () => {
    expect(r.search("DESIGN.md", "en").length).toBeLessThanOrEqual(6);
  });
});
