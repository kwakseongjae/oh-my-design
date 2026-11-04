import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import { describe, expect, it } from "vitest";
import logoCollection from "@/data/brand-logos.json";
import { REGISTRY, REGISTRY_BY_ID } from "@/data/registry.generated";
import { KO_DETAIL_IDS } from "@/lib/i18n/ko-detail.server";
import {
  archiveRegion,
  archiveRow,
  firstSentence,
  ICON_RECORDS,
  logoCoverage,
  logoFilePaths,
  logoFor,
  summaryOf,
  textLang,
  paletteOf,
} from "./archive-rows.server";

/**
 * logoCoverage() on the 573-reference registry. Before the 2026-11-04 icon harvest: svg 76 /
 * favicon 379 / none 118. After: svg 76 / icon 351 / favicon 110 / none 36.
 */
const HARVESTED_AT = 573;
const FIRST_PARTY_FLOOR = 76 + 351; // svg + icon: an official SVG may later replace an icon, never lose one
const NONE_CEILING = 36;

describe("archive logos: genuine or none", () => {
  it("never uses Simple Icons or a GitHub avatar, and never a keycap or initial", () => {
    for (const r of REGISTRY) {
      const logo = logoFor(r.id);
      if (!logo) continue;
      expect(logo.src).not.toMatch(/simpleicons|github\.com\/[^/]+\.png/);
      if (logo.kind === "svg") expect(logo.src).toMatch(/^\/brand-svg\/[^/]+\/(symbol|wordmark|combined)\.svg$/);
      else if (logo.kind === "icon") expect(logo.src).toBe(`/logos/icons/${r.id}.${logo.src.split(".").pop()}`);
      else expect(logo.src).toBe(r.logo.slug);
    }
  });

  it("gives Simple Icons and GitHub-avatar references only a first-party file, never the registry slug", () => {
    for (const r of REGISTRY.filter((x) => x.logo.type !== "favicon")) {
      const logo = logoFor(r.id);
      if (logo) expect(["svg", "icon"], r.id).toContain(logo.kind);
    }
    // stripe's registry logo is Simple Icons; the card shows the icon stripe.com itself declares.
    expect(REGISTRY_BY_ID.stripe.logo.type).toBe("simpleicons");
    expect(logoFor("stripe")).toEqual({ src: "/logos/icons/stripe.svg", kind: "icon" });
  });

  it("fills the three cards the owner found blank with the brand's own icon (2026-11-04)", () => {
    for (const id of ["hncb", "mastercard", "docomo-smtb-netbank"]) expect(logoFor(id)?.kind, id).toBe("icon");
  });

  it("shows 11st's official identity from 11stcorp.com", () => {
    expect(logoFor("11st")).toEqual({ src: "/brand-svg/11st/symbol.svg", kind: "svg" });
  });

  it("prefers the official SVG over the favicon (toss)", () => {
    expect(logoFor("toss")?.kind).toBe("svg");
  });

  it("shows nothing for a record whose guideline forbids gallery use (LINE)", () => {
    expect(logoFor("line")).toBeNull();
  });

  it("drops a favicon the probe found to be Google's 404 globe", () => {
    expect(REGISTRY_BY_ID.megabox.logo.type).toBe("favicon");
    expect(logoFor("megabox")).toBeNull();
  });

  it("puts white artwork on an ink plate rather than letting it vanish", () => {
    expect(logoFor("sony")).toMatchObject({ kind: "svg", dark: true });
  });

  it("points only at files that exist", () => {
    for (const ref of logoFilePaths()) expect(existsSync(join(process.cwd(), "public", ref)), ref).toBe(true);
  });

  it("accounts for every reference", () => {
    const c = logoCoverage();
    expect(c.svg + c.icon + c.favicon + c.none).toBe(REGISTRY.length);
    expect(c.svg).toBeGreaterThan(70);
  });

  it("covers more references after the 2026-11-04 icon harvest (was svg 76 / favicon 379 / none 118)", () => {
    const c = logoCoverage();
    expect(c.svg).toBeGreaterThanOrEqual(76);
    expect(c.svg + c.icon).toBeGreaterThanOrEqual(FIRST_PARTY_FLOOR);
    // A reference added after the harvest has no icon record yet, so it may land in none.
    expect(c.none).toBeLessThanOrEqual(NONE_CEILING + Math.max(0, REGISTRY.length - HARVESTED_AT));
  });
});

