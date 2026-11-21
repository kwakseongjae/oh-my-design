import fs from "node:fs";
import path from "node:path";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterAll, afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import sitemap from "@/app/sitemap";
import EnScreensPage from "@/app/(en)/screens/page";
import KoScreensPage from "@/app/(ko)/ko/screens/page";
import { LandingA } from "@/components/brand-a/landing";
import { SiteHeaderA } from "@/components/brand-a/site-header";
import { screensMetadata } from "@/components/screens/metadata";
import { ScreensNotice } from "@/components/screens/notice";
import { SCREENS_NOTICE } from "@/components/screens/notice-copy";
import { readScreens } from "@/lib/screens/local.server";
import { publicManifest, screensPublished, validManifest } from "@/lib/screens/public.server";
import { allScreens, screensOf } from "@/lib/screens/source.server";
import { makeGalleryFixture } from "@/lib/screens/test-fixture";
import * as publisher from "../scripts/publish-screens.mjs";

// The script is plain JavaScript: read its results loosely, as JSON.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Loose = any;
const collect = publisher.collect as (dir: string, opts: Record<string, unknown>) => Loose;
const withoutScreens = publisher.withoutScreens as (manifest: Loose, slug: string, key?: string | null) => Loose;

// Every published state here comes from a fixture manifest; pin the committed one to the shut state so these tests
// keep meaning the same once the real manifest is committed. The committed file itself is read from disk below.
vi.mock("@/data/screens-public.generated.json", () => ({ default: { generated: "", base: "", services: [] } }));
vi.mock("next/font/google", () => ({
  Inter: () => ({ variable: "t-inter", className: "t-inter", style: { fontFamily: "Inter" } }),
}));
vi.mock("@/components/screens/landing-row-slot", async () => ({
  ScreensLandingRowSlot: (await import("@/components/screens/landing-row")).ScreensLandingRow,
}));
vi.mock("@/components/brand-a/journey/faces", () => ({
  pretendard: { variable: "t-pretendard", style: { fontFamily: "Pretendard" } },
  ibmPlexSans: { variable: "t-plex", style: { fontFamily: "IBM Plex Sans" } },
  notoSansJP: { variable: "t-noto-jp", style: { fontFamily: "Noto Sans JP" } },
}));

/**
 * The published state (2026-11-22): the committed manifest lists services and the pages read the image store. The
 * shut state is proven in screens-gallery.test.ts and must not move; this file is its mirror, with a fixture manifest
 * written by the publishing script itself from a synthetic sheets folder, and the script's own refusals.
 */

const WEB = path.resolve(__dirname, "..");
const STORE = "https://store.example/screens";
const fx = makeGalleryFixture([
  { slug: "karrot", platform: "both", withheld: ["event"], masked: ["home"] },
  { slug: "wanted", platform: "web", tokens: false },
  { slug: "29cm", platform: "both" },
  { slug: "not-a-reference", platform: "both" },
]);
// A record whose still is a symlink out of the img folder: listed by no one.
fs.writeFileSync(path.join(fx.root, "secret.jpg"), "outside");
fs.symlinkSync(path.join(fx.root, "secret.jpg"), path.join(fx.root, "29cm", "img", "1440-outside.jpg"));
{
  const file = path.join(fx.root, "29cm", "screens.json");
  const walk = JSON.parse(fs.readFileSync(file, "utf8"));
  walk.records.push({ key: "outside", type: "홈", title: "outside", state: null, width: 1440, blocked: false });
  fs.writeFileSync(file, JSON.stringify(walk));
}
const result = collect(fx.root, { base: STORE, generated: "2026-11-22" });
const manifestFile = path.join(fx.root, "manifest.json");
fs.writeFileSync(manifestFile, JSON.stringify(result.manifest));
const localManifestFile = path.join(fx.root, "manifest-local.json");
fs.writeFileSync(localManifestFile, JSON.stringify({ ...result.manifest, base: "/screens-local" }));
afterAll(fx.cleanup);

const published = { OMD_SCREENS_MANIFEST: manifestFile, NODE_ENV: "development" };

