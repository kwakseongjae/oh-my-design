import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { REGISTRY, REGISTRY_BY_ID } from "@/data/registry.generated";
import { KO_DETAIL_IDS } from "@/lib/i18n/ko-detail.server";
import {
  archiveRegion,
  archiveRow,
  firstSentence,
  logoCoverage,
  logoFilePaths,
  logoFor,
  summaryOf,
  textLang,
  paletteOf,
} from "./archive-rows.server";

describe("archive logos: genuine or none", () => {
  it("never uses Simple Icons or a GitHub avatar, and never a keycap or initial", () => {
    for (const r of REGISTRY) {
      const logo = logoFor(r.id);
      if (!logo) continue;
      expect(logo.src).not.toMatch(/simpleicons|github\.com\/[^/]+\.png/);
      if (logo.kind === "svg") expect(logo.src).toMatch(/^\/brand-svg\/[^/]+\/(symbol|wordmark|combined)\.svg$/);
      else expect(logo.src).toBe(r.logo.slug);
    }
  });

  it("gives Simple Icons and GitHub-avatar references no logo unless the official collection has one", () => {
    expect(REGISTRY_BY_ID.stripe.logo.type).toBe("simpleicons");
    expect(logoFor("stripe")).toBeNull();
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
    expect(c.svg + c.favicon + c.none).toBe(REGISTRY.length);
    expect(c.svg).toBeGreaterThan(70);
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
