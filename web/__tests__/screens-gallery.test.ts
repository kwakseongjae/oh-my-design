import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterAll, afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import sitemap from "@/app/sitemap";
import EnScreensPage, { metadata as enMetadata } from "@/app/(en)/screens/page";
import KoScreensPage, { metadata as koMetadata } from "@/app/(ko)/ko/screens/page";
import EnServicePage, { generateStaticParams as enServiceParams, generateMetadata as enServiceMetadata } from "@/app/(en)/screens/[id]/page";
import KoServicePage, { generateStaticParams as koServiceParams } from "@/app/(ko)/ko/screens/[id]/page";
import { LandingA } from "@/components/brand-a/landing";
import { makeGalleryFixture } from "@/lib/screens/test-fixture";
import { ScreensGallery } from "@/components/screens/screens-gallery";
import type { GalleryModel } from "@/lib/screens/gallery";

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

  it("no service has a screens page: no params to prerender, and any id is not found", async () => {
    for (const shut of [() => {}, shutInProduction]) {
      shut();
      for (const params of [enServiceParams, koServiceParams]) expect(params()).toEqual([]);
      for (const Page of [EnServicePage, KoServicePage]) {
        const el = await Page({ params: Promise.resolve({ id: "karrot" }) });
        expect(() => renderToStaticMarkup(el)).toThrow(NOT_FOUND);
      }
    }
  });
});

