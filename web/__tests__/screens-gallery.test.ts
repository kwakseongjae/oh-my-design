import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterAll, afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import sitemap from "@/app/sitemap";
import EnScreensPage, { metadata as enMetadata } from "@/app/(en)/screens/page";
import KoScreensPage, { metadata as koMetadata } from "@/app/(ko)/ko/screens/page";
import { LandingA } from "@/components/brand-a/landing";
import { makeGalleryFixture } from "@/lib/screens/test-fixture";

// next/font/local only works inside the Next compiler; the landing needs nothing from it but the class.
vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "t-inter", className: "t-inter", style: { fontFamily: "Inter" } }),
}));
vi.mock("@/components/brand-a/journey/faces", () => ({
  pretendard: { variable: "t-pretendard", style: { fontFamily: "Pretendard" } },
  ibmPlexSans: { variable: "t-plex", style: { fontFamily: "IBM Plex Sans" } },
  notoSansJP: { variable: "t-noto-jp", style: { fontFamily: "Noto Sans JP" } },
}));

/**
 * The /screens gallery and the landing section that leads to it (2026-11-21). The screens are other companies' and
 * their publication is not decided, so what is tested first is the gate (lib/screens/local.server.ts screensRoot):
 * shut, both pages are not found, the landing is byte for byte what it is without this feature, and nothing points
 * at /screens from a sitemap, the header or the footer. Open (a local folder in development), the pages draw.
 */

const WEB = path.resolve(__dirname, "..");
const fx = makeGalleryFixture([
  { slug: "karrot", platform: "both" },
  { slug: "wanted", platform: "web", tokens: false },
  { slug: "29cm", platform: "both" },
]);
afterAll(fx.cleanup);
// Hermetic: a folder exported in the shell must not change what these assertions see; the star pill stays offline.
beforeEach(() => {
  vi.stubEnv("OMD_SCREENS_DIR", "");
  vi.stubGlobal("fetch", () => Promise.reject(new Error("offline in tests")));
});
afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});
const open = () => {
  vi.stubEnv("OMD_SCREENS_DIR", fx.root);
  vi.stubEnv("NODE_ENV", "development");
};
const shutInProduction = () => {
  vi.stubEnv("OMD_SCREENS_DIR", fx.root);
  vi.stubEnv("NODE_ENV", "production");
};

const NOT_FOUND = /NEXT_HTTP_ERROR_FALLBACK;404/;
const pages = [
  ["/screens", EnScreensPage],
  ["/ko/screens", KoScreensPage],
] as const;

describe("gate shut", () => {
  it("both pages are not found without a folder, and in production even with one", () => {
    for (const [route, Page] of pages) {
      expect(() => renderToStaticMarkup(createElement(Page)), route).toThrow(NOT_FOUND);
      shutInProduction();
      expect(() => renderToStaticMarkup(createElement(Page)), route).toThrow(NOT_FOUND);
      vi.stubEnv("OMD_SCREENS_DIR", "");
    }
  });

  it("the landing renders exactly as without the feature: no section, no markup, no link", async () => {
    for (const locale of ["en", "ko", "ja", "zh-tw"] as const) {
      const without = renderToStaticMarkup(await LandingA({ locale }));
      shutInProduction();
      const withFolder = renderToStaticMarkup(await LandingA({ locale }));
      vi.stubEnv("OMD_SCREENS_DIR", "");
      expect(withFolder, locale).toBe(without);
      expect(without, locale).not.toMatch(/sq-gal|screens-local|\/screens|#screens/);
    }
  });

  it("is in no sitemap and linked from no shared header or footer, even with the gate open", () => {
    open();
    expect(sitemap().some((r) => r.url.includes("/screens"))).toBe(false);
    const chrome = ["site-header.tsx", "site-footer.tsx", ...fs.readdirSync(path.join(WEB, "src/components/brand-a/copy")).map((f) => `copy/${f}`)];
    for (const f of chrome) expect(fs.readFileSync(path.join(WEB, "src/components/brand-a", f), "utf8"), f).not.toMatch(/["'`]\/(ko\/)?screens\b/);
  });

  it("never indexed or followed", () => {
    for (const m of [enMetadata, koMetadata]) expect(m.robots).toEqual({ index: false, follow: false });
  });
});

describe("gate open (a local folder in development)", () => {
  it("/ko/screens: Korean chrome, registry names, shelves by type, tiles named and linked to nothing but the dialog", () => {
    open();
    const html = renderToStaticMarkup(createElement(KoScreensPage));
    expect(html).toContain('<h1 class="sq-page-title">한국 서비스 화면</h1>');
    expect(html).toContain("3곳 · 화면 9개 · 2026년 11월 21일 촬영 · 로그아웃 상태");
    expect(html).toContain('aria-pressed="true">화면 종류별</button>');
    expect(html).toContain('aria-pressed="true">폰 390</button>');
    // shelves: 홈, then the empty state; the event screen exists only at 1440, so not on a phone shelf
    expect(html.match(/<section id="shelf-[^"]+"/g)).toEqual(['<section id="shelf-home"', '<section id="shelf-empty"']);
    expect(html).toContain('aria-label="당근, 홈 화면"');
    expect(html).toContain('src="/screens-local/karrot/390-home.jpg"');
    expect(html).not.toContain("1440-home.jpg");
    expect(html).toContain('<p class="sq-gal-title" lang="ko">홈 화면</p>');
    // dots only where tokens.json exists: karrot and 29cm have one on home, wanted none
    expect(html.match(/class="sq-gal-dots"/g)).toHaveLength(2);
    expect(html).not.toContain("/screens-local/not-a-reference");
  });

  it("/screens: English chrome and type names, English registry names, screen titles as shot", () => {
    open();
    const html = renderToStaticMarkup(createElement(EnScreensPage));
    expect(html).toContain('<h1 class="sq-page-title">Korean product screens</h1>');
    expect(html).toContain("3 services · 9 screens · shot on 2026-11-21 · signed out");
    expect(html).toContain('id="shelf-home-h">Home</h2>');
    expect(html).toContain('id="shelf-empty-h">Empty state</h2>');
    expect(html).toContain('aria-label="Karrot, 홈 화면"');
    expect(html).not.toContain("당근");
  });

  it("the landing gains one section after the catalog showcase, leading to the gallery (en and ko only)", async () => {
    open();
    const ko = renderToStaticMarkup(await LandingA({ locale: "ko" }));
    expect(ko).toContain('<section class="sq-gal-land" aria-labelledby="h-screens">');
    expect(ko).toContain("같은 화면, 3곳");
    expect(ko.indexOf("sq-gal-land")).toBeGreaterThan(ko.indexOf('aria-labelledby="h-close"'));
    expect(ko.indexOf("sq-gal-land")).toBeLessThan(ko.indexOf("</main>"));
    const en = renderToStaticMarkup(await LandingA({ locale: "en" }));
    expect(en).toContain("The same screens, 3 services");
    for (const locale of ["ja", "zh-tw"] as const) expect(renderToStaticMarkup(await LandingA({ locale }))).not.toContain("sq-gal");
  });
});
