/**
 * Landing gen-UI / keycap resolvers vs. every reference in the registry.
 *
 * The concept-A prototype reported "not in source" three times for values the
 * reference did claim (Apple's card radius, freee/THSR/Linear/Apple faces),
 * because each slot read one fixed key. The oracle below is deliberately wider
 * than the resolver's ordered key lists: if ANY claimed key could fill a slot
 * and the resolver still reports it missing, that is a false-missing and the
 * test fails.
 *
 * The second half pins the cases that are truly missing (no claimed key at
 * all) for the companies the landing shows, so a resolver change that starts
 * inventing values fails too.
 */
import { describe, expect, it } from "vitest";
import { REGISTRY } from "@/data/registry.generated";
import { REFERENCE_VERIFICATION_BY_ID } from "@/data/reference-verification.generated";
import { GEN_UI_IDS } from "@/lib/landing-a/picks";
import { NON_UI_FACE_RE, num, resolveSlots, type ResolvedSlots, type TokensLike } from "@/lib/landing-a/resolve";

type Slot = "canvas" | "fg" | "body" | "primary" | "head" | "bod" | "btn" | "surface" | "sr" | "face";
const HEX = /^#[0-9a-f]{6}$/i;

/** Claimed keys that could fill each slot — wider than the resolver on purpose. */
function oracle(tokens: TokensLike | undefined, claims: Record<string, unknown>): Record<Slot, string[]> {
  const t = tokens ?? {};
  const has = (p: string) => p in claims;
  const C = t.colors ?? {};
  const colorKeys = (re: RegExp, not?: RegExp) =>
    Object.keys(C).filter((k) => re.test(k) && !(not && not.test(k)) && typeof C[k] === "string" && HEX.test(C[k].trim()) && has(`tokens.colors.${k}`));
  const T = (t.typography ?? {}) as Record<string, unknown>;
  const tiers = (re: RegExp) =>
    Object.entries(T)
      .filter(([k, o]) => k !== "family" && re.test(k) && o && typeof o === "object")
      .filter(([k, o]) => num((o as Record<string, unknown>).size) != null && num((o as Record<string, unknown>).weight) != null && has(`tokens.typography.${k}.size`) && has(`tokens.typography.${k}.weight`))
      .map(([k]) => k);
  const comps = Object.entries(t.components ?? {}).filter(([, o]) => o && typeof o === "object") as [string, Record<string, unknown>][];
  const RD = t.rounded ?? {};
  const FM = (T.family ?? {}) as Record<string, unknown>;
  return {
    canvas: colorKeys(/^(canvas|background|bg|page|page-bg|page-background|white|surface-base|base)$/),
    fg: colorKeys(/^(foreground|fg|ink|text|text-primary|text-default|text-strong|on-background|on-surface|heading|black|portal-ink)$/),
    body: colorKeys(/^(body|body-text|text-body|text-secondary|secondary-text|text-subtle|subtle-text|muted|text-muted|secondary)$/),
    primary: colorKeys(/^(primary|brand|brand-.*|accent|action|.*-action|cta|main|key)$/, /^on-/),
    head: tiers(/h1|h2|h3|heading|headline|title|display|section|subhead/),
    bod: tiers(/^body|paragraph|^p$|^text(-md|-base)?$|copy|^base$/),
    btn: comps.filter(([k, o]) => o.type === "button" && typeof o.bg === "string" && HEX.test(o.bg.trim()) && has(`tokens.components.${k}.bg`)).map(([k]) => k),
    surface: [
      ...comps.filter(([k, o]) => o.type === "card" && typeof o.bg === "string" && has(`tokens.components.${k}.bg`)).map(([k]) => `components.${k}.bg`),
      ...colorKeys(/^(surface|surface-1|card|card-bg|surface-subtle|subtle|utility-surface|surface-secondary|surface-tint|surface-gray|layer|panel|container)$/),
    ],
    sr: [
      ...comps.filter(([k, o]) => o.type === "card" && num(o.radius) != null && has(`tokens.components.${k}.radius`)).map(([k]) => `components.${k}.radius`),
      ...Object.keys(RD).filter((k) => typeof RD[k] === "number" && has(`tokens.rounded.${k}`) && /card|surface|tile|container|panel|^md$|dialog|modal|sheet|popup|popover/.test(k)),
    ],
    face: Object.keys(FM).filter((k) => typeof FM[k] === "string" && (FM[k] as string).trim() && has(`tokens.typography.family.${k}`) && !NON_UI_FACE_RE.test(k)),
  };
}

