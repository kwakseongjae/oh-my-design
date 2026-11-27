import fs from "node:fs";
import path from "node:path";
import { describe, expect, it, vi } from "vitest";
import logoManifest from "@/data/brand-logos.json";
import { REGISTRY_BY_ID } from "@/data/registry.generated";
import { REFERENCE_QUALITY_BY_ID } from "@/data/reference-quality.generated";
import { REGION_ORDER } from "@/lib/landing-a/picks";
import { SITE_LOCALES } from "@/lib/i18n/site-locales";
import { getR10 } from "@/components/brand-a/copy/r10";
import { SHOWCASE_PICKS, archiveCount, localeOfR10, opticalSize, showcaseFor } from "@/components/brand-a/catalog-showcase";
import { catalogPathFor } from "@/lib/i18n/ko-detail";
import { hasDetail } from "@/lib/i18n/detail-locales";

/**
 * Round 11 chrome (docs/REDESIGN_R11_PLAN_2026-10-20.md W5, W9, item 29). The showcase renders
 * from bundled data only, so everything it would otherwise check on disk is checked here: the
 * file exists, its viewBox matches the ratio written in the pick list, and the manifest's own
 * rules hold (no high-risk logo, no dark-background variant, a verified reference behind it).
 */
const WEB = path.resolve(__dirname, "..");
const read = (p: string) => fs.readFileSync(path.join(WEB, p), "utf8");

interface Variant { ref: string; source?: string; license?: string; dark_bg?: boolean; risk_tier?: string }
interface Rec { id: string; risk_tier?: string; variants: Record<string, Variant> }
const RECS = (logoManifest as unknown as { records: Rec[] }).records;
const REC = new Map(RECS.map((r) => [r.id, r]));
const PICKS = Object.entries(SHOWCASE_PICKS).flatMap(([region, ps]) => ps.map((p) => ({ region, ...p })));

