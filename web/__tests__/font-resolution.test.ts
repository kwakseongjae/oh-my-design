import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import {
  resolveFontsFromDesignMd,
  isSystemFontStack,
  canonicalFontName,
} from "@/lib/font-registry";
import { extractTokens } from "@/lib/extract-tokens";

// Vitest runs with cwd = web/, and the reference catalog is mirrored at
// web/references/<id>/DESIGN.md (same path the API route reads).
const REFS = join(process.cwd(), "references");
function readRef(id: string): string {
  const p = join(REFS, id, "DESIGN.md");
  if (!existsSync(p)) throw new Error(`missing fixture: ${p}`);
  return readFileSync(p, "utf-8");
}

describe("font resolution — no silent Inter fallback", () => {
  it("recognizes an OS-native system stack (not a web font)", () => {
    expect(
      isSystemFontStack(
        "-apple-system, BlinkMacSystemFont, 'Apple SD Gothic Neo', 'Noto Sans KR', sans-serif",
      ),
    ).toBe(true);
    // A real webfont leading a stack is NOT a system stack.
    expect(isSystemFontStack("Inter, NotoSansKR, sans-serif")).toBe(false);
    expect(isSystemFontStack("Pretendard, sans-serif")).toBe(false);
  });

  // (a) baemin: UI font is a system stack + Korean; every regex in the old
  //     path failed and the API confidently returned "Inter". It must now
  //     resolve to the honest System sentinel, and surface the brand face.
  it("baemin resolves to System (NEVER Inter) and surfaces BMHANNA Pro", () => {
    const md = readRef("baemin");
    const { family, mono, brand } = resolveFontsFromDesignMd(md);
    expect(family).not.toBe("Inter");
    expect(family).toBe("System");
    expect(brand).toBe("BMHANNA Pro");
    expect(mono).toBe("SF Mono");
  });

  it("baemin token pipeline surfaces no Inter card", () => {
    const md = readRef("baemin");
    const { family, mono, brand } = resolveFontsFromDesignMd(md);
    const tokens = extractTokens({
      id: "baemin",
      designMd: md,
      primary: "#2ac1bc",
      background: "#ffffff",
      foreground: "#212529",
      fontFamily: family,
      mono,
      brandFont: brand,
      headingWeight: "700",
      radius: "8px",
      mood: "",
    });
    const canon = tokens.typography.fonts.map((f) => canonicalFontName(f.raw));
    expect(canon).not.toContain("Inter");
    expect(canon).toContain("System");
    expect(canon).toContain("BMHANNA Pro");
  });

  // (b) A legitimately-Inter reference must still resolve to Inter.
  it("linear.app (genuine Inter) still resolves to Inter", () => {
    const md = readRef("linear.app");
    expect(resolveFontsFromDesignMd(md).family).toBe("Inter");
  });

  it("channeltalk (genuine Inter-led stack) still resolves to Inter", () => {
    const md = readRef("channeltalk");
    expect(resolveFontsFromDesignMd(md).family).toBe("Inter");
  });

  // (c) A mono stack that names a variant alongside its canonical form
  //     ("SF Mono, SFMono-Regular, …") must collapse to a single card.
  it("dedupes SF Mono after canonicalization (no duplicate cards)", () => {
    const md = [
      "---",
      "id: synthetic",
      "tokens:",
      '  typography:',
      '    family: { ui: "-apple-system, sans-serif", mono: "SF Mono, SFMono-Regular, Menlo, Consolas, monospace" }',
      "---",
      "## 3. Typography",
      "### Font Family",
      '- **Monospace**: `"SF Mono", SFMono-Regular, Menlo, Consolas, monospace`',
      "",
      "## 4. Component Stylings",
      "",
    ].join("\n");
    const { family, mono, brand } = resolveFontsFromDesignMd(md);
    const tokens = extractTokens({
      id: "synthetic",
      designMd: md,
      primary: "#000000",
      background: "#ffffff",
      foreground: "#000000",
      fontFamily: family,
      mono,
      brandFont: brand,
      headingWeight: "600",
      radius: "8px",
      mood: "",
    });
    const sfMonoCards = tokens.typography.fonts.filter(
      (f) => canonicalFontName(f.raw) === "SF Mono",
    );
    expect(sfMonoCards).toHaveLength(1);
  });

  it("an unresolvable doc returns the honest System sentinel, never Inter", () => {
    const md = "## 3. Typography\nNo machine-readable fonts here.\n## 4. Component\n";
    expect(resolveFontsFromDesignMd(md).family).toBe("System");
  });
});