beforeEach(() => {
  vi.stubEnv("OMD_SCREENS_DIR", "");
  vi.stubEnv("OMD_SCREENS_MANIFEST", "");
  vi.stubGlobal("fetch", () => Promise.reject(new Error("offline in tests")));
});
afterEach(() => {
  vi.unstubAllEnvs();
  vi.unstubAllGlobals();
});
const publish = () => {
  vi.stubEnv("OMD_SCREENS_MANIFEST", manifestFile);
  vi.stubEnv("NODE_ENV", "development");
};

describe("the publishing script (collect)", () => {
  const all = JSON.stringify(result.manifest);
  const listed = result.stills.map((s: { pathname: string }) => s.pathname);

  it("lists reference folders only, each still at screens/<slug>/<width>-<key>.jpg", () => {
    expect(result.manifest.services.map((s: { slug: string }) => s.slug)).toEqual(["29cm", "karrot", "wanted"]);
    expect(listed).toContain("screens/karrot/390-home.jpg");
    expect(result.refused).toContainEqual(expect.objectContaining({ slug: "not-a-reference", reason: "not a reference id" }));
  });

  it("never lists a withheld screen, at any width, in records, colours or stills", () => {
    const karrot = result.manifest.services.find((s: { slug: string }) => s.slug === "karrot");
    expect(karrot.records.some((r: { key: string }) => r.key === "event")).toBe(false);
    expect(karrot.colors.some((c: { screens: string[] }) => c.screens.includes("event"))).toBe(false);
    expect(listed.filter((p: string) => p.includes("karrot/") && p.includes("-event"))).toEqual([]);
    expect(result.refused).toContainEqual(expect.objectContaining({ slug: "karrot", key: "event", reason: expect.stringMatching(/^withheld/) }));
  });

  it("never lists a blocked record, a full page, a missing still, an unsafe key or a file outside the img folder", () => {
    expect(listed.some((p: string) => /-detail\.jpg$/.test(p))).toBe(false);
    expect(listed.some((p: string) => /\.full\.jpg$/.test(p))).toBe(false);
    expect(listed.some((p: string) => /ghost|evil|outside/.test(p))).toBe(false);
    const reasons = result.refused.map((r: { slug: string; key: string | null; reason: string }) => `${r.slug}/${r.key}: ${r.reason}`);
    expect(reasons).toContain("29cm/detail: blocked");
    expect(reasons).toContain("29cm/ghost: no still on disk");
    expect(reasons).toContain("29cm/../evil: unsafe key");
    expect(reasons.some((r: string) => r.startsWith("29cm/outside: outside the img folder"))).toBe(true);
    expect(result.refused).toContainEqual(expect.objectContaining({ slug: "29cm", reason: "full-page stills (never published)" }));
  });

  it("carries nothing but what the pages draw: no walk text, no notes, no local path", () => {
    expect(all).not.toMatch(/textHead|must not reach|withheld|blocked|full\.jpg|\/tmp\/|omd-screens-/);
    for (const s of result.manifest.services) for (const r of s.records) expect(Object.keys(r).sort()).toEqual(["key", "masked", "state", "title", "type", "width"]);
  });

  it("a takedown drops one screen (and its colour matches) or a whole service from the manifest", () => {
    const one = withoutScreens(result.manifest, "karrot", "home");
    const karrot = one.services.find((s: { slug: string }) => s.slug === "karrot");
    expect(karrot.records.some((r: { key: string }) => r.key === "home")).toBe(false);
    expect(karrot.colors.some((c: { screens: string[] }) => c.screens.includes("home"))).toBe(false);
    expect(withoutScreens(result.manifest, "karrot").services.map((s: { slug: string }) => s.slug)).toEqual(["29cm", "wanted"]);
  });

  it("the committed manifest is the shut state: no services, no base (change this test when publishing)", () => {
    const committed = JSON.parse(fs.readFileSync(path.join(WEB, "src/data/screens-public.generated.json"), "utf8"));
    expect(committed).toEqual({ generated: "", base: "", services: [] });
    expect(screensPublished({ NODE_ENV: "production" })).toBe(false);
  });
});

