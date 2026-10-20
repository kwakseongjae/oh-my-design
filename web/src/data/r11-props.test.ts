import { existsSync, statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { describe, expect, it } from "vitest";
import manifest from "./r11-props.json";
import { PROP_IDS, type Prop } from "@/lib/landing-a/props";
import { SITE_LOCALES } from "@/lib/i18n/site-locales";

// The manifest import is a cast in props.ts, so tsc does not check ids, locales or origin.
// This test does, and checks every shipped file: exists, <= 60 KB, 512x512 WebP with alpha.
const props = (manifest as { props: Prop[] }).props;
const PUBLIC = join(__dirname, "../../public");

describe("r11 props manifest", () => {
  it("lists every PROP_ID exactly once and nothing else", () => {
    const ids = props.map((p) => p.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect([...ids].sort()).toEqual([...PROP_IDS].sort());
  });

  it("describes each prop as an OmD-generated generic object in all four locales", () => {
    for (const p of props) {
      expect(p.src, p.id).toBe(`/r11-props/${p.id}.webp`);
      expect(p.origin, p.id).toBe("omd-generated");
      expect(p.tool.length, p.id).toBeGreaterThan(0);
      expect(p.created, p.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
      expect(Object.keys(p.alt).sort(), p.id).toEqual([...SITE_LOCALES].sort());
      for (const locale of SITE_LOCALES) expect(p.alt[locale].trim().length, `${p.id}/${locale}`).toBeGreaterThan(0);
    }
  });

  it.each(props.map((p) => [p.id, p] as const))("%s: file exists, <= 60 KB, 512x512 WebP with alpha", async (_id, p) => {
    const file = join(PUBLIC, p.src);
    expect(existsSync(file)).toBe(true);
    expect(statSync(file).size).toBeLessThanOrEqual(60 * 1024);
    const meta = await sharp(file).metadata();
    expect(meta.format).toBe("webp");
    expect([meta.width, meta.height]).toEqual([512, 512]);
    expect([p.width, p.height]).toEqual([512, 512]);
    expect(meta.hasAlpha).toBe(true);
    // Real transparency, not just an alpha channel: the corners are fully transparent.
    const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
    const alphaAt = (x: number, y: number) => data[(y * info.width + x) * info.channels + 3];
    const last = info.width - 1;
    expect([alphaAt(0, 0), alphaAt(last, 0), alphaAt(0, last), alphaAt(last, last)]).toEqual([0, 0, 0, 0]);
  });
});