describe("harvested first-party icons (data/brand-icons.json)", () => {
  const HIGH = new Set(
    (logoCollection as unknown as { records: { id: string; risk_tier?: string }[] }).records
      .filter((r) => r.risk_tier === "high")
      .map((r) => r.id),
  );

  it("records each icon once, for a registry reference, with its provenance", () => {
    const ids = ICON_RECORDS.map((r) => r.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const r of ICON_RECORDS) {
      expect(REGISTRY_BY_ID[r.id], r.id).toBeDefined();
      expect(r.file).toMatch(new RegExp(`^logos/icons/${r.id.replace(/\./g, "\\.")}\\.(png|svg|webp|jpg|gif|avif)$`));
      expect(r.page_url).toMatch(/^https?:\/\//);
      expect(new URL(r.source_url).host, r.id).toBe(r.host);
      expect(r.source_url).not.toMatch(/simpleicons|google\.com\/s2\/favicons|gstatic\.com\/favicon|duckduckgo\.com/);
      expect(r.captured).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    }
  });

  it("never stores an icon for a record whose guideline forbids gallery use, and never shows one", () => {
    expect(HIGH.size).toBeGreaterThanOrEqual(3);
    for (const r of ICON_RECORDS) expect(HIGH.has(r.id), r.id).toBe(false);
    for (const id of HIGH) expect(logoFor(id)).toBeNull();
  });

  it("stores every file under public/ at its recorded size: an SVG, or a raster of at least 64px", async () => {
    for (const r of ICON_RECORDS) {
      const file = join(process.cwd(), "public", r.file);
      expect(existsSync(file), r.file).toBe(true);
      const meta = await sharp(readFileSync(file)).metadata();
      if (r.file.endsWith(".svg")) {
        expect(meta.format, r.id).toBe("svg");
        expect(readFileSync(file, "utf8")).not.toMatch(/<script\b|\son[a-z]+\s*=|javascript:|<foreignObject\b/i);
        continue;
      }
      expect([meta.width, meta.height], r.id).toEqual([r.width, r.height]);
      expect(Math.min(r.width, r.height), r.id).toBeGreaterThanOrEqual(64);
      expect(Math.max(r.width, r.height) / Math.min(r.width, r.height), r.id).toBeLessThanOrEqual(1.25);
      expect(meta.pages ?? 1, r.id).toBe(1);
    }
  }, 120_000);

  it("leaves no stray file in public/logos/icons", () => {
    const listed = new Set(ICON_RECORDS.map((r) => r.file.replace(/^logos\/icons\//, "")));
    for (const f of readdirSync(join(process.cwd(), "public/logos/icons"))) expect(listed.has(f), f).toBe(true);
  });

  it("takes the harvested icon over the registry favicon, and the official SVG over both", () => {
    for (const r of ICON_RECORDS) {
      const logo = logoFor(r.id);
      expect(logo, r.id).not.toBeNull();
      if (logo!.kind !== "svg") expect(logo, r.id).toEqual({ src: "/" + r.file, kind: "icon" });
    }
  });
});

describe("archive summaries", () => {
  it("gives every reference a sentence from its own DESIGN.md, never the synthesized fallback", () => {
    for (const r of REGISTRY) {
      const s = summaryOf(r.id);
      expect(s.length, r.id).toBeGreaterThan(20);
      expect(s).not.toMatch(/DESIGN\.md reference ·/);
      expect(s).not.toMatch(/\*\*|`|\]\(/);
    }
  });

  it("takes the first sentence and keeps CJK full stops", () => {
    expect(firstSentence("Toss is calm. It is blue.")).toBe("Toss is calm.");
    expect(firstSentence("**Bold** `code` [link](https://x) works.\n\nNext.")).toBe("Bold code link works.");
    expect(firstSentence("デザインです。次の文。")).toBe("デザインです。");
    expect(firstSentence("SoftBank Corp. is a carrier. It began in 1986.")).toBe("SoftBank Corp. is a carrier.");
    expect(firstSentence("A U.S. bank, e.g. this one. Next.")).toBe("A U.S. bank, e.g. this one.");
    // A leading quoted tagline is the brand's slogan; the summary is the sentence after it.
    expect(firstSentence('"Big files? That\'s us. Also us." WeTransfer moves big files. More.')).toBe("WeTransfer moves big files.");
    expect(summaryOf("wetransfer")).toMatch(/^WeTransfer /);
  });

  it("marks the language of a summary written in Korean", () => {
    expect(textLang(summaryOf("krds"), "KR")).toBe("ko");
    expect(textLang(summaryOf("toss"), "KR")).toBe("en");
  });
});

describe("archive rows", () => {
  it("maps registry countries onto the six region chips", () => {
    expect(["KR", "JP", "TW", "CN", "US", "UK"].map(archiveRegion)).toEqual(["KR", "JP", "TW", "CN", "other", "other"]);
  });

  it("names the brand in English on /design-systems and by the Hangul displayName on /ko", () => {
    const en = archiveRow(REGISTRY_BY_ID.toss, "en", { toss: 12 });
    const ko = archiveRow(REGISTRY_BY_ID.toss, "ko", {});
    expect(en).toMatchObject({ name: "Toss", href: "/design-systems/toss", installs: 12, region: "KR", domain: "fintech" });
    expect(ko).toMatchObject({ name: "토스", href: "/ko/design-systems/toss", installs: 0, views: 0, country: "KR" });
    expect(en.terms).toContain("토스");
  });

  it("links a reference without a Korean page to its English page from /ko", () => {
    const koPages = new Set<string>(KO_DETAIL_IDS);
    const foreign = REGISTRY.find((r) => !koPages.has(r.id));
    expect(foreign).toBeDefined();
    expect(archiveRow(foreign!, "ko", {}).href).toBe(`/design-systems/${foreign!.id}`);
  });
});

describe("archive card palette", () => {
  it("uses only the reference's own hex tokens, primary first, at most five", () => {
    for (const r of REGISTRY) {
      const pal = paletteOf(r);
      const own = new Set([r.primaryColor, ...Object.values(r.tokens?.colors ?? {})].map((v) => String(v).toLowerCase()));
      expect(pal.length).toBeLessThanOrEqual(5);
      for (const c of pal) {
        expect(c).toMatch(/^#[0-9a-f]{6}$/);
        expect(own.has(c)).toBe(true);
      }
      if (/^#[0-9a-f]{6}$/i.test(r.primaryColor)) expect(pal[0]).toBe(r.primaryColor.toLowerCase());
    }
  });

  it("prefers distinct hues over shades of one colour", () => {
    const pal = paletteOf({
      primaryColor: "#3182f6",
      tokens: { colors: { a: "#3182f6", b: "#2272eb", c: "#f04452", d: "#ffffff", e: "#191f28", f: "#1b64da" } },
    } as never);
    expect(pal.slice(0, 2)).toEqual(["#3182f6", "#f04452"]);
    expect(pal).toContain("#191f28");
    expect(pal).toContain("#ffffff");
  });
});
