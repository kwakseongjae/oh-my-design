import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import heroCaps from "@/data/hero-caps.json";
import heroDrop from "@/data/hero-drop.json";

/* Round 9 (components/brand-a/hero-drop.tsx): the 2D drop shows a base poster without the set's
   fresh caps and drops sprites for exactly those. If an arrival's new caps were not the rendered
   fresh set, a cap would be missing or doubled; the inline script falls back to the 3D drop then,
   so the data must keep the two equal for every switch between different cap sets. */
type CapSet = { wide: string[][]; narrow: string[][] };
type Variant = { caps: { id: string }[]; sheet: { src: string } };
const SETS = heroCaps.sets as Record<string, CapSet>;
const DROP = (heroDrop as { sets: Record<string, { fresh: string[]; d?: Variant; m?: Variant }> }).sets;
const ids = (s: CapSet) => [...new Set([...s.wide.flat(), ...s.narrow.flat()])];
const PUBLIC = path.join(process.cwd(), "public");

describe("hero 2D drop data", () => {
  const names = Object.keys(SETS);
  it("the new caps of every switch between cap sets are the target set's rendered fresh caps", () => {
    for (const to of names) for (const from of names) {
      if (to === from) continue;
      const prev = new Set(ids(SETS[from]));
      const nu = ids(SETS[to]).filter((id) => !prev.has(id));
      expect(new Set(nu), `${from} -> ${to}`).toEqual(new Set(DROP[to]?.fresh ?? []));
    }
  });
  it("each size has a sprite for every fresh cap it shows, and its files exist", () => {
    for (const name of names) {
      const d = DROP[name];
      if (!d) continue;
      for (const [k, rows] of [["d", SETS[name].wide], ["m", SETS[name].narrow]] as const) {
        const shown = new Set(rows.flat());
        const want = d.fresh.filter((id) => shown.has(id));
        const v = d[k];
        expect((v?.caps ?? []).map((c) => c.id), `${name} ${k}`).toEqual(want);
        if (v) expect(fs.existsSync(path.join(PUBLIC, v.sheet.src))).toBe(true);
      }
      const set = name === "default" ? "" : `-${name}`;
      for (const sfx of ["", "@2x", "-m"]) expect(fs.existsSync(path.join(PUBLIC, `brand-a/hero-base${set}-light${sfx}.webp`))).toBe(true);
    }
  });
});
