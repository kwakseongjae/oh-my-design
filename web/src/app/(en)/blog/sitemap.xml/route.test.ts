import { describe, expect, it } from "vitest";
import { GET } from "./route";
import { blogPostUrl } from "@/lib/site";

describe("blog sitemap", () => {
  it("gives a corrected post its correction date as lastmod, in both locales", async () => {
    const xml = await GET().text();
    for (const locale of ["ko", "en"] as const) {
      const loc = blogPostUrl("baemin-typography-decisions", locale);
      const entry = xml.split("<url>").find((chunk) => chunk.includes(`<loc>${loc}</loc>`));
      expect(entry).toBeDefined();
      expect(entry).toContain("<lastmod>2026-10-21</lastmod>");
    }
  });
});