describe("catalog showcase: the pick list", () => {
  it("five picks per country, no company twice", () => {
    for (const ps of Object.values(SHOWCASE_PICKS)) expect(ps).toHaveLength(5);
    expect(new Set(PICKS.map((p) => p.id)).size).toBe(PICKS.length);
  });

  it("every pick is an official logo the manifest allows on a moving tile", () => {
    for (const p of PICKS) {
      const rec = REC.get(p.id);
      expect(rec, p.id).toBeDefined();
      const v = rec!.variants[p.variant];
      expect(v, `${p.id}/${p.variant}`).toBeDefined();
      expect(rec!.risk_tier, p.id).not.toBe("high");
      expect(v.risk_tier, p.id).not.toBe("high");
      expect(v.dark_bg, p.id).toBeFalsy();
      expect(v.source && v.license, p.id).toBeTruthy();
    }
  });

  it("never shows LINE, Cybozu or Loglass (high risk: no grid, no motion, ask first)", () => {
    const high = RECS.filter((r) => r.risk_tier === "high").map((r) => r.id);
    expect(high.sort()).toEqual(["cybozu", "line", "loglass"]);
    for (const id of high) expect(PICKS.some((p) => p.id === id), id).toBe(false);
  });

  it("the stored file exists and its viewBox matches the written ratio", () => {
    for (const p of PICKS) {
      const svg = read(`public/${REC.get(p.id)!.variants[p.variant].ref}`);
      const vb = svg.match(/viewBox="([^"]+)"/)?.[1].trim().split(/[\s,]+/).map(Number);
      expect(vb, p.id).toBeDefined();
      expect(Math.abs(vb![2] / vb![3] - p.ratio), p.id).toBeLessThan(0.01);
    }
  });

  it("behind every logo is a verified reference from that country", () => {
    for (const p of PICKS) {
      expect(REGISTRY_BY_ID[p.id]?.country, p.id).toBe(p.region);
      expect(REFERENCE_QUALITY_BY_ID[p.id]?.status, p.id).toBe("verified_v2");
    }
  });

  it("only Toss crops, and only its empty left slot", () => {
    const cropped = PICKS.filter((p) => p.crop);
    expect(cropped.map((p) => p.id)).toEqual(["toss"]);
    // the toss header wordmark draws from x = 242.5 of 656.3: the cut stays inside the empty slot
    const svg = read("public/brand-svg/toss/wordmark.svg");
    const firstX = Number(svg.match(/<path d="M([\d.]+)/)?.[1]);
    expect(firstX).toBeGreaterThan(cropped[0].crop! * 656.3);
  });
});

describe("catalog showcase: per locale", () => {
  it("three rows of five logos and a +N tile, in each locale's region order", () => {
    for (const l of SITE_LOCALES) {
      const g = showcaseFor(l);
      expect(g.map((x) => x.region), l).toEqual(REGION_ORDER[l].filter((r) => r !== "CN"));
      for (const row of g) {
        expect(row.items, `${l} ${row.region}`).toHaveLength(5);
        // "+N more" opens the archive this landing links to, filtered to the row's country, and N is
        // exactly what that filter lists beyond the five logos
        expect(row.more, `${l} ${row.region}`).not.toBeNull();
        expect(row.more!.href).toBe(`${catalogPathFor(l)}?region=${row.region}`);
        expect(row.more!.n).toBe(archiveCount(l, row.region) - 5);
        expect(row.more!.aria).toContain(String(row.more!.n));
      }
    }
  });

  it("links open the item page; /ko opens the Korean page that exists for every verified reference, /ja the Japanese one for a Japanese reference", () => {
    for (const l of SITE_LOCALES) {
      for (const it of showcaseFor(l).flatMap((g) => g.items)) {
        // every showcase item is verified (catalog-showcase.tsx)
        const own = hasDetail(l, REGISTRY_BY_ID[it.id]!.country, "verified_v2");
        expect(it.href, `${l} ${it.id}`).toBe(own ? `/${l}/design-systems/${encodeURIComponent(it.id)}` : `/design-systems/${encodeURIComponent(it.id)}`);
        expect(it.src).toMatch(/^\/brand-svg\/[\w-]+\/(wordmark|combined|symbol)\.svg$/);
      }
    }
  });

  it("names the company natively only on its own country's landing", () => {
    const label = (l: (typeof SITE_LOCALES)[number], id: string) => showcaseFor(l).flatMap((g) => g.items).find((x) => x.id === id)!.label;
    expect(label("en", "toss")).toBe("Toss DESIGN.md");
    expect(label("ko", "toss")).toBe("토스 DESIGN.md");
    expect(label("ko", "mercari")).toBe(`${REGISTRY_BY_ID.mercari.name} DESIGN.md`);
    expect(label("ja", "toyota")).toBe(`${REGISTRY_BY_ID.toyota.displayName} の DESIGN.md`);
    expect(label("zh-tw", "eslite")).toBe(`${REGISTRY_BY_ID.eslite.displayName} 的 DESIGN.md`);
  });

  it("optical size keeps every logo inside its box", () => {
    for (const p of PICKS) {
      const { w, h } = opticalSize(p.crop ? p.ratio * (1 - p.crop) : p.ratio);
      expect(w, p.id).toBeLessThanOrEqual(132);
      expect(h, p.id).toBeLessThanOrEqual(40);
      expect(w * h, p.id).toBeGreaterThan(1800);
    }
  });

  it("CloseSection reads its locale back from the round-10 copy it is given", () => {
    for (const l of SITE_LOCALES) expect(localeOfR10(getR10(l))).toBe(l);
  });
});

describe("header: Skills opens the docs skills page (#29)", () => {
  it("every site locale maps to its docs locale and its skills page", async () => {
    const { DOCS_LOCALE_OF, skillsHrefFor } = await import("@/components/brand-a/site-header");
    const { DOC_LOCALES } = await import("@/lib/docs/locales");
    expect(Object.keys(DOCS_LOCALE_OF).sort()).toEqual([...SITE_LOCALES].sort());
    for (const l of SITE_LOCALES) {
      expect(DOC_LOCALES).toContain(DOCS_LOCALE_OF[l]);
      expect(skillsHrefFor(l)).toBe(`/docs/${l}/skills`);
    }
    expect(skillsHrefFor("en", "zh-cn")).toBe("/docs/zh-cn/skills");
  });
  it("no landing anchor is left in the header", () => {
    expect(read("src/components/brand-a/site-header.tsx")).not.toMatch(/#skills/);
  });
});

describe("header: Blog is the last nav link (owner, 2026-11-23)", () => {
  const menuOf = (html: string, cls: string) => {
    const start = html.indexOf(`class="${cls}"`);
    return html.slice(start, html.indexOf("</nav>", start));
  };
  const anchors = (menu: string) => [...menu.matchAll(/<a [^>]*href="([^"]+)"[^>]*>([^<]+)<\/a>/g)].map((m) => [m[1], m[2]]);

  it("every locale: after Docs, the footer's own label and link, on desktop and phone rows", async () => {
    const { renderToStaticMarkup } = await import("react-dom/server");
    const { createElement } = await import("react");
    const { SiteHeaderA, blogHrefFor } = await import("@/components/brand-a/site-header");
    const { SiteFooterA } = await import("@/components/brand-a/site-footer");
    const { getChromeCopy } = await import("@/components/brand-a/copy/r11-chrome");
    const { getCopy } = await import("@/components/brand-a/copy");
    expect(blogHrefFor("ko")).toBe("/blog");
    for (const l of SITE_LOCALES) {
      const label = getChromeCopy(l).foot.blog;
      const html = renderToStaticMarkup(createElement(SiteHeaderA, { locale: l }));
      for (const cls of ["sq-menu", "sq-wrap sq-menu-m"]) {
        const links = anchors(menuOf(html, cls));
        expect(links.at(-1), `${l} ${cls}`).toEqual([blogHrefFor(l), label]);
        expect(links.at(-2)?.[1], `${l} ${cls}`).toBe(getCopy(l).nav.docs);
      }
      if (l !== "ko") expect(blogHrefFor(l), l).toBe("/blog/en");
      const foot = renderToStaticMarkup(createElement(SiteFooterA, { locale: l }));
      expect(foot, l).toContain(`<a href="${blogHrefFor(l)}">${label}</a>`);
      expect(html, l).not.toContain('aria-current="page"');
    }
  });

  it("the blog's header marks Blog as the current section and has no Blog pill of its own", async () => {
    const { renderToStaticMarkup } = await import("react-dom/server");
    const { createElement } = await import("react");
    const { BlogHeader } = await import("@/components/blog/blog-header");
    const ko = renderToStaticMarkup(createElement(BlogHeader, { locale: "ko", switchTo: "/blog/en" }));
    expect(anchors(menuOf(ko, "sq-menu")).at(-1)).toEqual(["/blog", "블로그"]);
    expect(ko).toMatch(/<a href="\/blog" aria-current="page">블로그<\/a>/);
    expect(ko).not.toContain("sq-xlink-on");
    expect(ko.split('href="/blog"').length - 1).toBe(2); // the desktop and phone nav rows, nothing else
    expect(ko).toContain('href="/blog/en"'); // the ko/en switch stays
    const en = renderToStaticMarkup(createElement(BlogHeader, { locale: "en" }));
    expect(en).toMatch(/<a href="\/blog\/en" aria-current="page">Blog<\/a>/);
  });

  it("with the blog on its own host: absolute from the site, relative on the blog itself", async () => {
    vi.resetModules();
    vi.stubEnv("NEXT_PUBLIC_BLOG_SUBDOMAIN", "1");
    try {
      const { renderToStaticMarkup } = await import("react-dom/server");
      const { createElement } = await import("react");
      const { SiteHeaderA, blogHrefFor } = await import("@/components/brand-a/site-header");
      const { BlogHeader } = await import("@/components/blog/blog-header");
      expect(blogHrefFor("ko")).toBe("https://blog.oh-my-design.kr");
      expect(blogHrefFor("ja")).toBe("https://blog.oh-my-design.kr/en");
      const site = renderToStaticMarkup(createElement(SiteHeaderA, { locale: "en" }));
      expect(anchors(menuOf(site, "sq-menu")).at(-1)).toEqual(["https://blog.oh-my-design.kr/en", "Blog"]);
      const blog = renderToStaticMarkup(createElement(BlogHeader, { locale: "ko" }));
      expect(blog).toMatch(/<a href="\/" aria-current="page">블로그<\/a>/);
      expect(blog).toContain('href="https://oh-my-design.kr/ko/design-systems"'); // the rest of the nav goes back to the site
    } finally {
      vi.unstubAllEnvs();
      vi.resetModules();
    }
  });

  it("the blog index has no back link to the main site above its title", () => {
    const src = read("src/components/blog/index-view.tsx");
    expect(src).not.toMatch(/siteHref\(|ArrowLeft|mainSite/);
    expect(read("src/lib/blog/i18n.ts")).not.toMatch(/mainSite/);
  });
});

describe("star pill (#4/#15): Taste's pill, no yellow", () => {
  it("grey star, regular-weight count, no yellow anywhere in the pill or the app button", () => {
    const css = read("src/components/brand-a/chrome.css");
    expect(css).toMatch(/\.sq-star\{[^}]*font:400 /);
    expect(css).toMatch(/\.sq-star-g\{color:var\(--sq-n400\)\}/);
    for (const f of ["src/components/brand-a/star-pill.tsx", "src/components/github-star-button.tsx", "src/components/brand-a/chrome.css"]) {
      const code = read(f).replace(/\/\*[\s\S]*?\*\//g, "").replace(/^\s*\/\/.*$/gm, "");
      expect(/#facc15|yellow|amber/i.test(code), f).toBe(false);
    }
  });
  it("draws GitHub's brand-kit Invertocat, not a redrawn one", async () => {
    const { GITHUB_MARK } = await import("@/components/brand-a/copy/r11-chrome");
    expect(GITHUB_MARK.viewBox).toBe("0 0 98 96");
    for (const f of ["src/components/brand-a/star-pill.tsx", "src/components/github-star-button.tsx"]) {
      expect(read(f), f).toMatch(/GITHUB_MARK/);
    }
  });
});

describe("footer (#15)", () => {
  it("every locale has every chrome string, the bottom line takes the year", async () => {
    const { getChromeCopy } = await import("@/components/brand-a/copy/r11-chrome");
    const keys = Object.keys(getChromeCopy("en").foot).sort();
    for (const l of SITE_LOCALES) {
      const t = getChromeCopy(l);
      expect(Object.keys(t.foot).sort(), l).toEqual(keys);
      for (const [k, v] of Object.entries(t.foot)) expect(v.trim().length, `${l} ${k}`).toBeGreaterThan(0);
      expect(t.foot.legal, l).toContain("{year}");
      expect(Object.keys(t.showcase.regions).sort(), l).toEqual(["JP", "KR", "TW"]);
    }
  });
  it("Korean chrome is in 해요체, not 합니다체", async () => {
    const { getChromeCopy } = await import("@/components/brand-a/copy/r11-chrome");
    const ko = JSON.stringify(getChromeCopy("ko"));
    expect(ko).not.toMatch(/습니다|입니다/);
    expect(read("src/components/analytics-consent.tsx")).not.toMatch(/습니다|입니다/);
  });
  it("renders the spec'd columns, icon links and one bottom line", async () => {
    const { renderToStaticMarkup } = await import("react-dom/server");
    const { createElement } = await import("react");
    const { SiteFooterA } = await import("@/components/brand-a/site-footer");
    const html = (l: (typeof SITE_LOCALES)[number]) => renderToStaticMarkup(createElement(SiteFooterA, { locale: l, current: l }));
    const ko = html("ko");
    for (const href of ["/ko/design-systems", "/docs/ko/skills", "/docs/ko", "/changelog", "https://github.com/kwakseongjae/oh-my-design", "https://www.npmjs.com/package/oh-my-design-cli", "https://github.com/kwakseongjae/oh-my-design/blob/main/LICENSE", "https://www.threads.com/@daon_k", "/privacy/ko", "/terms/ko"]) {
      expect(ko, href).toContain(`href="${href}"`);
    }
    expect(ko).toContain('aria-label="GitHub의 oh-my-design 저장소"');
    expect(ko).toContain('aria-label="Threads의 @daon_k"');
    expect(ko).toContain(`© ${new Date().getFullYear()} oh-my-design.`);
    expect(ko).toMatch(/<a href="\/ko" lang="ko" hrefLang="ko" aria-current="true">/);
    expect(html("ja")).toContain('href="/docs/ja/skills"');
    expect(html("zh-tw")).toContain('href="/docs/zh-tw/skills"');
    expect(fs.existsSync(path.join(WEB, "../LICENSE"))).toBe(true);
  });
  it("the blog's own index link is not listed twice", async () => {
    const { renderToStaticMarkup } = await import("react-dom/server");
    const { createElement } = await import("react");
    const { SiteFooterA } = await import("@/components/brand-a/site-footer");
    const { blogIndexHref, blogFeedHref } = await import("@/lib/site");
    const out = renderToStaticMarkup(createElement(SiteFooterA, { locale: "en", extraLinks: [{ label: "Blog", href: blogIndexHref("en") }, { label: "RSS", href: blogFeedHref("en") }] }));
    expect(out.split(`href="${blogIndexHref("en")}"`).length - 1).toBe(1);
    expect(out).toContain(`href="${blogFeedHref("en")}"`);
  });
});

describe("consent card (W9): presentation only", () => {
  const src = read("src/components/analytics-consent.tsx");
  it("Decline and Accept are the same button", () => {
    expect(src.match(/className=\{CHOICE\}/g)).toHaveLength(2);
    expect(src).not.toMatch(/--sq-primary/);
  });
  it("every locale names only Google Analytics and keeps the details link", () => {
    expect(src.match(/body: "[^"]*Google Analytics/g)).toHaveLength(5);
    expect(src).not.toMatch(/mixpanel/i);
    expect(fs.existsSync(path.join(process.cwd(), "src/lib/mixpanel.ts"))).toBe(false);
    expect(src).toMatch(/href=\{privacyHref\}/);
  });
  it("the consent gate itself is untouched", () => {
    for (const s of ["else if (known && !eu) applyGrant();", "else setShowBanner(true);", 'setStoredConsent("granted");', 'setStoredConsent("denied");', "revokeGAConsent();", 'window.addEventListener("omd:manage-consent", open);']) {
      expect(src, s).toContain(s);
    }
  });
});
