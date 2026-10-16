import fs from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";

/**
 * The site is light only (owner, 2026-10-16, rebrand round 7): no theme switch, no `.dark`
 * class anywhere in the site's own CSS, `color-scheme: light` on <html>, so an OS dark
 * preference never reaches the page. (The DESIGN.md → CSS generator in lib/core keeps its
 * prefers-color-scheme output: that is product output, not the site.)
 */
const WEB = path.resolve(__dirname, "..");
const read = (p: string) => fs.readFileSync(path.join(WEB, p), "utf8");
const SITE_CSS = [
  "src/app/globals.css",
  "src/styles/brand-a.css",
  ...fs.readdirSync(path.join(WEB, "src/components/brand-a")).filter((f) => f.endsWith(".css")).map((f) => `src/components/brand-a/${f}`),
];

describe("light only", () => {
  it("the site's CSS has no dark branch", () => {
    for (const f of SITE_CSS) {
      const css = read(f).replace(/\/\*[\s\S]*?\*\//g, "");
      expect(/(^|[\s,}])\.dark\b/.test(css), `${f} has a .dark rule`).toBe(false);
      expect(/prefers-color-scheme/.test(css), `${f} reads prefers-color-scheme`).toBe(false);
    }
  });

  it("<html> declares color-scheme: light", () => {
    expect(read("src/app/globals.css")).toMatch(/html\s*{[^}]*color-scheme:\s*light/);
  });

  it("no theme switcher or theme library is left", () => {
    expect(fs.existsSync(path.join(WEB, "src/components/brand-a/theme-toggle.tsx"))).toBe(false);
    const pkg = JSON.parse(read("package.json")) as { dependencies?: Record<string, string> };
    expect(pkg.dependencies?.["next-themes"]).toBeUndefined();
    expect(read("src/components/theme-provider.tsx")).not.toMatch(/from "next-themes"/);
    expect(read("src/app/global-not-found.tsx")).not.toMatch(/classList\.add\(['"]dark/);
  });

  it("hero posters exist for every cap set, light only", () => {
    const dir = path.join(WEB, "public/brand-a");
    const files = fs.readdirSync(dir);
    expect(files.filter((f) => f.includes("dark"))).toEqual([]);
    for (const set of ["", "-ja", "-zh-tw"]) for (const sfx of ["", "@2x", "-m"]) expect(files, `hero-logos${set}-light${sfx}.webp`).toContain(`hero-logos${set}-light${sfx}.webp`);
  });
});
