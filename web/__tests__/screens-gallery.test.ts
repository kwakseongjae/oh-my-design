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
// The landing's screens section is a next/dynamic chunk (its own stylesheet), which renderToStaticMarkup leaves as an
// empty Suspense fallback; render the section itself so its markup can be checked. Next renders it on the server for real.
vi.mock("@/components/screens/landing-wall-slot", async () => ({
  ScreensWallSlot: (await import("@/components/screens/landing-wall")).ScreensWall,
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
      expect(without, locale).not.toMatch(/sq-gal|sq-wall|screens-local|\/screens|#screens|h-screens/);
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
  it("/ko/screens: the generic title and sentence, three filters with their values, the count, one card per service", () => {
    open();
    const html = renderToStaticMarkup(createElement(KoScreensPage));
    expect(html).toContain('<h1 class="sq-page-title">서비스 화면</h1>');
    expect(html).toContain('<p class="sq-gal-lede">실제 서비스의 화면을 서비스별로 모았습니다. 서비스를 누르면 그 서비스의 화면과 DESIGN.md를 함께 봅니다.</p>');
    expect(html).not.toContain("한국 서비스");
    // filters, not toggles: three comboboxes, each naming the filter and its value, and no pressed buttons
    const filters = html.slice(html.indexOf('class="sq-gal-filters"'), html.indexOf('class="sq-gal-count"'));
    expect(filters.match(/role="combobox"/g)).toHaveLength(3);
    expect(filters.match(/class="sq-gal-f-k">[^<]+</g)!.map((s) => s.replace(/.*>|</g, ""))).toEqual(["나라", "기기", "분야"]);
    expect(filters.match(/class="sq-gal-f-c">[^<]+</g)!.map((s) => s.replace(/.*>|</g, ""))).toEqual(["전체", "폰", "전체"]);
    expect(html).not.toMatch(/aria-pressed|aria-expanded="true"|모두 보기|접기|sq-scr-dlg|sq-gal-dots/);
    expect(html).toContain('<p class="sq-gal-count" role="status">화면 9개 · 서비스 3곳</p>');
    // a card is one link to the service's item page with its 서비스 화면 tab open
    expect(html.match(/<a class="sq-gal-link" href="[^"]+"/g)).toEqual([
      '<a class="sq-gal-link" href="/ko/design-systems/29cm#screens"',
      '<a class="sq-gal-link" href="/ko/design-systems/karrot#screens"',
      '<a class="sq-gal-link" href="/ko/design-systems/wanted#screens"',
    ]);
    // phone stills only (the event screen exists at 1440 only), home first, the empty search as the last resort
    const karrot = html.slice(html.indexOf('href="/ko/design-systems/karrot#screens"'), html.indexOf('href="/ko/design-systems/wanted#screens"'));
    expect(karrot.match(/src="\/screens-local[^"]+"/g)).toEqual(['src="/screens-local/karrot/390-home.jpg"', 'src="/screens-local/karrot/390-search-empty.jpg"']);
    expect(karrot).toContain('width="390" height="844" loading="eager"');
    expect(karrot).toContain('<span class="sq-gal-name">당근</span><span class="sq-gal-meta">컨슈머 테크 · 화면 3개</span>');
    expect(html).not.toContain("1440-");
    expect(html).not.toContain("/screens-local/not-a-reference");
    // nothing published: no rights lines
    expect(html).not.toContain("sq-scr-notice");
  });

  it("/screens: English chrome, registry names and the archive's category names", () => {
    open();
    const html = renderToStaticMarkup(createElement(EnScreensPage));
    expect(html).toContain('<h1 class="sq-page-title">Product screens</h1>');
    expect(html).toContain("Screens of real products, gathered by service.");
    expect(html).toContain('<p class="sq-gal-count" role="status">9 screens · 3 services</p>');
    expect(html).toContain('<span class="sq-gal-name">Karrot</span><span class="sq-gal-meta">Consumer tech · 3 screens</span>');
    expect(html).toContain('href="/design-systems/karrot#screens"');
    expect(html).not.toContain("당근");
  });

  it("the landing gains a section of its own right after the journey, before the CLI section (en and ko only)", async () => {
    open();
    const ko = renderToStaticMarkup(await LandingA({ locale: "ko" }));
    const at = ko.indexOf('<section class="sq-sec sq-wall-sec"');
    expect(at).toBeGreaterThan(ko.indexOf('id="reference"'));
    expect(at).toBeLessThan(ko.indexOf('id="use"'));
    expect(ko.indexOf("sq-wall")).toBe(ko.indexOf("sq-wall-sec"));
    const section = ko.slice(at, ko.indexOf('id="use"'));
    expect(section).toContain('<h2 id="h-screens">실제 화면도 함께 봅니다</h2>');
    expect(section).toContain('<p class="sq-intro">서비스 3곳의 화면 9개를 모았습니다. 화면에서 그 회사의 DESIGN.md로 바로 이어집니다.</p>');
    // two rows; each service once per row; every still named and leading to its service's tab
    expect(section.match(/<ul class="sq-wall-row">/g)).toHaveLength(2);
    expect(section.match(/class="sq-wall-tile"/g)).toHaveLength(6);
    expect(section).toContain('<a class="sq-wall-tile" aria-label="당근, 홈 화면" href="/ko/design-systems/karrot#screens">');
    expect(section).toContain('src="/screens-local/karrot/390-home.jpg"');
    // one web still in each row (three services), drawn wide
    expect(section.match(/<li class="sq-wall-wide">/g)).toHaveLength(2);
    // one action, to the gallery; the strip in the showcase is gone
    expect(section).toMatch(/<a class="sq-sc-cta" href="\/ko\/screens">서비스 화면 보기<\/a>/);
    expect(ko).not.toMatch(/sq-gal-strip|sc-screens/);
    const en = renderToStaticMarkup(await LandingA({ locale: "en" }));
    expect(en).toContain('<h2 id="h-screens">See the real screens too</h2>');
    expect(en).toContain("9 screens from 3 services.");
    expect(en).toContain('aria-label="Karrot, 홈 화면"');
    expect(en).toMatch(/<a class="sq-sc-cta" href="\/screens">See product screens<\/a>/);
    for (const locale of ["ja", "zh-tw"] as const) expect(renderToStaticMarkup(await LandingA({ locale }))).not.toMatch(/sq-wall|sq-gal/);
  });
});