describe("gate open (a local folder in development)", () => {
  it("/ko/screens: the generic title and sentence, four filters with their values, the count, one card per service", () => {
    open();
    const html = renderToStaticMarkup(createElement(KoScreensPage));
    expect(html).toContain('<h1 class="sq-page-title">서비스 화면</h1>');
    expect(html).toContain(
      '<p class="sq-gal-lede">실제 서비스의 화면을 서비스별, 종류별로 모았습니다. 서비스를 누르면 그 서비스의 화면과 DESIGN.md를 함께 볼 수 있습니다.</p>',
    );
    expect(html).not.toContain("한국 서비스");
    // filters, not toggles: four comboboxes, each naming the filter and its value, and no pressed buttons
    const filters = html.slice(html.indexOf('class="sq-gal-filters"'), html.indexOf('class="sq-gal-count"'));
    expect(filters.match(/role="combobox"/g)).toHaveLength(4);
    expect(filters.match(/class="sq-gal-f-k">[^<]+</g)!.map((s) => s.replace(/.*>|</g, ""))).toEqual(["나라", "기기", "분야", "종류"]);
    expect(filters.match(/class="sq-gal-f-c">[^<]+</g)!.map((s) => s.replace(/.*>|</g, ""))).toEqual(["전체", "모바일", "전체", "전체"]);
    // the device and type values are words: no width anywhere on the page
    expect(html).not.toMatch(/>[^<]*(390|1440)[^<]*</);
    expect(html).not.toMatch(/aria-pressed|aria-expanded="true"|모두 보기|접기|sq-scr-dlg|sq-gal-dots|>폰<|>웹</);
    expect(html).toContain('<p class="sq-gal-count" role="status">화면 9개 · 서비스 3곳</p>');
    // a card is one link to the service's screens page (mobile is where it opens, so no query)
    expect(html.match(/<a class="sq-gal-link" href="[^"]+"/g)).toEqual([
      '<a class="sq-gal-link" href="/ko/screens/29cm"',
      '<a class="sq-gal-link" href="/ko/screens/karrot"',
      '<a class="sq-gal-link" href="/ko/screens/wanted"',
    ]);
    // mobile stills only (the event screen exists on desktop only), home first, the empty search as the last resort
    const karrot = html.slice(html.indexOf('href="/ko/screens/karrot"'), html.indexOf('href="/ko/screens/wanted"'));
    expect(karrot.match(/src="\/screens-local[^"]+"/g)).toEqual(['src="/screens-local/karrot/390-home.jpg"', 'src="/screens-local/karrot/390-search-empty.jpg"']);
    expect(karrot).toContain('width="390" height="844" loading="eager"');
    expect(karrot).toContain('<span class="sq-gal-name">당근</span><span class="sq-gal-meta">컨슈머 테크 · 화면 3개</span>');
    expect(html).not.toContain("1440-");
    expect(html).not.toContain("/screens-local/not-a-reference");
    // nothing published: no rights lines
    expect(html).not.toContain("sq-scr-notice");
  });

  it("a view with nothing in it says so and offers to clear the filters", () => {
    // mobile stills are the default view; this service has a desktop still only
    const model: GalleryModel = {
      services: [
        {
          slug: "karrot",
          name: "당근",
          href: "/ko/design-systems/karrot",
          screensHref: "/ko/screens/karrot",
          country: "KR",
          category: null,
          categoryName: null,
          logo: null,
          count: 1,
          devices: ["desktop"],
        },
      ],
      shots: [{ slug: "karrot", key: "home", type: "홈", title: "홈", state: null, stills: [{ width: 1440, still: "/s/1440-home.jpg", thumb: null, full: null }] }],
      shot: null,
      signedOut: true,
      devices: ["mobile", "desktop"],
      countries: [{ value: "KR", label: "한국" }],
      categories: [],
      published: false,
    };
    const html = renderToStaticMarkup(createElement(ScreensGallery, { model, locale: "ko" }));
    expect(html).toContain('<p class="sq-gal-count" role="status">화면 0개 · 서비스 0곳</p>');
    expect(html).toContain('<div class="sq-gal-empty"><p>이 조건에 맞는 화면이 없습니다.</p><button type="button">필터 지우기</button></div>');
    expect(html).not.toContain("sq-gal-grid");
    expect(renderToStaticMarkup(createElement(ScreensGallery, { model, locale: "en" }))).toContain('<p>No screens match these filters.</p><button type="button">Clear filters</button>');
  });

  it("/screens: English chrome, registry names and the archive's category names", () => {
    open();
    const html = renderToStaticMarkup(createElement(EnScreensPage));
    expect(html).toContain('<h1 class="sq-page-title">Product screens</h1>');
    expect(html).toContain("Screens of real products, gathered by service and by type. Open a service to see its screens alongside its DESIGN.md.");
    expect(html).toContain('<p class="sq-gal-count" role="status">9 screens · 3 services</p>');
    expect(html).toContain('<span class="sq-gal-name">Karrot</span><span class="sq-gal-meta">Consumer tech · 3 screens</span>');
    expect(html).toContain('href="/screens/karrot"');
    expect(html.match(/class="sq-gal-f-c">[^<]+</g)!.map((s) => s.replace(/.*>|</g, ""))).toEqual(["All", "Mobile", "All", "All"]);
    expect(html).not.toContain("당근");
  });

  it("every service with screens has a screens page in both languages; any other id has none", async () => {
    open();
    expect(enServiceParams()).toEqual([{ id: "29cm" }, { id: "karrot" }, { id: "wanted" }]);
    expect(koServiceParams()).toEqual(enServiceParams());
    const missing = await EnServicePage({ params: Promise.resolve({ id: "not-a-reference" }) });
    expect(() => renderToStaticMarkup(missing)).toThrow(NOT_FOUND);
    expect((await enServiceMetadata({ params: Promise.resolve({ id: "karrot" }) })).robots).toEqual({ index: false, follow: false });
  });

  it("/ko/screens/karrot: back to the gallery, the name, the facts, DESIGN.md, the downloads, one device, types in order", async () => {
    open();
    const html = renderToStaticMarkup(await KoServicePage({ params: Promise.resolve({ id: "karrot" }) }));
    expect(html).toMatch(/<a class="sq-svc-back" href="\/ko\/screens">.*서비스 화면<\/a>/);
    expect(html).toContain('<h1 class="sq-page-title">당근 서비스 화면</h1>');
    expect(html).toContain('<p class="sq-svc-facts">컨슈머 테크 · 화면 3개 · 2026년 11월 21일 촬영 · 로그아웃 상태</p>');
    expect(html).toContain('<a class="sq-svc-btn sq-svc-btn-primary" href="/ko/design-systems/karrot">DESIGN.md 보기</a>');
    expect(html).toContain(">전체 내려받기</button>");
    expect(html).toContain("화면의 권리는 각 회사에 있습니다. 묶음 파일에 든 README.txt에 출처와 찍은 날, 내려 달라는 요청 방법을 적었습니다.");
    // one device at a time, named by word: mobile opens; no desktop still, no width in any label
    expect(html).toMatch(/<div class="sq-scr-seg" role="group" aria-label="기기"><button type="button" aria-pressed="true">모바일<\/button><button type="button" aria-pressed="false">데스크톱<\/button><\/div>/);
    expect(html).toContain('src="/screens-local/karrot/390-home.jpg"');
    expect(html).not.toContain("1440-");
    expect(html).not.toMatch(/>[^<]*(390|1440)[^<]*</);
    // types in the fixed order; the empty search with its type; the blocked detail says so; withheld never appears
    expect(html.match(/<h2 id="g-[^"]+">[^<]+/g)!.map((s) => s.replace(/.*>/, "").trim())).toEqual(["홈", "검색 결과", "상세"]);
    expect(html).toContain('aria-label="검색 결과 화면 내려받기"');
    expect(html).toContain("막혀서 찍지 못했습니다");
    expect(html).toContain('<span class="sq-scr-chip">빈 상태</span>');
    // similar services: the gallery's cards, to their own screens pages
    expect(html).toContain('<h2 id="sq-svc-similar">비슷한 서비스</h2>');
    expect(html.match(/<a class="sq-gal-link" href="[^"]+"/g)).toEqual(['<a class="sq-gal-link" href="/ko/screens/29cm"', '<a class="sq-gal-link" href="/ko/screens/wanted"']);
    // nothing published: no rights lines, no masked line
    expect(html).not.toContain("sq-scr-notice");
  });

  it("/screens/karrot: English names, the English item page", async () => {
    open();
    const html = renderToStaticMarkup(await EnServicePage({ params: Promise.resolve({ id: "karrot" }) }));
    expect(html).toContain('<h1 class="sq-page-title">Karrot product screens</h1>');
    expect(html).toContain('<p class="sq-svc-facts">Consumer tech · 3 screens · shot on 2026-11-21 · signed out</p>');
    expect(html).toContain('href="/design-systems/karrot">View DESIGN.md</a>');
    expect(html).toContain('aria-label="Download the Search results screens"');
    expect(html).toContain(">Mobile</button>");
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
    // two rows; each service once per row; every still named and opening its screen on the service's screens page
    expect(section.match(/<ul class="sq-wall-row">/g)).toHaveLength(2);
    expect(section.match(/class="sq-wall-tile"/g)).toHaveLength(6);
    expect(section).toContain('<a class="sq-wall-tile" aria-label="당근, 홈 화면" href="/ko/screens/karrot#home">');
    expect(section).toContain('src="/screens-local/karrot/390-home.jpg"');
    // one desktop still in each row (three services), drawn wide, opening on desktop
    expect(section.match(/<li class="sq-wall-wide">/g)).toHaveLength(2);
    expect(section).toMatch(/<li class="sq-wall-wide"><a class="sq-wall-tile" aria-label="[^"]+" href="\/ko\/screens\/[a-z0-9]+\?device=desktop#home">/);
    // one action, to the gallery; the strip in the showcase is gone
    expect(section).toMatch(/<a class="sq-sc-cta" href="\/ko\/screens">서비스 화면 보기<\/a>/);
    expect(ko).not.toMatch(/sq-gal-strip|sc-screens/);
    const en = renderToStaticMarkup(await LandingA({ locale: "en" }));
    expect(en).toContain('<h2 id="h-screens">See the real screens too</h2>');
    expect(en).toContain("9 screens from 3 services.");
    expect(en).toContain('aria-label="Karrot, 홈 화면" href="/screens/karrot#home"');
    expect(en).toMatch(/<a class="sq-sc-cta" href="\/screens">See product screens<\/a>/);
    for (const locale of ["ja", "zh-tw"] as const) expect(renderToStaticMarkup(await LandingA({ locale }))).not.toMatch(/sq-wall|sq-gal/);
  });
});
