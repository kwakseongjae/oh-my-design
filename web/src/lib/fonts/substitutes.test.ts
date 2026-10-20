import { describe, expect, it } from "vitest";
import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { getSubstitutes } from "./substitutes";
import { buildFontSubstitutes, renderFontSubstitutes, SUBSTITUTE_LABEL } from "../../../scripts/lib/font-substitutes.mjs";
import { parseV3 } from "../../../scripts/lib/design-md-v3.mjs";

const WEB = join(import.meta.dirname, "..", "..", "..");
const REFS = join(WEB, "references");
const GENERATED = join(WEB, "src", "data", "font-substitutes.generated.json");
const LABEL = "substitute — not the brand face";
const GOOGLE_CSS = /^https:\/\/fonts\.googleapis\.com\/css2\?family=[^&]+&display=swap$/;

const ids = readdirSync(REFS, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(REFS, d.name, "DESIGN.md")))
  .map((d) => d.name)
  .sort();

type Face = { substitutes?: Record<string, { family: string; provider: string; label: string }> };
type SidecarSub = { family: string; provider: string; label: string; cssUrl?: string; metrics?: { xHeightRatio?: number } };

function frontmatter(id: string): Record<string, unknown> | null {
  const parsed = parseV3(readFileSync(join(REFS, id, "DESIGN.md"), "utf8"));
  return (parsed?.frontmatter as Record<string, unknown>) ?? null;
}

function sidecar(id: string): { fonts?: { substitutes?: Record<string, Record<string, SidecarSub>> } } | null {
  const p = join(REFS, id, "reference.json");
  return existsSync(p) ? JSON.parse(readFileSync(p, "utf8")) : null;
}

describe("getSubstitutes", () => {
  it("returns the measured Toss substitutes, Latin first, each labelled and loadable", () => {
    const subs = getSubstitutes("toss");
    expect(subs.map((s) => [s.brandFamily, s.script, s.family, s.provider])).toEqual([
      ["Toss Product Sans", "latin", "IBM Plex Sans", "google"],
      ["Toss Product Sans", "hangul", "Pretendard Variable", "other"],
    ]);
    for (const s of subs) {
      expect(s.label).toBe(LABEL);
      expect(s.cssUrl).toMatch(/^https:\/\//);
      expect(typeof s.metrics?.xHeightRatio).toBe("number");
      expect(typeof s.metrics?.avgAdvance).toBe("number");
      expect(s.metrics?.delta?.page).toBe("https://tossmini-docs.toss.im/tds-mobile/foundation/typography/");
    }
    expect(subs[0].cssUrl).toMatch(GOOGLE_CSS);
  });

  it("returns the measured Berkeley Mono substitute for Linear", () => {
    const subs = getSubstitutes("linear.app");
    expect(subs.map((s) => [s.brandFamily, s.script, s.family, s.provider])).toEqual([["Berkeley Mono", "latin", "Fira Code", "google"]]);
    expect(subs[0].cssUrl).toMatch(GOOGLE_CSS);
  });

  it("returns nothing where no substitute was measured or none is needed", () => {
    for (const id of ["karrot", "kakaobank", "banksalad", "freee", "104", "line", "pixiv", "stripe", "eslite", "no-such-reference"]) {
      expect(getSubstitutes(id), id).toEqual([]);
    }
  });

  it("hands each caller its own copy", () => {
    const a = getSubstitutes("toss");
    a[0].family = "mutated";
    expect(getSubstitutes("toss")[0].family).toBe("IBM Plex Sans");
  });
});

describe("font-substitutes.generated.json", () => {
  it("is what build-registry would write from the references now", () => {
    expect(readFileSync(GENERATED, "utf8")).toBe(renderFontSubstitutes(buildFontSubstitutes(REFS, ids)));
  });

  it("uses the spec label string", () => {
    expect(SUBSTITUTE_LABEL).toBe(LABEL);
  });
});

describe("substitute records agree between DESIGN.md and reference.json", () => {
  it("every frontmatter substitute has the same family, provider and label in the sidecar, with a measurement", () => {
    for (const id of ids) {
      const fm = frontmatter(id);
      const faces = ((fm?.fonts as { faces?: Record<string, Face> } | undefined)?.faces) ?? {};
      for (const [family, face] of Object.entries(faces)) {
        for (const [script, sub] of Object.entries(face.substitutes ?? {})) {
          const rec = sidecar(id)?.fonts?.substitutes?.[family]?.[script];
          expect(rec, `${id}: ${family}/${script} has no reference.json record`).toBeDefined();
          expect([rec?.family, rec?.provider, rec?.label], `${id}: ${family}/${script}`).toEqual([sub.family, sub.provider, sub.label]);
          expect(sub.label).toBe(LABEL);
          expect(typeof rec?.metrics?.xHeightRatio, `${id}: ${family}/${script} metrics`).toBe("number");
        }
      }
    }
  });

  it("every sidecar substitute is declared on a face in the frontmatter", () => {
    for (const id of ids) {
      const recs = sidecar(id)?.fonts?.substitutes ?? {};
      const faces = ((frontmatter(id)?.fonts as { faces?: Record<string, Face> } | undefined)?.faces) ?? {};
      for (const [family, byScript] of Object.entries(recs)) {
        for (const script of Object.keys(byScript)) {
          expect(faces[family]?.substitutes?.[script], `${id}: reference.json substitute ${family}/${script} is not in fonts.faces`).toBeDefined();
        }
      }
    }
  });

  it("a role stack that names a measured face lists its substitutes after it, Latin first (spec §6.4)", () => {
    for (const id of ids) {
      const fm = frontmatter(id);
      const faces = ((fm?.fonts as { faces?: Record<string, Face> } | undefined)?.faces) ?? {};
      for (const role of Object.values((fm?.typography as Record<string, { fontFamily?: string }> | undefined) ?? {})) {
        const stack = role?.fontFamily?.split(",").map((f) => f.trim());
        if (!stack) continue;
        const subs = faces[stack[0]]?.substitutes;
        if (!subs) continue;
        const scripts = Object.keys(subs).sort((a, b) => (a === "latin" ? -1 : b === "latin" ? 1 : a.localeCompare(b)));
        const expected = [stack[0], ...new Set(scripts.map((s) => subs[s].family))];
        expect(stack.slice(0, expected.length), `${id}: ${role.fontFamily}`).toEqual(expected);
      }
    }
  });
});
