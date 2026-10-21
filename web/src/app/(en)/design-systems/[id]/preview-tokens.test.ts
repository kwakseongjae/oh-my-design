import { describe, expect, it } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import { loadDetail } from "@/lib/references/detail-loader.server";
import { hasPreviewContent } from "@/components/item/preview-model";
import { buildPreviewModel } from "./preview-tokens.server";

const model = (id: string) => buildPreviewModel(loadDetail(id)!);

describe("item preview model, built from a reference's own tokens", () => {
  it("pixiv: primary first and large, groups in the author's order, all eleven type roles, no stand-in face", () => {
    const m = model("pixiv");
    expect(m.colors?.lead).toEqual({ name: "primary", hex: "#0096fa" });
    expect(m.colors?.groups.map((g) => g.key)).toEqual(["brand", "surface", "status", "other"]);
    expect(m.colors?.groups[0].swatches.map((s) => s.name)).toEqual(["primary-hover", "primary-ui-hover", "primary-pressed", "primary-faded"]);
    // extractTokens() capped the scale at ten and dropped caption-s; this keeps it.
    expect(m.scale).toHaveLength(11);
    expect(m.scale.at(-1)).toMatchObject({ name: "caption-s", size: 12 });
    // `lineHeight: 40` on a 32px role is 40px, not 40×.
    expect(m.scale[0]).toMatchObject({ name: "heading-xxxl", size: 32, weight: 700, lineHeight: { css: "40px" } });
    // Noto Sans CJK JP is not a face the browser can load here: metadata, no specimen, no licence guess.
    expect(m.fonts).toEqual([{ role: "sans", family: "Noto Sans CJK JP", name: "Noto Sans CJK JP" }]);
    expect(m.scale.every((s) => !s.specimen)).toBe(true);
    expect(m.spacing.map((s) => s.px)).toEqual([4, 8, 12, 16, 24, 32, 64]);
    expect(m.radii.map((r) => r.name)).toEqual(["sm", "lg", "full"]);
    expect(m.shadows).toEqual([]);
    const primary = m.components.find((c) => c.name === "button-primary")!;
    expect(primary.states.map((s) => [s.key, s.color])).toEqual([
      ["hover", "#0090f0"],
      ["pressed", "#007ed2"],
      ["focus", "#0096fa"],
    ]);
  });

  it("toss: every recorded type role (26, not 6) and eight hue ramps in numeric order", () => {
    const m = model("toss");
    expect(m.scale).toHaveLength(26);
    expect(m.scale.filter((s) => s.weight === undefined)).toHaveLength(20);
    expect(m.colors?.lead?.hex).toBe("#3182f6");
    expect(m.colors?.ramps.map((r) => r.hue)).toEqual(["grey", "blue", "red", "orange", "yellow", "green", "teal", "purple"]);
    for (const r of m.colors!.ramps) expect(r.steps.map((s) => s.step)).toEqual(["50", "100", "200", "300", "400", "500", "600", "700", "800", "900"]);
    // Toss Product Sans is brand-proprietary: named, never set in its recorded fallbacks.
    expect(m.fonts.map((f) => [f.family, Boolean(f.live)])).toEqual([["Toss Product Sans", false]]);
    expect(m.scale.every((s) => !s.specimen)).toBe(true);
    // A geometric press and a focus ring recipe are prose: quoted, not painted.
    const tds = m.components.find((c) => c.name === "tds-button")!;
    expect(tds.states.every((s) => !s.color)).toBe(true);
    expect(tds.states.map((s) => s.key)).toEqual(["pressed", "focus"]);
  });

  it("11st: the brand colour leads by its key; Noto Sans KR loads, but with three faces a role naming none gets no specimen", () => {
    const m = model("11st");
    expect(m.colors?.lead?.name).toBe("brand-red");
    expect(m.fonts.map((f) => [f.family, Boolean(f.live)])).toEqual([
      ["Noto Sans KR", true],
      ["Lato New", false],
      ["11StreetGothic", false],
    ]);
    expect(m.scale.every((s) => !s.specimen)).toBe(true);
    expect(m.stylesheets.some((h) => decodeURIComponent(h).includes("family=Noto Sans KR"))).toBe(true);
    expect(m.radii.map((r) => r.name)).toEqual(["square", "card", "billboard-control", "circular"]);
  });

  it("serendie: a spacing scale written as a list keeps its values and claims no names", () => {
    const m = model("serendie");
    expect(m.spacing.map((s) => s.px)).toEqual([0, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80]);
    expect(m.spacing.every((s) => s.name === "")).toBe(true);
  });

  it("stripe: records no face, so the column names none", () => {
    const m = model("stripe");
    expect(m.fonts).toEqual([]);
    expect(m.colors?.lead?.name).toBe("accent");
    expect(m.scale.map((s) => s.name)).toEqual(["heading", "body", "control"]);
  });

  it("shows nothing for a reference whose tokens were written from prose", () => {
    for (const r of REGISTRY.filter((x) => x.tokens?.source === "prose-derived")) {
      expect(hasPreviewContent(model(r.id)), r.id).toBe(false);
    }
    expect(hasPreviewContent(model("discord"))).toBe(false);
  });

  it("never shows a colour, size or radius the reference does not record", () => {
    for (const { id } of REGISTRY) {
      const detail = loadDetail(id)!;
      const md = detail.designMd.toLowerCase();
      const m = buildPreviewModel(detail);
      const hexes = [m.colors?.lead, ...(m.colors?.groups.flatMap((g) => g.swatches) ?? []), ...(m.colors?.ramps.flatMap((r) => r.steps) ?? [])]
        .filter(Boolean)
        .map((s) => s!.hex.toLowerCase());
      for (const hex of hexes) expect(md, `${id} ${hex}`).toContain(hex);
      for (const s of m.spacing) {
        // Named steps read "name: value"; a list-form scale has no names, only its values.
        const pattern = s.name ? `${s.name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}:\\s*${s.px}\\b` : `[\\[,\\s]${s.px}\\b`;
        expect(md, `${id} spacing ${s.name || s.px}`).toMatch(new RegExp(pattern));
      }
      for (const t of m.scale) expect(md, `${id} type ${t.name}`).toContain(`${t.name}:`);
    }
  });
});