describe("the reader (public.server, source.server)", () => {
  it("is published with a manifest that lists services; production never reads a manifest path", () => {
    expect(screensPublished(published)).toBe(true);
    expect(screensPublished({ ...published, NODE_ENV: "production" })).toBe(false);
    expect(screensPublished({ OMD_SCREENS_MANIFEST: path.join(fx.root, "nope.json"), NODE_ENV: "development" })).toBe(false);
  });

  it("takes an https base, or a path here only when previewing; anything else is shut", () => {
    const m = { ...result.manifest };
    expect(validManifest({ ...m, base: STORE }, false)).not.toBeNull();
    expect(validManifest({ ...m, base: "/screens-local" }, false)).toBeNull();
    expect(validManifest({ ...m, base: "/screens-local" }, true)).not.toBeNull();
    for (const base of ["", "http://store.example/screens", "javascript:alert(1)", "https://store.example/a b", "//evil.example"]) expect(validManifest({ ...m, base }, true), base).toBeNull();
    expect(validManifest({ ...m, services: [] }, false)).toBeNull();
  });

  it("matches the local reader for the same sheets, minus full pages and blocked screens", () => {
    const local = { OMD_SCREENS_DIR: fx.root, NODE_ENV: "development" };
    for (const slug of ["karrot", "wanted", "29cm"]) {
      const a = readScreens(slug, local)!;
      const b = screensOf(slug, published)!;
      const strip = (m: typeof a) => ({
        ...m,
        published: null,
        cards: m.cards
          // blocked screens are not published; "outside" (a symlink out of img) the local reader lists by name and its
          // image route then refuses, while the script never lists it
          .filter((c) => !c.blocked && c.key !== "outside")
          .map((c) => ({ ...c, stills: c.stills.map((s) => ({ width: s.width, still: s.still.replace(/^.*\/(\d+-[^/]+\.jpg)$/, "$1") })) })),
      });
      expect(strip(b), slug).toEqual(strip(a));
      expect(b.cards.every((c) => c.stills.every((s) => s.full === null && s.still.startsWith(`/screens-img/${slug}/`)))).toBe(true);
      expect(b.published).toBe(true);
    }
    expect(screensOf("karrot", published)!.cards.find((c) => c.key === "home")!.masked).toBe(true);
    expect(screensOf("not-a-reference", published)).toBeNull();
  });

  it("drops a tampered record that says withheld or blocked, and composes URLs only from checked parts", () => {
    const tampered = structuredClone(result.manifest);
    const svc = tampered.services.find((s: { slug: string }) => s.slug === "29cm");
    svc.records.push({ key: "secret", type: "홈", title: "x", state: null, width: 390, masked: false, withheld: "users" });
    svc.records.push({ key: "detail", type: "상세", title: "x", state: null, width: 390, masked: false, blocked: true });
    svc.records.push({ key: "../../x", type: "홈", title: "x", state: null, width: 390, masked: false });
    svc.records.push({ key: "frac", type: "홈", title: "x", state: null, width: 390.5, masked: false });
    const file = path.join(fx.root, "tampered.json");
    fs.writeFileSync(file, JSON.stringify(tampered));
    const keys = screensOf("29cm", { OMD_SCREENS_MANIFEST: file, NODE_ENV: "development" })!.cards.map((c) => c.key);
    expect(keys).not.toContain("secret");
    expect(keys).not.toContain("detail");
    expect(keys).not.toContain("../../x");
    expect(keys).not.toContain("frac");
  });

  it("a manifest named to preview wins over the local folder; otherwise the folder wins over the manifest", () => {
    const both = { OMD_SCREENS_DIR: fx.root, NODE_ENV: "development", OMD_SCREENS_MANIFEST: manifestFile };
    expect(allScreens(both)![0].cards[0].stills[0].still).toMatch(/^\/screens-img\//);
    const folder = allScreens({ OMD_SCREENS_DIR: fx.root, NODE_ENV: "development" })!;
    expect(folder[0].cards[0].stills[0].still).toMatch(/^\/screens-local\//);
    expect(folder[0].published).toBe(false);
    expect(publicManifest({ OMD_SCREENS_MANIFEST: localManifestFile, NODE_ENV: "development" })!.base).toBe("/screens-local");
  });
});

describe("published: the pages", () => {
  it("/ko/screens: stills from our own /screens-img path (never the store's host), the masked line, the rights and takedown lines, no e-mail while none is set", () => {
    publish();
    const html = renderToStaticMarkup(createElement(KoScreensPage));
    expect(html).toContain('src="/screens-img/karrot/390-home.jpg"');
    expect(html).not.toContain("store.example");
    expect(html).not.toContain("/screens-local/");
    expect(html).toContain('<p class="sq-gal-masked">닉네임과 올린 사진을 가렸습니다</p>');
    expect(html.match(/sq-gal-masked/g)).toHaveLength(1);
    expect(html).toContain("<p>화면의 권리는 각 회사에 있습니다. 모두 로그아웃 상태로 2026년 11월 21일에 찍었습니다.</p>");
    expect(html).toContain(
      '<p>화면을 내려 달라는 요청은 <a href="https://github.com/kwakseongjae/oh-my-design/issues/new?template=screen-removal.yml" target="_blank" rel="noopener noreferrer">GitHub 요청 양식</a>으로 받습니다.</p>',
    );
    expect(html).not.toContain("mailto:");
  });

  it("/screens: the English lines", () => {
    publish();
    const html = renderToStaticMarkup(createElement(EnScreensPage));
    expect(html).toContain("<p>Each screen belongs to its company. All were shot signed out on 2026-11-21.</p>");
    expect(html).toContain(">request form on GitHub</a>.</p>");
    expect(html).toContain('<p class="sq-gal-masked">Nicknames and uploaded photos are hidden</p>');
  });

  it("the e-mail part renders only once an address is set", () => {
    const html = renderToStaticMarkup(createElement(ScreensNotice, { t: SCREENS_NOTICE.ko, scope: "service", shot: null, signedOut: true, service: "karrot", email: "takedown@example.com" }));
    expect(html).toContain("이 화면들의 권리는 이 회사에 있습니다.");
    expect(html).toContain('template=screen-removal.yml&amp;service=karrot"');
    expect(html).toContain('GitHub 요청 양식</a>이나 <a href="mailto:takedown@example.com">takedown@example.com</a>로 받습니다.');
  });

  it("indexable without image indexing, in the sitemap with each other as alternates", () => {
    for (const locale of ["en", "ko"] as const) {
      expect(screensMetadata(locale, published).robots).toEqual({ index: true, follow: true, noimageindex: true });
      expect(screensMetadata(locale, { NODE_ENV: "production" }).robots).toEqual({ index: false, follow: false });
    }
    publish();
    const urls = sitemap().map((r) => r.url);
    expect(urls).toContain("https://oh-my-design.kr/screens");
    expect(urls).toContain("https://oh-my-design.kr/ko/screens");
  });

  it("the header links the gallery between the archive and the skills, on English and Korean pages only", () => {
    const shut = renderToStaticMarkup(createElement(SiteHeaderA, { locale: "ko" }));
    expect(shut).not.toMatch(/\/screens/);
    publish();
    const ko = renderToStaticMarkup(createElement(SiteHeaderA, { locale: "ko" }));
    const menu = ko.slice(ko.indexOf('class="sq-menu"'), ko.indexOf("</nav>"));
    expect(menu.match(/<a [^>]*>[^<]+<\/a>/g)!.map((a) => a.replace(/<[^>]+>/g, ""))).toEqual(["아카이브", "화면", "스킬", "문서"]);
    expect(menu).toContain('href="/ko/screens">화면</a>');
    expect(renderToStaticMarkup(createElement(SiteHeaderA, { locale: "en" }))).toContain('href="/screens">Screens</a>');
    for (const locale of ["ja", "zh-tw"] as const) expect(renderToStaticMarkup(createElement(SiteHeaderA, { locale }))).not.toMatch(/\/screens/);
  });

  it("the landing strip prints /screens-img, never the store's host", async () => {
    publish();
    const ko = renderToStaticMarkup(await LandingA({ locale: "ko" }));
    expect(ko).toContain('src="/screens-img/karrot/390-home.jpg"');
    expect(ko).not.toContain("store.example");
    expect(ko).not.toContain("/screens-local/");
  });

  it("production never reads a manifest path: the pages are not found and the landing is as without the feature", async () => {
    vi.stubEnv("OMD_SCREENS_MANIFEST", manifestFile);
    vi.stubEnv("NODE_ENV", "production");
    expect(() => renderToStaticMarkup(createElement(KoScreensPage))).toThrow(/NEXT_HTTP_ERROR_FALLBACK;404/);
    expect(renderToStaticMarkup(await LandingA({ locale: "ko" }))).not.toMatch(/sq-gal|\/screens/);
  });

  it("the Screens tab prints /screens-img; a preview manifest with a local base keeps its own path", () => {
    const tab = screensOf("29cm", published)!;
    expect(tab.cards.flatMap((c) => c.stills.map((s) => s.still)).every((u) => u.startsWith("/screens-img/29cm/"))).toBe(true);
    const preview = screensOf("29cm", { OMD_SCREENS_MANIFEST: localManifestFile, NODE_ENV: "development" })!;
    expect(preview.cards[0].stills[0].still).toMatch(/^\/screens-local\/29cm\//);
  });

  it("the publishing script and the issue form are in the repository, and no image is", () => {
    expect(fs.existsSync(path.join(WEB, "scripts/publish-screens.mjs"))).toBe(true);
    const form = fs.readFileSync(path.join(WEB, "../.github/ISSUE_TEMPLATE/screen-removal.yml"), "utf8");
    expect(form).toMatch(/id: service/);
    // GitHub drops a form it cannot parse: no plain (unquoted) value may hold ": ", which YAML reads as a mapping.
    for (const line of form.split("\n")) expect(line, line).not.toMatch(/^\s*[\w-]+: (?!["'|>])[^#]*: /);
  });
});

describe("our own image path: the rewrite, its header and robots.txt", () => {
  const shutManifest = { generated: "", base: "", services: [] };
  async function loadConfig(manifest: unknown) {
    vi.resetModules();
    vi.doMock("../src/data/screens-public.generated.json", () => ({ default: manifest }));
    const config = (await import("../next.config")).default;
    vi.doUnmock("../src/data/screens-public.generated.json");
    return config;
  }
  afterEach(() => vi.resetModules());

  it("shut: no /screens-img rewrite and no header, so the path 404s like any unknown one", async () => {
    const config = await loadConfig(shutManifest);
    const rewrites = (await config.rewrites!()) as { source: string }[];
    expect(rewrites.some((r) => r.source.startsWith("/screens-img"))).toBe(false);
    expect(await config.headers!()).toEqual([]);
  });

  it("published: /screens-img/* goes to the store's base, answered with noindex, noimageindex", async () => {
    const config = await loadConfig({ ...result.manifest, base: STORE });
    const rewrites = (await config.rewrites!()) as { source: string; destination: string }[];
    expect(rewrites).toContainEqual({ source: "/screens-img/:path*", destination: `${STORE}/:path*` });
    expect(rewrites).toContainEqual({ source: "/:id/design.md", destination: "/r/:id" });
    expect(await config.headers!()).toEqual([
      { source: "/screens-img/:path*", headers: [{ key: "X-Robots-Tag", value: "noindex, noimageindex" }] },
    ]);
  });

  it("a manifest whose base is not https publishes nothing, even with services", async () => {
    const config = await loadConfig({ ...result.manifest, base: "/screens-local" });
    expect(((await config.rewrites!()) as { source: string }[]).some((r) => r.source.startsWith("/screens-img"))).toBe(false);
  });

  it("robots.txt disallows /screens-img/ for every agent only once published", async () => {
    const robots = (await import("@/app/robots")).default;
    const shut = [robots().rules].flat();
    for (const rule of shut) expect(rule.disallow, String(rule.userAgent)).toEqual(["/api/", "/qa-references"]);
    publish();
    const open = [robots().rules].flat();
    for (const rule of open) expect(rule.disallow, String(rule.userAgent)).toEqual(["/api/", "/qa-references", "/screens-img/"]);
  });
});