function missing(s: ResolvedSlots): Slot[] {
  const out: Slot[] = [];
  for (const k of ["canvas", "fg", "body", "primary", "head", "bod", "btn", "surface", "sr"] as const) if (!s[k]) out.push(k);
  if (!s.famT && !s.famD) out.push("face");
  return out;
}

const ALL = REGISTRY.map((r) => {
  const ver = REFERENCE_VERIFICATION_BY_ID[r.id];
  const slots = resolveSlots(r.tokens as TokensLike, ver);
  return { id: r.id, slots, miss: missing(slots), oracle: oracle(r.tokens as TokensLike, (ver?.claims ?? {}) as Record<string, unknown>) };
});

describe("landing slot resolvers", () => {
  it("runs over every reference in the registry", () => {
    expect(ALL.length).toBe(REGISTRY.length);
    expect(ALL.length).toBeGreaterThanOrEqual(500);
  });

  it("never reports a slot missing while a matching claimed key exists", () => {
    const falseMissing: string[] = [];
    for (const r of ALL) for (const slot of r.miss) if (r.oracle[slot].length) falseMissing.push(`${r.id}.${slot} ← ${r.oracle[slot].join(", ")}`);
    expect(falseMissing).toEqual([]);
  });

  it("only resolves values that carry a claim", () => {
    for (const r of ALL) {
      const ver = REFERENCE_VERIFICATION_BY_ID[r.id];
      const claims = ver?.claims ?? {};
      const s = r.slots;
      for (const c of [s.canvas, s.fg, s.body, s.primary, s.surface, s.sr, s.cardBorder, s.famT, s.famD]) {
        if (c) expect(`tokens.${c.k}` in claims, `${r.id} ${c.k}`).toBe(true);
      }
      if (s.btn) expect(`tokens.components.${s.btn.k}.bg` in claims, `${r.id} btn`).toBe(true);
    }
  });

  /* Truly missing for the gen-UI companies: no claimed key exists, so the screen shows a
     dashed "not in source" tag. Verified against each DESIGN.md (NOTES.md rounds 5b/5c). */
  const KNOWN_TRULY_MISSING: Record<string, { slots: Slot[]; button?: ("height" | "pad" | "fs" | "radius")[] }> = {
    toss: { slots: [] },
    line: { slots: ["surface", "sr"], button: ["pad", "fs"] },
    pixiv: { slots: ["sr"] },
    freee: { slots: [], button: ["height"] },
    "104": { slots: ["face"], button: ["height"] },
    thsr: { slots: ["surface"] },
    apple: { slots: [] },
  };

  it("pins the truly-missing slots of the companies the landing shows", () => {
    for (const [id, want] of Object.entries(KNOWN_TRULY_MISSING)) {
      const r = ALL.find((x) => x.id === id);
      expect(r, id).toBeTruthy();
      const core = r!.miss.filter((m) => ["surface", "sr", "face", "btn"].includes(m));
      expect(core.sort(), `${id} missing`).toEqual([...want.slots].sort());
      if (want.button) {
        const b = r!.slots.btn!;
        for (const f of want.button) expect(b[f], `${id} button.${f}`).toBeNull();
      }
    }
  });

  it("finds the values the prototype once reported missing", () => {
    const by = (id: string) => ALL.find((x) => x.id === id)!.slots;
    expect(by("apple").sr?.k).toBe("components.hig-reference-card.radius");
    expect(by("apple").sr?.v).toBe(18);
    expect(by("apple").famT?.v).toBe("SF Pro Text");
    expect(by("apple").famD?.v).toBe("SF Pro Display");
    expect(by("freee").famT?.k).toBe("typography.family.ui");
    expect(by("thsr").famT?.k).toBe("typography.family.ui");
    expect(by("linear.app").famT?.k).toBe("typography.family.ui");
    expect(by("thsr").sr?.k).toBe("rounded.dialog");
    expect(by("pixiv").btn?.height).toBe(40);
  });

  it("every gen-UI pick resolves a primary button", () => {
    for (const id of GEN_UI_IDS) expect(ALL.find((x) => x.id === id)?.slots.btn, id).toBeTruthy();
  });
});
