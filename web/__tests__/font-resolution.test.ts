import { describe, it, expect } from "vitest";
import { readFileSync, existsSync } from "fs";
import { join } from "path";
import {
  resolveFontsFromDesignMd,
  isSystemFontStack,
  canonicalFontName,
} from "@/lib/font-registry";
import { extractTokens } from "@/lib/extract-tokens";
import { resolveRuntimeFont } from "@/lib/fonts/runtime-family";
import {
  extractLegacyReferenceDetail,
  projectAstReferenceDetail,
} from "@/lib/references/detail-projection";
import { loadReference } from "@/lib/references/repository.server";

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

  // (a) Baemin 2.0 officially confirms WORK as the app family. The family is
  //     canonical even though no authorized browser-loadable specimen exists.
  it("baemin canonical projection exposes WORK without a substitute loader", () => {
    const loaded = loadReference("baemin");
    expect(loaded).not.toBeNull();
    const legacy = extractLegacyReferenceDetail("baemin", loaded!.markdown);
    const projection = projectAstReferenceDetail(loaded!.ast, legacy);

    expect(projection.detail.fontFamily).toBe("BAEMINWORK");
    expect(projection.detail.mono).toBeUndefined();
    expect(projection.detail.brandFont).toBeUndefined();
    expect(projection.contract.foundations.uiFont?.value).toBe("BAEMINWORK");
    expect(resolveRuntimeFont(projection.detail.fontFamily)).toMatchObject({
      mode: "unavailable",
      cssFamily: "inherit",
    });
  });

  it("baemin token pipeline renders WORK metadata plus verified metric tiers", () => {
    const loaded = loadReference("baemin");
    expect(loaded).not.toBeNull();
    const legacy = extractLegacyReferenceDetail("baemin", loaded!.markdown);
    const projection = projectAstReferenceDetail(loaded!.ast, legacy);
    const tokens = extractTokens({
      ...projection.detail,
      referenceAst: projection.contract,
    });
    const canon = tokens.typography.fonts.map((f) => canonicalFontName(f.raw));
    expect(canon).toEqual(["BAEMINWORK"]);
    expect(tokens.typography.hierarchy).toHaveLength(8);
  });

  // (b) A legitimately-Inter reference must still resolve to Inter.
  it("linear.app (genuine Inter) still resolves to Inter", () => {
    const md = readRef("linear.app");
    expect(resolveFontsFromDesignMd(md).family).toBe("Inter");
  });

  it("channeltalk resolves the current marketing surface to Pretendard", () => {
    const md = readRef("channeltalk");
    expect(resolveFontsFromDesignMd(md).family).toBe("Pretendard");
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
